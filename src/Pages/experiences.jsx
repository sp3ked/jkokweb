import React from "react";
import { Link } from "react-router-dom";
import "./experiences.css";

function Experiences() {
  return (
    <div className="experienceBox">
      <div className="experienceContent">
        <h3>
          <a
            href="https://10x.so"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            10x
          </a>{" "}
          (AI Growth)
        </h3>
        <span className="experience-role">
          Intern | May 2026 – Jul 2026
        </span>
        <ul className="experience-list">
          <li>Owned an AI ad pipeline end to end: parallelized per-avatar generation of TikTok/IG slideshows and videos (Seedance 2.0 + Claude creative direction, ffmpeg assembly) with no throughput ceiling</li>
          <li>Built one-click competitor ad cloning that rebrands rivals' top creatives into ready-to-run ads and growth content</li>
        </ul>
      </div>

      <div className="experience-divider"></div>

      <div className="experienceContent">
        <h3>
          <a
            href="https://turtosa.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            Turtosa
          </a>
        </h3>
        <span className="experience-role">
          Co-Founder | July 2025 – Present
        </span>
        <p>
          Turtosa is more of the name for the product creations of me, my
          brother, and friends. There are many brands and products under it.
        </p>
      </div>

      <div className="experience-divider"></div>

      <div className="experienceContent">
        <h3>
          <Link to="/boilerblockchain" className="contact-link">
            Boiler Blockchain
          </Link>{" "}
          (Purdue's Crypto Club)
        </h3>
        <span className="experience-role">
          Core Developer + Board | Sep 2024 – Present
        </span>
        <ul className="experience-list">
          <li>Bring in new members, land sponsor funding, teach club sessions, and organize trips to MBC, Solana Breakpoint, and ETHDenver</li>
          <li>Won the Polymarket bounty at MBC 2025 with Jaeger and represented the club at hackathons and conferences</li>
          <li>
            Built and maintain the official Boiler Blockchain website (
            <a
              href="https://boilerblockchain.org"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              boilerblockchain.org
            </a>
            ) and its dynamic event and organization content. See the{" "}
            <Link to="/boilerblockchain" className="contact-link">
              club gallery and highlights
            </Link>
            .
          </li>
        </ul>
      </div>

      <div className="experience-divider"></div>

      <div className="experienceContent">
        <h3>Zerogon Consulting</h3>
        <span className="experience-role">
          Front-End Developer | Jan 2024 - Aug 2024
        </span>
        <p>
          At Zerogon Consulting, I developed and maintained responsive user
          interfaces for web applications. I worked mainly with react and durign this expirence I
          collaborated with back-end developers to deliver seamless user
          experiences.
        </p>
        <ul className="experience-list">
          <li>Leveraged custom hooks to consume REST/GraphQL endpoints</li>
          <li>Optimized UI for different sized displays</li>
          <li>Enhanced animations (using framer motion) for immersive ux</li>
          <li>Built modular React components using custom hooks</li>
        </ul>
      </div>

      <div className="experienceFooter">
        <p className="contact-text">
          I am always looking for new opportunities!{" "}
          <a href="mailto:j@kokinda.com" className="contact-link">
            Contact me here
          </a>
        </p>
      </div>
    </div>
  );
}

export default Experiences;
