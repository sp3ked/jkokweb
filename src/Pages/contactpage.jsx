import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faXTwitter,
    faLinkedin,
    faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import profilePic from "../images/jkokpfp.png";
import "./contactpage.css";

function ContactPageSimple() {
    const generateVCard = () => {
        // Obfuscated phone number to prevent bot scraping
        const phoneNum = ['6', '1', '0', '7', '0', '1', '9', '9', '9', '8'].join('');
        const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Joey Kokinda
N:Kokinda;Joey;;;
ORG:Purdue University
TITLE:AI Student & Developer
EMAIL:jkokinda9@gmail.com
TEL:+1${phoneNum}
URL:https://jkokinda.com
NOTE:AI Student at Purdue University. Experience in AI-powered applications across web, mobile, and embedded systems. Passion for AI, computer vision, and robotics.
END:VCARD`;

        const blob = new Blob([vcard], { type: 'text/vcard' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Joey_Kokinda.vcf';
        link.click();
        window.URL.revokeObjectURL(url);
    };

    return (
        <div className="contactpage-wrapper">
            <Link to="/" className="back-btn contactpage-back">← Back</Link>
            <div className="contactpage-container">
                <div className="contact-card">
                    <div className="contact-header">
                        <div className="contact-profile-section">
                            <img src={profilePic} alt="Joey Kokinda" className="contact-profile-img" />
                        </div>
                        <div className="contact-profile-info">
                            <h1 className="contactpage-title">Joey Kokinda</h1>
                            <p className="contact-role">AI Student & Developer</p>
                            <p className="contact-university">Purdue University</p>
                        </div>
                    </div>

                    <div className="contact-about">
                        <p className="contact-bio">
                            Studying AI at Purdue University with experience developing AI powered 
                            applications across web, mobile, and embedded systems. My passion lies 
                            in web3, AI, 3D printing, and robotics. I love building things that push 
                            the boundaries of what's possible.
                        </p>
                    </div>

                    <div className="contact-actions">
                        <button 
                            onClick={generateVCard}
                            className="action-button primary"
                        >
                            <FontAwesomeIcon icon={faDownload} />
                            Add Contact (iPhone)
                        </button>
                        <Link to="/" className="action-button secondary">
                            Learn More
                        </Link>
                    </div>

                    <div className="contactpage-social">
                        <div className="contactpage-social-links">
                            <a
                                href="https://github.com/joeykokinda"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contactpage-social-link"
                                aria-label="GitHub"
                            >
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a
                                href="https://x.com/sp3ked"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contactpage-social-link"
                                aria-label="Twitter/X"
                            >
                                <FontAwesomeIcon icon={faXTwitter} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/jkokinda/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contactpage-social-link"
                                aria-label="LinkedIn"
                            >
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a
                                href="https://t.me/joe123459"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contactpage-social-link"
                                aria-label="Telegram"
                            >
                                <FontAwesomeIcon icon={faTelegram} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPageSimple;
