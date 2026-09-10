/*
 * Generates public/maps/reference/<slug>.svg from public-domain geodata:
 *   Natural Earth 1:110m (npm world-atlas) + US Census (npm us-atlas).
 * Run:  npm run generate-map-refs
 */
import { writeFileSync, mkdirSync } from "fs";
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
    label?: string[];
    labelSize?: number;
    extraLabels?: Label[];
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
    const fill = o.fill ?? (hi ? (strong ? "#8fbf9a" : "#eef1f4") : PASTELS[i % PASTELS.length]);
    paths.push(`<path d="${roundPath(d)}" fill="${fill}" stroke="#5b6b7a" stroke-width="0.45"/>`);
    if (wantLabel.has(name)) {
      const c = path.centroid(f as never) as [number, number];
      if (Number.isFinite(c[0]) && Number.isFinite(c[1])) labels.push({ t: shortName(name), x: c[0], y: c[1], s: o.labelSize ?? 7 });
    }
  });
  if (o.extraLabels) labels.push(...o.extraLabels);
  if (o.note) labels.push({ t: o.note, x: w / 2, y: h - 8, s: 6 });
  writeFileSync(join(OUT, `${slug}.svg`), svgDoc(w, h, "#dbeafe", paths.join("\n") + "\n" + labelsSvg(labels)));
}

const countriesIn = (c: Continent) => Object.keys(CONTINENT_OF).filter((n) => CONTINENT_OF[n] === c);

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

const unmapped = worldFC.features.map((f: unknown) => nm(f as never)).filter((n: string) => n && !CONTINENT_OF[n] && n !== "Antarctica" && n !== "Fr. S. Antarctic Lands");
console.log(`generated 17 reference SVGs → public/maps/reference/`);
if (unmapped.length) console.log(`  unmapped: ${unmapped.join(", ")}`);
