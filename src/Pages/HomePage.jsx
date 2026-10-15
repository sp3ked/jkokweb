import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import profilePic from "../images/jkokpfp.png";
import "./home.css";

const pageLinks = [
  { type: "internal", to: "/projects", label: "projects" },
  { type: "internal", to: "/experience", label: "experience" },
  { type: "internal", to: "/resume", label: "resume" },
  { type: "internal", to: "/blog", label: "blog" },
  { type: "internal", to: "/books", label: "books" },
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
        <React.Fragment key={item.label}>
          {i > 0 && <span className="link-sep">.</span>}
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
        </React.Fragment>
      ))}
    </p>
  );
}

function HomePage() {
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
            <p className="home-sub home-setup-link">
              <Link to="/setup" className="text-link">
                [see my homelab]
              </Link>
            </p>
          </div>
        </div>

        <hr className="home-divider" />

        <div className="home-tldr-block">
          <p className="home-about">
            I build systems that build things:{" "}
            <strong>
              <span className="grad-text">
                agent orchestration, automation pipelines,
              </span>{" "}
              and fleets of machines that keep working
            </strong>{" "}
            after I log off.
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
          . <strong>Automate everything.</strong>
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

        <p className="home-about-more">
          Make sure to check out{" "}
          <Link to="/setup" className="text-link">
            [my homelab]
          </Link>{" "}
          if you have not already.
        </p>

        <hr className="home-divider" />

        <div className="home-recent">
          <span className="home-links-label">RECENT</span>
          <div className="home-recent-body">
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
            <p className="home-recent-role">
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
            <p className="home-recent-desc">
              Owned an AI ad pipeline end to end: parallelized per-avatar
              generation of TikTok/IG slideshows and videos…{" "}
              <Link to="/experience" className="text-link">
                see more
              </Link>
            </p>
          </div>
        </div>

        <hr className="home-divider" />

        <div className="home-links">
          <span className="home-links-label">PAGES</span>
          <LinkRow items={pageLinks} />
        </div>

        <div className="home-links">
          <span className="home-links-label">LINKS</span>
          <LinkRow items={socialLinks} />
        </div>

        <p className="home-contact">
          contact me at{" "}
          <a href="mailto:j@kokinda.com" className="home-contact-link">
            j @ kokinda . com
          </a>
        </p>
      </main>
    </div>
  );
}

export default HomePage;
