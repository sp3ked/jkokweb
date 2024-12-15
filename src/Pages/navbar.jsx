import React from "react";
import { useAnimationContext } from "./animationContext";
import "./navbar.css";

// ASCII Art as a constant
const SPKED_ASCII = `
 ●●●   ●●●  ●●● ●  ●  ●●●● ●●●  
●     ●  ●    ● ●  ●  ●    ●  ● 
 ●●●  ●●●   ●●● ●●●   ●●●  ●  ● 
    ● ●       ● ●  ●  ●    ●  ● 
●●●●  ●     ●●● ●   ● ●●●● ●●●  
`;

function Navbar() {
  const { isAnimationDisabled, toggleAnimation } = useAnimationContext();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <pre className="ascii-art">{SPKED_ASCII}</pre>
      </div>
      <div className="navbar-right">
        <button onClick={toggleAnimation} className="toggle-animations">
          {isAnimationDisabled ? "Enable Animations" : "Disable Animations"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
