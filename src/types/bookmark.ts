export type BookmarkCategory =
  | "Worksheet"
  | "Coloring Sheet"
  | "Tech Cheat Sheet"
  | "Worksheet Generator"
  | "STEM Knowledge"
  | "Map Worksheet"
  | "Quiz"
  | "Page";

export interface BookmarkItem {
  id: string; // URL path or unique key
  url: string;
  title: string;
  category: BookmarkCategory;
  description?: string;
  badge?: string;
  icon?: string;
  savedAt: number;
}
