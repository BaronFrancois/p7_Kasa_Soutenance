// Importation des modules nécessaires.
import React from "react";
import "./ApartmentTile.scss"; // Importation des styles associés.
import { Link } from "react-router-dom"; // Importation du composant Link pour la navigation.


// Définition du composant ApartmentTile.
function ApartmentTile(props) {
  // Création d'un lien vers la page "/flat" avec un état contenant l'ID de l'appartement.
  return (
    <Link
      to="/flat"
      state={{
        apartmentId: props.id
      }}
    >
      <div className="apartment">
        <img src={props.imageUrl} alt="" />
        <div className="apartment__subtitle">{props.title}</div>
      </div>
    </Link>
  );
}

// Exportation du composant pour une utilisation externe.
export default ApartmentTile;
