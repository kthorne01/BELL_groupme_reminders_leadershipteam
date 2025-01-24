const apiUrl = "https://nhg59wug76.execute-api.us-east-1.amazonaws.com/events"; // Replace with your working Invoke URL

document.getElementById("eventForm").onsubmit = async (e) => {
    e.preventDefault();

    const data = {
        eventName: document.getElementById("eventName").value,
        eventDate: document.getElementById("eventDate").value,
        eventTime: document.getElementById("eventTime").value,
    };

    try {
        const response = await fetch(apiUrl, {
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
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while submitting the event.");
    }
};
