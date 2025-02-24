import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./projectDetails.css";
import mlh1 from "../images/mlh1.png";
import mlh2 from "../images/mlh2.png";
import mlh3 from "../images/mlh3.png";
import mlh4 from "../images/mlh4.png";

function LocalLens() {
  const images = [mlh3, mlh1, mlh2, mlh4];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-details-container">
      <Link to="/" className="back-button">
        ← Back to Projects
      </Link>

      <div className="project-header">
        <h1>LocalLens - AI-Powered Local Insights</h1>
        <div className="header-links">
          <a
            href="https://devpost.com/software/locallens-b3xhu5?ref_content=my-projects-tab&ref_feature=my_projects"
            target="_blank"
            rel="noopener noreferrer"
            className="live-link"
          >
            View DevPost ↗
          </a>
          <a
            href="https://github.com/sp3ked/MLH"
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
            <img
              src={img}
              alt={`LocalLens ${idx + 1}`}
              style={{
                objectFit: "contain",
                padding: "20px",
                background: "rgba(0, 0, 0, 0.8)",
              }}
            />
          </div>
        ))}
      </div>

      <div className="project-content">
        <div className="projectDetailsText">
          <section className="project-section">
            <h2>Overview</h2>
            <p>
              LocalLens is a hands-free, real-time campus tour system designed
              for Meta Glasses. It uses location-based audio narration to
              provide users with contextual insights about their surroundings
              without the need to look at a screen. By leveraging geofencing,
              live streaming, and text-to-speech technology, LocalLens enables
              an immersive exploration experience—whether on a college campus or
              any tour-like setting.
            </p>
          </section>

          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/FITI1bCMvkQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <section className="project-section">
            <h2>Technical Stack</h2>
            <ul>
              <li>
                <strong>Frontend:</strong> React Native with Expo (mobile
                development)
              </li>
              <li>
                <strong>Backend:</strong> Express.js with Node.js (handles API
                and automation)
              </li>
              <li>
                <strong>Geolocation:</strong> Expo Location & React Native Maps
                (real-time tracking)
              </li>
              <li>
                <strong>Automation:</strong> Selenium WebDriver (for automated
                Instagram interactions)
              </li>
            </ul>
          </section>

          <section className="project-section">
            <h2>How It Works</h2>
            <p>
              LocalLens detects a user's position as they walk around campus and
              automatically plays relevant audio snippets when they enter
              geofenced areas. The system streams video from the Meta Glasses to
              Instagram Live, while an Express.js server processes location
              updates. When a user enters a new location, the server posts a
              comment on the livestream, which is then read aloud using Meta’s
              text-to-speech feature—allowing for a completely hands-free guided
              tour.
            </p>
          </section>

          <section className="project-section">
            <h2>Key Features</h2>
            <ul>
              <li>Hands-free campus tours using Meta Glasses</li>
              <li>Real-time location tracking and geofencing</li>
              <li>Automated Instagram Live commenting with audio narration</li>
              <li>Seamless mobile experience with geolocation-based updates</li>
              <li>Potential for expansion into AI-driven interactions</li>
            </ul>
          </section>

          <section className="project-section">
            <h2>Development Notes</h2>
            <p>
              Built in 24 hours during a hackathon, LocalLens integrates
              geolocation tracking with social media automation. Challenges
              included working around Meta Glasses' closed ecosystem and
              ensuring smooth location-based updates. Despite these hurdles, the
              project successfully delivers a functional hands-free tour system.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default LocalLens;
