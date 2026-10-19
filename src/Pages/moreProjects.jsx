import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./projectDetails.css";
import NotFound from "./notfound";
import aimem1 from "../images/Aimem/aimem1.png";
import aimem2 from "../images/Aimem/aimem2.png";
import aimem3 from "../images/Aimem/aimem3.png";
import skillscope1 from "../images/SkillScope/skillscope1.png";
import skillscope2 from "../images/SkillScope/skillscope2.png";
import airlock1 from "../images/Airlock/airlock1.png";
import airlock2 from "../images/Airlock/airlock2.png";
import airlock3 from "../images/Airlock/airlock3.png";
import airlock4 from "../images/Airlock/airlock4.png";
import airlock5 from "../images/Airlock/airlock5.png";
import acceptRequest from "../images/Accept/accept-request.png";
import acceptIdle from "../images/Accept/accept-idle.png";
import acceptApproved from "../images/Accept/accept-approved.png";
import acceptRejected from "../images/Accept/accept-rejected.png";
import corec1 from "../images/CoRec/corec1.png";
import corec2 from "../images/CoRec/corec2.png";
import corec3 from "../images/CoRec/corec3.png";
import nightdial1 from "../images/Nightdial/nightdial1.jpg";
import nightdial2 from "../images/Nightdial/nightdial2.jpg";
import nightdial3 from "../images/Nightdial/nightdial3.jpg";
import nightdial4 from "../images/Nightdial/nightdial4.jpg";
import nightdial5 from "../images/Nightdial/nightdial5.jpg";
import nightdial6 from "../images/Nightdial/nightdial6.jpg";
import detect1 from "../images/TurtosaDetect/detect1.png";
import detect2 from "../images/TurtosaDetect/detect2.png";
import detect3 from "../images/TurtosaDetect/detect3.png";
import cell1 from "../images/CELL/cell1.png";
import cell2 from "../images/CELL/cell2.png";
import exoform1 from "../images/Exoform/exo-1.jpg";
import exoform2 from "../images/Exoform/exo-2.jpg";
import exoform3 from "../images/Exoform/exo-3.jpg";
import exoform4 from "../images/Exoform/exo-4.jpg";
import exoform5 from "../images/Exoform/exo-5.jpg";
import exoform6 from "../images/Exoform/exo-6.jpg";

