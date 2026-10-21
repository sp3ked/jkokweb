import React, { useEffect, useState } from "react";
import "./pipeline.css";

const NO_LOG = [];
const SPACING = 13;
const HOP_FRAMES = 9;
const CHEER_FRAMES = 8;
const GROUND = 5;

const POSES = {
  idle: [" o ", "/|\\", "/ \\"],
  throw: [" o/", "/| ", "/ \\"],
  catch: ["\\o ", " |\\", "/ \\"],
  cheer: ["\\o/", " | ", "/ \\"],
};

const reducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// One worker per step; the work packet gets tossed down the line in an arc
function drawScene(steps, frame) {
  const width = steps.length * SPACING;
  const rows = Array.from({ length: GROUND + 2 }, () => Array(width).fill(" "));
  const put = (x, y, text) => {
    [...text].forEach((char, i) => {
      if (char !== " " && rows[y] && x + i >= 0 && x + i < width) rows[y][x + i] = char;
    });
  };
  const centerOf = (index) => index * SPACING + Math.floor(SPACING / 2);

  const hops = steps.length - 1;
  const step = frame % (hops * HOP_FRAMES + CHEER_FRAMES);
  const hop = Math.floor(step / HOP_FRAMES);
  const progress = (step % HOP_FRAMES) / (HOP_FRAMES - 1);
  const done = hop >= hops;

  steps.forEach((label, index) => {
    let pose = "idle";
    if (done && index === hops) pose = "cheer";
    else if (!done && index === hop && progress < 0.4) pose = "throw";
    else if (!done && index === hop + 1 && progress > 0.6) pose = "catch";
    POSES[pose].forEach((line, row) => put(centerOf(index) - 1, GROUND - 2 + row, line));
    put(centerOf(index) - Math.floor(label.length / 2), GROUND + 1, label);
  });

  if (done) {
    put(centerOf(hops) - 1, GROUND - 4, step % 2 ? "*✓*" : " ✓ ");
  } else {
    const fromX = centerOf(hop) + 2;
    const toX = centerOf(hop + 1) - 2;
    const x = Math.round(fromX + (toX - fromX) * progress);
    const y = GROUND - 2 - Math.round(Math.sin(Math.PI * progress) * 3);
    put(x, y, "■");
  }

  return rows.map((row) => row.join("").replace(/\s+$/, "")).join("\n");
}

function timestamp() {
  return new Date().toTimeString().slice(0, 8);
}

function AsciiPipeline({ steps, log = NO_LOG }) {
  const [frame, setFrame] = useState(0);
  const [logLines, setLogLines] = useState(() =>
    log.slice(0, 3).map((line) => `${timestamp()} ${line}`)
  );

  useEffect(() => {
    if (reducedMotion) return undefined;
    const pipeTimer = setInterval(() => setFrame((current) => current + 1), 110);
    if (log.length === 0) return () => clearInterval(pipeTimer);
    let nextLine = 3;
    const logTimer = setInterval(() => {
      const line = `${timestamp()} ${log[nextLine % log.length]}`;
      nextLine += 1;
      setLogLines((current) => [...current.slice(-2), line]);
    }, 1800);
    return () => {
      clearInterval(pipeTimer);
      clearInterval(logTimer);
    };
  }, [log]);

  return (
    <div className="ascii-pipeline" aria-label={steps.join(" to ")}>
      <pre aria-hidden="true">{drawScene(steps, frame)}</pre>
      {logLines.length > 0 && (
        <pre className="ascii-log" aria-hidden="true">
          {logLines.map((line) => `> ${line}`).join("\n")}
          <span className="ascii-cursor">█</span>
        </pre>
      )}
    </div>
  );
}

export default AsciiPipeline;
