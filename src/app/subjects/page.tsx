import SubjectPageTile from "@/components/ui/SubjectPageTile";
import { SUBJECTS_META } from "@/lib/curriculum";
import { breadcrumbsJsonLd, collectionPageJsonLd } from "@/lib/jsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Worksheets by Subject — Math, English, Science, EVS, GK & More",
  description:
    "Browse all subjects — Mathematics, English, Science, EVS, GK, Reasoning, Social Studies and more. Free printable worksheets for K–8 with 4 practice sheets per topic and answer keys.",
  keywords: [
    "worksheets by subject",
    "math worksheets",
    "english worksheets",
    "science worksheets",
    "EVS worksheets",
    "GK worksheets",
    "reasoning worksheets",
    "social studies worksheets",
    "printable subject worksheets",
    "free subject worksheets K-8",
  ],
  alternates: { canonical: "/subjects" },
  openGraph: {
    title: "Worksheets by Subject — Math, English, Science & More | WorksheetDownload",
    description:
      "Browse all subjects — Math, English, Science, EVS, GK, Reasoning and more. Free printable worksheets for K–8.",
    url: "/subjects",
    type: "website",
  },
  twitter: {
    title: "Worksheets by Subject | WorksheetDownload",
    description: "Math, English, Science, EVS, GK, Reasoning worksheets — free printable K–8.",
  },
};

export default function SubjectsPage() {
  const subjects = Object.values(SUBJECTS_META);

  const breadcrumbSchema = breadcrumbsJsonLd([
    { name: "Home", url: "/" },
    { name: "Subjects", url: "/subjects" },
  ]);

  const collectionSchema = collectionPageJsonLd({
    name: "Printable Worksheets by Subject (K–8)",
    description:
      "Explore free printable worksheets organized by subject across Math, English, Science, EVS, GK, Reasoning, and Social Studies.",
    url: "/subjects",
  });

  return (
    <div className="min-h-screen bg-[#F7F5EF]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Page hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white border border-[#E4E0D4] rounded-full px-4 py-1.5 text-xs text-[#9A5B00] font-bold mb-4 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A8A]" />
            <span className="eb text-[11px]">K–8 Curriculum Disciplines</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-medium text-[#0F1E4A] tracking-tight">
            Explore by Subject
          </h1>
          <p className="text-[#5B6072] mt-3 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Choose any subject to browse all topics and topic-wise practice sheets across every grade level.
          </p>
        </div>

        {/* Stats bar */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12">
          {[
            { label: "Subjects", value: `${subjects.length}`, icon: "📖" },
            { label: "Grades", value: "K–8", icon: "🎓" },
            { label: "Topics", value: "750+", icon: "📋" },
            { label: "Practice Sheets", value: "3000+", icon: "✏️" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-2.5 bg-white rounded-2xl px-5 py-3 shadow-2xs border border-[#E4E0D4]">
              <span className="text-xl">{stat.icon}</span>
              <div>
                <p className="text-lg font-bold text-gray-900 leading-none">{stat.value}</p>
                <p className="text-xs text-gray-500">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Subject grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {subjects.map((subject) => (
            <SubjectPageTile key={subject.id} subject={subject} />
          ))}
        </div>
      </div>
    </div>
  );
}

