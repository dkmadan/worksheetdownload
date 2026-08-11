export const TECHNOLOGIES = [
  "AI Agents",
  "AI/ML",
  "API Technologies",
  "Architecture",
  "BI & Visualization",
  "Backend Technologies",
  "Blockchain/Web3",
  "Build & Package Management",
  "Caching",
  "Cloud",
  "Content Management",
  "Data Engineering",
  "Data Platforms",
  "Databases",
  "Desktop",
  "DevOps",
  "Developer Tools",
  "Distributed Systems",
  "Emerging Technologies",
  "Enterprise",
  "Generative AI",
  "IoT & Edge",
  "Kubernetes",
  "MLOps/LLMOps",
  "Messaging & Streaming",
  "Microservices",
  "Mobile",
  "Networking",
  "Observability",
  "Operating Systems",
  "Programming Languages",
  "Robotics",
  "Search",
  "Security",
  "Testing",
  "Version Control",
  "Web Technologies",
] as const;

export function slugifyTech(name: string) {
  return name
    .toLowerCase()
    .replace(/[/&]/g, "-")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}
