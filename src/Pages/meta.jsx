import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./projectDetails.css";
import meta1 from "../images/meta.png";
import meta3 from "../images/meta3.png";

function Meta() {
  const images = [meta1, meta3];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-details-container" data-project="meta">
      <Link to="/" className="back-button">
        ← Back to Projects
      </Link>

      <div className="project-header">
        <div className="app-title-section">
          <div className="app-title-content">
            <h1>LiveAnswer - For Meta Glasses</h1>
          </div>
        </div>
        <div className="header-links">
          <a
            href="https://www.youtube.com/watch?v=eCDWHQe8cE0"
            target="_blank"
            rel="noopener noreferrer"
            className="live-link"
          >
            Watch Demo ↗
          </a>
          <a
            href="https://github.com/joeykokinda/MetaGlassesAnswerer"
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
            <img src={img} alt={`Meta Project ${idx + 1}`} />
          </div>
        ))}
      </div>

      <div className="project-content">
        <div className="projectDetailsText">
          <section className="project-section">
            <h2>Overview</h2>
            <p>
              LiveAnswer is an automation tool that enhances real-time quiz
              answering using an Instagram live stream. Stream form your Meta
              Glasses and get the answer to the quiz/question you are looking at
              in your ear using an instagram comment. Uses Selenium WebDriver,
              Pillow, and the OpenAI API to automate login, navigation, screen
              capturing, quiz answering, and commenting in real-time.
            </p>
          </section>

          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/hPqTC9NUZ_c"
              title="LiveAnswer Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <section className="project-section">
            <h2>How It Works</h2>
            <h3>Two Accounts Setup:</h3>
            <ul>
              <li>Account 1: Hosts the livestream via Meta Glasses</li>
              <li>Account 2: Watches and processes the livestream</li>
            </ul>

            <h3>Automated Flow:</h3>
            <ul>
              <li>Automated Instagram login</li>
              <li>Livestream navigation and initialization</li>
              <li>Periodic screenshot capture (every 15 seconds)</li>
              <li>OpenAI API integration for quiz analysis</li>
              <li>Automated answer posting in comments</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Meta;
