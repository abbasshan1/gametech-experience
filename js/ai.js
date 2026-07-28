
/* ==========================================
   GameTech AI
   GT-006 Consultation Engine
========================================== */

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




function generateBuild(){


let chat=document.getElementById("gtChat");

let build="";


if(consultation.budget.includes("600")){


build = `
🔥 Extreme Gaming Build

CPU: Ryzen 7 / Ryzen 9 Class Processor

GPU: RTX 5070 Ti / RTX 5080 Class

RAM: 32GB DDR5

Storage: 1TB NVMe SSD

Target:
4K Gaming + Content Creation
`;

}


else if(consultation.budget.includes("300")){


build = `
⚡ High Performance Build

CPU: Ryzen 7 7800X3D / Ryzen 9700X

GPU: RTX 5070 / RTX 5060 Ti

RAM: 32GB DDR5

Storage: 1TB NVMe

Target:
1440p Ultra Gaming
`;

}


else{


build = `
🎮 Smart Gaming Build

CPU: Ryzen 5 / Core i5 Class

GPU: RTX 5060 Class

RAM: 16GB DDR5

Storage: 512GB NVMe

Target:
1080p Gaming
`;

}



chat.innerHTML += `

<hr>

<h3>GameTech AI Recommendation</h3>

<p>
${build}
</p>


<button onclick="sendWhatsApp()">
📲 Send Request To GameTech
</button>

`;



console.log(consultation);


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