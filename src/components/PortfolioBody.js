import React from "react";
import "./PortfolioBody.css";

const PortfolioBody = () => {
  return (
    <div className="portfolio-body">
      {/* Section À propos */}
      <section className="portfolio-section">
        <h2>À propos</h2>
        <p>
          Je suis un développeur passionné par la création d'applications
          modernes et élégantes. J'adore résoudre des problèmes complexes et
          apprendre de nouvelles technologies.
        </p>
      </section>

      {/* Section Projets */}
      <section className="portfolio-section">
        <h2>Projets</h2>
        <div className="projects">
          <div className="project-card">
            <h3>Projet 1</h3>
            <p>Une description courte de mon projet ici.</p>
          </div>
          <div className="project-card">
            <h3>Projet 2</h3>
            <p>Une description courte de mon projet ici.</p>
          </div>
          <div className="project-card">
            <h3>Projet 3</h3>
            <p>Une description courte de mon projet ici.</p>
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section className="portfolio-section">
        <h2>Contact</h2>
        <p>
          Vous pouvez me contacter via mon email :{" "}
          <a href="mailto:placeholder@example.com">placeholder@example.com</a>
        </p>
      </section>
    </div>
  );
};

export default PortfolioBody;
