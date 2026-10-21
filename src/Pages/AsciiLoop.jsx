import React, { useEffect, useState } from "react";
import "./pipeline.css";

// Closed loop: events go in, an eval gate sends failures back to the agents,
// and everything shipped gets measured and fed back into the next plan.
const ARROW = " ───> ";
const TICK_MS = 90;
const DWELL_TICKS = 4;
const FAIL_RATE = 0.3;
const MAX_PACKETS = 5;
const AUTO_SPAWN_EVERY = 45;

const reducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function buildGraph() {
  const topTokens = [
    { id: "event", text: "event" },
    { id: "plan", text: "[ plan ]" },
    { id: "agents", text: "[ agents ]" },
    { id: "eval", text: "< eval >" },
    { id: "ship", text: "[ ship ]" },
  ];
  const nodes = {};
  let top = "";
  topTokens.forEach((token, index) => {
    if (index > 0) top += ARROW;
    nodes[token.id] = { row: 0, start: top.length, end: top.length + token.text.length - 1, text: token.text };
    top += token.text;
  });
  const center = (id) => Math.floor((nodes[id].start + nodes[id].end) / 2);
  const width = top.length;
  const rows = Array.from({ length: 5 }, () => Array(width).fill(" "));
  const put = (row, col, text) => [...text].forEach((char, i) => (rows[row][col + i] = char));
  put(0, 0, top);

  const place = (id, text, centerCol) => {
    const start = Math.max(0, Math.min(width - text.length, centerCol - Math.floor(text.length / 2)));
    nodes[id] = { row: 4, start, end: start + text.length - 1, text };
    put(4, start, text);
  };
  place("learn", "[ learn ]", center("plan"));
  place("measure", "[ measure ]", center("ship"));
  place("diagnose", "[ diagnose ]", Math.floor((nodes.learn.end + nodes.measure.start) / 2));

  const fill = (row, from, to, char) => {
    for (let col = from; col <= to; col++) rows[row][col] = char;
  };
  fill(4, nodes.learn.end + 2, nodes.diagnose.start - 2, "─");
  rows[4][nodes.learn.end + 2] = "<";
  fill(4, nodes.diagnose.end + 2, nodes.measure.start - 2, "─");
  rows[4][nodes.diagnose.end + 2] = "<";

  const planCol = center("plan");
  const shipCol = center("ship");
  const agentsCol = center("agents");
  const evalCol = center("eval");
  rows[1][planCol] = "^";
  rows[2][planCol] = "│";
  rows[3][planCol] = "│";
  rows[1][shipCol] = "│";
  rows[2][shipCol] = "│";
  rows[3][shipCol] = "v";
  rows[1][agentsCol] = "^";
  rows[1][evalCol] = "│";
  rows[2][agentsCol] = "└";
  rows[2][evalCol] = "┘";
  fill(2, agentsCol + 1, evalCol - 1, "─");
  put(1, agentsCol + 3, "fail, retry");

  const line = (points) => {
    const cells = [];
    for (let i = 0; i < points.length - 1; i++) {
      const [rowA, colA] = points[i];
      const [rowB, colB] = points[i + 1];
      const steps = Math.max(Math.abs(rowB - rowA), Math.abs(colB - colA));
      for (let s = i === 0 ? 0 : 1; s <= steps; s++) {
        cells.push([rowA + Math.sign(rowB - rowA) * s, colA + Math.sign(colB - colA) * s]);
      }
    }
    return cells;
  };
  const across = (from, to) => line([[0, nodes[from].end + 1], [0, nodes[to].start - 1]]);
  const edges = {
    event: [{ to: "plan", cells: across("event", "plan") }],
    plan: [{ to: "agents", cells: across("plan", "agents") }],
    agents: [{ to: "eval", cells: across("agents", "eval") }],
    eval: [
      { to: "ship", cells: across("eval", "ship") },
      { to: "agents", fail: true, cells: line([[1, evalCol], [2, evalCol], [2, agentsCol], [1, agentsCol]]) },
    ],
    ship: [{ to: "measure", cells: line([[1, shipCol], [3, shipCol]]) }],
    measure: [{ to: "diagnose", cells: line([[4, nodes.measure.start - 1], [4, nodes.diagnose.end + 1]]) }],
    diagnose: [{ to: "learn", cells: line([[4, nodes.diagnose.start - 1], [4, nodes.learn.end + 1]]) }],
    learn: [{ to: "plan", cells: line([[3, planCol], [1, planCol]]) }],
  };

  return { width, base: rows.map((row) => row.join("")), nodes, edges };
}

const GRAPH = buildGraph();

function nextEdge(nodeId, random) {
  const options = GRAPH.edges[nodeId];
  if (options.length === 1) return options[0];
  return random() < FAIL_RATE ? options.find((edge) => edge.fail) : options.find((edge) => !edge.fail);
}

function createLoop() {
  return {
    tick: 0,
    packets: [
      { node: "agents", dwell: 1 },
      { node: "measure", dwell: 2 },
    ],
  };
}

function stepLoop(loop, random = Math.random) {
  const packets = loop.packets.map((packet) => {
    if (packet.edge) {
      const step = packet.step + 1;
      if (step < packet.edge.cells.length) return { ...packet, step };
      return { node: packet.edge.to, dwell: DWELL_TICKS };
    }
    if (packet.dwell > 0) return { ...packet, dwell: packet.dwell - 1 };
    return { edge: nextEdge(packet.node, random), step: 0 };
  });
  const tick = loop.tick + 1;
  if (tick % AUTO_SPAWN_EVERY === 0 && packets.length < 3) packets.push({ node: "event", dwell: DWELL_TICKS });
  return { tick, packets };
}

function fireEvent(loop) {
  const packets = [...loop.packets, { node: "event", dwell: DWELL_TICKS }];
  return { ...loop, packets: packets.slice(-MAX_PACKETS) };
}

function drawLoop(loop) {
  const rows = GRAPH.base.map((row) => [...row]);
  loop.packets.forEach((packet) => {
    if (packet.edge) {
      const [row, col] = packet.edge.cells[packet.step];
      rows[row][col] = "●";
      return;
    }
    const node = GRAPH.nodes[packet.node];
    [...node.text.toUpperCase()].forEach((char, i) => (rows[node.row][node.start + i] = char));
  });
  return rows.map((row) => row.join("")).join("\n");
}

function AsciiLoop() {
  const [loop, setLoop] = useState(createLoop);

  useEffect(() => {
    if (reducedMotion) return undefined;
    const timer = setInterval(() => setLoop((current) => stepLoop(current)), TICK_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <button
      type="button"
      className="ascii-pipeline ascii-fit ascii-factory"
      onClick={() => setLoop(fireEvent)}
      aria-label="Fire a new event into the automation loop"
      title="click to fire an event"
    >
      <pre aria-hidden="true" style={{ fontSize: `calc(100cqw / ${GRAPH.width * 0.6})` }}>
        {drawLoop(loop)}
      </pre>
    </button>
  );
}

export default AsciiLoop;
