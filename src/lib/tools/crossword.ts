// ─────────────────────────────────────────────────────────────────────────────
// Crossword Puzzle Generator Engine
// Constructs valid intersecting crossword grids, assigns standard clue numbering,
// and supports both curated educational wordbanks and custom word/clue input.
// ─────────────────────────────────────────────────────────────────────────────

import { makeRng, shuffle, type Rng } from "./prng";

export type CrosswordSubject =
  | "english"
  | "mathematics"
  | "science"
  | "history"
  | "geography"
  | "general-knowledge";

export interface WordCluePair {
  word: string;
  clue: string;
}

export interface PlacedWord {
  word: string;
  clue: string;
  row: number;
  col: number;
  direction: "across" | "down";
  number: number;
}

export interface CrosswordCell {
  char: string;
  number?: number;
  isStartOfAcross?: boolean;
  isStartOfDown?: boolean;
}

export interface CrosswordResult {
  size: number;
  grid: (CrosswordCell | null)[][]; // null means black/blocked cell
  acrossClues: { number: number; clue: string; word: string }[];
  downClues: { number: number; clue: string; word: string }[];
  placedWords: PlacedWord[];
  unplacedWords: WordCluePair[];
  allWords: string[];
}

export interface CrosswordConfig {
  grade: number; // 1 to 12
  subject: CrosswordSubject;
  topic?: string;
  difficulty: "easy" | "medium" | "hard";
  gridSize: 8 | 10 | 12 | 15;
  wordCount: number; // 5 to 25
  customInput?: string; // Lines of "WORD: Clue" or "WORD - Clue"
  includeWordBank: boolean;
  includeAnswerKey: boolean;
}

export const CROSSWORD_SUBJECTS: { id: CrosswordSubject; label: string; icon: string }[] = [
  { id: "english", label: "English & Literature", icon: "📚" },
  { id: "mathematics", label: "Mathematics & Geometry", icon: "📐" },
  { id: "science", label: "Science & Nature", icon: "🔬" },
  { id: "history", label: "World History", icon: "🏛️" },
  { id: "geography", label: "Geography & Earth", icon: "🌍" },
  { id: "general-knowledge", label: "General Knowledge", icon: "💡" },
];

// ── Built-in Curated Vocabulary Banks ─────────────────────────────────────────

