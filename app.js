document.addEventListener("DOMContentLoaded", () => {
    const requestButton = document.getElementById("requestPermission");
    const notifyButton = document.getElementById("sendNotification");

    if (!requestButton || !notifyButton) {
        console.error("Buttons not found in the DOM!");
        return;
    }

    // Check notification permission on page load
    if (Notification.permission === "granted") {
        notifyButton.disabled = false;
    }

    // Request Notification Permission
    requestButton.addEventListener("click", async () => {
        const permission = await Notification.requestPermission();
        
        if (permission === "granted") {
            notifyButton.disabled = false; // Enable the button
            console.log("Notifications enabled.");
        } else {
            alert("Notification permission denied.");
        }
    });

    // Send Notification when button is clicked
    notifyButton.addEventListener("click", async () => {
        console.log("Send Notification button clicked.");
        
        if (Notification.permission === "granted") {
            console.log("Permission granted. Sending notification...");

            // Direct notification without service worker
            new Notification("Button Pressed!", {
                body: "You clicked the Send Notification button!",
                icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" // Example icon
            });
        } else {
            console.log("Permission denied or default. Requesting permission again.");
            const permission = await Notification.requestPermission();

            if (permission === "granted") {
                console.log("Permission granted after request. Sending notification...");
                new Notification("Button Pressed!", {
                    body: "You clicked the Send Notification button!",
                    icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                });
            } else {
                alert("Notification permission is not granted.");
            }
        }
    });
});
