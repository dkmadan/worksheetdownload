# Reference map images

One SVG per "Main Map" (`core` category on `/maps`). When present, the file is:

- shown on the worksheet page (`/maps/<slug>`) in place of the "map area" box
- rasterised client-side and appended as the final **"Reference Map"** page of
  that worksheet's PDF

Missing files degrade gracefully (no error).

## Generated

The 80 `*.svg` files here are **auto-generated** by:

```
npm run generate-map-refs
```

Source data:

- **Natural Earth 1:110m** country & coastline polygons — via the `world-atlas`
  npm package (public domain, no attribution required)
- **US Census** cartographic state boundaries — via the `us-atlas` npm package
  (public domain, no attribution required)
- **India state/UT boundaries** — via the `@svg-maps/india` npm package, a
  hand-traced outline map. **Licensed CC BY 4.0** — attribution required:
  "India map by [SVG Maps](https://github.com/VictorCazanave/svg-maps),
  licensed under CC BY 4.0." This dataset predates the August 2019
  reorganisation, so Jammu & Kashmir is shown as one undivided region
  (Ladakh is not split out); every India-related reference map says so
  on-page. All 18 `india.ts` maps plus `india-map.svg` and
  `states-of-india-map.svg` from `core.ts` use this source, composed by
  `scripts/lib/india-map.ts`.

Edit `scripts/generate-map-references.ts` (+ `scripts/lib/continents.ts`,
`scripts/lib/us-states.ts`, `scripts/lib/india-map.ts`) and re-run to change them.

`australia-map.svg` is **country outline only** — Natural Earth 1:110m has no
internal (admin-1) boundaries there, so the states are not drawn. It carries
an on-map note saying so.

## Overriding one by hand

Drop a `PNG` or `JPG` with the same base name (e.g. `world-map.png`) and change
that map's `referenceImage` in `src/lib/maps/data/core.ts` to the new filename.
Landscape, ~1600×1000+, correct labels, < ~400 KB.
