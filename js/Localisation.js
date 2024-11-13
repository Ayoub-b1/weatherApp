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

    if(ville === ""){
        //traitement de la condition
    }
    return ville
}

Ville()