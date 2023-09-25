// Importation des modules nécessaires.
import React from "react";
import { NavLink } from "react-router-dom"; // Pour gérer la navigation entre les pages.
import "./Navbar.scss"; // Importation des styles associés.

// Définition du composant Navbar.
function Navbar() {
  return (
    <nav className="navbar">
      {/* // Lien vers la page d'accueil avec le logo. */}
      <NavLink to="/">
        <div className="navbar__logo">
          <img src="logo.png" alt="Logo" />
        </div>
      </NavLink>
      {/* // Lien vers la page d'accueil. */}
      <NavLink to="/">
        <div>Accueil</div>
      </NavLink>
      {/* // Lien vers la page "A propos". */}
      <NavLink to="/about">
        <div>A propos</div>
      </NavLink>
    </nav>
  );
}

// Exportation du composant pour une utilisation externe.
export default Navbar;
