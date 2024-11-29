import { afficherAlert } from "./fonctions.js";

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


export async function autoLocate() {
    try {
        const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        const { latitude, longitude } =  position.coords;
        return { latitude, longitude };
    } catch (error) {
        afficherAlert('warning' , error.message)
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

export function FetchApiByCity(Ville) {
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

/**
 * @function fetchWeatherUsingCoordinates
 * Fetches weather data using the given coordinates (longitude and latitude) from the OpenWeather API.
 * 
 * @param {number} longitude - The geographical longitude of the location.
 * @param {number} latitude - The geographical latitude of the location.
 * @returns {Promise<Object>} - A Promise that resolves to the weather data in JSON format if the request is successful.
 * 
 * @example
 * fetchWeatherUsingCoordinates(-122.4194, 37.7749)
 *   .then(data => console.log(data))
 *   .catch(error => console.error(error));
 */
export function fetchWeatherUsingCoordinates(longitude, latitude) {
    const apiKey = '66ea6a7786eefc2fae098993bffa11da'; // Consider storing this securely
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric;`

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', url, true);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) { // 4 means request is complete
                if (xhr.status === 200) { // 200 means success
                    const data = JSON.parse(xhr.responseText);
                    console.log('Weather Data:', data);
                    resolve(data); // Resolving the promise with the weather data
                } else {
                    afficherAlert('danger', 'Error: ' + xhr.status + ' - ' + xhr.statusText);
                    reject(new Error(`Error: ${xhr.status} - ${xhr.statusText}`)); // Rejecting the promise with the error
                }
            }
        };

        xhr.send();
    });
}

/**
 * @function fetchWeatherIn5days
 * Fetches weather data in 5 days using the given city from the OpenWeather API.
 * 
 * @param {string} ville - The name of the city wanted.
 * @returns {Promise<Object>} - A Promise that resolves to the weather data in JSON format if the request is successful.
 * 
 * @example
 * fetchWeatherUsingCoordinates('Rabat')
 *   .then(data => console.log(data))
 *   .catch(error => console.error(error));
 */

export function fetchWeatherIn5days(ville) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${ville}&lang=fr&appid=66ea6a7786eefc2fae098993bffa11da`;

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', url, true);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) { // 4 means request is complete
                if (xhr.status === 200) { // 200 means success
                    const data = JSON.parse(xhr.responseText);
                    resolve(data); // Resolving the promise with the weather data
                } else {
                    console.error( ` Error: ${xhr.status} - ${xhr.statusText}`);
                    reject(new Error(`Error: ${xhr.status} - ${xhr.statusText}`)); // Rejecting the promise with the error
                }
            }
        };

        xhr.send();
    });
}

