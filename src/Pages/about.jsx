import React from "react";
import "./about.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="title">About Me</h1>
        <p>
          Hey, my name is Joey Kokinda. I am currently a student at Purude
          University pursuing a Bachelor's degree in Artificial Intelligence. My
          passion lies in AI and robotics and I love building things in these
          fields. I also have interest in basically anything tech related.
        </p>
        <p>
          Ive been wokring on many different things in the past few years, from
          hardware projects to seoftware projects. One example of a hardware
          project ive done is when me and my team made an Ai powered pacman
          robot to play in a real life game of pacman (The cad file can be found{" "}
          <a
            href="https://cad.onshape.com/documents/1a384639168640173528f35e/w/297262e1ee6944cdbbdc1550/e/1d1cce23977b581de6f023e4?renderMode=0&uiState=669924c9f63dd019d4336e48"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-link"
          >
            here
          </a>
          ). This is just one example, others can be found in my projects tab
          (bike conversion, smart glasses, etc.) In software ive worked on many
          differnet projects from online casino websites to mobile apps, see
          exact deatils in my projects tab. On the other side of this stuff, I
          also engage in activities like flag football, spikeball, and
          basketball.
        </p>
        <p>
          As I continue my journey throught college, I am excited about the
          opportunities to further develop my skills and make a positive impact
          in the world of tommorow.
        </p>
      </div>
    </div>
  );
}

export default About;
