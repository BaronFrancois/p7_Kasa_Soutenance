// Importation des modules nécessaires.
import React from "react";
import "./Banner.scss"; // Importation des styles associés.

// Définition du composant Banner avec des props pour l'image, le titre de bureau et le titre mobile.
function Banner({ image, titleDesktop, titleMobile }) {
  // Affichage de l'image de la bannière.
  // Affichage conditionnel du titre de bureau s'il est fourni.
  // Affichage conditionnel du titre mobile s'il est fourni.
  return (
    <div className="banner">
      <img src={image} alt="" />
      {titleDesktop && <h2 className="desktop">{titleDesktop}</h2>}
      {titleMobile && <h2 className="mobile" dangerouslySetInnerHTML={{ __html: titleMobile }}></h2>}
    </div>
  );
}
// itulisation de  dangerouslySetInnerHTML={{ __html: titleMobile }} afin de changer de titre afin d'y rajouter un saut de ligne
// Exportation du composant pour une utilisation externe.
export default Banner;
