
/**
 * @function afficherAlert
 * @description affiche des alertes dynamiques animées.

/**
 * Affiche une alerte dynamique de type Bootstrap avec animation.
 * L'alerte apparaît en bas de la fenêtre, au centre, avec un effet de montée et de mise à l'échelle,
 * et disparaît automatiquement après 5 secondes.
 *
 * @param {string} type - Le type de l'alerte (ex: 'success', 'danger', 'warning', 'info').
 * @param {string} message - Le message à afficher dans l'alerte.
 *
 * @example
 * afficherAlert('success', 'Opération réussie !');
 * afficherAlert('danger', 'Une erreur est survenue.');
 */


export function afficherAlert(type, message) {
    let alert = document.createElement('div');
    alert.className = `alert alert-${type} toast-alert position-fixed start-50 translate-middle-x`;
    alert.textContent = message;

    document.body.appendChild(alert);

    setTimeout(() => {
        alert.classList.add('show');
    }, 10);

    setTimeout(() => {
        alert.classList.remove('show');
        alert.remove();
    }, 5000);
}

/**
 * @function showNotification
 * @description cette fonction consist a envoyer une notification a l'utilisateurs.
 * @param{body} le contenu de notification
 * @param {icon} l'imge afficher dans la notification 
 * @param {title} le titre du notification
 * @returns {notification} -  la fonction retourne une notification.
 * @example
 * // Exemple d'utilisation
 * showNotification('Bienvenue', 'Au sein de notre site');

*/


function showNotification(title, body, icon) {
    try {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                const notification = new Notification(title, {
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

/** 
 * @function Ville
 * @description Récupere la valeur de la localisation d'un input et retourne sa valeur
 * 
 * @return {ville} - La valeur de la ville
 * 
 * @exemple
 * //Retourne Rabat
*/


function Ville() {
    let ville = document.getElementById("InputVille").value;

    if (ville.trim() === "") {
        afficherAlert('Veuillez entrer une ville valide', 'danger')
        return
    }
    return ville
}

/** 
 * @function toggleTheme
 * @description changer entre le mode eclaire ou sombre 
 * 
 * @return {void} 
 * 

*/

function toggleTheme() {
    const body = document.body;

    body.classList.toggle('dark-theme');

    const isDarkMode = body.classList.contains('dark-theme');
    //TODO : implement using preference to store the preference
}
/** 
 * @function applySavedTheme
 * @description recupere le theme preferer d'utilisateur
 * 
 * @return {void} 
 * 

*/
function applySavedTheme() {
    // TODO : implement using preference to store the preference

    if (savedTheme) {
        document.body.classList.add(savedTheme);
    }
}