import React, { useEffect, useState, useMemo } from "react";
import "./projects.css";
import { Link, useNavigate } from "react-router-dom";
import scoutLogo from "../images/scout1.jpg";
import raspberryPiGlasses from "../images/raspi1.jpg";
import bikeimage from "../images/bike5.jpg";
import unboltedImage from "../images/unbolt.png";
import toolsImage from "../images/tool.png";
import docuImage from "../images/docu1.png";
import metaImage from "../images/meta.png";
import mlh1 from "../images/mlh1.png";
import cosmosImage from "../images/cosmosLogo.png";
import blockImage from "../images/block1.png";
import tripImage from "../images/trip.jpg";
import promptr1 from "../images/promptr1.png";
import trunorthImage from "../images/TruNorth/Screenshot 2025-10-22 at 14-38-20 HVAC Contractor Chester County PA - Heating & Air Conditioning Tru North Heating and Air Inc.png";
import exoformImage from "../images/Exoform/exo-1.jpg";
import polytermImage from "../images/polyterm/2025-10-22T15:01:20,845467989-04:00.png";
import youvestImage from "../images/YouVest/youvest1.png";
import staklabsImage from "../images/Staklabs/2025-11-17T13:14:09,510007741-05:00.png";
import jaegerImage from "../images/Jaeger/jaeger1.jpg";
import agentTrustImage from "../images/AgentTrust/2026-02-24_16-44-03.png";
import pyrasImage from "../images/Pyras/pyras1.png";
import veridexImage from "../images/veridex/veridex1.png";
import creouImage from "../images/Creou/landing.png";
import wardImage from "../images/Ward/00-intro.png";
import phonefarmImage from "../images/PhoneFarm/phonefarm-dashboard.png";
import skillscopeImage from "../images/SkillScope/skillscope1.png";
import aimemImage from "../images/Aimem/aimem2.png";
import airlockImage from "../images/Airlock/airlock1.png";
import acceptImage from "../images/Accept/accept-request.png";
import corecImage from "../images/CoRec/corec1.png";
import nightdialImage from "../images/Nightdial/nightdial1.jpg";
import detectImage from "../images/TurtosaDetect/detect1.png";
import cellImage from "../images/CELL/cell1.png";

// Featured projects, in display order. Everything else lands in "Other".
const FEATURED_IDS = ["creou", "phonefarm", "veridex", "pyras", "jaeger", "aimem", "exoform"];

