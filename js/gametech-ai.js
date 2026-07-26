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

                <p>
                    Welcome to GameTech.
                </p>

                <p>
                    I'm your personal AI PC Consultant.
                </p>

                <p>
                    I'll help you design the perfect complete PC build.
                </p>

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

    const chat = document.getElementById("gtChat");

    chat.innerHTML += `

        <div class="user-message">

            <strong>You</strong>

            <p>Start Consultation</p>

        </div>

        <div class="ai-message">

            <strong>GameTech AI</strong>

            <p>
                Great! Let's begin.
            </p>

            <p>
                What will you mainly use your computer for?
            </p>

        </div>

    `;

    document.getElementById("startConsultation").remove();

}