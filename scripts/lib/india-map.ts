// Real India state/UT boundaries, from @svg-maps/india (CC BY 4.0, traced
// outline map — https://github.com/VictorCazanave/svg-maps). Attribution is
// required by the licence; see public/maps/reference/README.md.
//
// NOTE: this dataset predates the August 2019 reorganisation, so Jammu &
// Kashmir is shown as a single undivided region (Ladakh is not split out as
// its own shape). Everything else — all 28 states' present-day outlines,
// Telangana included — is current. Composed maps note this where relevant.

import indiaSvgMap from "@svg-maps/india";
import { svgPathBbox } from "svg-path-bbox";

export interface IndiaState {
  id: string;
  name: string;
  path: string;
  cx: number;
  cy: number;
  w: number;
  h: number;
}

// bbox-centre label position needs a manual nudge for a few odd shapes
const NUDGE: Record<string, [number, number]> = {
  py: [65, 95], // Puducherry is 4 scattered enclaves; bbox centre lands mid-country
  ch: [16, -10], // Chandigarh — tiny dot between Punjab & Haryana
  dl: [16, 4], // Delhi — tiny dot
  dd: [-14, 6], // Daman & Diu
  dn: [14, 10], // Dadra & Nagar Haveli
};

export const INDIA_W = 612;
export const INDIA_H = 696;

export const INDIA_STATES: IndiaState[] = (indiaSvgMap as { locations: { id: string; name: string; path: string }[] }).locations.map((loc) => {
  const [x0, y0, x1, y1] = svgPathBbox(loc.path);
  const n = NUDGE[loc.id] ?? [0, 0];
  return { id: loc.id, name: loc.name, path: loc.path, cx: (x0 + x1) / 2 + n[0], cy: (y0 + y1) / 2 + n[1], w: x1 - x0, h: y1 - y0 };
});
const BY_ID = new Map(INDIA_STATES.map((s) => [s.id, s]));

export const STATE_CAPITAL: Record<string, string> = {
  an: "Port Blair", ap: "Amaravati", ar: "Itanagar", as: "Dispur", br: "Patna",
  ch: "Chandigarh", ct: "Raipur", dn: "Daman", dd: "Daman", dl: "New Delhi",
  ga: "Panaji", gj: "Gandhinagar", hr: "Chandigarh", hp: "Shimla", jk: "Srinagar / Jammu",
  jh: "Ranchi", ka: "Bengaluru", kl: "Thiruvananthapuram", ld: "Kavaratti", mp: "Bhopal",
  mh: "Mumbai", mn: "Imphal", ml: "Shillong", mz: "Aizawl", nl: "Kohima",
  or: "Bhubaneswar", py: "Puducherry", pb: "Chandigarh", rj: "Jaipur", sk: "Gangtok",
  tn: "Chennai", tg: "Hyderabad", tr: "Agartala", up: "Lucknow", ut: "Dehradun", wb: "Kolkata",
};

export type Region = "North" | "South" | "East" | "West" | "Central" | "Northeast";
export const STATE_REGION: Record<string, Region> = {
  jk: "North", hp: "North", pb: "North", hr: "North", dl: "North", ch: "North", ut: "North", rj: "North", up: "North",
  ka: "South", kl: "South", tn: "South", ap: "South", tg: "South", py: "South", ld: "South",
  br: "East", jh: "East", or: "East", wb: "East", an: "East",
  gj: "West", mh: "West", ga: "West", dn: "West", dd: "West",
  mp: "Central", ct: "Central",
  as: "Northeast", ar: "Northeast", mn: "Northeast", ml: "Northeast", mz: "Northeast", nl: "Northeast", tr: "Northeast", sk: "Northeast",
};

export const UT_IDS = new Set(["an", "ch", "dn", "dd", "dl", "ld", "py"]);
/** the 8 UTs are: the 7 above + Ladakh, which this dataset can't split out of jk */
export const JK_NOTE = "Ladakh is not shown separately (this outline predates the 2019 reorganisation).";

const REGION_COLOR: Record<Region, string> = {
  North: "#f6c9a0",
  South: "#a7d3c9",
  East: "#f4bbaa",
  West: "#c9c9e8",
  Central: "#f7e3b4",
  Northeast: "#a9d5e2",
};

