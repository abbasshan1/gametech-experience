console.log("Welcome to GameTech Experience");

/* Premium glass card tilt */
const glassCard = document.querySelector(".hero-layout .glass");

if (glassCard) {
    glassCard.addEventListener("mousemove", (e) => {
        const rect = glassCard.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateY = ((x / rect.width) - 0.5) * 12;
        const rotateX = ((y / rect.height) - 0.5) * -12;

        glassCard.style.transform =
            `perspective(1000px) translateY(-6px) scale(1.015) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    glassCard.addEventListener("mouseleave", () => {
        glassCard.style.transform =
            "perspective(1000px) translateY(0) scale(1) rotateX(0deg) rotateY(0deg)";
    });
}

document.addEventListener("DOMContentLoaded", () => {
    /* Navbar dropdowns — single handler */
    const dropdowns = document.querySelectorAll(".nav-dropdown");

    dropdowns.forEach((dropdown) => {
        const button = dropdown.querySelector(".drop-btn");
        if (!button) return;

        button.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();

            dropdowns.forEach((item) => {
                if (item !== dropdown) item.classList.remove("active");
            });

            dropdown.classList.toggle("active");
        });
    });

    document.addEventListener("click", () => {
        dropdowns.forEach((dropdown) => dropdown.classList.remove("active"));
    });

    /* Mobile menu */
    const navToggle = document.getElementById("navToggle");
    const navLinks = document.getElementById("navLinks");

    if (navToggle && navLinks) {
        navToggle.addEventListener("click", (e) => {
            e.stopPropagation();
            const open = navLinks.classList.toggle("open");
            navToggle.setAttribute("aria-expanded", open ? "true" : "false");
        });

        navLinks.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("open");
                navToggle.setAttribute("aria-expanded", "false");
            });
        });

        document.addEventListener("click", (e) => {
            if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) {
                navLinks.classList.remove("open");
                navToggle.setAttribute("aria-expanded", "false");
            }
        });
    }
});
