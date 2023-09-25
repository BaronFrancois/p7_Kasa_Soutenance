// Importation des modules nécessaires.
import React from "react";
import "./Homepage.scss"; // Importation des styles associés.
import Banner from "../../components/Banner/Banner.jsx"; // Importation du composant Banner.
import ApartmentTile from "../../components/ApartmentTile/ApartmentTile.jsx"; // Importation du composant ApartmentTile pour afficher les tuiles des appartements.
import { useApartments } from "../../hooks/useApartments.jsx"; // Importation du hook useApartments pour obtenir la liste des appartements.

// Définition du composant ApartmentGrid pour afficher une grille d'appartements.
function ApartmentGrid() {
  // Utilisation du hook pour récupérer la liste des appartements.
  const apartments = useApartments();

  // Retourne une grille d'appartements.
  return (
    <div className="grid">
      {apartments.map((apartment) => (
        <ApartmentTile
          title={apartment.title}
          imageUrl={apartment.cover}
          id={apartment.id}
          key={apartment.id}
        />
      ))}
    </div>
  );
}

// Définition du composant HomePage pour la page d'accueil.
function HomePage() {
  return (
    <div className="homepage">
      {/* // Affichage de la bannière avec un titre. */}
      <Banner titleDesktop="Chez vous, partout et ailleurs" titleMobile="Chez vous,<br />partout et ailleurs" />
      
      {/* // Affichage de la grille d'appartements. */}
      <ApartmentGrid />
    </div>
  );
}

// Exportation du composant pour une utilisation externe.
export default HomePage;
