import React, { Suspense, lazy, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import profilePic from "../images/jkokpfp.png";
import AsciiLoop from "./AsciiLoop";
import mbcWin from "../images/BoilerBlockchain/mbc-polymarket-win.webp";
import hackathonWinners from "../images/BoilerBlockchain/mbc-hackathon-winners.webp";
import teachingClass from "../images/BoilerBlockchain/teaching-class.webp";
import spartan from "../images/Activities/spartan.webp";
import snowboard from "../images/Activities/snowboard.webp";
import basketball from "../images/Activities/basketball.webp";
import pickleball from "../images/Activities/pickleball.webp";
import hiking from "../images/Activities/hiking.webp";
import biking from "../images/Activities/biking.webp";
import poker from "../images/Activities/poker.webp";
import printing3d from "../images/Setup/printer-centauri.jpg";
import larpPreview from "../images/Larp/larp6.webp";
import homelabPhoto from "../images/Setup/full-setup.jpg";
import moonshotPitch from "../images/moonshot-pyras.webp";
import creouShot from "../images/Creou/landing.png";
import phonefarmShot from "../images/PhoneFarm/phonefarm-dashboard.png";
import veridexShot from "../images/veridex/veridex1.png";
import jaegerShot from "../images/Jaeger/jaeger1.jpg";
import "./home.css";

const Flybys = lazy(() => import("./Flybys"));
const SWARM_DELAY_MS = 8000;

const pageLinks = [
  { type: "internal", to: "/projects", label: "projects" },
  { type: "internal", to: "/experience", label: "experience" },
  { type: "internal", to: "/resume", label: "resume" },
  { type: "internal", to: "/blog", label: "blog" },
  { type: "internal", to: "/books", label: "books" },
  { type: "internal", to: "/boilerblockchain", label: "boiler blockchain" },
  { type: "internal", to: "/larp", label: "larp corner" },
];

const socialLinks = [
  { href: "https://github.com/joeykokinda", label: "github" },
  { href: "https://x.com/sp3ked", label: "x" },
  { href: "https://www.linkedin.com/in/jkokinda/", label: "linkedin" },
];

function LinkRow({ items }) {
  return (
    <p className="link-row">
      {items.map((item, i) => (
        <span key={item.label} className="link-item">
          {item.type === "internal" ? (
            <Link to={item.to} className="text-link">
              {item.label}
            </Link>
          ) : (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              {item.label}
            </a>
          )}
          {i < items.length - 1 && <span className="link-sep"> .</span>}
        </span>
      ))}
    </p>
  );
}

const projectTiles = [
  { src: creouShot, title: "creou", tags: "ai ugc pipeline", to: "/projects/creou" },
  { src: phonefarmShot, title: "phonefarm", tags: "agent-run phones", to: "/projects/phonefarm" },
  { src: veridexShot, title: "veridex", tags: "3rd . hedera", to: "/projects/veridex" },
  { src: jaegerShot, title: "jaeger", tags: "1st . mbc '25", to: "/projects/jaeger" },
];

const boilerTiles = [
  { src: hackathonWinners, title: "hacking", tags: "1st . mbc '25" },
  { src: teachingClass, title: "guiding", tags: "club sessions" },
];

const hobbyTiles = [
  { src: spartan, title: "racing" },
  { src: snowboard, title: "snowboarding" },
  { src: hiking, title: "hiking + outdoors" },
  { src: biking, title: "biking" },
  { src: basketball, title: "basketball" },
  { src: pickleball, title: "pickleball" },
  { src: poker, title: "poker" },
  { src: printing3d, title: "3d printing" },
];

function PhotoTile({ tile, to }) {
  const className = `home-tile${tile.wide ? " home-tile-wide" : ""}`;
  const body = (
    <>
      <img src={tile.src} alt={tile.title} loading="lazy" />
      <strong>{tile.title}</strong>
      {tile.tags && <span>{tile.tags}</span>}
    </>
  );
  return to ? (
    <Link to={to} className={className}>
      {body}
    </Link>
  ) : (
    <figure className={className}>{body}</figure>
  );
}

function HomePage() {
  // One drone swarm, once, a few seconds after the page opens
  const [swarmFlying, setSwarmFlying] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const timer = setTimeout(() => setSwarmFlying(true), SWARM_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-page">
      <Helmet>
        <title>Joey Kokinda - AI Developer & Student at Purdue University</title>
        <meta
          name="description"
          content="Joey Kokinda is an AI student at Purdue University specializing in computer vision, blockchain development, and full-stack applications. Explore my projects, experience, and writing."
        />
        <link rel="canonical" href="https://jkok.dev/" />
        <meta property="og:url" content="https://jkok.dev/" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
      </Helmet>

      {swarmFlying && (
        <Suspense fallback={null}>
          <Flybys crafts={["drones"]} onDone={() => setSwarmFlying(false)} />
        </Suspense>
      )}

      <div className="home-layout">
      <aside className="home-panel-left">
        <section className="home-panel glass">
          <h2 className="home-panel-title">PROJECTS</h2>
          <div className="home-tile-grid home-tile-grid-projects">
            {projectTiles.map((tile) => (
              <PhotoTile key={tile.title} tile={tile} to={tile.to} />
            ))}
          </div>
          <Link to="/projects" className="home-panel-button">
            more projects &rarr;
          </Link>
        </section>

        <section className="home-panel glass">
          <h2 className="home-panel-title">BOILER BLOCKCHAIN</h2>
          <div className="home-tile-grid">
            {boilerTiles.map((tile) => (
              <PhotoTile key={tile.title} tile={tile} to="/boilerblockchain" />
            ))}
          </div>
          <Link to="/boilerblockchain" className="home-panel-button">
            learn more &rarr;
          </Link>
        </section>

        <section className="home-panel glass">
          <h2 className="home-panel-title">HOBBIES</h2>
          <div className="home-tile-grid home-tile-grid-hobbies">
            {hobbyTiles.map((tile) => (
              <PhotoTile key={tile.title} tile={tile} />
            ))}
          </div>
          <p className="home-panel-note">
            and obviously anything tech: servers, systems, crypto, the homelab.
          </p>
        </section>
      </aside>

      <main className="home-card glass">
        <div className="home-head">
          <img src={profilePic} alt="Joey Kokinda" className="home-avatar" />
          <div className="home-head-text">
            <h1>Joey Kokinda</h1>
            <p className="home-sub">
              studying artificial intelligence at{" "}
              <a
                href="https://www.admissions.purdue.edu/majors/a-to-z/artificial-intelligence-science.php"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                purdue university
              </a>
            </p>
            <p className="home-sub home-open">open to summer full-time roles</p>
            <div className="home-head-links">
              <LinkRow items={socialLinks} />
            </div>
          </div>
        </div>

        <hr className="home-divider" />

        <div className="home-tldr-block">
          <p className="home-about">
            I build automation that replaces manual work end to end:{" "}
            <strong>agents, pipelines, and the infra they run on.</strong> At{" "}
            <a
              href="https://10x.so"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              10x
            </a>{" "}
            I owned the AI ad pipeline from prototype to production.{" "}
            <strong>Automate everything.</strong>
          </p>
        </div>


        <p className="home-about-more">
          I've built an AI ad pipeline that generates AI UGC TikTok and IG
          content for AI avatars in parallel in a scalable workflow, the content
          pipeline behind{" "}
          <a
            href="https://creou.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Creou
          </a>
          , a trust layer for AI agents (
          <Link to="/projects/veridex" className="text-link">
            veridex
          </Link>
          ), and an agent that hires and pays real people for repairs (
          <Link to="/projects/ward" className="text-link">
            ward
          </Link>
          ). On the hardware side I run a{" "}
          <Link to="/projects/phonefarm" className="text-link">
            phone farm
          </Link>{" "}
          controlled by agents and my own BTC, XMR, and Ethereum nodes (
          <a
            href="https://pyras.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            pyras.org
          </a>
          ). Older interesting projects:{" "}
          <Link to="/projects/raspi" className="text-link">
            raspi
          </Link>
          ,{" "}
          <a
            href="https://turtosa.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            turtosa.com
          </a>
          ,{" "}
          <Link to="/projects" className="text-link">
            etc
          </Link>
          .
        </p>

        <p className="home-about-more">
          I pitched twice in Purdue's{" "}
          <a
            href="https://www.purdue.edu/newsroom/2026/Q3/innovative-solutions-abound-at-moonshot-pitch-challenge/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Moonshot Pitch Challenge
          </a>{" "}
          in front of an audience of 200.
        </p>

        <p className="home-about-more">
          I placed 3rd in the AI agent bounty at Hello Apex Hedera with{" "}
          <Link to="/projects/veridex" className="text-link">
            Veridex
          </Link>{" "}
          and won 1st in the Polymarket bounty at the Midwest Blockchain
          Conference with{" "}
          <Link to="/projects/jaeger" className="text-link">
            Jaeger
          </Link>
          .
        </p>

        <hr className="home-divider" />


        <div className="home-recent">
          <span className="home-links-label">RECENT</span>
          <div className="home-recent-body">
            <p className="home-recent-role">
              Core dev + board &middot;{" "}
              <Link to="/boilerblockchain" className="text-link">
                Boiler Blockchain
              </Link>{" "}
              <span className="home-recent-dates">(active)</span>
            </p>
            <p className="home-recent-desc home-recent-gap">
              Bringing in new members, landing sponsor funding, and organizing
              our trips: MBC 2025, Solana Breakpoint, ETHDenver 2025 and 2026.
            </p>
            <p className="home-recent-role">
              Published &middot;{" "}
              <a
                href="https://www.ledger.com/academy/series/n3xt/research-last-mile-oracle-agents-physical-world"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Ledger N3xt
              </a>{" "}
              <span className="home-recent-dates">(Sep 2026)</span>
            </p>
            <p className="home-recent-desc home-recent-gap">
              The Last-Mile Oracle: how AI agents can verify real-world outcomes,
              with the proof required scaling to the stakes.
            </p>
            <p className="home-recent-role home-recent-bold">
              Intern &middot;{" "}
              <a
                href="https://10x.so"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                10x
              </a>{" "}
              <span className="home-recent-dates">(May&ndash;Jul 2026)</span>
            </p>
            <p className="home-recent-desc home-recent-bold">
              Owned an AI ad pipeline end to end: parallelized per-avatar
              generation of TikTok/IG slideshows and videos…{" "}
              <Link to="/experience" className="text-link">
                see more
              </Link>
            </p>
          </div>
        </div>


        <section className="home-pipeline-box">
          <span className="home-links-label">PIPELINE</span>
          <AsciiLoop />
        </section>

        <div className="home-head-links home-bottom-links">
          <LinkRow items={pageLinks} />
        </div>

        <p className="home-contact">
          contact me at{" "}
          <a href="mailto:j@kokinda.com" className="home-contact-link">
            j @ kokinda . com
          </a>
        </p>
      </main>

      <aside className="home-panel home-panel-right glass">
        <h2 className="home-panel-title">STANDOUTS</h2>
        <figure className="home-feature">
          <img src={mbcWin} alt="Joey holding the $3,500 Polymarket bounty check at MBC '25" />
          <figcaption>
            <strong>1ST PLACE</strong>
            <span>polymarket bounty . mbc '25 . $3,500</span>
          </figcaption>
        </figure>
        <Link to="/setup" className="home-feature home-feature-link home-feature-big">
          <img src={homelabPhoto} alt="Joey's homelab" loading="lazy" />
          <figcaption>
            <strong>HOMELAB</strong>
            <span>click to learn more &rarr;</span>
          </figcaption>
        </Link>
        <figure className="home-feature">
          <img src={moonshotPitch} alt="Joey pitching Pyras at Purdue's Moonshot Pitch Challenge" loading="lazy" className="home-feature-wide" />
          <figcaption>
            <strong>MOONSHOT PITCHES</strong>
            <span>2025 pyras . 2026 perigee</span>
          </figcaption>
        </figure>
        <h2 className="home-panel-title home-panel-subtitle">ETC</h2>
        <Link to="/larp" className="home-feature home-feature-link">
          <img src={larpPreview} alt="Laptop and monitors setup" loading="lazy" />
          <figcaption>
            <strong>LARP CORNER</strong>
            <span>click me &rarr;</span>
          </figcaption>
        </Link>
      </aside>
      </div>
    </div>
  );
}

export default HomePage;
