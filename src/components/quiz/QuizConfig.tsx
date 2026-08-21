"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface GradeOption { id: string; label: string; emoji: string; }
interface SubjectOption { id: string; label: string; emoji: string; }
interface TechItemOption { slug: string; name: string; }
interface TechCategoryOption { slug: string; label: string; icon: string; items: TechItemOption[]; }

interface Props {
  gradeOptions: GradeOption[];
  subjectsPerGrade: Record<string, SubjectOption[]>;
  techCategories: TechCategoryOption[];
}

type Tab = "grade-subject" | "technology";

export default function QuizConfig({ gradeOptions, subjectsPerGrade, techCategories }: Props) {
  const router = useRouter();

  const [tab, setTab] = useState<Tab>("grade-subject");
  const [grade, setGrade] = useState("");
  const [subject, setSubject] = useState("");
  const [techCat, setTechCat] = useState("");
  const [techItem, setTechItem] = useState("");

  const subjects = grade ? (subjectsPerGrade[grade] ?? []) : [];
  const techItems = techCat ? (techCategories.find(c => c.slug === techCat)?.items ?? []) : [];

  const canStart =
    (tab === "grade-subject" && grade && subject) ||
    (tab === "technology" && techCat && techItem);

  function buildParams() {
    const p = new URLSearchParams();
    if (tab === "grade-subject") {
      const g = gradeOptions.find(x => x.id === grade);
      const s = subjects.find(x => x.id === subject);
      const label = `${g?.label ?? ""} · ${s?.label ?? ""}`;
      p.set("type", "grade-subject");
      p.set("grade", grade);
      p.set("subject", subject);
      p.set("label", label);
    } else {
      const cat = techCategories.find(c => c.slug === techCat);
      const item = cat?.items.find(i => i.slug === techItem);
      p.set("type", "technology");
      p.set("tech", techCat);
      p.set("item", techItem);
      p.set("label", item?.name ?? techItem);
    }
    return p;
  }

  function handleStart() {
    if (!canStart) return;
    router.push(`/quiz/start?${buildParams().toString()}`);
  }

  return (
    <>
      {/* Tabs */}
      <div className="flex bg-gray-100 rounded-xl p-1 mb-6">
        {(["grade-subject", "technology"] as const).map((key) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={`flex-1 py-2.5 px-3 rounded-lg text-sm font-semibold transition-all ${
              tab === key
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {key === "grade-subject" ? "📚 Grade & Subject" : "💻 Technology"}
          </button>
        ))}
      </div>

      {/* Grade & Subject selectors */}
      {tab === "grade-subject" && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Select Grade
            </label>
            <select
              value={grade}
              onChange={e => { setGrade(e.target.value); setSubject(""); }}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition appearance-none cursor-pointer"
            >
              <option value="">— Choose a Grade —</option>
              {gradeOptions.map(g => (
                <option key={g.id} value={g.id}>{g.emoji} {g.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Select Subject
            </label>
            <select
              value={subject}
              onChange={e => setSubject(e.target.value)}
              disabled={!grade}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition appearance-none cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <option value="">— Choose a Subject —</option>
              {subjects.map(s => (
                <option key={s.id} value={s.id}>{s.emoji} {s.label}</option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* Technology selectors */}
      {tab === "technology" && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Select Category
            </label>
            <select
              value={techCat}
              onChange={e => { setTechCat(e.target.value); setTechItem(""); }}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition appearance-none cursor-pointer"
            >
              <option value="">— Choose a Category —</option>
              {techCategories.map(c => (
                <option key={c.slug} value={c.slug}>{c.icon} {c.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Select Technology
            </label>
            <select
              value={techItem}
              onChange={e => setTechItem(e.target.value)}
              disabled={!techCat}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition appearance-none cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <option value="">— Choose a Technology —</option>
              {techItems.map(item => (
                <option key={item.slug} value={item.slug}>{item.name}</option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* Start button */}
      <button
        onClick={handleStart}
        disabled={!canStart}
        className="w-full mt-6 bg-pink-400 hover:bg-pink-500 disabled:bg-gray-100 disabled:text-gray-400 text-white font-bold py-3.5 rounded-xl transition-colors text-base shadow-sm disabled:cursor-not-allowed"
      >
        Start Quiz →
      </button>
    </>
  );
}
