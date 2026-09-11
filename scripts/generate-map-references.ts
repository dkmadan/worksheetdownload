/*
 * Generates public/maps/reference/<slug>.svg from public-domain geodata:
 *   Natural Earth 1:110m (npm world-atlas) + US Census (npm us-atlas).
 * Run:  npm run generate-map-refs
 */
import { writeFileSync, mkdirSync, readdirSync } from "fs";
import { join } from "path";
import { createRequire } from "module";
import * as topojson from "topojson-client";
import {
  geoNaturalEarth1,
  geoMercator,
  geoAlbersUsa,
  geoAzimuthalEquidistant,
  geoPath,
} from "d3-geo";
import { CONTINENT_OF, CONTINENT_FILL, CONTINENT_LABEL, type Continent } from "./lib/continents";
import { US_STATE } from "./lib/us-states";
import * as F from "./lib/map-features";
import type { LL } from "./lib/map-features";
import { buildIndiaSvg, INDIA_STATES, JK_NOTE, UT_IDS, type IndiaSvgOpts } from "./lib/india-map";

/* eslint-disable @typescript-eslint/no-explicit-any */
const require = createRequire(import.meta.url);
const worldTopo: any = require("world-atlas/countries-110m.json");
const usTopo: any = require("us-atlas/states-10m.json");

const worldObj = worldTopo.objects.countries;
const worldFC: any = topojson.feature(worldTopo, worldObj);
const worldGeoms: any[] = worldObj.geometries;
const usFC: any = topojson.feature(usTopo, usTopo.objects.states);
/* eslint-enable @typescript-eslint/no-explicit-any */

const OUT = join(process.cwd(), "public", "maps", "reference");
mkdirSync(OUT, { recursive: true });

const r2 = (n: number) => Math.round(n * 100) / 100;
const roundPath = (d: string) => d.replace(/-?\d+\.?\d*/g, (m) => `${r2(parseFloat(m))}`);
const nm = (f: { properties?: Record<string, unknown> }) => String(f.properties?.name ?? "");
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

interface Label { t: string; x: number; y: number; s: number; b?: boolean }

