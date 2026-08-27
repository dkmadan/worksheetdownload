import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { createAttempt } from "@/lib/quizAttempts";
import { SAMPLE_QUESTIONS, QUIZ_CATEGORIES, type QuizConfig } from "@/lib/quiz";
import {
  getGradeSubjectQuestions,
  getTechCategoryQuestions,
} from "@/lib/questionsDb";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  const userId =
    (session?.user as { id?: string } | undefined)?.id ??
    session?.user?.email ??
    "guest";

  const body = await req.json().catch(() => ({}));

  const type = body.type === "technology" ? "technology" : "grade-subject";
  const category =
    type === "technology" && QUIZ_CATEGORIES.includes(body.category)
      ? (body.category as QuizConfig["category"])
      : undefined;

  const config: QuizConfig = {
    type,
    gradeId: body.gradeId,
    subjectId: body.subjectId,
    techSlug: body.techSlug,
    itemSlug: body.itemSlug,
    category,
    label: body.label ?? "Quiz",
  };

  // Fetch questions from MongoDB, fall back to sample questions
  let dbQuestions =
    config.type === "technology"
      ? await getTechCategoryQuestions(config.techSlug ?? "", config.category).catch(() => [])
      : await getGradeSubjectQuestions(
          config.gradeId ?? "",
          config.subjectId ?? ""
        ).catch(() => []);

  const useDb = dbQuestions.length >= 10;
  const questions = useDb
    ? dbQuestions.slice(0, 10)
    : SAMPLE_QUESTIONS.slice(0, 10);

  const questionIds = questions.map((q) => q.id);
  const attempt = await createAttempt(userId, config, questionIds);

  const publicQuestions = questions.map(({ correctIndex: _ci, ...q }) => q);

  return NextResponse.json({
    attemptId: attempt.id,
    questions: publicQuestions,
  });
}
