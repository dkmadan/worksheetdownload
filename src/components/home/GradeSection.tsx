import GradeTile from "@/components/ui/GradeTile";
import type { GradeDef } from "@/lib/curriculum";

export default function GradeSection({ grades }: { grades: GradeDef[] }) {
  return (
    <section className="bg-slate-50 py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-bold text-pink-500 uppercase tracking-widest mb-2">
            All Grade Levels
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Browse by Grade</h2>
          <p className="text-slate-500 mt-3">
            Find the perfect difficulty level for your child.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {grades.map((grade) => (
            <GradeTile key={grade.id} {...grade} />
          ))}
        </div>
      </div>
    </section>
  );
}
