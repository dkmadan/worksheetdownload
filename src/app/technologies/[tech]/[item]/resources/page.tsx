import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { TECH_DATA, findTechItem } from "@/lib/technologies";
import { getTechPageContent } from "@/lib/tech-content";
import TechResourceTile from "@/components/tech/TechResourceTile";

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
    title: `${techItem.name} Cheat Sheet PDF — Free Download | WorksheetDownload`,
    description: `Free ${techItem.name} cheat sheet, interview questions, and practice worksheet PDFs. Download structured ${cat.label} learning resources — no sign-up required.`,
    alternates: { canonical: `/technologies/${tech}/${item}/resources` },
    openGraph: {
      title: `${techItem.name} Cheat Sheet & Interview Questions PDF | WorksheetDownload`,
      description: `Download free ${techItem.name} PDFs: cheat sheet, 10 interview questions, and practice worksheet. Covers core ${cat.label} concepts.`,
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

  const content = getTechPageContent(slug, techItem.name, cat.slug, cat.label);

  const resources = [
    {
      type: "worksheet",
      icon: "📝",
      label: "Practice Worksheet",
      description: `Structured exercises and problems to build hands-on ${techItem.name} skills. Work through key concepts step by step.`,
      pdfUrl: `https://cdn.worksheetdownload.com/pdfs/${slug}-practice-worksheet.pdf`,
      filename: `${slug}-practice-worksheet.pdf`,
    },
    {
      type: "cheatsheet",
      icon: "📋",
      label: "Cheatsheet",
      description: `One-page quick-reference for ${techItem.name} — key syntax, commands, patterns, and best practices at a glance.`,
      pdfUrl: `https://cdn.worksheetdownload.com/pdfs/${slug}-cheatsheet.pdf`,
      filename: `${slug}-cheatsheet.pdf`,
    },
    {
      type: "interview",
      icon: "🎯",
      label: "Interview Sheet",
      description: `Top ${techItem.name} interview questions with concise answers. Get ready for any technical round with this focused prep sheet.`,
      pdfUrl: `https://cdn.worksheetdownload.com/pdfs/${slug}-interview-sheet.pdf`,
      filename: `${slug}-interview-sheet.pdf`,
    },
  ];

  // Related items in the same subcategory (for internal linking)
  const relatedItems = sub.items
    .filter((it) => it.slug !== techItem.slug)
    .slice(0, 5);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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
            <span className="text-white font-medium">Resources</span>
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
                {techItem.name} — Free Learning Resources
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* ── Resource Tiles ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-4">
        <p className="text-gray-400 text-base text-center mb-10 max-w-xl mx-auto">
          Free, printable resources for{" "}
          <strong className="text-white">{techItem.name}</strong> — practice problems,
          quick-reference cheatsheet, and an interview prep sheet. No sign-up required.
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
      </div>

      {/* ── Rich Content Section ── */}
      <div className="border-t border-gray-800/60 mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* ── Main column ── */}
            <div className="lg:col-span-2 space-y-12">

              {/* Overview */}
              <div>
                <h2 className="text-xl font-bold text-white mb-3">
                  About {techItem.name}
                </h2>
                <p className="text-gray-300 leading-relaxed text-[15px]">
                  {content.overview}
                </p>
              </div>

              {/* What's covered */}
              <div>
                <h2 className="text-xl font-bold text-white mb-4">
                  {techItem.name} Cheat Sheet — What&apos;s Covered
                </h2>
                <ul className="space-y-3">
                  {content.whatsCovered.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300 text-[15px]">
                      <span className="text-emerald-400 mt-0.5 flex-shrink-0 font-bold text-sm">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQ */}
              <div>
                <h2 className="text-xl font-bold text-white mb-5">
                  Frequently Asked Questions — {techItem.name}
                </h2>
                <div className="space-y-4">
                  {content.faqs.map((faq, i) => (
                    <div
                      key={i}
                      className="bg-gray-800/50 rounded-xl p-5 border border-gray-700/50"
                    >
                      <h3 className="font-semibold text-white text-[15px] mb-2">
                        {faq.q}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Sidebar ── */}
            <div className="space-y-5">

              {/* Who is this for */}
              <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700/50">
                <h3 className="font-bold text-white mb-3 text-xs uppercase tracking-widest">
                  Who Is This For?
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {content.whoIsItFor}
                </p>
              </div>

              {/* Resource details */}
              <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700/50">
                <h3 className="font-bold text-white mb-4 text-xs uppercase tracking-widest">
                  Resource Details
                </h3>
                <div className="space-y-3 text-sm">
                  {(
                    [
                      ["Format", "PDF, Printable"],
                      ["Cheat Sheet", "1 page, landscape"],
                      ["Interview Sheet", "10 questions + answer lines"],
                      ["Practice Sheet", "10 Q&A pairs with answers"],
                      ["Price", "Free"],
                    ] as [string, string][]
                  ).map(([label, value]) => (
                    <div key={label} className="flex justify-between gap-2">
                      <span className="text-gray-400">{label}</span>
                      <span
                        className={`font-medium ${
                          label === "Price" ? "text-emerald-400" : "text-white"
                        }`}
                      >
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related in same subcategory */}
              {relatedItems.length > 0 && (
                <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700/50">
                  <h3 className="font-bold text-white mb-3 text-xs uppercase tracking-widest">
                    Related in {sub.name}
                  </h3>
                  <div className="space-y-2">
                    {relatedItems.map((rel) => (
                      <Link
                        key={rel.slug}
                        href={`/technologies/${tech}/${rel.slug}/resources`}
                        className="block text-sm text-gray-400 hover:text-white transition-colors py-0.5"
                      >
                        → {rel.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Back link */}
              <Link
                href={`/technologies/${tech}/${item}`}
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-200 transition-colors pt-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to {techItem.name}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
