import React from "react";
import "./mobilenav.css";
import profilePic from '../images/pfp.png';

function MobileNav() {
    return (
        <div className="MobileProfile">
            <div className="mobile-content">
                <img src={profilePic} alt="Profile" className="mobile-profile-pic" />
                <div className="mobile-info">
                    <h1>Joey Kokinda</h1>
                    <div className="mobile-links">
                        <a href="https://github.com/sp3ked" target="_blank" rel="noopener noreferrer">Github</a>
                        <a href="https://twitter.com/sp3ked" target="_blank" rel="noopener noreferrer">X/Twitter</a>
                        <a href="https://www.linkedin.com/in/jkokinda/" target="_blank" rel="noopener noreferrer">LinkedIN</a>
                    </div>
                </div>
            </div>
            <p className="mobile-message">For the best experience, view on desktop</p>
        </div>
    );
}

export default MobileNav;