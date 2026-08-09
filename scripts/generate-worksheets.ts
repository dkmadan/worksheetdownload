import { writeFileSync, existsSync, mkdirSync } from "fs";
import { join } from "path";
import { CURRICULUM, GRADES_CURRICULUM, SUBJECTS_META, slugifyTopic } from "../src/lib/curriculum";
import { buildWorksheetPdf } from "./lib/pdf-builder";
import { getQuestions, getLayout } from "./lib/question-router";

const MATH_ONLY = process.argv.includes("--math-only");
const FORCE     = process.argv.includes("--force");
const OUT_DIR   = join(process.cwd(), "public", "worksheets", "pdfs");

if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

type Task = {
  gradeId: string; gradeLabel: string;
  subjectId: string; subjectLabel: string;
  topic: string; topicSlug: string;
  sheetNumber: number; filePath: string;
};

// Build task list
const tasks: Task[] = [];

for (const grade of GRADES_CURRICULUM) {
  const subjects = CURRICULUM[grade.id] ?? {};
  for (const [subjectId, topics] of Object.entries(subjects)) {
    if (MATH_ONLY && subjectId !== "mathematics") continue;
    const subjectDef = SUBJECTS_META[subjectId];
    const subjectLabel = subjectDef?.label ?? subjectId;
    for (const topic of topics) {
      const topicSlug = slugifyTopic(topic);
      for (let n = 1; n <= 4; n++) {
        const fileName = `${grade.id}-${subjectId}-${topicSlug}-sheet-${n}.pdf`;
        const filePath = join(OUT_DIR, fileName);
        tasks.push({
          gradeId: grade.id, gradeLabel: grade.label,
          subjectId, subjectLabel,
          topic, topicSlug, sheetNumber: n, filePath,
        });
      }
    }
  }
}

const total = tasks.length;
const toGenerate = FORCE ? tasks : tasks.filter(t => !existsSync(t.filePath));
const skip = total - toGenerate.length;

console.log(`\nWorksheet Generator`);
console.log(`  Mode    : ${MATH_ONLY ? "Math only" : "All subjects"}`);
console.log(`  Total   : ${total} PDFs`);
console.log(`  Skipping: ${skip} already exist`);
console.log(`  Generating: ${toGenerate.length} PDFs`);
console.log(`  Output  : ${OUT_DIR}\n`);

if (toGenerate.length === 0) {
  console.log("Nothing to generate. Use --force to regenerate.");
  process.exit(0);
}

let done = 0;
let errors = 0;

async function run() {
  const BATCH = 20; // concurrent PDF builds
  let i = 0;
  while (i < toGenerate.length) {
    const batch = toGenerate.slice(i, i + BATCH);
    await Promise.all(batch.map(async (t) => {
      try {
        const questions = getQuestions(t.gradeId, t.subjectId, t.topic, t.sheetNumber);
        const layout = getLayout(t.gradeId, t.subjectId, t.topic);
        const pdfBytes = await buildWorksheetPdf({
          topicLabel: t.topic,
          gradeLabel: t.gradeLabel,
          subjectLabel: t.subjectLabel,
          sheetNumber: t.sheetNumber,
          questions,
          layout,
        });
        writeFileSync(t.filePath, pdfBytes);
        done++;
        if (done % 50 === 0 || done === toGenerate.length) {
          const pct = ((done / toGenerate.length) * 100).toFixed(1);
          process.stdout.write(`\r  [${pct}%] ${done}/${toGenerate.length} done  `);
        }
      } catch (err) {
        errors++;
        console.error(`\n  ERROR: ${t.filePath}`);
        console.error(`         ${(err as Error).message}`);
      }
    }));
    i += BATCH;
  }

  console.log(`\n\nDone!`);
  console.log(`  Generated : ${done}`);
  if (errors > 0) console.log(`  Errors    : ${errors}`);
  console.log(`  Output dir: ${OUT_DIR}`);
}

run().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
