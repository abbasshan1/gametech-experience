require("dotenv").config();

const path = require("path");
const express = require("express");
const cors = require("cors");

const config = require("./config");
const { askGameTechAI, recommendBuild } = require("./ai");

const app = express();
const ROOT = path.join(__dirname, "..");

app.use(cors());
app.use(express.json({ limit: "1mb" }));

// Serve the full website from the same process
app.use(express.static(ROOT));

app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        status: "GameTech AI Backend Online",
        company: config.COMPANY,
        application: config.APP_NAME,
        endpoints: ["POST /chat", "POST /recommend", "GET /api/health"]
    });
});

app.get("/api", (req, res) => {
    res.json({
        success: true,
        status: "GameTech AI Backend Online",
        company: config.COMPANY,
        application: config.APP_NAME,
        endpoints: ["POST /chat", "POST /recommend", "GET /api/health"]
    });
});

app.post("/chat", async (req, res) => {
    try {
        if (!Array.isArray(req.body?.messages)) {
            return res.status(400).json({
                success: false,
                error: "messages array is required"
            });
        }

        res.json({
            success: true,
            reply: await askGameTechAI(req.body.messages)
        });
    } catch (error) {
        console.error("CHAT ERROR:", error);
        res.status(500).json({
            success: false,
            error: error.message || "AI request failed."
        });
    }
});

app.post("/recommend", async (req, res) => {
    try {
        const consultation = req.body?.consultation;

        if (!consultation || typeof consultation !== "object") {
            return res.status(400).json({
                success: false,
                error: "consultation object is required"
            });
        }

        const recommendation = await recommendBuild(consultation);

        if (
            !Array.isArray(recommendation?.components) ||
            !recommendation.components.length
        ) {
            throw new Error("AI did not return usable PC components.");
        }

        res.json({
            success: true,
            consultation,
            recommendation
        });
    } catch (error) {
        console.error("RECOMMENDATION ERROR:", error);
        res.status(500).json({
            success: false,
            error:
                error.message ||
                "GameTech AI recommendation failed."
        });
    }
});

const PORT = Number(process.env.PORT) || Number(config.PORT) || 3000;

app.listen(PORT, () => {
    console.log(`GameTech site + AI server: http://127.0.0.1:${PORT}`);
    console.log(`Landing:     http://127.0.0.1:${PORT}/`);
    console.log(`GT AI page:  http://127.0.0.1:${PORT}/pages/gt-ai.html`);
    console.log(`Dashboard:   http://127.0.0.1:${PORT}/pages/dashboard.html`);
    console.log(`Health:      http://127.0.0.1:${PORT}/api/health`);
});
