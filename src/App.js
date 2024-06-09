import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="sidebar">
        <img src="/path_to_your_profile_picture.jpg" alt="Profile" className="profile-pic" />
        <h1>Your Name</h1>
        <a href="https://github.com/sp3ked" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://twitter.com/sp3ked" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
      <div className="projectGrid">
        
        <div className="box">
        <h1 className="title">Scout</h1>
          <div className="projectimg"></div>
          <p>;sdgn,mug7mh8wmeghb87webgy8ubgm,8mbwg8bmwyugbmweymgbywebmgewgb</p>
        </div>
        <div className="box">
          <h1 className="title">Raspberry Pi Glasses</h1>
          <div className="projectimg"></div>
          <p>sdujfg8umsng8msg8uymnbg87uhnb,egu8ngu8sebmgu8bsemgbesgdsgdsgdsgdggdgdgdgmbseugbsey7u8gby7ueg.</p>
        </div>
        <div className="box">
        <h1 className="title">Project 3</h1>
          <div className="projectimg"></div>
          <p>NGSJIOnijsgnionghi,9owenjmghi9owsenemgh9usnemhgu</p>
        </div>
        <div className="box">
        <h1 className="title">Project 4</h1>
          <div className="projectimg"></div>
          <p>sgngsngsdngjikosdngikjosdngjiksd.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
