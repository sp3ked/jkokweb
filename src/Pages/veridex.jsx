import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./projectDetails.css";
import veridex1 from "../images/veridex/veridex1.png";
import veridex2 from "../images/veridex/veridex2.png";
import veridex3 from "../images/veridex/veridex3.png";
import veridex4 from "../images/veridex/veridex4.png";

function Veridex() {
  const [lightboxImage, setLightboxImage] = useState(null);

  const images = [veridex1, veridex2, veridex3, veridex4];

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
          <title>Veridex - Trust Layer for AI Agents | Joey Kokinda</title>
          <meta
            name="description"
            content="Veridex checks every AI agent action before it runs and writes the outcome to Hedera HCS. Pre-execution gate, tamper-proof audit trail, replayable trust scores, and operator policies — the trust middleware for agent commerce."
          />
          <link rel="canonical" href="https://jkokinda.com/projects/veridex" />
          <meta name="robots" content="index, follow, noarchive" />
        </Helmet>

        <Link to="/projects" className="back-button">
          ← Back to Projects
        </Link>

        <div className="project-header">
          <h1>Veridex - Trust Middleware for AI Agent Commerce</h1>
          <div className="header-links">
            <a
              href="https://veridex.sbs"
              target="_blank"
              rel="noopener noreferrer"
              className="live-link"
            >
              Live Site ↗
            </a>
            <a
              href="https://veridex.sbs/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="live-link"
            >
              Dashboard ↗
            </a>
            <a
              href="https://veridex.sbs/leaderboard"
              target="_blank"
              rel="noopener noreferrer"
              className="live-link"
            >
              Leaderboard ↗
            </a>
            <a
              href="https://github.com/joeykokinda/Veridex"
              target="_blank"
              rel="noopener noreferrer"
              className="live-link github-link"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        <div className="app-gallery">
          {images.map((src, idx) => (
            <div key={idx} className="gallery-item">
              <img
                src={src}
                alt={`Veridex Screenshot ${idx + 1}`}
                style={{
                  objectFit: "contain",
                  background: "rgba(0, 0, 0, 0.8)",
                  cursor: "pointer",
                }}
                onClick={() => setLightboxImage(src)}
              />
            </div>
          ))}
        </div>

        <div className="project-content">
          <div className="projectDetailsText">
            <section className="project-section">
              <h2>Overview</h2>
              <p>
                Veridex is the trust layer for AI agent commerce. AI agents can read your files, run shell commands, move money, and call external APIs — continuously, without oversight. Veridex checks every action before it runs and writes the outcome to Hedera HCS. Trust score is replayable by anyone.
              </p>
              <p>
                Extends the work from <Link to="/projects/agenttrust" className="inline-link">AgentTrust (ETHDenver 2026)</Link> — adding pre-execution gating, HCS attestation, operator policies, and a full operator dashboard.
              </p>
              <p>
                <strong>Live stats:</strong> 17 agents monitored · 3,900+ actions logged · 28 blocked
              </p>
            </section>

            <section className="project-section">
              <h2>The Problem</h2>
              <p>
                Autonomous agents run continuously with your credentials and their behavior is invisible — no tamper-proof record, no pre-execution gate, no portable reputation. Without a trust layer, you can't prove whether dangerous behavior was actually stopped or whether the audit trail is real.
              </p>
            </section>

            <section className="project-section">
              <h2>How It Works</h2>
              <p>
                Every action is intercepted before it runs. Veridex evaluates it synchronously — quarantine check, hardcoded blocking rules, operator policies, loop detection — and returns allowed or blocked in under 10ms. It blocks credential harvesting (<code>cat /etc/passwd</code>), remote code execution (<code>curl | bash</code>), private key and API key exposure, recursive deletes, repeated loop actions, and anything matching operator-configured rules like domain blacklists, command blacklists, HBAR spend caps, or regex guards on output. The outcome is written to Hedera HCS: encrypted, tamper-proof, verifiable forever. Each agent has a trust score replayable from the chain by anyone.
              </p>
            </section>

            <section className="project-section">
              <h2>Deployed Contracts</h2>
              <h3>Hedera Testnet</h3>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px", fontFamily: "Courier New, monospace" }}>
                  <thead>
                    <tr style={{ borderBottom: "1px solid var(--sun-deep)" }}>
                      <th style={{ textAlign: "left", padding: "8px", color: "var(--ink)" }}>Contract</th>
                      <th style={{ textAlign: "left", padding: "8px", color: "var(--ink)" }}>EVM Address</th>
                      <th style={{ textAlign: "left", padding: "8px", color: "var(--ink)" }}>Hedera ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["AgentIdentity", "0x0874571bAfe20fC5F36759d3DD3A6AD44e428250", "0.0.7992394"],
                      ["AgentMarketplace", "0x46e12242aEa85a1fa2EA5C769cd600fA64A434C6", "0.0.7992397"],
                      ["ContentRegistry", "0x031bbBBCCe16EfBb289b3f6059996D0e9Bba5BcC", "—"],
                    ].map(([contract, evm, hedera], i) => (
                      <tr key={i} style={{ borderBottom: "1px solid rgba(38,51,31,0.1)" }}>
                        <td style={{ padding: "8px" }}>{contract}</td>
                        <td style={{ padding: "8px", fontSize: "11px" }}>{evm}</td>
                        <td style={{ padding: "8px" }}>{hedera}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <h3 style={{ marginTop: "16px" }}>Celo Sepolia</h3>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px", fontFamily: "Courier New, monospace" }}>
                  <thead>
                    <tr style={{ borderBottom: "1px solid var(--sun-deep)" }}>
                      <th style={{ textAlign: "left", padding: "8px", color: "var(--ink)" }}>Contract</th>
                      <th style={{ textAlign: "left", padding: "8px", color: "var(--ink)" }}>EVM Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["AgentIdentity", "0xF20bD9F3a66E2A11090C3cCc645368543873E270"],
                      ["AgentMarketplace", "0xd8b68F31294e2D346810Bf3e3cD77593348BB89e"],
                      ["ContentRegistry", "0x9a9B2E9D436Fd6d1DEf6C1689786A5588BAf26e3"],
                    ].map(([contract, evm], i) => (
                      <tr key={i} style={{ borderBottom: "1px solid rgba(38,51,31,0.1)" }}>
                        <td style={{ padding: "8px" }}>{contract}</td>
                        <td style={{ padding: "8px", fontSize: "11px" }}>{evm}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

          </div>
        </div>
      </div>
    </>
  );
}

export default Veridex;
