import React, { useEffect, useState } from "react";
import "./pipeline.css";

const PIPE_LENGTH = 4;
const NO_LOG = [];

const reducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Box-drawn nodes joined by pipes, a packet travels each pipe offset from the last
function drawDiagram(steps, frame) {
  const top = [];
  const middle = [];
  const bottom = [];
  steps.forEach((step, index) => {
    const width = step.length + 2;
    if (index > 0) {
      const packetAt = (frame + index * 2) % PIPE_LENGTH;
      const pipe = Array.from({ length: PIPE_LENGTH }, (_, i) => (i === packetAt ? "●" : "─")).join("");
      top.push(" ".repeat(PIPE_LENGTH));
      middle.push(pipe);
      bottom.push(" ".repeat(PIPE_LENGTH));
    }
    top.push(`┌${"─".repeat(width)}┐`);
    middle.push(`│ ${step} │`);
    bottom.push(`└${"─".repeat(width)}┘`);
  });
  return [top.join(""), middle.join(""), bottom.join("")].join("\n");
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
    const pipeTimer = setInterval(() => setFrame((current) => current + 1), 220);
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
      <pre aria-hidden="true">{drawDiagram(steps, frame)}</pre>
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
