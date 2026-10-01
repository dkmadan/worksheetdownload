import { writeFileSync, existsSync, mkdirSync } from "fs";
import { join } from "path";
import { COLORING_SHEETS } from "../src/lib/coloring";
import { buildColoringPdf } from "./coloring-pdf";

const OUT_DIR = join(process.cwd(), "public", "worksheets", "pdfs", "coloring");
if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

async function main() {
  const forceAll = process.argv.includes("--all");
  console.log(`Checking ${COLORING_SHEETS.length} coloring sheets (forceAll=${forceAll})...`);

  let generated = 0;
  let skipped = 0;

  for (let i = 0; i < COLORING_SHEETS.length; i++) {
    const sheet = COLORING_SHEETS[i];
    const outPath = join(OUT_DIR, sheet.pdfFilename);

    if (!forceAll && existsSync(outPath)) {
      skipped++;
      continue;
    }

    try {
      const pdfBytes = await buildColoringPdf(sheet);
      writeFileSync(outPath, pdfBytes);
      generated++;
      if (generated % 25 === 0 || generated === 200) {
        console.log(`Generated ${generated} PDFs... (latest: ${sheet.pdfFilename})`);
      }
    } catch (err) {
      console.error(`Error generating PDF for ${sheet.slug} (${sheet.pdfFilename}):`, err);
    }
  }

  console.log(`Finished! Generated: ${generated}, Skipped: ${skipped}, Total target: ${COLORING_SHEETS.length}`);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
