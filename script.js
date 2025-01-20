document.getElementById("eventForm").onsubmit = async (e) => {
    e.preventDefault();
    const data = {
        eventName: document.getElementById("eventName").value,
        eventDate: document.getElementById("eventDate").value,
        eventTime: document.getElementById("eventTime").value,
    };
    
    // Send event details to the backend
    const response = await fetch("https://<API-GATEWAY-ENDPOINT>", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (response.ok) {
        alert("Event submitted successfully!");
    } else {
        alert("Failed to submit the event.");
    }
};
