import React, { useEffect, useRef, useState } from "react";
import "./pipeline.css";

// An idea rides the belt as a rock and comes out the other end as a product
const WIDTH = 80;
const LEFT_PAD = 5;
const RIGHT_PAD = 7;
const STAGES = ["o", "<>", "{}", "{#}", "[#]", "[#]>"];
// The actual loop: scope it, fan it out to agents, prove it works, ship it, hand it to a cron
const MACHINES = [
  { label: "spec", verb: "scoped into tasks" },
  { label: "agents", verb: "built by 3 agents in parallel", parallel: true },
  { label: "test", verb: "passing" },
  { label: "deploy", verb: "live" },
  { label: "automate", verb: "runs itself now" },
];
const SPINNER = ["|", "/", "-", "\\"];
const SPAWN_EVERY = 12;
const TICK_MS = 140;

const reducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function layoutMachines() {
  const machineWidths = MACHINES.map((machine) => machine.label.length + 2);
  const usable = WIDTH - LEFT_PAD - RIGHT_PAD;
  const gap = Math.floor((usable - machineWidths.reduce((a, b) => a + b, 0)) / (MACHINES.length + 1));
  let cursor = LEFT_PAD + gap;
  return MACHINES.map((machine, index) => {
    const placed = { ...machine, start: cursor, end: cursor + machineWidths[index] - 1 };
    cursor = placed.end + 1 + gap;
    return placed;
  });
}

const PLACED = layoutMachines();

function createFactory() {
  return { tick: 0, nextId: 5, shipped: 0, items: [{ id: 1, x: 60 }, { id: 2, x: 42 }, { id: 3, x: 24 }, { id: 4, x: 6 }], log: [] };
}

function stepFactory(factory) {
  const log = [...factory.log];
  let shipped = factory.shipped;
  const items = [];
  factory.items.forEach((item) => {
    const x = item.x + 1;
    PLACED.forEach((machine) => {
      if (x === machine.end + 1) log.push(`${machine.label}: idea #${item.id} ${machine.verb}`);
    });
    if (x >= WIDTH) {
      shipped += 1;
      log.push(`shipped: idea #${item.id} is a product`);
    } else {
      items.push({ ...item, x });
    }
  });
  let nextId = factory.nextId;
  if ((factory.tick + 1) % SPAWN_EVERY === 0) items.push({ id: nextId++, x: 0 });
  return { tick: factory.tick + 1, nextId, shipped, items, log: log.slice(-3) };
}

function dropIdea(factory) {
  if (factory.items.some((item) => item.x < 2)) return factory;
  return { ...factory, nextId: factory.nextId + 1, items: [...factory.items, { id: factory.nextId, x: 0 }] };
}

const glyphAt = (x) => STAGES[PLACED.filter((machine) => x > machine.end).length];
const isInside = (x, machine) => x + glyphAt(x).length > machine.start && x <= machine.end;

function drawFactory(factory) {
  const rows = Array.from({ length: 5 }, () => Array(WIDTH).fill(" "));
  const put = (row, x, text) => [...text].forEach((char, i) => {
    if (x + i >= 0 && x + i < WIDTH) rows[row][x + i] = char;
  });

  // Belt on row 2 with rollers under it, both drift with the tick
  for (let x = 0; x < WIDTH; x++) {
    rows[2][x] = (x - factory.tick) % 4 === 0 ? "─" : "═";
    rows[3][x] = (x - factory.tick) % 6 === 0 ? "o" : " ";
  }

  PLACED.forEach((machine) => {
    const inner = machine.end - machine.start - 1;
    const busy = factory.items.some((item) => isInside(item.x, machine));
    put(0, machine.start, `┌${machine.label}┐`);
    const spin = SPINNER[factory.tick % SPINNER.length];
    const middle = !busy
      ? " ".repeat(inner)
      : machine.parallel
        ? ` ${[0, 1, 2].map((lane) => SPINNER[(factory.tick + lane) % SPINNER.length]).join(" ")}`.padEnd(inner, " ")
        : ` ${spin}`.padEnd(inner - 1, " ") + "*";
    put(1, machine.start, `│${middle}│`);
    put(2, machine.start, `╧`);
    put(2, machine.end, `╧`);
  });

  factory.items.forEach((item) => {
    if (!PLACED.some((machine) => isInside(item.x, machine))) put(1, item.x, glyphAt(item.x));
  });

  put(4, 0, "idea");
  const shippedLabel = `shipped ${factory.shipped}`;
  put(4, WIDTH - shippedLabel.length, shippedLabel);
  return rows.map((row) => row.join("")).join("\n");
}

function AsciiFactory() {
  const [factory, setFactory] = useState(createFactory);
  const timer = useRef(null);

  useEffect(() => {
    if (reducedMotion) return undefined;
    timer.current = setInterval(() => setFactory(stepFactory), TICK_MS);
    return () => clearInterval(timer.current);
  }, []);

  return (
    <div className="ascii-pipeline ascii-fit">
      <pre aria-hidden="true" style={{ fontSize: `calc(100cqw / ${WIDTH * 0.6})` }}>
        {drawFactory(factory)}
      </pre>
      <div className="ascii-log-row">
        <pre className="ascii-log" aria-live="off">
          {factory.log.map((line) => `> ${line}`).join("\n")}
          <span className="ascii-cursor">█</span>
        </pre>
        <button type="button" className="ascii-button" onClick={() => setFactory(dropIdea)}>
          [ drop an idea ]
        </button>
      </div>
    </div>
  );
}

export default AsciiFactory;