const PALETTE = [
  "#f6c9a0", "#a7cdc4", "#c4dcb5", "#f4bbaa", "#cbccec", "#f7e3b4", "#a9d5e2", "#e8bcc7",
  "#f2d3a2", "#b8dbc8", "#d7c4e0", "#f3b9a3",
];

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export interface Marker { t: string; x: number; y: number; s?: number; color?: string; bold?: boolean }
export interface StateMarker { t: string; stateId: string; dx?: number; dy?: number; s?: number; color?: string }

export interface IndiaSvgOpts {
  fillMode: "distinct" | "region" | "highlight";
  highlightIds?: string[];
  highlightColor?: string;
  dimColor?: string;
  showStateLabels?: boolean;
  showCapitals?: boolean;
  showNeighbours?: boolean;
  showFlag?: boolean;
  markers?: Marker[];
  stateMarkers?: StateMarker[];
  extraLabels?: Marker[];
  note?: string;
  legend?: { color: string; label: string }[];
}

const ML = 118;
const MR = 78;
const MT = 46;
const MB = 58;
export const INDIA_CANVAS_W = INDIA_W + ML + MR;
export const INDIA_CANVAS_H = INDIA_H + MT + MB;

function labelTag(m: Marker, defaultSize = 6.5): string {
  const s = m.s ?? defaultSize;
  return `<text x="${m.x.toFixed(1)}" y="${m.y.toFixed(1)}" font-size="${s}" font-weight="${m.bold ? 700 : 600}" text-anchor="middle" dominant-baseline="middle" fill="${m.color ?? "#0f172a"}" stroke="#ffffff" stroke-width="${m.bold ? 2.2 : 1.5}" stroke-linejoin="round" paint-order="stroke" font-family="Arial, Helvetica, sans-serif">${esc(m.t)}</text>`;
}

