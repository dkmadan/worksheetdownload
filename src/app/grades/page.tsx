import GradeTile from "@/components/ui/GradeTile";
import { GRADES_CURRICULUM } from "@/lib/curriculum";
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
  return (
    <div className="bg-gradient-to-br from-orange-50 to-amber-50 min-h-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900">Choose Your Grade</h1>
          <p className="text-gray-500 mt-2 text-lg">
            Pick a grade to explore subjects and topics designed just for your level.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {GRADES_CURRICULUM.map((grade) => (
            <GradeTile key={grade.id} {...grade} />
          ))}
        </div>
      </div>
    </div>
  );
}
