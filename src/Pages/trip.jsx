import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./projectDetails.css";
import trip from "../images/trip.jpg";
import trip1 from "../images/trip1.jpg";
import trip2 from "../images/trip2.jpg";
import trip3 from "../images/trip3.jpg";
import trip4 from "../images/trip4.jpg";
import trip5 from "../images/trip5.jpg";
import trip6 from "../images/trip6.jpg";

function Trip() {
  const images = [trip, trip6, trip1, trip2, trip3, trip4, trip5];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-details-container" data-project="trip">
      <Link to="/" className="back-button">
        ← Back to Projects
      </Link>

      <div className="project-header">
        <div className="app-title-section">
          <div className="app-title-content">
            <h1>Trippian - AI Travel Assistant</h1>
          </div>
        </div>
        <div className="header-links">
          <a
            href="https://devpost.com/software/trippian?ref_content=my-projects-tab&ref_feature=my_projects"
            target="_blank"
            rel="noopener noreferrer"
            className="live-link"
          >
            View on Devpost ↗
          </a>
          <a
            href="https://github.com/LeoSesuraj/catapult"
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
            <img src={img} alt={`Trippian Screenshot ${idx + 1}`} />
          </div>
        ))}
      </div>

      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/a6xSKq2aFh4"
          title="Trippian Demo Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="project-content">
        <div className="projectDetailsText">
          <section className="project-section">
            <h2>Overview</h2>
            <p>
              Trippian transforms travel planning from an overwhelming task into an effortless experience. 
              Using a sophisticated multi-agent AI system, it automates every aspect of trip planning—from 
              flight bookings and hotel reservations to transportation scheduling and delay management.
            </p>
          </section>

          <section className="project-section">
            <h2>Key Features</h2>
            <ul>
              <li>AI-powered autonomous agents for different travel aspects</li>
              <li>Seamless integration with Google Calendar</li>
              <li>Real-time flight and hotel searches via Amadeus API</li>
              <li>Natural language processing for conversational interactions</li>
              <li>Automated booking and scheduling system</li>
            </ul>
          </section>

          <section className="project-section">
            <h2>Technical Implementation</h2>
            <h3>Backend Architecture:</h3>
            <ul>
              <li>Flask (Python) backend with modular API endpoints</li>
              <li>Multi-agent AI system with shared ItineraryState</li>
              <li>Integration with OpenAI API for natural language understanding</li>
              <li>Passlib and Google OAuth for authentication</li>
            </ul>

            <h3>Frontend Development:</h3>
            <ul>
              <li>React Native with Expo and TypeScript</li>
              <li>AsyncStorage for local data persistence</li>
              <li>React Navigation for seamless routing</li>
              <li>Moti for fluid animations and transitions</li>
            </ul>
          </section>

          <section className="project-section">
            <h2>Future Development</h2>
            <p>
              Planned enhancements include expanded AI agent capabilities, improved weather integration, 
              a natural language chat interface, and personalized planning based on user preferences 
              and trip history.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Trip;
