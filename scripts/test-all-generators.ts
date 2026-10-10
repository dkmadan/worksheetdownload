// ─────────────────────────────────────────────────────────────────────────────
// Automated Test Suite for All 6 Worksheet Generators + Shared Architecture
// Run with: npx tsx scripts/test-all-generators.ts
// ─────────────────────────────────────────────────────────────────────────────

import { TOOLS, getTool } from "../src/lib/tools/registry";
import {
  generateReadingWorksheet,
  DEFAULT_READING_CONFIG,
  PASSAGE_BANK,
  READING_CATEGORIES,
  type ReadingConfig,
} from "../src/lib/tools/reading";
import {
  generateFractionProblems,
  simplify,
  formatFraction,
  formatMixedNumber,
  renderFractionCircle,
  renderFractionBar,
  renderFractionRect,
  renderFractionNumberLine,
  DEFAULT_FRACTIONS_CONFIG,
  type FractionsConfig,
} from "../src/lib/tools/fractions";
import {
  generateMoneyProblems,
  formatMoney,
  renderCoinSvg,
  renderBanknoteSvg,
  CURRENCY_METAS,
  CURRENCY_DENOMINATIONS,
  DEFAULT_MONEY_CONFIG,
  type CurrencyCode,
  type MoneyConfig,
} from "../src/lib/tools/money";
import {
  generateCrossword,
  parseCustomWords,
  BUILTIN_WORD_BANKS,
  type CrosswordConfig,
} from "../src/lib/tools/crossword";
import {
  generateGrammarWorksheet,
  GRAMMAR_BANK,
  GRAMMAR_TOPICS,
  EXERCISE_TYPE_OPTIONS,
  DEFAULT_GRAMMAR_CONFIG,
  type GrammarConfig,
} from "../src/lib/tools/grammar";
import {
  getDuplexCardOrder,
  parseFlashcardsCsv,
  BUILTIN_FLASHCARD_DECKS,
} from "../src/lib/tools/flashcards";
import {
  buildReadingPdf,
  buildFractionsPdf,
  buildMoneyPdf,
  buildCrosswordPdf,
  buildGrammarPdf,
  buildFlashcardsPdf,
} from "../src/lib/tools/generators-pdf";
import {
  buildMathPdf,
  buildSpellingPdf,
  buildTimesTablePdf,
} from "../src/lib/tools/pdf";
import { generateMathProblems, DEFAULT_MATH_CONFIG } from "../src/lib/tools/math";
import { generateTable, DEFAULT_TABLE_CONFIG } from "../src/lib/tools/times-table";

function assert(condition: unknown, msg: string) {
  if (!condition) {
    console.error(`❌ ASSERTION FAILED: ${msg}`);
    process.exit(1);
  }
}

function isPdf(bytes: Uint8Array): boolean {
  // Check PDF magic header %PDF (0x25, 0x50, 0x44, 0x46)
  return (
    bytes.length > 50 &&
    bytes[0] === 0x25 &&
    bytes[1] === 0x50 &&
    bytes[2] === 0x44 &&
    bytes[3] === 0x46
  );
}

