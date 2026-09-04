
/* ==========================================
   GameTech Window Manager
========================================== */

function createWindow(title, content) {

    const windowManager = document.getElementById("windowManager");

    // Don't run if the page doesn't have a window manager
    if (!windowManager) return;

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