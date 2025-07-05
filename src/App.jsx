import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Resume from "./Pages/resume";
import Scout from "./Pages/scout";
import Raspi from "./Pages/raspi";
import Bike from "./Pages/bike";
import Unbolted from "./Pages/unbolted";
import Tool from "./Pages/tools";
import NotFound from "./Pages/notfound";
import Contact from "./Pages/contact";
import ContactPageSimple from "./Pages/contactpage";
import Admin from "./Pages/admin";
import Docu from "./Pages/docu";
import Meta from "./Pages/meta";
import LocalLens from "./Pages/LocalLens";
import Projects from "./Pages/projects";
import Cosmos from "./Pages/cosmos";
import Block from "./Pages/block";
import AILounge from "./Pages/AILounge";
import Trip from "./Pages/trip";
import Promptr from "./Pages/promptr";
// import Langnav from "./Pages/langnav";
import {
  AnimationProvider,
  useAnimationContext,
} from "./Pages/animationContext";
import Navbar from "./Pages/navbar";
import IntroAnimation from "./Pages/IntroAnimation";
import "./App.css";

function MatrixBackground() {
  const { isAnimationDisabled } = useAnimationContext();

  useEffect(() => {
    if (isAnimationDisabled) return;

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
    const rainDrops = Array.from({ length: columns }).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.116)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "rgba(0, 255, 0, 0.199)";
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
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, [isAnimationDisabled]);

  return (
    <canvas
      id="matrix-canvas"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        display: isAnimationDisabled ? "none" : "block",
      }}
    />
  );
}

function AppContent() {
  const [showIntro, setShowIntro] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Skip intro animation for /contactpage route
    if (location.pathname === '/contactpage') {
      setShowIntro(false);
    } else {
      setShowIntro(true);
    }
  }, [location.pathname]);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <div className="app">
      {showIntro && location.pathname !== '/contactpage' ? (
        <IntroAnimation onComplete={handleIntroComplete} />
      ) : (
        <>
          <MatrixBackground />
          <Navbar />
          {/* <Langnav /> */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contactpage" element={<ContactPageSimple />} />
            <Route path="/projects/trip" element={<Trip />} />
            <Route path="/projects/scout" element={<Scout />} />
            <Route path="/projects/raspi" element={<Raspi />} />
            <Route path="/projects/bike" element={<Bike />} />
            <Route path="/projects/unbolted" element={<Unbolted />} />
            <Route path="/projects/tools" element={<Tool />} />
            <Route path="/projects/docu" element={<Docu />} />
            <Route path="/projects/meta" element={<Meta />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/locallens" element={<LocalLens />} />
            <Route path="/projects/cosmos" element={<Cosmos />} />
            <Route path="/projects/block" element={<Block />} />
            <Route path="/projects/promptr" element={<Promptr />} />
            <Route path="/ai" element={<AILounge />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AnimationProvider>
        <AppContent />
      </AnimationProvider>
    </Router>
  );
}

export default App;
