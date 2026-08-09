import type { Question } from "../pdf-builder";

function mulberry32(seed: string): () => number {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (Math.imul(31, h) + seed.charCodeAt(i)) | 0;
  let s = h >>> 0;
  return function () {
    s |= 0; s = s + 0x6d2b79f5 | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = t + Math.imul(t ^ (t >>> 7), 61 | t) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function ri(rng: () => number, lo: number, hi: number) { return Math.floor(rng() * (hi - lo + 1)) + lo; }

// ── static banks ──────────────────────────────────────────────────────────

const ALPHABET_BANK: Question[] = [
  ...("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((c, i) => ({
    question: `What is the ${i + 1}${["st","nd","rd"][i] ?? "th"} letter?`,
    answer: c,
  }))),
  ...("abcdefghijklmnopqrstuvwxyz".split("").map((c) => ({
    question: `Capital of '${c}' is?`,
    answer: c.toUpperCase(),
  }))),
  { question: "Alphabet has ___ letters.", answer: "26" },
  { question: "Vowels in English: A, E, I, O, ___.", answer: "U" },
  { question: "Number of vowels in English alphabet is ___.", answer: "5" },
];

const SHAPES_BANK: Question[] = [
  { question: "A circle has ___ corners.", answer: "0" },
  { question: "A square has ___ sides.", answer: "4" },
  { question: "A triangle has ___ sides.", answer: "3" },
  { question: "A rectangle has ___ corners.", answer: "4" },
  { question: "A circle has ___ sides.", answer: "0" },
  { question: "All sides of square are ___.", answer: "equal" },
  { question: "A shape with 5 sides is a ___.", answer: "pentagon" },
  { question: "A shape with 6 sides is a ___.", answer: "hexagon" },
  { question: "A shape with 8 sides is an ___.", answer: "octagon" },
  { question: "Sun shape is most like a ___.", answer: "circle" },
  { question: "A door shape is most like a ___.", answer: "rectangle" },
  { question: "A slice of pizza is most like a ___.", answer: "triangle" },
  { question: "A wheel is most like a ___.", answer: "circle" },
  { question: "A book cover is most like a ___.", answer: "rectangle" },
  { question: "3D shape like a ball is a ___.", answer: "sphere" },
  { question: "3D shape like a box is a ___.", answer: "cube/cuboid" },
  { question: "3D shape like an ice-cream cone is a ___.", answer: "cone" },
  { question: "3D shape like a can is a ___.", answer: "cylinder" },
  { question: "An oval has ___ corners.", answer: "0" },
  { question: "A diamond/rhombus has ___ sides.", answer: "4" },
];

const EMOTIONS_BANK: Question[] = [
  { question: "When you smile, you feel ___.", answer: "happy" },
  { question: "When you cry, you feel ___.", answer: "sad" },
  { question: "When someone is mean, you feel ___.", answer: "angry/hurt" },
  { question: "Sharing toys makes friends ___.", answer: "happy" },
  { question: "Saying 'please' and 'thank you' shows ___.", answer: "good manners" },
  { question: "When you are scared, you feel ___.", answer: "afraid/fearful" },
  { question: "Helping others makes them feel ___.", answer: "grateful/happy" },
  { question: "Feeling shy means you are ___.", answer: "nervous/timid" },
  { question: "When you are surprised, your eyes get ___.", answer: "wide/big" },
  { question: "Good manners include saying 'sorry' when you ___.", answer: "make a mistake" },
  { question: "Taking turns is a way of being ___.", answer: "fair" },
  { question: "Listening when others speak is called ___.", answer: "active listening" },
  { question: "Being kind to everyone is called ___.", answer: "kindness" },
  { question: "Brushing teeth daily is a ___ habit.", answer: "healthy" },
  { question: "Washing hands before eating is a ___ habit.", answer: "good" },
  { question: "Eating fruits and vegetables keeps us ___.", answer: "healthy" },
  { question: "We should sleep for ___ hours each night (children).", answer: "8-10" },
  { question: "Exercise keeps our body ___.", answer: "fit/healthy" },
  { question: "We should say ___ when someone helps us.", answer: "thank you" },
  { question: "We should say ___ when we need something.", answer: "please" },
];

