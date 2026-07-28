/* ==========================================
   GT-007
   Customer Consultation Data
========================================== */
const consultation = {

    // Customer Information
    customerName: "",
    whatsapp: "",

    // Consultation
    purpose: "",
    budget: "",
    condition: "",
    games: "",
    software: "",
    resolution: "",
    monitor: "",
    peripherals: "",
    upgrade: "",
    notes: "",

    // AI Result
    recommendation: null

};

const questions = [

    {
        id: "customerName",
        question: "Welcome to GameTech 👋\n\nFirst, what is your name?",
        type: "text"
    },

    {
        id: "whatsapp",
        question: "Great! What's your WhatsApp number?",
        type: "text"
    },

    {
        id: "purpose",
        question: "What will you mainly use your computer for?",
        options: [
            "Gaming",
            "AI / Machine Learning",
            "Video Editing",
            "Office",
            "Software Development",
            "3D Rendering",
            "Mixed Use"
        ]
    },

    {
        id: "games",
        question: "Which games or software are important for you?",
        type: "text"
    },

    {
        id: "resolution",
        question: "What gaming or performance experience are you targeting?",
        options: [
            "1080p Gaming",
            "1440p / 2K Gaming",
            "4K Gaming",
            "Professional Workstation Performance"
        ]
    },

    {
        id: "budget",
        question: "What's your approximate budget?",
        options: [
            "Under PKR 150,000",
            "PKR 150k–250k",
            "PKR 250k–400k",
            "PKR 400k–600k",
            "PKR 600k+",
            "Custom Budget"
        ]
    },

    {
        id: "condition",
        question: "Would you prefer?",
        options: [
            "Brand New Components",
            "Best Value (New + Used)",
            "Used Components"
        ]
    },

    {
        id: "monitor",
        question: "Do you already have a monitor?",
        options: [
            "Yes, I have a monitor",
            "Need a monitor recommendation",
            "Need complete setup"
        ]
    },

    {
        id: "peripherals",
        question: "Do you need gaming accessories?",
        options: [
            "Keyboard + Mouse + Headset",
            "Full Gaming Setup",
            "PC Only"
        ]
    },

    {
        id: "upgrade",
        question: "Do you want future upgrade options?",
        options: [
            "Yes, upgrade path is important",
            "No, current performance is enough"
        ]
    },

    {
        id: "notes",
        question: "Anything else GameTech should know?",
        type: "text"
    }

];