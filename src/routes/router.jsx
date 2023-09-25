// Importation des modules nécessaires.
import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom"; // Importation des fonctions de routage.
import HomePage from "../pages/Homepage/Homepage"; // Page d'accueil
import Footer from "../layout/Footer/Footer"; // Composant de pied de page
import Main from "../layout/Main/Main"; // Composant principal
import Navbar from "../components/Navbar/Navbar"; // Barre de navigation
import ApartmentPage from "../pages/ApartmentPage/ApartmentPage"; // Page d'appartement
import About from "../pages/About/About"; // Page À propos
import { ErrorPageNotFound } from "../pages/ErrorPageNotFound/ErrorPageNotFound"; // Page d'erreur

// Définition d'une mise en page qui inclut la barre de navigation, le contenu principal et le pied de page.
const HeaderFooterLayout = () => {
  return (
    <>
    <Navbar />          
      <Main>              
        <Outlet />        
      </Main>
      <Footer />         
    </>
  );
};

// Création du routeur avec les différentes routes.
export const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout />,       // Utilisation de la mise en page définie ci-dessus
    errorElement: <ErrorPageNotFound />,   // Composant à afficher en cas d'erreur
    children: [                            // Liste des routes
      {
        path: "/",                         // Route pour la page d'accueil
        element: <HomePage />
      },
      {
        path: "/flat",                     // Route pour la page d'appartement
        element: <ApartmentPage />
      },
      {
        path: "/about",                    // Route pour la page À propos
        element: <About />
      }
    ]
  }
]);
