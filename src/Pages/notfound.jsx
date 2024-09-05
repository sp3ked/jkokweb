import React from "react";
import { Link } from "react-router-dom";
import "./notfound.css";

function NotFound({ isAnimationDisabled }) {
  return (
    <div className={`nf-container ${isAnimationDisabled ? 'nf-animations-disabled' : ''}`}>
      <div className="nf-terminal-box">
        <div className="nf-terminal-header">
          <span className="nf-terminal-title">Terminal</span>
          <div className="nf-terminal-controls">
            <span className="nf-terminal-control">－</span>
            <span className="nf-terminal-control">☐</span>
            <span className="nf-terminal-control">✕</span>
          </div>
        </div>
        <div className="nf-terminal-content">
          <p className="nf-terminal-prompt">C:\Users\Error&gt;</p>
          <div className="nf-error-message">
            <h1>404 - Page Not Found</h1>
            <p>The requested URL was not found on this server.</p>
            <p>Error: 0x00000404</p>
          </div>
          <Link to="/" className="nf-home-link">Return to Home</Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;