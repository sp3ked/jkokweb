import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Experiences from "./experiences";
import Education from "./education";
import "./experienceEducation.css";

function ExperienceEducation() {
  return (
    <div className="project-details-container">
      <Helmet>
        <title>Experience & Education | Joey Kokinda</title>
        <meta
          name="description"
          content="Joey Kokinda's professional experience and education — Turtosa, Boiler Blockchain, Zerogon Consulting, Purdue University, and RIT."
        />
        <link rel="canonical" href="https://jkokinda.com/experience" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Link to="/" className="back-btn">
        ← Back
      </Link>

      <div className="project-header">
        <h1>Experience &amp; Education</h1>
      </div>

      <section className="exp-edu-section">
        <h2 className="exp-edu-heading">Experience</h2>
        <Experiences />
      </section>

      <section className="exp-edu-section">
        <h2 className="exp-edu-heading">Education</h2>
        <Education />
      </section>
    </div>
  );
}

export default ExperienceEducation;
