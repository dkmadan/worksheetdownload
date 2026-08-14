import Link from "next/link";
import type { Metadata } from "next";
import { TECH_DATA } from "@/lib/technologies";
import { GRADES_CURRICULUM, SUBJECTS_META } from "@/lib/curriculum";

export const metadata: Metadata = {
  title: "About WorksheetDownload — Free K–8 Worksheets & 647 Tech Cheat Sheets",
  description:
    "WorksheetDownload is a free learning platform covering K–8 printable worksheets across all grades and subjects, plus 647 developer cheat sheets spanning 37 tech categories from AI to Cloud.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About WorksheetDownload | Free K–8 Worksheets & Tech Cheat Sheets",
    description:
      "Free printable worksheets for K–8 and 647 developer cheat sheets across 37 tech categories. No sign-up. Free forever.",
    url: "/about",
    type: "website",
  },
};

export default function AboutPage() {
  const subjects = Object.values(SUBJECTS_META);
  const totalTechItems = TECH_DATA.reduce(
    (n, cat) => n + cat.subcategories.reduce((m, sub) => m + sub.items.length, 0),
    0
  );

  return (
    <div className="bg-white">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-xs font-bold text-indigo-400 uppercase tracking-widest mb-3">
            About Us
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            One Platform for Every Learner
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            WorksheetDownload is a free learning hub — printable practice sheets
            for children in Kindergarten through Grade 8, and developer cheat
            sheets for 647 technologies. No sign-up. No paywall. Free forever.
          </p>
        </div>
      </div>

      {/* ── Stats bar ────────────────────────────────────────────────── */}
      <div className="border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { value: "3,000+", label: "Practice Sheets" },
            { value: totalTechItems + "+", label: "Tech Resources" },
            { value: "9",      label: "Grade Levels" },
            { value: "37",     label: "Tech Categories" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-black text-indigo-600">{s.value}</p>
              <p className="text-sm text-slate-500 mt-1 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 space-y-16">

        {/* ── Mission ──────────────────────────────────────────────────── */}
        <section className="max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            We believe quality learning resources should be accessible to everyone.
            Whether you&apos;re a parent helping your child build foundational skills,
            a teacher looking for ready-to-print practice sheets, or a developer
            preparing for a technical interview — WorksheetDownload has you covered,
            completely free of charge.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Every resource on this site can be viewed in-browser and downloaded as a
            PDF instantly. No account required, no ads cluttering the page, no
            subscription fees — ever.
          </p>
        </section>

        {/* ── K-8 Curriculum ───────────────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">📚</span>
            <div>
              <span className="text-xs font-bold text-pink-500 uppercase tracking-widest block mb-0.5">K–8 Education</span>
              <h2 className="text-2xl font-bold text-slate-900">Printable Worksheets by Grade & Subject</h2>
            </div>
          </div>
          <p className="text-slate-600 mb-8 max-w-2xl">
            Practice sheets organised by grade level and subject. Each topic has 4
            unique worksheets with an answer key — perfect for classroom use or
            at-home revision.
          </p>

          {/* Grades grid */}
          <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-3">All Grade Levels</h3>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-10">
            {GRADES_CURRICULUM.map((grade) => (
              <Link
                key={grade.id}
                href={`/grades/${grade.id}`}
                className="group flex flex-col items-center gap-1.5 bg-slate-50 hover:bg-pink-50 border border-slate-200 hover:border-pink-300 rounded-xl p-3 text-center transition-all"
              >
                <span className="text-2xl">{grade.emoji}</span>
                <span className="text-xs font-bold text-slate-700 group-hover:text-pink-600 leading-tight">{grade.label}</span>
                <span className="text-[10px] text-slate-400">{grade.ageRange}</span>
              </Link>
            ))}
          </div>

          {/* Subjects grid */}
          <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-3">Subjects Covered</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {subjects.map((sub) => (
              <Link
                key={sub.id}
                href={`/subjects/${sub.id}`}
                className="group flex items-center gap-3 bg-slate-50 hover:bg-pink-50 border border-slate-200 hover:border-pink-300 rounded-xl px-4 py-3 transition-all"
              >
                <span className="text-xl flex-shrink-0">{sub.emoji}</span>
                <span className="text-sm font-semibold text-slate-700 group-hover:text-pink-600 leading-snug">{sub.label}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Tech Resources ───────────────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">💻</span>
            <div>
              <span className="text-xs font-bold text-indigo-500 uppercase tracking-widest block mb-0.5">Developer Resources</span>
              <h2 className="text-2xl font-bold text-slate-900">Tech Cheat Sheets & Interview Prep</h2>
            </div>
          </div>
          <p className="text-slate-600 mb-8 max-w-2xl">
            Free PDF cheat sheets for {totalTechItems}+ technologies across {TECH_DATA.length} categories.
            Each page includes a quick-reference cheat sheet, practice worksheet, and
            interview question sheet — ideal for developers at any level.
          </p>

          {/* Tech category grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {TECH_DATA.map((cat) => {
              const count = cat.subcategories.reduce((n, sub) => n + sub.items.length, 0);
              return (
                <Link
                  key={cat.slug}
                  href={`/technologies/${cat.slug}`}
                  className="group flex items-center gap-3 bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-300 rounded-xl px-4 py-3 transition-all"
                >
                  <span className="text-xl flex-shrink-0">{cat.icon}</span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-700 group-hover:text-indigo-600 leading-snug truncate">{cat.label}</p>
                    <p className="text-[11px] text-slate-400">{count} resources</p>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-6">
            <Link
              href="/technologies"
              className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold text-sm transition-colors"
            >
              Browse all {TECH_DATA.length} technology categories →
            </Link>
          </div>
        </section>

        {/* ── How to use ───────────────────────────────────────────────── */}
        <section className="bg-slate-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">How to Use This Site</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-pink-600 text-sm uppercase tracking-wider mb-3">For K–8 Worksheets</h3>
              <ol className="space-y-3 text-slate-600 text-sm">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center text-xs font-bold">1</span>
                  <span>Browse by <Link href="/grades" className="text-pink-600 font-medium hover:underline">Grade</Link> or <Link href="/subjects" className="text-pink-600 font-medium hover:underline">Subject</Link> from the navbar.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center text-xs font-bold">2</span>
                  <span>Select a topic to see 4 unique practice sheets with answer keys.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center text-xs font-bold">3</span>
                  <span>Click <strong>View</strong> to preview or <strong>Download</strong> to save the PDF.</span>
                </li>
              </ol>
            </div>
            <div>
              <h3 className="font-bold text-indigo-600 text-sm uppercase tracking-wider mb-3">For Tech Cheat Sheets</h3>
              <ol className="space-y-3 text-slate-600 text-sm">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-xs font-bold">1</span>
                  <span>Go to <Link href="/technologies" className="text-indigo-600 font-medium hover:underline">Technologies</Link> and pick a category (e.g. Backend, Cloud, AI/ML).</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-xs font-bold">2</span>
                  <span>Select a technology to open its resource page.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-xs font-bold">3</span>
                  <span>Download the cheat sheet, practice worksheet, or interview prep PDF.</span>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section className="text-center pb-4">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Start Exploring</h2>
          <p className="text-slate-500 mb-6">Everything is free. No account needed.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/grades"
              className="bg-pink-500 hover:bg-pink-400 text-white font-semibold px-7 py-3 rounded-full transition-colors shadow-md shadow-pink-200"
            >
              Browse K–8 Worksheets
            </Link>
            <Link
              href="/technologies"
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-7 py-3 rounded-full transition-colors shadow-md shadow-indigo-200"
            >
              Tech Cheat Sheets
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
