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

function genNumberSeries(rng: () => number): Question[] {
  const qs: Question[] = [];
  while (qs.length < 20) {
    const type = ri(rng, 0, 4);
    if (type === 0) {
      const a = ri(rng, 1, 20), d = ri(rng, 1, 10);
      const seq = [a, a+d, a+2*d, a+3*d, a+4*d];
      const pos = ri(rng, 1, 3);
      const shown = seq.map((v, i) => i === pos ? "_" : `${v}`);
      qs.push({ question: `${shown.join(", ")} ?`, answer: `${seq[pos]}` });
    } else if (type === 1) {
      const a = ri(rng, 2, 5), r = ri(rng, 2, 3);
      const seq = [a, a*r, a*r*r, a*r**3, a*r**4];
      const pos = ri(rng, 1, 3);
      const shown = seq.map((v, i) => i === pos ? "_" : `${v}`);
      qs.push({ question: `${shown.join(", ")} ?`, answer: `${seq[pos]}` });
    } else if (type === 2) {
      const a = ri(rng, 1, 15), d = ri(rng, 2, 8);
      const seq = [a, a+d, a+2*d, "?", a+4*d];
      qs.push({ question: `${seq.join(", ")}`, answer: `${a+3*d}` });
    } else if (type === 3) {
      // Fibonacci-like
      const a = ri(rng, 1, 5), b = ri(rng, 1, 5);
      const seq = [a, b, a+b, a+2*b, 2*a+3*b];
      qs.push({ question: `${seq.slice(0,4).join(", ")}, ?`, answer: `${seq[4]}` });
    } else {
      // Square series
      const start = ri(rng, 1, 5);
      const seq = Array.from({length: 5}, (_, i) => (start + i) ** 2);
      qs.push({ question: `${seq.slice(0,4).join(", ")}, ?`, answer: `${seq[4]}` });
    }
  }
  return qs;
}

function genAlphabetSeries(rng: () => number): Question[] {
  const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const qs: Question[] = [];
  while (qs.length < 20) {
    const type = ri(rng, 0, 2);
    if (type === 0) {
      const start = ri(rng, 0, 18), step = ri(rng, 1, 3);
      const seq = Array.from({length: 5}, (_, i) => alpha[(start + i * step) % 26]);
      qs.push({ question: `${seq.slice(0,4).join(", ")}, ?`, answer: seq[4] });
    } else if (type === 1) {
      const start = ri(rng, 0, 22), step = ri(rng, 1, 3);
      const seq = Array.from({length: 5}, (_, i) => alpha[(start + i * step) % 26]);
      const pos = ri(rng, 1, 3);
      const shown = seq.map((v, i) => i === pos ? "_" : v);
      qs.push({ question: `${shown.join(", ")} ?`, answer: seq[pos] });
    } else {
      // letter position
      const n = ri(rng, 1, 26);
      qs.push({ question: `${n}th letter of alphabet?`, answer: alpha[n - 1] });
    }
  }
  return qs;
}

function genAnalogy(rng: () => number): Question[] {
  const pairs: [string, string][] = [
    ["cat","kitten"], ["dog","puppy"], ["cow","calf"], ["hen","chick"], ["lion","cub"],
    ["book","library"], ["fish","aquarium"], ["tree","forest"], ["bee","hive"], ["ant","colony"],
    ["pen","write"], ["knife","cut"], ["scissors","cut"], ["needle","sew"], ["camera","photograph"],
    ["doctor","hospital"], ["teacher","school"], ["chef","kitchen"], ["pilot","cockpit"], ["judge","court"],
    ["iron","metal"], ["diamond","hardest"], ["cotton","soft"], ["rubber","elastic"], ["glass","transparent"],
    ["India","Rupee"], ["USA","Dollar"], ["UK","Pound"], ["Japan","Yen"], ["Europe","Euro"],
  ];
  const qs: Question[] = [];
  while (qs.length < 20) {
    const i = ri(rng, 0, pairs.length - 1);
    const j = ri(rng, 0, pairs.length - 1);
    if (i === j) continue;
    const [a, b] = pairs[i];
    const [c] = pairs[j];
    const d = pairs[j][1];
    qs.push({ question: `${a}:${b} :: ${c}:?`, answer: d });
  }
  return qs;
}

