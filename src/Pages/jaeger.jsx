import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./projectDetails.css";
import jaeger1 from "../images/Jaeger/jaeger1.jpg";
import jaeger2 from "../images/Jaeger/20251220_013743.png";
import jaeger3 from "../images/Jaeger/20251220_013932.png";

function Jaeger() {
  const [lightboxImage, setLightboxImage] = useState(null);

  const mediaItems = [
    { type: "image", src: jaeger3, alt: "Jaeger Chrome Extension 3" },
    {
      type: "video",
      src: "https://www.youtube.com/embed/d0NFbvVmlAw",
      alt: "Jaeger Demo Video",
    },
    { type: "image", src: jaeger2, alt: "Jaeger Chrome Extension 2" },
    { type: "image", src: jaeger1, alt: "Jaeger Chrome Extension 1" },
  ];

  return (
    <>
      {lightboxImage && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightboxImage(null)}
        >
          <div className="lightbox-content">
            <img src={lightboxImage} alt="Full size" />
            <button
              className="lightbox-close"
              onClick={() => setLightboxImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
      <div className="project-details-container">
        <Helmet>
        <title>Jaeger - Polymarket Browser Extension | Joey Kokinda</title>
        <meta
          name="description"
          content="Chrome extension that surfaces relevant Polymarket prediction markets while browsing the web. Built with React 19, Vite, and Base smart accounts for Midwest Blockchain Conference Hackathon 2025."
        />
        <link rel="canonical" href="https://jkokinda.com/projects/jaeger" />
        <meta name="robots" content="index, follow, noarchive" />
      </Helmet>

      <Link to="/projects" className="back-button">
        ← Back to Projects
      </Link>

      <div className="project-header">
        <h1>Jaeger - Polymarket Browser Extension</h1>
        <div className="header-links">
          <a
            href="https://devpost.com/software/jaeger"
            target="_blank"
            rel="noopener noreferrer"
            className="live-link"
          >
            DevPost ↗
          </a>
          <a
            href="https://x.com/bomJAEGER?s=20"
            target="_blank"
            rel="noopener noreferrer"
            className="live-link github-link"
          >
            Twitter/X ↗
          </a>
        </div>
      </div>

      <div className="app-gallery">
        {mediaItems.map((item, idx) => (
          <div key={idx} className="gallery-item">
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={item.alt}
                style={{
                  objectFit: "contain",
                  background: "rgba(0, 0, 0, 0.8)",
                  cursor: "pointer",
                }}
                onClick={() => setLightboxImage(item.src)}
              />
            ) : (
              <div
                className="video-container"
                style={{
                  position: "relative",
                  width: "100%",
                  paddingBottom: "56.25%",
                  height: 0,
                  overflow: "hidden",
                  background: "rgba(0, 0, 0, 0.8)",
                }}
              >
                <iframe
                  src={item.src}
                  title={item.alt}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                ></iframe>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="project-content">
        <div className="projectDetailsText">
          <section className="project-section">
            <h2>Overview</h2>
            <p>
              Jaeger is a Chrome extension that automatically discovers relevant Polymarket prediction markets for any webpage you visit. Instead of manually searching for markets while reading news articles, sports updates, or tech announcements, Jaeger surfaces the markets behind the headlines with a single click.
            </p>
            <p>
              Built for the Midwest Blockchain Conference Hackathon 2025, Jaeger bridges the gap between web content and prediction markets, making market discovery as seamless as browsing the internet.
            </p>
            <p>
              <strong>Development:</strong> Built by a team of four in one week for the Midwest Blockchain Conference Hackathon 2025.
            </p>
            <p>
              <strong>Team:</strong> Joey Kokinda, Albert Wu, Eli Dubizh, gl00mt1t4n
            </p>
          </section>

          <section className="project-section">
            <h2>Key Features</h2>
            <ul>
              <li>
                <strong>Automatic Market Discovery:</strong> Keyword matching based on page content to find relevant Polymarket markets
              </li>
              <li>
                <strong>Market Insights:</strong> Volume, odds, and status tags for each discovered market
              </li>
              <li>
                <strong>Advanced Filtering:</strong> Filter markets by date, volume, and category
              </li>
              <li>
                <strong>Premium UI:</strong> Clean black and gold interface with smooth animations
              </li>
              <li>
                <strong>Base Account Integration:</strong> Seamless wallet onboarding using Base smart accounts
              </li>
              <li>
                <strong>Theme Support:</strong> Light and dark mode toggle with saved preferences
              </li>
              <li>
                <strong>Responsive Design:</strong> Works across different sidebar widths
              </li>
            </ul>
          </section>

          <section className="project-section">
            <h2>Technical Implementation</h2>
            <p>
              Jaeger is built using React 19 and bundled with Vite. The extension operates across three independent Chrome extension contexts:
            </p>
            <ul>
              <li>
                <strong>UI Layer:</strong> Loads into the Chrome side panel with React 19 for modern, responsive interface
              </li>
              <li>
                <strong>Content Script:</strong> A script named scrape.js extracts text signals from active webpages
              </li>
              <li>
                <strong>Background Worker:</strong> Calls the Polymarket API and selects the most relevant markets for display
              </li>
            </ul>
            <p>
              The architecture separates logic cleanly across these three execution contexts, each with different rules for messaging, permissions, and network calls. This structure enables efficient communication while maintaining security and performance.
            </p>
            <p>
              <strong>Tech Stack:</strong> React 19, Vite, Wagmi v2, Base smart accounts, Chrome Extension API (Manifest V3)
            </p>
          </section>

          <section className="project-section">
            <h2>Development Challenges</h2>
            <p>
              Building a Chrome extension with Manifest Version 3 presented unique challenges. Each execution context (UI, content script, background worker) operates independently with different messaging protocols and CORS restrictions. Maintaining a persistent wallet session across these contexts while scraping pages without interrupting site functionality required careful architecture planning.
            </p>
            <p>
              The team spent significant time in DevTools debugging communication flows between layers, ultimately creating a clean separation of concerns that enables reliable market discovery and display.
            </p>
          </section>

          <section className="project-section">
            <h2>What's Next</h2>
            <ul>
              <li>
                <strong>Improved Matching:</strong> Better market matching using embeddings and contextual signals
              </li>
              <li>
                <strong>User Features:</strong> Watchlists and notification alerts for followed markets
              </li>
              <li>
                <strong>Market Analytics:</strong> Volume spikes and price change tracking
              </li>
              <li>
                <strong>Public Release:</strong> Publishing to Chrome Web Store to gather real user feedback
              </li>
            </ul>
            <p>
              Jaeger started as a weekend hackathon experiment and evolved into a product that makes prediction market discovery feel natural while browsing the web.
            </p>
          </section>
        </div>
      </div>
      </div>
    </>
  );
}

export default Jaeger;

