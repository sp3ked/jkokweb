import React from "react";
import "./leftnav.css";
import profilePic from "../images/pfp.png";

function LeftNav() {
  return (
    <div className="Profile">
      <div>
        <div className="circular--landscape">
          <img src={profilePic} alt="Profile" className="profile-pic" />
        </div>
        <h1>Joey Kokinda</h1>
        <p className="description">Student studying AI at Purdue University</p>
        <a href="/about" className="seemore">
          ...see more (click me)
        </a>
      </div>
      <div className="links">
        <a
          href="https://github.com/sp3ked"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="innerLink">Github</div>
        </a>
        <a
          href="https://twitter.com/sp3ked"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="innerLink">X/Twitter</div>
        </a>
        <a
          href="https://www.linkedin.com/in/jkokinda/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="innerLink">LinkedIN</div>
        </a>
      </div>
    </div>
  );
}

export default LeftNav;
