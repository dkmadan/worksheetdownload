import Link from "next/link";
import { TOOLS } from "@/lib/tools/registry";

export default function ToolsSection() {
  return (
    <section className="bg-[#F7F5EF] py-16 sm:py-20 px-4 sm:px-6 border-b border-[#E4E0D4]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="eb inline-block mb-2.5 text-[#9A5B00]">
            Interactive Generators
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-medium text-[#0F1E4A] tracking-tight leading-tight">
            Build Your Own Worksheets
          </h2>
          <p className="lede text-base sm:text-lg text-[#5B6072] mt-3 max-w-xl mx-auto">
            Choose an operation, numeric range and layout — generate an instant randomized
            printable sheet with a matching answer key. Free, no sign-up.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {TOOLS.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-[#E4E0D4] hover:border-[#1E3A8A] bg-white p-5 shadow-2xs hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${tool.gradient}`} />
              <div className="text-3xl mb-3">{tool.emoji}</div>
              <h3 className="font-bold text-[#0F1E4A] text-sm leading-snug group-hover:text-[#1E3A8A] transition-colors">
                {tool.title}
              </h3>
              <p className="text-[#5B6072] text-xs mt-1.5 leading-relaxed">{tool.tagline}</p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 bg-[#1E3A8A] hover:bg-[#0F1E4A] text-white font-semibold text-sm px-6 py-3 rounded-full shadow-xs hover:shadow-md transition-all cursor-pointer"
          >
            <span>Open the worksheet generators</span>
            <span className="text-base">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
