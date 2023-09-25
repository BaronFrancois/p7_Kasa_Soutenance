// Importation des modules nécessaires.
import React, { useState } from "react";
import "./DescriptionPanel.scss"; // Importation des styles associés.

// Définition du composant DescriptionPanel.
export function DescriptionPanel(props) {
  // État pour gérer la visibilité du contenu du panneau.
  const [isContentVisible, setIsContentVisible] = useState(false);

  // Fonction pour basculer la visibilité du contenu.
  const showContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  // Détermination des classes CSS pour le contenu et le chevron en fonction de la visibilité.
  const contentClass = (isContentVisible ? "visible" : "hidden") + " description__content";
  const chevronClass = (isContentVisible ? "fa-chevron-up" : "fa-chevron-down") + " fas";

  return (
    // Structure du panneau de description.
    <div className="description__panel">
      {/* // En-tête du panneau avec la possibilité de cliquer pour basculer la visibilité du contenu. */}
      <p className="description__header" onClick={showContent}>
        <span>{props.title}</span>
        {/* // Icône du chevron pour indiquer la visibilité. */}
        <i className={chevronClass}></i>
      </p>
      {/* // Contenu du panneau. */}
      <p className={contentClass}>{props.content}</p>
    </div>
  );
}
