
// API base:
// 1) window.GAME_TECH_API if set (recommended for production backend URL)
// 2) same origin when not on GitHub Pages
// 3) localhost for local file / local node server
const GAME_TECH_API = (function () {
    if (window.GAME_TECH_API) return String(window.GAME_TECH_API).replace(/\/$/, "");
    if (typeof location === "undefined") return "http://127.0.0.1:3000";
    const host = (location.hostname || "").toLowerCase();
    // GitHub Pages static site: no backend unless you set window.GAME_TECH_API (tunnel URL)
    if (host.endsWith("github.io")) {
        return "";
    }
    // Local npm start or any http host serving this app: same origin
    if (location.protocol.startsWith("http") && host) {
        return ""; // fetch("/recommend") on same host
    }
    return "http://127.0.0.1:3000";
})();

function gtApiUrl(path) {
    const base = GAME_TECH_API || "";
    if (!base) return path.startsWith("/") ? path : "/" + path;
    return base.replace(/\/$/, "") + (path.startsWith("/") ? path : "/" + path);
}

function gtIsStaticHostWithoutApi() {
    const host = (typeof location !== "undefined" && location.hostname || "").toLowerCase();
    return host.endsWith("github.io") && !GAME_TECH_API;
}

const GAME_TECH_WHATSAPP =
    window.GAME_TECH_WHATSAPP ||
    "923459075030";

let gameTechConversation = [];
let gtQuestionIndex = 0;
let gtQuestions = [];
let gtSelectedMulti = new Set();

