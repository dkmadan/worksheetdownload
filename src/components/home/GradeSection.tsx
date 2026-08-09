import GradeTile from "@/components/ui/GradeTile";
import type { GradeDef } from "@/lib/curriculum";

export default function GradeSection({ grades }: { grades: GradeDef[] }) {
  return (
    <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Browse by Grade</h2>
          <p className="text-gray-500 mt-2">Find the perfect difficulty level for your child.</p>
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
