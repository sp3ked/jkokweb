import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Navbar.css";
import Navbar from "./Navbar";
import Projects from "./Projects";
import About from "./About";
import Resume from "./Resume"; 

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
