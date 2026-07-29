/* ==========================================
   GameTech AI Server
   GT-AI-003
========================================== */

require("dotenv").config();

const express = require("express");
const cors = require("cors");

const config = require("./config");
const askGameTechAI = require("./ai");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {

    res.json({

        success: true,

        status: "GameTech AI Backend Online",

        company: config.COMPANY,

        application: config.APP_NAME

    });

});
app.post("/chat", async (req, res) => {

    try {

        const { messages } = req.body;

        if (!messages || !Array.isArray(messages)) {

            return res.status(400).json({

                success: false,

                error: "messages array is required"

            });

        }

        const reply = await askGameTechAI(messages);

        res.json({

            success: true,

            reply

        });

    }

    catch (error) {

        console.error(error);

        res.status(500).json({

            success: false,

            error: "Internal Server Error"

        });

    }

});

app.listen(config.PORT, () => {

    console.log("====================================");
    console.log(" GameTech AI Server");
    console.log("====================================");
    console.log(`Running on http://localhost:${config.PORT}`);
    console.log("AI Provider : OpenRouter");
    console.log(`Model       : ${config.MODEL}`);
    console.log("====================================");

});