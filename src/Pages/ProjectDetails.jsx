import React from "react";
import { useParams } from "react-router-dom";
import "./projectDetails.css";

function ProjectDetails() {
  const { projectId } = useParams();
  const images = [
    // Example image paths
    "/images/example1.jpg",
    "/images/example2.jpg",
    "/images/example3.jpg",
  ];

  return (
    <div className="project-details-container">
      <h1>{projectId.charAt(0).toUpperCase() + projectId.slice(1)} Details</h1>
      <h2>Project Title</h2>
      <p>
        Detailed description of your project. Explain features, challenges, or
        anything relevant to the project.
      </p>
      <div className="carousel-wrapper">
        {images.map((img, idx) => (
          <div key={idx} className="carousel-card">
            <img src={img} alt={`Slide ${idx}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectDetails;
