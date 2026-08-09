import type { Metadata } from "next";
import TopicsBrowser from "@/components/worksheets/TopicsBrowser";
import type { TopicEntry } from "@/components/worksheets/TopicsBrowser";
import { CURRICULUM, GRADES_CURRICULUM, SUBJECTS_META, slugifyTopic } from "@/lib/curriculum";

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

  return (
    <div>
      {/* Hero banner */}
      <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 py-14 px-4 sm:px-6 text-center text-white">
        <p className="text-sm font-semibold tracking-widest uppercase text-blue-200 mb-2">
          Free Printable Worksheets
        </p>
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">Browse All Topics</h1>
        <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto">
          {topics.length}+ worksheet topics across Kindergarten – Grade 8. Filter by grade
          or subject, then download 4 unique practice sheets per topic.
        </p>
      </div>

      {/* Browser */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <TopicsBrowser topics={topics} />
      </div>
    </div>
  );
}
