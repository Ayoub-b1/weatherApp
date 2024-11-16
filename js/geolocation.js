/**
@function autoLocate
@description definire Latitude + Longitude automatiquement d'utilisateur
@returns Latitude + Longitude d utlisateur
@exemple
/return
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

// Exemple d'utilisation
autoLocate().then(coords => {
        console.log("Latitude:", coords.latitude);
        console.log("Longitude:", coords.longitude);
});