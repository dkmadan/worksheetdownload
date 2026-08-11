import Link from "next/link";
import type { Metadata } from "next";
import { TECHNOLOGIES, slugifyTech } from "@/lib/technologies";

export const metadata: Metadata = {
  title: "Technologies — Browse Worksheets by Tech Topic",
  description:
    "Explore worksheets and learning resources organised by technology — AI/ML, Cloud, DevOps, Databases, Security, Web Technologies and more.",
  alternates: { canonical: "/technologies" },
  openGraph: {
    title: "Technologies | WorksheetDownload",
    description: "Browse 37+ technology topics — AI/ML, Cloud, DevOps, Security, Web Technologies and more.",
    url: "/technologies",
    type: "website",
  },
};

const TECH_ICONS: Record<string, string> = {
  "AI Agents": "🤖", "AI/ML": "🧠", "API Technologies": "🔌",
  "Architecture": "🏗️", "BI & Visualization": "📊", "Backend Technologies": "⚙️",
  "Blockchain/Web3": "⛓️", "Build & Package Management": "📦", "Caching": "⚡",
  "Cloud": "☁️", "Content Management": "📝", "Data Engineering": "🔧",
  "Data Platforms": "🗄️", "Databases": "💾", "Desktop": "🖥️",
  "DevOps": "🔄", "Developer Tools": "🛠️", "Distributed Systems": "🌐",
  "Emerging Technologies": "🚀", "Enterprise": "🏢", "Generative AI": "✨",
  "IoT & Edge": "📡", "Kubernetes": "🎛️", "MLOps/LLMOps": "🔬",
  "Messaging & Streaming": "📨", "Microservices": "🧩", "Mobile": "📱",
  "Networking": "🔗", "Observability": "👁️", "Operating Systems": "💻",
  "Programming Languages": "💡", "Robotics": "🦾", "Search": "🔍",
  "Security": "🔐", "Testing": "✅", "Version Control": "📂",
  "Web Technologies": "🌍",
};

export default function TechnologiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      {/* Hero */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-10 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-1.5 text-sm text-blue-400 font-semibold mb-5">
          💻 Technology Topics
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Browse by Technology
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          {TECHNOLOGIES.length} technology topics — from AI/ML and Cloud to DevOps,
          Security and Web Technologies.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {TECHNOLOGIES.map((tech) => (
            <Link
              key={tech}
              href={`/technologies/${slugifyTech(tech)}`}
              className="group bg-gray-800/60 hover:bg-gray-800 border border-gray-700/50 hover:border-blue-500/50
                         rounded-xl p-4 flex items-center gap-3 transition-all duration-150 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-900/20"
            >
              <span className="text-2xl flex-shrink-0">{TECH_ICONS[tech] ?? "💡"}</span>
              <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors leading-snug">
                {tech}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