function escGT(value) {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function resetConsultation() {
    Object.keys(consultation).forEach(key => {
        consultation[key] =
            Array.isArray(consultation[key])
                ? []
                : "";
    });

    consultation.purpose = [];
    consultation.recommendation = null;

    gtQuestions = getQuestions();
    gtQuestionIndex = 0;
    gtSelectedMulti = new Set();

    gameTechConversation = [
        {
            role: "assistant",
            content:
                "Welcome to GameTech AI. 👋\n\nI'll understand what you actually need before recommending your PC."
        }
    ];
}

function getGameTechAI() {
    resetConsultation();

    return `
        <div class="gt-ai">
            <div class="gt-ai-header">
                <div>
                    <h2>🤖 GameTech AI</h2>
                    <p class="gt-ai-tagline">
                        AI PC Consultant · GameTech Expertise
                    </p>
                </div>
                <span class="gt-ai-status">● ONLINE</span>
            </div>

            <div id="gtChat" class="gt-chat">
                ${renderGameTechMessages()}
            </div>

            <div id="gtConsultationActions"
                 class="gt-consultation-actions"></div>

            <div class="gt-input-area">
                <input
                    id="gtMessageInput"
                    type="text"
                    placeholder="GT AI consultation in progress..."
                    disabled
                >
                <button disabled>Send</button>
            </div>
        </div>
    `;
}

function renderGameTechMessages() {
    return gameTechConversation
        .map(message => {
            const content =
                escGT(message.content)
                    .replace(/\n/g, "<br>");

            if (message.role === "assistant") {
                return `
                    <div class="ai-message">
                        <strong>🤖 GameTech AI</strong>
                        <p>${content}</p>
                    </div>
                `;
            }

            return `
                <div class="user-message">
                    <strong>You</strong>
                    <p>${content}</p>
                </div>
            `;
        })
        .join("");
}

function updateGameTechChat() {
    const chat =
        document.getElementById("gtChat");

    if (!chat) return;

    chat.innerHTML =
        renderGameTechMessages();

    chat.scrollTop =
        chat.scrollHeight;
}

function startGTBuildConsultation() {
    resetConsultation();
    updateGameTechChat();
    renderGTQuestion();
    // Ensure the question panel is visible (important inside OS workspace modal)
    const actions = document.getElementById("gtConsultationActions");
    if (actions) {
        setTimeout(() => {
            actions.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }, 50);
    }
}

function renderGTQuestion() {
    const actions =
        document.getElementById(
            "gtConsultationActions"
        );

    if (!actions) return;

    const question =
        gtQuestions[gtQuestionIndex];

    if (!question) {
        finishGTConsultation();
        return;
    }

    gtSelectedMulti = new Set();

    let html = `
        <div class="gt-question">
            <strong>
                ${escGT(question.question).replace(
                    /\n/g,
                    "<br>"
                )}
            </strong>
    `;

    if (
        question.type === "multi"
    ) {
        html += `
            <p class="gt-multi-hint">Tap one or more options, then press <strong>Continue</strong>.</p>
            <div class="gt-option-grid">
                ${question.options
                    .map(
                        (option, index) => `
                            <button
                                type="button"
                                class="gt-option-btn gt-multi-option"
                                data-index="${index}"
                            >
                                ${escGT(option)}
                            </button>
                        `
                    )
                    .join("")}
            </div>

            <button
                type="button"
                class="gt-primary gt-continue"
                id="gtMultiContinue"
                disabled
            >
                Continue →
            </button>
        `;
    } else if (question.options) {
        html += `
            <div class="gt-option-grid">
                ${question.options
                    .map(
                        (option, index) => `
                            <button
                                type="button"
                                class="gt-option-btn"
                                data-index="${index}"
                            >
                                ${escGT(option)}
                            </button>
                        `
                    )
                    .join("")}
            </div>
        `;
    } else {
        html += `
            <div class="gt-inline-input">
                <input
                    id="gtConsultInput"
                    type="text"
                    placeholder="Type your answer..."
                >
                <button
                    id="gtTextContinue"
                    class="gt-primary"
                >
                    Continue
                </button>
            </div>
        `;
    }

    html += `</div>`;

    actions.innerHTML = html;

    actions
        .querySelectorAll(
            ".gt-option-btn"
        )
        .forEach(button => {
            button.addEventListener(
                "click",
                () => {
                    const option =
                        question.options[
                            Number(
                                button.dataset.index
                            )
                        ];

                    if (
                        question.type === "multi"
                    ) {
                        if (
                            gtSelectedMulti.has(
                                option
                            )
                        ) {
                            gtSelectedMulti.delete(
                                option
                            );
                            button.classList.remove(
                                "selected"
                            );
                        } else {
                            gtSelectedMulti.add(
                                option
                            );
                            button.classList.add(
                                "selected"
                            );
                        }

                        const next =
                            document.getElementById(
                                "gtMultiContinue"
                            );

                        if (next) {
                            next.disabled = gtSelectedMulti.size === 0;
                            if (gtSelectedMulti.size > 0) {
                                next.classList.add("gt-continue-ready");
                                next.scrollIntoView({ behavior: "smooth", block: "nearest" });
                            } else {
                                next.classList.remove("gt-continue-ready");
                            }
                        }

                        return;
                    }

                    answerGTConsultation(
                        option
                    );
                }
            );
        });

    const multiContinue =
        document.getElementById(
            "gtMultiContinue"
        );

    if (multiContinue) {
        multiContinue.addEventListener(
            "click",
            () =>
                answerGTConsultation(
                    Array.from(
                        gtSelectedMulti
                    )
                )
        );
    }

    const textContinue =
        document.getElementById(
            "gtTextContinue"
        );

    if (textContinue) {
        textContinue.addEventListener(
            "click",
            submitGTTextAnswer
        );
    }

    const input =
        document.getElementById(
            "gtConsultInput"
        );

    if (input) {
        input.addEventListener(
            "keydown",
            event => {
                if (
                    event.key === "Enter"
                ) {
                    event.preventDefault();
                    submitGTTextAnswer();
                }
            }
        );

        setTimeout(
            () => input.focus(),
            50
        );
    }
}

function submitGTTextAnswer() {
    const input =
        document.getElementById(
            "gtConsultInput"
        );

    if (
        !input ||
        !input.value.trim()
    ) {
        return;
    }

    answerGTConsultation(
        input.value.trim()
    );
}

function answerGTConsultation(answer) {
    const question =
        gtQuestions[gtQuestionIndex];

    if (!question) return;

    consultation[question.id] =
        question.type === "multi"
            ? answer
            : String(answer);

    gameTechConversation.push({
        role: "user",
        content: Array.isArray(answer)
            ? answer.join(", ")
            : String(answer)
    });

    gtQuestionIndex += 1;

    gtQuestions = getQuestions();

    const next =
        gtQuestions[gtQuestionIndex];

    if (!next) {
        updateGameTechChat();
        finishGTConsultation();
        return;
    }

    gameTechConversation.push({
        role: "assistant",
        content: next.question
    });

    updateGameTechChat();
    renderGTQuestion();
}

function moneyGT(value) {
    if (
        value === null ||
        value === undefined ||
        value === ""
    ) {
        return "Price to be confirmed";
    }

    return `PKR ${Number(value).toLocaleString(
        "en-PK"
    )}`;
}

async function finishGTConsultation() {
    const actions = document.getElementById("gtConsultationActions");
    if (actions) {
        actions.innerHTML = `
            <div class="gt-building">
                <span class="gt-ai-spinner">✦</span>
                GameTech AI is analysing your requirements and selecting a balanced build. Free models can take 30–90+ seconds — please wait...
            </div>`;
        actions.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    try {
        // On GitHub Pages with no tunnel URL configured → offline message
        if (gtIsStaticHostWithoutApi()) {
            throw new Error("OFFLINE_NO_API");
        }

        const controller = new AbortController();
        // Free models can take 1–3 minutes. Give them more time.
        const timeout = setTimeout(() => controller.abort("timeout"), 180000);

        const response = await fetch(gtApiUrl("/recommend"), {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ consultation }),
            signal: controller.signal
        });
        clearTimeout(timeout);

        const data = await response.json().catch(() => ({}));
        if (!response.ok || !data.success || !data.recommendation) {
            throw new Error(data.error || `Recommendation failed (${response.status})`);
        }
        consultation.recommendation = data.recommendation;
        renderGTBuildResult(data.recommendation);
    } catch (error) {
        console.error("GT AI recommendation error:", error);
        // Make abort/timeout messages clearer for the user
        if (error && (error.name === "AbortError" || /aborted|timeout/i.test(String(error.message || error)))) {
            showGTErrorPanel(new Error("The AI took too long (over 3 minutes). Free models are sometimes very slow — click Try AI again, or WhatsApp us your answers."));
        } else {
            showGTErrorPanel(error);
        }
    }
}

