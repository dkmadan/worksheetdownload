import type { CheatSheetSpec } from "../tech-pdf-builder";
import { javaBackend } from "./backend-java";
import { pythonBackend } from "./backend-python";
import { nodeBackend } from "./backend-node";
import { dotnetGoPhpRuby } from "./backend-dotnet-go-php-ruby";

// Map from slug → specific CheatSheetSpec (overrides generic generator)
export const SPECIFIC_SHEETS: Map<string, CheatSheetSpec> = new Map([
  ...javaBackend,
  ...pythonBackend,
  ...nodeBackend,
  ...dotnetGoPhpRuby,
].map(s => {
  // Derive slug the same way slugifyTech does
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
}));
