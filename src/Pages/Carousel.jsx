import React, { useState, useEffect, useCallback } from "react";
import "./projects.css";

function Carousel({ projects, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleNext = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
      setProgress(0);
    }
  }, [isAnimating, projects.length]);

  const handlePrev = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? projects.length - 1 : prevIndex - 1,
      );
      setProgress(0);
    }
  }, [isAnimating, projects.length]);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500); // Match CSS transition duration
    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNext();
          return 0;
        }
        return prev + 1; // Adjust for progress speed
      });
    }, 100);

    return () => clearInterval(interval);
  }, [handleNext]);

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
      <div className="carousel-progress-bar">
        <div
          className="carousel-progress"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="carousel-tabs">
        {projects.map((_, index) => (
          <span
            key={index}
            className={`carousel-tab ${index === currentIndex ? "active" : ""}`}
            onClick={() => {
              setCurrentIndex(index);
              setProgress(0);
            }}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
