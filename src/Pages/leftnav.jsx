import React from "react";
import "./leftnav.css";

function LeftNav() {
    return (
        <div className="Profile">
            <img src="/path_to_your_profile_picture.jpg" alt="Profile" className="profile-pic" />
            <h1>Your Name</h1>
            <a href="https://github.com/sp3ked" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://twitter.com/sp3ked" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
    );
}

export default LeftNav;
