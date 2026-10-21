import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./projectDetails.css";
import creou1 from "../images/Creou/landing.png";
import creou2 from "../images/Creou/cloner.png";
import creou3 from "../images/Creou/studio.png";
import creou4 from "../images/Creou/editor.png";
import creou5 from "../images/Creou/editor2.png";

function Creou() {
  const [lightboxImage, setLightboxImage] = useState(null);

  const images = [creou1, creou2, creou3, creou4, creou5];

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
          <title>Creou - AI UGC Platform for Creators | Joey Kokinda</title>
          <meta
            name="description"
            content="Creou is an AI UGC platform for faceless creators. Generate TikTok-style slideshow decks, clone viral formats, schedule posts, and track save rate — one Next.js app on Supabase with a Python generation worker."
          />
          <link rel="canonical" href="https://jkokinda.com/projects/creou" />
          <meta name="robots" content="index, follow, noarchive" />
        </Helmet>

        <Link to="/projects" className="back-button">
          ← Back to Projects
        </Link>

        <div className="project-header">
          <h1>Creou - AI UGC Platform for Creators</h1>
          <div className="header-links">
            <a
              href="https://creou.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="live-link"
            >
              Live Site ↗
            </a>
          </div>
        </div>

        <div className="app-gallery">
          {images.map((src, idx) => (
            <div key={idx} className="gallery-item">
              <img
                src={src}
                alt={`Creou Screenshot ${idx + 1}`}
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
                Creou is an AI UGC platform for creators. You pick a niche and it turns out native, TikTok-style slideshow posts your audience actually saves and follows for — no camera, no face, no shoot. Generate style-locked slideshow decks, clone viral formats into editable blueprints, schedule posts onto a calendar, and track what wins.
              </p>
              <p>
                It's one Next.js app on a Supabase backend, plus a self-hosted Python generation worker that runs the AI pipeline off a Postgres job queue. This is my #1 focus — a real product, live in production, not a hackathon build.
              </p>
            </section>

            <section className="project-section">
              <h2>Product Surfaces</h2>
              <ul>
                <li>
                  <strong>Slideshow Studio:</strong> wizard-driven AI slideshow decks with style-locked visual DNA, a per-slide critic loop that grades and regenerates weak slides, a layered WYSIWYG editor, and ZIP export.
                </li>
                <li>
                  <strong>Cloner:</strong> paste a viral post or video. Slideshows are reconstructed into editable decks via text extraction and inpainting; videos are analyzed into per-clip blueprints and regenerated with your presenter and topic.
                </li>
                <li>
                  <strong>Avatars:</strong> AI personas with identity-locked reference images and video clip generation, so a consistent creator carries across every post.
                </li>
                <li>
                  <strong>Scheduler:</strong> connect social accounts, drag posts onto a calendar, and auto-post where platform APIs allow — with a prepare-and-notify fallback everywhere else.
                </li>
                <li>
                  <strong>Analytics:</strong> a publish-measure-learn loop where <strong>save rate</strong> is the north-star metric, feeding winners back into the wizard.
                </li>
              </ul>
            </section>

            <section className="project-section">
              <h2>How It Works</h2>
              <p>
                Generation is fully async. The app enqueues a job, the Python worker claims it atomically, streams progress into the <code>jobs</code>/<code>job_logs</code> tables, writes outputs to Supabase Storage, and the UI polls status. A deck starts as a plan from Claude, then each slide gets its background: Gemini for AI imagery, GPT-Image-2 for avatars and baked-in text, and pre-fetched stock photos for person-free body slides. A Claude critic loop grades hooks and body slides and regenerates the weak ones before compositing and export.
              </p>
              <p>
                Billing runs on two hard monthly meters (slideshows and video-seconds) across Free/Solo/Studio/Scale plans. The meter is checked pre-flight, consumed on success, and refunded on failure — idempotent by reference ID through a <code>user_meters</code> ledger and <code>consume_meter</code>/<code>refund_meter</code> RPCs. A per-deck regen cap enforced at the <code>/api/jobs</code> chokepoint stops one paid deck from becoming unlimited free image gen.
              </p>
            </section>

            <section className="project-section">
              <h2>Stack</h2>
              <p>
                Next.js 15 (App Router), React 19, TypeScript, Tailwind, Bun. Supabase for Postgres, Auth, and Storage with RLS everywhere. Stripe for subscriptions, credit packs, and the Customer Portal. Anthropic Claude for planning and prompts; GPT-Image-2 and Gemini for image generation; Gemini for video analysis. A Python 3.12 worker polls a Postgres job queue and runs the generation engines. Hosted on Vercel with the worker self-hosted for Chromium and ffmpeg.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Creou;
