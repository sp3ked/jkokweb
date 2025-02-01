import React from "react";
import "./projects.css";
import { Link, useNavigate } from "react-router-dom";
import scoutLogo from "../images/scout1.jpg";
import raspberryPiGlasses from "../images/raspi1.jpg";
import bikeimage from "../images/bike5.jpg";
import unboltedImage from "../images/unbolt.png";
import toolsImage from "../images/tool.png";
import docuImage from "../images/docu1.png"; // Add this image
import metaImage from "../images/meta.png"; // Add this image

function Projects() {
  const navigate = useNavigate();
  const projectsList = [
    {
      id: "scout",
      title: "Scout - Shopping and Selling App",
      image: scoutLogo,
      type: "mobile-app", // Add this field
      status: "live",
      liveUrl: "https://apps.apple.com/us/app/scout-shop-sell-with-camera/id6502788045?platform=iphone",  
      description: "Scout is an innovative mobile application designed to revolutionize the way users shop and sell items. The app utilizes \"google scan\" to recognize items and compare prices across 100+ retailers.",
      link: "/projects/scout",
      tags: ["React Native", "Node.js", "Computer Vision"]
    },
    {
      id: "meta",
      title: "Meta Answerer",
      image: metaImage,
      status: "completed",
      completionDate: "Winter 2025",
      description: "Utizlizing the livestream function of the Meta Glasses I created a way to stream this info to chatGPT to then comment on the stream with an answer. Which you can then hear in your ear.",
      link: "/projects/meta",
      tags: ["Selenium", "Python", "Computer Vision"]
    },
    {
      id: "docu",
      title: "Documentation Generator",
      image: docuImage,
      type: "mobile-app", // Add this field
      status: "live",
      liveUrl: "https://apps.apple.com/us/app/docu-ai-scanner-analyzer/id6739954302?platform=iphone",
      description: "An AI-powered tool that automatically generates comprehensive documentation for codebases. Utilizing LLMs to analyze code structure and create clear, accurate documentation.",
      link: "/projects/docu",
      tags: ["React Native", "Computer Vision"]
    },
    
    {
      id: "unbolted",
      title: "Unbolted - On-Demand GPU Computing",
      image: unboltedImage,
      status: "inactive",
      description: "Unbolted provides instant access to a fleet of high-end GPUs for using, tweaking, or training AI models. It offers a simple interface for novices and advanced control for power users.",
      link: "/projects/unbolted",
      tags: ["Python", "CUDA", "TensorFlow", "Kubernetes"]
    },
    {
      id: "tools",
      title: "Tools - Website With Useful Tools",
      image: toolsImage,
      status: "live",
      liveUrl: "https://kokinda.dev/",
      description: "This website consolidates various essential tools for developers and daily tasks in one place, allowing users to access a QR code generator, password generator, unit converter, and more without searching for individual tools every time.",
      link: "/projects/tools",
      tags: ["JavaScript", "React", "Web Development"]
    },
    {
      id: "raspi",
      title: "Raspi - Smart Glasses",
      image: raspberryPiGlasses,
      status: "completed",
      completionDate: "Winter 2023",
      description: "Using a Raspberry Pi, my brother and I created \"smart\" glasses that capture images, process them using the Inception v3 model, and display the predicted object on a screen. This project is based around the topics of computer vision, machine learning, and wearable technology.",
      link: "/projects/raspi",
      tags: ["Raspberry Pi", "Python", "Machine Learning", "Computer Vision"]
    },
    {
      id: "bike",
      title: "Electric Bike - Conversion Project",
      image: bikeimage,
      status: "completed",
      completionDate: "Summer 2024",
      description: "This project aims to convert a regular bike into an electric bike to address transportation challenges on large university campuses. The conversion includes a custom motor mount, multistage belt drive system, and swappable battery for extended use. Future plans include waterproofing and advanced features like regenerative braking.",
      link: "/projects/bike",
      tags: ["Mechanical Engineering", "Electrical Engineering", "CAD"]
    },
    
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
              <div
                key={project.id}
                className="project-card"
                data-type={project.type}
                data-id={project.id}  // Add this attribute
                onClick={() => navigate(project.link)}
              >
                <div className="project-status">
                  {project.status === 'live' && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="status-dot live">
                      Live ↗
                    </a>
                  )}
                  {project.status === 'inactive' && <span className="status-dot inactive">Inactive</span>}
                  {project.status === 'completed' && (
                    <span className="status-dot completed">
                      Completed {project.completionDate}
                    </span>
                  )}
                </div>
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
