function getLocation() {
    const chat = document.querySelector(".chat");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
            let userMsg = document.createElement("div");
            userMsg.className = "message user";
            userMsg.innerText = "Finding nearest services...";
            chat.appendChild(userMsg);

            // Fake nearby results (simple project)
            setTimeout(() => {
                let botMsg = document.createElement("div");
                botMsg.className = "message bot";
                botMsg.innerHTML = `
                🔧 Repair Shop: City Auto Repair (0.8 km)<br>
                ⛽ Gas Station: Main Fuel Station (1.2 km)
                `;
                chat.appendChild(botMsg);
                chat.scrollTop = chat.scrollHeight;
            }, 1000);
        });
    } else {
        alert("GPS not supported");
    }
}
