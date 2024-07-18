import React from "react";
import "./about.css";

function About() {
    return (
        <div className="about-container">
            <div className="about-content">
                <h1 className='title'>About Me</h1>
                <p>Hey, my name is Joey Kokinda. I am currently a student at Purude University pursuing a Bachelor's degree in Artificial Intelligence. My passion lies in AI and robotics and I love building things in these fields. I also have interest in basically anything tech related.</p>
                <p>During high school I learned basic skills in Python, Video editing, mnay skills from FRC, and honestly I regret not doing much more. But I am currently changing my bad habits and building for a bettter tommorow. </p>
                <p>During my first year at college I joined many clubs including Multi-Disciplinary Robotics Club, where we made an Ai powered pacman robot uses to play in a real life game of pacman. (The cad file can be found <a href="https://cad.onshape.com/documents/1a384639168640173528f35e/w/297262e1ee6944cdbbdc1550/e/1d1cce23977b581de6f023e4?renderMode=0&uiState=669924c9f63dd019d4336e48" target="_blank" rel="noopener noreferrer" className="underline-link">here</a>). I also joined the Artificial Intelligence Club where we learned topics like renfrocement leanrnign and deep learning and how to apply them in todays world. On the other side of this I also engaged in activities like flag football and intramural basketball.</p>
                <p>Ouside of school I've also been working on a lot of web design and app development. Check out my app in the projects tab called Scout or click here <a href="http://jkok.dev/projects/scout" target="_blank" rel="noopener noreferrer" className="underline-link">here</a>.</p>
                <p>As I continue my journey throught college, I am excited about the opportunities to further develop my skills and make a positive impact in the world of tommorow.</p>
            </div>
        </div>
    );
}

export default About;
