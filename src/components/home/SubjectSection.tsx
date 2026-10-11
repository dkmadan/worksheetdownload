import SubjectPageTile from "@/components/ui/SubjectPageTile";
import type { SubjectDef } from "@/lib/curriculum";

export default function SubjectSection({ subjects }: { subjects: SubjectDef[] }) {
  return (
    <section className="bg-[#FAF9F5] py-16 sm:py-20 px-4 sm:px-6 border-b border-[#E4E0D4]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="eb inline-block mb-2.5 text-[#9A5B00]">
            K–8 Curriculum Disciplines
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-medium text-[#0F1E4A] tracking-tight leading-tight">
            Explore by Subject
          </h2>
          <p className="lede text-base sm:text-lg text-[#5B6072] mt-3 max-w-lg mx-auto">
            Choose a subject discipline and discover topic-wise question sets tailored to each grade level.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {subjects.map((subject) => (
            <SubjectPageTile key={subject.id} subject={subject} />
          ))}
        </div>
      </div>
    </section>
  );
}
