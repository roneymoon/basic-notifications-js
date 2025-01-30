const button = document.getElementById('btn');

button.addEventListener('click', () => {
    // this will request permission to show notifications
    Notification.requestPermission().then((permission) => {
        // then if permission is granted, it will show the notification
        if(permission === 'granted') {
            const notification = new Notification(
                'Notification Title',
                {
                    body: 'This is notification body',
                    icon: 'favicon.ico',
                    tag: 'notification-tag',
                    data: {
                        url: 'https://www.google.com'
                    }
                }
            );

            // this listener will be triggered when the notification is clicked
            notification.addEventListener('click', (e) => {
                window.open(e.target.data.url, '_blank');
            });
        }
    })
})