// Detail pages for projects that share the standard layout. Older projects
// keep their own files; add new ones here.
export const MORE_PROJECTS = {
  exoform: {
    title: "Exoform - 3D Printed National Parks",
    metaTitle: "Exoform",
    metaDescription:
      "Full-colour 3D printed terrain of US national parks, generated from real elevation and land-cover data, with your hike raised on the trail.",
    images: [exoform1, exoform2, exoform3, exoform4, exoform5, exoform6],
    links: [{ label: "Visit Shop ↗", href: "https://www.exoform.shop" }],
    sections: [
      {
        heading: "Overview",
        body: [
          "Exoform turns places into solid objects. Every piece is real terrain from a US national park, printed in up to four colours of filament from the actual land cover, with landmarks at true scale and the hike you did raised on the trail.",
          "Thirteen parks, seven pieces each: Statement blocks, Regular and Mini hexes, ornaments, magnets, coasters, and keychains. Build Your Own lets anyone search a place, drag a hex over the map, upload a GPX route from Strava or Garmin, and get a piece generated for it.",
          "The store is in pre-launch: buy buttons collect wishlist emails per piece, so I can see demand before ordering opens.",
        ],
      },
      {
        heading: "How It Works",
        list: [
          ["Terrain generator", "A Python service pulls USGS 3DEP and AWS Terrain elevation and ESA WorldCover land cover, then builds a printable multi-colour model with a fixed vertical exaggeration and close-up landmark scenes."],
          ["Routes", "GPX uploads and curated trails are raised onto the surface, with distance, elevation gain, and route type stamped on the frame."],
          ["3D previews", "Every model on the site is real generator output, rendered live with Three.js so customers can spin it before buying."],
          ["Print farm", "The admin queue plans batch plates across the Bambu printers, since sharing a plate cuts per-piece print time by half or more, and buys shipping labels through Shippo."],
          ["Checkout", "Stripe checkout with abandoned-cart reminder emails, plus password + TOTP admin auth."],
        ],
      },
      {
        heading: "Stack",
        body: ["Next.js 15, React Three Fiber, Prisma + Postgres, Stripe, Shippo, and a Python terrain generator. Self-hosted on my home server behind a Cloudflare Tunnel instead of Vercel."],
      },
    ],
  },
  aimem: {
    title: "Aimem - Local-First Memory for Coding Agents",
    metaTitle: "Aimem - Memory for Coding Agents",
    metaDescription:
      "Aimem turns an Obsidian vault into compact, privacy-bounded context for coding agents: a generated index, ranked search, and an MCP server.",
    images: [aimem1, aimem2, aimem3],
    links: [{ label: "GitHub ↗", href: "https://github.com/joeykokinda/aimem", github: true }],
    sections: [
      {
        heading: "Overview",
        body: [
          "Every coding agent session starts cold. It doesn't know what my companies are, which repo belongs to what, or what I decided last week. Aimem fixes that. My Obsidian vault is the human-facing second brain, and Aimem is the deterministic retrieval layer that gives agents the context they need without exposing the whole vault.",
          "I use it every day. Every Claude Code session on my machine starts with it.",
        ],
      },
      {
        heading: "How It Works",
        list: [
          ["Generated index", "One command validates the vault and builds a compact index of every company, project, repo path, status, and stack. An agent reads one file instead of asking me to explain my setup."],
          ["Ranked search", "Search understands word forms and the vault's own synonym groups, so searching \"deployment\" finds notes about deploying."],
          ["MCP server", "Serves the vault to agents over MCP: read the index, search, read a note, append a fact."],
          ["Privacy boundary", "Three tiers. Shared folders are indexed. Private folders (journal, finances, school) are never walked, enforced in the collector and backed by agent permission rules. Locked folders are encrypted at rest."],
          ["Review queue", "Anything an agent writes is quarantined as unreviewed and held out of the index until I promote it, so a wrong guess costs one line in a review list."],
          ["Doctor", "Checks the install, the config, and that the privacy boundary is actually being enforced."],
        ],
      },
      {
        heading: "Stack",
        body: ["Two small Go binaries with no third-party dependencies. A git pre-commit hook in the vault validates and regenerates the index, so a commit can't leave it stale."],
      },
    ],
  },
  skillscope: {
    title: "SkillScope - Analytics for Claude Code Skills",
    metaTitle: "SkillScope",
    metaDescription:
      "Google Analytics for your Claude Code skills: which skills fire, what they cost in context, and which are dead weight.",
    images: [skillscope1, skillscope2],
    links: [
      { label: "npm ↗", href: "https://www.npmjs.com/package/skillscope" },
      { label: "GitHub ↗", href: "https://github.com/joeykokinda/SkillScope", github: true },
    ],
    sections: [
      {
        heading: "Overview",
        body: [
          "\"Google Analytics for your Claude Code skills.\" Every installed skill costs context in every session, whether or not it ever fires. SkillScope shows which skills actually get used, how much context each one costs, and which ones are dead weight you should remove.",
        ],
      },
      {
        heading: "How It Works",
        list: [
          ["Scan", "Finds every installed skill across user, project, and plugin scopes."],
          ["Collect", "Hooks into Claude Code to record when each skill fires."],
          ["Dashboard", "A local web dashboard ranks dead weight by the context tokens it wastes per session."],
        ],
      },
      {
        heading: "Stack",
        body: ["Node.js CLI published to npm as skillscope, runs with npx. Local SQLite store and a single-file HTML dashboard."],
      },
    ],
  },
  airlock: {
    title: "Agent Airlock - Policy Firewall for Ledger",
    metaTitle: "Agent Airlock",
    metaDescription:
      "A Go policy firewall between an autonomous AI agent and a Ledger hardware device. Two gates, one of them silicon.",
    images: [airlock1, airlock2, airlock3, airlock4, airlock5],
    links: [{ label: "GitHub ↗", href: "https://github.com/joeykokinda/LedgerAgentStack", github: true }],
    sections: [
      {
        heading: "Overview",
        body: [
          "The usual way to let an agent move money is to hand it a key. But an LLM agent is steerable by its inputs: a prompt injection in a webpage or tool result can rewrite what it wants to do. If the agent holds the key, the injection holds the key.",
          "Agent Airlock answers one narrow question: can the agent still propose transactions while losing the ability to sign them on its own?",
        ],
      },
      {
        heading: "How It Works",
        list: [
          ["Intent, not keys", "The agent never touches a key. It emits a structured intent: chain, recipient, value, calldata, gas, nonce."],
          ["Gate 1: policy", "A deterministic Go gate checks max value, daily cap, recipient allowlist, allowed chains and contracts, rate limits, and time windows. Anything that fails is blocked and written to the audit log."],
          ["Gate 2: silicon", "Intents that pass go to a Ledger device (Speculos emulator in the demo), which shows the recipient and amount on screen. Nothing signs until a human physically approves."],
        ],
      },
      {
        heading: "Stack",
        body: ["Go policy engine and audit log, Ledger Device Management Kit and Wallet CLI for signing, Speculos for the emulated device. Built for Ledger's Build & Show bounty."],
      },
    ],
  },
  accept: {
    title: "Accept - Physical Approve Button for AI Agents",
    metaTitle: "Accept",
    metaDescription:
      "A USB device that intercepts AI agent commands before they run. Nothing executes until a human presses APPROVE or REJECT.",
    images: [acceptRequest, acceptIdle, acceptApproved, acceptRejected],
    links: [{ label: "GitHub ↗", href: "https://github.com/joeykokinda/-ACCEPT-", github: true }],
    sections: [
      {
        heading: "Overview",
        body: [
          "A physical approve/reject button for AI agents. When Claude Code wants to run a real command, the action is intercepted before it runs and shown on a small device on the desk. Nothing happens until a human presses APPROVE or REJECT. Every decision is logged.",
          "A confirmation dialog on the same screen the agent is driving is easy to click through. A button on a separate device takes a small act of intention that can't be automated away.",
        ],
      },
      {
        heading: "How It Works",
        list: [
          ["Hook", "A Claude Code hook sends each tool call to a local daemon before it runs."],
          ["Daemon", "A Python service holds all policy and the audit log, then forwards the request to the device."],
          ["Device", "An ESP32 with a 1.3\" OLED shows the agent, tool, and command, and reports which button was pressed. It is deliberately dumb, so security doesn't depend on trusting a $10 microcontroller."],
          ["Fails safe", "If the device is unplugged or unresponsive, the answer is always no."],
          ["Virtual screen", "screen.py mirrors the OLED in a terminal (the screenshots above) for testing without hardware."],
        ],
      },
      {
        heading: "Stack",
        body: ["ESP32 firmware (PlatformIO), Python daemon running as a systemd user service, parametric OpenSCAD enclosure. Working breadboard prototype."],
      },
    ],
  },
  corec: {
    title: "CoRec Tracker - Purdue Gym Busyness",
    metaTitle: "CoRec Tracker",
    metaDescription:
      "Live and historical busyness for every Purdue CoRec area, with weekday-by-hour heatmaps and the best times to go.",
    images: [corec1, corec2, corec3],
    links: [
      { label: "Live Site ↗", href: "https://corec.jaeger.lol" },
      { label: "GitHub ↗", href: "https://github.com/joeykokinda/PurdueGymData", github: true },
    ],
    sections: [
      {
        heading: "Overview",
        body: [
          "Purdue publishes live headcounts for each CoRec area but no history. CoRec Tracker records them continuously and shows how busy each area is now, how that compares to usual and peak, and the best times to go, for this semester, past semesters, and all time.",
        ],
      },
      {
        heading: "How It Works",
        list: [
          ["Collector", "Polls the live counts on a schedule and stores every reading."],
          ["Stats", "Builds weekday-by-hour heatmaps, typical-day curves, and best-time recommendations per area."],
          ["Page", "One static page served by the same binary, public with no auth."],
        ],
      },
      {
        heading: "Stack",
        body: ["One Go binary plus SQLite, self-hosted on my home server behind a Cloudflare Tunnel."],
      },
    ],
  },
  nightdial: {
    title: "Nightdial - A Radio Between Frequencies",
    metaTitle: "Nightdial",
    metaDescription:
      "An interactive analog radio toy with eleven living stations hidden in the static. Vanilla Canvas and WebAudio.",
    images: [nightdial1, nightdial2, nightdial3, nightdial4, nightdial5, nightdial6],
    links: [{ label: "GitHub ↗", href: "https://github.com/joeykokinda/FableTest", github: true }],
    sections: [
      {
        heading: "Overview",
        body: [
          "\"A radio for the frequencies between frequencies.\" The whole site is an analog tuner sweeping 87.0 to 108.0 MHz. Eleven living stations are hiding in the static, plus something at the bottom of the dial and a thirteenth station that only opens once all eleven are found.",
        ],
      },
      {
        heading: "Stations",
        list: [
          ["88.3 The Rain", "Code rain that is afraid of your cursor."],
          ["91.7 Bloom", "A Game of Life garden that plays itself."],
          ["93.3 Swarm", "A flock that learns how you move."],
          ["97.3", "Phantoms replaying your cursor from 3 and 7 seconds ago."],
          ["101.1", "A speaking numbers station."],
          ["107.7", "An eye that dilates as you approach."],
        ],
      },
      {
        heading: "Stack",
        body: ["Zero dependencies: one index.html with vanilla Canvas 2D and WebAudio. Scroll or drag to tune, space to scan. Found stations persist in localStorage and frequencies deep-link by URL hash."],
      },
    ],
  },
  turtosadetect: {
    title: "TurtosaDetect - AI Text Detection",
    metaTitle: "TurtosaDetect",
    metaDescription:
      "AI-generated text detection on a fine-tuned ModernBERT classifier, with a browser extension and a web detector.",
    images: [detect1, detect2, detect3],
    links: [],
    sections: [
      {
        heading: "Overview",
        body: [
          "AI-generated text detection built three ways: a browser extension (SlopDeny) that badges or hides AI-written posts on X, Reddit, and Hacker News, a paste-a-text web detector, and a REST API other products can embed.",
        ],
      },
      {
        heading: "How It Works",
        list: [
          ["Model", "A fine-tuned ModernBERT-large classifier with an ONNX export for cheaper inference."],
          ["Backend", "FastAPI with /analyze, /score, and /account endpoints. Loads the model once and returns AI likelihood, confidence, and a label."],
          ["Account scoring", "Aggregates stylometry and posting patterns across an account, not just a single post."],
          ["Extension", "Per-site toggles for badges or hiding above a threshold, plus a paste box for checking any text."],
        ],
      },
      {
        heading: "Stack",
        body: ["Python, FastAPI, ModernBERT, ONNX, SQLite; React frontend; Chrome extension. Built but never deployed."],
      },
    ],
  },
  cell: {
    title: "CELL - Multiplayer Game of Life on Solana",
    metaTitle: "CELL",
    metaDescription:
      "A persistent multiplayer Conway's Game of Life with an on-chain wager loop on Solana.",
    images: [cell1, cell2],
    links: [{ label: "Live Site ↗", href: "https://memecoinbullshit.vercel.app" }],
    sections: [
      {
        heading: "Overview",
        body: [
          "One shared, always-on Conway's Game of Life board that is never wiped. Holders drop owner-stamped cells that evolve under B3/S23 every 500ms on a wrapping 120x80 field. Every 15 minutes a window closes and whoever controls the most living cells wins that window's pot, settled on-chain. Territory that survives across windows is the whole hook.",
        ],
      },
      {
        heading: "Stack",
        body: ["pnpm monorepo: React + Vite frontend on Vercel, a Socket.IO game server running the simulation, and Solana wallet-adapter for drops and payouts."],
      },
    ],
  },
};

function MoreProject() {
  const { id } = useParams();
  const [lightboxImage, setLightboxImage] = useState(null);
  const project = MORE_PROJECTS[id];
  if (!project) return <NotFound />;

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
          <title>{project.metaTitle} | Joey Kokinda</title>
          <meta name="description" content={project.metaDescription} />
          <link rel="canonical" href={`https://jkok.dev/projects/${id}`} />
          <meta name="robots" content="index, follow, noarchive" />
        </Helmet>

        <Link to="/projects" className="back-button">
          ← Back to Projects
        </Link>

        <div className="project-header">
          <h1>{project.title}</h1>
          <div className="header-links">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`live-link${link.github ? " github-link" : ""}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="app-gallery">
          {project.images.map((src, idx) => (
            <div key={idx} className="gallery-item">
              <img
                src={src}
                alt={`${project.metaTitle} Screenshot ${idx + 1}`}
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
            {project.sections.map((section) => (
              <section key={section.heading} className="project-section">
                <h2>{section.heading}</h2>
                {section.body?.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
                {section.list && (
                  <ul>
                    {section.list.map(([label, text]) => (
                      <li key={label}>
                        <strong>{label}:</strong> {text}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MoreProject;
