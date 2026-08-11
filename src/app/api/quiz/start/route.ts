import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { createAttempt } from "@/lib/quizAttempts";
import { SAMPLE_QUESTIONS, getPublicQuestions, type QuizConfig } from "@/lib/quiz";

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

  const questionIds = SAMPLE_QUESTIONS.map((q) => q.id);
  const attempt = await createAttempt(userId, config, questionIds);

  return NextResponse.json({
    attemptId: attempt.id,
    questions: getPublicQuestions(),
  });
}
