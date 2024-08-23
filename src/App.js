import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Pages/navbar";
import Projects from "./Pages/projects";
import About from "./Pages/about";
import Resume from "./Pages/resume";
import LeftNav from "./Pages/leftnav";
import MobileNav from "./Pages/mobilenav";
import Scout from "./Pages/scout";
import Raspi from "./Pages/raspi";
import Langnav from "./Pages/langnav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 576);

  useEffect(() => {
    // Matrix canvas animation logic
    const canvas = document.getElementById("matrix-canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const katakana =
      "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
    const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nums = "0123456789";

    const alphabet = katakana + latin + nums;

    const fontSize = 16;
    const columns = canvas.width / fontSize;

    const rainDrops = [];

    for (let x = 0; x < columns; x++) {
      rainDrops[x] = 1;
    }

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "rgba(0, 255, 0, 0.4)";
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(
          Math.floor(Math.random() * alphabet.length),
        );
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
    };

    const interval = setInterval(draw, 60);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 576);
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Router>
      <canvas
        id="matrix-canvas"
        style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}
      ></canvas>
      <div className={`container ${isMobile ? "mobile" : ""}`}>
        {!isMobile && (
          <>
            <div className="langnav">
              <Langnav />
            </div>
            <div className="profile">
              <LeftNav />
            </div>
          </>
        )}
        {isMobile && (
          <div className="mobile-nav">
            <MobileNav />
          </div>
        )}
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
            <Route path="/projects/raspi" element={<Raspi />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
