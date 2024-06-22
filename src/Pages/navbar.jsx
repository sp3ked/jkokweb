import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
              <div className="cent-nav">
                    <Link className="nav-item" to="/projects"><span>Home</span></Link>
                    <Link className="nav-item" to="/projects"><span>Project</span></Link>
                    <Link className="nav-item" to="/about"><span>About</span></Link>
                    <Link className="nav-item" to="/resume"><span>Resume</span></Link>
                </div>
            </nav>
  );
}


