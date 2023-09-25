// Importation des modules nécessaires.
import React from "react";
import { Link } from "react-router-dom"; // Pour gérer la navigation entre les pages.
import Navbar from "../../components/Navbar/Navbar.jsx"; // Importation du composant Navbar.
import Main from "../../layout/Main/Main.jsx"; // Importation du composant Main.
import "./ErrorPageNotFound.scss"; // Importation des styles associés.

// Définition du composant ErrorPageNotFound.
export function ErrorPageNotFound() {
  return (
    // Fragment React pour grouper plusieurs éléments.
    <>
      {/* // Affichage de la barre de navigation. */}
      <Navbar />
      
      {/* // Conteneur principal. */}
      <Main>
        {/* // Conteneur pour la page d'erreur. */}
        <div className="error-page">
          {/* // Affichage du code d'erreur 404. */}
          <h1>404</h1>
          
          {/* // Message d'erreur. */}
          <h2>Oops! La page que vous demandez n'existe pas</h2>
{/*           
          // Lien pour retourner à la page d'accueil. */}
          <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
      </Main>
    </>
  );
}
