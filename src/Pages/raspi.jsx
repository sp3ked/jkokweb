import { Link }  from "react-router-dom";
import "./projectDetails.css";
import raspi1 from "../images/raspi1.jpg";
import raspi2 from "../images/raspi2.jpg";
import raspi3 from "../images/raspi3.jpg";
import raspi4 from "../images/raspi4.jpg";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function RaspberryPiGlasses() {
  const images = [raspi1, raspi2, raspi3, raspi4];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-details-container">
      <Link to="/" className="back-button">
        ← Back to Projects
      </Link>
      
      <div className="project-header">
        <h1>Raspi - AI-Powered Smart Glasses</h1>
      </div>

      <div className="app-gallery">
        {images.map((img, idx) => (
          <div key={idx} className="gallery-item">
            <img src={img} alt={`Raspberry Pi Glasses ${idx + 1}`} />
          </div>
        ))}
      </div>

      <div className="project-content">
        <div className="projectDetailsText">
          <section className="project-section">
            <h2>Overview</h2>
            <p>A wearable device built using a Raspberry Pi that captures images and identifies objects 
            in real-time using the Inception v3 model. The project combines computer vision, 
            machine learning, and custom hardware design into a functional prototype.</p>
          </section>

          <section className="project-section">
            <h2>Hardware Components</h2>
            <ul>
              <li><strong>Core Unit:</strong> Raspberry Pi 4 for processing</li>
              <li><strong>Vision:</strong> Raspberry Pi Camera Module</li>
              <li><strong>Display:</strong> OLED Screen for results</li>
              <li><strong>Housing:</strong> Custom 3D-printed frame and case</li>
            </ul>
          </section>

          <section className="project-section">
            <h2>Key Features</h2>
            <ul>
              <li>Real-time image capture and processing</li>
              <li>Object recognition using Inception v3</li>
              <li>Instant visual feedback via OLED display</li>
              <li>Wearable form factor</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default RaspberryPiGlasses;
