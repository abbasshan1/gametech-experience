
/* ==========================================
   GameTech AI
   GT-AI-002
========================================== */

require("dotenv").config();

require("dotenv").config();

console.log("================================");
console.log("ENV TEST");
console.log("OPENROUTER_API_KEY =", process.env.OPENROUTER_API_KEY);
console.log("================================");

const OpenAI = require("openai");
const config = require("./config");
const systemPrompt = require("./prompt");

const client = new OpenAI({

apiKey: process.env.OPENROUTER_API_KEY,

    baseURL: "https://openrouter.ai/api/v1"

});

async function askGameTechAI(messages){

    try{

        const response = await client.chat.completions.create({

            model: config.MODEL,

            messages: [

                {
                    role: "system",
                    content: systemPrompt
                },

                ...messages

            ]

        });

        return response.choices[0].message.content;

    }

    catch(error){

    console.error("GAME TECH AI ERROR:");
    console.error(error.response?.data || error.message || error);

    return "AI_ERROR";

}

}

module.exports = askGameTechAI;