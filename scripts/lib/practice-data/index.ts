import type { PracticeSheetSpec } from "../practice-pdf-builder";
import { specificPractice } from "./specific";

export const SPECIFIC_PRACTICE: Map<string, PracticeSheetSpec> = new Map(
  specificPractice.map(s => {
    const slug = s.name
      .toLowerCase()
      .replace(/\+\+/g, "pp")
      .replace(/#/g, "sharp")
      .replace(/[./&]/g, "-")
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
    return [slug, s];
  })
);
