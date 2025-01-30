import React from 'react';
import "./projectPage.css";

function Meta() {
  return (
    <div className="project-page">
      <div className="terminal-box">
        <div className="terminal-header">
          <span className="terminal-title">C:\Users\Projects\Meta-Answerer></span>
          <div className="terminal-controls">
            <span>−</span>
            <span>□</span>
            <span>×</span>
          </div>
        </div>
        <div className="terminal-content">
          <h1>Meta Answerer</h1>
          <div className="project-details">
            <h2>Overview</h2>
            <p>An advanced AI system that provides meta-level analysis of questions and problems, focusing on the approach and methodology rather than just the answer.</p>
            
            <h2>Features</h2>
            <ul>
              <li>Problem-solving strategy analysis</li>
              <li>Step-by-step reasoning explanation</li>
              <li>Multiple perspective consideration</li>
              <li>Interactive learning paths</li>
            </ul>

            <h2>Technologies Used</h2>
            <ul>
              <li>Python</li>
              <li>Large Language Models</li>
              <li>React.js</li>
              <li>Node.js</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Meta;
