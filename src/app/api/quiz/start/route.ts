import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { createAttempt } from "@/lib/quizAttempts";
import { SAMPLE_QUESTIONS, type QuizConfig } from "@/lib/quiz";
import {
  getGradeSubjectQuestions,
  getTechCategoryQuestions,
} from "@/lib/questionsDb";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId =
    (session.user as { id?: string }).id ?? session.user.email ?? "unknown";

  const body = await req.json().catch(() => ({}));

  const config: QuizConfig = {
    type: body.type === "technology" ? "technology" : "grade-subject",
    gradeId: body.gradeId,
    subjectId: body.subjectId,
    techSlug: body.techSlug,
    itemSlug: body.itemSlug,
    label: body.label ?? "Quiz",
  };

  // Fetch questions from MongoDB, fall back to sample questions
  let dbQuestions =
    config.type === "technology"
      ? await getTechCategoryQuestions(config.techSlug ?? "").catch(() => [])
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
