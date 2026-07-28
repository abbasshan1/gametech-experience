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

    let html = "";

    if (q.type === "text") {

        html = `

        <div class="ai-message">

            <strong>GameTech AI</strong>

            <p>${q.question}</p>

            <div class="ai-input">

                <input
    class="userInput"
    type="text"
    placeholder="Type here..."
>
                <button onclick="submitTextAnswer()">
                    Next →
                </button>

            </div>

        </div>

        `;

    } else {

        let buttons = "";

        q.options.forEach(option => {

            buttons += `

            <button
                class="ai-option"
                onclick="selectAnswer('${option}')">

                ${option}

            </button>

            `;

        });

        html = `

        <div class="ai-message">

            <strong>GameTech AI</strong>

            <p>${q.question}</p>

            <div class="ai-options">

                ${buttons}

            </div>

        </div>

        `;

    }

    chat.innerHTML += html;

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
function submitTextAnswer() {

    const inputs = document.querySelectorAll(".userInput");

    const input = inputs[inputs.length - 1];

    if (!input) return;

    const value = input.value.trim();

    if (value === "") {
        alert("Please enter a value.");
        input.focus();
        return;
    }

    selectAnswer(value);

}

function finishConsultation() {

    const recommendation = generateRecommendation(consultation);

    const chat = document.getElementById("gtChat");

    chat.innerHTML += `

        <div class="ai-message">

            <strong>🤖 GameTech AI</strong>

            <h3>Your Recommended Build</h3>

            <hr>

            <p><strong>CPU:</strong> ${recommendation.cpu.name}</p>

            <p><strong>GPU:</strong> ${recommendation.gpu.name}</p>

            <p>
                <strong>Estimated Core Hardware Price:</strong>
                PKR ${recommendation.estimatedPrice.toLocaleString()}
            </p>

            <hr>

            <p><strong>Why this recommendation?</strong></p>

            <ul>

                ${recommendation.reasoning.map(reason =>
                    `<li>${reason}</li>`
                ).join("")}

            </ul>

            <p>

                This is the first stage of your GameTech recommendation.

            </p>

            <p>

                The complete GameTech build will also include:

            </p>

            <ul>

                <li>Compatible Motherboard</li>
                <li>DDR4 / DDR5 RAM</li>
                <li>NVMe SSD</li>
                <li>80+ Certified Power Supply</li>
                <li>Gaming Case</li>

            </ul>

        </div>

    `;

    console.log("Consultation:", consultation);
    console.log("Recommendation:", recommendation);

}
document.addEventListener("click", function (e) {

    if (e.target && e.target.id === "startConsultation") {

        startConsultation();

    }

});