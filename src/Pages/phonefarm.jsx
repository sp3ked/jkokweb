import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./projectDetails.css";
import phonefarm1 from "../images/PhoneFarm/phonefarm-hardware.png";
import phonefarm2 from "../images/PhoneFarm/phonefarm-dashboard.png";

function PhoneFarm() {
  const [lightboxImage, setLightboxImage] = useState(null);

  const images = [phonefarm2, phonefarm1];

  return (
    <>
      {lightboxImage && (
        <div className="lightbox-overlay" onClick={() => setLightboxImage(null)}>
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
          <title>PhoneFarm - Android Fleet Dashboard | Joey Kokinda</title>
          <meta
            name="description"
            content="PhoneFarm is a local web dashboard to monitor and control a fleet of Android phones over wireless ADB. Live scrcpy + WebCodecs streaming, control-all input mirroring, and scheduled macro replay across every device."
          />
          <link rel="canonical" href="https://jkokinda.com/projects/phonefarm" />
          <meta name="robots" content="index, follow, noarchive" />
        </Helmet>

        <Link to="/projects" className="back-button">
          ← Back to Projects
        </Link>

        <div className="project-header">
          <h1>PhoneFarm - Android Fleet Dashboard</h1>
          <div className="header-links">
            <span className="live-link" style={{ pointerEvents: "none" }}>
              Private repo
            </span>
          </div>
        </div>

        <div className="app-gallery">
          {images.map((src, idx) => (
            <div key={idx} className="gallery-item">
              <img
                src={src}
                alt={`PhoneFarm ${idx + 1}`}
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
                PhoneFarm is a local web dashboard for monitoring and controlling
                a fleet of Android phones from one Linux machine over wireless
                ADB. Each phone shows up as a live, interactive tile in a
                responsive grid — you click and type directly into any screen
                with your mouse and keyboard. I run 6+ devices at once over wifi
                from a laptop.
              </p>
              <p>
                It streams each phone's screen with the scrcpy server (H.264 over
                a socket) and decodes it in the browser with WebCodecs, so it
                stays light enough to drive many phones in real time.
              </p>
            </section>

            <section className="project-section">
              <h2>Features</h2>
              <ul>
                <li>
                  <strong>Live control:</strong> one tile per phone; taps,
                  swipes, scroll, and full keyboard forwarded to the focused
                  device, plus per-tile Back / Home / Recents / Wake / Sleep /
                  Reconnect.
                </li>
                <li>
                  <strong>Control all:</strong> mirror every input to the whole
                  fleet at once. Coordinates are normalized, so each phone
                  applies the gesture at the same relative spot regardless of
                  resolution.
                </li>
                <li>
                  <strong>Macros:</strong> record or hand-build ordered input
                  sequences and replay them across every phone in near-lockstep
                  — once, looped, or on a schedule. Schedules run server-side and
                  persist across restarts.
                </li>
                <li>
                  <strong>Self-healing:</strong> a watchdog auto-reconnects
                  stalled or dropped tiles with exponential backoff.
                </li>
              </ul>
            </section>

            <section className="project-section">
              <h2>How It Works</h2>
              <p>
                On startup a Node server runs <code>adb connect</code> for every
                device in the config, pushes and starts the scrcpy server on each
                one, and reads the H.264 video stream plus a control channel. The
                browser opens one WebSocket per tile, decodes the video with
                WebCodecs to a canvas, and sends clicks and keystrokes back as
                scrcpy control messages. Failed phones surface as red tiles with
                the error; working ones go green and start streaming.
              </p>
            </section>

            <section className="project-section">
              <h2>Always-On Host: Raspberry Pi</h2>
              <p>
                The whole farm is driven by a Raspberry Pi that sits on the same
                wifi as the phones and stays powered 24/7, so the dashboard is
                always up without tying up my main machine. The Pi runs the Node
                server as a service, keeps the ADB connections alive, restarts
                stalled tiles on its own, and fires the scheduled macros
                server-side — so campaigns keep running even with every laptop
                closed. It is basically a headless appliance: plug it in once and
                the farm is online for good.
              </p>
            </section>

            <section className="project-section">
              <h2>Remote Access: Tailscale Mesh</h2>
              <p>
                ADB has no auth or encryption, so the phones and their ADB ports
                stay on the LAN only. Instead of exposing anything to the public
                internet, the Raspberry Pi and all my other machines join one
                Tailscale (WireGuard) tailnet — a private mesh where every node
                can reach every other node directly. From my main computer, my
                laptop, or my phone anywhere in the world, I hit the Pi over its
                tailnet address and the dashboard behaves exactly as if I were
                sitting on the same wifi.
              </p>
              <p>
                Because WebCodecs needs a secure context, TLS is terminated over
                the tailnet (Tailscale serve), so the in-browser H.264 decoder
                works from anywhere with a valid certificate and zero port
                forwarding. The phones never leave the LAN; only the Pi is
                reachable, and only to my own devices on the mesh.
              </p>
            </section>

            <section className="project-section">
              <h2>Stack</h2>
              <p>
                Node.js server (HTTP + WebSocket, REST API), scrcpy server for
                capture and control, WebCodecs for in-browser H.264 decode, and
                Android platform-tools / ADB. Optional scrypt-hashed login,
                Tailscale for private remote access. Roughly 88% JavaScript with a
                small HTML/CSS front end.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default PhoneFarm;
