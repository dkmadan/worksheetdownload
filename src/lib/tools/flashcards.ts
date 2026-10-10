// ─────────────────────────────────────────────────────────────────────────────
// Flashcard Generator Engine
// Duplex printing alignment, built-in subject decks, CSV import, cutting guides,
// and educational SVG icons.
// ─────────────────────────────────────────────────────────────────────────────

export type FlashcardSubject =
  | "english"
  | "mathematics"
  | "science"
  | "geography"
  | "general-knowledge"
  | "languages";

export type FlashcardType =
  | "word-meaning"
  | "picture-word"
  | "question-answer"
  | "math-facts"
  | "vocabulary"
  | "spelling"
  | "custom";

export interface Flashcard {
  id: string;
  front: string;
  back: string;
  subtextFront?: string;
  subtextBack?: string;
  icon?: string; // educational icon name or emoji
}

export interface FlashcardConfig {
  grade: string;
  subject: FlashcardSubject;
  cardType: FlashcardType;
  cardsPerPage: 2 | 4 | 6 | 8 | 9;
  orientation: "portrait" | "landscape";
  cardSize: "small" | "medium" | "large";
  colorMode: "color" | "monochrome";
  borders: boolean; // dashed cutting guides
  doubleSided: boolean; // duplex aligned back page
  cards: Flashcard[];
}

export const FLASHCARD_SUBJECTS: { id: FlashcardSubject; label: string; icon: string }[] = [
  { id: "english", label: "English & Phonics", icon: "📖" },
  { id: "mathematics", label: "Math & Arithmetic Facts", icon: "✖️" },
  { id: "science", label: "Science & Biology", icon: "🔬" },
  { id: "geography", label: "Geography & Capitals", icon: "🗺️" },
  { id: "general-knowledge", label: "General Knowledge", icon: "💡" },
  { id: "languages", label: "Languages (Spanish / French)", icon: "🗣️" },
];

export const FLASHCARD_TYPES: { id: FlashcardType; label: string }[] = [
  { id: "word-meaning", label: "Word & Definition" },
  { id: "picture-word", label: "Picture & Vocabulary" },
  { id: "question-answer", label: "Question & Answer" },
  { id: "math-facts", label: "Math Facts (7 × 8)" },
  { id: "vocabulary", label: "Vocabulary & Context" },
  { id: "spelling", label: "Spelling & Phonics" },
  { id: "custom", label: "Custom Cards" },
];

// ── Built-in Flashcard Collections ───────────────────────────────────────────

