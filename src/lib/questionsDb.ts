import clientPromise from "./mongodb";
import { SAMPLE_QUESTIONS, type QuizCategory, type QuizQuestion } from "./quiz";

export interface DBQuestion {
  id: string;
  type: "grade-subject" | "technology";
  gradeId?: string;
  subjectId?: string;
  techCategorySlug?: string;
  /** Difficulty band — set on technology questions (Beginner | Intermediate | Advanced). */
  category?: QuizCategory;
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

async function getCollection() {
  const client = await clientPromise;
  return client.db("worksheetdownload").collection<DBQuestion>("questions");
}

export async function getGradeSubjectQuestions(
  gradeId: string,
  subjectId: string
): Promise<DBQuestion[]> {
  const col = await getCollection();
  return col
    .find({ type: "grade-subject", gradeId, subjectId })
    .limit(10)
    .toArray();
}

export async function getTechCategoryQuestions(
  techCategorySlug: string,
  category?: QuizCategory
): Promise<DBQuestion[]> {
  const col = await getCollection();
  const filter: Record<string, unknown> = { type: "technology", techCategorySlug };
  if (category) filter.category = category;
  return col.find(filter).limit(10).toArray();
}

export async function getQuestionsByIds(ids: string[]): Promise<DBQuestion[]> {
  if (!ids.length) return [];
  const col = await getCollection();
  return col.find({ id: { $in: ids } }).toArray();
}

export async function ensureIndexes(): Promise<void> {
  const col = await getCollection();
  await Promise.all([
    col.createIndex({ type: 1, gradeId: 1, subjectId: 1 }),
    col.createIndex({ type: 1, techCategorySlug: 1, category: 1 }),
    col.createIndex({ id: 1 }, { unique: true }),
  ]);
}

// Merge DB and sample questions for scoring (backwards-compatible with old attempts)
export async function getQuestionsForScoring(questionIds: string[]): Promise<QuizQuestion[]> {
  const dbRows = await getQuestionsByIds(questionIds);
  return questionIds.map((id) => {
    const db = dbRows.find((q) => q.id === id);
    if (db) return db as unknown as QuizQuestion;
    return SAMPLE_QUESTIONS.find((q) => q.id === id) ?? null;
  }).filter((q): q is QuizQuestion => q !== null);
}
