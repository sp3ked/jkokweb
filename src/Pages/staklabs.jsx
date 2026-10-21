import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./projectDetails.css";
import staklabs1 from "../images/Staklabs/2025-11-17T13:14:09,510007741-05:00.png";
import staklabs2 from "../images/Staklabs/2025-11-17T13:14:16,526100987-05:00.png";
import staklabs3 from "../images/Staklabs/2025-11-17T13:14:38,746980953-05:00.png";

function StakLabs() {
  const [lightboxImage, setLightboxImage] = useState(null);
  
  const images = [
    staklabs1,
    staklabs2,
    staklabs3,
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
        <title>StakLabs Project - Joey Kokinda</title>
        <meta name="description" content="StakLabs is a student-run web development company from Downingtown STEM Academy. A project by Joey Kokinda." />
        <link rel="canonical" href="https://jkokinda.com/projects/staklabs" />
        <meta name="robots" content="index, follow, noarchive" />
      </Helmet>
      <Link to="/projects" className="back-button">
        ← Back to Projects
      </Link>

      <div className="project-header">
        <h1>StakLabs - Student-Run Web Development Company</h1>
        <div className="header-links">
          <a
            href="https://staklabs.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="live-link"
          >
            Visit Website ↗
          </a>
        </div>
      </div>

      <div className="app-gallery">
        {images.map((img, idx) => (
          <div key={idx} className="gallery-item">
            <img
              src={img}
              alt={`StakLabs Website ${idx + 1}`}
              style={{
                objectFit: "contain",
                background: "rgba(0, 0, 0, 0.8)",
                cursor: "pointer",
              }}
              onClick={() => setLightboxImage(img)}
            />
          </div>
        ))}
      </div>

      <div className="project-content">
        <div className="projectDetailsText">
          <section className="project-section">
            <h2>Overview</h2>
            <p>
              StakLabs is a student-run web development and digital services company operating out of Downingtown STEM Academy. Working alongside my brother and fellow students, we built a legitimate business that serves real clients with professional-grade web development, mobile apps, and digital marketing services.
            </p>
            <p>
              What makes StakLabs unique is its sustainability model: when the founding class graduates, they pass the company to the next generation of STEM students. Those students continue the legacy, passing it forward again. StakLabs remains student-run and community-focused indefinitely.
            </p>
          </section>

          <section className="project-section">
            <h2>Services Offered</h2>
            <ul>
              <li>
                <strong>Fullstack Web Development:</strong> Modern, responsive websites built with React, Next.js, and Tailwind CSS. From landing pages to complex web applications.
              </li>
              <li>
                <strong>Mobile Apps:</strong> Native iOS and Android apps, or cross-platform solutions with React Native.
              </li>
              <li>
                <strong>SEO Optimization:</strong> Site structure, content, and technical optimization to improve search rankings and attract customers.
              </li>
              <li>
                <strong>3D Design:</strong> Eye-catching 3D graphics and animations for websites, including product visualizations and interactive models.
              </li>
            </ul>
          </section>

          <section className="project-section">
            <h2>My Role</h2>
            <p>
              I worked closely with my brother and the StakLabs team to build client websites, including the TruNorth HVAC project. This involved full-stack development, design implementation, SEO optimization, and direct client collaboration to ensure their business goals were met.
            </p>
            <p>
              Working with StakLabs provided invaluable experience in running a real business, managing client relationships, and delivering professional-grade products under real deadlines and expectations.
            </p>
          </section>

          <section className="project-section">
            <h2>Technical Stack</h2>
            <p>
              React, Next.js, Tailwind CSS, React Native, Three.js, Google Analytics, and modern deployment with CDN.
            </p>
          </section>
        </div>
      </div>
      </div>
    </>
  );
}

export default StakLabs;

