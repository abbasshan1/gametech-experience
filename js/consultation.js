const consultation = {
    customerName: "",
    purpose: [],
    games: "",
    resolution: "",
    refreshRate: "",
    monitor: "",
    software: "",
    creativeWorkload: "",
    aiWorkload: "",
    budget: "",
    condition: "",
    existingHardware: "",
    peripherals: "",
    upgrade: "",
    aesthetics: "",
    notes: ""
};

const baseQuestions = [
    {
        id: "customerName",
        question:
            "Welcome to GameTech 👋\n\nFirst, what is your name?",
        type: "text"
    },
    {
        id: "purpose",
        question:
            "What will you mainly use the PC for? Select everything that applies.",
        type: "multi",
        options: [
            "Gaming",
            "Video Editing",
            "3D / Blender / Rendering",
            "AI / Machine Learning",
            "After Effects / Motion Graphics",
            "Software Development",
            "Office / Business",
            "Mixed Use"
        ]
    },
    {
        id: "games",
        question:
            "Which games do you play or plan to play? Include any important titles.",
        type: "text",
        when: c =>
            c.purpose.includes("Gaming")
    },
    {
        id: "resolution",
        question:
            "What resolution do you want the system to handle?",
        options: [
            "1080p",
            "1440p / 2K",
            "4K",
            "6K / 8K / Professional",
            "Not sure — recommend for me"
        ]
    },
    {
        id: "refreshRate",
        question:
            "What monitor refresh rate are you targeting?",
        options: [
            "60–75Hz",
            "120–144Hz",
            "165Hz",
            "240Hz+",
            "Not sure"
        ],
        when: c =>
            c.purpose.includes("Gaming")
    },
    {
        id: "monitor",
        question:
            "Do you already have a monitor?",
        options: [
            "Yes, I already have one",
            "No — recommend one",
            "I need a complete setup"
        ]
    },
    {
        id: "software",
        question:
            "Which software do you use for editing, rendering or professional work?",
        type: "text",
        when: c =>
            c.purpose.some(item =>
                /Video Editing|3D|Rendering|After Effects|Software Development|Office|Mixed/i.test(
                    item
                )
            )
    },
    {
        id: "creativeWorkload",
        question:
            "What is the heaviest creative workload you expect?",
        options: [
            "1080p / light work",
            "2K / medium work",
            "4K / heavy work",
            "6K/8K / professional work",
            "3D rendering / simulation",
            "Not sure — recommend for me"
        ],
        when: c =>
            c.purpose.some(item =>
                /Video Editing|3D|Rendering|After Effects|Mixed/i.test(
                    item
                )
            )
    },
    {
        id: "aiWorkload",
        question:
            "What will you use AI for?",
        options: [
            "Local AI / LLMs",
            "AI image generation",
            "AI video generation",
            "Machine learning / development",
            "Multiple AI workloads",
            "Not sure"
        ],
        when: c =>
            c.purpose.includes("AI / Machine Learning")
    },
    {
        id: "budget",
        question:
            "What is your total PC budget?",
        type: "text"
    },
    {
        id: "condition",
        question:
            "What component condition do you prefer?",
        options: [
            "Brand New",
            "Used",
            "Mixed — New + Used",
            "Best Value — you decide"
        ]
    },
    {
        id: "existingHardware",
        question:
            "Do you already have any components you want to keep? If yes, list the exact models.",
        type: "text"
    },
    {
        id: "peripherals",
        question:
            "Do you need anything besides the PC?",
        options: [
            "PC Only",
            "Monitor",
            "Keyboard + Mouse + Headset",
            "Complete Gaming Setup",
            "Not sure"
        ]
    },
    {
        id: "upgrade",
        question:
            "How important is future upgradeability?",
        options: [
            "Very important — keep upgrade options open",
            "Somewhat important",
            "Not important — maximize current performance"
        ]
    },
    {
        id: "aesthetics",
        question:
            "Any appearance or cooling preferences?",
        options: [
            "Performance first",
            "RGB / Gaming look",
            "Clean / Minimal",
            "White build",
            "Quiet operation",
            "No preference"
        ]
    },
    {
        id: "notes",
        question:
            "Anything else GameTech AI should know before making your recommendation?",
        type: "text"
    }
];

function getQuestions() {
    return baseQuestions.filter(
        question =>
            !question.when ||
            question.when(consultation)
    );
}
