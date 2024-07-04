import React from "react";
import "./projects.css";
import { Link } from "react-router-dom";
import scoutLogo from '../images/scoutlogo.jpg';

function Projects() {
  return (
    <div className="projectGrid">
      <div className="box">
        <h1 className="title">Scout</h1>
        <div className="projectContent">
          <img src={scoutLogo} alt="Scout Logo" className="projectImgScout"/>
          <div className="projectText">
            <p>
              <strong className="secondTitle"> Scout - Shopping and Selling App</strong><br/>
              Scout is an innovative mobile application designed to revolutionize the way users shop and sell items. The app utilizes advanced scanning technology to recognize items and compare prices across 100+ retailers. Additionally, Scout features an automated selling tool that creates and uploads listings to eBay within seconds.<br/><br/>
              
              <Link to="/projects/scout">Show More</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="box">
        <h1 className="title">Raspberry Pi Glasses</h1>
        <p>sdujfg8umsng8msg8uymnbg87uhnb,egu8ngu8sebmgu8bsemgbesgdsgdsgdsgdggdgdgdgmbseugbsey7u8gby7ueg.</p>
      </div>
      <div className="box">
        <h1 className="title">Project 3</h1>
        <p>NGSJIOnijsgnionghi,9owenjmghi9owsenemgh9usnemhgu</p>
      </div>
      <div className="box">
        <h1 className="title">Project 4</h1>
        <p>sgngsngsdngjikosdngikjosdngjiksd.</p>
      </div>
    </div>
  );
}

export default Projects;