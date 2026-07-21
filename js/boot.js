
console.log("Boot.js Loaded");

const progress = document.getElementById("progress");
const status = document.getElementById("boot-status");
const message = document.getElementById("boot-message");

const messages = [
    "Initializing AI Core...",
    "Loading Graphics Engine...",
    "Checking Hardware...",
    "Starting GameTech OS...",
    "System Ready..."
];

let percent = 0;

const boot = setInterval(() => {

    percent++;

    progress.style.width = percent + "%";
    status.textContent = percent + "%";

    if (percent === 20) message.textContent = messages[1];
    if (percent === 40) message.textContent = messages[2];
    if (percent === 60) message.textContent = messages[3];
    if (percent === 80) message.textContent = messages[4];

    if (percent >= 100) {

        clearInterval(boot);

        setTimeout(() => {

            window.location.href = "dashboard.html";

        },1000);

    }

},40);