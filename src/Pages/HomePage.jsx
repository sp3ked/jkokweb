import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import profilePic from "../images/jkokpfp.png";
import AsciiPipeline from "./AsciiPipeline";
import mbcWin from "../images/BoilerBlockchain/mbc-polymarket-win.webp";
import teachingClass from "../images/BoilerBlockchain/teaching-class.webp";
import boilerCrew from "../images/BoilerBlockchain/boiler-blockchain-sonic.webp";
import hackathonWinners from "../images/BoilerBlockchain/mbc-hackathon-winners.webp";
import tolyBreakpoint from "../images/BoilerBlockchain/toly-breakpoint.webp";
import dogecon from "../images/BoilerBlockchain/dogecon.webp";
import acrossCampuses from "../images/BoilerBlockchain/solana-across-campuses.webp";
import larpPreview from "../images/Larp/larp6.webp";
import homelabPhoto from "../images/Setup/full-setup.jpg";
import moonshotPitch from "../images/moonshot-pyras.webp";
import "./home.css";

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

// What the fleet is up to, rendered as a rolling log under the pipeline
const automationLog = [
  "phonefarm: 12 devices online, warming feeds",
  "creou: queued 4 slideshows per avatar",
  "agents: orchestrator handed off 6 tasks",
  "pyras: btc + xmr nodes synced",
  "pipeline: render -> caption -> publish ok",
  "homelab: nightly backups complete",
  "veridex: proof verified, payout released",
  "ward: repair job dispatched to a real human",
];

const boilerTiles = [
  { src: teachingClass, title: "teaching classes", tags: "workshops . new members" },
  { src: boilerCrew, title: "the crew", tags: "board . core dev" },
  { src: hackathonWinners, title: "mbc '25 winners", tags: "hackathon . stage" },
  { src: tolyBreakpoint, title: "breakpoint '25", tags: "solana . toly" },
  { src: acrossCampuses, title: "club sessions", tags: "teaching . solana" },
  { src: dogecon, title: "dogecon '25", tags: "events . conferences" },
];

function PhotoTile({ tile }) {
  return (
    <Link to="/boilerblockchain" className="home-tile">
      <img src={tile.src} alt={tile.title} loading="lazy" />
      <strong>{tile.title}</strong>
      <span>{tile.tags}</span>
    </Link>
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

      <div className="home-layout">
      <aside className="home-panel home-panel-left glass">
        <h2 className="home-panel-title">BOILER BLOCKCHAIN</h2>
        <div className="home-tile-grid">
          {boilerTiles.map((tile) => (
            <PhotoTile key={tile.title} tile={tile} />
          ))}
          <Link to="/boilerblockchain" className="home-tile home-tile-more">
            all the photos &rarr;
          </Link>
        </div>
        <p className="home-panel-note">
          core dev + board member at{" "}
          <a
            href="https://www.boilerblockchain.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            boilerblockchain.org
          </a>
          . teaching the new kids, running events, shipping onchain.
        </p>
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
          <AsciiPipeline
            steps={["idea", "agents", "pipeline", "fleet", "shipped"]}
            log={automationLog}
          />
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
          I pitched{" "}
          <a
            href="https://pyras.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Pyras
          </a>{" "}
          on stage at Purdue's Moonshot Pitch Challenge: two minutes, a panel
          of judges, and a GPU marketplace idea.
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

        <div className="home-bb">
          <span className="home-links-label">ABOUT ME</span>
          <p className="home-about-more">
            Off the keyboard, I'm usually on a plane to a hackathon or
            conference with Boiler Blockchain, teaching a club session to new
            members, or working through{" "}
            <Link to="/books" className="text-link">
              my reading list
            </Link>
            . I like being in rooms with people who build, and I like it even
            more when someone I taught ships their first project.
          </p>
        </div>

        <hr className="home-divider" />

        <div className="home-bb">
          <span className="home-links-label">BOILER BLOCKCHAIN</span>
          <p className="home-about-more">
            I'm a <strong>core dev and board member</strong> at{" "}
            <Link to="/boilerblockchain" className="text-link">
              Boiler Blockchain
            </Link>
            , Purdue's blockchain club. I love teaching the new kids how this
            stuff actually works, and I help organize and show up to events
            across the space (MBC, Breakpoint, ETHDenver, DogeCon).
          </p>
          <p className="home-about-more">
            <Link to="/boilerblockchain" className="text-link">
              [see all the photos]
            </Link>
          </p>
        </div>

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

      <aside className="home-panel home-panel-right">
        <figure className="home-feature glass">
          <img src={mbcWin} alt="Joey holding the $3,500 Polymarket bounty check at MBC '25" />
          <figcaption>
            <strong>1ST PLACE</strong>
            <span>polymarket bounty . mbc '25 . $3,500</span>
          </figcaption>
        </figure>
        <Link to="/setup" className="home-feature home-feature-link glass">
          <img src={homelabPhoto} alt="Joey's homelab" loading="lazy" />
          <figcaption>
            <strong>HOMELAB</strong>
            <span>where everything gets built &rarr;</span>
          </figcaption>
        </Link>
        <figure className="home-feature glass">
          <img src={moonshotPitch} alt="Joey pitching Pyras at Purdue's Moonshot Pitch Challenge" loading="lazy" className="home-feature-wide" />
          <figcaption>
            <strong>MOONSHOT PITCH</strong>
            <span>pyras . purdue moonshot pitch challenge</span>
          </figcaption>
        </figure>
        <Link to="/larp" className="home-feature home-feature-link glass">
          <img src={larpPreview} alt="Laptop and monitors setup" loading="lazy" />
          <figcaption>
            <strong>LARP CORNER</strong>
            <span>terminals in the wild &rarr;</span>
          </figcaption>
        </Link>
      </aside>
      </div>
    </div>
  );
}

export default HomePage;
