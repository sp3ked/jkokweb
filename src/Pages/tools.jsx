import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "./projectDetails.css";
import toolImage1 from "../images/tool.png";
import toolImage2 from "../images/tool2.png";
import toolImage3 from "../images/tool3.png";
import toolImage4 from "../images/tool1.png";

function ToolsWebsite() {
  const images = [toolImage1, toolImage2, toolImage3, toolImage4];
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
        <h1>Tools Website - Useful Tools Collection</h1>
        <a href="https://kokinda.dev/" 
           target="_blank" 
           rel="noopener noreferrer"
           className="live-link">
          View Live Site ↗
        </a>
      </div>

      <div className="app-gallery">
        {images.map((img, idx) => (
          <div key={idx} className="gallery-item">
            <img src={img} alt={`Tools ${idx + 1}`} />
          </div>
        ))}
      </div>

      <div className="project-content">
        <p className="projectDetailsText">
          <a
            href="https://kokinda.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-link"
          >
            <strong>-- Visit the site (kokinda.dev) --</strong>
          </a>
          <br />
          <br />
          <strong>Description:</strong>
          <br />
          This Tools website provides an all-in-one collection of essential
          utilities to simplify everyday tasks. It’s designed to save time and
          keep all tools accessible in one location. Was created because I was
          annoyed of alwasy havign to lookup simple needed tools.
          <br />
          <br />
          <strong>Features:</strong>
          <br />
          <ul>
            <li>
              QR Code Generator - Create custom QR codes for URLs and text.
            </li>
            <li>
              Password Generator - Generate strong, customizable passwords.
            </li>
            <li>
              Unit Converter - Convert between units like length, weight, and
              volume.
            </li>
            <li>
              Word Counter - Get word, character, and sentence counts for any
              text.
            </li>
            <li>
              Lorem Ipsum Generator - Generate placeholder text in different
              formats.
            </li>
            <li>
              JSON Formatter - Format and validate JSON for development
              purposes.
            </li>
            <li>
              Font Pairing Generator - Get font pair suggestions with
              previews.
            </li>
            <li>
              Coin Flip - Flip a virtual coin with animation and sound
              effects.
            </li>
            <li>
              Bill Splitter - Easily split bills with tip calculation per
              person.
            </li>
            <li>
              More being added as fit visit the website to see all of them
            </li>
          </ul>
          <br />
          <br />
          <strong>Technical Specifications:</strong>
          <br />
          <strong>Platform:</strong> React and React Router for navigation
          <br />
          <strong>Styling:</strong> Custom CSS for consistent theming and
          responsiveness
          <br />
          <strong>State Management:</strong> React Hooks for handling tool
          settings and options
          <br />
          <strong>Data Persistence:</strong> Local storage for saving settings
          like dark/light mode
          <br />
          <br />
          <strong>Key Features:</strong>
          <br />
          <ul>
            <li>Search functionality to quickly find tools.</li>
            <li>Responsive design to ensure usability on all devices.</li>
            <li>Simple, Efficent, Easy</li>
          </ul>
        </p>
      </div>
    </div>
  );
}

export default ToolsWebsite;