export function buildIndiaSvg(o: IndiaSvgOpts): string {
  const parts: string[] = [];
  const labels: string[] = [];

  // state fills
  for (const st of INDIA_STATES) {
    let fill: string;
    if (o.fillMode === "region") fill = REGION_COLOR[STATE_REGION[st.id]] ?? "#e2e8f0";
    else if (o.fillMode === "highlight") {
      const on = o.highlightIds?.includes(st.id);
      fill = on ? (o.highlightColor ?? "#8fbf9a") : (o.dimColor ?? "#eef1f4");
    } else {
      fill = PALETTE[INDIA_STATES.indexOf(st) % PALETTE.length];
    }
    parts.push(`<path d="${st.path}" fill="${fill}" stroke="#5b6b7a" stroke-width="0.9" stroke-linejoin="round"/>`);
  }
  // bold outer silhouette (redraw each border a touch darker isn't practical without a union,
  // so emphasise the coastline via a subtle drop using a second, slightly larger pass is skipped —
  // individual borders already read clearly at print size).

  if (o.showStateLabels) {
    for (const st of INDIA_STATES) {
      if (st.w < 10 && st.h < 10 && !["ch", "dl"].includes(st.id)) continue; // skip unlabelled tiny specks
      labels.push(labelTag({ t: st.name.toUpperCase(), x: st.cx, y: st.cy, s: Math.max(5, Math.min(7.5, (st.w + st.h) / 22)), bold: false }, 6.5));
    }
  }
  if (o.showCapitals) {
    for (const st of INDIA_STATES) {
      const cap = STATE_CAPITAL[st.id];
      if (!cap) continue;
      parts.push(`<circle cx="${st.cx.toFixed(1)}" cy="${(st.cy + 7).toFixed(1)}" r="1.6" fill="#dc2626" stroke="#fff" stroke-width="0.5"/>`);
      labels.push(labelTag({ t: cap, x: st.cx, y: st.cy + 13, s: 4.6, color: "#7c2d12" }));
    }
  }
  for (const sm of o.stateMarkers ?? []) {
    const st = BY_ID.get(sm.stateId);
    if (!st) continue;
    const x = st.cx + (sm.dx ?? 0);
    const y = st.cy + (sm.dy ?? 0);
    parts.push(`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="1.7" fill="${sm.color ?? "#dc2626"}" stroke="#fff" stroke-width="0.5"/>`);
    labels.push(labelTag({ t: sm.t, x, y: y - 5, s: sm.s ?? 5.3, color: sm.color }));
  }
  for (const m of o.markers ?? []) {
    parts.push(`<circle cx="${m.x.toFixed(1)}" cy="${m.y.toFixed(1)}" r="1.7" fill="${m.color ?? "#dc2626"}" stroke="#fff" stroke-width="0.5"/>`);
    labels.push(labelTag(m));
  }

  if (o.showNeighbours) {
    const nb: Marker[] = [
      { t: "PAKISTAN", x: -60, y: 150, s: 8, bold: true, color: "#334155" },
      { t: "AFGHANISTAN", x: -55, y: 55, s: 7, bold: true, color: "#334155" },
      { t: "CHINA (TIBET)", x: 300, y: -18, s: 8, bold: true, color: "#334155" },
      { t: "NEPAL", x: 300, y: 140, s: 7, bold: true, color: "#334155" },
      { t: "BHUTAN", x: 452, y: 175, s: 6, bold: true, color: "#334155" },
      { t: "BANGLADESH", x: 460, y: 300, s: 7, bold: true, color: "#334155" },
      { t: "MYANMAR\n(BURMA)", x: 604, y: 320, s: 6.5, bold: true, color: "#334155" },
      { t: "SRI LANKA", x: 205, y: 704, s: 7, bold: true, color: "#334155" },
      { t: "ARABIAN SEA", x: -34, y: 470, s: 7.5, bold: true, color: "#1d4ed8" },
      { t: "BAY OF BENGAL", x: 630, y: 470, s: 7.5, bold: true, color: "#1d4ed8" },
      { t: "INDIAN OCEAN", x: 180, y: 726, s: 7.5, bold: true, color: "#1d4ed8" },
    ];
    for (const m of nb) {
      // multi-line "MYANMAR\n(BURMA)"
      const lines = m.t.split("\n");
      lines.forEach((line, i) => labels.push(labelTag({ ...m, t: line, y: m.y + i * 8 })));
    }
  }
  for (const m of o.extraLabels ?? []) labels.push(labelTag(m, 6.5));

  let flag = "";
  if (o.showFlag) {
    const fx = INDIA_W - 6;
    const fy = -34;
    flag = `<g>
      <rect x="${fx - 46}" y="${fy}" width="46" height="10" fill="#FF9933"/>
      <rect x="${fx - 46}" y="${fy + 10}" width="46" height="10" fill="#FFFFFF" stroke="#e2e8f0" stroke-width="0.4"/>
      <rect x="${fx - 46}" y="${fy + 20}" width="46" height="10" fill="#138808"/>
      <circle cx="${fx - 23}" cy="${fy + 15}" r="3.4" fill="none" stroke="#000080" stroke-width="0.6"/>
    </g>`;
  }

  let legend = "";
  if (o.legend?.length) {
    const lx = -ML + 8;
    const ly = INDIA_H - 10 - o.legend.length * 13;
    legend = o.legend
      .map(
        (l, i) =>
          `<rect x="${lx}" y="${ly + i * 13}" width="9" height="9" fill="${l.color}" stroke="#94a3b8" stroke-width="0.4"/>` +
          `<text x="${lx + 13}" y="${ly + i * 13 + 7}" font-size="6.5" fill="#334155" font-family="Arial, Helvetica, sans-serif">${esc(l.label)}</text>`,
      )
      .join("\n");
  }

  const noteTag = o.note
    ? `<text x="${INDIA_W / 2}" y="${INDIA_H + MB - 6}" font-size="6" text-anchor="middle" fill="#64748b" font-family="Arial, Helvetica, sans-serif">${esc(o.note)}</text>`
    : "";

  const inner = `<g transform="translate(${ML},${MT})">
${parts.join("\n")}
${flag}
${legend}
${labels.join("\n")}
${noteTag}
</g>`;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${INDIA_CANVAS_W} ${INDIA_CANVAS_H}" width="${INDIA_CANVAS_W}" height="${INDIA_CANVAS_H}" font-family="Arial, Helvetica, sans-serif">
<rect width="${INDIA_CANVAS_W}" height="${INDIA_CANVAS_H}" fill="#dbeafe"/>
${inner}
</svg>`;
}
