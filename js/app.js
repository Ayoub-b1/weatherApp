import { afficherAlert, applySavedTheme, DailyTemperaturesTime, dataIsLoading, displayData, generateData, localRetrieve, localStock, Search, SwithcTemp, toggleTheme, Ville } from "./fonctions.js";
import { autoLocate, FetchApiByCity, fetchWeatherIn5days, fetchWeatherUsingCoordinates } from "./geolocation.js";


window.addEventListener('DOMContentLoaded', async () => {


    let dataLoaded = false;


    dataIsLoading();

    let currWeather = {}

  

    Search()
    // SwithcTemp()
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
                        await fetchWeatherUsingCoordinates(longitude, latitude)
                            .then((data) => {
                                displayData(generateData, data)
                            })
                    } else {
                        let overlay = document.createElement('div')
                        overlay.classList.add('overlay')
                        document.body.appendChild(overlay)
                        document.querySelector('.search-bar').classList.add('hight')
                        afficherAlert('info', 'Selectioner une ville ou activer votre localisation')
                        
                        Ville().then(() => {
                            console.log('removing');
                            overlay.remove()
                            document.querySelector('.search-bar').classList.remove('hight')
                        })



                    }
                } else {
                    await fetchWeatherUsingCoordinates(longitude, latitude)
                        .then((data) => {
                            displayData(generateData, data)
                        })
                }

            } catch (error) {


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