const GEN_AWARENESS_BANK: Question[] = [
  { question: "My body has ___ main sense organs.", answer: "5" },
  { question: "Eyes help us to ___.", answer: "see" },
  { question: "Ears help us to ___.", answer: "hear" },
  { question: "Nose helps us to ___.", answer: "smell" },
  { question: "Tongue helps us to ___.", answer: "taste" },
  { question: "Skin helps us to ___.", answer: "touch/feel" },
  { question: "We have ___ fingers on each hand.", answer: "5" },
  { question: "We have ___ toes on each foot.", answer: "5" },
  { question: "Our skeleton is made of ___.", answer: "bones" },
  { question: "The brain is inside our ___.", answer: "head/skull" },
  { question: "A school has a ___.", answer: "classroom/playground/library" },
  { question: "Teacher teaches in a ___.", answer: "classroom/school" },
  { question: "We drink water when we are ___.", answer: "thirsty" },
  { question: "We eat food when we are ___.", answer: "hungry" },
  { question: "We sleep when we are ___.", answer: "tired" },
  { question: "Plants need sunlight and ___ to grow.", answer: "water" },
  { question: "Flowers grow on ___.", answer: "plants/trees" },
  { question: "Animals that live with us at home are ___ animals.", answer: "domestic/pet" },
  { question: "Animals that live in forests are ___ animals.", answer: "wild" },
  { question: "A baby cat is called a ___.", answer: "kitten" },
];

const LOGIC_BANK: Question[] = [
  { question: "Apple, mango, carrot — odd one out?", answer: "carrot" },
  { question: "Circle, square, triangle — what are these?", answer: "shapes" },
  { question: "1, 2, 3, ___, 5 — fill the blank.", answer: "4" },
  { question: "Cat, dog, fish, ___ (house) — odd one out?", answer: "house" },
  { question: "Red, blue, green — these are all ___.", answer: "colors" },
  { question: "Big, bigger, ___ — the pattern continues.", answer: "biggest" },
  { question: "A, B, C, D, ___ — next letter?", answer: "E" },
  { question: "10, 8, 6, 4, ___ — next number?", answer: "2" },
  { question: "Sun comes out in the ___, moon at ___.", answer: "day, night" },
  { question: "First, second, ___ — what comes next?", answer: "third" },
  { question: "Things that fly: bird, ___.", answer: "aeroplane/butterfly/kite" },
  { question: "Things that swim: fish, ___.", answer: "duck/dolphin" },
  { question: "A baby dog is called a ___.", answer: "puppy" },
  { question: "A baby hen is called a ___.", answer: "chick" },
  { question: "Ice cream is ___ (hot/cold).", answer: "cold" },
  { question: "Fire is ___ (hot/cold).", answer: "hot" },
  { question: "A ball is ___ (round/flat).", answer: "round" },
  { question: "More than 5: 6, 7, ___, 9.", answer: "8" },
  { question: "Less than 5: 4, 3, ___, 1.", answer: "2" },
  { question: "Pattern: 1 apple, 2 apples, ___ apples.", answer: "3" },
];

// ── router ──────────────────────────────────────────────────────────────────

function topicKey(t: string) { return t.toLowerCase().replace(/[^a-z0-9 ]/g, "").trim(); }

