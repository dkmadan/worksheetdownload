import GradeTile from "@/components/ui/GradeTile";
import type { GradeDef } from "@/lib/curriculum";

export default function GradeSection({ grades }: { grades: GradeDef[] }) {
  return (
    <section className="bg-[#F7F5EF] py-16 sm:py-20 px-4 sm:px-6 border-b border-[#E4E0D4]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="eb inline-block mb-2.5 text-[#9A5B00]">
            All Grade Levels
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-medium text-[#0F1E4A] tracking-tight leading-tight">
            Browse by Grade
          </h2>
          <p className="lede text-base sm:text-lg text-[#5B6072] mt-3 max-w-lg mx-auto">
            Structured syllabus-aligned practice sheets tailored for every stage of learning.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {grades.map((grade) => (
            <GradeTile key={grade.id} {...grade} />
          ))}
        </div>
      </div>
    </section>
  );
}
