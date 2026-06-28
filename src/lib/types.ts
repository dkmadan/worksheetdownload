export type Subject = "math" | "reading" | "writing" | "science" | "art";

export type Grade =
  | "kindergarten"
  | "1st"
  | "2nd"
  | "3rd"
  | "4th"
  | "5th";

export interface Worksheet {
  id: string;
  title: string;
  subject: Subject;
  grade: Grade;
  description: string;
  pdfUrl: string;
  thumbnailEmoji: string;
}

export interface SubjectMeta {
  id: Subject;
  label: string;
  emoji: string;
  description: string;
}

export interface GradeMeta {
  id: Grade;
  label: string;
  ageRange: string;
}
