const apiKey = "PASTE_YOUR_API_KEY_HERE";

async function sendMessage() {
    const input = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");

    chatBox.innerHTML += `<p><b>You:</b> ${input.value}</p>`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: input.value }]
        })
    });

    const data = await response.json();
    const reply = data.choices[0].message.content;

    chatBox.innerHTML += `<p><b>AI:</b> ${reply}</p>`;
    input.value = "";
}
