import React from 'react';
import "./projectPage.css";

function Docu() {
  return (
    <div className="project-page">
      <div className="terminal-box">
        <div className="terminal-header">
          <span className="terminal-title">C:\Users\Projects\Documentation-Generator></span>
          <div className="terminal-controls">
            <span>−</span>
            <span>□</span>
            <span>×</span>
          </div>
        </div>
        <div className="terminal-content">
          <h1>Documentation Generator</h1>
          <div className="project-details">
            <h2>Overview</h2>
            <p>An AI-powered documentation generator that automatically analyzes codebases and creates comprehensive documentation.</p>
            
            <h2>Features</h2>
            <ul>
              <li>Automatic code analysis</li>
              <li>Natural language generation</li>
              <li>Support for multiple programming languages</li>
              <li>Custom documentation templates</li>
            </ul>

            <h2>Technologies Used</h2>
            <ul>
              <li>Python</li>
              <li>OpenAI API</li>
              <li>Natural Language Processing</li>
              <li>AST Parsing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Docu;
