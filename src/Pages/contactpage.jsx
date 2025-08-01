import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faXTwitter,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./contactpage.css";

function ContactPageSimple() {
    return (
        <div className="contactpage-wrapper">
            <div className="contactpage-container">
                <Link to="/" className="contactpage-back-button">
                    ← Back
                </Link>
                <h1 className="contactpage-title">Contact</h1>
                <p className="contactpage-description">
                    Get in touch with me through any of the channels below.
                </p>

                <div className="contactpage-details">
                    <div className="contactpage-item">
                        <FontAwesomeIcon icon={faEnvelope} className="contactpage-icon" />
                        <div className="contactpage-info">
                            <span className="contactpage-label">Email</span>
                            <a href="mailto:jkokinda9@gmail.com" className="contactpage-link">
                                jkokinda9@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="contactpage-item">
                        <FontAwesomeIcon icon={faPhone} className="contactpage-icon" />
                        <div className="contactpage-info">
                            <span className="contactpage-label">Phone</span>
                            <a href="tel:+6017019998" className="contactpage-link">
                                610-701-9998
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contactpage-social">
                    <h2 className="contactpage-social-title">Connect</h2>
                    <div className="contactpage-social-links">
                        <a
                            href="https://github.com/joeykokinda"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contactpage-social-link"
                            aria-label="GitHub"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                            <span>GitHub</span>
                        </a>
                        <a
                            href="https://x.com/sp3ked"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contactpage-social-link"
                            aria-label="Twitter/X"
                        >
                            <FontAwesomeIcon icon={faXTwitter} />
                            <span>Twitter</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/jkokinda/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contactpage-social-link"
                            aria-label="LinkedIn"
                        >
                            <FontAwesomeIcon icon={faLinkedin} />
                            <span>LinkedIn</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPageSimple; 