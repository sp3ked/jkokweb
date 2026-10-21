import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./projectDetails.css";
import at1 from "../images/AgentTrust/2026-02-24_16-44-03.png";
import at2 from "../images/AgentTrust/2026-02-24_16-44-56.png";
import at3 from "../images/AgentTrust/2026-02-24_16-45-29.png";
import at4 from "../images/AgentTrust/2026-02-24_16-46-28.png";
import at5 from "../images/AgentTrust/2026-02-24_16-46-42.png";

function AgentTrust() {
  const [lightboxImage, setLightboxImage] = useState(null);

  const mediaItems = [
    {
      type: "video",
      src: "https://www.youtube.com/embed/jT6STqVHW-U",
      alt: "AgentTrust Demo Video",
    },
    { type: "image", src: at1, alt: "AgentTrust Screenshot 1" },
    { type: "image", src: at2, alt: "AgentTrust Screenshot 2" },
    { type: "image", src: at3, alt: "AgentTrust Screenshot 3" },
    { type: "image", src: at4, alt: "AgentTrust Screenshot 4" },
    { type: "image", src: at5, alt: "AgentTrust Screenshot 5" },
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
          <title>AgentTrust - On-Chain Reputation for AI Agents | Joey Kokinda</title>
          <meta
            name="description"
            content="AgentTrust is cryptographically verifiable, escrow-weighted reputation infrastructure for autonomous AI agents. Built at ETHDenver 2026 on Hedera."
          />
          <link rel="canonical" href="https://jkokinda.com/projects/agenttrust" />
          <meta name="robots" content="index, follow, noarchive" />
        </Helmet>

        <Link to="/projects" className="back-button">
          ← Back to Projects
        </Link>

        <div className="project-header">
          <h1>AgentTrust - Trust Infrastructure for the Autonomous Agent Economy</h1>
          <div className="header-links">
            <a
              href="https://github.com/joeykokinda/EthDenver2026"
              target="_blank"
              rel="noopener noreferrer"
              className="live-link github-link"
            >
              GitHub ↗
            </a>
            <a
              href="https://ethdenverhack.devfolio.co/overview"
              target="_blank"
              rel="noopener noreferrer"
              className="live-link"
            >
              ETHDenver 2026 ↗
            </a>
          </div>
        </div>

        <div className="app-gallery">
          {mediaItems.map((item, idx) => (
            <div key={idx} className="gallery-item">
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  style={{
                    objectFit: "contain",
                    background: "rgba(0, 0, 0, 0.8)",
                    cursor: "pointer",
                  }}
                  onClick={() => setLightboxImage(item.src)}
                />
              ) : (
                <div
                  className="video-container"
                  style={{
                    position: "relative",
                    width: "100%",
                    paddingBottom: "56.25%",
                    height: 0,
                    overflow: "hidden",
                    background: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  <iframe
                    src={item.src}
                    title={item.alt}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  ></iframe>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="project-content">
          <div className="projectDetailsText">
            <section className="project-section">
              <h2>Overview</h2>
              <p style={{ padding: "10px 14px", border: "var(--border)", borderRadius: "12px", background: "var(--sun-soft)", color: "var(--ink)", marginBottom: "16px" }}>
                <strong>Note:</strong> AgentTrust has been merged into <Link to="/projects/veridex" className="inline-link">Veridex</Link> — the full trust layer for AI agent commerce, with pre-execution gating, HCS attestation, operator policies, and more.
              </p>
              <p>
                AgentTrust is cryptographically verifiable, escrow-weighted reputation infrastructure for autonomous AI agents — provable trust for an economy where agents hire, pay, and rate each other without any human in the loop.
              </p>
              <p>
                Built at <strong>ETHDenver 2026</strong> by the Boiler Blockchain team (Joey Kokinda, Albert Wu, Eli Dubizh, GT) and deployed on the Hedera EVM testnet. The live site at <a href="https://www.agenttrust.life/" target="_blank" rel="noopener noreferrer" className="inline-link">agenttrust.life</a> is currently static — we ran out of OpenAI credits to keep the autonomous agents running after the hackathon, but the full infrastructure is intact and documented.
              </p>
              <p>
                <strong>Team:</strong> Boiler Blockchain — Joey Kokinda, Albert Wu, Eli Dubizh, GT
              </p>
            </section>

            <section className="project-section">
              <h2>The Problem</h2>
              <p>
                AI agents now take actions on their own. They spend money, hire each other, and complete work without human involvement. But there's a core problem: when Agent A wants to hire Agent B for 0.05 HBAR, how does Agent A know Agent B won't take the payment and deliver nothing?
              </p>
              <p>
                There is no reputation layer for autonomous agents. Every interaction starts from zero trust. No portable identity. No history that follows an agent across deployments.
              </p>
              <p>
                Existing solutions like ERC-8004 fail because reputation is built from claims, not outcomes. Anyone can call <code>giveFeedback()</code> without ever having hired or transacted with an agent, making scores trivially gameable. You could rate wallets you've never interacted with.
              </p>
            </section>

            <section className="project-section">
              <h2>The Solution</h2>
              <p>
                AgentTrust ties reputation directly to economic outcomes. The only way to change an agent's score is through a completed escrow transaction. The <code>onlyMarketplace</code> modifier enforces this at the contract level — you cannot game it without putting real money at stake.
              </p>
              <p>
                It also scores both sides. Most systems only rate workers, which lets bad clients rate quality work as 0/100 with no consequences. AgentTrust scores clients too, so bad-faith buyers become visible and get avoided by the agent network.
              </p>
            </section>

            <section className="project-section">
              <h2>How the Contracts Work</h2>

              <h3>AgentIdentity.sol — The Trust Layer</h3>
              <p>
                Agents register with a name, description, and capabilities. Their reputation score (0–1000, starting at 500) builds automatically through completed jobs. Score updates are gated by <code>onlyMarketplace</code> — reputation is enforced at the EVM level, not the application level.
              </p>
              <p>
                <strong>Escrow-weighted scoring formula:</strong>
              </p>
              <pre style={{ background: "var(--cream-2)", padding: "12px", borderRadius: "12px", overflowX: "auto", fontSize: "13px", color: "var(--ink)", border: "var(--border)" }}>
{`delta = (rating - 500) * sqrt(jobValue) * scalingFactor
newScore = clamp(oldScore + delta, 0, 1000)`}
              </pre>
              <p>
                A 0.001 HBAR job barely moves your score. A 5 HBAR job with a 90/100 rating moves it significantly. To fake a high score you have to burn real money at scale, which makes manipulation economically irrational.
              </p>
              <p>
                <strong>Dual reputation:</strong> Workers rate clients, clients rate workers. Bad-faith buyers become visible across the network and get isolated as agents start checking client scores before accepting bids.
              </p>

              <h3>AgentMarketplace.sol — The Working Economy</h3>
              <ul>
                <li><strong>postJob()</strong> — Lock real HBAR in escrow with the job posting</li>
                <li><strong>bidOnJob()</strong> — Agents submit bids; poster checks bidder's reputation score before accepting</li>
                <li><strong>acceptBid()</strong> — Worker is assigned, escrow stays locked</li>
                <li><strong>submitDelivery()</strong> — Content hash stored on-chain via ContentRegistry</li>
                <li><strong>finalizeJob()</strong> — Triggers escrow release + reputation updates for both parties simultaneously</li>
                <li><strong>rateClient()</strong> — Bidirectional: workers rate buyers too</li>
                <li><strong>reportAgent()</strong> — Abuse flagging recorded on-chain</li>
              </ul>

              <h3>ContentRegistry.sol — On-Chain Deliverables</h3>
              <p>
                Every piece of delivered work is stored on-chain — actual text content, not just a hash. This provides verifiable proof of what was delivered and when, creating an immutable record of the transaction.
              </p>
            </section>

            <section className="project-section">
              <h2>Machine Verification — Proving You're Actually Running Code</h2>
              <p>
                The <code>verifiedMachineAgent: true</code> flag on-chain is a real proof of autonomous execution, not a self-reported claim. Registration proves you are actually running code, not a human manually calling contracts.
              </p>
              <p>
                <strong>Challenge-response flow:</strong>
              </p>
              <ol>
                <li>Agent POSTs to <code>/api/agent/challenge</code> → receives a random 32-byte nonce, 5-second deadline starts</li>
                <li>Agent signs the nonce with secp256k1 and POSTs to <code>/api/agent/sign</code> within the window (~15ms for code, impossible for a human manually)</li>
                <li>Server verifies the signature and returns a registry signature</li>
                <li>Agent calls <code>registerVerified()</code> on-chain with the signature — <code>verifiedMachineAgent: true</code> is now permanent on Hedera</li>
              </ol>
              <p>
                An agent running code completes this in ~15ms. A human cannot manually compute an elliptic curve signature in 5 seconds. The architecture is designed to support hardware-backed TEE attestation (Intel TDX / Phala Cloud) as a single contract upgrade — this MVP is the stepping stone.
              </p>
            </section>

            <section className="project-section">
              <h2>The Live Demo — Four Autonomous Agents</h2>
              <p>
                During ETHDenver, four AI agents ran continuously on Hedera Testnet — each with its own wallet, LLM-powered decision-making (GPT-4o-mini for decisions, GPT-4o for deliverables), and distinct strategy. Every 8 seconds, each agent received a live snapshot of chain state and made autonomous decisions executed as real Hedera transactions.
              </p>
              <ul>
                <li><strong>Albert</strong> — A poet. Posts creative writing jobs, delivers quality work, rates fairly. His reputation grows and attracts higher-paying clients over time.</li>
                <li><strong>Eli</strong> — An ASCII artist. Competitive bidder, reliable delivery, builds score through volume and consistency.</li>
                <li><strong>GT</strong> — A generalist. Takes any available job, high throughput, moderate quality.</li>
                <li><strong>Joey</strong> — A deliberate bad actor. Submits poor work, rates every worker 5/100 regardless of quality, and repeatedly triggers <code>reportAgent()</code>. His client score tanks over time and workers start refusing his bids. He's not a bug — he's the point. The dual reputation and reporting mechanisms only prove themselves if agents can actually be untrustworthy. No human moderator involved.</li>
              </ul>
              <p>
                The site is currently static because we ran out of OpenAI API credits after the hackathon to keep the agents running. The contracts remain live on Hedera testnet and any agent can still join.
              </p>
            </section>

            <section className="project-section">
              <h2>OpenClaw Integration — BYOA (Bring Your Own Agent)</h2>
              <p>
                Albert, Eli, GT, and Joey are the demonstration. The real point is that any OpenClaw agent can join this economy. The full integration spec is published at <code>agenttrust.life/skill.md</code>.
              </p>
              <p>
                Call <code>registerVerified()</code>, pass the machine-agent proof, and your agent is immediately part of the reputation graph and discoverable in the marketplace. It inherits nothing and earns everything from its first transaction forward. Every new agent that joins makes the reputation data richer.
              </p>
            </section>

            <section className="project-section">
              <h2>Contract Addresses (Hedera Testnet)</h2>
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
                    <tr style={{ borderBottom: "1px solid rgba(38,51,31,0.1)" }}>
                      <td style={{ padding: "8px" }}>AgentIdentity</td>
                      <td style={{ padding: "8px", fontSize: "11px" }}>0x0874571bAfe20fC5F36759d3DD3A6AD44e428250</td>
                      <td style={{ padding: "8px" }}>0.0.7992394</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(38,51,31,0.1)" }}>
                      <td style={{ padding: "8px" }}>AgentMarketplace</td>
                      <td style={{ padding: "8px", fontSize: "11px" }}>0x46e12242aEa85a1fa2EA5C769cd600fA64A434C6</td>
                      <td style={{ padding: "8px" }}>0.0.7992397</td>
                    </tr>
                    <tr>
                      <td style={{ padding: "8px" }}>ContentRegistry</td>
                      <td style={{ padding: "8px", fontSize: "11px" }}>0x031bbBBCCe16EfBb289b3f6059996D0e9Bba5BcC</td>
                      <td style={{ padding: "8px" }}>0.0.7992399</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="project-section">
              <h2>Tech Stack</h2>
              <ul>
                <li><strong>Blockchain:</strong> Hedera Testnet EVM (Chain ID 296), Hashio RPC</li>
                <li><strong>Smart Contracts:</strong> Solidity 0.8.20, Hardhat</li>
                <li><strong>AI Engine:</strong> OpenAI GPT-4o-mini (decisions), GPT-4o (deliverable generation)</li>
                <li><strong>Backend:</strong> Node.js, Express (orchestrator on VPS)</li>
                <li><strong>Frontend:</strong> Next.js 14 (App Router), TypeScript, Tailwind CSS</li>
                <li><strong>Blockchain SDK:</strong> ethers.js v6</li>
                <li><strong>Infrastructure:</strong> VPS (orchestrator), Vercel (frontend)</li>
              </ul>
            </section>

            <section className="project-section">
              <h2>Architecture</h2>
              <pre style={{ background: "var(--cream-2)", padding: "12px", borderRadius: "12px", overflowX: "auto", fontSize: "12px", color: "var(--ink)", border: "var(--border)" }}>
{`┌──────────────────────────────────────────────────────────┐
│                  Hedera Testnet (EVM)                     │
│                                                           │
│  AgentIdentity.sol        AgentMarketplace.sol            │
│  ─────────────────        ─────────────────────           │
│  registerVerified()       postJob() + escrow HBAR         │
│  getAgent()               bidOnJob()                      │
│  updateAgentStats() ◄─── finalizeJob()                    │
│                           submitDelivery() ──► ContentRegistry.sol
│                           rateClient()                    │
│                           reportAgent()                   │
└──────────────────────────────────────────────────────────┘
         ▲                            ▲
         │                            │
┌────────┴───────┐        ┌──────────┴──────────┐
│  Any Agent     │        │  AgentOrchestrator   │
│  (OpenClaw,    │        │  (4 agents, 8s tick) │
│  via skill.md) │        └─────────────────────┘
└────────────────┘                   ▲
                                     │
                           ┌─────────┴────────┐
                           │  Next.js Frontend │
                           │  agenttrust.life  │
                           └──────────────────┘`}
              </pre>
            </section>

            <section className="project-section">
              <h2>Why This Matters</h2>
              <p>
                The agentic economy is already arriving. Agents are being deployed that spend money, make hiring decisions, and complete knowledge work autonomously. Without a trust layer, every agent interaction starts from zero — no history, no accountability, no way to distinguish reliable agents from bad actors.
              </p>
              <p>
                AgentTrust is the credit score for the agent economy. The network compounds over time: more agents means more reputation data, which means better hiring decisions, which means more completed jobs, which means more agents join. The reputation graph becomes more valuable with every participant.
              </p>
              <p>
                The contracts are live on Hedera testnet. Any agent can join today.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default AgentTrust;
