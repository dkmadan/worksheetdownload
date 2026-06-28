# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

```bash
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build (also runs TypeScript check)
npm run lint     # run ESLint
```

## Architecture

**KidsWorksheets** — a static Next.js site for viewing and downloading printable PDF worksheets (K–5).

### Stack
- Next.js 16 App Router, React 19, TypeScript 5 strict
- Tailwind CSS v4 — configured via `@theme inline` in `src/app/globals.css` (no `tailwind.config.js`)
- All pages are statically pre-rendered at build time; no server runtime

### Data layer
All worksheet data lives in `src/lib/data.ts` as a plain TypeScript array.  
Types are in `src/lib/types.ts` (`Subject`, `Grade`, `Worksheet` etc.).  
To add real PDFs: place files in `public/worksheets/pdfs/` and update the `pdfUrl` field in each entry.

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
