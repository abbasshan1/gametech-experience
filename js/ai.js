
/* ==========================================
   GameTech AI
   GT-006 Consultation Engine
========================================== */
const API_URL = "https://earrings-awareness-constant-cartridges.trycloudflare.com";
const consultation = {
    purpose: "",
    budget: "",
    games: [],
    software: [],
    resolution: "",
    monitor: "",
    peripherals: "",
    notes: ""
};


let currentQuestion = 0;


const questions = [

    {
        question: "What do you need the PC for?",
        options: [
            "Gaming",
            "Editing & Content Creation",
            "3D Rendering / AI Work",
            "Office & Professional Work"
        ],
        key: "purpose"
    },

    {
        question: "What is your budget range?",
        options: [
            "Under 150,000 PKR",
            "150,000 - 300,000 PKR",
            "300,000 - 600,000 PKR",
            "600,000+ PKR"
        ],
        key: "budget"
    },

    {
        question: "Which games or software do you use?",
        options: [
            "PUBG / Valorant / Esports",
            "GTA / AAA Games",
            "Adobe / Premiere / Blender",
            "AI Tools / Machine Learning"
        ],
        key: "software"
    },

    {
        question: "What resolution do you want?",
        options: [
            "1080p Gaming",
            "1440p Gaming",
            "4K Gaming",
            "Professional Display"
        ],
        key: "resolution"
    },

    {
        question: "Do you need monitor and peripherals?",
        options: [
            "Complete Setup",
            "PC Only",
            "Premium Gaming Setup"
        ],
        key: "peripherals"
    }

];



function getGameTechAI(){

return `

<div class="gt-ai">

<h2>🤖 GameTech AI</h2>

<p class="gt-ai-tagline">
Powered by GameTech Expertise
</p>

<hr>

<div id="gtChat">

<p>
Welcome to GameTech AI.<br>
I will help you build your perfect PC.
</p>

</div>


<div id="gtOptions"></div>


</div>

`;

}




function startConsultation(){

currentQuestion = 0;

showQuestion();

}




function showQuestion(){

let chat = document.getElementById("gtChat");
let optionsBox = document.getElementById("gtOptions");


if(currentQuestion >= questions.length){

generateBuild();

return;

}


let q = questions[currentQuestion];


chat.innerHTML += `

<p>
<b>GameTech AI:</b><br>
${q.question}
</p>

`;


optionsBox.innerHTML="";


q.options.forEach(option=>{


let btn=document.createElement("button");

btn.innerHTML=option;


btn.onclick=function(){

saveAnswer(q.key, option);

currentQuestion++;

showQuestion();

};


optionsBox.appendChild(btn);


});


}



function saveAnswer(key,value){


if(Array.isArray(consultation[key])){

consultation[key].push(value);

}
else{

consultation[key]=value;

}


}



async function generateBuild(){

    let chat = document.getElementById("gtChat");

    chat.innerHTML += `

    <hr>

    <p>
    <b>GameTech AI:</b><br>
    Thinking about the best build for you... ⏳
    </p>

    `;


    const messages = [

        {
            role: "user",
            content: `
Customer PC Requirement:

Purpose:
${consultation.purpose}

Budget:
${consultation.budget}

Games:
${consultation.software}

Resolution:
${consultation.resolution}

Setup:
${consultation.peripherals}

Please recommend a complete PC build.
`
        }

    ];


    try{


        const response = await fetch(`${API_URL}/chat`, {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify({

                messages

            })

        });


        const data = await response.json();


        chat.innerHTML += `

        <hr>

        <h3>🤖 GameTech AI Recommendation</h3>

        <p>
        ${data.reply.replace(/\n/g,"<br>")}
        </p>

        <button onclick="sendWhatsApp()">
        📲 Send Request To GameTech
        </button>

        `;


        console.log(data.reply);


    }


    catch(error){

        console.error(error);


        chat.innerHTML += `

        <p>
        ❌ Unable to connect with GameTech AI.
        </p>

        `;

    }


}
function sendWhatsApp(){


let message = `

GameTech AI Customer Request

Purpose:
${consultation.purpose}

Budget:
${consultation.budget}

Games:
${consultation.software}

Resolution:
${consultation.resolution}

Setup:
${consultation.peripherals}

Please contact me for PC build.

`;



let url =
"https://wa.me/?text=" 
+ encodeURIComponent(message);



window.open(url,"_blank");


}