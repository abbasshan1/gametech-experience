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
    }

];