export const BUILTIN_WORD_BANKS: Record<CrosswordSubject, WordCluePair[]> = {
  science: [
    { word: "SOLAR", clue: "Relating to or determined by the Sun." },
    { word: "ORBIT", clue: "Curved gravitational path of a celestial object." },
    { word: "GRAVITY", clue: "The force that attracts bodies toward the center of the Earth." },
    { word: "COMET", clue: "Celestial body of ice and dust with a glowing tail." },
    { word: "NEBULA", clue: "A giant cloud of dust and gas in outer space." },
    { word: "PLANET", clue: "Large celestial body orbiting a star." },
    { word: "METEOR", clue: "Streak of light made when space debris enters the atmosphere." },
    { word: "ECLIPSE", clue: "The blocking of light from one celestial body by another." },
    { word: "FOSSIL", clue: "Preserved remains of an ancient organism." },
    { word: "OXYGEN", clue: "Atmospheric gas essential for animal respiration." },
    { word: "CELL", clue: "The basic structural and functional unit of living organisms." },
    { word: "ENERGY", clue: "The capacity of a physical system to perform work." },
    { word: "PRISM", clue: "Transparent optical glass that splits light into a spectrum." },
    { word: "MAGNET", clue: "Material that produces a magnetic field attracting iron." },
    { word: "CARBON", clue: "Chemical element found in all organic life forms." },
  ],
  mathematics: [
    { word: "ANGLE", clue: "Space between two intersecting lines measured in degrees." },
    { word: "RADIUS", clue: "Distance from the center of a circle to its perimeter." },
    { word: "FACTOR", clue: "A number that divides into another without a remainder." },
    { word: "PRIME", clue: "A number greater than 1 with no positive divisors other than 1 and itself." },
    { word: "DECIMAL", clue: "Number system based on units of ten." },
    { word: "FRACTION", clue: "Numerical quantity that is not a whole number (e.g. 1/2)." },
    { word: "SQUARE", clue: "Four-sided polygon with equal sides and 90-degree angles." },
    { word: "VERTEX", clue: "Point where two or more curves, lines, or edges meet." },
    { word: "PRODUCT", clue: "Result obtained by multiplying two numbers." },
    { word: "SUM", clue: "The total amount resulting from the addition of numbers." },
    { word: "RATIO", clue: "The quantitative relation between two amounts." },
    { word: "VOLUME", clue: "The amount of 3D space an object occupies." },
  ],
  geography: [
    { word: "EQUATOR", clue: "Imaginary latitude line dividing Earth into North and South." },
    { word: "CANYON", clue: "Deep gorge carved through rock by a river." },
    { word: "DESERT", clue: "Arid land with very low precipitation and sparse vegetation." },
    { word: "ISLAND", clue: "Tract of land completely surrounded by water." },
    { word: "OCEAN", clue: "Vast continuous body of salt water covering 71% of Earth." },
    { word: "GLACIER", clue: "Slow-moving mass of compressed ice on land." },
    { word: "VOLCANO", clue: "Mountain with a vent where lava and ash erupt." },
    { word: "VALLEY", clue: "Low area between hills or mountains, often with a river." },
    { word: "COMPASS", clue: "Instrument containing a magnetized needle showing direction." },
    { word: "PENINSULA", clue: "Piece of land almost surrounded by water or projecting into sea." },
    { word: "PLATEAU", clue: "Elevated, flat-topped tableland with steep sides." },
  ],
  history: [
    { word: "EMPIRE", clue: "Extensive group of states under a single supreme authority." },
    { word: "KNIGHT", clue: "Medieval armored warrior granted an honorary title." },
    { word: "PYRAMID", clue: "Monumental stone structure with a triangular outer surface." },
    { word: "CASTLE", clue: "Fortified stronghold built during the Middle Ages." },
    { word: "TREATY", clue: "Formally concluded and ratified agreement between countries." },
    { word: "SCRIBE", clue: "Person who copied out documents before printing was invented." },
    { word: "COLONY", clue: "Territory under the political control of an overseas nation." },
    { word: "PHARAOH", clue: "Ruler of ancient Egypt regarded as a divine monarch." },
    { word: "VOYAGE", clue: "A long journey involving travel by sea or in space." },
  ],
  english: [
    { word: "METAPHOR", clue: "Figure of speech making a direct comparison without 'like' or 'as'." },
    { word: "STANZA", clue: "Group of lines forming the basic unit in a poem." },
    { word: "RHYME", clue: "Correspondence of sound between words or endings of words." },
    { word: "PLOT", clue: "The sequence of events comprising the storyline of a novel." },
    { word: "CLIMAX", clue: "The most intense or decisive moment in a narrative." },
    { word: "SONNET", clue: "A fourteen-line poem with a formal rhyme scheme." },
    { word: "SYNONYM", clue: "Word having the same or nearly the same meaning as another." },
    { word: "ANTONYM", clue: "A word opposite in meaning to another word." },
    { word: "PUNCTUATION", clue: "Marks such as commas and periods used to clarify meaning." },
  ],
  "general-knowledge": [
    { word: "DIAMOND", clue: "Precious gemstone consisting of clear crystallized carbon." },
    { word: "COMPASS", clue: "Navigational device pointing toward magnetic north." },
    { word: "OXYGEN", clue: "Life-supporting gas comprising 21% of Earth's atmosphere." },
    { word: "TELESCOPE", clue: "Optical instrument designed to make distant objects appear nearer." },
    { word: "ALPHABET", clue: "Standard set of letters used to write one or more languages." },
    { word: "CALENDAR", clue: "Chart or series of pages showing days, weeks, and months." },
    { word: "RAINBOW", clue: "Arch of spectral colors formed in the sky by refraction in water droplets." },
  ],
};

