# Reference map images

Drop a map image here for each of the 17 "Main Maps" (`core` category) on
`/maps`. When a file exists it is:

- shown on the worksheet page (`/maps/<slug>`) in place of the "map area" box
- appended as the final **"Reference Map"** page of that worksheet's PDF

If a file is missing, the page/PDF fall back gracefully (no error).

## Filenames (exactly these — one per slug)

| File | Worksheet |
|---|---|
| `world-map.png` | World Map |
| `continents-map.png` | Continents Map |
| `oceans-map.png` | Oceans Map |
| `continents-and-oceans-map.png` | Continents & Oceans |
| `country-identification-map.png` | Country Identification Map |
| `united-states-map.png` | United States Map |
| `us-states-and-capitals-map.png` | US States & Capitals |
| `india-map.png` | India Map |
| `states-of-india-map.png` | States of India Map |
| `europe-map.png` | Europe Map |
| `asia-map.png` | Asia Map |
| `africa-map.png` | Africa Map |
| `north-america-map.png` | North America Map |
| `south-america-map.png` | South America Map |
| `australia-map.png` | Australia Map |
| `antarctica-map.png` | Antarctica Map |
| `blank-world-map.png` | Blank World Map |

## Requirements

- **PNG or JPG.** (Header-sniffed; extension in the filename must still be `.png`
  — or change `referenceImage` in `src/lib/maps/data/core.ts` to `.jpg`.)
- Landscape, roughly **1600×1000 px** or larger. It is scaled to fit an A4
  content box, so bigger = crisper print.
- **Accurate labels.** These go on children's worksheets — country/state/ocean
  names and shapes must be correct. Do not commit maps with garbled or
  invented labels.
- Keep file size reasonable (< ~400 KB each) so client-side PDF generation
  stays fast.
