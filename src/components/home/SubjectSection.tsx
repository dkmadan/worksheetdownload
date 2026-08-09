import SubjectPageTile from "@/components/ui/SubjectPageTile";
import type { SubjectDef } from "@/lib/curriculum";

export default function SubjectSection({ subjects }: { subjects: SubjectDef[] }) {
  return (
    <section className="bg-gradient-to-br from-orange-50 to-amber-50 py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Explore by Subject</h2>
          <p className="text-gray-500 mt-2">
            Pick a subject and discover practice sheets tailored to every grade level.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {subjects.map((subject) => (
            <SubjectPageTile key={subject.id} subject={subject} />
          ))}
        </div>
      </div>
    </section>
  );
}
