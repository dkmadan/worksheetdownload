import Link from "next/link";
import { TOOLS } from "@/lib/tools/registry";

export default function ToolsSection() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
            Interactive Generators
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Build Your Own Worksheets
          </h2>
          <p className="text-slate-500 mt-3 max-w-lg mx-auto text-base">
            Choose an operation, range and layout — generate an instant randomized
            printable sheet with a matching answer key. Free, no sign-up.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TOOLS.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${tool.gradient}`} />
              <div className="text-3xl mb-3">{tool.emoji}</div>
              <h3 className="font-bold text-slate-900 text-sm leading-snug group-hover:text-blue-700 transition-colors">
                {tool.title}
              </h3>
              <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">{tool.tagline}</p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all"
          >
            Open the worksheet generators
            <span className="text-base">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
