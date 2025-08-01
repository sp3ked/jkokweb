import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faXTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./contact.css";

function ContactPage() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <Link to="/" className="contact-back-button">
          Back
        </Link>
        <h1 className="contact-title">Contact Me</h1>
        <p className="contact-description">
          Feel free to reach out to me using the details below or on any of my
          social platforms!
        </p>
        <div className="contact-details">
          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <span>Email: </span>
            <a href="mailto:jkokinda9@gmail.com" className="contact-link">
              jkokinda9 (at) gmail (dot) com
            </a>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
            <span>Phone: </span>
            <a href="tel:+601701998" className="contact-link">
              6one0-7zero1-19nine8
            </a>
          </div>
        </div>
        <h2 className="contact-subtitle">Social Links</h2>
        <div className="contact-social-links">
          <a
            href="https://github.com/joeykokinda"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-link"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://x.com/sp3ked"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-link"
          >
            <FontAwesomeIcon icon={faXTwitter} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/jkokinda/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-link"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