export const BUILTIN_FLASHCARD_DECKS: Record<FlashcardSubject, Flashcard[]> = {
  mathematics: [
    { id: "m1", front: "6 × 7", back: "42", subtextFront: "Multiplication Fact", icon: "✖️" },
    { id: "m2", front: "8 × 9", back: "72", subtextFront: "Multiplication Fact", icon: "✖️" },
    { id: "m3", front: "12 × 12", back: "144", subtextFront: "Multiplication Fact", icon: "✖️" },
    { id: "m4", front: "15 + 28", back: "43", subtextFront: "Addition Fact", icon: "➕" },
    { id: "m5", front: "50 - 18", back: "32", subtextFront: "Subtraction Fact", icon: "➖" },
    { id: "m6", front: "72 ÷ 8", back: "9", subtextFront: "Division Fact", icon: "➗" },
    { id: "m7", front: "What is 3/4 as a decimal?", back: "0.75", subtextFront: "Fraction to Decimal", icon: "🍰" },
    { id: "m8", front: "What is a Polygon with 8 sides?", back: "Octagon", subtextFront: "Geometry", icon: "🛑" },
    { id: "m9", front: "Square root of 81?", back: "9", subtextFront: "Radical", icon: "📐" },
    { id: "m10", front: "Formula for area of a triangle?", back: "1/2 × base × height", subtextFront: "Geometry", icon: "🔺" },
  ],
  english: [
    { id: "e1", front: "Benevolent", back: "Kind, generous, and caring about others", subtextFront: "Adjective", icon: "💖" },
    { id: "e2", front: "Metaphor", back: "Figure of speech comparing two things without using 'like' or 'as'", subtextFront: "Literary Device", icon: "✨" },
    { id: "e3", front: "Audacious", back: "Showing a willingness to take surprisingly bold risks", subtextFront: "Adjective", icon: "🦁" },
    { id: "e4", front: "Chronological", back: "Arranged in the order of time occurrence", subtextFront: "Adjective", icon: "⏱️" },
    { id: "e5", front: "Ephemeral", back: "Lasting for a very short time; fleeting", subtextFront: "Adjective", icon: "⏳" },
    { id: "e6", front: "Antonym", back: "A word having a meaning opposite to another word", subtextFront: "Grammar", icon: "🔄" },
    { id: "e7", front: "Onomatopoeia", back: "A word that imitates the sound it represents (e.g. buzz, hiss)", subtextFront: "Literary Device", icon: "🔊" },
    { id: "e8", front: "Pragmatic", back: "Dealing with things sensibly and realistically based on practical considerations", subtextFront: "Adjective", icon: "🧠" },
  ],
  science: [
    { id: "s1", front: "Mitochondria", back: "The powerhouse of the cell; produces ATP energy", subtextFront: "Cell Biology", icon: "🔬" },
    { id: "s2", front: "Photosynthesis", back: "Process by which plants convert sunlight, water, and CO2 into glucose and oxygen", subtextFront: "Botany", icon: "🌿" },
    { id: "s3", front: "Au", back: "Gold (Atomic Number: 79)", subtextFront: "Periodic Table", icon: "🥇" },
    { id: "s4", front: "Fe", back: "Iron (Atomic Number: 26)", subtextFront: "Periodic Table", icon: "⚙️" },
    { id: "s5", front: "Atmospheric Layers (Order)", back: "Troposphere, Stratosphere, Mesosphere, Thermosphere, Exosphere", subtextFront: "Earth Science", icon: "☁️" },
    { id: "s6", front: "Speed of Light", back: "Approx. 300,000 km/s (186,000 miles/second)", subtextFront: "Physics", icon: "⚡" },
    { id: "s7", front: "Closest Planet to the Sun?", back: "Mercury", subtextFront: "Astronomy", icon: "🪐" },
    { id: "s8", front: "What is an Herbivore?", back: "An animal that feeds exclusively on plants", subtextFront: "Ecology", icon: "🦌" },
  ],
  geography: [
    { id: "g1", front: "France", back: "Capital: Paris\nContinent: Europe", subtextFront: "World Capitals", icon: "🗼" },
    { id: "g2", front: "Japan", back: "Capital: Tokyo\nContinent: Asia", subtextFront: "World Capitals", icon: "🗾" },
    { id: "g3", front: "Egypt", back: "Capital: Cairo\nContinent: Africa", subtextFront: "World Capitals", icon: "🏛️" },
    { id: "g4", front: "Australia", back: "Capital: Canberra\nContinent: Oceania", subtextFront: "World Capitals", icon: "🦘" },
    { id: "g5", front: "Brazil", back: "Capital: Brasília\nContinent: South America", subtextFront: "World Capitals", icon: "🌴" },
    { id: "g6", front: "Canada", back: "Capital: Ottawa\nContinent: North America", subtextFront: "World Capitals", icon: "🍁" },
    { id: "g7", front: "Longest River in the World?", back: "The Nile River (approx. 6,650 km)", subtextFront: "Geography Fact", icon: "🌊" },
    { id: "g8", front: "Highest Mountain in the World?", back: "Mount Everest (8,848.86 m / 29,031.7 ft)", subtextFront: "Geography Fact", icon: "🏔️" },
  ],
  "general-knowledge": [
    { id: "gk1", front: "How many continents are there?", back: "7 Continents (Asia, Africa, N. America, S. America, Antarctica, Europe, Australia)", subtextFront: "Geography", icon: "🌍" },
    { id: "gk2", front: "How many bones are in the adult human body?", back: "206 Bones", subtextFront: "Human Anatomy", icon: "🦴" },
    { id: "gk3", front: "Who invented the telephone?", back: "Alexander Graham Bell (1876)", subtextFront: "Inventions", icon: "☎️" },
    { id: "gk4", front: "Primary Colors of Light?", back: "Red, Green, Blue (RGB)", subtextFront: "Optics", icon: "🌈" },
    { id: "gk5", front: "Largest Ocean on Earth?", back: "Pacific Ocean", subtextFront: "Earth", icon: "🌊" },
    { id: "gk6", front: "What year did Apollo 11 land on the Moon?", back: "1969 (Neil Armstrong & Buzz Aldrin)", subtextFront: "Space History", icon: "🚀" },
  ],
  languages: [
    { id: "l1", front: "Hola / Adiós", back: "Hello / Goodbye (Spanish)", subtextFront: "Spanish Vocab", icon: "🇪🇸" },
    { id: "l2", front: "Por favor / Gracias", back: "Please / Thank you (Spanish)", subtextFront: "Spanish Vocab", icon: "🇪🇸" },
    { id: "l3", front: "Bonjour / Au revoir", back: "Hello / Goodbye (French)", subtextFront: "French Vocab", icon: "🇫🇷" },
    { id: "l4", front: "S'il vous plaît / Merci", back: "Please / Thank you (French)", subtextFront: "French Vocab", icon: "🇫🇷" },
    { id: "l5", front: "El libro / Le livre", back: "The book (Spanish / French)", subtextFront: "Nouns", icon: "📚" },
    { id: "l6", front: "El agua / L'eau", back: "Water (Spanish / French)", subtextFront: "Nouns", icon: "💧" },
  ],
};

