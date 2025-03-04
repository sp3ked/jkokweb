import React, { useEffect, useState, useMemo } from "react";
import "./projects.css";
import { Link, useNavigate } from "react-router-dom";
import scoutLogo from "../images/scout1.jpg";
import raspberryPiGlasses from "../images/raspi1.jpg";
import bikeimage from "../images/bike5.jpg";
import unboltedImage from "../images/unbolt.png";
import toolsImage from "../images/tool.png";
import docuImage from "../images/docu1.png"; 
import metaImage from "../images/meta.png"; 
import mlh1 from "../images/mlh1.png";
import cosmosImage from "../images/cosmosLogo.png"; // Changed to cosmosLogo.png

function Projects() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState([]);

  const filterCategories = useMemo(() => ({
    all: [],
    hardware: ["raspi", "bike"],
    software: ["docu", "scout", "tools", "cosmos"],
    hackathon: ["unbolted", "locallens", "cosmos"],
    active: ["docu", "scout", "tools", "cosmos"],
    inactive: ["unbolted", "raspi", "bike" ],
    oneTime: ["meta", "raspi", "bike", "locallens", "unbolted"],
  }), []);

  const projectsList = useMemo(() => ([
    {
      id: "cosmos",
      title: "CosmosPool - DeFi Liquidity Protocol",
      image: cosmosImage,
      status: "live",
      liveUrl: "https://www.cosmospool.xyz/",
      description:
        "CosmosPool is a decentralized liquidity provision system built on Unichain that simplifies DeFi participation. It enables users to deposit single-sided assets (e.g. WETH or USDC) into concentrated liquidity pools, automating the matching process with complementary deposits for optimal liquidity provision.",
      link: "/projects/cosmos",
      tags: ["DeFi", "Smart Contracts", "Uniswap", "Blockchain"],
      hackathon: true,
    },
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
      id: "locallens",
      title: "LocalLens",
      image: mlh1,
      status: "completed",
      completionDate: "Winter 2025",
      description:
        "LocalLens is a hands-free, real-time campus tour system designed for Meta Glasses. It uses location-based audio narration to provide users with contextual insights about their surroundings without the need to look at a screen. By leveraging geofencing, live streaming, and text-to-speech technology, LocalLens enables an immersive exploration experience—whether on a college campus or any tour-like setting.",
      link: "/projects/locallens",
      tags: ["React Native", "Express JS", "Selenium"],
      hackathon: true,
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
      hackathon: true,
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
    
  ]), []);

  useEffect(() => {
    const savedPosition = sessionStorage.getItem("projectsScrollPosition");
    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition));
      sessionStorage.removeItem("projectsScrollPosition");
    }
  }, []);

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredProjects(projectsList);
    } else {
      const selectedIds = filterCategories[activeFilter] || [];
      setFilteredProjects(
        projectsList.filter((project) => selectedIds.includes(project.id))
      );
    }
  }, [activeFilter, filterCategories, projectsList]);

  const handleProjectClick = (link) => {
    sessionStorage.setItem(
      "projectsScrollPosition",
      window.pageYOffset.toString(),
    );
    window.scrollTo(0, 0);
    navigate(link);
  };

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
          <div className="project-filters">
            <span className="filter-label">Sort by: </span>
            <button 
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'hardware' ? 'active' : ''}`}
              onClick={() => setActiveFilter('hardware')}
            >
              Hardware
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'software' ? 'active' : ''}`}
              onClick={() => setActiveFilter('software')}
            >
              Software
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'hackathon' ? 'active' : ''}`}
              onClick={() => setActiveFilter('hackathon')}
            >
              Hackathons
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'active' ? 'active' : ''}`}
              onClick={() => setActiveFilter('active')}
            >
              Active
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'inactive' ? 'active' : ''}`}
              onClick={() => setActiveFilter('inactive')}
            >
              Inactive
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'oneTime' ? 'active' : ''}`}
              onClick={() => setActiveFilter('oneTime')}
            >
              One Time Completion
            </button>
          </div>
          
          <div className="project-grid">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="project-card"
                data-type={project.type}
                data-id={project.id}
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
                  {project.status === "in-progress" && (
                    <span className="status-dot in-progress">In Progress</span>
                  )}
                  {project.hackathon && (
                    <span className="status-dot hackathon">Hackathon</span>
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
