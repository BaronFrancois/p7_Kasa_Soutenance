// Importation des modules nécessaires.
import React from 'react'; 
import '../assets/header.css'; // Importation des styles associés.
import {Link} from 'react-router-dom'; // Pour gérer la navigation entre les pages.

// Définition du composant Header.
const Header = (props) => {
    return(
        // Conteneur principal de l'en-tête.
        <header>
            {/* // Logo "kasa". */}
            <div id="logo">kasa</div>
            
            {/* // Conteneur pour les liens dans l'en-tête. */}
            <div id="headerLinksContainer">
                {/* // Lien vers la page d'accueil. */}
                <Link to="/">accueil</Link>
                
                {/* // Texte "A Propos" (note: cela pourrait aussi être un lien). */}
                <p>A Propos</p>
            </div>
        </header>
    );
}

// Exportation du composant pour une utilisation externe.
export default Header;
