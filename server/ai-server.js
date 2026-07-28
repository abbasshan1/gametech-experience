
/* ==========================================
   GameTech AI Backend Bridge
   GT-AI-001
========================================== */


console.log("GameTech AI Server Starting...");


const http = require("http");


const server = http.createServer((req, res)=>{


    // Allow frontend communication

    res.setHeader(
        "Access-Control-Allow-Origin",
        "*"
    );


    res.setHeader(
        "Content-Type",
        "application/json"
    );


    if(req.url === "/"){

        res.end(JSON.stringify({

            status:
            "GameTech AI Backend Online"

        }));

        return;

    }


    res.end(JSON.stringify({

        message:
        "GameTech AI Ready"

    }));



});



server.listen(3000, ()=>{


    console.log(
        "GameTech AI Server running on port 3000"
    );


});