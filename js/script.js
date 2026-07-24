
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