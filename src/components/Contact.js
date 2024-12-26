import React from "react";
import "../css/Contact.css";
import linkedinIcon from "../images/linkedin.png"; // Placeholder
import githubIcon from "../images/gituhb.png"; // Placeholder
import emailIcon from "../images/gmail.png"; // Placeholder

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-item">
        <a href="https://www.linkedin.com/in/ethan-bertin/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" />
          <p>Texte filler pour LinkedIn</p>
        </a>
      </div>
      <div className="contact-item">
        <a href="https://github.com/ebertinbench" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" />
          <p>Texte filler pour GitHub</p>
        </a>
      </div>
      <div className="contact-item">
        <a href="mailto:bertinethan.pro@gmail.com">
          <img src={emailIcon} alt="Email" />
          <p>Texte filler pour Email</p>
        </a>
      </div>
    </div>
  );
}

export default Contact;
