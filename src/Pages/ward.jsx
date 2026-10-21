import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./projectDetails.css";
import wardLive from "../images/Ward/live.png";
import wardArc from "../images/Ward/arc.png";
import wardEns from "../images/Ward/ens.png";
import wardCre from "../images/Ward/cre.png";
import wardSettled from "../images/Ward/settled.png";

function Ward() {
  const [lightboxImage, setLightboxImage] = useState(null);

  const images = [wardLive, wardArc, wardEns, wardCre, wardSettled];

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
          <title>WARD - Autonomous On-Chain Repair Settlement | Joey Kokinda</title>
          <meta
            name="description"
            content="WARD is rails for an autonomous system to hire and pay a verified human for physically-verifiable work, settled on-chain. A home agent fixes what it can in software and, when the fault is physical, hires a verified worker and pays them in USDC the moment a sensor attests the repair. A working implementation of ERC-8183 on Arc, with worker identity on ENS and attestation by Chainlink CRE."
          />
          <link rel="canonical" href="https://jkokinda.com/projects/ward" />
          <meta name="robots" content="index, follow, noarchive" />
        </Helmet>

        <Link to="/projects" className="back-button">
          ← Back to Projects
        </Link>

        <div className="project-header">
          <h1>WARD - Autonomous On-Chain Repair Settlement</h1>
          <div className="header-links">
            <a
              href="https://web-nine-ashen-75.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="live-link"
            >
              Live Site ↗
            </a>
            <a
              href="https://web-nine-ashen-75.vercel.app/live"
              target="_blank"
              rel="noopener noreferrer"
              className="live-link"
            >
              Live Agent ↗
            </a>
            <a
              href="https://web-nine-ashen-75.vercel.app/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="live-link"
            >
              Demo ↗
            </a>
            <a
              href="https://github.com/joeykokinda/ward"
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
                alt={`WARD Screenshot ${idx + 1}`}
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
                WARD is rails for an autonomous system to hire and pay a verified human for physically-verifiable work, settled on-chain. The instrumented home is the first instance, not the product: a home agent watches your devices, fixes what it can in software, and when the fault is physical it hires a verified worker and pays them in USDC the moment a sensor attests the repair. Nobody clicks approve — the sensor does.
              </p>
              <p>
                It runs end to end on Arc testnet: worker identity and discovery on ENS, escrow and settlement on Arc, and the fix attested by a Chainlink CRE workflow. It's a working implementation of <strong>ERC-8183</strong>, Ethereum's Agentic Commerce standard.
              </p>
              <p>
                The <a href="https://web-nine-ashen-75.vercel.app/live" target="_blank" rel="noopener noreferrer" className="inline-link">/live</a> console runs the real agent, not a script — trigger a fault (or describe one in plain English) and it settles on Arc in about ten seconds, replaying its reasoning one line at a time with every transaction clickable.
              </p>
            </section>

            <section className="project-section">
              <h2>The Problem</h2>
              <p>
                The real customer isn't the homeowner — it's software with no bank account: DePIN fleets paying the humans who keep their hardware alive, DAOs posting proof-gated repair jobs, AI-agent treasuries settling with field techs on attested evidence. For one homeowner paying a local plumber, credit cards and ACH work fine. Crypto is load-bearing only when the buyer is software that cannot open a bank account. WARD is the reference implementation of ERC-8183 those buyers need, and the 2am leak — owner asleep in Tokyo, sensor tripped in Brooklyn — is the most legible way to show it working.
              </p>
            </section>

            <section className="project-section">
              <h2>How It Works</h2>
              <p>
                WARD doesn't jump to hiring a human. It climbs an escalation ladder cheapest-first. <strong>L1 self-fix</strong> is free, instant, and autonomous — reboot, reconfigure, re-pair, cycle a relay, close a smart valve — and most incidents end here. <strong>L2 guided remote</strong> is an optional scripted remediation, still no human. <strong>L3 hire a human</strong> is the last resort, used only when the fault is physical and software can't resolve it: it spends money and dispatches a person, so it runs only within the owner's spending policy. A WiFi fault gets fixed at L1 by a remote reboot; the 2am leak fails L1 because the burst is upstream of the valve, so it escalates to L3 and hires a plumber.
              </p>
              <p>
                ERC-8183 defines a <em>Job</em>: an escrowed budget, three roles, one state machine — and it says the Evaluator alone releases escrow, but never says the Evaluator has to be human. WARD makes the Evaluator a sensor. The autonomous home agent is the <strong>Client</strong> (requests the repair, funds the escrow), the field tech is the <strong>Provider</strong> (shows up, calls <code>submit</code>), and a Chainlink CRE workflow is the <strong>Evaluator</strong> — it reads device telemetry, attests the fix, and is the only role that calls <code>complete()</code>, releasing USDC and bumping the worker's reputation. The whole Job lifecycle is single-chain on Arc: no bridge, no second EVM.
              </p>
              <p>
                Worker identity and discovery run on real ENS, not a label on top of a database. <code>ward-agent.eth</code> carries an ENSIP-25 agent-registration record; each field tech is a subname with ENSIP-26 text records (skills, region, and a CAIP-10 pointer to on-chain reputation). The agent resolves them live to discover and rank candidates — nothing is hardcoded. USDC is also the gas token on Arc, so settlement is gas-free and sub-cent. Both contracts are source-verified and 56 forge tests pass.
              </p>
            </section>

            <section className="project-section">
              <h2>Deployed Contracts</h2>
              <h3>Arc Testnet (chainId 5042002)</h3>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px", fontFamily: "Courier New, monospace" }}>
                  <thead>
                    <tr style={{ borderBottom: "1px solid var(--sun-deep)" }}>
                      <th style={{ textAlign: "left", padding: "8px", color: "var(--ink)" }}>Contract</th>
                      <th style={{ textAlign: "left", padding: "8px", color: "var(--ink)" }}>Address</th>
                      <th style={{ textAlign: "left", padding: "8px", color: "var(--ink)" }}>Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["WardEscrow", "0xe118A51B105DF46F54AE4Fb01a1EF43F6a8dE5D8", "ERC-8183 JobEscrow"],
                      ["WorkerRegistry", "0x2bdDf43350A5E79cf4fCc2A15f4a6905f9553bB4", "stake + reputation"],
                      ["Evaluator", "0xDdd0047d0664235998791fe2163Bb9b31c2Fc038", "CRE oracle EOA"],
                      ["USDC", "0x3600000000000000000000000000000000000000", "native, 6dp, also gas"],
                    ].map(([contract, addr, role], i) => (
                      <tr key={i} style={{ borderBottom: "1px solid rgba(38,51,31,0.1)" }}>
                        <td style={{ padding: "8px" }}>{contract}</td>
                        <td style={{ padding: "8px", fontSize: "11px" }}>{addr}</td>
                        <td style={{ padding: "8px" }}>{role}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p style={{ marginTop: "12px" }}>
                Both contracts are source-verified on <a href="https://testnet.arcscan.app" target="_blank" rel="noopener noreferrer" className="inline-link">testnet.arcscan.app</a>. Worker identity lives on ENS at <code>ward-agent.eth</code> (Sepolia), with five field techs registered as subnames.
              </p>
            </section>

            <section className="project-section">
              <h2>Tech Stack</h2>
              <p>
                Solidity (Foundry), ERC-8183, Arc testnet, Chainlink CRE (TS SDK), ENS (ENSIP-25/26 + CAIP-10), native USDC, Python (asyncio + web3.py + Claude), Next.js, React, Tailwind, FastAPI
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ward;
