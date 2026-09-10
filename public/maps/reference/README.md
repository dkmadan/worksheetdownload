# Reference map images

One SVG per "Main Map" (`core` category on `/maps`). When present, the file is:

- shown on the worksheet page (`/maps/<slug>`) in place of the "map area" box
- rasterised client-side and appended as the final **"Reference Map"** page of
  that worksheet's PDF

Missing files degrade gracefully (no error).

## Generated

The 17 `*.svg` files here are **auto-generated** by:

```
npm run generate-map-refs
```

Source data (both public domain, no attribution required):

- **Natural Earth 1:110m** country & coastline polygons — via the `world-atlas`
  npm package
- **US Census** cartographic state boundaries — via the `us-atlas` npm package

Edit `scripts/generate-map-references.ts` (+ `scripts/lib/continents.ts`,
`scripts/lib/us-states.ts`) and re-run to change them.

`states-of-india-map.svg` and `australia-map.svg` are **country outline only** —
Natural Earth 1:110m has no internal (admin-1) boundaries, so the states are not
drawn. Each carries an on-map note saying so.

## Overriding one by hand

Drop a `PNG` or `JPG` with the same base name (e.g. `world-map.png`) and change
that map's `referenceImage` in `src/lib/maps/data/core.ts` to the new filename.
Landscape, ~1600×1000+, correct labels, < ~400 KB.
