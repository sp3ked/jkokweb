import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./projectDetails.css";
import cosmosImage2 from "../images/cosmos2.png";
import cosmosImage3 from "../images/cosmos3.png";
import cosmosImage5 from "../images/cosmos5.png";
import cosmosImage6 from "../images/cosmos6.png";
import cosmosImage7 from "../images/cosmos7.png";

function Cosmos() {
  // Update images array to include cosmosLogo as first image
  const images = [
    cosmosImage7,
    cosmosImage2,
    cosmosImage3,
    cosmosImage5,
    cosmosImage6,
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-details-container">
      <Link to="/" className="back-button">
        ← Back to Projects
      </Link>

      <div className="project-header">
        <h1>CosmosPool - DeFi Liquidity Protocol</h1>
        <div className="header-links">
          <a
            href="https://www.cosmospool.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            className="live-link"
          >
            Website ↗
          </a>
          <a
            href="https://github.com/sp3ked/CosmosPoolDenver"
            target="_blank"
            rel="noopener noreferrer"
            className="live-link github-link"
          >
            GitHub ↗
          </a>
          <a
            href="https://devfolio.co/projects/cosmospool-c15c"
            target="_blank"
            rel="noopener noreferrer"
            className="live-link"
          >
            Devfolio ↗
          </a>
        </div>
      </div>

      <div className="app-gallery">
        {images.map((img, idx) => (
          <div key={idx} className="gallery-item cosmos-gallery-item">
            <img
              src={img}
              alt={`CosmosPool Platform ${idx + 1}`}
              style={{
                objectFit: "contain",
                padding: "20px 40px 20px 20px" /* Matching Meta styling */,
                background: "rgba(0, 0, 0, 0.8)",
              }}
            />
          </div>
        ))}
      </div>

      <div className="project-content">
        <div className="projectDetailsText">
          <section className="project-section">
            <h2>Overview</h2>
            <p>
              CosmosPool is a decentralized liquidity provision system designed
              to simplify the process of providing liquidity to Concentrated
              Liquidity Market Makers (CLMMs) like Uniswap V3. Traditional CLMMs
              require users to deposit both tokens in a trading pair within a
              specific price range, which can be complex and inaccessible for
              many users.
            </p>
            <p>
              CosmosPool solves this by enabling single-sided deposits,
              automatically matching users with complementary deposits, and
              managing liquidity provision on their behalf. This makes DeFi
              participation more accessible to everyday users.
            </p>
            <p>
              <strong>Hackathon Project:</strong> CosmosPool was built during
              the ETHDenver 2025 hackathon, where it showcased innovative
              approaches to DeFi liquidity provision challenges.
            </p>
          </section>

          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/1_3v5vFmx5g"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <section className="project-section">
            <h2>The Problem It Solves</h2>
            <p>
              CosmosPool is designed to solve a critical problem in the DeFi
              ecosystem: the complexity and capital inefficiency of providing
              liquidity to Concentrated Liquidity Market Makers (CLMMs).
              Traditional CLMMs require users to:
            </p>
            <ul>
              <li>Hold both tokens in a trading pair</li>
              <li>Understand and select optimal price ranges</li>
              <li>
                Manage positions when prices move outside their selected range
              </li>
            </ul>
            <p>
              These requirements create significant barriers to entry, limiting
              participation to experienced DeFi users and reducing overall
              market liquidity.
            </p>
          </section>

          <section className="project-section">
            <h2>Key Features</h2>
            <ul>
              <li>
                <strong>Single-sided Deposits:</strong> Users can deposit just
                one token (e.g., WETH or USDC)
              </li>
              <li>
                <strong>Automated Matching:</strong> The system pairs
                complementary deposits
              </li>
              <li>
                <strong>Optimal Liquidity Provision:</strong> Leverages Uniswap
                V3's concentrated liquidity formula
              </li>
              <li>
                <strong>Dynamic Reward Distribution:</strong> Based on deposit
                type (60/40 favoring volatile tokens)
              </li>
              <li>
                <strong>Unichain Integration:</strong> Built on a blockchain
                optimized for DeFi performance
              </li>
              <li>
                <strong>User-friendly Interface:</strong> Simplifies complex
                DeFi interactions
              </li>
            </ul>
          </section>

          <section className="project-section">
            <h2>Technical Implementation</h2>
            <h3>Smart Contracts</h3>
            <ul>
              <li>
                <strong>LiquidityManager.sol:</strong> Handles deposits,
                matching, and withdrawals
              </li>
              <li>
                <strong>MockNonFungibleToken.sol:</strong> Simulates Uniswap's
                position manager for testing
              </li>
            </ul>

            <h3>Technical Stack</h3>
            <ul>
              <li>
                <strong>Smart Contracts:</strong> Solidity, Hardhat
              </li>
              <li>
                <strong>Frontend:</strong> Web3.js, Ethers.js
              </li>
              <li>
                <strong>Blockchain:</strong> Unichain (optimized for DeFi)
              </li>
              <li>
                <strong>Integrations:</strong> Uniswap V3, Coin Gecko API
              </li>
              <li>
                <strong>Testing:</strong> Hardhat, Web3.js mocking
              </li>
            </ul>
          </section>

          <section className="project-section">
            <h2>How It Works</h2>
            <p>
              1. <strong>Deposit:</strong> Users deposit a single token (WETH or
              USDC) into the LiquidityManager contract
            </p>
            <p>
              2. <strong>Matching:</strong> The system automatically matches
              users with complementary deposits
            </p>
            <p>
              3. <strong>Position Management:</strong> Matched tokens are
              deposited into a Uniswap V3 pool with optimized price ranges
            </p>
            <p>
              4. <strong>Rewards:</strong> Trading fees and rewards are
              distributed based on a fixed ratio (60/40)
            </p>
            <p>
              5. <strong>Withdrawal:</strong> Users can withdraw their original
              deposit plus earned rewards at any time
            </p>
          </section>

          <section className="project-section">
            <h2>Future Development</h2>
            <ul>
              <li>Customizable price ranges for advanced users</li>
              <li>Multi-token support beyond WETH/USDC pairs</li>
              <li>Integration with additional DEXs beyond Uniswap</li>
              <li>Governance token for protocol decisions</li>
              <li>Mobile app for easier access</li>
            </ul>
          </section>

          <section className="project-section">
            <h2>Development Notes</h2>
            <p>
              For this project I did all of the frontend. CosmosPool was built
              during the ETHDenver 2025 hackathon, showcasing what's possible in
              DeFi innovation. The current implementation uses a mock position
              manager for testing and includes hardcoded price ranges (±10% of
              the current price). Despite these limitations, the project
              demonstrates a viable solution to a significant problem in DeFi
              liquidity provision.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Cosmos;
