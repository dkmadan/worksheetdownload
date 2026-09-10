// ─────────────────────────────────────────────────────────────────────────────
// Telling-time generator + shared analog-clock geometry (used by the React
// ClockFace and the PDF builder).
// ─────────────────────────────────────────────────────────────────────────────

import { makeRng, randInt } from "./prng";

export type TimeStep = "hour" | "half" | "quarter" | "five" | "one";
export type ClockMode = "read" | "draw" | "match";

export const TIME_STEPS: { id: TimeStep; label: string; minutes: number }[] = [
  { id: "hour", label: "O'clock", minutes: 60 },
  { id: "half", label: "Half hour", minutes: 30 },
  { id: "quarter", label: "Quarter hour", minutes: 15 },
  { id: "five", label: "5 minutes", minutes: 5 },
  { id: "one", label: "1 minute", minutes: 1 },
];

export const CLOCK_MODES: { id: ClockMode; label: string }[] = [
  { id: "read", label: "Read the clock" },
  { id: "draw", label: "Draw the hands" },
  { id: "match", label: "Mixed" },
];

export interface ClockConfig {
  mode: ClockMode;
  step: TimeStep;
  count: number;
  columns: number;
}

export const DEFAULT_CLOCK_CONFIG: ClockConfig = {
  mode: "read",
  step: "half",
  count: 12,
  columns: 3,
};

export interface ClockTime {
  h: number; // 1..12
  m: number; // 0..59
  /** "read" → student writes the time; "draw" → student draws the hands */
  task: "read" | "draw";
}

export function clampClockConfig(c: ClockConfig): ClockConfig {
  return {
    ...c,
    count: Math.max(2, Math.min(c.count, 40)),
    columns: Math.max(2, Math.min(c.columns, 4)),
  };
}

export function generateTimes(config: ClockConfig, seed: number): ClockTime[] {
  const c = clampClockConfig(config);
  const rng = makeRng(seed);
  const stepMin = TIME_STEPS.find((s) => s.id === c.step)!.minutes;
  const slots = Math.floor(60 / stepMin);

  const out: ClockTime[] = [];
  const seen = new Set<string>();
  let guard = 0;
  while (out.length < c.count && guard < c.count * 40) {
    guard++;
    const h = randInt(rng, 1, 12);
    const m = (randInt(rng, 0, slots - 1) * stepMin) % 60;
    const key = `${h}:${m}`;
    if (seen.has(key) && out.length < slots * 12) continue;
    seen.add(key);
    const task = c.mode === "match" ? (rng() < 0.5 ? "read" : "draw") : c.mode;
    out.push({ h, m, task });
  }
  while (out.length < c.count) {
    const h = randInt(rng, 1, 12);
    const m = (randInt(rng, 0, slots - 1) * stepMin) % 60;
    out.push({ h, m, task: c.mode === "match" ? "read" : c.mode });
  }
  return out;
}

export function fmtDigital(t: { h: number; m: number }): string {
  return `${t.h}:${t.m.toString().padStart(2, "0")}`;
}

/** hand angles in degrees clockwise from 12 o'clock */
export function handAngles(t: { h: number; m: number }): { hour: number; minute: number } {
  const minute = t.m * 6; // 360/60
  const hour = ((t.h % 12) + t.m / 60) * 30; // 360/12
  return { hour, minute };
}

/** point on a clock face of the given radius, angle in degrees from 12.
 *  Coordinates are rounded to 3 dp so the SVG that React renders on the server
 *  matches the client exactly (Math.cos/sin can differ in the last ULP). */
export function handPoint(cx: number, cy: number, angleDeg: number, len: number, yDown = true): [number, number] {
  const a = ((angleDeg - 90) * Math.PI) / 180;
  const dx = Math.round(Math.cos(a) * len * 100) / 100;
  const dy = Math.round(Math.sin(a) * len * 100) / 100;
  return [cx + dx, yDown ? cy + dy : cy - dy];
}

export function clockTitle(c: ClockConfig): string {
  const step = TIME_STEPS.find((s) => s.id === c.step)!.label.toLowerCase();
  if (c.mode === "read") return `Read the Clock — to the ${step}`;
  if (c.mode === "draw") return `Draw the Hands — to the ${step}`;
  return `Telling Time — to the ${step}`;
}
