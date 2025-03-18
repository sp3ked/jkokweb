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
          interfaces for web applications. I worked mainly with react and durign this expirence I
          collaborated with back-end developers to deliver seamless user
          experiences.
        </p>
        <ul className="experience-list">
          <li>Leveraged custom hooks to consume REST/GraphQL endpoints</li>
          <li>Optimized UI for different sized displays</li>
          <li>Enhanced animations (using framer motion) for immersive ux</li>
          <li>Built modular React components using custom hooks</li>
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
