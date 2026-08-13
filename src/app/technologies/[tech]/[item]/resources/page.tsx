import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { TECH_DATA, findTechItem } from "@/lib/technologies";
import TechResourceTile from "@/components/tech/TechResourceTile";

const PLACEHOLDER_PDF = "/worksheets/pdfs/Class5_LCM_Worksheet.pdf";

export function generateStaticParams() {
  const params: { tech: string; item: string }[] = [];
  for (const cat of TECH_DATA) {
    for (const sub of cat.subcategories) {
      for (const it of sub.items) {
        params.push({ tech: cat.slug, item: it.slug });
      }
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tech: string; item: string }>;
}): Promise<Metadata> {
  const { tech, item } = await params;
  const found = findTechItem(tech, item);
  if (!found) return {};
  const { category: cat, item: techItem } = found;
  return {
    title: `${techItem.name} — Worksheets, Cheatsheet & Interview Sheet`,
    description: `Free ${techItem.name} practice worksheet, cheatsheet, and interview prep sheet. Download structured learning resources for ${cat.label}.`,
    alternates: { canonical: `/technologies/${tech}/${item}/resources` },
    openGraph: {
      title: `${techItem.name} Learning Resources | WorksheetDownload`,
      description: `Download ${techItem.name} worksheets, cheatsheet, and interview sheet — free structured resources for ${cat.label}.`,
      url: `/technologies/${tech}/${item}/resources`,
    },
  };
}

export default async function TechResourcesPage({
  params,
}: {
  params: Promise<{ tech: string; item: string }>;
}) {
  const { tech, item } = await params;
  const found = findTechItem(tech, item);
  if (!found) notFound();

  const { category: cat, subcategory: sub, item: techItem } = found;

  const slug = techItem.slug;

  const resources = [
    {
      type: "worksheet",
      icon: "📝",
      label: "Practice Worksheet",
      description: `Structured exercises and problems to build hands-on ${techItem.name} skills. Work through key concepts step by step.`,
      pdfUrl: PLACEHOLDER_PDF,
      filename: `${slug}-practice-worksheet.pdf`,
    },
    {
      type: "cheatsheet",
      icon: "📋",
      label: "Cheatsheet",
      description: `One-page quick-reference for ${techItem.name} — key syntax, commands, patterns, and best practices at a glance.`,
      pdfUrl: `/worksheets/pdfs/${slug}-cheatsheet.pdf`,
      filename: `${slug}-cheatsheet.pdf`,
    },
    {
      type: "interview",
      icon: "🎯",
      label: "Interview Sheet",
      description: `Top ${techItem.name} interview questions with concise answers. Get ready for any technical round with this focused prep sheet.`,
      pdfUrl: `/worksheets/pdfs/${slug}-interview-sheet.pdf`,
      filename: `${slug}-interview-sheet.pdf`,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">

      {/* ── Hero ── */}
      <div className={`bg-gradient-to-r ${cat.color}`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
          <nav className="flex items-center gap-1.5 text-xs text-white/50 mb-5 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link href="/technologies" className="hover:text-white transition-colors">Technologies</Link>
            <span>›</span>
            <Link href={`/technologies/${tech}`} className="hover:text-white transition-colors">{cat.label}</Link>
            <span>›</span>
            <Link href={`/technologies/${tech}/${item}`} className="hover:text-white transition-colors">{techItem.name}</Link>
            <span>›</span>
            <span className="text-white font-medium">Worksheets</span>
          </nav>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">{cat.icon}</span>
            </div>
            <div>
              <p className="text-white/60 text-sm font-medium mb-1">
                {cat.label} · {sub.name}
              </p>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                {techItem.name} — Learning Resources
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* ── Tiles ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <p className="text-gray-400 text-base text-center mb-10 max-w-xl mx-auto">
          Free, printable resources for{" "}
          <strong className="text-white">{techItem.name}</strong> — practice problems,
          quick-reference cheatsheet, and an interview prep sheet.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resources.map((r) => (
            <TechResourceTile
              key={r.type}
              type={r.type}
              icon={r.icon}
              label={r.label}
              description={r.description}
              pdfUrl={r.pdfUrl}
              techName={techItem.name}
              filename={r.filename}
            />
          ))}
        </div>

        {/* Back */}
        <div className="mt-10 flex justify-center">
          <Link
            href={`/technologies/${tech}/${item}`}
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-200 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to {techItem.name}
          </Link>
        </div>
      </div>
    </div>
  );
}
