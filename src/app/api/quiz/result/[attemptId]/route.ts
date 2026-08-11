import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getAttemptById } from "@/lib/quizAttempts";
import { SAMPLE_QUESTIONS } from "@/lib/quiz";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ attemptId: string }> }
) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId =
    (session.user as { id?: string }).id ?? session.user.email ?? "unknown";

  const { attemptId } = await params;
  const attempt = await getAttemptById(attemptId);

  if (!attempt || attempt.userId !== userId) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  if (attempt.status !== "completed") {
    return NextResponse.json({ error: "Quiz not yet completed" }, { status: 400 });
  }

  const review = attempt.questionIds.map((qId, i) => {
    const q = SAMPLE_QUESTIONS.find((x) => x.id === qId)!;
    const userAnswer = attempt.answers[i] ?? null;
    return {
      questionNumber: i + 1,
      text: q.text,
      options: q.options,
      subject: q.subject,
      userAnswer,
      correctIndex: q.correctIndex,
      explanation: q.explanation,
      isCorrect: userAnswer === q.correctIndex,
      isSkipped: userAnswer === null,
    };
  });

  return NextResponse.json({
    attemptId: attempt.id,
    config: attempt.config,
    score: attempt.score ?? 0,
    totalQuestions: attempt.totalQuestions,
    startedAt: attempt.startedAt,
    completedAt: attempt.completedAt,
    review,
  });
}
