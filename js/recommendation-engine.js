/* ==========================================
   GT-007
   Recommendation Engine v2
========================================== */

function generateRecommendation(customer) {

    const recommendation = {

        cpu: null,
        gpu: null,
        estimatedPrice: 0,
        reasoning: []

    };

    // ---------- CPU ----------

    switch (customer.budget) {

        case "Under PKR 150,000":

            recommendation.cpu = HardwareDB.cpus.find(cpu => cpu.id === "r5-3600");
            recommendation.gpu = HardwareDB.gpus.find(gpu => gpu.id === "rtx2060s");

            break;

        case "PKR 150k–250k":

            recommendation.cpu = HardwareDB.cpus.find(cpu => cpu.id === "r5-5600");
            recommendation.gpu = HardwareDB.gpus.find(gpu => gpu.id === "rtx3060");

            break;

        case "PKR 250k–400k":

            recommendation.cpu = HardwareDB.cpus.find(cpu => cpu.id === "r5-7500f");
            recommendation.gpu = HardwareDB.gpus.find(gpu => gpu.id === "rtx5060");

            break;

        default:

            recommendation.cpu = HardwareDB.cpus.find(cpu => cpu.id === "r5-9600x");
            recommendation.gpu = HardwareDB.gpus.find(gpu => gpu.id === "rtx5060ti");

    }

    // ---------- Price ----------

    const cpuPrice =
        recommendation.cpu.price.new ??
        recommendation.cpu.price.used ??
        0;

    const gpuPrice =
        recommendation.gpu.price.new ??
        recommendation.gpu.price.used ??
        0;

    recommendation.estimatedPrice = cpuPrice + gpuPrice;

    // ---------- Reasoning ----------

    recommendation.reasoning.push(
        "Balanced CPU and GPU combination."
    );

    recommendation.reasoning.push(
        "Selected according to your stated budget."
    );

    return recommendation;

}