import React, { useEffect } from "react";
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

  useEffect(() => {
    // Only restore scroll position if coming back from a project
    const savedPosition = sessionStorage.getItem("projectsScrollPosition");
    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition));
      sessionStorage.removeItem("projectsScrollPosition");
    }
  }, []);

  const handleProjectClick = (link) => {
    // Save current scroll position before navigating
    sessionStorage.setItem(
      "projectsScrollPosition",
      window.pageYOffset.toString(),
    );
    window.scrollTo(0, 0); // Scroll to top immediately
    navigate(link);
  };

  const projectsList = [
    {
      id: "docu",
      title: "Docu - Document Scanner & AI Analyzer",
      image: docuImage,
      type: "mobile-app",
      status: "live",
      liveUrl:
        "https://apps.apple.com/us/app/docu-ai-scanner-analyzer/id6739954302?platform=iphone",
      description:
        "Docu is an AI-powered document scanning and analysis tool that enables users to easily digitize, organize, and summarize their documents. The app can extract critical information, create searchable text, and generate concise summaries for quick insights.",
      link: "/projects/docu",
      tags: ["React Native", "Computer Vision"],
    },
    {
      id: "meta",
      title: "LiveAnswer - For Meta Glasses",
      image: metaImage,
      status: "completed",
      completionDate: "Winter 2025",
      description:
        "Utilizing the livestream feature of Meta Glasses, I developed a system that streams real-time video to ChatGPT, which then analyzes the content and generates a response. The response is posted as a comment on the stream, allowing you to hear the answer directly through your earpiece.",
      link: "/projects/meta",
      tags: ["Selenium", "Python", "Computer Vision"],
    },
    
    {
      id: "scout",
      title: "Scout - Shopping and Selling App",
      image: scoutLogo,
      type: "mobile-app",
      status: "live",
      liveUrl:
        "https://apps.apple.com/us/app/scout-shop-sell-with-camera/id6502788045?platform=iphone",
      description:
        'Scout is an innovative mobile application designed to revolutionize the way users shop and sell items. The app utilizes "google scan" to recognize items and compare prices across 100+ retailers.',
      link: "/projects/scout",
      tags: ["React Native", "Web Scraping", "Computer Vision"],
    },

    
    {
      id: "tools",
      title: "Tools - Website With Useful Tools",
      image: toolsImage,
      status: "live",
      liveUrl: "https://kokinda.dev/",
      description:
        "This website consolidates various essential tools for developers (me), such things as allowing users to access a QR code generator, password generator, unit converter, and more without searching for individual tools every time.",
      link: "/projects/tools",
      tags: ["React"],
    },
    {
      id: "unbolted",
      title: "Unbolted - On-Demand GPU Computing",
      image: unboltedImage,
      status: "inactive",
      description:
        "Unbolted (a hackathon project) simplifies the GPU rental process, making it easy for new users to spin up high-performance GPUs for AI workloads while offering advanced controls for experienced users.",
      link: "/projects/unbolted",
      tags: ["React", "API Integration", "Stripe Payments", "Kubernetes"],
    },
    {
      id: "raspi",
      title: "Raspi - Smart Glasses",
      image: raspberryPiGlasses,
      status: "completed",
      completionDate: "Winter 2023",
      description:
        "Custom-built smart glasses using a Raspberry Pi that use computer vision to identify objects in real-time. Features a compact OLED display, camera module, and 3D-printed housing for a fully wearable experience.",
      link: "/projects/raspi",
      tags: ["Raspberry Pi", "Python", "Computer Vision"],
    },
    {
      id: "bike",
      title: "Electric Bike - Conversion Project",
      image: bikeimage,
      status: "completed",
      completionDate: "Summer 2024",
      description:
        "Custom electric bike conversion featuring a Flipsky motor, multistage belt drive system, and swappable Ryobi battery. Designed to solve campus transportation with a focus on efficiency and easy maintenance.",
      link: "/projects/bike",
      tags: ["Mechanical Engineering", "Electrical Engineering", "CAD"],
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
                data-id={project.id} // Add this attribute
                onClick={() => handleProjectClick(project.link)}
              >
                <div className="project-status">
                  {project.status === "live" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="status-dot live"
                    >
                      Live ↗
                    </a>
                  )}
                  {project.status === "inactive" && (
                    <span className="status-dot inactive">Inactive</span>
                  )}
                  {project.status === "completed" && (
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
                      {project.tags?.map((tag) => (
                        <span key={tag} className="project-tag">
                          {tag}
                        </span>
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
