(function () {
    const workspace = document.getElementById("workspace");
    const workspaceTitle = document.getElementById("workspace-title");
    const workspaceContent = document.getElementById("workspace-content");
    const closeBtn = document.getElementById("closeWorkspace");

    const modules = {
        windows: { title: "Windows Systems", content: `<div class="module-panel"><div class="module-symbol">▦</div><h3>Windows Systems</h3><p>Reliable Windows PCs for home, office and professional workloads.</p></div>` },
        aiworkstation: { title: "AI Workstation", content: `<div class="module-panel"><div class="module-symbol">✦</div><h3>AI Workstations</h3><p>GPU-focused systems for local AI, development, image generation and machine learning.</p></div>` },
        business: { title: "Office Systems", content: `<div class="module-panel"><div class="module-symbol">▣</div><h3>Business Solutions</h3><p>Office PCs, CCTV, networking, servers and security infrastructure.</p></div>` },
        create: { title: "Video Render Machine", content: `<div class="module-panel"><div class="module-symbol">◆</div><h3>Creative Workstations</h3><p>Balanced systems for Premiere Pro, After Effects, DaVinci Resolve, Blender and 3D workloads.</p></div>` }
    };

    function openWorkspace(title, html) {
        workspaceTitle.textContent = title;
        workspaceContent.innerHTML = html;
        workspace.style.display = "flex";
        workspace.setAttribute("aria-hidden", "false");
    }

    function openAI() {
        openWorkspace("GT AI Consultant", getGameTechAI());
        startGTBuildConsultation();
    }

    document.getElementById("game")?.addEventListener("click", openAI);
    document.getElementById("topAiButton")?.addEventListener("click", openAI);
    document.getElementById("heroAiButton")?.addEventListener("click", openAI);
    document.getElementById("dockGame")?.addEventListener("click", openAI);

    Object.keys(modules).forEach(id => {
        document.getElementById(id)?.addEventListener("click", () => {
            const module = modules[id];
            openWorkspace(module.title, module.content);
        });
    });

    document.getElementById("dockCreate")?.addEventListener("click", () => document.getElementById("create")?.click());
    document.getElementById("dockBusiness")?.addEventListener("click", () => document.getElementById("business")?.click());
    document.getElementById("dockSupport")?.addEventListener("click", () => openWorkspace("Technical Support", `<div class="module-panel"><div class="module-symbol">+</div><h3>Technical Support</h3><p>Hardware diagnosis, BIOS, Windows, drivers and performance optimization.</p><button class="module-whatsapp" data-url="https://wa.me/923459075030">Connect with GameTech</button></div>`));
    document.getElementById("dockConnect")?.addEventListener("click", () => openWorkspace("Connect", `<div class="module-panel"><div class="module-symbol">◎</div><h3>Meet GameTech</h3><p>Talk directly with Shan or the GameTech team for your next system.</p><button class="module-whatsapp" data-url="https://wa.me/923459075030">Open WhatsApp</button></div>`));
    document.getElementById("dockHome")?.addEventListener("click", () => { workspace.style.display = "none"; workspace.setAttribute("aria-hidden", "true"); });

    document.querySelectorAll(".gt-link-app").forEach(button => {
        button.addEventListener("click", () => window.open(button.dataset.url, "_blank", "noopener,noreferrer"));
    });

    document.addEventListener("click", event => {
        const button = event.target.closest("[data-url].module-whatsapp");
        if (button) window.open(button.dataset.url, "_blank", "noopener,noreferrer");
    });

    closeBtn?.addEventListener("click", () => {
        workspace.style.display = "none";
        workspace.setAttribute("aria-hidden", "true");
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") closeBtn?.click();
    });

    function updateClock() {
        const clock = document.getElementById("clock");
        if (clock) clock.textContent = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    }
    updateClock();
    setInterval(updateClock, 1000);
})();