function svgDoc(w: number, h: number, bg: string, inner: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" font-family="Arial, Helvetica, sans-serif">
<rect width="${w}" height="${h}" fill="${bg}"/>
${inner}
</svg>`;
}

function labelsSvg(labels: Label[]): string {
  return labels
    .map(
      (l) =>
        `<text x="${r2(l.x)}" y="${r2(l.y)}" font-size="${l.s}" font-weight="${l.b ? 700 : 600}" text-anchor="middle" dominant-baseline="middle" fill="#0f172a" stroke="#ffffff" stroke-width="${l.b ? 2 : 1.4}" stroke-linejoin="round" paint-order="stroke">${esc(l.t)}</text>`,
    )
    .join("\n");
}

// ── WORLD base (Natural Earth 1) ───────────────────────────────────────────
const WW = 820;
const WH = 412;
const worldNoAnt = {
  type: "FeatureCollection",
  features: worldFC.features.filter((f: unknown) => nm(f as never) !== "Antarctica" && nm(f as never) !== "Fr. S. Antarctic Lands"),
};
const wProj = geoNaturalEarth1().fitExtent([[8, 8], [WW - 8, WH - 8]], worldNoAnt as never);
const wPath = geoPath(wProj);

function worldPaths(fillOf: (name: string, cont: Continent | undefined) => string, strokeW = 0.4): string {
  return worldFC.features
    .map((f: unknown) => {
      const d = wPath(f as never);
      if (!d) return "";
      const name = nm(f as never);
      const cont = CONTINENT_OF[name];
      return `<path d="${roundPath(d)}" fill="${fillOf(name, cont)}" stroke="#64748b" stroke-width="${strokeW}"/>`;
    })
    .join("\n");
}

function continentCentroid(cont: Continent): [number, number] {
  const geoms = worldGeoms.filter((g) => CONTINENT_OF[String(g.properties?.name ?? "")] === cont);
  const merged = topojson.merge(worldTopo, geoms);
  return wPath.centroid(merged as never) as [number, number];
}

const OCEANS = (inclArctic = true): Label[] => {
  const L: Label[] = [
    { t: "PACIFIC OCEAN", x: WW * 0.08, y: WH * 0.44, s: 9 },
    { t: "PACIFIC OCEAN", x: WW * 0.94, y: WH * 0.44, s: 9 },
    { t: "ATLANTIC OCEAN", x: WW * 0.4, y: WH * 0.34, s: 9 },
    { t: "INDIAN OCEAN", x: WW * 0.69, y: WH * 0.68, s: 9 },
    { t: "SOUTHERN OCEAN", x: WW * 0.5, y: WH * 0.965, s: 8 },
  ];
  if (inclArctic) L.push({ t: "ARCTIC OCEAN", x: WW * 0.52, y: WH * 0.06, s: 8 });
  return L;
};

function continentLabels(): Label[] {
  const conts: Continent[] = ["north-america", "south-america", "europe", "africa", "asia", "oceania"];
  const nudge: Partial<Record<Continent, [number, number]>> = {
    "north-america": [-6, 26],
    europe: [10, -10],
    asia: [16, 26],
  };
  return conts.map((c) => {
    const [x, y] = continentCentroid(c);
    const n = nudge[c] ?? [0, 0];
    return { t: CONTINENT_LABEL[c].toUpperCase(), x: x + n[0], y: y + n[1], s: 13, b: true };
  });
}

const PASTELS = ["#f6c9a0", "#a7cdc4", "#c4dcb5", "#f4bbaa", "#cbccec", "#f7e3b4", "#a9d5e2", "#e8bcc7"];

// ── overlay helpers (markers / polylines / parallels) ──────────────────────
type Proj = (ll: LL) => [number, number] | null;

interface Overlay {
  markers?: Record<string, LL>;
  lines?: Record<string, LL[]>;
  markerColor?: string;
  lineColor?: string;
  labelSize?: number;
  labelLines?: boolean; // label the polylines
}

function overlaySvg(proj: Proj, o: Overlay): { svg: string; labels: Label[] } {
  const parts: string[] = [];
  const labels: Label[] = [];
  const mc = o.markerColor ?? "#dc2626";
  const lc = o.lineColor ?? "#2563eb";
  const ls = o.labelSize ?? 6.5;
  for (const [name, ll] of Object.entries(o.lines ?? {})) {
    const pts = ll.map((p) => proj(p)).filter((p): p is [number, number] => !!p);
    if (pts.length < 2) continue;
    parts.push(`<polyline points="${pts.map((p) => `${r2(p[0])},${r2(p[1])}`).join(" ")}" fill="none" stroke="${lc}" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>`);
    if (o.labelLines !== false) {
      const mid = pts[Math.floor(pts.length / 2)];
      labels.push({ t: name, x: mid[0], y: mid[1] - 3, s: ls });
    }
  }
  for (const [name, ll] of Object.entries(o.markers ?? {})) {
    const p = proj(ll);
    if (!p) continue;
    parts.push(`<circle cx="${r2(p[0])}" cy="${r2(p[1])}" r="1.7" fill="${mc}" stroke="#ffffff" stroke-width="0.5"/>`);
    labels.push({ t: name, x: p[0], y: p[1] - 4.5, s: ls });
  }
  return { svg: parts.join("\n"), labels };
}

/** curved parallels / meridians for a world projection */
function graticuleSvg(
  proj: Proj,
  parallels: { lat: number; label: string; bold?: boolean }[] = [],
  meridians: { lon: number; label: string; bold?: boolean }[] = [],
): { svg: string; labels: Label[] } {
  const parts: string[] = [];
  const labels: Label[] = [];
  for (const p of parallels) {
    const pts: string[] = [];
    for (let lon = -180; lon <= 180; lon += 6) {
      const q = proj([lon, p.lat]);
      if (q) pts.push(`${r2(q[0])},${r2(q[1])}`);
    }
    if (pts.length < 2) continue;
    parts.push(`<polyline points="${pts.join(" ")}" fill="none" stroke="#1e3a8a" stroke-width="${p.bold ? 1.4 : 0.8}" stroke-dasharray="${p.bold ? "" : "3 2"}"/>`);
    const end = proj([148, p.lat]);
    if (end) labels.push({ t: p.label, x: end[0], y: end[1] - 3.5, s: 6.5, b: p.bold });
  }
  for (const m of meridians) {
    const pts: string[] = [];
    for (let lat = -84; lat <= 84; lat += 6) {
      const q = proj([m.lon, lat]);
      if (q) pts.push(`${r2(q[0])},${r2(q[1])}`);
    }
    if (pts.length < 2) continue;
    parts.push(`<polyline points="${pts.join(" ")}" fill="none" stroke="#1e3a8a" stroke-width="${m.bold ? 1.4 : 0.7}" stroke-dasharray="${m.bold ? "" : "3 2"}"/>`);
    const end = proj([m.lon, 82]);
    if (end) labels.push({ t: m.label, x: end[0], y: end[1] - 4, s: 6, b: m.bold });
  }
  return { svg: parts.join("\n"), labels };
}

function writeWorld(slug: string, style: "continents" | "countries" | "land" | "blank", labels: Label[]) {
  let inner: string;
  if (style === "continents") {
    inner = worldPaths((_n, c) => (c ? CONTINENT_FILL[c] : "#dfe6ec"));
  } else if (style === "countries") {
    let i = 0;
    inner = worldPaths(() => PASTELS[i++ % PASTELS.length], 0.5);
  } else if (style === "land") {
    inner = worldPaths(() => "#e2e8f0", 0.5);
  } else {
    inner = worldPaths(() => "#ffffff", 0.7);
  }
  const bg = style === "blank" ? "#ffffff" : "#dbeafe";
  writeFileSync(join(OUT, `${slug}.svg`), svgDoc(WW, WH, bg, inner + "\n" + labelsSvg(labels)));
}

// ── US base (Albers) ──────────────────────────────────────────────────────
const UW = 820;
const UH = 500;
const uProj = geoAlbersUsa().fitExtent([[10, 26], [UW - 10, UH - 10]], usFC as never);
const uPath = geoPath(uProj);
const NE_NUDGE: Record<string, [number, number]> = {
  VT: [-4, -9], NH: [12, -4], MA: [34, -2], RI: [40, 10], CT: [30, 22],
  NJ: [40, 16], DE: [48, 8], MD: [56, 0], DC: [64, 14],
};

function writeUs(slug: string, capitals: boolean, extra: Label[]) {
  const paths = usFC.features
    .map((f: unknown) => {
      const d = uPath(f as never);
      const meta = US_STATE[nm(f as never)];
      if (!d || !meta) return "";
      return `<path d="${roundPath(d)}" fill="#f8fafc" stroke="#475569" stroke-width="0.6"/>`;
    })
    .join("\n");
  const labels: Label[] = [...extra];
  const dots: string[] = [];
  for (const f of usFC.features) {
    const meta = US_STATE[nm(f as never)];
    if (!meta) continue;
    const c = uPath.centroid(f as never) as [number, number];
    if (!Number.isFinite(c[0])) continue;
    const nud = NE_NUDGE[meta.abbr] ?? [0, 0];
    if (nud[0] || nud[1]) {
      dots.push(`<line x1="${r2(c[0])}" y1="${r2(c[1])}" x2="${r2(c[0] + nud[0])}" y2="${r2(c[1] + nud[1])}" stroke="#94a3b8" stroke-width="0.4"/>`);
    }
    labels.push({ t: meta.abbr, x: c[0] + nud[0], y: c[1] + nud[1] - (capitals ? 3 : 0), s: 7, b: true });
    if (capitals) {
      dots.push(`<circle cx="${r2(c[0] + nud[0])}" cy="${r2(c[1] + nud[1] + 4)}" r="1.4" fill="#dc2626"/>`);
      labels.push({ t: meta.capital, x: c[0] + nud[0], y: c[1] + nud[1] + 9, s: 4.6 });
    }
  }
  writeFileSync(join(OUT, `${slug}.svg`), svgDoc(UW, UH, "#dbeafe", paths + "\n" + dots.join("\n") + "\n" + labelsSvg(labels)));
}

// ── generic crop ──────────────────────────────────────────────────────────
function shortName(n: string): string {
  const m: Record<string, string> = {
    "United States of America": "USA", "Dem. Rep. Congo": "DR Congo",
    "Central African Rep.": "C.A.R.", "Bosnia and Herz.": "Bosnia", "Papua New Guinea": "Papua N.G.",
    "United Kingdom": "UK", "United Arab Emirates": "UAE", "South Korea": "S. Korea", "North Korea": "N. Korea",
    "Dominican Rep.": "Dom. Rep.", "Eq. Guinea": "Eq. Guinea", "W. Sahara": "W. Sahara", "S. Sudan": "S. Sudan",
  };
  return m[n] ?? n;
}

function writeCrop(
  slug: string,
  w: number,
  h: number,
  countryNames: string[],
  o: {
    projection?: "mercator" | "azimuthal-south";
    highlight?: string[];
    fill?: string;
    regionColors?: Record<string, string>;
    label?: string[];
    labelSize?: number;
    extraLabels?: Label[];
    overlay?: Overlay;
    note?: string;
  } = {},
) {
  const set = new Set(countryNames);
  const fc = { type: "FeatureCollection", features: worldFC.features.filter((f: unknown) => set.has(nm(f as never))) };
  const proj =
    o.projection === "azimuthal-south"
      ? geoAzimuthalEquidistant().rotate([0, 90]).fitExtent([[16, 16], [w - 16, h - 16]], fc as never)
      : geoMercator().fitExtent([[12, 12], [w - 12, h - 12]], fc as never);
  const path = geoPath(proj);
  const hi = o.highlight ? new Set(o.highlight) : null;
  const wantLabel = new Set(o.label ?? countryNames);

  const paths: string[] = [];
  const labels: Label[] = [];
  fc.features.forEach((f: unknown, i: number) => {
    const d = path(f as never);
    if (!d) return;
    const name = nm(f as never);
    const strong = !hi || hi.has(name);
    const fill =
      o.regionColors?.[name] ??
      o.fill ??
      (hi ? (strong ? "#8fbf9a" : "#eef1f4") : PASTELS[i % PASTELS.length]);
    paths.push(`<path d="${roundPath(d)}" fill="${fill}" stroke="#5b6b7a" stroke-width="0.45"/>`);
    if (wantLabel.has(name)) {
      const c = path.centroid(f as never) as [number, number];
      if (Number.isFinite(c[0]) && Number.isFinite(c[1])) labels.push({ t: shortName(name), x: c[0], y: c[1], s: o.labelSize ?? 7 });
    }
  });
  let overlaySvgStr = "";
  if (o.overlay) {
    const ov = overlaySvg((ll) => proj(ll as never) as [number, number] | null, o.overlay);
    overlaySvgStr = ov.svg;
    labels.push(...ov.labels);
  }
  if (o.extraLabels) labels.push(...o.extraLabels);
  if (o.note) labels.push({ t: o.note, x: w / 2, y: h - 8, s: 6 });
  writeFileSync(join(OUT, `${slug}.svg`), svgDoc(w, h, "#dbeafe", paths.join("\n") + "\n" + overlaySvgStr + "\n" + labelsSvg(labels)));
}

const countriesIn = (c: Continent) => Object.keys(CONTINENT_OF).filter((n) => CONTINENT_OF[n] === c);
const wProjFn = (ll: LL) => wProj(ll as never) as [number, number] | null;
const uProjFn = (ll: LL) => uProj(ll as never) as [number, number] | null;

// world base + feature overlay + optional graticule
function writeWorldMap(
  slug: string,
  o: {
    style?: "land" | "countries" | "continents";
    overlay?: Overlay;
    parallels?: { lat: number; label: string; bold?: boolean }[];
    meridians?: { lon: number; label: string; bold?: boolean }[];
    extraLabels?: Label[];
    oceans?: boolean;
    note?: string;
  },
) {
  const style = o.style ?? "land";
  let inner: string;
  if (style === "continents") inner = worldPaths((_n, c) => (c ? CONTINENT_FILL[c] : "#dfe6ec"));
  else if (style === "countries") {
    let i = 0;
    inner = worldPaths(() => PASTELS[i++ % PASTELS.length], 0.4);
  } else inner = worldPaths(() => "#e7edf2", 0.4);

  const labels: Label[] = [];
  let extra = "";
  if (o.parallels || o.meridians) {
    const g = graticuleSvg(wProjFn, o.parallels, o.meridians);
    extra += g.svg + "\n";
    labels.push(...g.labels);
  }
  if (o.overlay) {
    const ov = overlaySvg(wProjFn, o.overlay);
    extra += ov.svg + "\n";
    labels.push(...ov.labels);
  }
  if (o.oceans) labels.push(...OCEANS());
  if (o.extraLabels) labels.push(...o.extraLabels);
  if (o.note) labels.push({ t: o.note, x: WW / 2, y: WH - 6, s: 6 });
  writeFileSync(join(OUT, `${slug}.svg`), svgDoc(WW, WH, "#dbeafe", inner + "\n" + extra + labelsSvg(labels)));
}

// US base + overlay (rivers, lakes, region colours)
function writeUsMap(
  slug: string,
  o: { regionColors?: Record<string, string>; overlay?: Overlay; abbr?: boolean; extraLabels?: Label[] },
) {
  const paths: string[] = [];
  const labels: Label[] = [...(o.extraLabels ?? [])];
  for (const f of usFC.features) {
    const meta = US_STATE[nm(f as never)];
    const d = uPath(f as never);
    if (!meta || !d) continue;
    const fill = o.regionColors?.[nm(f as never)] ?? "#f4f7fa";
    paths.push(`<path d="${roundPath(d)}" fill="${fill}" stroke="#475569" stroke-width="0.55"/>`);
    if (o.abbr !== false) {
      const c = uPath.centroid(f as never) as [number, number];
      if (Number.isFinite(c[0])) labels.push({ t: meta.abbr, x: c[0], y: c[1], s: 6, b: true });
    }
  }
  let extra = "";
  if (o.overlay) {
    const ov = overlaySvg(uProjFn, o.overlay);
    extra = ov.svg;
    labels.push(...ov.labels);
  }
  writeFileSync(join(OUT, `${slug}.svg`), svgDoc(UW, UH, "#dbeafe", paths.join("\n") + "\n" + extra + "\n" + labelsSvg(labels)));
}

// ── build all 17 ──────────────────────────────────────────────────────────
writeWorld("world-map", "continents", [...continentLabels(), ...OCEANS()]);
writeWorld("continents-map", "continents", continentLabels());
writeWorld("continents-and-oceans-map", "continents", [...continentLabels(), ...OCEANS()]);
writeWorld("oceans-map", "land", OCEANS());
writeWorld("blank-world-map", "blank", []);

const MAJORS = [
  "Canada", "United States of America", "Mexico", "Brazil", "Argentina", "United Kingdom", "France",
  "Germany", "Spain", "Egypt", "Nigeria", "South Africa", "Russia", "China", "India", "Japan",
  "Indonesia", "Saudi Arabia", "Australia", "Greenland", "Kazakhstan", "Iran", "Sweden", "Turkey",
];
{
  const labels: Label[] = [];
  for (const f of worldFC.features) {
    if (!MAJORS.includes(nm(f))) continue;
    const c = wPath.centroid(f) as [number, number];
    if (Number.isFinite(c[0])) labels.push({ t: shortName(nm(f)), x: c[0], y: c[1], s: 7 });
  }
  writeWorld("country-identification-map", "countries", labels);
}

writeUs("united-states-map", false, [
  { t: "CANADA", x: UW * 0.42, y: 14, s: 10, b: true },
  { t: "MEXICO", x: UW * 0.28, y: UH - 10, s: 10, b: true },
  { t: "Pacific Ocean", x: 48, y: UH * 0.5, s: 7.5 },
  { t: "Atlantic Ocean", x: UW - 46, y: UH * 0.62, s: 7.5 },
  { t: "Gulf of Mexico", x: UW * 0.6, y: UH - 20, s: 7.5 },
]);
writeUs("us-states-and-capitals-map", true, []);

const LBL: Record<string, string[]> = {
  europe: ["United Kingdom", "Ireland", "France", "Spain", "Portugal", "Germany", "Italy", "Poland", "Ukraine", "Greece", "Norway", "Sweden", "Finland", "Iceland", "Russia", "Netherlands", "Belgium", "Austria", "Switzerland", "Romania"],
  asia: ["China", "India", "Japan", "South Korea", "North Korea", "Indonesia", "Thailand", "Vietnam", "Myanmar", "Malaysia", "Philippines", "Saudi Arabia", "Iran", "Iraq", "Turkey", "Kazakhstan", "Mongolia", "Pakistan", "Afghanistan", "Nepal", "Bangladesh", "Sri Lanka"],
  africa: ["Egypt", "Libya", "Algeria", "Morocco", "Tunisia", "Nigeria", "Ethiopia", "Kenya", "Tanzania", "South Africa", "Dem. Rep. Congo", "Sudan", "Chad", "Niger", "Mali", "Angola", "Namibia", "Madagascar", "Ghana", "Somalia", "Zambia", "Zimbabwe", "Mozambique"],
  "north-america": ["Canada", "United States of America", "Mexico", "Guatemala", "Cuba", "Honduras", "Nicaragua", "Panama", "Greenland", "Belize", "Costa Rica", "Haiti", "Dominican Rep.", "Jamaica"],
  "south-america": ["Brazil", "Argentina", "Chile", "Peru", "Bolivia", "Colombia", "Venezuela", "Ecuador", "Paraguay", "Uruguay", "Guyana", "Suriname"],
};

writeCrop("europe-map", 560, 480, countriesIn("europe"), { label: LBL.europe, labelSize: 6.5 });
writeCrop("asia-map", 640, 470, countriesIn("asia"), { label: LBL.asia, labelSize: 6.5 });
writeCrop("africa-map", 470, 500, countriesIn("africa"), { label: LBL.africa, labelSize: 6.5 });
writeCrop("north-america-map", 560, 500, countriesIn("north-america"), { label: LBL["north-america"], labelSize: 6.5 });
writeCrop("south-america-map", 430, 520, countriesIn("south-america"), { label: LBL["south-america"], labelSize: 7 });

writeCrop("india-map", 470, 520, ["India", "Pakistan", "China", "Nepal", "Bhutan", "Bangladesh", "Myanmar", "Sri Lanka", "Afghanistan"], {
  highlight: ["India"],
  label: ["India", "Pakistan", "China", "Nepal", "Bhutan", "Bangladesh", "Myanmar", "Sri Lanka"],
  labelSize: 7.5,
  extraLabels: [
    { t: "Arabian Sea", x: 95, y: 370, s: 7 },
    { t: "Bay of Bengal", x: 370, y: 400, s: 7 },
  ],
});
writeCrop("states-of-india-map", 470, 520, ["India", "Pakistan", "China", "Nepal", "Bhutan", "Bangladesh", "Myanmar", "Sri Lanka"], {
  highlight: ["India"],
  label: ["India"],
  labelSize: 9,
  note: "Outline only — the 28 states are not drawn. Use an atlas for state boundaries.",
});
writeCrop("australia-map", 560, 470, ["Australia", "New Zealand", "Papua New Guinea", "Indonesia"], {
  highlight: ["Australia"],
  label: ["Australia", "New Zealand", "Papua New Guinea"],
  labelSize: 8,
  extraLabels: [
    { t: "Indian Ocean", x: 80, y: 250, s: 7 },
    { t: "Pacific Ocean", x: 500, y: 300, s: 7 },
  ],
  note: "Outline only — the 6 states & 2 territories are not drawn. Use an atlas for state boundaries.",
});
writeCrop("antarctica-map", 520, 470, ["Antarctica"], {
  projection: "azimuthal-south",
  fill: "#eaf4fa",
  label: [],
  extraLabels: [
    { t: "ANTARCTICA", x: 262, y: 214, s: 13, b: true },
    { t: "South Pole", x: 262, y: 238, s: 7 },
    { t: "SOUTHERN OCEAN", x: 260, y: 460, s: 8 },
    { t: "Ross Sea", x: 175, y: 400, s: 6.5 },
    { t: "Weddell Sea", x: 330, y: 95, s: 6.5 },
    { t: "Antarctic Peninsula", x: 95, y: 175, s: 6.5 },
  ],
});

// ══════════════════════════════════════════════════════════════════════════
//  GEOGRAPHY — reference-line world maps
// ══════════════════════════════════════════════════════════════════════════
writeWorldMap("equator-map", {
  parallels: [{ lat: 0, label: "Equator 0°", bold: true }],
  extraLabels: [
    { t: "NORTHERN HEMISPHERE", x: WW * 0.5, y: WH * 0.24, s: 9, b: true },
    { t: "SOUTHERN HEMISPHERE", x: WW * 0.5, y: WH * 0.82, s: 9, b: true },
  ],
});
writeWorldMap("tropics-map", {
  parallels: [
    { lat: 23.5, label: "Tropic of Cancer 23.5°N", bold: true },
    { lat: 0, label: "Equator" },
    { lat: -23.5, label: "Tropic of Capricorn 23.5°S", bold: true },
  ],
  extraLabels: [{ t: "TROPICAL ZONE", x: WW * 0.5, y: WH * 0.5, s: 9, b: true }],
});
writeWorldMap("prime-meridian-map", {
  meridians: [
    { lon: 0, label: "Prime Meridian 0°", bold: true },
    { lon: 180, label: "180°" },
    { lon: -90, label: "90°W" },
    { lon: 90, label: "90°E" },
  ],
  extraLabels: [
    { t: "WESTERN HEMISPHERE", x: WW * 0.24, y: WH * 0.5, s: 8, b: true },
    { t: "EASTERN HEMISPHERE", x: WW * 0.74, y: WH * 0.5, s: 8, b: true },
  ],
});
writeWorldMap("latitude-and-longitude-map", {
  parallels: [
    { lat: 66.5, label: "66.5°N Arctic Circle" },
    { lat: 23.5, label: "23.5°N Tropic of Cancer" },
    { lat: 0, label: "0° Equator", bold: true },
    { lat: -23.5, label: "23.5°S Tropic of Capricorn" },
    { lat: -66.5, label: "66.5°S Antarctic Circle" },
  ],
  meridians: [
    { lon: -90, label: "90°W" },
    { lon: 0, label: "0° Prime Meridian", bold: true },
    { lon: 90, label: "90°E" },
  ],
});
writeWorldMap("polar-circles-map", {
  parallels: [
    { lat: 66.5, label: "Arctic Circle 66.5°N", bold: true },
    { lat: 0, label: "Equator" },
    { lat: -66.5, label: "Antarctic Circle 66.5°S", bold: true },
  ],
  extraLabels: [
    { t: "ARCTIC REGION", x: WW * 0.52, y: WH * 0.08, s: 8, b: true },
    { t: "ANTARCTIC REGION", x: WW * 0.5, y: WH * 0.93, s: 8, b: true },
  ],
});
writeWorldMap("climate-zones-map", {
  parallels: [
    { lat: 66.5, label: "Arctic Circle" },
    { lat: 23.5, label: "Tropic of Cancer" },
    { lat: 0, label: "Equator" },
    { lat: -23.5, label: "Tropic of Capricorn" },
    { lat: -66.5, label: "Antarctic Circle" },
  ],
  extraLabels: [
    { t: "POLAR", x: WW * 0.5, y: WH * 0.05, s: 8, b: true },
    { t: "TEMPERATE", x: WW * 0.5, y: WH * 0.24, s: 8, b: true },
    { t: "TROPICAL", x: WW * 0.5, y: WH * 0.5, s: 8, b: true },
    { t: "TEMPERATE", x: WW * 0.5, y: WH * 0.76, s: 8, b: true },
    { t: "POLAR", x: WW * 0.5, y: WH * 0.96, s: 8, b: true },
  ],
});
writeWorldMap("hemispheres-map", {
  parallels: [{ lat: 0, label: "Equator", bold: true }],
  meridians: [{ lon: 0, label: "Prime Meridian", bold: true }],
  extraLabels: [
    { t: "NORTHERN", x: WW * 0.5, y: WH * 0.16, s: 9, b: true },
    { t: "SOUTHERN", x: WW * 0.5, y: WH * 0.88, s: 9, b: true },
    { t: "WESTERN", x: WW * 0.22, y: WH * 0.5, s: 9, b: true },
    { t: "EASTERN", x: WW * 0.78, y: WH * 0.5, s: 9, b: true },
  ],
});
writeWorldMap("time-zones-map", {
  meridians: [
    ...[-180, -135, -90, -45, 45, 90, 135].map((lon) => ({ lon, label: `${lon > 0 ? "+" : "−"}${Math.abs(lon) / 15}h` })),
    { lon: 0, label: "0° UTC", bold: true },
    { lon: 180, label: "Int'l Date Line", bold: true },
  ],
});
writeWorldMap("longitude-map", {
  overlay: { markers: F.WORLD_CITIES, labelSize: 6.5, markerColor: "#dc2626" },
  parallels: [{ lat: 0, label: "Equator" }],
  meridians: [{ lon: 0, label: "Prime Meridian", bold: true }],
});

// ══════════════════════════════════════════════════════════════════════════
//  GEOGRAPHY — feature maps
// ══════════════════════════════════════════════════════════════════════════
writeWorldMap("major-rivers-map", { overlay: { lines: F.WORLD_RIVERS, labelSize: 6, lineColor: "#1d4ed8" }, oceans: true });
writeUsMap("us-rivers-map", { abbr: true, overlay: { lines: F.US_RIVERS, labelSize: 6, lineColor: "#1d4ed8" } });
writeWorldMap("major-mountains-map", { overlay: { markers: F.WORLD_MOUNTAINS, labelSize: 6, markerColor: "#7c2d12" } });
writeWorldMap("mountain-ranges-map", { overlay: { lines: F.WORLD_RANGES, labelSize: 6, lineColor: "#7c2d12" } });
writeWorldMap("deserts-map", { overlay: { markers: F.WORLD_DESERTS, labelSize: 6, markerColor: "#b45309" } });
writeWorldMap("lakes-map", { overlay: { markers: F.WORLD_LAKES, labelSize: 6, markerColor: "#0369a1" } });
writeWorldMap("islands-map", { overlay: { markers: F.WORLD_ISLANDS, labelSize: 6, markerColor: "#047857" } });
writeWorldMap("seas-and-gulfs-map", { overlay: { markers: F.WORLD_SEAS, labelSize: 6, markerColor: "#0369a1" }, oceans: true });
writeWorldMap("peninsulas-map", { overlay: { markers: F.WORLD_PENINSULAS, labelSize: 6, markerColor: "#065f46" } });
writeWorldMap("volcanoes-map", {
  overlay: { markers: F.WORLD_VOLCANOES, labelSize: 6, markerColor: "#b91c1c" },
  note: "Most volcanoes lie along the Pacific 'Ring of Fire'.",
});
writeWorldMap("rainforest-map", {
  overlay: { markers: F.RAINFORESTS, labelSize: 6, markerColor: "#166534" },
  parallels: [
    { lat: 23.5, label: "Tropic of Cancer" },
    { lat: -23.5, label: "Tropic of Capricorn" },
  ],
});
writeWorldMap("biomes-map", { overlay: { markers: F.BIOMES, labelSize: 6, markerColor: "#166534" } });
writeWorldMap("tectonic-plates-map", { overlay: { markers: F.PLATES, labelSize: 6.5, markerColor: "#111827" } });
writeWorldMap("countries-and-capitals-map", {
  style: "countries",
  overlay: {
    markers: Object.fromEntries(Object.entries(F.CAPITALS).map(([, [cap, lon, lat]]) => [cap, [lon, lat] as LL])),
    labelSize: 6,
    markerColor: "#dc2626",
  },
});

// feature deep-dives
writeCrop("sahara-desert-map", 560, 420, ["Morocco", "Algeria", "Tunisia", "Libya", "Egypt", "Mauritania", "Mali", "Niger", "Chad", "Sudan", "W. Sahara"], {
  fill: "#f0d9a8",
  label: ["Morocco", "Algeria", "Libya", "Egypt", "Mali", "Niger", "Chad", "Sudan", "Mauritania"],
  labelSize: 6.5,
  extraLabels: [{ t: "SAHARA DESERT", x: 280, y: 190, s: 11, b: true }],
});
writeCrop("nile-river-map", 380, 520, ["Egypt", "Sudan", "S. Sudan", "Ethiopia", "Uganda"], {
  highlight: [],
  label: ["Egypt", "Sudan", "S. Sudan", "Ethiopia", "Uganda"],
  labelSize: 6.5,
  overlay: { lines: { Nile: F.WORLD_RIVERS.Nile }, markers: { Cairo: [31.24, 30.05], Khartoum: [32.53, 15.5], "Lake Victoria": [33, -1] }, labelSize: 6, lineColor: "#1d4ed8" },
});
writeCrop("amazon-rainforest-map", 460, 500, countriesIn("south-america"), {
  regionColors: Object.fromEntries(["Brazil", "Peru", "Colombia", "Bolivia", "Ecuador", "Venezuela", "Guyana", "Suriname"].map((n) => [n, "#8fbf9a"])),
  label: ["Brazil", "Peru", "Colombia", "Bolivia", "Ecuador"],
  labelSize: 6.5,
  overlay: { lines: { "Amazon River": F.WORLD_RIVERS.Amazon }, labelSize: 6, lineColor: "#1d4ed8" },
  extraLabels: [{ t: "AMAZON RAINFOREST", x: 230, y: 210, s: 9, b: true }],
});
writeCrop("himalayas-map", 520, 380, ["India", "Nepal", "Bhutan", "China", "Pakistan", "Bangladesh"], {
  label: ["India", "Nepal", "Bhutan", "China", "Pakistan"],
  labelSize: 6.5,
  overlay: {
    lines: { Himalayas: F.WORLD_RANGES.Himalayas, Karakoram: F.WORLD_RANGES.Karakoram },
    markers: { "Mt Everest": [86.93, 27.99], K2: [76.51, 35.88], Kangchenjunga: [88.15, 27.7] },
    labelSize: 6,
    lineColor: "#7c2d12",
  },
});
writeCrop("andes-mountains-map", 380, 520, countriesIn("south-america"), {
  label: ["Colombia", "Ecuador", "Peru", "Bolivia", "Chile", "Argentina", "Venezuela"],
  labelSize: 6.5,
  overlay: {
    lines: { Andes: F.WORLD_RANGES.Andes },
    markers: { Aconcagua: [-70.01, -32.65], Chimborazo: [-78.82, -1.47] },
    labelSize: 6,
    lineColor: "#7c2d12",
  },
});

// ══════════════════════════════════════════════════════════════════════════
//  REGIONAL
// ══════════════════════════════════════════════════════════════════════════
const US_REGION: Record<string, string> = {};
{
  const REG: Record<string, string[]> = {
    "#e07a5f": ["Maine", "New Hampshire", "Vermont", "Massachusetts", "Rhode Island", "Connecticut", "New York", "New Jersey", "Pennsylvania"],
    "#f2cc54": ["Delaware", "Maryland", "Virginia", "West Virginia", "Kentucky", "Tennessee", "North Carolina", "South Carolina", "Georgia", "Florida", "Alabama", "Mississippi", "Louisiana", "Arkansas"],
    "#7fb98c": ["Ohio", "Michigan", "Indiana", "Illinois", "Wisconsin", "Minnesota", "Iowa", "Missouri", "Kansas", "Nebraska", "South Dakota", "North Dakota"],
    "#d9b48f": ["Texas", "Oklahoma", "New Mexico", "Arizona"],
    "#6a8ec9": ["Colorado", "Wyoming", "Montana", "Idaho", "Utah", "Nevada", "California", "Oregon", "Washington", "Alaska", "Hawaii"],
  };
  for (const [color, states] of Object.entries(REG)) for (const s of states) US_REGION[s] = color;
}
writeUsMap("us-regions-map", {
  regionColors: US_REGION,
  abbr: true,
  extraLabels: [
    { t: "WEST", x: UW * 0.12, y: UH * 0.35, s: 9, b: true },
    { t: "SOUTHWEST", x: UW * 0.38, y: UH * 0.68, s: 8, b: true },
    { t: "MIDWEST", x: UW * 0.55, y: UH * 0.32, s: 9, b: true },
    { t: "SOUTHEAST", x: UW * 0.72, y: UH * 0.65, s: 8, b: true },
    { t: "NORTHEAST", x: UW * 0.9, y: UH * 0.28, s: 8, b: true },
  ],
});
writeUsMap("great-lakes-map", {
  abbr: true,
  overlay: { markers: F.GREAT_LAKES, labelSize: 6.5, markerColor: "#0369a1" },
  extraLabels: [{ t: "CANADA", x: UW * 0.55, y: 14, s: 9, b: true }],
});

writeCrop("canada-provinces-map", 620, 460, ["Canada", "United States of America", "Greenland"], {
  highlight: ["Canada"],
  label: ["Canada", "United States of America", "Greenland"],
  labelSize: 7,
  note: "Country outline only — the 10 provinces & 3 territories are not drawn.",
});
writeCrop("mexico-states-map", 480, 420, ["Mexico", "United States of America", "Guatemala", "Belize"], {
  highlight: ["Mexico"],
  label: ["Mexico", "United States of America", "Guatemala"],
  labelSize: 7,
  note: "Country outline only — the 31 states are not drawn.",
});
writeCrop("uk-countries-map", 380, 460, ["United Kingdom", "Ireland", "France"], {
  highlight: ["United Kingdom"],
  label: ["United Kingdom", "Ireland", "France"],
  labelSize: 7.5,
  note: "England, Scotland, Wales & N. Ireland boundaries are not drawn.",
});
writeCrop("middle-east-map", 560, 460, ["Turkey", "Syria", "Iraq", "Iran", "Israel", "Jordan", "Lebanon", "Saudi Arabia", "Yemen", "Oman", "United Arab Emirates", "Kuwait", "Qatar", "Egypt", "Cyprus"], {
  label: ["Turkey", "Syria", "Iraq", "Iran", "Israel", "Jordan", "Saudi Arabia", "Yemen", "Oman", "UAE", "Egypt", "Kuwait", "Qatar", "Lebanon"],
  labelSize: 6.5,
});
writeCrop("scandinavia-map", 460, 500, ["Norway", "Sweden", "Denmark", "Finland", "Iceland"], {
  label: ["Norway", "Sweden", "Denmark", "Finland", "Iceland"],
  labelSize: 8,
});
writeCrop("caribbean-map", 560, 380, ["Cuba", "Haiti", "Dominican Rep.", "Jamaica", "Bahamas", "Trinidad and Tobago", "Puerto Rico"], {
  label: ["Cuba", "Haiti", "Dom. Rep.", "Jamaica", "Bahamas", "Trinidad and Tobago", "Puerto Rico"],
  labelSize: 6.5,
});
writeCrop("central-america-map", 520, 420, ["Guatemala", "Belize", "Honduras", "El Salvador", "Nicaragua", "Costa Rica", "Panama"], {
  label: ["Guatemala", "Belize", "Honduras", "El Salvador", "Nicaragua", "Costa Rica", "Panama"],
  labelSize: 6.5,
});
writeCrop("southeast-asia-map", 560, 440, ["Myanmar", "Thailand", "Laos", "Cambodia", "Vietnam", "Malaysia", "Indonesia", "Philippines", "Brunei", "Timor-Leste"], {
  label: ["Myanmar", "Thailand", "Laos", "Cambodia", "Vietnam", "Malaysia", "Indonesia", "Philippines"],
  labelSize: 6.5,
});
writeCrop("oceania-map", 620, 460, ["Australia", "New Zealand", "Papua New Guinea", "Fiji", "Solomon Is.", "Vanuatu", "New Caledonia"], {
  label: ["Australia", "New Zealand", "Papua N.G.", "Fiji", "Solomon Is.", "Vanuatu"],
  labelSize: 6.5,
});
{
  const REG: Record<string, string[]> = {
    "#e07a5f": ["Morocco", "Algeria", "Tunisia", "Libya", "Egypt", "W. Sahara"],
    "#f2cc54": ["Mauritania", "Mali", "Niger", "Nigeria", "Senegal", "Guinea", "Ghana", "Côte d'Ivoire", "Burkina Faso", "Benin", "Togo", "Sierra Leone", "Liberia", "Gambia", "Guinea-Bissau"],
    "#7fb98c": ["Sudan", "S. Sudan", "Ethiopia", "Kenya", "Tanzania", "Uganda", "Somalia", "Rwanda", "Burundi", "Eritrea", "Djibouti", "Somaliland"],
    "#6a8ec9": ["Chad", "Cameroon", "Central African Rep.", "Dem. Rep. Congo", "Congo", "Gabon", "Eq. Guinea", "Angola"],
    "#d9b48f": ["South Africa", "Namibia", "Botswana", "Zimbabwe", "Zambia", "Mozambique", "Malawi", "Madagascar", "Lesotho", "eSwatini"],
  };
  const rc: Record<string, string> = {};
  for (const [c, ns] of Object.entries(REG)) for (const n of ns) rc[n] = c;
  writeCrop("africa-regions-map", 470, 500, countriesIn("africa"), {
    regionColors: rc,
    label: [],
    extraLabels: [
      { t: "NORTH", x: 235, y: 90, s: 9, b: true },
      { t: "WEST", x: 120, y: 230, s: 9, b: true },
      { t: "EAST", x: 350, y: 260, s: 9, b: true },
      { t: "CENTRAL", x: 235, y: 300, s: 8, b: true },
      { t: "SOUTHERN", x: 235, y: 420, s: 8, b: true },
    ],
  });
}

// ══════════════════════════════════════════════════════════════════════════
//  INDIA — real state/UT boundaries (@svg-maps/india, CC BY 4.0)
// ══════════════════════════════════════════════════════════════════════════
function writeIndia(slug: string, o: IndiaSvgOpts) {
  writeFileSync(join(OUT, `${slug}.svg`), buildIndiaSvg(o));
}
const ALL_IDS = INDIA_STATES.map((s) => s.id);

// core.ts — general overview (neighbours-focused, no per-state clutter)
writeIndia("india-map", {
  fillMode: "highlight",
  highlightIds: ALL_IDS,
  highlightColor: "#8fbf9a",
  showNeighbours: true,
  note: JK_NOTE,
});
// core.ts — the flagship "label every state" map
writeIndia("states-of-india-map", {
  fillMode: "distinct",
  showStateLabels: true,
  showFlag: true,
  note: `28 states & 8 union territories. ${JK_NOTE}`,
});

writeIndia("india-political-map", {
  fillMode: "distinct",
  showStateLabels: true,
  showNeighbours: true,
  note: JK_NOTE,
});
writeIndia("india-physical-map", {
  fillMode: "highlight",
  highlightIds: ALL_IDS,
  highlightColor: "#d7e5d0",
  markers: [
    { t: "HIMALAYAS", x: 260, y: 30, s: 7.5, bold: true, color: "#7c2d12" },
    { t: "Ganga Plain", x: 300, y: 210, s: 6, color: "#1d4ed8" },
    { t: "Rann of Kutch", x: 30, y: 320, s: 5.5, color: "#7c2d12" },
    { t: "Deccan Plateau", x: 210, y: 430, s: 6.5, color: "#7c2d12" },
    { t: "Western Ghats", x: 130, y: 500, s: 6, color: "#7c2d12" },
    { t: "Eastern Ghats", x: 300, y: 470, s: 6, color: "#7c2d12" },
    { t: "Sundarbans", x: 400, y: 355, s: 5.5, color: "#065f46" },
  ],
  stateMarkers: [
    { t: "Thar Desert", stateId: "rj", dx: -20, dy: -55, color: "#b45309" },
    { t: "Aravalli Range", stateId: "rj", dx: 40, dy: -95, color: "#7c2d12" },
  ],
  note: "Ranges/plains labelled indicatively — positions are approximate.",
});
writeIndia("indian-states-identification-map", { fillMode: "distinct", showStateLabels: true });
writeIndia("union-territories-map", {
  fillMode: "highlight",
  highlightIds: [...UT_IDS],
  highlightColor: "#f6c9a0",
  stateMarkers: [
    { t: "Andaman & Nicobar Is.", stateId: "an", dx: 12, dy: 0 },
    { t: "Chandigarh", stateId: "ch", dx: 0, dy: -10 },
    { t: "Dadra & N. Haveli, Daman & Diu", stateId: "dn", dx: 0, dy: 22, s: 4.6 },
    { t: "Delhi (NCT)", stateId: "dl", dx: 14, dy: 2 },
    { t: "Lakshadweep", stateId: "ld", dx: -10, dy: 0 },
    { t: "Puducherry", stateId: "py", dx: 0, dy: 12 },
  ],
  note: `8 union territories. ${JK_NOTE}`,
});
writeIndia("states-and-capitals-of-india-map", {
  fillMode: "distinct",
  showStateLabels: true,
  showCapitals: true,
  note: "Capital city shown for every state & union territory.",
});
writeIndia("major-rivers-of-india-map", {
  fillMode: "highlight",
  highlightIds: ALL_IDS,
  highlightColor: "#eef3ea",
  markers: [
    { t: "Ganga", x: 340, y: 250, s: 6.5, bold: true, color: "#1d4ed8" },
    { t: "Yamuna", x: 250, y: 225, s: 6, color: "#1d4ed8" },
    { t: "Brahmaputra", x: 480, y: 260, s: 6, bold: true, color: "#1d4ed8" },
    { t: "Indus", x: 130, y: 70, s: 6, color: "#1d4ed8" },
    { t: "Godavari", x: 240, y: 465, s: 6, color: "#1d4ed8" },
    { t: "Krishna", x: 220, y: 500, s: 6, color: "#1d4ed8" },
    { t: "Narmada", x: 150, y: 335, s: 6, color: "#1d4ed8" },
    { t: "Kaveri", x: 195, y: 565, s: 6, color: "#1d4ed8" },
    { t: "Mahanadi", x: 320, y: 400, s: 6, color: "#1d4ed8" },
  ],
  note: "River courses are simplified for readability.",
});
writeIndia("mountain-ranges-of-india-map", {
  fillMode: "highlight",
  highlightIds: ALL_IDS,
  highlightColor: "#eef3ea",
  markers: [
    { t: "HIMALAYAS", x: 330, y: 30, s: 7, bold: true, color: "#7c2d12" },
    { t: "Karakoram Range", x: 190, y: 15, s: 5.5, color: "#7c2d12" },
    { t: "Aravalli Range", x: 145, y: 175, s: 5.5, color: "#7c2d12" },
    { t: "Vindhya Range", x: 240, y: 300, s: 5.5, color: "#7c2d12" },
    { t: "Satpura Range", x: 230, y: 345, s: 5.5, color: "#7c2d12" },
    { t: "Western Ghats", x: 135, y: 500, s: 6, color: "#7c2d12" },
    { t: "Eastern Ghats", x: 305, y: 470, s: 6, color: "#7c2d12" },
  ],
});
writeIndia("indian-states-by-region-map", {
  fillMode: "region",
  showStateLabels: true,
  legend: [
    { color: "#f6c9a0", label: "North" },
    { color: "#a7d3c9", label: "South" },
    { color: "#f4bbaa", label: "East" },
    { color: "#c9c9e8", label: "West" },
    { color: "#f7e3b4", label: "Central" },
    { color: "#a9d5e2", label: "Northeast" },
  ],
});
writeIndia("india-neighbouring-countries-map", {
  fillMode: "highlight",
  highlightIds: ALL_IDS,
  highlightColor: "#8fbf9a",
  showNeighbours: true,
  note: JK_NOTE,
});
writeIndia("indian-national-parks-map", {
  fillMode: "highlight",
  highlightIds: ALL_IDS,
  highlightColor: "#e9f2e4",
  stateMarkers: [
    { t: "Jim Corbett NP", stateId: "ut", color: "#166534" },
    { t: "Kaziranga NP", stateId: "as", dx: 30, color: "#166534" },
    { t: "Gir NP", stateId: "gj", dx: -20, dy: 60, color: "#166534" },
    { t: "Ranthambore NP", stateId: "rj", dx: 60, dy: 30, color: "#166534" },
    { t: "Sundarbans NP", stateId: "wb", dx: -10, dy: 60, color: "#166534" },
    { t: "Kanha NP", stateId: "mp", dx: 60, dy: 30, color: "#166534" },
    { t: "Bandhavgarh NP", stateId: "mp", dx: 70, dy: -10, color: "#166534" },
    { t: "Periyar NP", stateId: "kl", dy: -10, color: "#166534" },
    { t: "Hemis NP", stateId: "jk", dx: 90, dy: 60, color: "#166534" },
    { t: "Bandipur NP", stateId: "ka", dx: 10, dy: 40, color: "#166534" },
  ],
});
writeIndia("indian-wildlife-sanctuaries-map", {
  fillMode: "highlight",
  highlightIds: ALL_IDS,
  highlightColor: "#e9f2e4",
  stateMarkers: [
    { t: "Keoladeo (Bharatpur)", stateId: "rj", dx: 70, dy: 60, color: "#166534" },
    { t: "Chilika", stateId: "or", dx: -10, dy: 40, color: "#166534" },
    { t: "Dachigam", stateId: "jk", dx: 20, dy: 40, color: "#166534" },
    { t: "Mudumalai", stateId: "tn", dx: -40, dy: -50, color: "#166534" },
    { t: "Bhitarkanika", stateId: "or", dx: 40, dy: 10, color: "#166534" },
    { t: "Nal Sarovar", stateId: "gj", dx: 10, dy: -20, color: "#166534" },
    { t: "Vedanthangal", stateId: "tn", dx: 20, dy: -10, color: "#166534" },
  ],
});
writeIndia("indian-monsoon-map", {
  fillMode: "highlight",
  highlightIds: ALL_IDS,
  highlightColor: "#eef3ea",
  markers: [
    { t: "Arabian Sea branch →", x: 20, y: 400, s: 6.5, bold: true, color: "#0369a1" },
    { t: "← Bay of Bengal branch", x: 400, y: 380, s: 6.5, bold: true, color: "#0369a1" },
  ],
  stateMarkers: [
    { t: "Mawsynram (wettest place)", stateId: "ml", dx: 40, color: "#0369a1" },
    { t: "Thar (driest)", stateId: "rj", dx: -30, dy: -30, color: "#b45309" },
  ],
});
writeIndia("indian-crops-map", {
  fillMode: "highlight",
  highlightIds: ALL_IDS,
  highlightColor: "#eef3ea",
  stateMarkers: [
    { t: "Rice (E & S)", stateId: "or", color: "#166534" },
    { t: "Wheat (NW)", stateId: "pb", color: "#166534" },
    { t: "Cotton (Deccan)", stateId: "mh", color: "#166534" },
    { t: "Tea", stateId: "as", dx: 30, color: "#166534" },
    { t: "Jute", stateId: "wb", dx: -10, dy: 40, color: "#166534" },
    { t: "Coffee (South)", stateId: "ka", dx: 10, dy: 40, color: "#166534" },
  ],
});
writeIndia("indian-mineral-resources-map", {
  fillMode: "highlight",
  highlightIds: ALL_IDS,
  highlightColor: "#eef3ea",
  stateMarkers: [
    { t: "Coal / Iron (Chota Nagpur)", stateId: "jh", color: "#7c2d12" },
    { t: "Bauxite", stateId: "or", dx: -30, color: "#7c2d12" },
    { t: "Mica", stateId: "rj", dx: 60, dy: 30, color: "#7c2d12" },
    { t: "Gold (Kolar)", stateId: "ka", dx: 30, dy: 10, color: "#7c2d12" },
  ],
  markers: [{ t: "Mumbai High (oil)", x: -10, y: 400, s: 5.5, color: "#7c2d12" }],
});
writeIndia("indian-industries-map", {
  fillMode: "highlight",
  highlightIds: ALL_IDS,
  highlightColor: "#eef3ea",
  stateMarkers: [
    { t: "Jamshedpur (steel)", stateId: "jh", dx: -20, dy: -20, color: "#111827" },
    { t: "Bhilai (steel)", stateId: "ct", dx: -10, dy: -30, color: "#111827" },
    { t: "Mumbai (textiles)", stateId: "mh", dx: -30, dy: 30, color: "#111827" },
    { t: "Ahmedabad (textiles)", stateId: "gj", dx: 20, dy: -30, color: "#111827" },
    { t: "Bengaluru (IT)", stateId: "ka", dx: 20, dy: -20, color: "#111827" },
    { t: "Chennai (autos)", stateId: "tn", dx: 20, dy: -40, color: "#111827" },
    { t: "Coimbatore (textiles)", stateId: "tn", dx: -30, dy: 10, color: "#111827" },
  ],
});
writeIndia("indian-climate-zones-map", {
  fillMode: "highlight",
  highlightIds: ALL_IDS,
  highlightColor: "#eef3ea",
  markers: [
    { t: "Arid (Thar)", x: 60, y: 240, s: 5.5 },
    { t: "Humid subtropical (N plains)", x: 260, y: 190, s: 5.5 },
    { t: "Tropical wet & dry (Deccan)", x: 230, y: 400, s: 5.5 },
    { t: "Tropical wet (W coast)", x: 130, y: 530, s: 5.5 },
    { t: "Alpine (Himalayas)", x: 300, y: 40, s: 5.5 },
  ],
});
writeIndia("indian-soil-types-map", {
  fillMode: "highlight",
  highlightIds: ALL_IDS,
  highlightColor: "#eef3ea",
  stateMarkers: [
    { t: "Alluvial (plains)", stateId: "up", color: "#7c2d12" },
    { t: "Black / Regur (Deccan)", stateId: "mh", dx: 30, color: "#7c2d12" },
    { t: "Red (SE peninsula)", stateId: "ap", dy: -20, color: "#7c2d12" },
    { t: "Laterite (Ghats)", stateId: "kl", dy: 10, color: "#7c2d12" },
    { t: "Desert (Rajasthan)", stateId: "rj", dx: -40, dy: 20, color: "#7c2d12" },
    { t: "Mountain (Himalayas)", stateId: "jk", dx: 100, dy: 40, color: "#7c2d12" },
  ],
});
writeIndia("indian-historical-places-map", {
  fillMode: "highlight",
  highlightIds: ALL_IDS,
  highlightColor: "#eef3ea",
  stateMarkers: [
    { t: "Taj Mahal (Agra)", stateId: "up", dx: -50, dy: 30, color: "#b45309" },
    { t: "Red Fort / Qutub Minar", stateId: "dl", dx: 40, dy: -10, color: "#b45309" },
    { t: "Hawa Mahal (Jaipur)", stateId: "rj", dx: 50, dy: 10, color: "#b45309" },
    { t: "Ajanta & Ellora", stateId: "mh", dx: 30, dy: -20, color: "#b45309" },
    { t: "Khajuraho", stateId: "mp", dx: 40, dy: -20, color: "#b45309" },
    { t: "Sanchi Stupa", stateId: "mp", dx: -50, dy: 10, color: "#b45309" },
    { t: "Konark Sun Temple", stateId: "or", dx: 30, dy: -10, color: "#b45309" },
    { t: "Hampi", stateId: "ka", dx: 20, dy: 10, color: "#b45309" },
    { t: "Mahabalipuram", stateId: "tn", dx: 30, dy: -20, color: "#b45309" },
    { t: "Golden Temple (Amritsar)", stateId: "pb", dx: -10, dy: -20, color: "#b45309" },
    { t: "Gateway of India (Mumbai)", stateId: "mh", dx: -30, dy: 40, color: "#b45309" },
  ],
});

// ══════════════════════════════════════════════════════════════════════════
//  HISTORY
// ══════════════════════════════════════════════════════════════════════════
writeUsMap("thirteen-colonies-map", {
  abbr: false,
  overlay: { markers: F.COLONY_SITES, labelSize: 6, markerColor: "#7c2d12" },
  extraLabels: [{ t: "ATLANTIC OCEAN", x: UW - 60, y: UH * 0.55, s: 7 }],
});
writeCrop("ancient-egypt-map", 380, 520, ["Egypt", "Sudan", "S. Sudan", "Libya", "Israel", "Jordan", "Saudi Arabia"], {
  label: ["Egypt", "Sudan", "Libya"],
  labelSize: 6.5,
  overlay: { lines: { Nile: F.WORLD_RIVERS.Nile }, markers: F.EGYPT_SITES, labelSize: 5.5, lineColor: "#1d4ed8", markerColor: "#b45309" },
  note: "Modern borders shown for reference.",
});
writeCrop("ancient-greece-map", 520, 440, ["Greece", "Turkey", "Albania", "Macedonia", "Bulgaria", "Italy"], {
  label: ["Greece", "Turkey", "Italy"],
  labelSize: 6.5,
  overlay: { markers: F.GREECE_SITES, labelSize: 5.5, markerColor: "#7c2d12" },
  extraLabels: [{ t: "AEGEAN SEA", x: 300, y: 230, s: 7 }, { t: "IONIAN SEA", x: 120, y: 300, s: 6.5 }],
  note: "Modern borders shown for reference.",
});
{
  const romeCountries = [
    ...["Portugal", "Spain", "France", "Italy", "United Kingdom", "Germany", "Switzerland", "Austria", "Greece", "Bulgaria", "Romania", "Croatia", "Serbia", "Bosnia and Herz.", "Albania", "Macedonia", "Hungary", "Slovenia"],
    ...["Morocco", "Algeria", "Tunisia", "Libya", "Egypt"],
    ...["Turkey", "Syria", "Lebanon", "Israel", "Jordan", "Cyprus"],
  ];
  writeCrop("roman-empire-map", 640, 440, romeCountries, {
    regionColors: Object.fromEntries(romeCountries.map((n) => [n, "#e0c9a6"])),
    label: [],
    overlay: { markers: F.ROME_SITES, labelSize: 6, markerColor: "#7c2d12" },
    extraLabels: [{ t: "MEDITERRANEAN SEA", x: 320, y: 300, s: 8, b: true }, { t: "ROMAN EMPIRE (c. 117 CE)", x: 320, y: 24, s: 8, b: true }],
    note: "Shaded = approx. extent at its height. Modern borders shown.",
  });
}
writeCrop("indus-valley-civilization-map", 440, 500, ["India", "Pakistan", "Afghanistan", "China"], {
  highlight: ["Pakistan", "India"],
  label: ["Pakistan", "India", "Afghanistan"],
  labelSize: 6.5,
  overlay: { lines: { Indus: F.WORLD_RIVERS.Indus }, markers: F.INDUS_SITES, labelSize: 5.5, lineColor: "#1d4ed8", markerColor: "#b45309" },
  note: "Modern borders shown for reference.",
});

const unmapped = worldFC.features.map((f: unknown) => nm(f as never)).filter((n: string) => n && !CONTINENT_OF[n] && n !== "Antarctica" && n !== "Fr. S. Antarctic Lands");
const total = readdirSync(OUT).filter((f) => f.endsWith(".svg")).length;
console.log(`generated ${total} reference SVGs → public/maps/reference/`);
if (unmapped.length) console.log(`  unmapped continents: ${unmapped.join(", ")}`);
