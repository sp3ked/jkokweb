import React from "react";
import "./projects.css";
import { Link } from "react-router-dom";
import scoutLogo from "../images/scout1.jpg";
import raspberryPiGlasses from "../images/raspi1.jpg";
import bikeimage from "../images/bike5.jpg";
import unboltedImage from "../images/unbolt.png";
import toolsImage from "../images/tool.png";
import docuImage from "../images/docu.png"; // Add this image
import metaImage from "../images/meta.png"; // Add this image

function Projects() {
  const projectsList = [
    {
      id: "scout",
      title: "Scout - Shopping and Selling App",
      image: scoutLogo,
      description: "Scout is an innovative mobile application designed to revolutionize the way users shop and sell items. The app utilizes \"google scan\" to recognize items and compare prices across 100+ retailers.",
      link: "/projects/scout",
      tags: ["React Native", "Node.js", "AWS", "Computer Vision"]
    },
    {
      id: "unbolted",
      title: "Unbolted - On-Demand GPU Computing",
      image: unboltedImage,
      description: "Unbolted provides instant access to a fleet of high-end GPUs for using, tweaking, or training AI models. It offers a simple interface for novices and advanced control for power users.",
      link: "/projects/unbolted",
      tags: ["Python", "CUDA", "TensorFlow", "Kubernetes"]
    },
    {
      id: "tools",
      title: "Tools - Website With Useful Tools",
      image: toolsImage,
      description: "This website consolidates various essential tools for developers and daily tasks in one place, allowing users to access a QR code generator, password generator, unit converter, and more without searching for individual tools every time.",
      link: "/projects/tools",
      tags: ["JavaScript", "React", "Web Development"]
    },
    {
      id: "raspi",
      title: "Raspi - Smart Glasses",
      image: raspberryPiGlasses,
      description: "Using a Raspberry Pi, my brother and I created \"smart\" glasses that capture images, process them using the Inception v3 model, and display the predicted object on a screen. This project is based around the topics of computer vision, machine learning, and wearable technology.",
      link: "/projects/raspi",
      tags: ["Raspberry Pi", "Python", "Machine Learning", "Computer Vision"]
    },
    {
      id: "bike",
      title: "Electric Bike - Conversion Project",
      image: bikeimage,
      description: "This project aims to convert a regular bike into an electric bike to address transportation challenges on large university campuses. The conversion includes a custom motor mount, multistage belt drive system, and swappable battery for extended use. Future plans include waterproofing and advanced features like regenerative braking.",
      link: "/projects/bike",
      tags: ["Mechanical Engineering", "Electrical Engineering", "CAD"]
    },
    {
      id: "docu",
      title: "Documentation Generator",
      image: docuImage,
      description: "An AI-powered tool that automatically generates comprehensive documentation for codebases. Utilizing LLMs to analyze code structure and create clear, accurate documentation.",
      link: "/projects/docu",
      tags: ["AI", "NLP", "JavaScript", "Python"]
    },
    {
      id: "meta",
      title: "Meta Answerer",
      image: metaImage,
      description: "An advanced AI system designed to provide meta-level analysis of questions and problems. Goes beyond direct answers to explain reasoning approaches and solution strategies.",
      link: "/projects/meta",
      tags: ["AI", "Machine Learning", "NLP"]
    }
  ];

  return (
    <>
      
      <div className="projects-terminal">
        <div className="terminal-header">
          <div className="terminal-title">C:\Users\Projects></div>
          <div className="terminal-controls">
            <span>−</span>
            <span>□</span>
            <span>×</span>
          </div>
        </div>
        
        <div className="terminal-content">
          <div className="project-grid">
            {projectsList.map((project) => (
              <div key={project.id} className="project-card">
                <img src={project.image} alt={project.title} />
                <div className="project-info">
                  <div>
                    <h3>{project.title}</h3>
                    <div className="project-tags">
                      {project.tags?.map(tag => (
                        <span key={tag} className="project-tag">{tag}</span>
                      ))}
                    </div>
                    <p>{project.description}</p>
                  </div>
                  <Link to={project.link} className="see-more">
                    View Project Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
