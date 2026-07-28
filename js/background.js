// ==========================================
// GameTech Background Engine
// Module 2 - RGB Orbs
// ==========================================

console.log("background.js loaded");

const canvas = document.createElement("canvas");
canvas.id = "gt-background";

document.body.prepend(canvas);

const ctx = canvas.getContext("2d");

function resizeCanvas(){

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

const orbs = [];

const colors = [
    "#59FF39",
    "#00E5FF",
    "#7C4DFF",
    "#FF2D55"
];

for(let i=0;i<25;i++){

    orbs.push({

        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,

        r:Math.random()*3+2,

        dx:(Math.random()-0.5)*0.4,
        dy:(Math.random()-0.5)*0.4,

        color:colors[Math.floor(Math.random()*colors.length)]

    });

}

function render(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    for(const orb of orbs){

        orb.x+=orb.dx;
        orb.y+=orb.dy;

        if(orb.x<0||orb.x>canvas.width) orb.dx*=-1;
        if(orb.y<0||orb.y>canvas.height) orb.dy*=-1;

        ctx.beginPath();

        ctx.fillStyle=orb.color;
        ctx.shadowColor=orb.color;
        ctx.shadowBlur=12;

        ctx.arc(orb.x,orb.y,orb.r,0,Math.PI*2);

        ctx.fill();

    }

    requestAnimationFrame(render);

}

render();