function genClassification(rng: () => number): Question[] {
  const sets: { items: string[]; odd: string }[] = [
    { items: ["rose","lily","daisy","mango"], odd: "mango" },
    { items: ["dog","cat","parrot","fish"], odd: "parrot" },
    { items: ["pen","pencil","eraser","book"], odd: "book" },
    { items: ["cricket","football","tennis","swimming"], odd: "swimming" },
    { items: ["iron","copper","wood","gold"], odd: "wood" },
    { items: ["apple","mango","carrot","banana"], odd: "carrot" },
    { items: ["chair","table","bed","television"], odd: "television" },
    { items: ["2","4","6","9"], odd: "9" },
    { items: ["3","5","7","9"], odd: "9" },
    { items: ["bus","train","boat","bicycle"], odd: "boat" },
    { items: ["red","green","blue","black"], odd: "black" },
    { items: ["Earth","Mars","Moon","Jupiter"], odd: "Moon" },
    { items: ["June","April","September","August"], odd: "August" },
    { items: ["north","south","east","left"], odd: "left" },
    { items: ["25","36","49","50"], odd: "50" },
    { items: ["surgeon","nurse","doctor","engineer"], odd: "engineer" },
    { items: ["cow","buffalo","goat","eagle"], odd: "eagle" },
    { items: ["wheat","rice","maize","potato"], odd: "potato" },
    { items: ["lion","tiger","cheetah","deer"], odd: "deer" },
    { items: ["Monday","Tuesday","Sunday","Wednesday"], odd: "Sunday" },
  ];
  const qs: Question[] = [];
  while (qs.length < 20) {
    const s = sets[ri(rng, 0, sets.length - 1)];
    qs.push({ question: `Odd one out: ${s.items.join(", ")}`, answer: s.odd });
  }
  return qs;
}

function genCodingDecoding(rng: () => number): Question[] {
  const qs: Question[] = [];
  while (qs.length < 20) {
    const type = ri(rng, 0, 1);
    if (type === 0) {
      const shift = ri(rng, 1, 5);
      const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const words = ["CAT","DOG","PEN","SUN","MAN","EGG","ICE","ANT","BAT","CUP"];
      const word = words[ri(rng, 0, words.length - 1)];
      const encoded = word.split("").map(c => alpha[(alpha.indexOf(c) + shift) % 26]).join("");
      qs.push({ question: `Code: A+${shift}. ${word}=?`, answer: encoded });
    } else {
      const nums = ri(rng, 1, 5);
      const words2 = ["PIG","FLY","CRY","TIP","SIT"];
      const word2 = words2[ri(rng, 0, words2.length - 1)];
      const alpha2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const coded = word2.split("").map(c => `${alpha2.indexOf(c) + 1}`).join("-");
      qs.push({ question: `${word2} coded as numbers?`, answer: coded });
    }
  }
  return qs;
}

function genDirectionSense(rng: () => number): Question[] {
  const qs: Question[] = [];
  while (qs.length < 20) {
    const type = ri(rng, 0, 2);
    if (type === 0) {
      const dirs = ["North","South","East","West"];
      const d1 = dirs[ri(rng, 0, 3)];
      const turns: Record<string, Record<string, string>> = {
        North: {left:"West", right:"East", back:"South"},
        South: {left:"East", right:"West", back:"North"},
        East:  {left:"North", right:"South", back:"West"},
        West:  {left:"South", right:"North", back:"East"},
      };
      const turn = ["left","right","back"][ri(rng, 0, 2)];
      qs.push({ question: `Facing ${d1}, turn ${turn}. Facing?`, answer: turns[d1][turn] });
    } else if (type === 1) {
      const steps = ri(rng, 2, 10), steps2 = ri(rng, 2, 10);
      const d1 = ["North","South","East","West"][ri(rng, 0, 3)];
      const d2 = ["North","South","East","West"][ri(rng, 0, 3)];
      qs.push({ question: `Walk ${steps}m ${d1}, ${steps2}m ${d2}. Total?`, answer: `${steps}m ${d1} + ${steps2}m ${d2}` });
    } else {
      const dirs4 = [["North","South"],["East","West"]];
      const pair = dirs4[ri(rng, 0, 1)];
      qs.push({ question: `Opposite of ${pair[0]} is?`, answer: pair[1] });
    }
  }
  return qs;
}

function genCalendar(rng: () => number): Question[] {
  const qs: Question[] = [];
  while (qs.length < 20) {
    const type = ri(rng, 0, 2);
    if (type === 0) {
      const months31 = ["January","March","May","July","August","October","December"];
      const months30 = ["April","June","September","November"];
      const isLong = rng() < 0.5;
      const m = isLong ? months31[ri(rng, 0, months31.length-1)] : months30[ri(rng, 0, months30.length-1)];
      qs.push({ question: `Days in ${m}?`, answer: isLong ? "31" : "30" });
    } else if (type === 1) {
      qs.push({ question: `Days in a leap year?`, answer: "366" });
    } else {
      const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
      const i = ri(rng, 0, 6);
      const n = ri(rng, 1, 6);
      qs.push({ question: `${n} days after ${days[i]}?`, answer: days[(i + n) % 7] });
    }
  }
  return qs;
}

