import React, { useState, useEffect } from "react";
import "./projects.css";
import { Link } from "react-router-dom";
import scoutLogo from "../images/scout1.jpg";
import raspberryPiGlasses from "../images/raspi1.jpg";
import bikeimage from "../images/bike5.jpg";
import unboltedImage from "../images/unbolt.png";
import toolsImage from "../images/tool.png";

function Carousel({ projects, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? projects.length - 1 : prevIndex - 1
      );
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="carousel">
      <h2>{title}</h2>
      <div className="carousel-container">
        <button className="carousel-button prev" onClick={handlePrev}>
          &lt;
        </button>
        <div className={`carousel-item ${isAnimating ? "animating" : ""}`}>
          {projects[currentIndex]}
        </div>
        <button className="carousel-button next" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </div>
  );
}

function Projects() {
  const softwareProjects = [
    <TerminalBox
      title="Scout"
      content={
        <div className="projectContent">
          <img src={scoutLogo} alt="Scout Logo" className="projectImg" />
          <div className="projectText">
            <p>
              <strong className="secondTitle">
                Scout - Shopping and Selling App
              </strong>
              <br />
              Scout is an innovative mobile application designed to
              revolutionize the way users shop and sell items. The app
              utilizes "google scan" to recognize items and compare prices
              across 100+ retailers. Additionally, Scout features an
              automated selling tool that creates and uploads listings to
              eBay within seconds.
              <br />
              <br />
              <Link className="seemore" to="/projects/scout">
                ...see more (click me)
              </Link>
            </p>
          </div>
        </div>
      }
    />,
    <TerminalBox
      title="Unbolted"
      content={
        <div className="projectContent">
          <img
            src={unboltedImage}
            alt="Unbolted - On-Demand GPU Computing"
            className="projectImg"
          />
          <div className="projectText">
            <p>
              <strong className="secondTitle">
                Unbolted - On-Demand GPU Computing
              </strong>
              <br />
              Unbolted provides instant access to a fleet of high-end GPUs
              for using, tweaking, or training AI models. It offers a simple
              interface for novices and advanced control for power users.
              The project addresses the need for flexible, on-demand GPU
              computing without expensive hardware purchases or inflexible
              subscriptions.
              <br />
              <br />
              <Link className="seemore" to="/projects/unbolted">
                ...see more (click me)
              </Link>
            </p>
          </div>
        </div>
      }
    />,
    <TerminalBox
      title="ToolsWebsite"
      content={
        <div className="projectContent">
          <img
            src={toolsImage}
            alt="Tools Website"
            className="projectImg"
          />
          <div className="projectText">
            <p>
              <strong className="secondTitle">
                Tools - Website With Useful Tools
              </strong>
              <br />
              This website consolidates various essential tools for
              developers and daily tasks in one place, allowing users to
              access a QR code generator, password generator, unit converter,
              and more without searching for individual tools every time.
              <br />
              <br />
              <Link className="seemore" to="/projects/tools">
                ...see more (click me)
              </Link>
            </p>
          </div>
        </div>
      }
    />,
  ];

  const hardwareProjects = [
    <TerminalBox
      title="Raspi"
      content={
        <div className="projectContent">
          <img
            src={raspberryPiGlasses}
            alt="Raspberry Pi Glasses"
            className="projectImg"
          />
          <div className="projectText">
            <p>
              <strong className="secondTitle">Raspi - Smart Glasses</strong>
              <br />
              Using a Raspberry Pi, my brother and I created "smart" glasses
              that capture images, process them using the Inception v3
              model, and display the predicted object on a screen. This
              project is based around the topics of computer vision, machine
              learning, and wearable technology.
              <br />
              <br />
              <Link className="seemore" to="/projects/raspi">
                ...see more (click me)
              </Link>
            </p>
          </div>
        </div>
      }
    />,
    <TerminalBox
      title="ElectricBike"
      content={
        <div className="projectContent">
          <img
            src={bikeimage}
            alt="Electric Bike Conversion"
            className="projectImg"
          />
          <div className="projectText">
            <p>
              <strong className="secondTitle">
                Electric Bike - Conversion Project
              </strong>
              <br />
              This project aims to convert a regular bike into an electric
              bike to address transportation challenges on large university
              campuses. The conversion includes a custom motor mount,
              multistage belt drive system, and swappable battery for
              extended use. Future plans include waterproofing and advanced
              features like regenerative braking.
              <br />
              <br />
              <Link className="seemore" to="/projects/electricbike">
                ...see more (click me)
              </Link>
            </p>
          </div>
        </div>
      }
    />,
  ];

  return (
    <div className="projects">
      <Carousel projects={softwareProjects} title="Software Projects" />
      <Carousel projects={hardwareProjects} title="Hardware Projects" />
      <div className="project-buttons">
        <h3>Explore All Projects:</h3>
        <Link to="/projects/scout" className="projectButton">
          Scout - Shopping and Selling App
        </Link>
        <Link to="/projects/unbolted" className="projectButton">
          Unbolted - On-Demand GPU Computing
        </Link>
        <Link to="/projects/tools" className="projectButton">
          Tools - Website with Useful Tools
        </Link>
        <Link to="/projects/raspi" className="projectButton">
          Raspi - Smart Glasses
        </Link>
        <Link to="/projects/electricbike" className="projectButton">
          Electric Bike Conversion
        </Link>
      </div>
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
