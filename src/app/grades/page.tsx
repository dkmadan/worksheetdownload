import GradeTile from "@/components/ui/GradeTile";
import { GRADES_CURRICULUM } from "@/lib/curriculum";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grades | Worksheets Download",
  description: "Browse free printable worksheets by grade — Kindergarten through Grade 8.",
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
