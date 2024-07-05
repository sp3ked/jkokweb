import React from "react";
import "./leftnav.css";
import profilePic from '../images/pfp.png';
import githubIcon from '../images/github.svg'; 
import twitterIcon from '../images/twitter.svg';
import linkedinIcon from '../images/linkedin.svg'; 

function LeftNav() {
    return (
        <div className="Profile">
            <div>
                <div className="circular--landscape">
                    <img src={profilePic} alt="Profile" className="profile-pic" />
                </div>
                <h1>Joey Kokinda</h1>
                <p className="description">Student studying AI at Purdue University</p>
                <a href="/about" className="seemore">...see more</a>
            </div>
            <div className="links">
                <a href="https://github.com/sp3ked" target="_blank" rel="noopener noreferrer"> {/* opens new tab  */} 
                    <img src={githubIcon} alt="GitHub" />
                </a>
                <a href="https://twitter.com/sp3ked" target="_blank" rel="noopener noreferrer">
                    <img src={twitterIcon} alt="Twitter" />
                </a>
                <a href="https://www.linkedin.com/in/jkokinda/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinIcon} alt="LinkedIn" />
                </a>
            </div>
        </div>
    );
}

export default LeftNav;
