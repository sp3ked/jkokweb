import React from "react";
import { Link } from "react-router-dom";
import "./resume.css";

function Resume() {
  return (
    <div className="resume-container">
      <Link to="/" className="resbackButton">
        back
      </Link>
      <img
        src="/Joe_Kokinda_Resume.jpg"
        alt="Joe's Resume"
        className="resume-image"
      />
      <p>To download click here:</p>
      <a
        href="/Joe_Kokinda_Resume.pdf"
        download="Joe_Kokinda_Resume.pdf"
        className="download-link"
      >
        Download Resume
      </a>
    </div>
  );
}

export default Resume;
