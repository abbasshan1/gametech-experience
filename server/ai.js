require("dotenv").config();

const SYSTEM_PROMPT = require("./prompt");

const MODEL =
    process.env.OPENROUTER_MODEL ||
    "nvidia/nemotron-3-ultra-550b-a55b:free";

function extractJson(text) {
    if (typeof text !== "string") {
        throw new Error("AI returned no text.");
    }

    const cleaned = text
        .replace(/```json/gi, "")
        .replace(/```/g, "")
        .trim();

    try {
        return JSON.parse(cleaned);
    } catch (_) {
        const start = cleaned.indexOf("{");
        const end = cleaned.lastIndexOf("}");

        if (start === -1 || end <= start) {
            throw new Error("AI did not return valid JSON.");
        }

        return JSON.parse(cleaned.slice(start, end + 1));
    }
}

function normaliseRecommendation(raw) {
    if (!raw || typeof raw !== "object") {
        throw new Error("AI did not return a recommendation object.");
    }

    const allowed = new Set([
        "CPU",
        "Motherboard",
        "GPU",
        "RAM",
        "Storage",
        "PSU",
        "Cooler",
        "Case"
    ]);

    const components = Array.isArray(raw.components)
        ? raw.components
              .filter(
                  (item) =>
                      item &&
                      typeof item.name === "string" &&
                      item.name.trim()
              )
              .map((item) => {
                  let category = String(item.category || "Component").trim();
                  const lower = category.toLowerCase();

                  if (lower === "cpu" || lower.includes("processor")) {
                      category = "CPU";
                  } else if (lower.includes("mother") || lower === "mobo") {
                      category = "Motherboard";
                  } else if (
                      lower.includes("gpu") ||
                      lower.includes("graphics") ||
                      lower.includes("video")
                  ) {
                      category = "GPU";
                  } else if (lower.includes("ram") || lower.includes("memory")) {
                      category = "RAM";
                  } else if (
                      lower.includes("storage") ||
                      lower.includes("ssd") ||
                      lower.includes("hdd") ||
                      lower.includes("nvme")
                  ) {
                      category = "Storage";
                  } else if (lower.includes("psu") || lower.includes("power")) {
                      category = "PSU";
                  } else if (
                      lower.includes("cool") ||
                      lower.includes("aio") ||
                      lower.includes("radiator")
                  ) {
                      category = "Cooler";
                  } else if (
                      lower.includes("case") ||
                      lower.includes("chassis") ||
                      lower.includes("cabinet")
                  ) {
                      category = "Case";
                  }

                  if (!allowed.has(category)) {
                      category = "Component";
                  }

                  let name = String(item.name || "").trim();
                  const catPrefix = new RegExp(
                      `^${category}\\s*[:\\-–—]?\\s*`,
                      "i"
                  );
                  name = name.replace(catPrefix, "").trim();

                  return {
                      category,
                      name,
                      reason: String(item.reason || "")
                          .replace(/\*\*/g, "")
                          .replace(/\*/g, "")
                          .trim()
                  };
              })
              .filter((item) => item.name)
        : [];

    if (!components.length) {
        throw new Error("AI did not return usable PC components.");
    }

    return {
        summary: String(raw.summary || "").trim(),
        components,
        budget_fit: String(raw.budget_fit || "").trim(),
        performance_focus: String(raw.performance_focus || "").trim(),
        upgrade_plan: String(raw.upgrade_plan || "").trim(),
        customer_note: String(raw.customer_note || "")
            .trim()
            .replace(
                /ensure your power outlet can handle a grounded plug[^.]*\.?/gi,
                ""
            )
            .replace(/\s{2,}/g, " ")
            .trim()
    };
}

async function callOpenRouter(messages) {
    const key = process.env.OPENROUTER_API_KEY;

    if (!key) {
        throw new Error(
            "OPENROUTER_API_KEY is not configured. Add it to .env."
        );
    }

    const response = await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${key}`,
                "Content-Type": "application/json",
                "HTTP-Referer":
                    "https://abbasshan1.github.io/gametech-experience/",
                "X-Title": "GameTech AI"
            },
            body: JSON.stringify({
                model: MODEL,
                messages,
                temperature: 0,
                top_p: 1
            })
        }
    );

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
        throw new Error(
            data?.error?.message ||
                `OpenRouter returned HTTP ${response.status}.`
        );
    }

    const content = data?.choices?.[0]?.message?.content;

    if (!content) {
        throw new Error("AI returned an empty response.");
    }

    return content.trim();
}

async function askGameTechAI(messages) {
    const safe = Array.isArray(messages)
        ? messages.filter(
              (m) =>
                  m &&
                  (m.role === "user" || m.role === "assistant") &&
                  typeof m.content === "string"
          )
        : [];

    return callOpenRouter([
        { role: "system", content: SYSTEM_PROMPT },
        ...safe
    ]);
}

async function recommendBuild(consultation) {
    const reply = await callOpenRouter([
        { role: "system", content: SYSTEM_PROMPT },
        {
            role: "user",
            content:
                "Create the final GameTech PC recommendation from this consultation. Think carefully about balance, workload and budget. Return JSON only.\n\n" +
                JSON.stringify(consultation, null, 2)
        }
    ]);

    return normaliseRecommendation(extractJson(reply));
}

module.exports = { askGameTechAI, recommendBuild };
