import { NextRequest, NextResponse } from "next/server";
import { getAttemptById } from "@/lib/quizAttempts";
import { SAMPLE_QUESTIONS } from "@/lib/quiz";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ attemptId: string }> }
) {
  const { attemptId } = await params;
  const attempt = await getAttemptById(attemptId);

  // attemptId acts as the access token — no ownership check needed
  if (!attempt) {
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
