import type { MetadataRoute } from "next";
import { TECH_DATA } from "@/lib/technologies";
import { CURRICULUM, slugifyTopic } from "@/lib/curriculum";
import { SUBJECTS, GRADES } from "@/lib/data";
import { KNOWLEDGE_ARTICLES } from "@/lib/knowledge";

const BASE = "https://worksheetdownload.com";
const NOW = new Date();

function url(
  path: string,
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly"
): MetadataRoute.Sitemap[number] {
  return { url: `${BASE}${path}`, lastModified: NOW, changeFrequency, priority };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [];

  // ── Static / top-level pages ──────────────────────────────────────────────
  urls.push(
    url("/",               1.0, "weekly"),
    url("/technologies",   0.9, "weekly"),
    url("/grades",         0.9, "monthly"),
    url("/worksheets",     0.7, "monthly"),
    url("/subjects",       0.7, "monthly"),
    url("/about",          0.5, "monthly"),
    url("/disclaimer",     0.3, "monthly"),
    url("/privacy-policy", 0.3, "yearly"),
    url("/terms",          0.3, "yearly"),
    url("/contact",        0.5, "monthly"),
    url("/quiz",           0.4, "monthly"),
    url("/quiz/start",     0.4, "monthly"),
    url("/knowledge",      0.7, "monthly"),
  );

  // ── Knowledge articles ───────────────────────────────────────────────────
  for (const article of KNOWLEDGE_ARTICLES) {
    urls.push(url(`/knowledge/${article.slug}`, 0.7));
  }

  // ── Technology pages ──────────────────────────────────────────────────────
  // Category landing pages
  for (const cat of TECH_DATA) {
    urls.push(url(`/technologies/${cat.slug}`, 0.8));
  }

  // Item pages + resource pages (deduplicated by slug)
  const seenSlugs = new Set<string>();
  for (const cat of TECH_DATA) {
    for (const sub of cat.subcategories) {
      for (const item of sub.items) {
        if (seenSlugs.has(item.slug)) continue;
        seenSlugs.add(item.slug);

        // Item overview page
        urls.push(url(`/technologies/${cat.slug}/${item.slug}`, 0.7));

        // Resource page — highest priority: cheat sheet + FAQ content
        urls.push(url(`/technologies/${cat.slug}/${item.slug}/resources`, 0.9));
      }
    }
  }

  // ── Curriculum grade/subject/topic pages ──────────────────────────────────
  for (const [gradeId, subjects] of Object.entries(CURRICULUM)) {
    // Grade landing: e.g. /grades/grade-5
    urls.push(url(`/grades/${gradeId}`, 0.8));

    for (const [subjectId, topics] of Object.entries(subjects)) {
      // Subject page: e.g. /grades/grade-5/mathematics
      urls.push(url(`/grades/${gradeId}/${subjectId}`, 0.7));

      // Topic pages: e.g. /grades/grade-5/mathematics/lcm
      for (const topic of topics) {
        const topicSlug = slugifyTopic(topic);
        urls.push(url(`/grades/${gradeId}/${subjectId}/${topicSlug}`, 0.6));
      }
    }
  }

  // ── Legacy worksheet subject/grade pages ─────────────────────────────────
  for (const subject of SUBJECTS) {
    urls.push(url(`/worksheets/${subject.id}`, 0.6));
    urls.push(url(`/subjects/${subject.id}`,   0.6));
  }

  for (const grade of GRADES) {
    urls.push(url(`/grades/${grade.id}`, 0.6));
  }

  return urls;
}
