# Weather App

## Objectif

Créer une application web légère de prévisions météo qui utilise uniquement HTML, CSS et JavaScript vanille pour fournir des prévisions personnalisées selon la localisation et les préférences utilisateur.

## Fonctionnalités Principales

### 1. **Identification des préférences**
- Enregistrement des préférences utilisateur (comme la localisation et le thème) en local via `localStorage`.
  
### 2. **Localisation**
- Utilisation de l'API de géolocalisation du navigateur pour détecter la position de l’utilisateur automatiquement.
- Option de saisie manuelle pour permettre à l'utilisateur de rechercher la météo dans d'autres lieux.

### 3. **Prévisions Météo**
- Affichage des prévisions météo actuelles et pour les prochaines heures et jours.
- Alertes météo en temps réel pour des événements comme la pluie imminente ou des orages.
  
### 4. **Recommandations**
- Conseils d’habillage en fonction des conditions météorologiques locales (ex : porter un manteau si la température est basse).
- Alertes santé, telles que des avertissements en cas d’indice UV élevé.

## Interface Utilisateur

- **Structure** : L’interface est construite en HTML et CSS et présente un tableau de bord simple qui affiche les informations météo importantes sous forme de cartes ou de blocs.
  
- **Graphiques et Cartes** : Utilisation d'éléments SVG et CSS pour afficher des graphiques simples des tendances météo, comme la température sur une période de 24 heures.
  
- **Thèmes** : Implémentation du mode sombre et du mode clair avec des bascules simples via des fonctionnalités CSS.

## Technologies Utilisées

### 1. **Front-end**
- **HTML** : Structure de base de l’application.
- **CSS** : Mise en forme et mise en page avec Flexbox et CSS Grid.
- **JavaScript (vanilla)** : Logique d’application, gestion des appels API, interaction avec l’utilisateur et stockage des préférences.

### 2. **Back-end**
- **API Météo** : Utilisation d’une API externe comme [OpenWeatherMap](https://openweathermap.org/) pour récupérer les données météo au format JSON.
  
- **Notifications** : Notifications en JavaScript pour alerter l'utilisateur de changements significatifs dans les conditions météo.

## Sécurité et Confidentialité

- **Stockage Local** : Les informations de session et les préférences utilisateur sont stockées dans `localStorage` ou des cookies de manière sécurisée et basique.
  
- **Protection des Données** : L’application ne collecte pas d’informations sensibles et respecte les normes de confidentialité en minimisant les données collectées.


## Instructions de Mise en Place

### 1. Cloner le Dépôt

Clonez le dépôt sur votre machine locale pour commencer :

```bash
git clone https://github.com/yourusername/weather-app.git
``` 
## Ouvrir l'Application
Accédez au dossier du projet et ouvrez le fichier index.html dans votre navigateur.

```bash
cd weather-app
open index.html
```
### Personnaliser les Préférences
Vous pouvez personnaliser l’application en modifiant les fichiers suivants :

## index.html : 
  Structure HTML de l'application.

## css/main.css :
  Styles principaux, y compris la gestion des thèmes (sombre/claire).
## js/app.js :
  Logiciel principal, gestion des API et des préférences utilisateur.
## js/preferences.js :
  Stocke et récupère les préférences de l'utilisateur.
