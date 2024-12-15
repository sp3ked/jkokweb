import React from "react";
import { Link } from "react-router-dom";
import "./experiences.css";

function Experiences() {
  return (
    <div className="experienceBox">
      <div className="experienceHeader">
        <span className="terminalTitle">C:\Users\Experiences&gt;</span>
        <div className="terminalControls">
          <span className="terminalControl">−</span>
          <span className="terminalControl">□</span>
          <span className="terminalControl">×</span>
        </div>
      </div>

      <div className="experienceContent">
        <h3>Zerogon Consulting</h3>
        <span className="experience-role">
          Front-End Developer | Jan 2024 - Aug 2024
        </span>
        <p>
          At Zerogon Consulting, I developed and maintained responsive user
          interfaces for web applications. I worked with modern JavaScript
          frameworks, optimized front-end performance, and collaborated with
          designers and back-end developers to deliver seamless user
          experiences.
        </p>
        <ul className="experience-list">
          <li>Implemented reusable components using React.js.</li>
          <li>Optimized UI for mobile and desktop platforms.</li>
          <li>
            Collaborated with cross-functional teams to meet client
            requirements.
          </li>
        </ul>
      </div>

      <div className="experienceFooter">
        <p className="contact-text">
          I am always looking for new opportunities!{" "}
          <Link to="/contact" className="contact-link">
            Contact me here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Experiences;
