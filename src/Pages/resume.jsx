import React from "react";
import { Link } from "react-router-dom";
import "./resume.css";


function Resume() {
  return (
    <div className="project-details-container">
      <Link to="/" className="back-button">
        ← Back to Home
      </Link>
      
      <div className="resume-content">
        <h1>Resume</h1>
        <div className="resume-image-container">
          <img
            src="/kokindajoeyresume.png" 
            alt="Joey's Resume"
            className="resume-image"
          />
        </div>
        <div className="download-section">
          <p>Want a copy?</p>
          <a
            href="/Joe_Kokinda_Resume.pdf"
            download="Joe_Kokinda_Resume.pdf"
            className="download-button"
          >
            Download Resume ↓
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;
