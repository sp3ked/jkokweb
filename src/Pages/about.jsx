import React from "react";
import "./About.css"; // Make sure to create an accompanying CSS file to style this page.

function About() {
    return (
        <div className="about-container">
            <h1>About Me</h1>
            <img src="/path_to_your_profile_image.jpg" alt="Profile" className="profile-image" />
            <p>Hello, my name is Kevin. I am a 16-year-old technology enthusiast and an intern at a NYC startup working on virtual try-on technology. I am passionate about building and learning new technologies, especially in the field of artificial intelligence and web development.</p>
            <p>In my free time, I enjoy working on side projects, such as a 3D dingboard and custom bike and skateboard building. I also like to contribute to open-source projects and am active on GitHub and Twitter where I share my projects and connect with other tech enthusiasts.</p>
            <p>This website is a portfolio of my projects and a blog where I document my journey in technology. Feel free to reach out through my social media channels listed below or via email at your_email@example.com.</p>
            <a href="https://github.com/sp3ked" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://twitter.com/sp3ked" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
    );
}

export default About;
