self.addEventListener("notificationclick", event => {
    event.notification.close();
    clients.openWindow("https://quartzcoding.github.io");
});
