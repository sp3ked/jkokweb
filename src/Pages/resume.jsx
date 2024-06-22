import React from "react";
import "./resume.css"; 

function Resume() {
    return (
        <div className="resume-container">
            <h1>Resume</h1>
            <img src="/path_to_resume_image.jpg" alt="Joey's Resume" className="resume-image" />
            <p>Download my full resume below:</p>
            <a href="/path_to_resume_file.pdf" download="Joey_Resume.pdf" className="download-link">
                Download Resume
            </a>
        </div>
    );
}

export default Resume;
