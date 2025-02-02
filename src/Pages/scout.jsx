import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./projectDetails.css";
import scout1 from "../images/scout1.jpg";
import scout2 from "../images/scout2.png";
import scout3 from "../images/scout3.png";
import scout4 from "../images/scout4.png";
import scout5 from "../images/scout5.png";
import scout6 from "../images/scout6.png";

function Scout() {
  const images = [scout2, scout3, scout4, scout5, scout6];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-details-container">
      <Link to="/" className="back-button">
        ← Back to Projects
      </Link>

      <div className="project-header">
        <div className="app-title-section">
          <img src={scout1} alt="Scout App Icon" className="app-icon" />
          <div className="app-title-content">
            <h1>Scout - Shopping and Selling App</h1>
          </div>
        </div>
        <div className="header-links">
          <a
            href="https://apps.apple.com/us/app/scout-shop-sell-with-camera/id6502788045"
            target="_blank"
            rel="noopener noreferrer"
            className="live-link"
          >
            View Live App ↗
          </a>
          <a
            href="https://github.com/scoutfinder/app"
            target="_blank"
            rel="noopener noreferrer"
            className="live-link github-link"
          >
            See Repo ↗
          </a>
        </div>
      </div>

      <div className="app-gallery">
        {images.map((img, idx) => (
          <div key={idx} className="gallery-item mobile-screenshot">
            <img src={img} alt={`Scout App ${idx + 1}`} />
          </div>
        ))}
      </div>

      <div className="project-content">
        <div className="projectDetailsText">
          <section className="project-section">
            <h2>Overview</h2>
            <p>
              Scout is an innovative mobile application that revolutionizes
              shopping and selling. Using Google Lens technology, it scans items
              to compare prices across 100+ retailers. Users can use to find an
              item that they are looking for but dont knwo the name.
            </p>
          </section>

          <section className="project-section">
            <h2>Core Features</h2>
            <ul>
              <li>Accurate item reconition</li>
              <li>Instant price comparison across multiple retailers</li>
              <li>Automated eBay listing creation (not released)</li>
            </ul>
          </section>

          <section className="project-section">
            <h2>Technical Details</h2>
            <ul>
              <li>
                <strong>Platform:</strong> React Native (iOS & Android)
              </li>
              <li>
                <strong>Item Recognition:</strong> Google Lens Integration
              </li>
              <li>
                <strong>State Management:</strong> React Hooks
              </li>
              <li>
                <strong>Data Storage:</strong> AsyncStorage
              </li>
            </ul>
          </section>

          <section className="project-section">
            <h2>Current Status</h2>
            <p>
              Available on the App Store. Development is paused, but project
              served as excellent learning experience in mobile development.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Scout;
