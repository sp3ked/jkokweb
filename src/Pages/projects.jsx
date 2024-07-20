import React from "react";
import "./projects.css";
import { Link } from "react-router-dom";
import scoutLogo from '../images/scout1.jpg';
import raspberryPiGlasses from '../images/raspi1.jpg';

function Projects() {
  return (
    <div className="projectGrid">
      <TerminalBox title="Scout" content={
        <>
          <div className="projectContent">
            <img src={scoutLogo} alt="Scout Logo" className="projectImg"/>
            <div className="projectText">
              <p>
                <strong className="secondTitle">Scout - Shopping and Selling App</strong><br/>
                Scout is an innovative mobile application designed to revolutionize the way users shop and sell items. The app utilizes "google scan" to recognize items and compare prices across 100+ retailers. Additionally, Scout features an automated selling tool that creates and uploads listings to eBay within seconds.<br/><br/>
                
                <Link className="seemore" to="/projects/scout">...see more</Link>
              </p>
            </div>
          </div>
        </>
      } />
      <TerminalBox title="Raspi" content={
        <>
          <div className="projectContent">
            <img src={raspberryPiGlasses} alt="Raspberry Pi Glasses" className="projectImg"/>
            <div className="projectText">
              <p>
                <strong className="secondTitle">Raspi - Smart Glasses</strong><br/>
                Using a Raspberry Pi, my brother and I created "smart" glasses that capture images, process them using the Inception v3 model, and display the predicted object on a screen. This project is based around the topics of computer vision, machine learning, and wearable technology.<br/><br/>
                <br/>
                <Link className="seemore" to="/projects/raspi">...see more</Link>
              </p>
            </div>
          </div>
        </>
      } />
      <TerminalBox title="Project" content={
        <p>Coming Soon...</p>
      } />
      <TerminalBox title="Project" content={
        <p>Coming Soon...</p>
      } />
    </div>
  );
}

function TerminalBox({ title, content }) {
  return (
    <div className="terminalBox">
      <div className="terminalHeader">
        <span className="terminalTitle">Terminal</span>
        <div className="terminalControls">
          <span className="terminalControl">－</span>
          <span className="terminalControl">☐</span>
          <span className="terminalControl">✕</span>
        </div>
      </div>
      <div className="terminalContent">
        <p className="terminalPrompt">C:\Users\Projects\{title}&gt;</p>
        {content}
      </div>
    </div>
  );
}

export default Projects;