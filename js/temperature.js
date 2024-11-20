/**
 * @function fahrenheitToCelsius
 * @description Convertie une temperature en celisius
 * @param {fehrenheit} - la temperature entrer pour qu'elle soit changer
 * @returns {}
 * @example 
 * // retourne 32F
 * 
 * 
 *@function celsiusToFahrenheit
 * @description Convertie une temperature en Fahrenheit
 * @param {celsius} - la temperature entrer pour qu'elle soit changer
 * @returns {}
 * @example 
 * // retourne 32C
 */


function fahrenheitToCelsius(fehrenheit) {
    return (fehrenheit - 32) * 5 / 9
}
fahrenheitToCelsius(f)

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32
}
celsiusToFahrenheit(c)
