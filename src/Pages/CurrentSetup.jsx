import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./projectDetails.css";
import "./CurrentSetup.css";

import laptop from "../images/Setup/laptop.jpg";
import gpuRig from "../images/Setup/gpu-rig.jpg";
import server from "../images/Setup/server.jpg";
import pc4090 from "../images/Setup/pc-4090.jpg";
import pc3070ti from "../images/Setup/pc-3070ti.jpg";
import irlDocker from "../images/Setup/irl-docker.jpg";
import macmini from "../images/Setup/macmini.jpg";
import phonefarm from "../images/Setup/phonefarm.jpg";
import printerCentauri from "../images/Setup/printer-centauri.jpg";
import printerA1mini1 from "../images/Setup/printer-a1mini-1.jpg";
import printerA1mini2 from "../images/Setup/printer-a1mini-2.jpg";
import printerA1_1 from "../images/Setup/printer-a1-1.jpg";
import printerA1_2 from "../images/Setup/printer-a1-2.jpg";
import hardware1 from "../images/Setup/hardware-1.jpg";
import hardware2 from "../images/Setup/hardware-2.jpg";
import fullSetup from "../images/Setup/full-setup.jpg";
import fullSetup2 from "../images/Setup/full-setup-2.jpg";

function CurrentSetup() {
  const [lightboxImage, setLightboxImage] = useState(null);

  const groups = [
    {
      title: "Compute & AI",
      sub: "These devices are used for training models, running brute-force jobs, and crunching large parallel workloads that need serious cores and memory, also used as the backend for some of me and my brother's services.",
      devices: [
        {
          name: "GPU Rig",
          img: gpuRig,
          specs: ["2× RTX 3090", "RTX 2080 (offline)", "GTX 1080 (offline)"],
          note: "Currently using this for the Qwen 3.6 27B uncensored model, running localized agents fully self-hosted.",
        },
        {
          name: "Server",
          img: server,
          specs: [
            "384 GB RAM",
            "2× Intel Xeon CPUs",
            "28 cores each (56 total)",
          ],
        },
      ],
    },
    {
      title: "Phone Farm",
      sub: "A rack of 6+ Android phones driven over wireless ADB by an always-on Raspberry Pi.",
      devices: [
        {
          name: "Android Phone Farm",
          img: phonefarm,
          specs: [
            "6+ Android devices",
            "Wireless ADB fleet",
            "Raspberry Pi controller, 24/7",
          ],
          note: (
            <>
              Connected to a Raspberry Pi that I can connect to remotely to see
              the{" "}
              <Link to="/projects/phonefarm" className="text-link">
                PhoneFarm
              </Link>{" "}
              dashboard of all the phones and drive every device from anywhere.
              The Pi runs it as a service — keeps ADB alive, restarts stalled
              devices, and fires scheduled macros server-side.
            </>
          ),
        },
      ],
    },
    {
      title: "Workstations",
      devices: [
        {
          name: "Main Laptop",
          img: laptop,
          specs: ["CachyOS + Hyprland", "64 GB RAM", "24-core CPU"],
        },
        {
          name: "Workstation #1",
          img: pc4090,
          specs: ["EndeavourOS", "RTX 4090"],
        },
        {
          name: "Workstation #2",
          img: pc3070ti,
          specs: ["Windows", "RTX 3070 Ti"],
        },
        {
          name: "2024 M4 Mac Mini",
          img: macmini,
          specs: ["App Store dev station"],
        },
      ],
    },
    {
      title: "Backend & Nodes",
      sub: "Always-on machines running node infrastructure and backend services.",
      devices: [
        {
          name: "IRL Docker Container",
          img: irlDocker,
          specs: [
            {
              label: "DappNode home node",
              children: [
                "Self-hosted Monero (XMR) node",
                "Self-hosted Bitcoin (BTC) node",
              ],
            },
            "2× Dell SFF Linux backend boxes",
          ],
          note: (
            <>
              A true IRL Docker host running my dApp home node so crypto apps
              talk to my own infrastructure instead of third-party RPC, plus
              dedicated Linux boxes for lightweight backend services. Powers{" "}
              <Link to="/projects/pyras" className="text-link">
                Pyras
              </Link>
              .
            </>
          ),
        },
      ],
    },
    {
      title: "3D Printers",
      sub: (
        <>
          The print farm behind{" "}
          <Link to="/projects/exoform" className="text-link">
            Exoform
          </Link>{" "}
          — one enclosed Elegoo Centauri Carbon plus four Bambu Lab machines.
        </>
      ),
      devices: [
        { name: "Elegoo Centauri Carbon", img: printerCentauri, specs: [] },
        { name: "Bambu Lab A1 Mini", img: printerA1mini1, specs: [] },
        { name: "Bambu Lab A1 Mini", img: printerA1mini2, specs: [] },
        { name: "Bambu Lab A1", img: printerA1_1, specs: [] },
        { name: "Bambu Lab A1", img: printerA1_2, specs: [] },
      ],
    },
  ];

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
          <title>My Homelab | Joey Kokinda</title>
          <meta
            name="description"
            content="Joey Kokinda's current setup: a self-hosted homelab — workstations, a GPU rig running local Qwen agents, a 56-core server, self-hosted BTC/XMR nodes on a DappNode home node, a Mac mini, an Android phone farm, and a fleet of Bambu Lab and Elegoo 3D printers."
          />
          <link rel="canonical" href="https://jkokinda.com/setup" />
          <meta name="robots" content="index, follow" />
        </Helmet>

        <Link to="/" className="back-btn">
          ← Back
        </Link>

        <div className="project-header">
          <h1>My Homelab</h1>
        </div>

        {groups.map((group, gi) => (
          <section className="setup-section" key={gi}>
            <h2 className="setup-section-title">{group.title}</h2>
            {group.sub && <p className="setup-section-sub">{group.sub}</p>}
            <div className="device-grid">
              {group.devices.map((d, idx) => (
                <div key={idx} className="device-card">
                  <div
                    className="device-card-media"
                    onClick={() => setLightboxImage(d.img)}
                  >
                    <img
                      src={d.img}
                      alt={d.name}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="device-card-body">
                    <h3 className="device-card-name">{d.name}</h3>
                    {d.specs.length > 0 && (
                      <ul className="device-specs">
                        {d.specs.map((s, i) =>
                          typeof s === "string" ? (
                            <li key={i}>{s}</li>
                          ) : (
                            <li key={i}>
                              {s.label}
                              <ul className="device-specs device-specs-sub">
                                {s.children.map((c, j) => (
                                  <li key={j}>{c}</li>
                                ))}
                              </ul>
                            </li>
                          ),
                        )}
                      </ul>
                    )}
                    {d.note && <p className="device-note">{d.note}</p>}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        <section className="setup-section">
          <h2 className="setup-section-title">Various Hardware Stations</h2>
          <p className="setup-section-sub">
            Benches for electronics, embedded, and hardware prototyping.
          </p>
          <div className="device-grid">
            {[hardware1, hardware2].map((img, idx) => (
              <div key={idx} className="device-card">
                <div
                  className="device-card-media"
                  onClick={() => setLightboxImage(img)}
                >
                  <img
                    src={img}
                    alt={`Hardware station ${idx + 1}`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="setup-section">
          <h2 className="setup-section-title">Full Setup</h2>
          <div className="setup-full-stack">
            {[fullSetup, fullSetup2].map((img, idx) => (
              <div
                key={idx}
                className="setup-full"
                onClick={() => setLightboxImage(img)}
              >
                <img
                  src={img}
                  alt={`Full setup overview ${idx + 1}`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default CurrentSetup;
