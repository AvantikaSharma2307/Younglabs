async function submitName() {
    const name = document.getElementById("nameInput").value;
    const responseMessage = document.getElementById("responseMessage");

    if (!name) {
        responseMessage.textContent = "Please enter your name.";
        return;
    }

    try {
        const response = await fetch(`http://localhost:3000/api/greet?name=${encodeURIComponent(name)}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        responseMessage.textContent = data.message; 
    } catch (error) {
        responseMessage.textContent = "Error fetching greeting.";
        console.error("Fetch error:", error);
    }
}
