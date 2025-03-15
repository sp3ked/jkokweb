import React from "react";
import { Link } from "react-router-dom";
import purdueLogo from "../images/purdue.png";
import "./education.css";

function Education() {
  return (
    <div className="educationBox">
      <div className="educationHeader">
        <span className="terminalTitle">C:\Users\Education&gt;</span>
        <div className="terminalControls">
          <span className="terminalControl">−</span>
          <span className="terminalControl">□</span>
          <span className="terminalControl">×</span>
        </div>
      </div>

      <div className="educationContent">
        <div className="education-item">
          <div className="education-logo">
            <img src={purdueLogo} alt="Purdue University logo" />
          </div>
          <div className="education-info">
            <h3>Purdue University</h3>
            <span className="education-degree">
              Bachelor's degree, Artificial Intelligence
            </span>
            <span className="education-duration">Aug 2024 - May 2027</span>
            <p className="education-activities">
              <strong>Activities:</strong> Boiler Blockchain Club (dev team), Purdue Hackers, 
              ML@Purdue, and Intramural (Basketball, Wiffleball, Ultimate Frisbee).
            </p>
          </div>
        </div>
      </div>

      <div className="educationFooter">
        <p className="contact-text">
          Read my full resume{" "}
          <Link to="/resume" className="contact-link">
            here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Education;
