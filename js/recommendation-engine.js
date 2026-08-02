/* ==========================================
   GT-007
   GameTech AI Processing Bridge
========================================== */
const API_URL = "https://less-operations-futures-use.trycloudflare.com";

async function generateRecommendation(customer) {


    console.log("Sending customer profile to GameTech AI:");

    console.log(customer);


    /*
       Future connection point:

       customer data
             ↓
       ChatGPT API
             ↓
       AI consultant response
    */


    const response = await fetch(`${API_URL}/chat`, {

    method: "POST",

    headers: {

        "Content-Type": "application/json"

    },

    body: JSON.stringify({

        messages: [

            {

                role: "user",

                content: `

Customer Consultation

Purpose:
${customer.purpose}

Budget:
${customer.budget}

Games / Software:
${customer.software}

Resolution:
${customer.resolution}

Setup:
${customer.peripherals}

Additional Notes:
${customer.notes}

Recommend a complete PC build for this customer.

`

            }

        ]

    })

});

const data = await response.json();

return data;


}