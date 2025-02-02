import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "./projectDetails.css";
import unbolt from "../images/unbolt.png";
// import unbolt1 from "../images/unbolt1.png";
import unbolt2 from "../images/unbolt2.png";
import unbolt3 from "../images/unbolt3.png";
import unbolt4 from "../images/unbolt4.png";

function Unbolted() {
  const images = [unbolt, unbolt2, unbolt3, unbolt4];
  const location = useLocation();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [location]);

  return (
    <div className="project-details-container">
      <Link to="/" className="back-button">
        ← Back to Projects
      </Link>
      
      <div className="project-header">
        <h1>Unbolted - On-Demand GPU Computing</h1>
        <div className="header-links">
          <a href="https://devpost.com/software/unbolted"
             target="_blank"
             rel="noopener noreferrer"
             className="live-link">
            View DevPost ↗
          </a>
          <a href="https://github.com/brickhack-gpu"
             target="_blank"
             rel="noopener noreferrer"
             className="live-link github-link">
            View GitHub ↗
          </a>
        </div>
      </div>

      <div className="app-gallery">
        {images.map((img, idx) => (
          <div key={idx} className="gallery-item">
            <img src={img} alt={`Unbolted ${idx + 1}`} />
          </div>
        ))}
      </div>

      <div className="project-content">
        <div className="projectDetailsText">
          <section className="project-section">
            <h2>Overview</h2>
            <p>Unbolted provides instant access to high-end GPUs for AI model usage and training. 
            Built during a hackathon, it offers both a simple interface for novices and advanced 
            controls for power users, addressing the need for flexible, on-demand GPU computing.</p>
          </section>

          <section className="project-section">
            <h2>Technical Stack</h2>
            <ul>
              <li><strong>Backend:</strong> Golang for efficient server performance</li>
              <li><strong>Database:</strong> PostgreSQL with Bun ORM</li>
              <li><strong>Frontend:</strong> Vite/React.js</li>
              <li><strong>Cloud:</strong> GCP Compute Engine</li>
            </ul>
          </section>

          <section className="project-section">
            <h2>Key Features</h2>
            <ul>
              <li>Instant access to high-end GPUs</li>
              <li>User-friendly interface with advanced options</li>
              <li>Pay-per-use pricing model</li>
              <li>Automated resource management</li>
            </ul>
          </section>

          <section className="project-section">
            <h2>Development Notes</h2>
            <p>Built during a 24-hour hackathon, demonstrating rapid prototyping and MVP development. 
            The project showcases our team's ability to quickly learn and implement new technologies 
            under time constraints.</p>
          </section>

        </div>
      </div>
    </div>
  );
}
export default Unbolted;
