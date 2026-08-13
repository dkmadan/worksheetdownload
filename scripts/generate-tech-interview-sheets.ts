#!/usr/bin/env tsx
/**
 * Generates technology interview sheet PDFs for all items in TECH_DATA.
 * - Specific 10-question content for 32 backend framework technologies.
 * - Category-aware generic questions for all other ~546 technologies.
 * - Idempotent: skips existing files unless --force is passed.
 *
 * Usage:
 *   npm run generate-tech-interviews
 *   npm run generate-tech-interviews -- --force
 *   npm run generate-tech-interviews -- --slug spring-boot
 */

import { writeFileSync, existsSync, mkdirSync } from "fs";
import { join } from "path";
import { buildInterviewSheetPdf } from "./lib/interview-pdf-builder";
import { SPECIFIC_INTERVIEWS } from "./lib/interview-data/index";
import { generateGenericInterviewSheet } from "./lib/interview-data/generic-generator";
import { TECH_DATA } from "../src/lib/technologies";

const OUT_DIR = join(process.cwd(), "public", "worksheets", "pdfs");
const FORCE = process.argv.includes("--force");
const SLUG_FILTER = (() => {
  const idx = process.argv.indexOf("--slug");
  return idx !== -1 ? process.argv[idx + 1] : null;
})();

async function main() {
  mkdirSync(OUT_DIR, { recursive: true });

  const items: { name: string; slug: string; categorySlug: string; categoryLabel: string }[] = [];
  const seen = new Set<string>();

  for (const cat of TECH_DATA) {
    for (const sub of cat.subcategories) {
      for (const item of sub.items) {
        if (seen.has(item.slug)) continue;
        seen.add(item.slug);
        if (SLUG_FILTER && item.slug !== SLUG_FILTER) continue;
        items.push({ name: item.name, slug: item.slug, categorySlug: cat.slug, categoryLabel: cat.label });
      }
    }
  }

  console.log(`\nGenerating ${items.length} interview sheet PDFs…`);
  console.log(`Output dir: ${OUT_DIR}\n`);

  let done = 0, skipped = 0, failed = 0;

  for (const { name, slug, categorySlug, categoryLabel } of items) {
    const outPath = join(OUT_DIR, `${slug}-interview-sheet.pdf`);

    if (!FORCE && existsSync(outPath)) {
      console.log(`[skip] ${slug}-interview-sheet.pdf`);
      skipped++;
      continue;
    }

    try {
      const spec = SPECIFIC_INTERVIEWS.get(slug)
        ?? generateGenericInterviewSheet(name, slug, categorySlug, categoryLabel);

      const bytes = await buildInterviewSheetPdf(spec);
      writeFileSync(outPath, bytes);
      console.log(`[done] ${slug}-interview-sheet.pdf`);
      done++;
    } catch (err) {
      console.error(`[fail] ${slug}-interview-sheet.pdf: ${err}`);
      failed++;
    }
  }

  console.log(`\n Done: ${done} generated, ${skipped} skipped, ${failed} failed`);
}

main().catch(err => {
  console.error("Fatal:", err);
  process.exit(1);
});
