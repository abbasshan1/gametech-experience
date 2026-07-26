const workspace = document.getElementById("workspace");
const workspaceTitle = document.getElementById("workspace-title");
const workspaceContent = document.getElementById("workspace-content");
const closeBtn = document.getElementById("closeWorkspace");

const modules = {

    game: {
    title: "GameTech AI",
    content: `

        <div class="gt-ai">

            <h2>🤖 GameTech AI</h2>

            <p class="ai-intro">

                Welcome to GameTech.

                I'm your personal AI PC Consultant.

                I'll ask a few questions and recommend
                the perfect PC based on your requirements.

            </p>

            <button id="startConsultation">

                Start Consultation

            </button>

            <div id="aiChat" style="display:none; margin-top:30px;">

                <div class="ai-message">

                    <strong>GameTech AI</strong>

                    <p>
                        What will you mainly use your computer for?
                    </p>

                </div>

                <div class="ai-options">

                    <button class="ai-option">🎮 Gaming</button>

                    <button class="ai-option">🎬 Video Editing</button>

                    <button class="ai-option">🤖 AI / Machine Learning</button>

                    <button class="ai-option">🏢 Office</button>

                    <button class="ai-option">💻 Software Development</button>

                    <button class="ai-option">🎨 3D / Rendering</button>

                    <button class="ai-option">🔀 Mixed Use</button>

                </div>

            </div>

        </div>

    `
},

    create: {
        title: "AI & Workstations",
        content: `
            <h3>AI Systems</h3>

            <p>
            RTX AI Workstations,
            Rendering PCs,
            Machine Learning,
            Video Editing,
            Unreal Engine,
            Blender,
            Stable Diffusion.
            </p>
        `
    },

    support: {
        title: "Technical Support",
        content: `
            <h3>Support Center</h3>

            <p>
            Hardware Diagnosis,
            BIOS Updates,
            Windows Installation,
            Driver Installation,
            Performance Optimization.
            </p>
        `
    },

    business: {
        title: "Business Solutions",
        content: `
            <h3>Enterprise</h3>

            <p>
            Office PCs,
            CCTV,
            Networking,
            Servers,
            Security Infrastructure.
            </p>
        `
    },

    connect: {
        title: "Meet GameTech",
        content: `
            <h3>Connect With Us</h3>

            <p>
            Meet Shan Abbas & Ertaza Abbas.

            Visit GameTech for professional consultation.
            </p>
        `
    }

};

Object.keys(modules).forEach(id => {

    document.getElementById(id).addEventListener("click", () => {

        workspace.style.display = "block";

        workspaceTitle.innerHTML = modules[id].title;

if (id === "game") {

    workspaceContent.innerHTML = getGameTechAI();

} else {

    workspaceContent.innerHTML = modules[id].content;

}

    });

});

closeBtn.onclick = () => {

    workspace.style.display = "none";

};

const startButton = document.getElementById("startButton");
const startMenu = document.getElementById("startMenu");

startButton.addEventListener("click", () => {

    startMenu.style.display =
        startMenu.style.display === "block"
            ? "none"
            : "block";

});

function updateClock(){

    const now = new Date();

    const time = now.toLocaleTimeString([],{
        hour:"2-digit",
        minute:"2-digit"
    });

    document.getElementById("clock").textContent = time;

}

setInterval(updateClock,1000);

updateClock();
console.log("Clock element:", document.getElementById("clock"));
document.querySelectorAll("#startMenu button").forEach(btn=>{

    btn.onclick=()=>{

        document.getElementById(btn.dataset.app).click();

        startMenu.style.display="none";

    }

});
