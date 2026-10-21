import React, { useEffect, useState } from "react";
import "./pipeline.css";

// A tiny chain: the newest block grinds nonces until its hash starts with 00, then seals
const VISIBLE_BLOCKS = 4;
const SEALED_HOLD = 8;
const TICK_MS = 120;

const reducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const randomHex = (length) =>
  Array.from({ length }, () => Math.floor(Math.random() * 16).toString(16)).join("");

const newMiningBlock = (number) => ({
  number,
  hash: randomHex(6),
  nonce: 0,
  workLeft: 14 + Math.floor(Math.random() * 14),
  sealedFor: 0,
});

function createChain() {
  const sealed = [1, 2, 3].map((number) => ({ number, hash: `00${randomHex(4)}` }));
  return { sealed, mining: newMiningBlock(4) };
}

function stepChain(chain) {
  const { mining } = chain;
  if (mining.sealedFor >= SEALED_HOLD) {
    const sealed = [...chain.sealed, { number: mining.number, hash: mining.hash }].slice(-(VISIBLE_BLOCKS - 1));
    return { sealed, mining: newMiningBlock(mining.number + 1) };
  }
  if (mining.sealedFor > 0) return { ...chain, mining: { ...mining, sealedFor: mining.sealedFor + 1 } };
  const nonce = mining.nonce + 1 + Math.floor(Math.random() * 400);
  if (mining.workLeft <= 1) {
    return { ...chain, mining: { ...mining, nonce, hash: `00${randomHex(4)}`, sealedFor: 1 } };
  }
  return { ...chain, mining: { ...mining, nonce, hash: randomHex(6), workLeft: mining.workLeft - 1 } };
}

function drawChain(chain) {
  const blocks = [...chain.sealed, chain.mining];
  const tag = (number) => `#${String(number).padStart(4, "0")}`;
  const join = (parts, link) => parts.join(link);
  const lines = [
    join(blocks.map(() => "┌────────┐"), "   "),
    join(blocks.map((block) => `│ ${tag(block.number).padEnd(6)} │`), "──>"),
    join(blocks.map((block) => `│ ${block.hash} │`), "   "),
    join(blocks.map(() => "└────────┘"), "   "),
  ];
  const status = chain.mining.sealedFor > 0 ? "sealed" : `nonce ${chain.mining.nonce}`;
  const offset = (blocks.length - 1) * 13;
  lines.push(" ".repeat(offset) + status);
  return lines.join("\n");
}

function AsciiChain() {
  const [chain, setChain] = useState(createChain);

  useEffect(() => {
    if (reducedMotion) return undefined;
    const timer = setInterval(() => setChain(stepChain), TICK_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="ascii-pipeline">
      <pre aria-hidden="true">{drawChain(chain)}</pre>
    </div>
  );
}

export default AsciiChain;
