/* ==========================================
   GameTech AI
   GT-006 Consultation Engine
========================================== */

let currentQuestion = 0;

function getGameTechAI() {

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

            <button id="startConsultation">
                Start Consultation
            </button>

        </div>

    </div>

    `;

}

function startConsultation() {

    currentQuestion = 0;

    const btn = document.getElementById("startConsultation");

    if (btn) {
        btn.remove();
    }

    showQuestion();

}

function showQuestion() {

    const chat = document.getElementById("gtChat");

    const q = questions[currentQuestion];

    if (!q) {
        finishConsultation();
        return;
    }

    let buttons = "";

    q.options.forEach(option => {

        buttons += `
            <button class="ai-option" onclick="selectAnswer('${option}')">
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

function selectAnswer(answer) {

    const q = questions[currentQuestion];

    consultation[q.id] = answer;

    const chat = document.getElementById("gtChat");

    chat.innerHTML += `

        <div class="user-message">

            <strong>You</strong>

            <p>${answer}</p>

        </div>

    `;

    currentQuestion++;

    showQuestion();

}

function finishConsultation() {

    const chat = document.getElementById("gtChat");

    chat.innerHTML += `

        <div class="ai-message">

            <strong>GameTech AI</strong>

            <p>

                Excellent.

                I've collected your consultation.

                Your GameTech recommendation will now be generated.

            </p>

        </div>

    `;

    console.log("Consultation Data:", consultation);

}

document.addEventListener("click", function (e) {

    if (e.target && e.target.id === "startConsultation") {

        startConsultation();

    }

});