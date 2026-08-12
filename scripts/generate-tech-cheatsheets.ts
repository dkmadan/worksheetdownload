#!/usr/bin/env tsx
/**
 * Generates technology cheat sheet PDFs for all items in TECH_DATA.
 * - Uses specific, detailed content for the 32 provided backend frameworks.
 * - Uses category-aware generic content for all other technologies.
 * - Idempotent: skips files that already exist (pass --force to regenerate).
 *
 * Usage:
 *   npm run generate-tech-cheatsheets
 *   npm run generate-tech-cheatsheets -- --force
 *   npm run generate-tech-cheatsheets -- --slug spring-boot (single tech)
 */

import { writeFileSync, existsSync, mkdirSync } from "fs";
import { join } from "path";
import { buildCheatSheetPdf } from "./lib/tech-pdf-builder";
import { SPECIFIC_SHEETS } from "./lib/cheatsheet-data/index";
import { generateGenericCheatSheet } from "./lib/cheatsheet-data/generic-generator";
import { TECH_DATA } from "../src/lib/technologies";

const OUT_DIR = join(process.cwd(), "public", "worksheets", "pdfs");
const FORCE = process.argv.includes("--force");
const SLUG_FILTER = (() => {
  const idx = process.argv.indexOf("--slug");
  return idx !== -1 ? process.argv[idx + 1] : null;
})();

async function main() {
  mkdirSync(OUT_DIR, { recursive: true });

  // Collect all tech items across all categories
  const items: { name: string; slug: string; categorySlug: string; categoryLabel: string }[] = [];
  const seen = new Set<string>();

  for (const cat of TECH_DATA) {
    for (const sub of cat.subcategories) {
      for (const item of sub.items) {
        if (seen.has(item.slug)) continue; // skip duplicates across categories
        seen.add(item.slug);

        if (SLUG_FILTER && item.slug !== SLUG_FILTER) continue;

        items.push({
          name: item.name,
          slug: item.slug,
          categorySlug: cat.slug,
          categoryLabel: cat.label,
        });
      }
    }
  }

  console.log(`\nGenerating ${items.length} tech cheat sheet PDFs…`);
  console.log(`Output dir: ${OUT_DIR}\n`);

  let done = 0, skipped = 0, failed = 0;

  for (const { name, slug, categorySlug, categoryLabel } of items) {
    const outPath = join(OUT_DIR, `${slug}-cheatsheet.pdf`);

    if (!FORCE && existsSync(outPath)) {
      console.log(`[skip] ${slug}-cheatsheet.pdf`);
      skipped++;
      continue;
    }

    try {
      // Prefer specific curated content, fall back to generic generator
      const spec = SPECIFIC_SHEETS.get(slug)
        ?? generateGenericCheatSheet(name, slug, categorySlug, categoryLabel);

      const bytes = await buildCheatSheetPdf(spec);
      writeFileSync(outPath, bytes);
      console.log(`[done] ${slug}-cheatsheet.pdf`);
      done++;
    } catch (err) {
      console.error(`[fail] ${slug}-cheatsheet.pdf: ${err}`);
      failed++;
    }
  }

  console.log(`\n✅ Done: ${done} generated, ${skipped} skipped, ${failed} failed`);
}

main().catch(err => {
  console.error("Fatal:", err);
  process.exit(1);
});
