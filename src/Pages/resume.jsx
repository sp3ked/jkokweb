import React from "react";
import "./resume.css";

function Resume() {
  return (
    <div className="resume-container">
      <h1>Resume</h1>
      <img
        src="/Joe_Kokinda_Resume.jpg"
        alt="Joey's Resume"
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
