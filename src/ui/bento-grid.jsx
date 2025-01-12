// src/ui/bento-grid.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import "./bento-grid.css"; // Import the normal CSS

export function Grid({ className, children }) {
  return (
    <div className={`custom-grid ${className || ""}`}>
      {children}
    </div>
  );
}

export function GridItem({ className, title, description, onClick }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate("/desired-route");
    }
  };

  return (
    <div className={`custom-grid-item ${className || ""}`} onClick={handleClick}>
      <div className="title">{title}</div>
      <div className="description">{description}</div>
    </div>
  );
}