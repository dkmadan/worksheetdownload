import SubjectCard from "@/components/ui/SubjectCard";
import type { SubjectMeta } from "@/lib/types";

export default function SubjectSection({ subjects }: { subjects: SubjectMeta[] }) {
  return (
    <section className="bg-gradient-to-br from-orange-50 to-amber-50 py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Explore by Subject</h2>
          <p className="text-gray-500 mt-2">
            Pick a topic and discover worksheets tailored to your child&apos;s interests.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {subjects.map((subject) => (
            <SubjectCard key={subject.id} {...subject} />
          ))}
        </div>
      </div>
    </section>
  );
}