// ── Crossword Placement Engine ────────────────────────────────────────────────

export function parseCustomWords(input: string): WordCluePair[] {
  const lines = input.split("\n").map((l) => l.trim()).filter(Boolean);
  const pairs: WordCluePair[] = [];

  for (const line of lines) {
    let word = "";
    let clue = "";
    if (line.includes(":")) {
      const parts = line.split(":");
      word = parts[0].trim();
      clue = parts.slice(1).join(":").trim();
    } else if (line.includes("-")) {
      const parts = line.split("-");
      word = parts[0].trim();
      clue = parts.slice(1).join("-").trim();
    } else {
      const parts = line.split(/\s+/);
      word = parts[0];
      clue = parts.slice(1).join(" ") || `Clue for ${word}`;
    }

    const cleanWord = word.toUpperCase().replace(/[^A-Z]/g, "");
    if (cleanWord.length >= 2) {
      pairs.push({ word: cleanWord, clue: clue || `Definition for ${cleanWord}` });
    }
  }

  return pairs;
}

export function generateCrossword(
  cfg: CrosswordConfig,
  seed: number
): CrosswordResult {
  const rng = makeRng(seed);
  const size = cfg.gridSize;

  // 1. Gather raw words
  let candidates: WordCluePair[] = [];
  if (cfg.customInput && cfg.customInput.trim().length > 0) {
    candidates = parseCustomWords(cfg.customInput);
  }
  if (candidates.length < 3) {
    candidates = BUILTIN_WORD_BANKS[cfg.subject] || BUILTIN_WORD_BANKS.science;
  }

  // Filter candidates to those that can fit within grid boundaries
  const validCandidates = candidates.filter(
    (w) => w.word.length >= 2 && w.word.length <= size
  );
  const shuffledCandidates = shuffle(rng, validCandidates).slice(0, cfg.wordCount);
  shuffledCandidates.sort((a, b) => b.word.length - a.word.length); // longest first

  // 2. Initialize empty grid (size x size)
  const gridChars: (string | null)[][] = Array.from({ length: size }, () =>
    Array(size).fill(null)
  );

  const placed: {
    word: string;
    clue: string;
    row: number;
    col: number;
    direction: "across" | "down";
  }[] = [];
  const unplaced: WordCluePair[] = [];

  // Place first word in horizontal center
  if (shuffledCandidates.length > 0) {
    const first = shuffledCandidates[0];
    const r = Math.floor(size / 2);
    const c = Math.floor((size - first.word.length) / 2);
    for (let i = 0; i < first.word.length; i++) {
      gridChars[r][c + i] = first.word[i];
    }
    placed.push({ ...first, row: r, col: c, direction: "across" });
  }

  // Helper: check if a placement is legal according to crossword rules
  function canPlace(
    word: string,
    row: number,
    col: number,
    direction: "across" | "down"
  ): boolean {
    const len = word.length;
    if (direction === "across") {
      if (col < 0 || col + len > size || row < 0 || row >= size) return false;
      // Cell immediately before and after must be empty
      if (col > 0 && gridChars[row][col - 1] !== null) return false;
      if (col + len < size && gridChars[row][col + len] !== null) return false;

      let intersections = 0;
      for (let i = 0; i < len; i++) {
        const curr = gridChars[row][col + i];
        if (curr !== null) {
          if (curr !== word[i]) return false; // Collision with different letter
          intersections++;
        } else {
          // Parallel neighbor check: above and below must be empty if not intersecting
          if (row > 0 && gridChars[row - 1][col + i] !== null) return false;
          if (row < size - 1 && gridChars[row + 1][col + i] !== null) return false;
        }
      }
      return intersections >= 1; // Must intersect at least one existing word
    } else {
      // Down direction
      if (row < 0 || row + len > size || col < 0 || col >= size) return false;
      // Cell immediately above and below must be empty
      if (row > 0 && gridChars[row - 1][col] !== null) return false;
      if (row + len < size && gridChars[row + len][col] !== null) return false;

      let intersections = 0;
      for (let i = 0; i < len; i++) {
        const curr = gridChars[row + i][col];
        if (curr !== null) {
          if (curr !== word[i]) return false;
          intersections++;
        } else {
          // Parallel neighbor check: left and right must be empty if not intersecting
          if (col > 0 && gridChars[row + i][col - 1] !== null) return false;
          if (col < size - 1 && gridChars[row + i][col + 1] !== null) return false;
        }
      }
      return intersections >= 1;
    }
  }

  // 3. Iteratively place remaining words
  for (let k = 1; k < shuffledCandidates.length; k++) {
    const item = shuffledCandidates[k];
    const candidatePlacements: {
      row: number;
      col: number;
      direction: "across" | "down";
      score: number;
    }[] = [];

    // Search all possible intersections
    for (const p of placed) {
      const oppDir: "across" | "down" = p.direction === "across" ? "down" : "across";

      for (let i = 0; i < item.word.length; i++) {
        for (let j = 0; j < p.word.length; j++) {
          if (item.word[i] === p.word[j]) {
            // Potential intersection
            let testR = p.row;
            let testC = p.col;

            if (p.direction === "across") {
              // Placed word is across, new word is down
              testR = p.row - i;
              testC = p.col + j;
            } else {
              // Placed word is down, new word is across
              testR = p.row + j;
              testC = p.col - i;
            }

            if (canPlace(item.word, testR, testC, oppDir)) {
              // Score based on centrality
              const centerDist =
                Math.abs(testR + item.word.length / 2 - size / 2) +
                Math.abs(testC + item.word.length / 2 - size / 2);
              candidatePlacements.push({
                row: testR,
                col: testC,
                direction: oppDir,
                score: 100 - centerDist,
              });
            }
          }
        }
      }
    }

    if (candidatePlacements.length > 0) {
      // Pick best placement
      candidatePlacements.sort((a, b) => b.score - a.score);
      const best = candidatePlacements[0];
      for (let idx = 0; idx < item.word.length; idx++) {
        if (best.direction === "across") {
          gridChars[best.row][best.col + idx] = item.word[idx];
        } else {
          gridChars[best.row + idx][best.col] = item.word[idx];
        }
      }
      placed.push({ ...item, row: best.row, col: best.col, direction: best.direction });
    } else {
      unplaced.push(item);
    }
  }

  // 4. Numbering the crossword grid in reading order
  const numberedGrid: (CrosswordCell | null)[][] = Array.from({ length: size }, () =>
    Array(size).fill(null)
  );

  let currentClueNum = 1;
  const finalPlaced: PlacedWord[] = [];
  const acrossClues: { number: number; clue: string; word: string }[] = [];
  const downClues: { number: number; clue: string; word: string }[] = [];

  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (gridChars[r][c] !== null) {
        const startsAcross = placed.find((p) => p.row === r && p.col === c && p.direction === "across");
        const startsDown = placed.find((p) => p.row === r && p.col === c && p.direction === "down");

        let cellNum: number | undefined;
        if (startsAcross || startsDown) {
          cellNum = currentClueNum++;
        }

        numberedGrid[r][c] = {
          char: gridChars[r][c]!,
          number: cellNum,
          isStartOfAcross: !!startsAcross,
          isStartOfDown: !!startsDown,
        };

        if (startsAcross && cellNum !== undefined) {
          finalPlaced.push({ ...startsAcross, number: cellNum });
          acrossClues.push({ number: cellNum, clue: startsAcross.clue, word: startsAcross.word });
        }
        if (startsDown && cellNum !== undefined) {
          finalPlaced.push({ ...startsDown, number: cellNum });
          downClues.push({ number: cellNum, clue: startsDown.clue, word: startsDown.word });
        }
      }
    }
  }

  acrossClues.sort((a, b) => a.number - b.number);
  downClues.sort((a, b) => a.number - b.number);

  return {
    size,
    grid: numberedGrid,
    acrossClues,
    downClues,
    placedWords: finalPlaced,
    unplacedWords: unplaced,
    allWords: finalPlaced.map((p) => p.word),
  };
}
