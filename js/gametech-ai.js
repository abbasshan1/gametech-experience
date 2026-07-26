
/* ==========================================
   GameTech AI
   GT-006 Consultation Engine v2
========================================== */

const consultation = {};

let currentQuestion = 0;

const consultationFlow = [

{
    key: "purpose",
    question: "What will you mainly use your computer for?",
    options: [
        "🎮 Gaming",
        "🤖 AI / Machine Learning",
        "🎬 Video Editing",
        "🎨 3D Rendering",
        "💻 Software Development",
        "🏢 Office",
        "🔀 Mixed Use"
    ]
},

{
    key: "budget",
    question: "What is your approximate budget?",
    options: [
        "Under PKR 100,000",
        "PKR 100,000 - 150,000",
        "PKR 150,000 - 250,000",
        "PKR 250,000 - 400,000",
        "PKR 400,000+"
    ]
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

<div class="ai-message">

<strong>GameTech AI</strong>

<p>Welcome to GameTech.</p>

<p>I'm your personal AI PC Consultant.</p>

<p>I'll recommend the perfect complete PC build.</p>

</div>

</div>

<div class="ai-actions">

<button id="startConsultation"
onclick="startConsultation()">

Start Consultation

</button>

</div>

</div>

`;

}

function startConsultation(){

document.getElementById("startConsultation").remove();

currentQuestion = 0;

showQuestion();

}

function showQuestion(){

const chat = document.getElementById("gtChat");

const q = consultationFlow[currentQuestion];

let buttons = "";

q.options.forEach(option=>{

buttons += `
<button onclick="selectAnswer('${option}')">
${option}
</button>
`;

});

chat.innerHTML += `

<div class="ai-message">

<strong>GameTech AI</strong>

<p>${q.question}</p>

<div class="ai-options">

${buttons}

</div>

</div>

`;

chat.scrollTop = chat.scrollHeight;

}

function selectAnswer(answer){

const q = consultationFlow[currentQuestion];

consultation[q.key] = answer;

const chat = document.getElementById("gtChat");

chat.innerHTML += `

<div class="user-message">

<strong>You</strong>

<p>${answer}</p>

</div>

`;

currentQuestion++;

if(currentQuestion < consultationFlow.length){

showQuestion();

}else{

finishConsultation();

}

}

function finishConsultation(){

const chat = document.getElementById("gtChat");

chat.innerHTML += `

<div class="ai-message">

<strong>GameTech AI</strong>

<p>

Excellent.

I've collected the initial consultation.

The next step will analyse your answers
and generate your GameTech recommendation.

</p>

</div>

`;

console.log(consultation);

}