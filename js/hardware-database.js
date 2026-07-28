
/* ==========================================
   GT-007
   GameTech Hardware Database
========================================== */

const HardwareDB = {

    cpus: [

        {
            id: "r5-3600",
            name: "AMD Ryzen 5 3600",
            brand: "AMD",
            socket: "AM4",
            ram: "DDR4",
            tier: "Entry",
            gamingScore: 75,
            productivityScore: 70,
            price: {
                used: 18000,
                new: null
            }
        },

        {
            id: "r5-5600",
            name: "AMD Ryzen 5 5600",
            brand: "AMD",
            socket: "AM4",
            ram: "DDR4",
            tier: "Budget",
            gamingScore: 85,
            productivityScore: 80,
            price: {
                used: 26000,
                new: 32000
            }
        },

        {
            id: "r5-7500f",
            name: "AMD Ryzen 5 7500F",
            brand: "AMD",
            socket: "AM5",
            ram: "DDR5",
            tier: "Mid",
            gamingScore: 92,
            productivityScore: 86,
            price: {
                new: 47000
            }
        },

        {
            id: "r5-9600x",
            name: "AMD Ryzen 5 9600X",
            brand: "AMD",
            socket: "AM5",
            ram: "DDR5",
            tier: "Performance",
            gamingScore: 96,
            productivityScore: 91,
            price: {
                new: 68000
            }
        }

    ],

    gpus: [

        {
            id: "rtx2060s",
            name: "RTX 2060 Super",
            brand: "NVIDIA",
            price: {
                used: 65000
            }
        },

        {
            id: "rtx3060",
            name: "RTX 3060 12GB",
            brand: "NVIDIA",
            price: {
                used: 78000,
                new: 98000
            }
        },

        {
            id: "rtx5060",
            name: "RTX 5060 8GB",
            brand: "NVIDIA",
            price: {
                new: 118000
            }
        },

        {
            id: "rtx5060ti",
            name: "RTX 5060 Ti 16GB",
            brand: "NVIDIA",
            price: {
                new: 158000
            }
        }

    ],

    motherboards: [

        {
            id: "b450",
            name: "B450 Motherboard",
            socket: "AM4",
            ram: "DDR4",
            price: {
                new: 22000
            }
        },

        {
            id: "b550",
            name: "B550 Motherboard",
            socket: "AM4",
            ram: "DDR4",
            price: {
                new: 32000
            }
        },

        {
            id: "a620",
            name: "A620 Motherboard",
            socket: "AM5",
            ram: "DDR5",
            price: {
                new: 34000
            }
        },

        {
            id: "b650",
            name: "B650 Motherboard",
            socket: "AM5",
            ram: "DDR5",
            price: {
                new: 52000
            }
        }

    ],

    rams: [

        {
            id: "16-ddr4",
            name: "16GB DDR4 3200MHz",
            type: "DDR4",
            price: {
                new: 9500
            }
        },

        {
            id: "32-ddr4",
            name: "32GB DDR4 3200MHz",
            type: "DDR4",
            price: {
                new: 18000
            }
        },

        {
            id: "16-ddr5",
            name: "16GB DDR5 5600MHz",
            type: "DDR5",
            price: {
                new: 14000
            }
        },

        {
            id: "32-ddr5",
            name: "32GB DDR5 6000MHz",
            type: "DDR5",
            price: {
                new: 27000
            }
        }

    ],

    ssds: [

        {
            id: "512nvme",
            name: "512GB NVMe SSD",
            price: {
                new: 9000
            }
        },

        {
            id: "1tbnvme",
            name: "1TB NVMe SSD",
            price: {
                new: 17000
            }
        }

    ],

    psus: [

        {
            id: "650bronze",
            name: "650W 80+ Bronze PSU",
            price: {
                new: 15000
            }
        },

        {
            id: "750bronze",
            name: "750W 80+ Bronze PSU",
            price: {
                new: 21000
            }
        }

    ],

    cases: [

        {
            id: "basic-argb",
            name: "Gaming Case with 4 ARGB Fans",
            price: {
                new: 15000
            }
        }

    ]

};