function Projects() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [showSSHPopup, setShowSSHPopup] = useState(false);
  const [copied, setCopied] = useState(false);
  const sshCommand = "ssh polyterm@polyterm.app";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(sshCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const filterCategories = useMemo(
    () => ({
      all: [],
      website: ["creou", "ward", "promptr", "tools", "cosmos", "unbolted", "block", "trip", "trunorth", "exoform", "youvest", "staklabs", "agenttrust", "pyras", "veridex", "corec", "nightdial", "cell"],
      hardware: ["phonefarm", "raspi", "bike", "pyras", "accept"],
      software: ["phonefarm", "creou", "ward", "promptr", "docu", "scout", "tools", "cosmos", "locallens", "unbolted", "block", "trip", "trunorth", "exoform", "polyterm", "youvest", "staklabs", "jaeger", "agenttrust", "pyras", "veridex", "aimem", "skillscope", "airlock", "accept", "corec", "nightdial", "turtosadetect", "cell"],
      web3: ["ward", "youvest", "cosmos", "polyterm", "jaeger", "agenttrust", "pyras", "veridex", "airlock", "cell"],
      hackathon: ["ward", "unbolted", "locallens", "cosmos", "trip", "youvest", "jaeger", "agenttrust", "airlock"],
      active: ["phonefarm", "creou", "ward", "promptr", "docu", "scout", "cosmos", "block", "trunorth", "exoform", "polyterm", "youvest", "staklabs", "agenttrust", "pyras", "veridex", "aimem", "corec"],
      inactive: ["unbolted", "raspi", "bike", "locallens", "tools", "airlock", "accept", "turtosadetect", "cell"],
      oneTime: ["ward", "meta", "raspi", "bike", "locallens", "unbolted", "trip", "youvest", "jaeger", "agenttrust", "skillscope", "nightdial"],
    }),
    [],
  );

  const projectsList = useMemo(
    () => [
      {
        id: "creou",
        title: "Creou - AI UGC Platform for Creators",
        image: creouImage,
        year: "2026",
        status: "live",
        liveUrl: "https://creou.vercel.app",
        description:
          "AI UGC platform for faceless creators. Pick a niche and Creou turns out native, TikTok-style slideshow posts your audience actually saves — no camera, no face, no shoot. Generate style-locked slideshow decks, clone viral formats into editable blueprints, schedule posts, and track save rate. One Next.js app on Supabase with a self-hosted Python generation worker running Claude, GPT-Image-2, and Gemini.",
        link: "/projects/creou",
        tags: ["Next.js", "React", "TypeScript", "Supabase", "Stripe", "Python", "AI"],
      },
      {
        id: "phonefarm",
        title: "PhoneFarm - Android Fleet Dashboard",
        image: phonefarmImage,
        year: "2026",
        description:
          "A local web dashboard to monitor and control a fleet of 6+ Android phones from one machine over wireless ADB. Streams each screen live with scrcpy + WebCodecs, mirrors input to the whole fleet at once, and records macros that replay across every device on a schedule. Reached privately over Tailscale.",
        link: "/projects/phonefarm",
        tags: ["Node.js", "scrcpy", "WebCodecs", "ADB", "Automation", "Tailscale"],
      },
      {
        id: "ward",
        title: "WARD - Autonomous On-Chain Repair Settlement",
        image: wardImage,
        year: "2026",
        status: "live",
        liveUrl: "https://web-nine-ashen-75.vercel.app",
        description:
          "Rails for an autonomous system to hire and pay a verified human for physically-verifiable work, settled on-chain. A home agent fixes what it can in software; when the fault is physical it hires a worker via ENS and releases USDC the moment a Chainlink CRE workflow attests the repair. A working implementation of ERC-8183, running end-to-end on Arc testnet.",
        link: "/projects/ward",
        tags: ["ERC-8183", "Arc", "Chainlink CRE", "ENS", "Solidity", "Web3"],
        hackathon: true,
      },
      {
        id: "veridex",
        title: "Veridex - Trust Layer for AI Agent Commerce",
        image: veridexImage,
        year: "2026",
        status: "live",
        liveUrl: "https://veridex.sbs",
        description:
          "Trust middleware for AI agents. Every action checked before it runs and written to Hedera HCS — pre-execution gate, AES-256-GCM encrypted audit trail, replayable trust scores, operator policies, and ERC-7715 wallet-scoped permissions. 17 agents monitored, 3,900+ actions logged.",
        link: "/projects/veridex",
        tags: ["Hedera", "Node.js", "Next.js", "Solidity", "AI Agents", "Web3"],
      },
      {
        id: "aimem",
        image: aimemImage,
        title: "Aimem - Local-First Memory for Coding Agents",
        year: "2026",
        status: "in-progress",
        description:
          "Memory layer between my Obsidian vault and every coding agent I run. Generates a compact index of every project, repo, and decision, serves it over an MCP server with ranked search, and enforces a three-tier privacy boundary so agents get context without seeing the journal. Agent writes are quarantined until reviewed. Two small Go binaries, zero third-party dependencies.",
        tags: ["Go", "MCP", "AI Agents", "Obsidian", "CLI"],
        link: "/projects/aimem",
      },
      {
        id: "pyras",
        title: "Blockchain Infra",
        image: pyrasImage,
        year: "2026",
        status: "live",
        liveUrl: "https://pyras.org/dashboard",
        description:
          "Production-grade Ethereum infrastructure serving decentralized developers with 24.9M+ blocks synced, zero rate limits, and Pocket Network relay mining for passive revenue. Built on a DappNode custom build running 35 containerized services — a true IRL Docker container.",
        link: "/projects/pyras",
        tags: ["Ethereum", "Docker", "Pocket Network", "Temporal.io", "Cloudflare", "PostgreSQL"],
      },
      {
        id: "agenttrust",
        title: "AgentTrust - On-Chain Reputation for AI Agents",
        image: agentTrustImage,
        year: "2026",
        status: "live",
        description:
          "Merged into Veridex. Cryptographically verifiable, escrow-weighted reputation infrastructure for autonomous AI agents. Built at ETHDenver 2026 on Hedera. Agents hire each other, escrow HBAR, deliver work, and rate each other — all on-chain with ungameable reputation scoring.",
        link: "/projects/agenttrust",
        tags: ["Solidity", "Hedera", "Node.js", "Next.js", "AI Agents", "Web3"],
        hackathon: true,
      },
      {
        id: "jaeger",
        title: "Jaeger - Polymarket Browser Extension",
        image: jaegerImage,
        year: "2025",
        description:
          "Chrome extension that automatically discovers relevant Polymarket prediction markets for any webpage you visit. Features keyword matching, market insights, Base smart account integration, and a premium black and gold UI. Built for Midwest Blockchain Conference Hackathon 2025.",
        link: "/projects/jaeger",
        tags: ["Chrome Extension", "React", "Polymarket", "Base", "Web3"],
        hackathon: true,
      },
      {
        id: "youvest",
        title: "YouVest - Decentralized Creator Investment Platform",
        image: youvestImage,
        status: "live",
        year: "2025",
        liveUrl: "https://www.youvest.lol/",
        description:
          "Decentralized platform built on Solana enabling fans to invest in content creators via blockchain. Built solo in one week for Colosseum's Cypherpunk Hackathon 2025. Features creator tokenization, bonding curve pricing, and instant liquidity using Rust/Anchor smart contracts.",
        link: "/projects/youvest",
        tags: ["Solana", "Smart Contracts", "Next.js", "Blockchain", "DeFi"],
        hackathon: true,
      },
      {
        id: "polyterm",
        title: "PolyTerm - Terminal Dashboard for PolyMarket",
        image: polytermImage,
        status: "live",
        year: "2025",
        description:
          "Terminal-based dashboard for PolyMarket that delivers real-time prediction market data directly in the terminal. Features customizable views, live market data via PolyMarket API, and a distraction-free interface built for traders who need fast access to market insights.",
        link: "/projects/polyterm",
        tags: ["CLI", "API Integration", "Real-Time Data", "Trading Tools"],
      },
      {
        id: "exoform",
        title: "Exoform - 3D Printed National Parks",
        image: exoformImage,
        status: "live",
        year: "2026",
        liveUrl: "https://www.exoform.shop",
        description:
          "Full-colour 3D printed terrain of US national parks, generated from real elevation and land-cover data with landmarks at true scale and your hike raised on the trail. Build-your-own lets anyone pick a spot on the map, upload a GPX route, and get a printable piece. Next.js + Three.js storefront with a Python terrain generator, batch print planning, and Shippo labels, self-hosted behind Cloudflare.",
        link: "/projects/exoform",
        tags: ["Next.js", "Three.js", "Python", "Prisma", "Stripe", "3D Printing"],
      },
      {
        id: "skillscope",
        title: "SkillScope - Analytics for Claude Code Skills",
        image: skillscopeImage,
        year: "2026",
        status: "live",
        liveUrl: "https://www.npmjs.com/package/skillscope",
        description:
          "\"Google Analytics for your Claude Code skills.\" Shows which skills actually fire, what they cost in context, and which are dead weight. Published to npm, runs with npx.",
        tags: ["Node.js", "npm", "Claude Code", "CLI"],
        link: "/projects/skillscope",
      },
      {
        id: "airlock",
        image: airlockImage,
        title: "Agent Airlock - Policy Firewall for Ledger",
        year: "2026",
        description:
          "Go policy firewall between an autonomous agent and a Ledger hardware wallet. The agent proposes a transaction, the airlock decides if it may reach the device, and a human approves on the device screen. If the agent holds the key, a prompt injection holds the key; this takes it away.",
        tags: ["Go", "Ledger", "AI Agents", "Security"],
        link: "/projects/airlock",
      },
      {
        id: "accept",
        image: acceptImage,
        title: "Accept - Physical Approve Button for AI Agents",
        year: "2026",
        description:
          "USB device on the desk that intercepts Claude Code commands before they run. Nothing executes until a human presses APPROVE or REJECT, every decision is logged, and an unplugged device always means no. ESP32 + OLED firmware, Python daemon, OpenSCAD enclosure.",
        tags: ["ESP32", "Firmware", "Python", "Hardware", "AI Agents"],
        link: "/projects/accept",
      },
      {
        id: "corec",
        image: corecImage,
        title: "CoRec Tracker - Purdue Gym Busyness",
        year: "2026",
        status: "live",
        liveUrl: "https://corec.jaeger.lol",
        description:
          "Live and historical busyness for every Purdue CoRec area: weekday by hour heatmaps and best times to go, per semester and all time. One Go binary + SQLite, self-hosted behind a Cloudflare tunnel.",
        tags: ["Go", "SQLite", "Docker", "Cloudflare"],
        link: "/projects/corec",
      },
      {
        id: "nightdial",
        image: nightdialImage,
        title: "Nightdial - A Radio Between Frequencies",
        year: "2026",
        description:
          "Interactive toy where the whole site is an analog tuner sweeping 87.0 to 108.0 MHz, with eleven living stations hidden in the static: code rain afraid of your cursor, a Game of Life garden, a speaking numbers station. Zero dependencies, vanilla Canvas 2D and WebAudio.",
        tags: ["Canvas", "WebAudio", "JavaScript"],
        link: "/projects/nightdial",
      },
      {
        id: "turtosadetect",
        image: detectImage,
        title: "TurtosaDetect - AI Text Detection",
        year: "2026",
        description:
          "AI-generated text detector built on a fine-tuned ModernBERT-large classifier with an ONNX export. FastAPI backend with account-level stylometry, plus a browser extension and paste-a-text web detector.",
        tags: ["Python", "ModernBERT", "FastAPI", "ML", "Chrome Extension"],
        link: "/projects/turtosadetect",
      },
      {
        id: "cell",
        image: cellImage,
        title: "CELL - Multiplayer Game of Life on Solana",
        year: "2026",
        status: "live",
        liveUrl: "https://memecoinbullshit.vercel.app",
        description:
          "One persistent, never-wiped Conway's Game of Life board shared by everyone. Holders drop owner-stamped cells that evolve every 500ms; every 15 minutes whoever controls the most living cells wins the pot, settled on-chain.",
        tags: ["Solana", "Socket.IO", "TypeScript", "Web3"],
        link: "/projects/cell",
      },
      {
        id: "trunorth",
        title: "TruNorth HVAC - Website Development",
        image: trunorthImage,
        status: "live",
        year: "2025",
        liveUrl: "https://trunorthhvac.com",
        description:
          "A unique HVAC company website that breaks away from traditional corporate aesthetics. Built with React and Tailwind CSS, the site emphasizes community involvement, real people, and sustainability while featuring interactive product pages and a hidden secret deals section for loyal customers.",
        link: "/projects/trunorth",
        tags: ["React", "Tailwind CSS", "Web Design", "SEO"],
      },
      {
        id: "staklabs",
        title: "StakLabs - Student-Run Web Development Company",
        image: staklabsImage,
        status: "live",
        year: "2025",
        liveUrl: "https://staklabs.ai/",
        description:
          "Student-run web development company from Downingtown STEM Academy. Built alongside my brother, we delivered professional web development, mobile apps, and SEO services to real clients. Featured project: TruNorth HVAC complete website redesign with 3D elements and local SEO.",
        link: "/projects/staklabs",
        tags: ["React", "Next.js", "Tailwind CSS", "Web Design", "SEO"],
      },
      {
        id: "promptr",
        title: "Promptr - AI Prompt Management",
        image: promptr1,
        status: "live",
        year: "2025",
        liveUrl: "https://chromewebstore.google.com/detail/promptr/onkoaammdlfaebbncpbjofmcjkilgpbp",
        description: 
          "A Chrome extension for managing and injecting AI prompts across multiple LLM platforms (ChatGPT, Claude, Grok, etc). Features include prompt library management, one-click injection, and cross-platform support with a focus on streamlined workflows.",
        link: "/projects/promptr",
        tags: ["Chrome Extension"],
      },
      {
        id: "trip",
        title: "Trippian - AI Travel Assistant",
        image: tripImage,
        year: "2025",
        description:
          "Built a sophisticated multi-agent AI system where autonomous agents collaborate to handle travel planning. Each specialized agent (Calendar, Flights, Hotels, Travel Assistant) maintains its own memory and reasoning while sharing a unified ItineraryState, demonstrating advanced agent-to-agent communication and autonomous decision making.",
        link: "/projects/trip",
        tags: ["AI Agents", "Python", "Flask", "React Native"],
        hackathon: true,
      },
      {
        id: "block",
        title: "Boiler Blockchain - Web Development",
        image: blockImage,
        status: "live",
        year: "2025",
        liveUrl: "https://www.boilerblockchain.org/",
        description:
          "Boiler Blockchain is Purdue University's premier blockchain and Web3 organization. I contributed to the development of their website, which serves as a hub for blockchain education, community building, and showcasing their events and initiatives on campus.",
        link: "/projects/block",
        tags: ["React", "Tailwind CSS", "Node.js", "Web3"],
      },
      {
        id: "cosmos",
        title: "CosmosPool - DeFi Liquidity Protocol",
        image: cosmosImage,
        year: "2025",
        description:
          "CosmosPool is a decentralized liquidity provision system built on Unichain that simplifies DeFi participation. It enables users to deposit single-sided assets (e.g. WETH or USDC) into concentrated liquidity pools, automating the matching process with complementary deposits for optimal liquidity provision.",
        link: "/projects/cosmos",
        tags: ["DeFi", "Smart Contracts", "Uniswap", "Blockchain"],
        hackathon: true,
      },
      {
        id: "docu",
        title: "Docu - Document Scanner & AI Analyzer",
        image: docuImage,
        type: "mobile-app",
        status: "live",
        year: "2025",
        liveUrl:
          "https://apps.apple.com/us/app/docu-ai-scanner-analyzer/id6739954302?platform=iphone",
        description:
          "Docu is an AI-powered document scanning and analysis tool that enables users to easily digitize, organize, and summarize their documents. The app can extract critical information, create searchable text, and generate concise summaries for quick insights.",
        link: "/projects/docu",
        tags: ["React Native", "Computer Vision"],
      },
      {
        id: "locallens",
        title: "LocalLens",
        image: mlh1,
        status: "completed",
        year: "2025",
        completionDate: "Winter 2025",
        description:
          "LocalLens is a hands-free, real-time campus tour system designed for Meta Glasses. It uses location-based audio narration to provide users with contextual insights about their surroundings without the need to look at a screen. By leveraging geofencing, live streaming, and text-to-speech technology, LocalLens enables an immersive exploration experience—whether on a college campus or any tour-like setting.",
        link: "/projects/locallens",
        tags: ["React Native", "Express JS", "Selenium"],
        hackathon: true,
      },
      {
        id: "meta",
        title: "LiveAnswer - For Meta Glasses",
        image: metaImage,
        status: "completed",
        year: "2025",
        completionDate: "Winter 2025",
        description:
          "Utilizing the livestream feature of Meta Glasses, I developed a system that streams real-time video to ChatGPT, which then analyzes the content and generates a response. The response is posted as a comment on the stream, allowing you to hear the answer directly through your earpiece.",
        link: "/projects/meta",
        tags: ["Selenium", "Python", "Computer Vision"],
      },
      {
        id: "scout",
        title: "Scout - Shopping and Selling App",
        image: scoutLogo,
        type: "mobile-app",
        year: "2024",
        description:
          'Scout is an innovative mobile application designed to revolutionize the way users shop and sell items. The app utilizes "google scan" to recognize items and compare prices across 100+ retailers.',
        link: "/projects/scout",
        tags: ["React Native", "Web Scraping", "Computer Vision"],
      },
      {
        id: "tools",
        title: "Tools - Website With Useful Tools",
        image: toolsImage,
        status: "completed",
        year: "2024",
        completionDate: "2024",
        description:
          "This website consolidates various essential tools for developers (me), such things as allowing users to access a QR code generator, password generator, unit converter, and more without searching for individual tools every time.",
        link: "/projects/tools",
        tags: ["React"],
      },
      {
        id: "unbolted",
        title: "Unbolted - On-Demand GPU Computing",
        image: unboltedImage,
        status: "inactive",
        year: "2024",
        description:
          "Unbolted (a hackathon project) simplifies the GPU rental process, making it easy for new users to spin up high-performance GPUs for AI workloads while offering advanced controls for experienced users.",
        link: "/projects/unbolted",
        tags: ["React", "API Integration", "Stripe Payments", "Kubernetes"],
        hackathon: true,
      },
      {
        id: "bike",
        title: "Electric Bike - Conversion Project",
        image: bikeimage,
        status: "completed",
        year: "2024",
        completionDate: "Summer 2024",
        description:
          "Custom electric bike conversion featuring a Flipsky motor, multistage belt drive system, and swappable Ryobi battery. Designed to solve campus transportation with a focus on efficiency and easy maintenance.",
        link: "/projects/bike",
        tags: ["Mechanical Engineering", "Electrical Engineering", "CAD"],
      },
      {
        id: "raspi",
        title: "Raspi - Smart Glasses",
        image: raspberryPiGlasses,
        status: "completed",
        year: "2023",
        completionDate: "Winter 2023",
        description:
          "Custom-built smart glasses using a Raspberry Pi that use computer vision to identify objects in real-time. Features a compact OLED display, camera module, and 3D-printed housing for a fully wearable experience.",
        link: "/projects/raspi",
        tags: ["Raspberry Pi", "Python", "Computer Vision"],
      },
    ],
    [],
  );

  const orderedProjects = useMemo(() => {
    const featured = FEATURED_IDS.map((id) =>
      projectsList.find((project) => project.id === id),
    ).filter(Boolean);
    const rest = projectsList.filter(
      (project) => !FEATURED_IDS.includes(project.id),
    );
    return [...featured, ...rest];
  }, [projectsList]);

  useEffect(() => {
    const selectedIds = filterCategories[activeFilter] || [];
    setFilteredProjects(
      activeFilter === "all"
        ? orderedProjects
        : orderedProjects.filter((project) => selectedIds.includes(project.id)),
    );
  }, [activeFilter, filterCategories, orderedProjects]);

  const featuredProjects = filteredProjects.filter((project) =>
    FEATURED_IDS.includes(project.id),
  );
  const otherProjects = filteredProjects.filter(
    (project) => !FEATURED_IDS.includes(project.id),
  );

  const handleProjectClick = (link) => {
    // Remember the list scroll position so returning from the project
    // detail lands in the same spot
    const scrollY =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    sessionStorage.setItem("projectsListScroll", scrollY.toString());

    if (!link) return;
    if (link.startsWith("http")) {
      window.open(link, "_blank", "noopener,noreferrer");
      return;
    }
    navigate(link);
  };

  const renderCard = (project) => (
    <div
      key={project.id}
      className={`project-card${project.link ? "" : " no-link"}`}
      data-type={project.type}
      data-id={project.id}
      onClick={() => handleProjectClick(project.link)}
    >
      <div className="project-year-tag">
        <span className="year-badge"></span>
        {project.year}
      </div>
      <div className="project-status">
        {project.status === "live" && (
          project.id === "polyterm" ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowSSHPopup(true);
              }}
              className="status-dot live"
            >
              Live ↗
            </button>
          ) : (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="status-dot live"
            >
              Live ↗
            </a>
          )
        )}
        {project.status === "inactive" && (
          <span className="status-dot inactive">Inactive</span>
        )}
        {project.status === "completed" && (
          <span className="status-dot completed">
            Completed {project.completionDate}
          </span>
        )}
        {project.status === "in-progress" && (
          <span className="status-dot in-progress">In Progress</span>
        )}
        {project.hackathon && (
          <span className="status-dot hackathon">Hackathon</span>
        )}
      </div>
      {project.image && (
        <div className="project-thumb">
          <img src={project.image} alt={project.title} />
        </div>
      )}
      <div className="project-info">
        <div>
          <h3>{project.title}</h3>
          <div className="project-tags">
            {project.tags?.map((tag) => (
              <span key={tag} className="project-tag">
                {tag}
              </span>
            ))}
          </div>
          <p>{project.description}</p>
        </div>
        {project.link?.startsWith("http") ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="see-more"
            onClick={(e) => e.stopPropagation()}
          >
            View on GitHub ↗
          </a>
        ) : project.link ? (
          <Link to={project.link} className="see-more">
            View Project Details →
          </Link>
        ) : null}
      </div>
    </div>
  );

  return (
    <>
      {showSSHPopup && (
        <div
          className="ssh-overlay"
          onClick={() => setShowSSHPopup(false)}
        >
          <div
            className="ssh-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="ssh-title">Access PolyTerm via SSH</h2>
            <p className="ssh-text">To access the live PolyTerm dashboard:</p>
            <div className="ssh-command">
              <code>{sshCommand}</code>
              <button
                onClick={copyToClipboard}
                className={`ssh-copy-btn ${copied ? "copied" : ""}`}
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            <p className="ssh-hint">if you don't know how to do this, gg 💀</p>
            <button
              onClick={() => setShowSSHPopup(false)}
              className="ssh-close-btn"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div className="projects-terminal">
        <Link to="/" className="back-btn">← Back</Link>

        <div className="terminal-content">
          <div className="project-filters">
            <label className="filter-label" htmlFor="project-sort">
              Sort by:
            </label>
            <select
              id="project-sort"
              className="filter-select"
              value={activeFilter}
              onChange={(e) => setActiveFilter(e.target.value)}
            >
              <option value="all">All</option>
              <option value="website">Website</option>
              <option value="hardware">Hardware</option>
              <option value="software">Software</option>
              <option value="web3">Web3</option>
              <option value="hackathon">Hackathon</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="oneTime">One Time Completion</option>
            </select>
          </div>

          <div className="project-grid">
            {featuredProjects.map(renderCard)}
          </div>

          {otherProjects.length > 0 && (
            <>
              <div className="other-projects-header">
                <h2>Other</h2>
                <p>
                  Mostly here so I have a record of everything I've worked on.
                  Weekend builds, hackathon leftovers, and experiments; none of
                  them are realistically that impressive.
                </p>
              </div>
              <div className="project-grid">
                {otherProjects.map(renderCard)}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Projects;
