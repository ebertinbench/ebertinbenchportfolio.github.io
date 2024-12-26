import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App"; // Vérifie bien le chemin de ton composant App
import "./css/index.css"; // Vérifie bien que ce fichier existe

// Crée le root et rend l'application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
