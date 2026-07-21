const windowManager = document.getElementById("windowManager");

function createWindow(title, content) {

    const windowBox = document.createElement("div");
    windowBox.className = "gt-window";

    windowBox.innerHTML = `
        <div class="gt-titlebar">
            <span>${title}</span>
            <button class="gt-close">✕</button>
        </div>

        <div class="gt-content">
            ${content}
        </div>
    `;

    windowManager.appendChild(windowBox);

    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    const titleBar = windowBox.querySelector(".gt-titlebar");

    titleBar.addEventListener("mousedown", (e) => {
        isDragging = true;
        offsetX = e.clientX - windowBox.offsetLeft;
        offsetY = e.clientY - windowBox.offsetTop;
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;

        windowBox.style.left = (e.clientX - offsetX) + "px";
        windowBox.style.top = (e.clientY - offsetY) + "px";
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
    });

    windowBox.querySelector(".gt-close").addEventListener("click", () => {
        windowBox.remove();
    });
}

createWindow(
    "Welcome to GameTech OS",
    `
    <h2>GameTech Window Manager</h2>
    <p>This is the first window created by JavaScript.</p>
    <p>Next we will make windows draggable.</p>
    `
);