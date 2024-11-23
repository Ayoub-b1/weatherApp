import { generateData, localStock } from "./fonctions.js";
import { autoLocate, fetchWeatherUsingCoordinates } from "./geolocation.js";


window.addEventListener('DOMContentLoaded', async () => {

    let currWeather = {}
    try {
        // TODO : implement importation logic and check if no then autolocate
        const { latitude, longitude } = await autoLocate();
        if(latitude , longitude){
            localStock('latitude' , String(latitude))
            localStock('longitude' , String(longitude))
            await fetchWeatherUsingCoordinates(longitude , latitude)
            .then((data) => 
                {
                    currWeather = generateData(data)
                })
        }
        console.log(currWeather);
    } catch (error) {
        console.log(error);
    }
})