function buildConsultationSummaryText() {
    const lines = [
        `Name: ${consultation.customerName || "-"}`,
        `Purpose: ${Array.isArray(consultation.purpose) ? consultation.purpose.join(", ") : (consultation.purpose || "-")}`,
        `Games: ${consultation.games || "-"}`,
        `Resolution: ${consultation.resolution || "-"}`,
        `Refresh: ${consultation.refreshRate || "-"}`,
        `Budget: ${consultation.budget || "-"}`,
        `Condition: ${consultation.condition || "-"}`,
        `Notes: ${consultation.notes || "-"}`
    ];
    return lines.join("\n");
}

function showGTErrorPanel(error) {
    const actions = document.getElementById("gtConsultationActions");
    const raw = String((error && error.message) || error || "");
    const isOffline =
        /OFFLINE_NO_API/i.test(raw) ||
        ((/Failed to fetch/i.test(raw) ||
          /NetworkError/i.test(raw) ||
          /Load failed/i.test(raw) ||
          /ECONNREFUSED/i.test(raw)) &&
            !/Provider returned error/i.test(raw) &&
            !/OpenRouter/i.test(raw) &&
            !/empty response/i.test(raw));
    const isEmptyAI = /empty response/i.test(raw);

    let title;
    let detail;
    if (isOffline) {
        title = "AI consultant offline";
        detail =
            "The AI server is not reachable right now. This usually means the GameTech host PC is offline or the AI service is not running.";
    } else if (isEmptyAI) {
        title = "AI model returned no answer";
        detail =
            "The free AI model replied empty (common on busy free models). Click Try AI again — it often works on the second attempt. Or WhatsApp us with your answers.";
    } else {
        title = "AI recommendation failed";
        detail =
            "Something went wrong while building your recommendation. " +
            (raw ? "(" + raw.slice(0, 160) + ") " : "") +
            "Try again, or WhatsApp GameTech with your answers.";
    }

    const chatMsg = isOffline
        ? "GameTech AI consultant is not available from the host right now.\n\nOur AI server only runs when the GameTech PC is online. Please try again later, or contact us on WhatsApp with your requirements — we will build your PC manually."
        : isEmptyAI
          ? "The AI model returned an empty answer. This happens sometimes with free models. Please press Try AI again, or WhatsApp us your requirements."
          : "I could not complete the AI recommendation. " + raw.slice(0, 200);

    gameTechConversation.push({ role: "assistant", content: chatMsg });
    updateGameTechChat();

    const summary = buildConsultationSummaryText();
    const waText =
        "Hello GameTech, I used GT AI but need help with my PC build.\n\n" +
        summary;

    if (actions) {
        actions.innerHTML = `
            <div class="gt-offline-panel">
                <div class="gt-offline-title">${escGT(title)}</div>
                <p>${escGT(detail)}</p>
                <p class="gt-offline-hint">
                    You can WhatsApp your answers now, or try the AI again.
                </p>
                <div class="gt-build-actions">
                    <a class="gt-primary gt-wa-link"
                       href="https://wa.me/${GAME_TECH_WHATSAPP}?text=${encodeURIComponent(waText)}"
                       target="_blank" rel="noopener noreferrer">
                        WhatsApp GameTech with my answers
                    </a>
                    <button type="button" id="gtOfflineRetry">↻ Try AI again</button>
                    <button type="button" id="gtOfflineRestart">Start consultation again</button>
                </div>
            </div>`;

        document.getElementById("gtOfflineRetry")?.addEventListener("click", finishGTConsultation);
        document.getElementById("gtOfflineRestart")?.addEventListener("click", startGTBuildConsultation);

        actions.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
}

function renderGTBuildResult(recommendation) {
    const components = Array.isArray(recommendation.components) ? recommendation.components : [];
    const rows = components.map(component => {
        const cat = escGT(component.category || "Component");
        const name = escGT(component.name || "");
        const reason = escGT(component.reason || "");
        return `
        <div class="gt-build-item">
            <div class="gt-build-row">
                <span>${cat}</span>
                <strong>${name}</strong>
            </div>
            ${reason ? `<div class="gt-build-reason">${reason}</div>` : ""}
        </div>`;
    }).join("");

    gameTechConversation.push({ role: "assistant", content: "Your GameTech AI recommendation is ready. Review the complete build below, then connect with GameTech on WhatsApp for the final market quotation." });
    updateGameTechChat();

    const actions = document.getElementById("gtConsultationActions");
    if (!actions) return;

    actions.innerHTML = `
        <div class="gt-build-result">
            <div class="gt-build-title">
                <div>
                    <span>GAME TECH AI RECOMMENDATION</span>
                    <h3>${escGT(consultation.customerName || "Customer")}</h3>
                </div>
                <strong>AI SELECTED BUILD</strong>
            </div>
            <div class="gt-build-note">
                <strong>Why this build</strong><br>${escGT(recommendation.summary || "")}
                <br><br><strong>Budget Fit</strong><br>${escGT(recommendation.budget_fit || "")}
                <br><br><strong>Performance Focus</strong><br>${escGT(recommendation.performance_focus || "")}
                <br><br><strong>Upgrade Plan</strong><br>${escGT(recommendation.upgrade_plan || "")}
                ${recommendation.customer_note ? `<br><br><strong>GameTech Note</strong><br>${escGT(recommendation.customer_note)}` : ""}
            </div>
            <div class="gt-build-list">${rows}</div>
            <div class="gt-build-actions">
                <button class="gt-primary" id="gtWhatsAppButton">WhatsApp GameTech for Final Quotation</button>
                <button id="gtRebuildButton">↻ Start Again</button>
            </div>
        </div>`;

    // Scroll the full recommendation into view (critical inside OS workspace)
    actions.scrollIntoView({ behavior: "smooth", block: "nearest" });

    document.getElementById("gtWhatsAppButton")?.addEventListener("click", () => {
        const quote = components.map(c => `${c.category}: ${c.name}`).join("\n");
        const message =
            `Hello GameTech, I used GameTech AI and would like to discuss my PC quotation.\n\n` +
            `Name: ${consultation.customerName}\n` +
            `Purpose: ${Array.isArray(consultation.purpose) ? consultation.purpose.join(", ") : consultation.purpose}\n` +
            `Resolution: ${consultation.resolution}\n` +
            `Budget: ${consultation.budget}\n` +
            `Condition: ${consultation.condition}\n\n` +
            `GameTech AI recommended:\n${quote}\n\n` +
            `AI Summary: ${recommendation.summary}`;
        window.open(`https://wa.me/${GAME_TECH_WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    });

    document.getElementById("gtRebuildButton")?.addEventListener("click", startGTBuildConsultation);
}

window.getGameTechAI =
    getGameTechAI;

window.startGTBuildConsultation =
    startGTBuildConsultation;