// Le hook useApartments est conçu pour récupérer une liste d'appartements depuis le fichier db.json et la stocker dans l'état local.
//  Tout comme le précédent hook useApartment, il effectue une requête fetch pour récupérer le fichier db.json.

// Importation des modules nécessaires.
import { useState, useEffect } from "react";

// Définition du hook personnalisé useApartments.
export const useApartments = () => {
  // État pour stocker la liste des appartements.
  const [apartments, setApartments] = useState([]);

  // Effet secondaire pour récupérer la liste des appartements.
  useEffect(() => {
    // Utilisation d'AbortController pour gérer l'annulation des requêtes.
    const abortController = new AbortController();

    // Requête pour obtenir le fichier db.json.
    fetch("db.json", { signal: abortController.signal })
      .then((res) => res.json())
      .then((res) => setApartments(res))  // Mise à jour de l'état avec la liste des appartements.
      .catch(console.error);              // Gestion des erreurs.

    // Annulation de la requête si le composant est démonté.
    return () => {
      console.log("cleanup");
      abortController.abort();
    };
  }, []); // Exécuté une seule fois lors du montage du composant.

  // Retour de la liste des appartements.
  return apartments;
};
