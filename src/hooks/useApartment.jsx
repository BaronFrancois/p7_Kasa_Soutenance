// Ce hook est conçu pour récupérer les informations d'un appartement spécifique basé sur un ID d'appartement donné via location.state.apartmentId.
//  Il effectue une requête fetch pour récupérer le fichier db.json 

// Importation des modules nécessaires.
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Pour accéder à l'objet de location actuel.

// Définition du hook personnalisé useApartment.
export function useApartment() {
  // État pour stocker les informations de l'appartement.
  const [flat, setFlat] = useState(null);
  
  // Utilisation du hook useLocation pour obtenir l'objet de location actuel.
  const location = useLocation();

  // Effet secondaire pour récupérer les informations de l'appartement.
  useEffect(() => {
    // Utilisation d'AbortController pour gérer l'annulation des requêtes.
    const abortController = new AbortController();

    // Requête pour obtenir le fichier db.json.
    fetch("db.json", { signal: abortController.signal })
      .then((res) => res.json())
      .then((flats) => {
        // Recherche de l'appartement correspondant à l'ID donné.
        const flat = flats.find((flat) => flat.id === location.state.apartmentId);
        
        console.log(flat); // Affichage des informations de l'appartement dans la console.
        setFlat(flat);     // Mise à jour de l'état avec les informations de l'appartement.
      })
      .catch(console.error); // Gestion des erreurs.

    // Annulation de la requête si le composant est démonté.
    return () => {
      abortController.abort();
    };
  }, []); // Exécuté une seule fois lors du montage du composant.

  // Retour des informations de l'appartement.
  return flat;
}