function genClock(rng: () => number): Question[] {
  const qs: Question[] = [];
  while (qs.length < 20) {
    const type = ri(rng, 0, 2);
    if (type === 0) {
      const h = ri(rng, 1, 12), m = ri(rng, 0, 59);
      const minAngle = m * 6;
      qs.push({ question: `Minute hand at ${m} min = ___ degrees from 12.`, answer: `${minAngle}` });
    } else if (type === 1) {
      const h = ri(rng, 1, 12);
      qs.push({ question: `Hour hand at ${h}:00 = ___ degrees from 12.`, answer: `${(h % 12) * 30}` });
    } else {
      const h1 = ri(rng, 1, 11), h2 = ri(rng, 1, 11);
      if (h1 === h2) continue;
      qs.push({ question: `Angle between ${h1}:00 and ${h2}:00 (shorter)?`, answer: `${Math.abs(h1 - h2) * 30}` });
    }
  }
  return qs;
}

function genVennDiagrams(rng: () => number): Question[] {
  const qs: Question[] = [];
  const SETS = [
    { A: "cats", B: "animals that swim", AonlyEx: 4, BonlyEx: 6, bothEx: 2, total: 12 },
    { A: "boys", B: "cricket players", AonlyEx: 10, BonlyEx: 5, bothEx: 3, total: 18 },
    { A: "mango lovers", B: "banana lovers", AonlyEx: 7, BonlyEx: 8, bothEx: 4, total: 19 },
    { A: "science students", B: "math students", AonlyEx: 12, BonlyEx: 15, bothEx: 8, total: 35 },
  ];
  while (qs.length < 20) {
    const s = SETS[ri(rng, 0, SETS.length - 1)];
    const q = ri(rng, 0, 2);
    if (q === 0) qs.push({ question: `A=${s.AonlyEx+s.bothEx}, B=${s.BonlyEx+s.bothEx}, both=${s.bothEx}. A only?`, answer: `${s.AonlyEx}` });
    else if (q === 1) qs.push({ question: `A=${s.AonlyEx+s.bothEx}, B=${s.BonlyEx+s.bothEx}, both=${s.bothEx}. B only?`, answer: `${s.BonlyEx}` });
    else qs.push({ question: `A only=${s.AonlyEx}, B only=${s.BonlyEx}, both=${s.bothEx}. Total?`, answer: `${s.total}` });
  }
  return qs;
}

function genBloodRelations(rng: () => number): Question[] {
  const qs: Question[] = [
    { question: "A is B's father. B is A's ___.", answer: "son/daughter" },
    { question: "If A is father of B, B is ___ of A.", answer: "child" },
    { question: "If A is mother of B and B is sister of C, A is C's ___.", answer: "mother" },
    { question: "Father's only son is my ___.", answer: "brother or myself" },
    { question: "Mother's brother is my ___.", answer: "maternal uncle" },
    { question: "Father's sister is my ___.", answer: "aunt" },
    { question: "Son of my mother is my ___.", answer: "brother" },
    { question: "Daughter of my father is my ___.", answer: "sister" },
    { question: "Father of my father is my ___.", answer: "grandfather" },
    { question: "Mother of my mother is my ___.", answer: "maternal grandmother" },
    { question: "Son of my uncle is my ___.", answer: "cousin" },
    { question: "Pointing to a girl: 'She is my mother's only daughter.' She is your ___.", answer: "sister" },
    { question: "Brother's wife is my ___.", answer: "sister-in-law" },
    { question: "Sister's husband is my ___.", answer: "brother-in-law" },
    { question: "Father's father's only son is my ___.", answer: "father" },
    { question: "If A is grandparent of B and B is child of C, A is C's ___.", answer: "parent" },
    { question: "Son of my grandfather is my ___.", answer: "father/uncle" },
    { question: "My mother's father is my ___.", answer: "maternal grandfather" },
    { question: "My father's brother is my ___.", answer: "uncle" },
    { question: "My aunt's son is my ___.", answer: "cousin" },
  ];
  const start = ((rng() * 10) | 0) % qs.length;
  return [...qs.slice(start), ...qs.slice(0, start)].slice(0, 20);
}

