/* ==========================================
   GameTech AI
   GT-AI-Frontend v3
   Conversational AI Engine
========================================== */

const GAME_TECH_API = "https://earrings-awareness-constant-cartridges.trycloudflare.com";

let gameTechConversation = [];


function getGameTechAI(){

    gameTechConversation = [

        {
            role: "assistant",
            content:
            "Welcome to GameTech. 👋\n\nI'm your AI Technology Consultant.\n\nI can help you with Gaming PCs, Workstations, AI Systems, upgrades, FPS expectations, troubleshooting, and complete PC recommendations.\n\nHow can I help you today?"
        }

    ];


    return `

    <div class="gt-ai">

        <h2>
        🤖 GameTech AI
        </h2>

        <p class="gt-ai-tagline">
        Powered by GameTech Expertise
        </p>

        <hr>


        <div id="gtChat" class="gt-chat">

        ${renderGameTechMessages()}

        </div>


        <div class="gt-input-area">

            <input 
            id="gtMessageInput"
            type="text"
            placeholder="Ask GameTech AI..."
            onkeydown="if(event.key==='Enter') sendGameTechMessage()"
            >

            <button onclick="sendGameTechMessage()">
            Send
            </button>

        </div>


    </div>

    `;

}



function renderGameTechMessages(){

    return gameTechConversation.map(msg=>{


        if(msg.role==="assistant"){

            return `

            <div class="ai-message">

            <strong>🤖 GameTech AI</strong>

            <p>
            ${msg.content.replace(/\n/g,"<br>")}
            </p>

            </div>

            `;

        }


        return `

        <div class="user-message">

        <strong>You</strong>

        <p>
        ${msg.content}
        </p>

        </div>

        `;


    }).join("");

}



async function sendGameTechMessage(){


    const input = document.getElementById("gtMessageInput");


    if(!input) return;


    const message = input.value.trim();


    if(message==="") return;



    gameTechConversation.push({

        role:"user",

        content:message

    });


    input.value="";


    updateGameTechChat();


    const chat = document.getElementById("gtChat");


    chat.innerHTML += `

    <div class="ai-message">

    <strong>🤖 GameTech AI</strong>

    <p>
    Thinking...
    </p>

    </div>

    `;



    chat.scrollTop = chat.scrollHeight;



    try{


        const response = await fetch(
            `${GAME_TECH_API}/chat`,
            {

            method:"POST",

            headers:{

                "Content-Type":"application/json"

            },

            body:JSON.stringify({

                messages: gameTechConversation

            })

        });



        const data = await response.json();



        gameTechConversation.push({

            role:"assistant",

            content:data.reply

        });



        updateGameTechChat();



    }


    catch(error){


        console.error(
            "GameTech AI Error:",
            error
        );


        gameTechConversation.push({

            role:"assistant",

            content:
            "Sorry, I am unable to connect right now. Please contact GameTech directly."

        });


        updateGameTechChat();


    }



}



function updateGameTechChat(){


    const chat = document.getElementById("gtChat");


    if(!chat) return;


    chat.innerHTML =
    renderGameTechMessages();


    chat.scrollTop =
    chat.scrollHeight;


}