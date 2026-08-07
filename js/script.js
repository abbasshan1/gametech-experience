
console.log("Welcome to GameTech Experience");

// ==========================================
// Premium Glass Card Tilt
// ==========================================

const glassCard = document.querySelector(".hero-layout .glass");

if(glassCard){

    glassCard.addEventListener("mousemove",(e)=>{

        const rect = glassCard.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 12;
        const rotateX = ((y / rect.height) - 0.5) * -12;

        glassCard.style.transform =
            `perspective(1000px)
             translateY(-6px)
             scale(1.015)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)`;

    });

    glassCard.addEventListener("mouseleave",()=>{

        glassCard.style.transform =
            "perspective(1000px) translateY(0) scale(1) rotateX(0deg) rotateY(0deg)";

    });

}
/* ==========================================
   GameTech Services Menu
========================================== */

const servicesBtn = document.getElementById("servicesBtn");
const servicesMenu = document.getElementById("servicesMenu");

if (servicesBtn && servicesMenu) {

    servicesBtn.addEventListener("click", function(e){

        e.preventDefault();

        servicesMenu.classList.toggle("show");

    });

    document.addEventListener("click", function(e){

        if(
            !servicesMenu.contains(e.target) &&
            !servicesBtn.contains(e.target)
        ){

            servicesMenu.classList.remove("show");

        }

    });

}

/* =========================================
   NAVBAR DROPDOWNS
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const dropdowns = document.querySelectorAll(".nav-dropdown");

    dropdowns.forEach(dropdown => {

        const button = dropdown.querySelector(".drop-btn");

        button.addEventListener("click", (e) => {

            e.preventDefault();
            e.stopPropagation();

            // Close all other dropdowns
            dropdowns.forEach(item => {
                if (item !== dropdown) {
                    item.classList.remove("active");
                }
            });

            // Toggle current dropdown
            dropdown.classList.toggle("active");

        });

    });

    // Close when clicking outside
    document.addEventListener("click", () => {
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove("active");
        });
    });

});

document.addEventListener("DOMContentLoaded", () => {
    const dropdowns = document.querySelectorAll(".nav-dropdown");

    dropdowns.forEach(dropdown => {
        const button = dropdown.querySelector(".drop-btn");

        button.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();

            dropdowns.forEach(item => {
                if (item !== dropdown) {
                    item.classList.remove("active");
                }
            });

            dropdown.classList.toggle("active");
        });
    });

    document.addEventListener("click", () => {
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove("active");
        });
    });

});