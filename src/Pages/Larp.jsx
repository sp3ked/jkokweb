import React, { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Gallery from "./Gallery";
import "./gallery.css";
import "./pipeline.css";

const F22Flyby = lazy(() => import("./F22Flyby"));

// Every larp shot plus every homelab shot from /setup
const larpContext = require.context("../images/Larp", false, /\.webp$/);
const homelabContext = require.context("../images/Setup", false, /\.jpg$/);
const toPhotos = (context) =>
  context
    .keys()
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((key) => ({ src: context(key) }));
const photos = [...toPhotos(larpContext), ...toPhotos(homelabContext)];

function Larp() {
  return (
    <div className="gallery-page">
      <Helmet>
        <title>Larp Corner — Joey Kokinda</title>
        <meta name="description" content="Laptops, terminals, and setups in the wild." />
        <link rel="canonical" href="https://jkok.dev/larp" />
      </Helmet>

      <Suspense fallback={null}>
        <F22Flyby />
      </Suspense>

      <Link to="/" className="back-btn">← Home</Link>

      <main className="gallery-main glass">
        <h1>Larp Corner</h1>
        <pre className="ascii-banner" aria-label="there is no limit to the larp">{`╔══════════════════════════════════╗
║  there is no limit to the larp.  ║
╚══════════════════════════════════╝`}</pre>
        <Gallery photos={photos} />
      </main>
    </div>
  );
}

export default Larp;