export function generateKindergartenQuestions(
  _gradeId: string,
  topicLabel: string,
  sheetNumber: number
): Question[] {
  const seed = `kg|${topicLabel}|${sheetNumber}`;
  const rng = mulberry32(seed);
  const k = topicKey(topicLabel);

  // Alphabet / phonics / letters
  if (k.includes("alphabet") || k.includes("letter") || k.includes("tracing") ||
      k.includes("phonics") || k.includes("vowel") || k.includes("consonant") ||
      k.includes("recogni") || k.includes("matchin") || k.includes("sound") ||
      k.includes("cvc") || k.includes("rhyming") || k.includes("sight") || k.includes("word")) {
    const start = ((sheetNumber - 1) * 20) % ALPHABET_BANK.length;
    const end = start + 20;
    if (end <= ALPHABET_BANK.length) return ALPHABET_BANK.slice(start, end);
    return [...ALPHABET_BANK.slice(start), ...ALPHABET_BANK.slice(0, end - ALPHABET_BANK.length)];
  }

  // Numbers / counting (math)
  if (k.includes("number") || k.includes("counting") || k.includes("sequen") ||
      k.includes("missing") || k.includes("before") || k.includes("after") ||
      k.includes("between") || k.includes("greater") || k.includes("less") ||
      k.includes("recognit") || k.includes("quantit") || k.includes("match")) {
    const qs: Question[] = [];
    while (qs.length < 20) {
      const type = ri(rng, 0, 4);
      if (type === 0) {
        const n = ri(rng, 1, 20);
        qs.push({ question: `Count: how many fingers hold up for ${n}?`, answer: `${n}` });
      } else if (type === 1) {
        const a = ri(rng, 1, 15), b = ri(rng, a + 1, 20);
        qs.push({ question: `Missing: ${a}, ___, ${b}`, answer: `${a + 1} to ${b - 1}` });
      } else if (type === 2) {
        const a = ri(rng, 1, 19);
        qs.push({ question: `Number after ${a}?`, answer: `${a + 1}` });
      } else if (type === 3) {
        const a = ri(rng, 2, 20);
        qs.push({ question: `Number before ${a}?`, answer: `${a - 1}` });
      } else {
        const a = ri(rng, 1, 19), b = ri(rng, a + 1, 20);
        qs.push({ question: `${a} ___ ${b} (< or >)?`, answer: "<" });
      }
    }
    return qs;
  }

  // Shapes
  if (k.includes("shape") || k.includes("circle") || k.includes("square") ||
      k.includes("triangle") || k.includes("visual") || k.includes("pattern")) {
    const start = ((sheetNumber - 1) * 20) % SHAPES_BANK.length;
    const end = start + 20;
    if (end <= SHAPES_BANK.length) return SHAPES_BANK.slice(start, end);
    return [...SHAPES_BANK.slice(start), ...SHAPES_BANK.slice(0, end - SHAPES_BANK.length)];
  }

  // Social-emotional / manners
  if (k.includes("emotion") || k.includes("social") || k.includes("sharing") ||
      k.includes("friend") || k.includes("manners") || k.includes("habit") ||
      k.includes("personal") || k.includes("safety") || k.includes("healthy")) {
    const start = ((sheetNumber - 1) * 20) % EMOTIONS_BANK.length;
    const end = start + 20;
    if (end <= EMOTIONS_BANK.length) return EMOTIONS_BANK.slice(start, end);
    return [...EMOTIONS_BANK.slice(start), ...EMOTIONS_BANK.slice(0, end - EMOTIONS_BANK.length)];
  }

  // Logic / thinking / classification / sorting
  if (k.includes("logic") || k.includes("thinking") || k.includes("classif") ||
      k.includes("sorting") || k.includes("match") || k.includes("odd") ||
      k.includes("maze") || k.includes("puzzle") || k.includes("sequen")) {
    const start = ((sheetNumber - 1) * 20) % LOGIC_BANK.length;
    const end = start + 20;
    if (end <= LOGIC_BANK.length) return LOGIC_BANK.slice(start, end);
    return [...LOGIC_BANK.slice(start), ...LOGIC_BANK.slice(0, end - LOGIC_BANK.length)];
  }

  // General awareness / EVS
  const start = ((sheetNumber - 1) * 20) % GEN_AWARENESS_BANK.length;
  const end = start + 20;
  if (end <= GEN_AWARENESS_BANK.length) return GEN_AWARENESS_BANK.slice(start, end);
  return [...GEN_AWARENESS_BANK.slice(start), ...GEN_AWARENESS_BANK.slice(0, end - GEN_AWARENESS_BANK.length)];
}
