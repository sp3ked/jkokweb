import React from "react";
import "./App.css";
import Navbar from "./Pages/navbar.jsx";
import Projects from "./Pages/projects.jsx";
import About from "./Pages/about.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container">
        <div className="Profile">
          <img src="/path_to_your_profile_picture.jpg" alt="Profile" className="profile-pic" />
          <h1>Your Name</h1>
          <a href="https://github.com/sp3ked" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://twitter.com/sp3ked" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
