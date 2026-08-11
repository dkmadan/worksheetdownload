import { randomUUID } from "crypto";
import clientPromise from "./mongodb";
import type { QuizConfig } from "./quiz";

export interface QuizAttempt {
  id: string;
  userId: string;
  config: QuizConfig;
  questionIds: string[];
  answers: (number | null)[];
  score?: number;
  totalQuestions: number;
  status: "in-progress" | "completed";
  startedAt: string;
  completedAt?: string;
}

async function getCollection() {
  const client = await clientPromise;
  return client.db("worksheetdownload").collection<QuizAttempt>("quizAttempts");
}

export async function createAttempt(
  userId: string,
  config: QuizConfig,
  questionIds: string[]
): Promise<QuizAttempt> {
  const col = await getCollection();
  const attempt: QuizAttempt = {
    id: randomUUID(),
    userId,
    config,
    questionIds,
    answers: new Array(questionIds.length).fill(null),
    totalQuestions: questionIds.length,
    status: "in-progress",
    startedAt: new Date().toISOString(),
  };
  await col.insertOne(attempt);
  return attempt;
}

export async function getAttemptById(id: string): Promise<QuizAttempt | null> {
  const col = await getCollection();
  return col.findOne({ id }) as Promise<QuizAttempt | null>;
}

export async function submitAttempt(
  id: string,
  userId: string,
  answers: (number | null)[],
  score: number
): Promise<boolean> {
  const col = await getCollection();
  const result = await col.updateOne(
    { id, userId, status: "in-progress" },
    {
      $set: {
        answers,
        score,
        status: "completed",
        completedAt: new Date().toISOString(),
      },
    }
  );
  return result.modifiedCount === 1;
}
