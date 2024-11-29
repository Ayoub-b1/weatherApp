import { afficherAlert, applySavedTheme, DailyTemperaturesTime, dataIsLoading, displayData, generateData, localRetrieve, localStock, toggleTheme } from "./fonctions.js";
import { autoLocate, FetchApiByCity, fetchWeatherIn5days, fetchWeatherUsingCoordinates } from "./geolocation.js";


window.addEventListener('DOMContentLoaded', async () => {


    let dataLoaded = false;


    dataIsLoading();

    let currWeather = {}


    applySavedTheme()
    try {

        let currCity = await localRetrieve('city')
        if (!currCity) {
            let latitude = await localRetrieve('latitude');
            let longitude = await localRetrieve('longitude')

            try {
                if (!latitude || !longitude) {
                    const { latitude: lat, longitude: lon } = await autoLocate();
                    latitude = lat;
                    longitude = lon
                    if (latitude, longitude) {
                        localStock('latitude', String(latitude))
                        localStock('longitude', String(longitude))
                    } else {
                        if (!city) {

                        }
                    }
                }
                await fetchWeatherUsingCoordinates(longitude, latitude)
                    .then((data) => {
                        displayData(generateData, data)
                    })
            } catch (error) {
                let overlay = document.createElement('div')
                overlay.classList.add('overlay')
                document.body.appendChild(overlay)
                document.querySelector('.search-bar').classList.add('hight')
                afficherAlert('info', 'Selectioner une ville ou activer votre localisation')

            }
        } else {
            await FetchApiByCity(currCity)
                .then((data) => {
                    displayData(generateData, data)
                })
        }
    } catch (error) {
        console.log(error);
    } finally {
        dataLoaded = true
    }





})