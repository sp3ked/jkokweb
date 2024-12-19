import React from "react";
import { Link } from "react-router-dom";
import "./admin.css";

function Admin({ isAnimationDisabled }) {
  return (
    <div
      className={`adm-container ${
        isAnimationDisabled ? "adm-animations-disabled" : ""
      }`}
    >
      <div className="adm-terminal-box">
        <div className="adm-terminal-header">
          <span className="adm-terminal-title">Terminal</span>
          <div className="adm-terminal-controls">
            <span className="adm-terminal-control">－</span>
            <span className="adm-terminal-control">☐</span>
            <span className="adm-terminal-control">✕</span>
          </div>
        </div>
        <div className="adm-terminal-content">
          <p className="adm-terminal-prompt">C:\Users\Admin&gt;</p>
          <div className="adm-message">
            <h1>Access Denied</h1>
            <p>Why are we even trying this it is my personal site lol</p>
            <p>
              here is my secret number +one-(6one0)-seven01-nineteen98, text me
              :){" "}
            </p>
            <p></p>
          </div>
          <Link to="/" className="adm-home-link">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Admin;
