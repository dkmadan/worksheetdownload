import type { Metadata } from "next";
import Link from "next/link";
import TopicsBrowser from "@/components/worksheets/TopicsBrowser";
import type { TopicEntry } from "@/components/worksheets/TopicsBrowser";
import { CURRICULUM, GRADES_CURRICULUM, SUBJECTS_META, slugifyTopic } from "@/lib/curriculum";
import { breadcrumbsJsonLd, collectionPageJsonLd } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Browse All Worksheets — 730+ Topics for K–8",
  description:
    "Browse 730+ free printable worksheet topics across Kindergarten to Grade 8. Filter by grade or subject — Math, English, Science, EVS, GK, Reasoning — and download 4 practice sheets per topic.",
  keywords: [
    "all worksheets",
    "printable worksheet topics",
    "K-8 worksheet topics",
    "math worksheet topics",
    "english worksheet topics",
    "science worksheet topics",
    "browse worksheets by grade",
    "browse worksheets by subject",
    "free PDF worksheets",
    "practice sheets for students",
  ],
  alternates: { canonical: "/worksheets" },
  openGraph: {
    title: "Browse All Worksheets — 730+ Topics | WorksheetDownload",
    description:
      "730+ free printable worksheet topics across Kindergarten to Grade 8. Filter by grade or subject and download 4 practice sheets per topic.",
    url: "/worksheets",
    type: "website",
  },
  twitter: {
    title: "Browse All Worksheets — 730+ Topics | WorksheetDownload",
    description:
      "730+ free printable worksheet topics for K–8. Filter by grade or subject, download PDF practice sheets.",
  },
};

function getAllTopics(): TopicEntry[] {
  const entries: TopicEntry[] = [];
  for (const [gradeId, subjects] of Object.entries(CURRICULUM)) {
    const grade = GRADES_CURRICULUM.find((g) => g.id === gradeId);
    if (!grade) continue;
    for (const [subjectId, topics] of Object.entries(subjects)) {
      const subject = SUBJECTS_META[subjectId];
      if (!subject) continue;
      for (const topic of topics) {
        entries.push({
          gradeId,
          gradeLabel: grade.label,
          gradeEmoji: grade.emoji,
          subjectId,
          subjectLabel: subject.label,
          subjectEmoji: subject.emoji,
          subjectGradient: subject.headerGradient,
          topic,
          topicSlug: slugifyTopic(topic),
        });
      }
    }
  }
  return entries;
}

export default function WorksheetsPage() {
  const topics = getAllTopics();

  const breadcrumbSchema = breadcrumbsJsonLd([
    { name: "Home", url: "/" },
    { name: "Worksheets", url: "/worksheets" },
  ]);

  const collectionSchema = collectionPageJsonLd({
    name: "All K–8 Printable Worksheets Directory",
    description: `Browse ${topics.length}+ free printable worksheet topics across Kindergarten to Grade 8.`,
    url: "/worksheets",
  });

  return (
    <div className="bg-[#F7F5EF] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      {/* Hero banner */}
      <div className="bg-[#0F1E4A] border-b border-[#1b2d63] py-16 px-4 sm:px-6 text-center text-white">
        <p className="text-xs font-bold tracking-widest uppercase text-[#F2B33D] mb-3">
          Free Printable Worksheets
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal mb-3">Browse All Topics</h1>
        <p className="text-white/75 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          {topics.length}+ worksheet topics across Kindergarten – Grade 8. Filter by grade
          or subject, then download 4 unique practice sheets per topic.
        </p>
      </div>

      {/* Featured Interactive Tools Callout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8">
        <div className="bg-white border border-[#E4E0D4] rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-start gap-3">
            <span className="text-3xl sm:text-4xl">⚡</span>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-[#0F1E4A]">
                Need Custom Worksheets? Try Our Free Interactive Generators
              </h2>
              <p className="text-sm text-[#5B6072] mt-0.5">
                Build randomized Reading Comprehension, Visual Fractions, Money Counting, Crossword Puzzles, Grammar Exercises, and Flashcards in seconds with matching answer keys.
              </p>
            </div>
          </div>
          <Link
            href="/tools"
            className="shrink-0 bg-[#1E3A8A] hover:bg-[#0F1E4A] text-white font-bold text-sm px-6 py-2.5 rounded-full shadow-xs transition-all"
          >
            Explore 15 Generators →
          </Link>
        </div>
      </div>

      {/* Browser */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <TopicsBrowser topics={topics} />
      </div>
    </div>
  );
}

