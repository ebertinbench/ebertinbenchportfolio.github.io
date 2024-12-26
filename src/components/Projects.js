import React from "react";
import "../css/Projects.css";
import imageCategory1 from "../images/cybersecurite.jpg"; // Assure-toi que le chemin est correct
import imageCategory2 from "../images/fullstack.jpg"; // Assure-toi que le chemin est correct

function Projects() {
  return (
    <div className="projects-container">
      <h1>Projets</h1>
      <div className="categories">
        <div className="category">
          <img src={imageCategory1} alt="Catégorie 1" />
          <h2>Administration systèmes et réseaux / Cybersécurité</h2>
        </div>
        <div className="category">
          <img src={imageCategory2} alt="Catégorie 2" />
          <h2>Développement full-stack / DevOps</h2>
        </div>
      </div>
      
    </div>
  );
}

export default Projects;
