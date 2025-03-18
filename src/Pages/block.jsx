import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./projectDetails.css";
import block1 from "../images/block1.png";
import block2 from "../images/block2.png";
import block3 from "../images/block3.png";
import block4 from "../images/block4.png";

function Block() {
    const images = [block1, block2, block3, block4];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="project-details-container">
            <Link to="/" className="back-button">
                ← Back to Projects
            </Link>

            <div className="project-header">
                <div className="app-title-section">
                    <img src={block1} alt="Boiler Blockchain Logo" className="app-icon" />
                    <div className="app-title-content">
                        <h1>Boiler Blockchain - Web Development</h1>
                    </div>
                </div>
                <div className="header-links">
                    <a
                        href="https://www.boilerblockchain.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="live-link"
                    >
                        View Live Website ↗
                    </a>
                    <a
                        href="https://github.com/Boiler-Blockchain-Club"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="live-link github-link"
                    >
                        See Repo ↗
                    </a>
                </div>
            </div>

            <div className="app-gallery">
                {images.map((img, idx) => (
                    <div key={idx} className="gallery-item">
                        <img src={img} alt={`Boiler Blockchain ${idx + 1}`} />
                    </div>
                ))}
            </div>

            <div className="project-content">
                <div className="projectDetailsText">
                    <section className="project-section">
                        <h2>Overview</h2>
                        <p>
                            Boiler Blockchain is Purdue University's premier blockchain and
                            Web3 organization. I contributed to the development of their
                            website, which serves as a hub for blockchain education,
                            community building, and showcasing their events and initiatives
                            on campus.
                        </p>
                    </section>

                    <section className="project-section">
                        <h2>Core Features</h2>
                        <ul>
                            <li>Responsive design optimized for all device sizes</li>
                            <li>Event calendar and registration system</li>
                            <li>Resources section for blockchain education</li>
                            <li>Team member profiles and contact information</li>
                        </ul>
                    </section>

                    <section className="project-section">
                        <h2>Technical Details</h2>
                        <ul>
                            <li>
                                <strong>Frontend:</strong> React.js, Tailwind CSS
                            </li>
                            <li>
                                <strong>Backend:</strong> Node.js
                            </li>
                            <li>
                                <strong>Deployment:</strong> Vercel
                            </li>
                            <li>
                                <strong>Version Control:</strong> Git/GitHub
                            </li>
                        </ul>
                    </section>

                    <section className="project-section">
                        <h2>Current Status</h2>
                        <p>
                            The website is live and actively maintained. It continues to evolve
                            with new features and content updates to support Boiler Blockchain's
                            mission of blockchain education and community building at Purdue.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Block; 