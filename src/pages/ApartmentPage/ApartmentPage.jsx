// ApartmentPage sert de page détaillée pour un appartement spécifique.
//  Il utilise le hook useApartment pour récupérer les informations sur l'appartement, puis affiche une bannière d'images et des descriptions de l'appartement.

// Importation des modules nécessaires.
import React from "react";
import { DescriptionPanel } from "../../components/DescriptionPanel/DescriptionPanel.jsx"; // Importation du composant DescriptionPanel pour afficher des descriptions.
import "./ApartmentPage.scss"; // Importation des styles associés.
import { ImageBanner } from "../../components/ImageBanner/ImageBanner.jsx"; // Importation du composant ImageBanner pour afficher une bannière d'images.
import { useApartment } from "../../hooks/useApartment.jsx"; // Importation du hook useApartment pour obtenir les détails d'un appartement.

// Définition du composant ApartmentPage.
function ApartmentPage() {
  // Utilisation du hook pour récupérer les informations sur l'appartement.
  const flat = useApartment();

  // Si les informations sur l'appartement ne sont pas encore chargées, affiche "Loading...".
  if (flat == null) return <div>Loading...</div>;
  
  // Retourne la page détaillée de l'appartement.
  return (
    <div className="apartment-page">
      {/* // Affichage de la bannière d'images. */}
      <ImageBanner pictures={flat.pictures} isApartmentPage={true} />
      
      {/* // Conteneur pour les descriptions de l'appartement. */}
      <div className="apartment__description__area">
        {/* // Affichage de la description de l'appartement. */}
        <DescriptionPanel title="Description" content={flat.description} />
        
        {/* // Affichage de la liste des équipements de l'appartement. */}
        <DescriptionPanel
          title="Equipements"
          content={flat.equipments.map((eq, i) => (
            <li key={i}>{eq}</li>
          ))}
        />
      </div>
    </div>
  );
}

// Exportation du composant pour une utilisation externe.
export default ApartmentPage;