async function runAllTests() {
  console.log("============================================================");
  console.log("STARTING TEST SUITE: 6 WORKSHEET GENERATORS + SYSTEM HEALTH");
  console.log("============================================================\n");

  // ── TEST 1: Tool Registry Integrity ───────────────────────────────────────
  console.log("TEST 1: Verifying Registry & New Slugs...");
  assert(TOOLS.length === 15, `Expected 15 tools in registry, found ${TOOLS.length}`);
  const expectedSlugs = [
    "reading-comprehension-generator",
    "fractions-visual-worksheet-generator",
    "money-counting-worksheet-generator",
    "crossword-generator",
    "grammar-exercise-generator",
    "flashcard-generator",
  ];
  for (const slug of expectedSlugs) {
    const meta = getTool(slug);
    assert(!!meta, `Tool slug ${slug} not found in registry`);
    assert(meta!.title.length > 5, `Tool ${slug} missing valid title`);
    assert(meta!.description.length > 20, `Tool ${slug} missing description`);
    assert(meta!.keywords.length >= 3, `Tool ${slug} missing keywords`);
    assert(meta!.gradient.length > 5, `Tool ${slug} missing gradient`);
    assert(meta!.accent.length > 3, `Tool ${slug} missing accent`);
  }
  console.log("✅ Registry integrity test passed (15 tools registered).\n");

  // ── TEST 2: Reading Comprehension Generator ──────────────────────────────
  console.log("TEST 2: Verifying Reading Comprehension Generator...");
  assert(PASSAGE_BANK.length >= 8, "Passage bank must contain at least 8 vetted passages");

  // Test K-12 generation
  const gradesToTest: ("K" | "3" | "6" | "10" | "12")[] = ["K", "3", "6", "10", "12"];
  for (const g of gradesToTest) {
    const sheet = generateReadingWorksheet(
      {
        ...DEFAULT_READING_CONFIG,
        grade: g,
        questionCount: 5,
      },
      0x1234
    );
    assert(sheet.paragraphs.length >= 1, `Grade ${g} must generate paragraphs`);
    assert(sheet.questions.length === 5, `Expected 5 questions for grade ${g}`);
    assert(sheet.answerKey.length === 5, "Answer key count mismatch");
    for (const q of sheet.questions) {
      assert(q.prompt.length > 5, "Question prompt cannot be empty");
      assert(q.answer.length > 0, "Question answer cannot be empty");
      if (q.type === "multiple-choice") {
        assert(Boolean(q.options && q.options.length === 4), "MCQ must have 4 options");
      }
    }
  }

  // Test custom passage synthesis
  const customSheet = generateReadingWorksheet(
    {
      ...DEFAULT_READING_CONFIG,
      customText:
        "The red fox ran swiftly through the quiet forest. It searched for berries beneath the tall pines. Evening was arriving quickly.",
      customTitle: "The Forest Fox",
      questionCount: 5,
    },
    0x999
  );
  assert(customSheet.title === "The Forest Fox", "Custom title mismatch");
  assert(customSheet.questions.length === 5, "Custom question count mismatch");

  // Test PDF generation
  const readingPdfBytes = await buildReadingPdf({
    title: customSheet.title,
    category: customSheet.category,
    grade: customSheet.grade,
    paragraphs: customSheet.paragraphs,
    questions: customSheet.questions,
    includeAnswerKey: true,
  });
  assert(isPdf(readingPdfBytes), "Reading Comprehension PDF export failed");
  console.log(`✅ Reading Comprehension generator test passed (PDF size: ${readingPdfBytes.length} bytes).\n`);

  // ── TEST 3: Fractions Visual Worksheets ────────────────────────────────────
  console.log("TEST 3: Verifying Fractions Visual Generator...");
  // Test rational arithmetic
  assert(simplify(4, 8).n === 1 && simplify(4, 8).d === 2, "simplify(4, 8) must equal 1/2");
  assert(simplify(6, 9).n === 2 && simplify(6, 9).d === 3, "simplify(6, 9) must equal 2/3");
  assert(formatFraction(3, 4) === "3/4", "formatFraction(3, 4) failed");
  assert(formatMixedNumber(2, 1, 3) === "2 1/3", "formatMixedNumber(2, 1, 3) failed");

  // Test SVG diagram renderers
  const svgCircle = renderFractionCircle(3, 4, 3, 72, false);
  assert(svgCircle.includes("<svg") && svgCircle.includes("</svg>"), "renderFractionCircle must output SVG");
  const svgBar = renderFractionBar(2, 5, 2, 100, 30, false);
  assert(svgBar.includes("<svg") && svgBar.includes("</svg>"), "renderFractionBar must output SVG");
  const svgRect = renderFractionRect(4, 6, 4, 80, 40, false);
  assert(svgRect.includes("<svg") && svgRect.includes("</svg>"), "renderFractionRect must output SVG");
  const svgLine = renderFractionNumberLine(3, 5, true, 120, 36);
  assert(svgLine.includes("<svg") && svgLine.includes("</svg>"), "renderFractionNumberLine must output SVG");

  // Test problem generator across exercises
  const fractionProblems = generateFractionProblems(
    {
      ...DEFAULT_FRACTIONS_CONFIG,
      problemCount: 9,
      exercises: [
        "identify",
        "shade",
        "equivalent",
        "compare",
        "simplify",
        "addition",
        "subtraction",
        "improper",
        "mixed-numbers",
      ],
    },
    0x5678
  );
  assert(fractionProblems.length === 9, "Expected 9 fraction problems");
  for (const p of fractionProblems) {
    assert(p.answer.length > 0, `Problem ${p.num} answer missing`);
    assert(p.diagramA.denominator >= 2, "Denominator must be >= 2");
  }

  // Test PDF generation
  const fractionsPdfBytes = await buildFractionsPdf({
    title: "Visual Fractions Practice Worksheet",
    problems: fractionProblems,
    includeAnswerKey: true,
    grayscale: false,
  });
  assert(isPdf(fractionsPdfBytes), "Fractions PDF export failed");
  console.log(`✅ Fractions Visual generator test passed (PDF size: ${fractionsPdfBytes.length} bytes).\n`);

  // ── TEST 4: Money-Counting Worksheets ─────────────────────────────────────
  console.log("TEST 4: Verifying Money-Counting Generator...");
  // Test currency formatting across currencies
  assert(formatMoney(175, "USD") === "$1.75", "USD format failed");
  assert(formatMoney(50, "USD") === "50¢", "USD cents format failed");
  assert(formatMoney(2500, "INR") === "₹25", "INR format failed");
  assert(formatMoney(350, "GBP") === "£3.50", "GBP format failed");
  assert(formatMoney(20, "GBP") === "20p", "GBP pence format failed");
  assert(formatMoney(420, "EUR") === "4,20 €", "EUR format failed");

  // Test currency denominations
  const currencies: CurrencyCode[] = ["USD", "INR", "GBP", "EUR", "CAD", "AUD"];
  for (const curr of currencies) {
    const denoms = CURRENCY_DENOMINATIONS[curr];
    assert(denoms && denoms.length >= 5, `Currency ${curr} missing denominations`);
    for (const d of denoms) {
      assert(d.value > 0, `Denomination ${d.name} must have positive value`);
      if (d.isCoin) {
        const svg = renderCoinSvg(d, 40, false);
        assert(svg.includes("<svg"), `Coin SVG for ${d.name} failed`);
      } else {
        const svg = renderBanknoteSvg(d, 60, 30, false);
        assert(svg.includes("<svg"), `Banknote SVG for ${d.name} failed`);
      }
    }
  }

  // Test money problems generation
  const moneyProblems = generateMoneyProblems(
    {
      ...DEFAULT_MONEY_CONFIG,
      currency: "USD",
      problemCount: 9,
      exercises: [
        "identify-coins",
        "identify-banknotes",
        "count-coins",
        "count-mixed",
        "add-money",
        "compare-money",
        "make-amount",
        "calculate-change",
        "shopping-word-problems",
      ],
    },
    0xabcd
  );
  assert(moneyProblems.length === 9, "Expected 9 money problems");
  for (const mp of moneyProblems) {
    assert(mp.answer.length > 0, `Money problem ${mp.num} answer missing`);
  }

  // Test PDF generation
  const moneyPdfBytes = await buildMoneyPdf({
    title: "Money Math Practice Worksheet",
    problems: moneyProblems,
    currency: "USD",
    includeAnswerKey: true,
    grayscale: false,
  });
  assert(isPdf(moneyPdfBytes), "Money PDF export failed");
  console.log(`✅ Money-Counting generator test passed (PDF size: ${moneyPdfBytes.length} bytes).\n`);

  // ── TEST 5: Crossword Puzzle Generator ────────────────────────────────────
  console.log("TEST 5: Verifying Crossword Puzzle Generator...");
  // Test custom input parser
  const customPairs = parseCustomWords("EAGLE: A magnificent bird of prey\nLION: King of the beasts");
  assert(customPairs.length === 2, "Custom words parser failed");
  assert(customPairs[0].word === "EAGLE", "Parsed word must be uppercase");

  // Test puzzle generation with builtin bank
  const puzzle = generateCrossword(
    {
      grade: 5,
      subject: "science",
      difficulty: "medium",
      gridSize: 10,
      wordCount: 8,
      includeWordBank: true,
      includeAnswerKey: true,
    },
    0x4242
  );
  assert(puzzle.size === 10, "Grid size mismatch");
  assert(puzzle.placedWords.length >= 3, "At least 3 words must be placed in 10x10 grid");
  assert(puzzle.acrossClues.length + puzzle.downClues.length === puzzle.placedWords.length, "Clues count mismatch");

  // Verify crossword legality: no conflicting letters
  for (const placed of puzzle.placedWords) {
    for (let i = 0; i < placed.word.length; i++) {
      const r = placed.direction === "across" ? placed.row : placed.row + i;
      const c = placed.direction === "across" ? placed.col + i : placed.col;
      const cell = puzzle.grid[r][c];
      assert(cell !== null, `Placed cell (${r}, ${c}) cannot be null`);
      assert(cell!.char === placed.word[i], `Letter mismatch in cell (${r}, ${c}): expected ${placed.word[i]}, got ${cell!.char}`);
    }
  }

  // Test PDF generation
  const crosswordPdfBytes = await buildCrosswordPdf({
    title: "Science Crossword Puzzle",
    crossword: puzzle,
    includeWordBank: true,
    includeAnswerKey: true,
  });
  assert(isPdf(crosswordPdfBytes), "Crossword PDF export failed");
  console.log(`✅ Crossword Puzzle generator test passed (PDF size: ${crosswordPdfBytes.length} bytes).\n`);

  // ── TEST 6: Grammar Exercises Generator ───────────────────────────────────
  console.log("TEST 6: Verifying Grammar Exercises Generator...");
  assert(GRAMMAR_BANK.length >= 16, "Grammar bank must cover all topics");
  assert(GRAMMAR_TOPICS.length === 16, "Expected 16 grammar topics");
  assert(EXERCISE_TYPE_OPTIONS.length === 7, "Expected 7 grammar exercise types");

  const grammarSheet = generateGrammarWorksheet(
    {
      ...DEFAULT_GRAMMAR_CONFIG,
      problemCount: 10,
    },
    0x7777
  );
  assert(grammarSheet.items.length === 10, "Expected 10 grammar items");
  assert(grammarSheet.answerKey.length === 10, "Grammar answer key mismatch");
  for (const item of grammarSheet.items) {
    assert(item.prompt.length > 5, "Grammar prompt cannot be empty");
    assert(item.answer.length > 0, "Grammar answer cannot be empty");
  }

  // Test PDF generation
  const grammarPdfBytes = await buildGrammarPdf({
    title: grammarSheet.title,
    subtitle: grammarSheet.subtitle,
    items: grammarSheet.items,
    includeAnswerKey: true,
  });
  assert(isPdf(grammarPdfBytes), "Grammar PDF export failed");
  console.log(`✅ Grammar Exercise generator test passed (PDF size: ${grammarPdfBytes.length} bytes).\n`);

  // ── TEST 7: Flashcard Generator ───────────────────────────────────────────
  console.log("TEST 7: Verifying Flashcard Generator...");
  // Test CSV parser
  const parsedCards = parseFlashcardsCsv("Gravity, Force of attraction\nOrbit, Curved path");
  assert(parsedCards.length === 2, "CSV flashcard parser failed");
  assert(parsedCards[0].front === "Gravity" && parsedCards[0].back === "Force of attraction", "CSV content mismatch");

  // Test Duplex alignment (4 cards per page -> 2 cols x 2 rows)
  const deck = BUILTIN_FLASHCARD_DECKS.mathematics;
  assert(deck.length >= 8, "Math deck must have at least 8 cards");
  const { frontPages, backPages } = getDuplexCardOrder(deck, 4);
  assert(frontPages.length >= 2, "Front pages count mismatch");
  assert(backPages.length === frontPages.length, "Back pages count must match front pages count");

  // Verify column mirroring for row 0: front [0, 1] -> back [1, 0]
  const page0Front = frontPages[0];
  const page0Back = backPages[0];
  assert(page0Front[0].id === page0Back[1].id, "Duplex alignment mirror check 1 failed");
  assert(page0Front[1].id === page0Back[0].id, "Duplex alignment mirror check 2 failed");

  // Test PDF generation
  const flashcardsPdfBytes = await buildFlashcardsPdf({
    title: "Math Facts Flashcards",
    cards: deck.slice(0, 8),
    cardsPerPage: 4,
    orientation: "portrait",
    borders: true,
    doubleSided: true,
    colorMode: "color",
  });
  assert(isPdf(flashcardsPdfBytes), "Flashcards PDF export failed");
  console.log(`✅ Flashcard generator test passed (PDF size: ${flashcardsPdfBytes.length} bytes).\n`);

  // ── TEST 8: Regression Check on Existing Tools ───────────────────────────
  console.log("TEST 8: Regression Testing Existing Tools...");
  const mathProblems = generateMathProblems(DEFAULT_MATH_CONFIG, 0x111);
  const mathPdf = await buildMathPdf({
    title: "Math Practice",
    subtitle: "Addition",
    problems: mathProblems,
    columns: 2,
    vertical: false,
    includeAnswerKey: true,
  });
  assert(isPdf(mathPdf), "Existing Math PDF generation broken");

  const spellingPdf = await buildSpellingPdf({
    title: "Spelling Worksheet",
    words: ["apple", "banana"],
    activities: ["trace-write", "abc-order"],
    seed: 0x222,
    includeAnswerKey: true,
  });
  assert(isPdf(spellingPdf), "Existing Spelling PDF generation broken");

  const tableFacts = generateTable(DEFAULT_TABLE_CONFIG, 0x333);
  const timesTablePdf = await buildTimesTablePdf({
    title: "Times Tables",
    mode: "drill",
    facts: tableFacts,
    columns: 3,
    includeAnswerKey: true,
  });
  assert(isPdf(timesTablePdf), "Existing Times Table PDF generation broken");
  console.log("✅ Regression tests passed. All existing generators remain fully functional.\n");

  console.log("============================================================");
  console.log("ALL AUTOMATED TESTS PASSED SUCCESSFULLY! (8/8 TEST SUITES)");
  console.log("============================================================");
}

runAllTests().catch((err) => {
  console.error("Unhandled error in test runner:", err);
  process.exit(1);
});
