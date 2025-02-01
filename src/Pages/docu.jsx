import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "./projectDetails.css";
import docu1 from "../images/docu1.png";
import docu2 from "../images/docu2.png";
import docu3 from "../images/docu3.png";
import docu4 from "../images/docu4.png";
import docu5 from "../images/docu5.png";

function Docu() {
  const images = [docu2, docu3, docu4, docu5];
  const location = useLocation();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [location]);

  return (
    <div className="project-details-container">
      <Link to="/" className="back-button">
        ← Back to Projects
      </Link>
      
      <div className="project-header">
        <div className="app-title-section">
          <img src={docu1} alt="Docu App Icon" className="app-icon" />
          <div className="app-title-content">
            <h1>Docu - AI Scanner & Analyzer</h1>
          </div>
        </div>
        <a href="https://apps.apple.com/us/app/docu-ai-scanner-analyzer/id6739954302?platform=iphone" 
           target="_blank" 
           rel="noopener noreferrer"
           className="live-link">
          View Live App ↗
        </a>
      </div>

      <div className="app-gallery">
        {images.map((img, idx) => (
          <div key={idx} className="gallery-item mobile-screenshot">
            <img src={img} alt={`Docu App ${idx + 1}`} />
          </div>
        ))}
      </div>

      <div className="project-content">
        <p className="projectDetailsText">
          {/* Add Docu's detailed description here */}
          <strong>Description:</strong>
          <br />
          Docu is an AI-powered document scanning and analysis tool that helps users digitize, 
          organize, and understand their documents. Using advanced OCR and AI technology, 
          it can extract key information, generate summaries, and make documents searchable.
          {/* Add more content sections as needed */}
        </p>
      </div>
    </div>
  );
}

export default Docu;
