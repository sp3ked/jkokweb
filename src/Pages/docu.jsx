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
        <div className="header-links">
          <a
            href="https://apps.apple.com/us/app/docu-ai-scanner-analyzer/id6739954302?platform=iphone"
            target="_blank"
            rel="noopener noreferrer"
            className="live-link"
          >
            View Live App ↗
          </a>
          <a
            href="https://github.com/docu-docu/docu-app-img"
            target="_blank"
            rel="noopener noreferrer"
            className="live-link github-link"
          >
            View GitHub ↗
          </a>
        </div>
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
          <strong>Description:</strong>
          <br />
          Docu is an AI-powered document scanning and analysis tool that enables
          users to easily digitize, organize, and summarize their documents.
          With advanced OCR capabilities, the app can extract critical
          information, create searchable text, and generate concise summaries
          for quick insights.
          <br />
          <br />
          <strong>Core Features:</strong>
          <ul>
            <li>AI-based OCR for accurate text extraction</li>
            <li>Automated summarization of lengthy documents</li>
            <li>Secure cloud storage for document management</li>
            <li>Search functionality for quick access to stored files</li>
          </ul>
          <br />
          <strong>Technical Details:</strong>
          <ul>
            <li>
              <strong>Platform:</strong> React Native (iOS & Android)
            </li>
            <li>
              <strong>AI:</strong> OpenAI API, currently using gpt4-turbo
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
}

export default Docu;
