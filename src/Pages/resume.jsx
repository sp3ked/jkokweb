import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./resume.css";

const skillGroups = [
  {
    label: "AI & Agents",
    items: [
      "LLM orchestration (Claude, OpenAI, Gemini)",
      "Multi-agent systems",
      "MCP servers",
    ],
  },
  {
    label: "Languages",
    items: ["Go", "TypeScript", "Python", "Rust", "Solidity", "C"],
  },
  {
    label: "Infra & Web3",
    items: [
      "Docker",
      "PostgreSQL",
      "Supabase",
      "Next.js",
      "Cloudflare",
      "Linux",
      "ffmpeg",
      "Hedera HCS",
      "EVM / Foundry",
      "Solana",
      "BTC/XMR nodes",
    ],
  },
];

function Resume() {
  return (
    <div className="resume-page">
      <Helmet>
        <title>Resume | Joey Kokinda</title>
        <meta
          name="description"
          content="Joey Kokinda's resume and skills: Go, TypeScript, Solana, Hedera HCS, Foundry, AI agents, and full-stack development."
        />
        <link rel="canonical" href="https://jkokinda.com/resume" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Link to="/" className="back-btn">
        ← Back
      </Link>

      <div className="resume-content">
        <h1>Resume</h1>
        <div className="resume-image-container">
          <img
            src="/resume_screenshot.png"
            alt="Joey Kokinda's Resume"
            className="resume-image"
          />
        </div>
        <div className="download-section">
          <p>Want a copy?</p>
          <a
            href="/KokindaJoeResume.pdf"
            download="Kokinda_Joey_Resume.pdf"
            className="download-button"
          >
            Download Resume ↓
          </a>
        </div>

        <div className="resume-skills">
          <h2>Skills &amp; Stack</h2>
          {skillGroups.map((group) => (
            <div key={group.label} className="resume-skill-group">
              <span className="resume-skill-label">{group.label}:</span>{" "}
              <span className="resume-skill-items">
                {group.items.join(", ")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Resume;
