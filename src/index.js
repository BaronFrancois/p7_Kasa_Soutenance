// Le fichier index.js initialise et rend l'application React.
//  Il utilise également le mode strict de React pour mettre en évidence les problèmes potentiels dans une application.

// Importation des modules nécessaires.
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';                  // Importation du style global.
import App from './App';               // Importation du composant principal App.
import reportWebVitals from './reportWebVitals'; // Fonction pour rapporter les métriques web vitales.

// Création de la racine React (React Root) sur l'élément DOM avec l'ID 'root'.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendu de l'application dans le mode strict de React.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Appel de la fonction reportWebVitals pour enregistrer les métriques web vitales.
reportWebVitals();
