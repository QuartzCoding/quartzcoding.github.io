document.addEventListener("DOMContentLoaded", async () => {
    const notifyButton = document.getElementById("sendNotification");

    if (!notifyButton) {
        console.error("Send Notification button not found!");
        return;
    }

    // Check notification permission
    if (Notification.permission === "granted") {
        notifyButton.disabled = false;
    }

    notifyButton.addEventListener("click", async () => {
        if (Notification.permission === "granted") {
            new Notification("New Notification!", {
                body: "This works on both iOS and desktop!",
                icon: "icon.png"
            });
        } else {
            const permission = await Notification.requestPermission();
            if (permission === "granted") {
                new Notification("New Notification!", {
                    body: "Now enabled!",
                    icon: "icon.png"
                });
            } else {
                alert("Notifications are blocked.");
            }
        }
    });
});