// ── CSV Import Parser ─────────────────────────────────────────────────────────

export function parseFlashcardsCsv(csvText: string): Flashcard[] {
  const lines = csvText.split("\n").map((l) => l.trim()).filter(Boolean);
  const cards: Flashcard[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    let front = "";
    let back = "";

    if (line.includes("\t")) {
      const parts = line.split("\t");
      front = parts[0]?.trim() || "";
      back = parts[1]?.trim() || "";
    } else if (line.includes(",")) {
      const parts = line.split(",");
      front = parts[0]?.trim() || "";
      back = parts.slice(1).join(",").trim() || "";
    } else if (line.includes(" - ")) {
      const parts = line.split(" - ");
      front = parts[0]?.trim() || "";
      back = parts.slice(1).join(" - ").trim() || "";
    } else {
      front = line;
      back = "Back";
    }

    if (front) {
      cards.push({
        id: `custom-${i + 1}`,
        front,
        back: back || "—",
      });
    }
  }

  return cards;
}

// ── Duplex (Double-Sided) Alignment Calculator ────────────────────────────────

/**
 * Calculates page layout indices for front and back pages.
 * To ensure double-sided printing aligns correctly when flipped along the long edge:
 * In a grid with `cols` columns and `rows` rows:
 * Front page: standard order (0, 1, 2, ... cols-1)
 * Back page: each row is horizontally mirrored!
 * Row 0: indices [cols - 1, cols - 2, ... 0]
 */
export function getDuplexCardOrder(
  cards: Flashcard[],
  cardsPerPage: 2 | 4 | 6 | 8 | 9
): { frontPages: Flashcard[][]; backPages: Flashcard[][] } {
  let cols = 2;
  let rows = 2;

  if (cardsPerPage === 2) { cols = 1; rows = 2; }
  else if (cardsPerPage === 4) { cols = 2; rows = 2; }
  else if (cardsPerPage === 6) { cols = 2; rows = 3; }
  else if (cardsPerPage === 8) { cols = 2; rows = 4; }
  else if (cardsPerPage === 9) { cols = 3; rows = 3; }

  const perPage = cols * rows;
  const frontPages: Flashcard[][] = [];
  const backPages: Flashcard[][] = [];

  for (let i = 0; i < cards.length; i += perPage) {
    const chunk = cards.slice(i, i + perPage);
    frontPages.push(chunk);

    // Create horizontally mirrored back page
    const backGrid: (Flashcard | null)[] = Array(perPage).fill(null);
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const srcIdx = r * cols + c;
        // Mirror column position
        const targetCol = cols - 1 - c;
        const targetIdx = r * cols + targetCol;
        if (srcIdx < chunk.length) {
          backGrid[targetIdx] = chunk[srcIdx];
        }
      }
    }

    backPages.push(backGrid.filter((c): c is Flashcard => c !== null));
  }

  return { frontPages, backPages };
}

export const DEFAULT_FLASHCARD_CONFIG: FlashcardConfig = {
  grade: "Grade 3–5",
  subject: "mathematics",
  cardType: "math-facts",
  cardsPerPage: 4,
  orientation: "portrait",
  cardSize: "medium",
  colorMode: "color",
  borders: true,
  doubleSided: true,
  cards: BUILTIN_FLASHCARD_DECKS.mathematics,
};
