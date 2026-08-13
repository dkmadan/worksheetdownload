import SubjectPageTile from "@/components/ui/SubjectPageTile";
import type { SubjectDef } from "@/lib/curriculum";

export default function SubjectSection({ subjects }: { subjects: SubjectDef[] }) {
  return (
    <section className="bg-white py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-bold text-pink-500 uppercase tracking-widest mb-2">
            K–8 Curriculum
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Explore by Subject</h2>
          <p className="text-slate-500 mt-3 max-w-md mx-auto">
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
