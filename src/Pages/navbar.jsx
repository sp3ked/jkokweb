import React from "react";
import { useAnimationContext } from "./animationContext";
import "./navbar.css";

function Navbar() {
  const { isAnimationDisabled, toggleAnimation } = useAnimationContext();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* <pre className="ascii-art">{`
 ●●●   ●●●  ●●● ●  ●  ●●●● ●●●  
●     ●  ●    ● ●  ●  ●    ●  ● 
 ●●●  ●●●   ●●● ●●●   ●●●  ●  ● 
    ● ●       ● ●  ●  ●    ●  ● 
●●●●  ●     ●●● ●   ● ●●●● ●●●  
`}</pre> */}
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
