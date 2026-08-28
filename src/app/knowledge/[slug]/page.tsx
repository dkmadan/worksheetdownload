import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  KNOWLEDGE_ARTICLES,
  ACCENTS,
  getArticle,
  resolveRelatedLink,
  relatedSubjects,
} from "@/lib/knowledge";
import KnowledgeArt from "@/components/knowledge/KnowledgeArt";
import CycleRing from "@/components/knowledge/CycleRing";

export function generateStaticParams() {
  return KNOWLEDGE_ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  const description = `${article.bigIdea} ${article.intro}`.slice(0, 300);
  return {
    title: `${article.title} — Illustrated Explainer for Kids`,
    description,
    keywords: [
      article.title.toLowerCase(),
      `${article.title.toLowerCase()} for kids`,
      `${article.title.toLowerCase()} diagram`,
      `${article.title.toLowerCase()} explained`,
      ...article.cycle.map((s) => s.label.toLowerCase()),
    ],
    alternates: { canonical: `/knowledge/${article.slug}` },
    openGraph: {
      title: `${article.title} | WorksheetDownload`,
      description: article.subtitle,
      url: `/knowledge/${article.slug}`,
      type: "article",
    },
  };
}

export default async function KnowledgeArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const accent = ACCENTS[article.accent];
  const idx = KNOWLEDGE_ARTICLES.findIndex((a) => a.slug === article.slug);
  const prev = idx > 0 ? KNOWLEDGE_ARTICLES[idx - 1] : null;
  const next = idx < KNOWLEDGE_ARTICLES.length - 1 ? KNOWLEDGE_ARTICLES[idx + 1] : null;

  const related = article.related
    .map(resolveRelatedLink)
    .filter((r): r is NonNullable<typeof r> => r !== null);
  const subjects = relatedSubjects(article);

  return (
    <article className="bg-white">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <header className={`bg-gradient-to-br ${accent.gradient}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-white/75 mb-8 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link href="/knowledge" className="hover:text-white transition-colors">Knowledge</Link>
            <span>›</span>
            <span className="text-white font-semibold">{article.title}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                {article.emoji} Knowledge
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black leading-[1.1]">
                {article.title}
              </h1>
              <p className="mt-3 text-white/85 text-base sm:text-lg max-w-lg leading-relaxed">
                {article.subtitle}
              </p>
              <div className="flex flex-wrap items-center gap-2 mt-5">
                <span className="bg-white/20 backdrop-blur rounded-full px-3 py-1 text-xs font-semibold">
                  ⏱️ {article.readingMinutes} min read
                </span>
                <span className="bg-white/20 backdrop-blur rounded-full px-3 py-1 text-xs font-semibold">
                  🔁 {article.cycle.length}-stage cycle
                </span>
                {subjects.map((s) => (
                  <span key={s.id} className="bg-white/20 backdrop-blur rounded-full px-3 py-1 text-xs font-semibold">
                    {s.emoji} {s.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Illustration */}
            <div className="rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/30 aspect-[440/260] bg-white/10">
              <KnowledgeArt slug={article.slug} className="w-full h-full" />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-16">

        {/* ── Big idea ───────────────────────────────────────────────────── */}
        <section className={`${accent.softBg} ${accent.softBorder} border rounded-2xl p-6 sm:p-8`}>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">The big idea</p>
          <p className={`text-xl sm:text-2xl font-bold ${accent.text} leading-snug`}>
            {article.bigIdea}
          </p>
          <p className="mt-4 text-slate-600 leading-relaxed max-w-3xl">{article.intro}</p>
        </section>

        {/* ── The cycle ──────────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">{article.cycleTitle}</h2>
          <div className="lg:flex lg:items-start lg:gap-10">
            <div className="lg:w-[340px] lg:flex-shrink-0 mb-8 lg:mb-0 lg:sticky lg:top-24">
              <CycleRing steps={article.cycle} accent={accent} idPrefix={article.slug} />
              <p className="text-center text-xs text-slate-400 mt-3">
                Follow the arrows — the cycle never stops.
              </p>
            </div>

            <ol className="flex-1 space-y-4">
              {article.cycle.map((step, i) => (
                <li
                  key={step.label}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 hover:border-slate-300 transition-colors"
                >
                  <div className="flex-shrink-0 flex flex-col items-center gap-1">
                    <span className={`w-9 h-9 rounded-full ${accent.strongBg} text-white font-bold flex items-center justify-center text-sm`}>
                      {i + 1}
                    </span>
                    <span className="text-2xl leading-none">{step.emoji}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{step.label}</h3>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Explainer sections ─────────────────────────────────────────── */}
        <section className="space-y-10 max-w-3xl">
          {article.sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className={`w-1.5 h-6 rounded-full ${accent.dot}`} />
                {s.heading}
              </h2>
              {s.paragraphs.map((p, i) => (
                <p key={i} className="text-slate-600 leading-relaxed mb-3">{p}</p>
              ))}
            </div>
          ))}
        </section>

        {/* ── Key words ──────────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-5">Key words</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {article.vocabulary.map((v) => (
              <div key={v.term} className="rounded-xl border border-slate-200 bg-white p-4">
                <p className={`font-bold ${accent.text}`}>{v.term}</p>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">{v.definition}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Did you know ───────────────────────────────────────────────── */}
        <section className={`rounded-2xl bg-gradient-to-br ${accent.gradient} p-6 sm:p-8 text-white`}>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">💡 Did you know?</h2>
          <ul className="space-y-3">
            {article.facts.map((f, i) => (
              <li key={i} className="flex gap-3 text-white/95 leading-relaxed">
                <span className="flex-shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-white/80" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Try it yourself ────────────────────────────────────────────── */}
        <section className={`${accent.softBg} ${accent.softBorder} border rounded-2xl p-6 sm:p-8`}>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Try it yourself</p>
          <h2 className="text-xl font-bold text-slate-900 mb-4">{article.activity.title}</h2>
          <ol className="space-y-3">
            {article.activity.steps.map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className={`flex-shrink-0 w-6 h-6 rounded-full ${accent.strongBg} text-white text-xs font-bold flex items-center justify-center`}>
                  {i + 1}
                </span>
                <span className="text-slate-700 leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* ── Practise with worksheets ───────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Practise with worksheets</h2>
          <p className="text-slate-500 mb-5">
            This topic connects to the following grade &amp; subject worksheet pages.
          </p>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <span className={`w-11 h-11 rounded-xl bg-gradient-to-br ${r.gradeGradient} flex items-center justify-center text-lg flex-shrink-0`}>
                  {r.gradeEmoji}
                </span>
                <div className="min-w-0">
                  <p className={`text-sm font-bold text-slate-800 ${accent.groupHoverText} transition-colors`}>
                    {r.gradeLabel} · {r.subjectLabel}
                  </p>
                  <p className="text-xs text-slate-400 truncate">
                    {r.topic ? `${r.topic} worksheets` : `${r.subjectLabel} worksheets`}
                  </p>
                </div>
                <span className="text-slate-300 group-hover:text-slate-500 ml-auto flex-shrink-0">›</span>
              </Link>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mt-5">
            {subjects.map((s) => (
              <Link
                key={s.id}
                href={`/subjects/${s.id}`}
                className={`inline-flex items-center gap-1.5 ${accent.chipBg} ${accent.chipText} text-sm font-semibold px-3 py-1.5 rounded-full hover:opacity-80 transition-opacity`}
              >
                {s.emoji} All {s.label} worksheets
              </Link>
            ))}
          </div>
        </section>

        {/* ── Quiz CTA ───────────────────────────────────────────────────── */}
        <section className="text-center rounded-2xl border border-slate-200 bg-slate-50 p-8">
          <h2 className="text-xl font-bold text-slate-900 mb-2">Ready to test what you learned?</h2>
          <p className="text-slate-500 mb-5">Take a quick quiz or explore more of nature&apos;s cycles.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/quiz"
              className={`${accent.strongBg} ${accent.strongHoverBg} text-white font-semibold px-6 py-3 rounded-full transition-colors`}
            >
              Take a Quiz
            </Link>
            <Link
              href="/knowledge"
              className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 font-semibold px-6 py-3 rounded-full transition-colors"
            >
              All Knowledge Articles
            </Link>
          </div>
        </section>

        {/* ── Prev / next ────────────────────────────────────────────────── */}
        <nav className="flex flex-col sm:flex-row gap-3 border-t border-slate-100 pt-8">
          {prev ? (
            <Link href={`/knowledge/${prev.slug}`} className="flex-1 rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
              <p className="text-xs text-slate-400 font-medium">← Previous</p>
              <p className="font-semibold text-slate-800 mt-0.5">{prev.emoji} {prev.title}</p>
            </Link>
          ) : <span className="flex-1" />}
          {next ? (
            <Link href={`/knowledge/${next.slug}`} className="flex-1 rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors text-right">
              <p className="text-xs text-slate-400 font-medium">Next →</p>
              <p className="font-semibold text-slate-800 mt-0.5">{next.emoji} {next.title}</p>
            </Link>
          ) : <span className="flex-1" />}
        </nav>

      </div>
    </article>
  );
}
