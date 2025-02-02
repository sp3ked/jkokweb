import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "./projectDetails.css";
import bike from "../images/bike.jpg";
import bike1 from "../images/bike1.png";
import bike2 from "../images/bike2.jpg";
import bike3 from "../images/bike3.jpg";
import bike4 from "../images/bike4.jpg";
import bike5 from "../images/bike5.jpg";

function Bike() {
  const images = [bike5, bike1, bike2, bike3, bike4, bike];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-details-container">
      <Link to="/" className="back-button">
        ← Back to Projects
      </Link>
      
      <div className="project-header">
        <h1>Electric Bike - Conversion Project</h1>
      </div>

      <div className="app-gallery">
        {images.map((img, idx) => (
          <div key={idx} className="gallery-item">
            <img src={img} alt={`Bike Project ${idx + 1}`} />
          </div>
        ))}
      </div>

      <div className="project-content">
        <div className="projectDetailsText">
          <section className="project-section">
            <h2>Overview</h2>
            <p>A custom electric bike conversion project designed to address transportation 
            challenges on large university campuses. The project features a custom motor mount, 
            multistage belt drive system, and swappable battery solution.</p>
          </section>

          <section className="project-section">
            <h2>Technical Components</h2>
            <ul>
              <li><strong>Motor:</strong> Flipsky 190kV with 75100 controller</li>
              <li><strong>Power:</strong> Swappable Ryobi battery system</li>
              <li><strong>Drive:</strong> Multistage belt drive system</li>
              <li><strong>Mount:</strong> Custom designed motor mount</li>
            </ul>
          </section>

          <section className="project-section">
            <h2>Build Process</h2>
            <ul>
              <li>Initial design and prototyping in CAD</li>
              <li>3D printed prototype testing</li>
              <li>Electrical system integration</li>
              <li>Custom mounting solution development</li>
              <li>Belt drive system optimization</li>
            </ul>
          </section>

          <section className="project-section">
            <h2>Challenges & Solutions</h2>
            <ul>
              <li>Complex gear ratio calculations for optimal performance</li>
              <li>Custom mounting system for existing bike geometry</li>
              <li>Manufacturing constraints requiring creative solutions</li>
              <li>Integration of motor controller and battery systems</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Bike;
