    /**
     * @function showNotification
     * @description cette fonction consist a envoyer une notification a l'utilisateurs.
     * @param{body} le contenu de notification
     * @param {icon} l'imge afficher dans la notification 
     * @returns {notification} -  la fonction retourne une notification.
     * @example
     * // Exemple d'utilisation
     * showNotification('Bienvenue', 'Au sein de notre site');

    */
   
        
        function showNotification(body, icon) {
            try {
                Notification.requestPermission().then(permission => {
                    if (permission === "granted") {
                        const notification = new Notification('JavaScript Notification API', {
                            body: body, 
                            icon: icon 
                        });
                        console.log(notification);
                        setTimeout(() => {
                            notification.close();
                        }, 30 * 1000);
                    } else {
                        console.log("Permission de notification refusée.");
                    }
                });
            } catch (error) {
                console.error(error);
            }
        }
        
        
        