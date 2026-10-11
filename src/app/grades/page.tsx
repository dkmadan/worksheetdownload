import GradeTile from "@/components/ui/GradeTile";
import { GRADES_CURRICULUM } from "@/lib/curriculum";
import { breadcrumbsJsonLd, collectionPageJsonLd } from "@/lib/jsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Worksheets by Grade — Kindergarten to Grade 8",
  description:
    "Find free printable worksheets by grade level — Kindergarten through Grade 8. Each grade covers Math, English, Science, EVS, GK, Reasoning and more, with 4 practice sheets per topic.",
  keywords: [
    "worksheets by grade",
    "kindergarten worksheets",
    "grade 1 worksheets",
    "grade 2 worksheets",
    "grade 3 worksheets",
    "grade 4 worksheets",
    "grade 5 worksheets",
    "grade 6 worksheets",
    "grade 7 worksheets",
    "grade 8 worksheets",
    "printable worksheets by grade level",
    "K-8 printable worksheets",
  ],
  alternates: { canonical: "/grades" },
  openGraph: {
    title: "Worksheets by Grade — K to Grade 8 | WorksheetDownload",
    description:
      "Free printable worksheets for every grade from Kindergarten to Grade 8. Math, English, Science, EVS, GK, Reasoning and more.",
    url: "/grades",
    type: "website",
  },
  twitter: {
    title: "Worksheets by Grade — K to Grade 8 | WorksheetDownload",
    description: "Browse free printable worksheets for every grade from Kindergarten to Grade 8.",
  },
};

export default function GradesPage() {
  const breadcrumbSchema = breadcrumbsJsonLd([
    { name: "Home", url: "/" },
    { name: "Grades", url: "/grades" },
  ]);

  const collectionSchema = collectionPageJsonLd({
    name: "Printable Worksheets by Grade Level (K–8)",
    description:
      "Explore free printable worksheets organized by grade level from Kindergarten through Grade 8.",
    url: "/grades",
  });

  return (
    <div className="bg-[#F7F5EF] min-h-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="text-center mb-12">
          <span className="eb inline-block mb-2 text-[#9A5B00]">K–8 Curriculum</span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-medium text-[#0F1E4A] tracking-tight">Choose Your Grade</h1>
          <p className="text-[#5B6072] mt-2.5 text-base sm:text-lg max-w-xl mx-auto">
            Pick a grade level to explore syllabus-aligned practice sheets tailored for every stage of learning.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {GRADES_CURRICULUM.map((grade) => (
            <GradeTile key={grade.id} {...grade} />
          ))}
        </div>
      </div>
    </div>
  );
}

