import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getAttemptById, submitAttempt } from "@/lib/quizAttempts";
import { getQuestionsForScoring } from "@/lib/questionsDb";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId =
    (session.user as { id?: string }).id ?? session.user.email ?? "unknown";

  const body = await req.json().catch(() => ({}));
  const { attemptId, answers } = body as {
    attemptId?: string;
    answers?: (number | null)[];
  };

  if (!attemptId || !Array.isArray(answers)) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const attempt = await getAttemptById(attemptId);
  if (!attempt || attempt.userId !== userId) {
    return NextResponse.json({ error: "Attempt not found" }, { status: 404 });
  }
  if (attempt.status === "completed") {
    return NextResponse.json(
      { error: "This quiz has already been submitted" },
      { status: 409 }
    );
  }

  // Server-side scoring — correct answers never leave the server
  const scoringQuestions = await getQuestionsForScoring(attempt.questionIds);
  let score = 0;
  for (let i = 0; i < attempt.questionIds.length; i++) {
    const question = scoringQuestions.find((q) => q.id === attempt.questionIds[i]);
    if (question && answers[i] === question.correctIndex) {
      score++;
    }
  }

  const ok = await submitAttempt(attemptId, userId, answers, score);
  if (!ok) {
    return NextResponse.json({ error: "Submit failed" }, { status: 500 });
  }

  return NextResponse.json({ success: true, attemptId, score });
}
