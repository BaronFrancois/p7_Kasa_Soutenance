// Importation des modules nécessaires.
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";

// Création de la racine React (React Root) sur l'élément DOM avec l'ID 'root'.
// Rendu de l'application dans le mode strict de React avec le fournisseur de route (RouterProvider).
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
