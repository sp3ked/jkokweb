import React from "react";
import "./App.css";
import Navbar from "./Pages/navbar";
import Projects from "./Pages/projects";
import About from "./Pages/about";
import Resume from "./Pages/resume";
import LeftNav from "./Pages/leftnav";
import Scout from "./Pages/scout"; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container">
        <div className="profile">
          <LeftNav />
        </div>
        <div className="navbar">
          <Navbar />
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects/scout" element={<Scout />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
