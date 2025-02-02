import React from "react";
import { useAnimationContext } from "./animationContext";
import "./navbar.css";

function Navbar() {
  const { isAnimationDisabled, toggleAnimation } = useAnimationContext();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button onClick={toggleAnimation} className="toggle-animations">
          {isAnimationDisabled ? "Enable Animations" : "Disable Animations"}
        </button>
      </div>
      <div className="navbar-right">
        {/* Empty or can be used for other controls */}
      </div>
    </nav>
  );
}

export default Navbar;
