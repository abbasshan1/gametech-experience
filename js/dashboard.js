// ===============================
// GameTech OS Dashboard Engine
// ===============================

const workspace = document.getElementById("workspace");
const workspaceTitle = document.getElementById("workspace-title");
const workspaceContent = document.getElementById("workspace-content");
const closeButton = document.getElementById("closeWorkspace");

// ---------- OPEN WORKSPACE ----------
function openWorkspace(title, content){

    workspace.style.display = "flex";

    workspaceTitle.innerText = title;

    workspaceContent.innerHTML = content;

}

// ---------- CLOSE WORKSPACE ----------
closeButton.addEventListener("click", () => {

    workspace.style.display = "none";

});

// ---------- GAME ----------
document.getElementById("game").addEventListener("click", () => {

    openWorkspace(

        "🎮 GAME MODULE",

        `
        <h2>Welcome to GameTech AI</h2>

        <p>Let's build your perfect gaming system.</p>

        <button id="startGameAI">
            Start AI Consultation
        </button>
        `

    );

});

// ---------- CREATE ----------
document.getElementById("create").addEventListener("click", () => {

    openWorkspace(

        "🖥 CREATE MODULE",

        "<h2>AI Workstations & Creative Systems</h2><p>Coming Soon...</p>"

    );

});

// ---------- SUPPORT ----------
document.getElementById("support").addEventListener("click", () => {

    openWorkspace(

        "🛠 SUPPORT MODULE",

        "<h2>Technical Support</h2><p>Coming Soon...</p>"

    );

});

// ---------- BUSINESS ----------
document.getElementById("business").addEventListener("click", () => {

    openWorkspace(

        "🏢 BUSINESS MODULE",

        "<h2>Business Infrastructure</h2><p>Coming Soon...</p>"

    );

});

// ---------- CONNECT ----------
document.getElementById("connect").addEventListener("click", () => {

    openWorkspace(

        "📹 CONNECT",

        "<h2>Meet Shan & Ertaza</h2><p>Coming Soon...</p>"

    );

});