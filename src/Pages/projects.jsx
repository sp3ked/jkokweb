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
            <img src={scoutLogo} alt="Scout Logo" className="projectImgScout"/>
            <div className="projectText">
              <p>
                <strong className="secondTitle">Scout - Shopping and Selling App</strong><br/>
                Scout is an innovative mobile application designed to revolutionize the way users shop and sell items. The app utilizes advanced scanning technology to recognize items and compare prices across 100+ retailers. Additionally, Scout features an automated selling tool that creates and uploads listings to eBay within seconds.<br/><br/>
                
                <Link className="seemore" to="/projects/scout">...see more</Link>
              </p>
            </div>
          </div>
        </>
      } />
      <TerminalBox title="Raspberry Pi Glasses" content={
        <>
          <div className="projectContent">
            <img src={raspberryPiGlasses} alt="Raspberry Pi Glasses" className="projectImgScout"/>
            <div className="projectText">
              <p>
                <strong className="secondTitle">AI-Powered Smart Glasses</strong><br/>
                Using a Raspberry Pi, my brother and I created smart glasses that capture images, process them using the Inception v3 model, and display the predicted object on a screen. This innovative project combines computer vision, machine learning, and wearable technology.<br/><br/>
                <br/>
                <Link className="seemore" to="/projects/raspi">...see more</Link>
              </p>
            </div>
          </div>
        </>
      } />
      <TerminalBox title="Project 3" content={
        <p>NGSJIOnijsgnionghi,9owenjmghi9owsenemgh9usnemhgu</p>
      } />
      <TerminalBox title="Project 4" content={
        <p>sgngsngsdngjikosdngikjosdngjiksd.</p>
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
        <p className="terminalPrompt">C:\Users\{title}&gt;</p>
        {content}
      </div>
    </div>
  );
}

export default Projects;