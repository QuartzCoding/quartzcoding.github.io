self.addEventListener("push", event => {
    const data = event.data ? event.data.text() : "New notification!";
    event.waitUntil(
        self.registration.showNotification("Notification", {
            body: data,
            icon: "icon.png"
        })
    );
});
