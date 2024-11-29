import { applySavedTheme, displayData, generateData, localRetrieve, localStock, toggleTheme } from "./fonctions.js";
import { autoLocate, fetchWeatherUsingCoordinates } from "./geolocation.js";


window.addEventListener('DOMContentLoaded', async () => {


    let dataLoaded = false;
    let places = document.querySelectorAll('.loading')

    places.forEach(place => {
        place.textContent = '-- --'
    })

    let currWeather = {}


    applySavedTheme()
    try {
        let latitude = await localRetrieve('latitude');
        let longitude = await localRetrieve('longitude')
        let currCity = await localRetrieve('city')



        if (!latitude || !longitude) {
            const { latitude: lat, longitude: lon } = await autoLocate();
            latitude = lat;
            longitude = lon
            if (latitude, longitude) {
                localStock('latitude', String(latitude))
                localStock('longitude', String(longitude))
            }else{
                if(!city){
                    
                }
            }
        }
        await fetchWeatherUsingCoordinates(longitude, latitude)
            .then((data) => {
                displayData(generateData, data)
            })
    } catch (error) {
        console.log(error);
    } finally {
        dataLoaded = true
    }




})