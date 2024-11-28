import { applySavedTheme, displayData, generateData, localRetrieve, localStock, toggleTheme } from "./fonctions.js";
import { autoLocate, fetchWeatherUsingCoordinates } from "./geolocation.js";


window.addEventListener('DOMContentLoaded', async () => {

   


    let currWeather = {}


    applySavedTheme()
    try {

        let latitude = await localRetrieve('latitude');
        let longitude = await localRetrieve('longitude')
        console.log(latitude);
        if (!latitude || !longitude) {
            const { latitude: lat, longitude: lon } = await autoLocate();
            latitude = lat;
            longitude = lon
            if (latitude, longitude) {
                localStock('latitude', String(latitude))
                localStock('longitude', String(longitude))
            }
        }
        await fetchWeatherUsingCoordinates(longitude, latitude)
            .then((data) => {
                displayData(generateData , data)
            })
    } catch (error) {
        console.log(error);
    }

    


})