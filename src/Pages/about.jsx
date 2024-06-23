import React from "react";
import "./about.css";

function About() {
    return (
        <div className="about-container">
            <div className="about-content">
                <h1 className='title'>About Me</h1>
                <p>Hello, my name is Joey Kokinda. I am currently a student at Purude University pursuing a Bachelor's degree in Artificial Intelligence. My passion lies in AI and robotics, where I am eager to apply what I have learned and explore new technologies.</p>
                <p>My academic journey began at Downingtown STEM Academy where I completed my International Baccalaureate. During my tenure, I honed my skills in Python, Microsoft Office Suite, and Adobe Creative Cloud, and gained a solid foundation in SEO, email marketing, and content creation.</p>
                <p>Outside the classroom, I am actively involved in various clubs such as the Multi-Disciplinary Robotics Club, the Artificial Intelligence Club, and engage in activities like flag football and intramural basketball. My time at RIT has not only been about academic growth but also about applying my knowledge in practical settings. I have worked on several projects, including building a robot for FIRST Robotics competitions, which has significantly enhanced my engineering and team collaboration skills.</p>
                <p>I've also been working on a lot of web design. Ensuring the websites are user-friendly and effective in communicating a brand's message. Check out one of my projects <a href="http://pyras.ai" target="_blank" rel="noopener noreferrer" className="underline-link">here</a>.</p>
                <p>As I continue my journey, I am excited about the opportunities to further develop my skills and make a positive impact in the field of robotics and artificial intelligence.</p>
            </div>
        </div>
    );
}

export default About;
