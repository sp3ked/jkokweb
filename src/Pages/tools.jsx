import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./projectDetails.css";
import toolImage1 from "../images/tool.png";
import toolImage2 from "../images/tool2.png";
import toolImage3 from "../images/tool3.png";
import toolImage4 from "../images/tool1.png";

function ToolsWebsite() {
  const images = [toolImage1, toolImage2, toolImage3, toolImage4];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-details-container">
      <Link to="/" className="back-button">
        ← Back to Projects
      </Link>

      <div className="project-header">
        <h1>Tools - Website With Useful Tools</h1>
        <div className="header-links">
          <a
            href="https://kokinda.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="live-link"
          >
            Visit Website ↗
          </a>
          <a
            href="https://github.com/joeykokinda/tool"
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
          <div key={idx} className="gallery-item">
            <img src={img} alt={`Tools ${idx + 1}`} />
          </div>
        ))}
      </div>

      <div className="project-content">
        <div className="projectDetailsText">
          <section className="project-section">
            <h2>Overview</h2>
            <p>
              A consolidated collection of essential developer tools in one
              place, eliminating the need to search for individual tools across
              different websites. Built to solve the common frustration of
              accessing frequently needed utilities.
            </p>
          </section>

          <section className="project-section">
            <h2>Available Tools</h2>
            <ul>
              <li>
                QR Code Generator - Create custom QR codes for URLs and text
              </li>
              <li>
                Password Generator - Generate secure, customizable passwords
              </li>
              <li>
                Unit Converter - Convert between various units of measurement
              </li>
              <li>Word Counter - Count words, characters, and sentences</li>
              <li>Lorem Ipsum Generator - Create placeholder text</li>
              <li>JSON Formatter - Format and validate JSON data</li>
              <li>Font Pairing Generator - Get font combination suggestions</li>
              <li>Bill Splitter - Calculate individual shares with tip</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ToolsWebsite;
