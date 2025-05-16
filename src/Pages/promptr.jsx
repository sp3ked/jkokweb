import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./projectDetails.css";
import promptr from "../images/promptr.png";
import promptr1 from "../images/promptr1.png";

function Promptr() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-details-container" data-project="promptr">
      <Link to="/" className="back-button">
        ← Back to Projects
      </Link>

      <div className="project-header">
        <div className="app-title-section">
          <div className="app-title-content">
            <h1>Promptr - AI Prompt Management</h1>
          </div>
        </div>
        <div className="header-links">
          <a
            href="https://chromewebstore.google.com/detail/promptr/onkoaammdlfaebbncpbjofmcjkilgpbp"
            target="_blank"
            rel="noopener noreferrer"
            className="live-link"
          >
            View in Chrome Store ↗
          </a>
          <a
            href="https://github.com/sp3ked/promptEx"
            target="_blank"
            rel="noopener noreferrer"
            className="live-link github-link"
          >
            View GitHub ↗
          </a>
        </div>
      </div>

      <div className="app-gallery">
        {[promptr, promptr1].map((img, idx) => (
          <div key={idx} className="gallery-item">
            <img src={img} alt={`Promptr Screenshot ${idx + 1}`} />
          </div>
        ))}
      </div>

      <div className="project-content">
        <div className="projectDetailsText">
          <section className="project-section">
            <h2>Overview</h2>
            <p>
              Promptr is a Chrome extension that streamlines AI interactions by providing a central hub 
              for managing and injecting prompts across multiple LLM platforms. It enables users to maintain 
              a personal library of prompts that can be instantly deployed to ChatGPT, Claude, Grok, 
              Deepseek, or Gemini.
            </p>
          </section>

          <section className="project-section">
            <h2>Key Features</h2>
            <ul>
              <li>Persistent prompt library with categorization and tagging</li>
              <li>One-click prompt injection into active chat interfaces</li>
              <li>Cross-platform support for major LLM providers</li>
              <li>Chrome side panel and popup interface</li>
            </ul>
          </section>

          <section className="project-section">
            <h2>Technical Implementation</h2>
            <h3>Core Architecture:</h3>
            <ul>
              <li>Chrome Manifest V3 with content scripts and background service worker</li>
              <li>Chrome Scripting API for cross-domain injection</li>
              <li>LocalStorage for persistent prompt management</li>
            </ul>
          </section>

          <section className="project-section">
            <h2>Future Development</h2>
            <p>
              Planned features include file injection, ability to upload prompts, prompt sharing.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Promptr;
