import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./projectDetails.css";
import youvest1 from "../images/YouVest/youvest1.png";
import youvest2 from "../images/YouVest/youvest2.png";
import youvest3 from "../images/YouVest/youvest3.png";
import youvest4 from "../images/YouVest/youvest4.png";

function YouVest() {
  const [lightboxImage, setLightboxImage] = useState(null);
  
  const images = [
    youvest1,
    youvest2,
    youvest3,
    youvest4,
  ];

  return (
    <>
      {lightboxImage && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightboxImage(null)}
        >
          <div className="lightbox-content">
            <img src={lightboxImage} alt="Full size" />
            <button
              className="lightbox-close"
              onClick={() => setLightboxImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
      <div className="project-details-container">
      <Helmet>
        <title>YouVest Project - Joey Kokinda</title>
        <meta name="description" content="YouVest is a decentralized creator investment platform built on Solana. Built for Colosseum Cypherpunk Hackathon 2025 by Joey Kokinda." />
        <link rel="canonical" href="https://jkokinda.com/projects/youvest" />
        <meta name="robots" content="index, follow, noarchive" />
      </Helmet>
      <Link to="/projects" className="back-button">
        ← Back to Projects
      </Link>

      <div className="project-header">
        <h1>YouVest - Decentralized Creator Investment Platform</h1>
        <div className="header-links">
          <a
            href="https://www.youvest.lol/"
            target="_blank"
            rel="noopener noreferrer"
            className="live-link"
          >
            Live Demo (Devnet) ↗
          </a>
          <a
            href="https://github.com/joeykokinda/solanaHackathon"
            target="_blank"
            rel="noopener noreferrer"
            className="live-link github-link"
          >
            GitHub ↗
          </a>
        </div>
      </div>

      <div className="app-gallery">
        {images.map((img, idx) => (
          <div key={idx} className="gallery-item">
            <img
              src={img}
              alt={`YouVest Platform ${idx + 1}`}
              style={{
                objectFit: "contain",
                background: "rgba(0, 0, 0, 0.8)",
                cursor: "pointer",
              }}
              onClick={() => setLightboxImage(img)}
            />
          </div>
        ))}
      </div>

      <div className="project-content">
        <div className="projectDetailsText">
          <section className="project-section">
            <h2>Overview</h2>
            <p>
              YouVest is a decentralized platform built on Solana that enables fans to directly invest in content creators. By tokenizing creator potential, YouVest creates a new financial primitive where supporters can share in a creator's success, and creators gain capital without traditional gatekeepers.
            </p>
            <p>
              <strong>Development:</strong> Built solo in one week for the Solana Cypherpunk Hackathon by Colosseum.
            </p>
          </section>

          <section className="project-section">
            <h2>The Problem</h2>
            <p>
              Content creators face constant pressure from platform algorithms, sponsorship deals, and opaque monetization systems. The traditional creator economy is broken:
            </p>
            <ul>
              <li>Creators rely on unpredictable ad revenue and platform policies</li>
              <li>Fans have no upside when creators they support become successful</li>
              <li>Platforms extract significant value while providing minimal transparency</li>
              <li>No direct financial relationship exists between creators and their true supporters</li>
            </ul>
          </section>

          <section className="project-section">
            <h2>The Solution</h2>
            <p>
              YouVest creates a two-sided marketplace where fans can invest directly in creators they believe in, and creators receive upfront capital to fund content production. Key features include:
            </p>
            <ul>
              <li>
                <strong>Creator Token Issuance:</strong> Each YouTuber gets their own SPL token on Solana
              </li>
              <li>
                <strong>Bonding Curve Pricing:</strong> Token price automatically adjusts based on supply and demand
              </li>
              <li>
                <strong>Growth-Linked Value:</strong> Token value tied to creator metrics (subscribers, views)
              </li>
              <li>
                <strong>Instant Liquidity:</strong> Buy or sell tokens anytime through the bonding curve
              </li>
              <li>
                <strong>Transparent Pricing:</strong> Automated market makers ensure fair, algorithmic pricing
              </li>
            </ul>
          </section>

          <section className="project-section">
            <h2>Technical Implementation</h2>
            <h3>Smart Contracts (Solana/Anchor)</h3>
            <ul>
              <li>
                <strong>Token Factory Program:</strong> Creates SPL tokens for each verified creator using Rust/Anchor
              </li>
              <li>
                <strong>Bonding Curve Program:</strong> Handles buy/sell transactions with quadratic price discovery
              </li>
              <li>
                <strong>Secure Escrow:</strong> Mechanisms protecting both creators and investors
              </li>
            </ul>

            <h3>Backend (Node.js + Express)</h3>
            <ul>
              <li>RESTful API for creators, tokens, and transactions</li>
              <li>YouTube OAuth integration for creator verification</li>
              <li>YouTube Data API v3 for pulling subscriber/view counts</li>
              <li>PostgreSQL database with Prisma ORM</li>
              <li>Deployed on Railway</li>
            </ul>

            <h3>Frontend (Next.js + React)</h3>
            <ul>
              <li>Landing page with creator discovery</li>
              <li>Individual creator profiles with charts</li>
              <li>Wallet integration (Phantom, Solflare)</li>
              <li>Portfolio tracking for investors</li>
              <li>Deployed on Vercel</li>
            </ul>

            <h3>Bonding Curve Formula</h3>
            <p>
              <code>price = base_price + (tokens_sold² × curve_factor)</code>
            </p>
            <ul>
              <li>Base Price: 0.000001 SOL (1,000 lamports)</li>
              <li>Curve Factor: Price increases quadratically with supply</li>
              <li>Simple and transparent - no complex multipliers</li>
            </ul>
          </section>

          <section className="project-section">
            <h2>How It Works</h2>
            <p>
              1. <strong>Discover:</strong> Browse early-stage YouTubers using real YouTube API data
            </p>
            <p>
              2. <strong>Invest:</strong> Buy creator tokens on Solana. Price increases as more people buy
            </p>
            <p>
              3. <strong>Track:</strong> Monitor token value as creators grow
            </p>
            <p>
              4. <strong>Trade:</strong> Sell anytime for profit (or loss). Liquidity is built into the bonding curve
            </p>
          </section>

          <section className="project-section">
            <h2>Future Development</h2>
            <ul>
              <li>
                <strong>Creator Analytics Dashboard:</strong> Track follower growth, engagement metrics, and token performance
              </li>
              <li>
                <strong>Tiered Investment Benefits:</strong> Unlock exclusive content based on investment level
              </li>
              <li>
                <strong>Secondary Markets:</strong> Enable peer-to-peer token trading
              </li>
              <li>
                <strong>Cross-Platform Integration:</strong> Pull creator metrics from YouTube, TikTok, Instagram
              </li>
              <li>
                <strong>Revenue Sharing:</strong> Automate distribution of creator earnings to token holders
              </li>
              <li>
                <strong>Mainnet Launch:</strong> Transition from devnet to mainnet with real economic activity
              </li>
            </ul>
          </section>

          <section className="project-section">
            <h2>Why This Matters</h2>
            <p>
              The creator economy is projected to reach $480B by 2027, yet creators capture only a fraction of the value they generate. YouVest reimagines this dynamic by aligning incentives between creators and their communities, creating sustainable funding models that don't rely on algorithmic whims or corporate gatekeepers.
            </p>
            <p>
              By building on Solana, we make this vision accessible to everyone—not just wealthy investors or established creators. The future of content creation is decentralized, transparent, and community-owned.
            </p>
          </section>
        </div>
      </div>
      </div>
    </>
  );
}

export default YouVest;

