
function sendSupportRequest() {

    const name = document.getElementById("customerName").value.trim();
    const whatsapp = document.getElementById("customerWhatsapp").value.trim();
    const device = document.getElementById("device").value.trim();
    const issue = document.getElementById("issue").value;
    const description = document.getElementById("description").value.trim();

    if (!name || !whatsapp || !device || !issue || !description) {
        alert("Please fill in all fields.");
        return;
    }

    const message = `*GameTech Technical Support Request*

👤 Name: ${name}

📱 WhatsApp: ${whatsapp}

💻 Device: ${device}

🛠 Issue: ${issue}

📝 Description:
${description}`;

    const url = "https://wa.me/923138988981?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
}