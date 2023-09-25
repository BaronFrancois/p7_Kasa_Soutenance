// Importation des modules nécessaires.
import React, { useState } from "react";
import "./ImageBanner.scss"; // Importation des styles associés.
import aboutBanner from '../../assets/images/aboutBanner.png'; // Importation de l'image par défaut.

// Définition du composant ImageBanner.
export function ImageBanner({ pictures, isApartmentPage }) {
  // État pour gérer l'image actuellement affichée dans le carrousel.
  const [currentPicture, setCurrentPicture] = useState(0);

  // Fonction pour obtenir le nom de classe en fonction de l'image actuelle.
  const getClassName = (i) => {
    if (i === currentPicture) return "show";
    return "";
  };

  // Fonction pour passer à l'image suivante.
  const moveToNext = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length);
  };

  // Fonction pour revenir à l'image précédente.
  const moveToPrevious = () => {
    const newCurrentPicture = currentPicture - 1;
    if (newCurrentPicture < 0) {
      setCurrentPicture(pictures.length - 1);
      return;
    }
    setCurrentPicture(currentPicture - 1);
  };

  // Fonction pour vérifier si des images sont disponibles.
  const arePicturesAvailable = () => {
    return pictures && pictures.length > 0;
  };

  // Fonction pour obtenir le carrousel ou une image par défaut.
  const getCarouselOrDefaultImage = () => {
    if (!arePicturesAvailable() || pictures.length <= 1) {
  return <img src={aboutBanner} className="show" alt="" />;
}
    return pictures.map((pic, i) => (
      <img key={pic} src={pic} alt="" className={getClassName(i)}></img>
    ));
  };

  // Rendu des boutons précédents et suivants uniquement s'il y a plus d'une image.
  const renderNavigationButtons = () => {
    if (pictures.length <= 1) {
      return null; // Ne rend rien si une seule image ou aucune.
    }
    return (
      <div>
        <button className="btn btn-previous" onClick={moveToPrevious}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <span className="slide-counter">
          {currentPicture + 1} / {pictures.length}
        </span>
        <button className="btn btn-next" onClick={moveToNext}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    );
  };

  // Rendu du composant.
  return (
    <div className={`image__banner ${isApartmentPage ? 'apartment-banner' : ''}`}>
      <div className="image__container">
        {getCarouselOrDefaultImage()}
      </div>
      {renderNavigationButtons()}
    </div>
  );
}
