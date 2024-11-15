/**
 * @function showNotification
 * @description cette fonction consist a envoyer une notification a l'utilisateurs.
 * 
 * 
 * @returns {notification} -  la fonction retourne une notification.
 * 
 * @example
 * // Exemple d'utilisation
 * showNotification('Bienvenue', 'Au sein de notre site');

 */
(async () => {
    // create and show the notification
    const showNotification = () => {
        try {
            // create a new notification
        const notification = new Notification('JavaScript Notification API', {
            body: 'hhh',
            icon: './img/js.png',
        });
       console.log(notification);
        
        // close the notification after 30 seconds
        setTimeout(() => {
            notification.close();
        }, 30 * 1000);

        // navigate to a URL when clicked
        notification.addEventListener('click', () => {

            window.open('https://www.cmc.com', '_blank');
        });
        } catch (error) {
            console.error(error);
        }
    }

    // check notification permission
    document.addEventListener('DOMContentLoaded', async () => {
         Notification.requestPermission().then(() => {
             if('Notifications' in window){
                 console.log('Notifications');
             }else{
                 console.log('Notification');
             }
            showNotification();
         });
    });




})();