function genSyllogisms(rng: () => number): Question[] {
  const qs: Question[] = [
    { question: "All A are B. All B are C. Therefore: All A are ___.", answer: "C" },
    { question: "All dogs are animals. All animals are living. Therefore: Dogs are ___.", answer: "living" },
    { question: "Some A are B. All B are C. Therefore: Some A are ___.", answer: "C" },
    { question: "No A are B. All B are C. Therefore: No A are ___.", answer: "C" },
    { question: "All roses are flowers. Some flowers fade. Conclusion?", answer: "Some roses may fade" },
    { question: "All cats are mammals. Leo is a cat. Leo is ___.", answer: "a mammal" },
    { question: "Some students are smart. Ria is a student. Ria is ___.", answer: "possibly smart" },
    { question: "All metals conduct electricity. Iron is a metal. Iron ___.", answer: "conducts electricity" },
    { question: "No birds are mammals. Eagle is a bird. Eagle is ___.", answer: "not a mammal" },
    { question: "All A are B. X is not B. X is ___.", answer: "not A" },
    { question: "Some men are brave. No coward is brave. Conclusion?", answer: "Some men are not cowards" },
    { question: "All P are Q. No Q are R. Therefore: No P are ___.", answer: "R" },
    { question: "All teachers are educated. Some educated are rich. Conclusion?", answer: "Some teachers may be rich" },
    { question: "All A are B. Some C are A. Therefore: Some C are ___.", answer: "B" },
    { question: "No fish can walk. Tuna is a fish. Tuna ___.", answer: "cannot walk" },
    { question: "All squares are rectangles. Some rectangles are parallelograms. Conclusion?", answer: "Some squares may be parallelograms" },
    { question: "Some boys play cricket. Rahul is a boy. Rahul ___.", answer: "may play cricket" },
    { question: "All planets orbit the Sun. Earth is a planet. Earth ___.", answer: "orbits the Sun" },
    { question: "All M are N. All N are O. Therefore: All M are ___.", answer: "O" },
    { question: "All ripe fruits are sweet. Mango is ripe. Mango is ___.", answer: "sweet" },
  ];
  const start = ((rng() * 10) | 0) % qs.length;
  return [...qs.slice(start), ...qs.slice(0, start)].slice(0, 20);
}

function topicKey(topic: string) { return topic.toLowerCase().replace(/[^a-z0-9 ]/g, "").trim(); }

export function generateReasoningQuestions(
  _gradeId: string,
  topicLabel: string,
  sheetNumber: number
): Question[] {
  const seed = `reasoning|${topicLabel}|${sheetNumber}`;
  const rng = mulberry32(seed);
  const k = topicKey(topicLabel);

  if (k.includes("number series")) return genNumberSeries(rng);
  if (k.includes("alphabet series")) return genAlphabetSeries(rng);
  if (k.includes("analogy")) return genAnalogy(rng);
  if (k.includes("classification") || k.includes("odd one out")) return genClassification(rng);
  if (k.includes("coding") || k.includes("decoding")) return genCodingDecoding(rng);
  if (k.includes("direction")) return genDirectionSense(rng);
  if (k.includes("calendar")) return genCalendar(rng);
  if (k.includes("clock")) return genClock(rng);
  if (k.includes("venn")) return genVennDiagrams(rng);
  if (k.includes("blood") || k.includes("relation")) return genBloodRelations(rng);
  if (k.includes("syllogism")) return genSyllogisms(rng);
  if (k.includes("ranking")) {
    const qs: Question[] = [];
    while (qs.length < 20) {
      const total = ri(rng, 10, 30);
      const pos = ri(rng, 1, total);
      qs.push({ question: `Rank ${pos} from top in ${total}. Rank from bottom?`, answer: `${total - pos + 1}` });
    }
    return qs;
  }
  if (k.includes("pattern") || k.includes("mirror") || k.includes("figure")) {
    return genNumberSeries(rng); // visual patterns approximate with number series
  }
  if (k.includes("non verbal") || k.includes("cubes") || k.includes("dice")) {
    const qs: Question[] = [];
    const faceOpp: Record<string, string> = { "1":"6", "2":"5", "3":"4", "4":"3", "5":"2", "6":"1" };
    while (qs.length < 20) {
      const f = `${ri(rng, 1, 6)}`;
      qs.push({ question: `Opposite face of ${f} on a die?`, answer: faceOpp[f] });
    }
    return qs;
  }
  // Fallback: number series
  return genNumberSeries(rng);
}
