/**
@function autoLocate
@description definire Latitude + Longitude automatiquement d'utilisateur
@returns Latitude + Longitude d utlisateur
@exemple
/return
// Exemple d'utilisation
autoLocate().then(coords => {
        console.log("Latitude:", coords.latitude);
        console.log("Longitude:", coords.longitude);
});
/Latitude: 33.840419
/Longitude: -6.915962
//autoLocate();
**/

async function autoLocate() {
    try {
        const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        const { latitude, longitude } = position.coords;
        return { latitude, longitude };
    } catch (error) {
        return { error: "Erreur de localisation : " + error.message };
    }
}


/**
 * @function FetchApiByCity
 * @description envoyer le demande vers un api avec une ville specifique en paramitre
 * 
 * @param {String} Ville - nom de ville
 * 
 * @returns {JSON} - returne information de la meteo de la ville passe en parametre 
 * 
 * @example
 * // Utilisation
 *   FetchApiByCity("kenitra")
 *   .then(reponse => console.log(reponse))
 *   .catch(erreur => console.error(erreur));
 */

function FetchApiByCity(Ville) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${Ville}&appid=66ea6a7786eefc2fae098993bffa11da&units=metric`; // URL définie à l'intérieur de la fonction

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        // xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    try {
                        const reponse = JSON.parse(xhr.responseText);
                        resolve(reponse);
                    } catch (erreur) {
                        reject("Erreur de parsing JSON: " + erreur);
                    }
                } else {
                    reject("Erreur de requête: " + xhr.status);
                }
            }
        };

        xhr.send();
    });
}

