import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="sidebar">
        <img src="/path_to_your_profile_picture.jpg" alt="Profile" className="profile-pic" />
        <h1>Your Name</h1>
        <a href="https://github.com/sp3cked" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://twitter.com/sp3cked" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
      <div className="content">
        <div className="box">
          <div className="rectangle"></div>
          <p>Information about cars...</p>
        </div>
        <div className="box">
          <div className="rectangle"></div>
          <p>Information about cars...</p>
        </div>
        <div className="box">
          <div className="rectangle"></div>
          <p>Information about cars...</p>
        </div>
        <div className="box">
          <div className="rectangle"></div>
          <p>Information about cars...</p>
        </div>
      </div>
    </div>
  );
}

export default App;
