import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./projectDetails.css";
import pyras1 from "../images/Pyras/pyras1.png";
import pyras2 from "../images/Pyras/pyras2.jpg";
import pyras3 from "../images/Pyras/pyras3.png";
import pyras4 from "../images/Pyras/pyras4.png";

function Pyras() {
  const [lightboxImage, setLightboxImage] = useState(null);

  const images = [pyras1, pyras2, pyras3, pyras4];

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
          <title>Blockchain Infra | Joey Kokinda</title>
          <meta
            name="description"
            content="Pyras is a production-grade Ethereum infrastructure platform serving decentralized applications and blockchain developers. Features full archive node, Pocket Network relay mining, and Igniter staking platform."
          />
          <link rel="canonical" href="https://jkokinda.com/projects/pyras" />
          <meta name="robots" content="index, follow, noarchive" />
        </Helmet>

        <Link to="/projects" className="back-button">
          ← Back to Projects
        </Link>

        <div className="project-header">
          <h1>Blockchain Infra</h1>
          <div className="header-links">
            <a
              href="https://pyras.org/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="live-link"
            >
              Dashboard ↗
            </a>
            <a
              href="https://igniter.pyras.org"
              target="_blank"
              rel="noopener noreferrer"
              className="live-link github-link"
            >
              Provider Interface ↗
            </a>
            <a
              href="https://rpc.pyras.org"
              target="_blank"
              rel="noopener noreferrer"
              className="live-link github-link"
            >
              RPC Endpoint ↗
            </a>
          </div>
        </div>

        <div className="app-gallery">
          {images.map((img, idx) => (
            <div key={idx} className="gallery-item">
              <img
                src={img}
                alt={`Pyras Infrastructure ${idx + 1}`}
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
                Pyras is a production blockchain infrastructure platform providing RPC services, staking infrastructure, and decentralized application hosting. Built from the ground up to serve developers with reliable, censorship-resistant access to Ethereum mainnet and related services.
              </p>
              <p>
                The hardware is housed in a custom DappNode build — which, admittedly, looks exactly like an IRL Docker container. Fitting, since it's running about 35 of them.
              </p>
            </section>

            <section className="project-section">
              <h2>The Problem</h2>
              <p>
                Most developers rely on centralized RPC providers (Infura, Alchemy) that impose rate limits, track usage, and can censor transactions. Small development teams and students often hit these limits during hackathons and critical development phases, while also lacking access to premium features like archive node queries or custom staking infrastructure.
              </p>
            </section>

            <section className="project-section">
              <h2>What It Does</h2>
              <ul>
                <li>
                  <strong>Ethereum Full Node:</strong> Besu client running on bare metal via DappNode, synced to 24.9M+ blocks with full archive access (~2TB on-disk)
                </li>
                <li>
                  <strong>Public RPC Endpoints:</strong> rpc.pyras.org (JSON-RPC), ws.pyras.org (WebSocket), with zero rate limits for authorized users
                </li>
                <li>
                  <strong>Pocket Network Relay Mining:</strong> Every RPC request served earns POKT tokens — the infrastructure pays for itself
                </li>
                <li>
                  <strong>Igniter Staking Platform:</strong> Provider and Middleman apps for Pocket Network Shannon protocol — automated supplier lifecycle management, delegator web dashboard, and on-chain staking workflows
                </li>
                <li>
                  <strong>Monitoring Stack:</strong> Prometheus metrics, Grafana dashboards, and a custom status API at status.pyras.org
                </li>
              </ul>
            </section>

            <section className="project-section">
              <h2>Architecture</h2>
              <p>
                All traffic hits Cloudflare's edge first (DDoS protection, TLS termination, global CDN), then routes through an encrypted Cloudflare Tunnel to the local Docker infrastructure — no public IPs exposed. Inside, 35 containers run across multiple Docker networks (igniter, dncore, mainnet), with Besu multi-homed across networks so different service meshes can reach it simultaneously.
              </p>
              <p>
                The staking layer is built on Temporal.io for workflow orchestration — long-running on-chain operations (stake, unstake, status monitoring) run as durable workflows with built-in retry logic. Private keys are stored in PostgreSQL with AES-256 application-level encryption, with encryption keys separated from credentials.
              </p>
            </section>

            <section className="project-section">
              <h2>Technical Challenges</h2>
              <ul>
                <li>
                  <strong>Dynamic IP Instability:</strong> Docker reassigns container IPs after restarts, breaking Cloudflare Tunnel routes hardcoded to old IPs. Solved by multi-homing Besu across networks, implementing IP discovery in recovery scripts, and migrating toward DNS-based routing.
                </li>
                <li>
                  <strong>Cross-Network Service Communication:</strong> Besu needed to be reachable from isolated Docker networks for different services simultaneously. Solved by connecting it to multiple networks with network aliases for DNS-based discovery.
                </li>
                <li>
                  <strong>Power Outage Recovery:</strong> Hardware failures cause cascading service failures across dependent containers. Built a dependency-ordered startup script (power-outage-recovery.sh) that brings services up in the correct sequence with health checks between each step.
                </li>
                <li>
                  <strong>Secure Key Management:</strong> Staking operations require storing encrypted private keys for on-chain supplier transactions. Implemented PostgreSQL with AES-256 encryption, Temporal workflow isolation for sensitive operations, and separation of encryption keys from credentials.
                </li>
              </ul>
            </section>

            <section className="project-section">
              <h2>Metrics</h2>
              <ul>
                <li><strong>Uptime:</strong> 99.9% (excluding planned maintenance)</li>
                <li><strong>Blocks Synced:</strong> 24,900,000+ (full mainnet history)</li>
                <li><strong>Containers Running:</strong> 35 across 4 Docker networks</li>
                <li><strong>Peer Count:</strong> 70 active Ethereum peers</li>
              </ul>
            </section>

            <section className="project-section">
              <h2>Tech Stack</h2>
              <p>
                Ethereum (Besu), Pocket Network, Docker, PostgreSQL, Temporal.io, Next.js, Cloudflare Tunnel, Grafana, Prometheus
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pyras;
