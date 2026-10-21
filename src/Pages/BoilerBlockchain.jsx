import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Gallery from "./Gallery";
import AsciiChain from "./AsciiChain";
import mbcWin from "../images/BoilerBlockchain/mbc-polymarket-win.webp";
import teachingClass from "../images/BoilerBlockchain/teaching-class.webp";
import sonic from "../images/BoilerBlockchain/boiler-blockchain-sonic.webp";
import acrossCampuses from "../images/BoilerBlockchain/solana-across-campuses.webp";
import hackathonWinners from "../images/BoilerBlockchain/mbc-hackathon-winners.webp";
import mbcAfterparty from "../images/BoilerBlockchain/mbc-afterparty.webp";
import hackingSession from "../images/BoilerBlockchain/hacking-session.webp";
import conferenceSelfie from "../images/BoilerBlockchain/conference-selfie.webp";
import dogecon from "../images/BoilerBlockchain/dogecon.webp";
import tolyBreakpoint from "../images/BoilerBlockchain/toly-breakpoint.webp";
import breakpoint from "../images/BoilerBlockchain/breakpoint.webp";
import ethdenver from "../images/BoilerBlockchain/ethdenver-2025.webp";
import mbcCrew from "../images/BoilerBlockchain/mbc-crew.webp";
import mbcChecks from "../images/BoilerBlockchain/mbc-bounty-checks.webp";
import acrossCampusesGroup from "../images/BoilerBlockchain/solana-across-campuses-group.webp";
import acrossCampusesRound2 from "../images/BoilerBlockchain/solana-across-campuses-round-2.webp";
import "./gallery.css";

const photos = [
  { src: mbcCrew, caption: "the whole crew at MBC '25" },
  { src: teachingClass, caption: "teaching a Boiler Blockchain class" },
  { src: mbcChecks, caption: "bounty checks at MBC '25" },
  { src: acrossCampusesGroup, caption: "Solana Across Campuses @ Purdue" },
  { src: acrossCampusesRound2, caption: "Solana Across Campuses, round 2" },
  { src: sonic, caption: "club shirts drop" },
  { src: mbcWin, caption: "1st, Polymarket bounty @ MBC '25 with Jaeger" },
  { src: hackathonWinners, caption: "hackathon winners on stage, MBC '25" },
  { src: acrossCampuses, caption: "packed room for a club session" },
  { src: hackingSession, caption: "late night build session" },
  { src: mbcAfterparty, caption: "MBC '25" },
  { src: tolyBreakpoint, caption: "with Toly at Breakpoint 2025" },
  { src: breakpoint, caption: "Breakpoint 2025" },
  { src: dogecon, caption: "DogeCon 2025" },
  { src: conferenceSelfie, caption: "on the conference circuit" },
  { src: ethdenver, caption: "ETHDenver 2025" },
];

function BoilerBlockchain() {
  return (
    <div className="gallery-page">
      <Helmet>
        <title>Boiler Blockchain — Joey Kokinda</title>
        <meta
          name="description"
          content="Joey Kokinda is a core dev and board member of Boiler Blockchain, Purdue's blockchain club."
        />
        <link rel="canonical" href="https://jkok.dev/boilerblockchain" />
      </Helmet>

      <Link to="/" className="back-btn">← Home</Link>

      <main className="gallery-main glass">
        <h1>Boiler Blockchain</h1>
        <p>
          Core dev and board member at{" "}
          <a href="https://www.boilerblockchain.org/" target="_blank" rel="noopener noreferrer" className="text-link">
            Boiler Blockchain
          </a>
          , Purdue's blockchain club. I help bring in new members, land
          funding from sponsors, and organize what we do.
        </p>
        <p>
          Places we've been: MBC 2025 (1st in the Polymarket bounty with{" "}
          <Link to="/projects/jaeger" className="text-link">Jaeger</Link>),
          Solana Breakpoint, and ETHDenver 2025 and 2026.
        </p>

        <AsciiChain />

        <Gallery photos={photos} />
      </main>
    </div>
  );
}

export default BoilerBlockchain;
