import type { InterviewSheetSpec } from "../interview-pdf-builder";
import { specificInterviews } from "./specific";

// Map slug → InterviewSheetSpec for all 32 specifically curated technologies
export const SPECIFIC_INTERVIEWS: Map<string, InterviewSheetSpec> = new Map(
  specificInterviews.map(s => {
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
