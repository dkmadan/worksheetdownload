import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  KNOWLEDGE_ARTICLES,
  ACCENTS,
  getArticle,
  getArticlesByCategory,
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
    title: `${article.title} — ${article.category} Explained for Kids`,
    description,
    keywords: [
      article.title.toLowerCase(),
      `${article.title.toLowerCase()} for kids`,
      `${article.title.toLowerCase()} diagram`,
      `${article.title.toLowerCase()} explained`,
      article.category.toLowerCase(),
      ...article.cycle.map((s) => s.label.toLowerCase()),
      ...article.vocabulary.map((v) => v.term.toLowerCase()),
    ],
    alternates: { canonical: `/knowledge/${article.slug}` },
    openGraph: {
      title: `${article.title} | ${article.category} | WorksheetDownload`,
      description: article.subtitle,
      url: `/knowledge/${article.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} — Illustrated Science Explainer`,
      description: article.subtitle,
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

  // Category related articles
  const sameCategoryArticles = getArticlesByCategory(article.categorySlug)
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  const related = article.related
    .map(resolveRelatedLink)
    .filter((r): r is NonNullable<typeof r> => r !== null);
  const subjects = relatedSubjects(article);

  // Structured Data (JSON-LD) for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: article.title,
        description: article.subtitle,
        articleSection: article.category,
        url: `https://worksheetdownload.com/knowledge/${article.slug}`,
        author: {
          "@type": "Organization",
          name: "WorksheetDownload STEM Education Team",
          url: "https://worksheetdownload.com",
        },
        publisher: {
          "@type": "Organization",
          name: "WorksheetDownload",
          url: "https://worksheetdownload.com",
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://worksheetdownload.com/knowledge/${article.slug}`,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://worksheetdownload.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Knowledge Library",
            item: "https://worksheetdownload.com/knowledge",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: article.category,
            item: "https://worksheetdownload.com/knowledge",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: article.title,
            item: `https://worksheetdownload.com/knowledge/${article.slug}`,
          },
        ],
      },
      {
        "@type": "HowTo",
        name: article.activity.title,
        step: article.activity.steps.map((s, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          text: s,
        })),
      },
    ],
  };

  return (
    <article className="bg-white">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <header className={`bg-gradient-to-br ${accent.gradient}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-white/80 mb-8 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>›</span>
            <Link href="/knowledge" className="hover:text-white transition-colors">
              Knowledge
            </Link>
            <span>›</span>
            <span className="bg-white/15 px-2 py-0.5 rounded-full font-medium">
              {article.categoryEmoji} {article.category}
            </span>
            <span>›</span>
            <span className="text-white font-semibold truncate max-w-[200px] sm:max-w-none">
              {article.title}
            </span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              {/* Category Tag */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 bg-slate-900/40 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20">
                  <span>{article.categoryEmoji}</span>
                  <span>{article.category}</span>
                </span>
                <span className="bg-white/20 backdrop-blur rounded-full px-3 py-1 text-xs font-semibold">
                  ⏱️ {article.readingMinutes} min read
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black leading-[1.15]">
                {article.title}
              </h1>

              <p className="mt-3 text-white/90 text-base sm:text-lg max-w-lg leading-relaxed">
                {article.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-2 mt-5">
                <span className="bg-white/20 backdrop-blur rounded-full px-3 py-1 text-xs font-semibold">
                  🔁 {article.cycle.length} Key Stages
                </span>
                {subjects.map((s) => (
                  <span
                    key={s.id}
                    className="bg-white/20 backdrop-blur rounded-full px-3 py-1 text-xs font-semibold"
                  >
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
        <section
          className={`${accent.softBg} ${accent.softBorder} border rounded-2xl p-6 sm:p-8`}
        >
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 flex items-center gap-1.5">
            <span>💡</span> The Big Idea
          </p>
          <p className={`text-xl sm:text-2xl font-bold ${accent.text} leading-snug`}>
            {article.bigIdea}
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed max-w-3xl text-base">{article.intro}</p>
        </section>

        {/* ── The cycle / Steps ──────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">{article.cycleTitle}</h2>
          <div className="lg:flex lg:items-start lg:gap-10">
            <div className="lg:w-[340px] lg:flex-shrink-0 mb-8 lg:mb-0 lg:sticky lg:top-24">
              <CycleRing steps={article.cycle} accent={accent} idPrefix={article.slug} />
              <p className="text-center text-xs text-slate-400 mt-3">
                Follow the arrows — understand each progressive stage.
              </p>
            </div>

            <ol className="flex-1 space-y-4">
              {article.cycle.map((step, i) => (
                <li
                  key={step.label}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 hover:border-slate-300 hover:shadow-sm transition-all"
                >
                  <div className="flex-shrink-0 flex flex-col items-center gap-1">
                    <span
                      className={`w-9 h-9 rounded-full ${accent.strongBg} text-white font-bold flex items-center justify-center text-sm shadow-sm`}
                    >
                      {i + 1}
                    </span>
                    <span className="text-2xl leading-none mt-1">{step.emoji}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">{step.label}</h3>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                      {step.description}
                    </p>
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
                <span className={`w-2 h-6 rounded-full ${accent.dot}`} />
                {s.heading}
              </h2>
              {s.paragraphs.map((p, i) => (
                <p key={i} className="text-slate-700 leading-relaxed mb-3 text-base">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </section>

        {/* ── Key words / Vocabulary ─────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-5 flex items-center gap-2">
            <span>📚</span> Key Science Vocabulary
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {article.vocabulary.map((v) => (
              <div
                key={v.term}
                className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4 hover:bg-white hover:shadow-sm transition-all"
              >
                <p className={`font-bold text-base ${accent.text}`}>{v.term}</p>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">{v.definition}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Did you know ───────────────────────────────────────────────── */}
        <section
          className={`rounded-2xl bg-gradient-to-br ${accent.gradient} p-6 sm:p-8 text-white shadow-lg`}
        >
          <h2 className="text-2xl font-black mb-4 flex items-center gap-2">💡 Mind-Blowing Facts</h2>
          <ul className="space-y-3">
            {article.facts.map((f, i) => (
              <li key={i} className="flex gap-3 text-white/95 leading-relaxed text-base">
                <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-white shadow" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Try it yourself / Activity ──────────────────────────────────── */}
        <section
          className={`${accent.softBg} ${accent.softBorder} border rounded-2xl p-6 sm:p-8`}
        >
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1 flex items-center gap-1.5">
            <span>🔬</span> Hands-On Activity
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
            {article.activity.title}
          </h2>
          <ol className="space-y-3.5">
            {article.activity.steps.map((step, i) => (
              <li key={i} className="flex gap-3.5">
                <span
                  className={`flex-shrink-0 w-7 h-7 rounded-full ${accent.strongBg} text-white text-xs font-bold flex items-center justify-center shadow-sm`}
                >
                  {i + 1}
                </span>
                <span className="text-slate-700 leading-relaxed text-sm sm:text-base">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* ── Practise with worksheets ───────────────────────────────────── */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-black text-slate-900">Practise with Free Worksheets</h2>
              <p className="text-slate-500 text-sm mt-1">
                Reinforce this topic with curriculum-matched printable worksheets.
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group flex items-center gap-3.5 rounded-2xl border border-slate-200 bg-white p-4 hover:shadow-md hover:border-slate-300 hover:-translate-y-0.5 transition-all"
              >
                <span
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${r.gradeGradient} flex items-center justify-center text-xl flex-shrink-0 shadow-sm`}
                >
                  {r.gradeEmoji}
                </span>
                <div className="min-w-0">
                  <p
                    className={`text-sm font-bold text-slate-900 ${accent.groupHoverText} transition-colors`}
                  >
                    {r.gradeLabel} · {r.subjectLabel}
                  </p>
                  <p className="text-xs text-slate-400 truncate mt-0.5">
                    {r.topic ? `${r.topic} worksheets` : `${r.subjectLabel} worksheets`}
                  </p>
                </div>
                <span className="text-slate-300 group-hover:text-slate-600 ml-auto flex-shrink-0 text-lg">
                  ›
                </span>
              </Link>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mt-5">
            {subjects.map((s) => (
              <Link
                key={s.id}
                href={`/subjects/${s.id}`}
                className={`inline-flex items-center gap-1.5 ${accent.chipBg} ${accent.chipText} text-xs sm:text-sm font-bold px-4 py-2 rounded-full hover:opacity-80 transition-opacity`}
              >
                {s.emoji} Explore All {s.label} Worksheets
              </Link>
            ))}
          </div>
        </section>

        {/* ── More in this category ──────────────────────────────────────── */}
        {sameCategoryArticles.length > 0 && (
          <section className="border-t border-slate-200 pt-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span>{article.categoryEmoji}</span>
              <span>More in {article.category}</span>
            </h2>

            <div className="grid gap-4 sm:grid-cols-3">
              {sameCategoryArticles.map((item) => (
                <Link
                  key={item.slug}
                  href={`/knowledge/${item.slug}`}
                  className="group flex flex-col rounded-xl border border-slate-200 bg-white p-4 hover:shadow-md hover:border-slate-300 transition-all"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">{item.emoji}</span>
                    <h3 className="font-bold text-sm text-slate-800 group-hover:text-indigo-600 transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">
                    {item.subtitle}
                  </p>
                  <span className="text-xs font-semibold text-indigo-600 mt-3 inline-flex items-center gap-1">
                    Read article →
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ── Quiz CTA ───────────────────────────────────────────────────── */}
        <section className="text-center rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-indigo-50/30 p-8 sm:p-10">
          <h2 className="text-2xl font-black text-slate-900 mb-2">
            Ready to test what you learned?
          </h2>
          <p className="text-slate-600 mb-6 max-w-lg mx-auto text-sm sm:text-base">
            Take a fast, fun interactive quiz or explore more science guides in our knowledge
            library.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/quiz"
              className={`${accent.strongBg} ${accent.strongHoverBg} text-white font-bold px-6 py-3 rounded-full transition-all shadow-md shadow-slate-900/10`}
            >
              Take a Science Quiz 🎯
            </Link>
            <Link
              href="/knowledge"
              className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 font-bold px-6 py-3 rounded-full transition-colors shadow-sm"
            >
              All 60 Science Guides 📖
            </Link>
          </div>
        </section>

        {/* ── Prev / next ────────────────────────────────────────────────── */}
        <nav className="flex flex-col sm:flex-row gap-4 border-t border-slate-100 pt-8">
          {prev ? (
            <Link
              href={`/knowledge/${prev.slug}`}
              className="flex-1 rounded-2xl border border-slate-200 p-4 hover:bg-slate-50 hover:border-slate-300 transition-all group"
            >
              <p className="text-xs text-slate-400 font-medium">← Previous Article</p>
              <p className="font-bold text-slate-800 group-hover:text-indigo-600 transition-colors mt-1 flex items-center gap-2">
                <span>{prev.emoji}</span>
                <span>{prev.title}</span>
              </p>
            </Link>
          ) : (
            <span className="flex-1" />
          )}
          {next ? (
            <Link
              href={`/knowledge/${next.slug}`}
              className="flex-1 rounded-2xl border border-slate-200 p-4 hover:bg-slate-50 hover:border-slate-300 transition-all text-right group"
            >
              <p className="text-xs text-slate-400 font-medium">Next Article →</p>
              <p className="font-bold text-slate-800 group-hover:text-indigo-600 transition-colors mt-1 flex items-center justify-end gap-2">
                <span>{next.title}</span>
                <span>{next.emoji}</span>
              </p>
            </Link>
          ) : (
            <span className="flex-1" />
          )}
        </nav>
      </div>
    </article>
  );
}
