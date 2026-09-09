// ─────────────────────────────────────────────────────────────────────────────
// Normalised diagram specs, shared by the on-screen SVG (MapDiagram.tsx) and
// the PDF builder. All coordinates are 0..1 with the origin at the TOP-LEFT,
// so the SVG uses them directly and the PDF flips y.
// ─────────────────────────────────────────────────────────────────────────────

import type { DiagramKind } from "./types";

export interface DLine {
  /** 0..1 position (y for hlines, x for vlines) */
  at: number;
  label?: string;
  bold?: boolean;
  dashed?: boolean;
  /** which side of the line the label sits (default: start) */
  labelAt?: "start" | "end" | "center";
}

export interface DBand {
  from: number;
  to: number;
  label: string;
  /** 0..1 grey tint (0 = white) */
  tint: number;
}

export type DiagramShape = "world" | "globe-ns" | "globe-ew" | "grid" | "compass";

export interface DiagramSpec {
  shape: DiagramShape;
  caption: string;
  hlines: DLine[];
  vlines: DLine[];
  bands: DBand[];
  /** grid size for shape "grid" */
  grid?: { cols: number; rows: number };
}

/** latitude (−90..90) → normalised y (0 at +90, 1 at −90) */
const latY = (lat: number) => (90 - lat) / 180;
/** longitude (−180..180) → normalised x */
const lonX = (lon: number) => (lon + 180) / 360;

