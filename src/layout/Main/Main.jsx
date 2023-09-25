// Le composant Main est un conteneur simple destiné à envelopper le contenu principal de votre application.
//  Il utilise la prop children pour afficher tout contenu enfant qui lui est passé.
// Importation des modules nécessaires.
import React from "react";
import "./Main.scss"; // Importation des styles associés.

// Définition du composant Main.
function Main({ children }) {
  // Retourne un conteneur avec le contenu passé en tant qu'enfants du composant.
  return <div className="main">{children}</div>;
}

// Exportation du composant pour une utilisation externe.
export default Main;
