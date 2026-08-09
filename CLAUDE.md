# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Next.js version warning

This project pins `next@16.2.9`, which is newer than most training data and has breaking API/convention changes vs. Next.js 13–14. Before writing App Router code (routing, data fetching, config, metadata, etc.), check the relevant guide in `node_modules/next/dist/docs/` rather than relying on prior Next.js knowledge, and heed any deprecation notices.

## Common Commands

```bash
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build (also runs TypeScript check)
npm run lint     # run ESLint
```

There is no test suite configured.

## Architecture

**KidsWorksheets** — a static Next.js site for viewing and downloading printable PDF worksheets (K–5).

### Stack
- Next.js 16 App Router, React 19, TypeScript 5 strict
- Tailwind CSS v4 — configured via `@theme inline` in `src/app/globals.css` (no `tailwind.config.js`)
- All pages are statically pre-rendered at build time; no server runtime

### Data layer
All worksheet data lives in `src/lib/data.ts` as a plain TypeScript array.  
Types are in `src/lib/types.ts` (`Subject`, `Grade`, `Worksheet` etc.).  
Every `Worksheet.pdfUrl` currently points at the same placeholder file (`WORKSHEET_TEST_PDF`, `public/worksheets/pdfs/Class5_LCM_Worksheet.pdf`) — none of the ~25 seeded worksheets have real per-worksheet PDFs yet.  
To add real PDFs: place files in `public/worksheets/pdfs/` and update the `pdfUrl` field in each entry.

Import alias `@/*` maps to `src/*` (see `tsconfig.json`).

### Component map
- `src/components/layout/` — `Navbar`, `Footer` (used in `src/app/layout.tsx`)
- `src/components/home/` — homepage sections: `HeroSection`, `SubjectSection`, `GradeSection`, `CtaSection`
- `src/components/ui/` — `SubjectCard`, `GradeCard` (reused on homepage and detail pages)
- `src/components/worksheets/` — `WorksheetGrid`, `WorksheetCard` (server), `ViewPdfButton` + `PdfModal` (`"use client"`)

### Routing
| Route | Page file |
|---|---|
| `/` | `src/app/page.tsx` |
| `/worksheets` | `src/app/worksheets/page.tsx` |
| `/worksheets/[subject]` | `src/app/worksheets/[subject]/page.tsx` |
| `/grades/[grade]` | `src/app/grades/[grade]/page.tsx` |
| `/about` | `src/app/about/page.tsx` |

Dynamic routes export `generateStaticParams` (all subjects/grades) and call `notFound()` for invalid params.

### PDF handling
`ViewPdfButton` (client component) opens `PdfModal` — an iframe overlay — for in-browser viewing.  
The Download button is a plain `<a download>` anchor. No third-party PDF library is used.