export function diagramSpec(kind: DiagramKind): DiagramSpec {
  switch (kind) {
    case "equator":
      return {
        shape: "world",
        caption: "The Equator divides Earth into the Northern and Southern Hemispheres.",
        hlines: [
          { at: latY(90), label: "North Pole 90°N", dashed: true, labelAt: "start" },
          { at: latY(0), label: "Equator 0°", bold: true },
          { at: latY(-90), label: "South Pole 90°S", dashed: true, labelAt: "start" },
        ],
        vlines: [],
        bands: [
          { from: latY(90), to: latY(0), label: "Northern Hemisphere", tint: 0.04 },
          { from: latY(0), to: latY(-90), label: "Southern Hemisphere", tint: 0.1 },
        ],
      };

    case "tropics":
      return {
        shape: "world",
        caption: "Between the tropics the Sun can be directly overhead at noon.",
        hlines: [
          { at: latY(23.5), label: "Tropic of Cancer 23.5°N", bold: true },
          { at: latY(0), label: "Equator 0°", dashed: true },
          { at: latY(-23.5), label: "Tropic of Capricorn 23.5°S", bold: true },
        ],
        vlines: [],
        bands: [{ from: latY(23.5), to: latY(-23.5), label: "Tropical Zone", tint: 0.1 }],
      };

    case "polar-circles":
      return {
        shape: "world",
        caption: "Inside the polar circles the Sun can stay up — or down — for 24 hours.",
        hlines: [
          { at: latY(90), label: "North Pole 90°N", dashed: true },
          { at: latY(66.5), label: "Arctic Circle 66.5°N", bold: true },
          { at: latY(0), label: "Equator", dashed: true },
          { at: latY(-66.5), label: "Antarctic Circle 66.5°S", bold: true },
          { at: latY(-90), label: "South Pole 90°S", dashed: true },
        ],
        vlines: [],
        bands: [
          { from: latY(90), to: latY(66.5), label: "Arctic region", tint: 0.12 },
          { from: latY(-66.5), to: latY(-90), label: "Antarctic region", tint: 0.12 },
        ],
      };

    case "climate-zones":
      return {
        shape: "world",
        caption: "Climate changes in bands with distance from the Equator.",
        hlines: [
          { at: latY(66.5), label: "Arctic Circle" },
          { at: latY(23.5), label: "Tropic of Cancer" },
          { at: latY(0), label: "Equator", dashed: true },
          { at: latY(-23.5), label: "Tropic of Capricorn" },
          { at: latY(-66.5), label: "Antarctic Circle" },
        ],
        vlines: [],
        bands: [
          { from: latY(90), to: latY(66.5), label: "Polar (Frigid)", tint: 0.16 },
          { from: latY(66.5), to: latY(23.5), label: "Temperate", tint: 0.06 },
          { from: latY(23.5), to: latY(-23.5), label: "Tropical (Torrid)", tint: 0.12 },
          { from: latY(-23.5), to: latY(-66.5), label: "Temperate", tint: 0.06 },
          { from: latY(-66.5), to: latY(-90), label: "Polar (Frigid)", tint: 0.16 },
        ],
      };

    case "latitude-longitude":
      return {
        shape: "world",
        caption: "Parallels of latitude run east–west; meridians of longitude run north–south.",
        hlines: [
          { at: latY(90), label: "90°N" },
          { at: latY(66.5), label: "66.5°N Arctic Circle" },
          { at: latY(23.5), label: "23.5°N Tropic of Cancer" },
          { at: latY(0), label: "0° Equator", bold: true },
          { at: latY(-23.5), label: "23.5°S Tropic of Capricorn" },
          { at: latY(-66.5), label: "66.5°S Antarctic Circle" },
          { at: latY(-90), label: "90°S" },
        ],
        vlines: [
          { at: lonX(-90), label: "90°W", dashed: true, labelAt: "end" },
          { at: lonX(0), label: "0° Prime Meridian", bold: true, labelAt: "end" },
          { at: lonX(90), label: "90°E", dashed: true, labelAt: "end" },
        ],
        bands: [],
      };

    case "prime-meridian":
      return {
        shape: "world",
        caption: "The Prime Meridian (0° longitude) splits Earth into the Eastern and Western Hemispheres.",
        hlines: [{ at: latY(0), label: "Equator", dashed: true }],
        vlines: [
          { at: lonX(-90), label: "90°W", dashed: true, labelAt: "end" },
          { at: lonX(0), label: "Prime Meridian 0°", bold: true, labelAt: "end" },
          { at: lonX(90), label: "90°E", dashed: true, labelAt: "end" },
        ],
        bands: [
          { from: lonX(-180), to: lonX(0), label: "Western Hemisphere", tint: 0.06 },
          { from: lonX(0), to: lonX(180), label: "Eastern Hemisphere", tint: 0.11 },
        ],
      };

    case "time-zones": {
      const vlines: DLine[] = [];
      for (let lon = -180; lon <= 180; lon += 15) {
        const bold = lon === 0 || Math.abs(lon) === 180;
        vlines.push({
          at: lonX(lon),
          bold,
          dashed: !bold,
          label:
            lon === 0
              ? "0° Prime Meridian (UTC)"
              : Math.abs(lon) === 180
                ? "180° Int'l Date Line"
                : lon % 45 === 0
                  ? `UTC${lon > 0 ? "+" : "−"}${Math.abs(lon) / 15}`
                  : undefined,
          labelAt: "end",
        });
      }
      return {
        shape: "world",
        caption: "Each 15° of longitude is roughly one hour of time.",
        hlines: [{ at: latY(0), label: "Equator", dashed: true }],
        vlines,
        bands: [],
      };
    }

    case "hemispheres-ns":
      return {
        shape: "globe-ns",
        caption: "The Equator splits north from south; the Prime Meridian splits east from west.",
        hlines: [{ at: 0.5, label: "Equator", bold: true }],
        vlines: [{ at: 0.5, label: "Prime Meridian", bold: true }],
        bands: [],
      };

    case "hemispheres-ew":
      return {
        shape: "globe-ew",
        caption: "The Prime Meridian and the 180° line divide the Eastern and Western Hemispheres.",
        hlines: [],
        vlines: [{ at: 0.5, label: "Prime Meridian", bold: true }],
        bands: [],
      };

    case "compass-rose":
      return { shape: "compass", caption: "Label the cardinal and intermediate directions.", hlines: [], vlines: [], bands: [] };

    case "grid":
    default:
      return {
        shape: "grid",
        caption: "Use the grid to give the location of each point.",
        hlines: [],
        vlines: [],
        bands: [],
        grid: { cols: 8, rows: 6 },
      };
  }
}
