document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(link.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const chatHeader = document.getElementById("chat-header");
    const chatBody = document.getElementById("chat-body");
    const sendMessageBtn = document.getElementById("send-message");
    const messageInput = document.getElementById("chat-message-input");
    const chatMessages = document.getElementById("chat-messages");

    // Toggle chat visibility
    chatHeader.addEventListener("click", () => {
        chatBody.style.display = chatBody.style.display === "none" || chatBody.style.display === "" ? "flex" : "none";
    });

    // Send message
    sendMessageBtn.addEventListener("click", () => {
        const message = messageInput.value.trim();
        if (message) {
            const userMessage = document.createElement("div");
            userMessage.textContent = message;
            userMessage.style.textAlign = "right";
            userMessage.style.margin = "5px";
            chatMessages.appendChild(userMessage);

            // Auto-response (simulate real-time chat)
            setTimeout(() => {
                const botMessage = document.createElement("div");
                botMessage.textContent = "Gracias por contactarnos. Pronto te responderemos.";
                botMessage.style.textAlign = "left";
                botMessage.style.margin = "5px";
                chatMessages.appendChild(botMessage);
            }, 1000);

            messageInput.value = "";
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    });
});
