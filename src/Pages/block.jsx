import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./projectDetails.css";
import block1 from "../images/block1.png";
import block2 from "../images/block2.png";
import block3 from "../images/block3.png";
import block4 from "../images/block4.png";

function Block() {
    const images = [block1, block2, block3, block4];
    const [showSwipeHint, setShowSwipeHint] = useState(true);
    const galleryRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        const handleGalleryScroll = () => {
            if (showSwipeHint) {
                setShowSwipeHint(false);
            }
        };

        const handleTouchStart = () => {
            if (showSwipeHint) {
                setShowSwipeHint(false);
            }
        };

        // HELLO WORLDS HEHEHEHA
        const galleryElement = galleryRef.current;
        if (galleryElement) {
            galleryElement.addEventListener('scroll', handleGalleryScroll);
            galleryElement.addEventListener('touchstart', handleTouchStart);
        }

        // Clean up event listeners
        return () => {
            if (galleryElement) {
                galleryElement.removeEventListener('scroll', handleGalleryScroll);
                galleryElement.removeEventListener('touchstart', handleTouchStart);
            }
        };
    }, [showSwipeHint]);

    return (
        <div className="project-details-container">
            <Link to="/" className="back-button">
                ← Back to Projects
            </Link>

            <div className="project-header">
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
                        href="https://github.com/BoilerBlockchainWebsite"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="live-link github-link"
                    >
                        See Repo ↗
                    </a>
                </div>
            </div>

            <div className={`app-gallery ${showSwipeHint ? 'show-hint' : ''}`} ref={galleryRef}>
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
                            Boiler Blockchain is Purdue University's blockchain and
                            Web3 club. I contributed to majority of the development of the
                            website as we upgraded it from v2 to v3.
                        </p>
                    </section>

                    <section className="project-section">
                        <h2>Core Features</h2>
                        <ul>
                            <li>Responsive design optimized for all device sizes</li>
                            <li>Clean animated ui</li>
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
                                <strong>Deployment:</strong> Vercel
                            </li>
                        </ul>
                    </section>

                    <section className="project-section">
                        <h2>Current Status</h2>
                        <p>
                            The website is live and actively maintained by me and one other person. It will continue to evolve
                            with new features and updates as the club grows.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Block; 