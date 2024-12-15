import React from "react";
import { Link } from "react-router-dom";
import profilePic from "../images/pfp.png";
import { useAnimationContext } from "./animationContext";

import Projects from "./projects";
import "./home.css";


function HomePage() {
  const { isAnimationDisabled} = useAnimationContext();

  return (
    <div className={`home-page ${isAnimationDisabled ? 'animations-disabled' : ''}`}>
      <section className="intro-section">
        <div className="content-wrapper">
        <div className="text-content">
  <h1>Joey Kokinda</h1>
  <p>Student studying AI at <a 
      href="https://www.admissions.purdue.edu/majors/a-to-z/artificial-intelligence-science.php" 
      target="_blank" 
      rel="noopener noreferrer"
      className="link"
    >
      Purdue University
    </a></p>
  
  <div className="social-links">
    <a 
      href="https://github.com/sp3ked" 
      target="_blank" 
      rel="noopener noreferrer"
      className="social-link"
    >
      GitHub
    </a>
    <a 
      href="https://x.com/sp3ked" 
      target="_blank" 
      rel="noopener noreferrer"
      className="social-link"
    >
      X
    </a>
    <a 
      href="https://www.linkedin.com/in/jkokinda/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="social-link"
    >
      LinkedIn
    </a>
    <Link to="/resume" className="social-link">
      Resume
    </Link>
  </div>
</div>
          
          <div className="profile-section">
            <img src={profilePic} alt="Profile" className="profile-image" />
          </div>
        </div>
      </section>

      <div className="terminal-window">
  <div className="terminal-header">
    <span className="terminal-title">C:\Users\About>_</span>
    <div className="terminal-buttons">
      <span className="terminal-button">−</span>
      <span className="terminal-button">□</span>
      <span className="terminal-button">×</span>
    </div>
  </div>
  <div className="terminal-content">
    <p>
      Hey, I'm Joey and I'm studying AI at Purdue University. My passion lies in AI and robotics - 
      I love building things that push the boundaries of what's possible. Currently exploring the blockchain.
    </p>
  </div>
</div>

<div className="skills-section section">
  <h2>Technical Skills</h2>
  <div className="skills-grid">
    <div className="skill-item">
      <img src={require("../images/python.png")} alt="Python" />
      <span>Python</span>
    </div>
    <div className="skill-item">
      <img src={require("../images/react.png")} alt="React" />
      <span>React</span>
    </div>
    <div className="skill-item">
      <img src={require("../images/javascript.png")} alt="JavaScript" />
      <span>JavaScript</span>
    </div>
    <div className="skill-item">
      <img src={require("../images/html.png")} alt="HTML" />
      <span>HTML</span>
    </div>
    <div className="skill-item">
      <img src={require("../images/solidity.png")} alt="Solidity" />
      <span>Solidity</span>
    </div>
    <div className="skill-item">
      <img src={require("../images/arduino.png")} alt="Arduino" />
      <span>Arduino</span>
    </div>
    <div className="skill-item">
      <img src={require("../images/typescript.png")} alt="TypeScript" />
      <span>TypeScript</span>
    </div>
  </div>
</div>


      <section id="projects" className="skills-section section">
      <h2>Projects - </h2>
        <Projects />
      </section>
    </div>
  );
}

export default HomePage;