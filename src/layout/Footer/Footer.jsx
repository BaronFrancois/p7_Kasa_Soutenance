// Importation des modules nécessaires.
import React from "react";
import "./Footer.scss"; // Importation des styles associés.

// Définition du composant Footer.
function Footer() {
  return (
    // Conteneur principal du pied de page.
    <div className="footer">
      <div>
        <img src="logo-black.png" alt="logo" width="100" />
      </div>
      <div>© 2020 Kasa. All rights reserved</div>
    </div>
  );
}

// Exportation du composant pour une utilisation externe.
export default Footer;
