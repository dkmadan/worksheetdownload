import type { Question } from "../pdf-builder";

// Mulberry32 seeded PRNG — deterministic per (topic+sheet)
function makePrng(seed: string): () => number {
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

function ri(rng: () => number, lo: number, hi: number): number {
  return Math.floor(rng() * (hi - lo + 1)) + lo;
}
function gcd(a: number, b: number): number { return b === 0 ? a : gcd(b, a % b); }
function lcm(a: number, b: number): number { return (a * b) / gcd(a, b); }

// Grade numeric tiers
type Tier = 1 | 2 | 3;
function tier(gradeId: string): Tier {
  if (gradeId === "kindergarten" || gradeId === "grade-1" || gradeId === "grade-2") return 1;
  if (gradeId === "grade-3" || gradeId === "grade-4" || gradeId === "grade-5") return 2;
  return 3;
}

// ── topic generators ────────────────────────────────────────────────────────

function genAddition(rng: () => number, t: Tier): Question[] {
  const qs: Question[] = [];
  while (qs.length < 20) {
    let a: number, b: number;
    if (t === 1) { a = ri(rng, 1, 20); b = ri(rng, 1, 20); }
    else if (t === 2) { a = ri(rng, 10, 9999); b = ri(rng, 10, 9999); }
    else { a = ri(rng, 100, 99999); b = ri(rng, 100, 99999); }
    qs.push({ question: `${a} + ${b} = ?`, answer: `${a + b}` });
  }
  return qs;
}

function genSubtraction(rng: () => number, t: Tier): Question[] {
  const qs: Question[] = [];
  while (qs.length < 20) {
    let a: number, b: number;
    if (t === 1) { a = ri(rng, 1, 20); b = ri(rng, 0, a); }
    else if (t === 2) { a = ri(rng, 100, 9999); b = ri(rng, 0, a); }
    else { a = ri(rng, 1000, 99999); b = ri(rng, 0, a); }
    qs.push({ question: `${a} - ${b} = ?`, answer: `${a - b}` });
  }
  return qs;
}

function genMultiplication(rng: () => number, t: Tier): Question[] {
  const qs: Question[] = [];
  while (qs.length < 20) {
    let a: number, b: number;
    if (t === 1) { a = ri(rng, 1, 10); b = ri(rng, 1, 10); }
    else if (t === 2) { a = ri(rng, 2, 50); b = ri(rng, 2, 20); }
    else { a = ri(rng, 10, 99); b = ri(rng, 10, 99); }
    qs.push({ question: `${a} x ${b} = ?`, answer: `${a * b}` });
  }
  return qs;
}

function genDivision(rng: () => number, t: Tier): Question[] {
  const qs: Question[] = [];
  while (qs.length < 20) {
    let b: number, q: number;
    if (t === 1) { b = ri(rng, 1, 5); q = ri(rng, 1, 10); }
    else if (t === 2) { b = ri(rng, 2, 20); q = ri(rng, 2, 50); }
    else { b = ri(rng, 2, 99); q = ri(rng, 2, 99); }
    const a = b * q;
    qs.push({ question: `${a} / ${b} = ?`, answer: `${q}` });
  }
  return qs;
}

function genTables(rng: () => number): Question[] {
  const qs: Question[] = [];
  while (qs.length < 20) {
    const a = ri(rng, 2, 12);
    const b = ri(rng, 1, 12);
    qs.push({ question: `${a} x ${b} = ?`, answer: `${a * b}` });
  }
  return qs;
}

function genLCM(rng: () => number, t: Tier): Question[] {
  const qs: Question[] = [];
  while (qs.length < 20) {
    const hi = t === 3 ? 30 : 20;
    const a = ri(rng, 2, hi);
    const b = ri(rng, 2, hi);
    if (a === b) continue;
    qs.push({ question: `LCM(${a}, ${b}) = ?`, answer: `${lcm(a, b)}` });
  }
  return qs;
}

function genHCF(rng: () => number, t: Tier): Question[] {
  const qs: Question[] = [];
  while (qs.length < 20) {
    const g = ri(rng, 1, t === 3 ? 20 : 10);
    const a = g * ri(rng, 1, 12);
    const b = g * ri(rng, 1, 12);
    if (a === b) continue;
    qs.push({ question: `HCF(${a}, ${b}) = ?`, answer: `${g}` });
  }
  return qs;
}

function genFractions(rng: () => number, t: Tier): Question[] {
  const qs: Question[] = [];
  while (qs.length < 20) {
    if (t === 1) {
      const denom = ri(rng, 2, 8);
      const n1 = ri(rng, 1, denom);
      const n2 = ri(rng, 1, denom - n1 + 1);
      qs.push({ question: `${n1}/${denom} + ${n2}/${denom} = ?`, answer: `${n1 + n2}/${denom}` });
    } else {
      const d = ri(rng, 2, 12);
      const n1 = ri(rng, 1, d - 1);
      const n2 = ri(rng, 1, d - 1);
      const sum = n1 + n2;
      const g = gcd(sum, d);
      const an = sum / g, ad = d / g;
      qs.push({ question: `${n1}/${d} + ${n2}/${d} = ?`, answer: ad === 1 ? `${an}` : `${an}/${ad}` });
    }
  }
  return qs;
}

function genDecimals(rng: () => number, t: Tier): Question[] {
  const qs: Question[] = [];
  while (qs.length < 20) {
    const a = parseFloat((rng() * (t === 1 ? 10 : 100)).toFixed(1));
    const b = parseFloat((rng() * (t === 1 ? 10 : 100)).toFixed(1));
    const op = rng() < 0.5 ? "+" : "-";
    const ans = op === "+" ? parseFloat((a + b).toFixed(2)) : parseFloat(Math.abs(a - b).toFixed(2));
    const qa = op === "+" ? a : Math.max(a, b), qb = op === "+" ? b : Math.min(a, b);
    qs.push({ question: `${qa} ${op} ${qb} = ?`, answer: `${ans}` });
  }
  return qs;
}

function genPercentage(rng: () => number, t: Tier): Question[] {
  const qs: Question[] = [];
  while (qs.length < 20) {
    const pcts = [10, 20, 25, 30, 40, 50, 60, 75, 80, 90];
    const pct = pcts[ri(rng, 0, pcts.length - 1)];
    const num = ri(rng, t === 2 ? 50 : 100, t === 2 ? 500 : 2000);
    const ans = (pct / 100) * num;
    qs.push({ question: `${pct}% of ${num} = ?`, answer: `${ans}` });
  }
  return qs;
}

function genRatio(rng: () => number): Question[] {
  const qs: Question[] = [];
  while (qs.length < 20) {
    const g = ri(rng, 2, 8);
    const a = g * ri(rng, 1, 8);
    const b = g * ri(rng, 1, 8);
    if (a === b) continue;
    const sa = a / g, sb = b / g;
    qs.push({ question: `Simplify ${a}:${b}`, answer: `${sa}:${sb}` });
  }
  return qs;
}

function genPlaceValue(rng: () => number, t: Tier): Question[] {
  const types = ["Tens", "Hundreds", "Thousands", "Ten-Thousands"];
  const qs: Question[] = [];
  while (qs.length < 20) {
    let num: number, place: string, answer: number;
    if (t === 1) {
      num = ri(rng, 10, 99);
      place = rng() < 0.5 ? "Tens" : "Ones";
      answer = place === "Tens" ? Math.floor(num / 10) % 10 : num % 10;
    } else if (t === 2) {
      num = ri(rng, 1000, 9999);
      place = types[ri(rng, 0, 2)];
      if (place === "Tens") answer = Math.floor(num / 10) % 10;
      else if (place === "Hundreds") answer = Math.floor(num / 100) % 10;
      else answer = Math.floor(num / 1000) % 10;
    } else {
      num = ri(rng, 10000, 99999);
      place = types[ri(rng, 0, 3)];
      if (place === "Tens") answer = Math.floor(num / 10) % 10;
      else if (place === "Hundreds") answer = Math.floor(num / 100) % 10;
      else if (place === "Thousands") answer = Math.floor(num / 1000) % 10;
      else answer = Math.floor(num / 10000) % 10;
    }
    qs.push({ question: `${place} digit of ${num}?`, answer: `${answer}` });
  }
  return qs;
}

function genComparing(rng: () => number, t: Tier): Question[] {
  const qs: Question[] = [];
  while (qs.length < 20) {
    let a: number, b: number;
    if (t === 1) { a = ri(rng, 1, 50); b = ri(rng, 1, 50); }
    else if (t === 2) { a = ri(rng, 100, 9999); b = ri(rng, 100, 9999); }
    else { a = ri(rng, 1000, 99999); b = ri(rng, 1000, 99999); }
    if (a === b) continue;
    const op = a > b ? ">" : "<";
    qs.push({ question: `${a} ___ ${b}`, answer: op });
  }
  return qs;
}

function genProfitLoss(rng: () => number): Question[] {
  const qs: Question[] = [];
  while (qs.length < 20) {
    const cp = ri(rng, 50, 500);
    const delta = ri(rng, 5, 80);
    const isProft = rng() < 0.5;
    const sp = isProft ? cp + delta : cp - delta;
    const type = isProft ? "Profit" : "Loss";
    qs.push({ question: `CP=${cp}, SP=${sp}. ${type}?`, answer: `${delta}` });
  }
  return qs;
}

function genSimpleInterest(rng: () => number): Question[] {
  const qs: Question[] = [];
  while (qs.length < 20) {
    const p = ri(rng, 500, 5000) * 10;
    const r = ri(rng, 2, 15);
    const t = ri(rng, 1, 5);
    const si = (p * r * t) / 100;
    qs.push({ question: `P=${p}, R=${r}%, T=${t}yr. SI?`, answer: `${si}` });
  }
  return qs;
}

function genRomanNumerals(rng: () => number): Question[] {
  const map: [number, string][] = [
    [1,"I"],[4,"IV"],[5,"V"],[9,"IX"],[10,"X"],[14,"XIV"],[15,"XV"],
    [19,"XIX"],[20,"XX"],[30,"XXX"],[40,"XL"],[50,"L"],[60,"LX"],
    [70,"LXX"],[80,"LXXX"],[90,"XC"],[100,"C"],[150,"CL"],[200,"CC"],
    [400,"CD"],[500,"D"],[900,"CM"],[1000,"M"]
  ];
  const qs: Question[] = [];
  while (qs.length < 20) {
    const [num, rom] = map[ri(rng, 0, map.length - 1)];
    if (rng() < 0.5) qs.push({ question: `${num} in Roman?`, answer: rom });
    else qs.push({ question: `${rom} = ?`, answer: `${num}` });
  }
  return qs;
}

function genAngles(rng: () => number): Question[] {
  const types = ["Acute","Right","Obtuse","Straight","Reflex"];
  const ranges: Record<string, [number,number]> = {
    Acute:[1,89], Right:[90,90], Obtuse:[91,179], Straight:[180,180], Reflex:[181,359]
  };
  const qs: Question[] = [];
  while (qs.length < 20) {
    const tp = types[ri(rng, 0, 4)];
    const [lo, hi] = ranges[tp];
    const deg = ri(rng, lo, hi);
    qs.push({ question: `${deg}° is a ___ angle.`, answer: tp });
  }
  return qs;
}

function genPerimeter(rng: () => number, t: Tier): Question[] {
  const qs: Question[] = [];
  while (qs.length < 20) {
    if (rng() < 0.5) {
      const l = ri(rng, 2, t === 1 ? 10 : 50);
      const w = ri(rng, 1, l);
      qs.push({ question: `Rect ${l}x${w}. Perimeter?`, answer: `${2*(l+w)}` });
    } else {
      const s = ri(rng, 2, t === 1 ? 15 : 60);
      qs.push({ question: `Square side ${s}. Perimeter?`, answer: `${4*s}` });
    }
  }
  return qs;
}

function genArea(rng: () => number, t: Tier): Question[] {
  const qs: Question[] = [];
  while (qs.length < 20) {
    const shape = ri(rng, 0, 2);
    if (shape === 0) {
      const l = ri(rng, 2, t === 1 ? 12 : 50);
      const w = ri(rng, 1, l);
      qs.push({ question: `Rect ${l}x${w}. Area?`, answer: `${l*w}` });
    } else if (shape === 1) {
      const s = ri(rng, 2, t === 1 ? 12 : 50);
      qs.push({ question: `Square side ${s}. Area?`, answer: `${s*s}` });
    } else {
      const b = ri(rng, 4, 30); const h = ri(rng, 2, 20);
      qs.push({ question: `Triangle base ${b}, h ${h}. Area?`, answer: `${(b*h)/2}` });
    }
  }
  return qs;
}

function genVolume(rng: () => number): Question[] {
  const qs: Question[] = [];
  while (qs.length < 20) {
    const l = ri(rng, 2, 20), w = ri(rng, 2, 15), h = ri(rng, 2, 15);
    qs.push({ question: `Cuboid ${l}x${w}x${h}. Volume?`, answer: `${l*w*h}` });
  }
  return qs;
}

function genSquareRoots(rng: () => number): Question[] {
  const perfect = [1,4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361,400,441,484,529,576,625];
  const qs: Question[] = [];
  while (qs.length < 20) {
    const sq = perfect[ri(rng, 0, perfect.length - 1)];
    qs.push({ question: `sqrt(${sq}) = ?`, answer: `${Math.round(Math.sqrt(sq))}` });
  }
  return qs;
}

function genSquaresAndRoots(rng: () => number): Question[] {
  const qs: Question[] = [];
  while (qs.length < 20) {
    if (rng() < 0.5) {
      const n = ri(rng, 1, 20);
      qs.push({ question: `${n}^2 = ?`, answer: `${n*n}` });
    } else {
      const n = ri(rng, 1, 20);
      qs.push({ question: `sqrt(${n*n}) = ?`, answer: `${n}` });
    }
  }
  return qs;
}

function genCubesAndRoots(rng: () => number): Question[] {
  const cubes = [1,8,27,64,125,216,343,512,729,1000];
  const qs: Question[] = [];
  while (qs.length < 20) {
    if (rng() < 0.5) {
      const n = ri(rng, 1, 10);
      qs.push({ question: `${n}^3 = ?`, answer: `${n*n*n}` });
    } else {
      const n = ri(rng, 0, cubes.length - 1);
      qs.push({ question: `Cube root of ${cubes[n]} = ?`, answer: `${n + 1}` });
    }
  }
  return qs;
}

function genExponents(rng: () => number, t: Tier): Question[] {
  const qs: Question[] = [];
  while (qs.length < 20) {
    const base = ri(rng, 2, t === 2 ? 5 : 10);
    const exp  = ri(rng, 0, t === 2 ? 3 : 4);
    const ans  = Math.pow(base, exp);
    qs.push({ question: `${base}^${exp} = ?`, answer: `${ans}` });
  }
  return qs;
}

function genIntegers(rng: () => number): Question[] {
  const qs: Question[] = [];
  while (qs.length < 20) {
    const a = ri(rng, -50, 50);
    const b = ri(rng, -50, 50);
    const op = rng() < 0.5 ? "+" : "-";
    const ans = op === "+" ? a + b : a - b;
    qs.push({ question: `(${a}) ${op} (${b}) = ?`, answer: `${ans}` });
  }
  return qs;
}

function genRationalNumbers(rng: () => number): Question[] {
  const qs: Question[] = [];
  while (qs.length < 20) {
    const n1 = ri(rng, -9, 9), d1 = ri(rng, 1, 9);
    const n2 = ri(rng, -9, 9), d2 = ri(rng, 1, 9);
    const rn = n1 * d2 + n2 * d1, rd = d1 * d2;
    const g = gcd(Math.abs(rn), rd);
    const an = rn / g, ad = rd / g;
    qs.push({ question: `${n1}/${d1} + ${n2}/${d2} = ?`, answer: ad === 1 ? `${an}` : `${an}/${ad}` });
  }
  return qs;
}

function genLinearEquations(rng: () => number): Question[] {
  const qs: Question[] = [];
  while (qs.length < 20) {
    const x = ri(rng, -20, 20);
    const a = ri(rng, 1, 10);
    const b = ri(rng, -30, 30);
    const c = a * x + b;
    qs.push({ question: `${a}x + ${b} = ${c}. x = ?`, answer: `${x}` });
  }
  return qs;
}

function genAlgebraicExpressions(rng: () => number): Question[] {
  const vars = ["x", "y", "m", "n", "a"];
  const qs: Question[] = [];
  while (qs.length < 20) {
    const v = vars[ri(rng, 0, vars.length - 1)];
    const c1 = ri(rng, 1, 10), c2 = ri(rng, 1, 10);
    const val = ri(rng, 1, 10);
    const ans = c1 * val + c2;
    qs.push({ question: `${c1}${v}+${c2}, ${v}=${val}. Value?`, answer: `${ans}` });
  }
  return qs;
}

function genCompoundInterest(rng: () => number): Question[] {
  const qs: Question[] = [];
  while (qs.length < 20) {
    const p = ri(rng, 1, 10) * 1000;
    const r = [5, 8, 10, 12, 15][ri(rng, 0, 4)];
    const t = ri(rng, 1, 3);
    const ci = parseFloat((p * (Math.pow(1 + r / 100, t) - 1)).toFixed(2));
    qs.push({ question: `P=${p}, R=${r}%, T=${t}yr. CI?`, answer: `${ci}` });
  }
  return qs;
}

function genProportion(rng: () => number, type: "direct" | "inverse"): Question[] {
  const qs: Question[] = [];
  while (qs.length < 20) {
    const a = ri(rng, 2, 20);
    const b = ri(rng, 2, 20);
    const c = ri(rng, 2, 20);
    if (type === "direct") {
      const d = (b * c) / a;
      if (!Number.isInteger(d)) continue;
      qs.push({ question: `${a}:${b}=${c}:? (Direct)`, answer: `${d}` });
    } else {
      const d = (a * b) / c;
      if (!Number.isInteger(d)) continue;
      qs.push({ question: `${a}:${b}=${c}:? (Inverse)`, answer: `${d}` });
    }
  }
  return qs;
}

function genNumberNames(rng: () => number, t: Tier): Question[] {
  const hundreds = ["one hundred", "two hundred", "three hundred", "four hundred", "five hundred",
    "six hundred", "seven hundred", "eight hundred", "nine hundred"];
  const qs: Question[] = [];
  while (qs.length < 20) {
    if (t === 1) {
      const n = ri(rng, 100, 999);
      const h = Math.floor(n / 100) - 1;
      const rem = n % 100;
      const suffix = rem === 0 ? "" : ` and ${rem}`;
      qs.push({ question: `Write ${n} in words (hundreds)`, answer: `${hundreds[h]}${suffix}` });
    } else {
      const n = ri(rng, 1000, 99999);
      qs.push({ question: `${n}: how many thousands?`, answer: `${Math.floor(n / 1000)}` });
    }
  }
  return qs;
}

function genTime(rng: () => number, t: Tier): Question[] {
  const qs: Question[] = [];
  while (qs.length < 20) {
    if (t === 1) {
      const h = ri(rng, 1, 12), m = ri(rng, 0, 59);
      const isAM = rng() < 0.5;
      qs.push({ question: `${h}:${m.toString().padStart(2,"0")} ${isAM?"AM":"PM"} in 24h?`, answer: `${isAM ? (h === 12 ? 0 : h) : (h === 12 ? 12 : h + 12)}:${m.toString().padStart(2,"0")}` });
    } else {
      const h1 = ri(rng, 6, 12), m1 = ri(rng, 0, 55);
      const dh = ri(rng, 0, 3), dm = ri(rng, 5, 55);
      const tot = h1 * 60 + m1 + dh * 60 + dm;
      const rh = Math.floor(tot / 60) % 24, rm = tot % 60;
      qs.push({ question: `${h1}:${m1.toString().padStart(2,"0")} + ${dh}h ${dm}m = ?`, answer: `${rh}:${rm.toString().padStart(2,"0")}` });
    }
  }
  return qs;
}

function genMoney(rng: () => number, t: Tier): Question[] {
  const qs: Question[] = [];
  while (qs.length < 20) {
    if (t === 1) {
      const a = ri(rng, 10, 200), b = ri(rng, 5, a);
      const op = rng() < 0.5 ? "+" : "-";
      const ans = op === "+" ? a + b : a - b;
      qs.push({ question: `Rs.${a} ${op} Rs.${b} = ?`, answer: `Rs.${ans}` });
    } else {
      const price = ri(rng, 20, 200);
      const qty = ri(rng, 2, 10);
      qs.push({ question: `${qty} items at Rs.${price} each = ?`, answer: `Rs.${price * qty}` });
    }
  }
  return qs;
}

function genMeasurement(rng: () => number, t: Tier): Question[] {
  const qs: Question[] = [];
  while (qs.length < 20) {
    const ops = rng() < 0.5;
    if (t === 1) {
      const m = ri(rng, 1, 50);
      qs.push(ops
        ? { question: `${m} m = ? cm`, answer: `${m * 100}` }
        : { question: `${m * 100} cm = ? m`, answer: `${m}` });
    } else {
      const km = ri(rng, 1, 50);
      qs.push(ops
        ? { question: `${km} km = ? m`, answer: `${km * 1000}` }
        : { question: `${km * 1000} m = ? km`, answer: `${km}` });
    }
  }
  return qs;
}

function genDataHandling(rng: () => number): Question[] {
  const qs: Question[] = [];
  while (qs.length < 20) {
    const type = ri(rng, 0, 2);
    if (type === 0) {
      const nums = Array.from({ length: 5 }, () => ri(rng, 1, 50));
      const sum = nums.reduce((a, b) => a + b, 0);
      qs.push({ question: `Mean of ${nums.join(",")}?`, answer: `${(sum / nums.length).toFixed(1)}` });
    } else if (type === 1) {
      const nums = Array.from({ length: 5 }, () => ri(rng, 1, 50)).sort((a, b) => a - b);
      qs.push({ question: `Median of ${nums.join(",")}?`, answer: `${nums[2]}` });
    } else {
      const base = ri(rng, 2, 20), count = ri(rng, 3, 6);
      const nums = [base, ...Array.from({ length: count - 1 }, () => ri(rng, 1, 30))];
      nums[ri(rng, 0, nums.length - 1)] = base;
      qs.push({ question: `Mode of ${nums.join(",")}?`, answer: `${base}` });
    }
  }
  return qs;
}

function genWordProblems(rng: () => number, t: Tier): Question[] {
  const qs: Question[] = [];
  while (qs.length < 20) {
    const prob = ri(rng, 0, 3);
    if (prob === 0) {
      const n = ri(rng, t===1?2:5, t===1?15:50);
      const p = ri(rng, t===1?2:5, t===1?10:40);
      qs.push({ question: `${n} boxes, ${p} items each. Total?`, answer: `${n * p}` });
    } else if (prob === 1) {
      const total = ri(rng, t===1?20:100, t===1?100:1000);
      const used  = ri(rng, 1, total);
      qs.push({ question: `Had ${total}, used ${used}. Left?`, answer: `${total - used}` });
    } else if (prob === 2) {
      const people = ri(rng, 2, 10);
      const total  = ri(rng, people, people * 20);
      if (total % people !== 0) continue;
      qs.push({ question: `${total} shared by ${people}. Each gets?`, answer: `${total / people}` });
    } else {
      const a = ri(rng, t===1?5:20, t===1?50:200);
      const b = ri(rng, t===1?5:20, t===1?50:200);
      qs.push({ question: `${a} + ${b} apples. How many total?`, answer: `${a + b}` });
    }
  }
  return qs;
}

function genPrimesFactors(rng: () => number): Question[] {
  const primes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47];
  const composites = [4,6,8,9,10,12,14,15,16,18,20,21,22,24,25,26,27,28,30];
  const qs: Question[] = [];
  while (qs.length < 20) {
    if (rng() < 0.5) {
      const n = primes[ri(rng, 0, primes.length - 1)];
      qs.push({ question: `Is ${n} prime?`, answer: "Yes" });
    } else {
      const n = composites[ri(rng, 0, composites.length - 1)];
      qs.push({ question: `Is ${n} prime?`, answer: "No" });
    }
  }
  return qs;
}

function genFactorsMultiples(rng: () => number): Question[] {
  const qs: Question[] = [];
  while (qs.length < 20) {
    if (rng() < 0.5) {
      const n = ri(rng, 2, 12);
      const k = ri(rng, 1, 10);
      qs.push({ question: `${k}th multiple of ${n}?`, answer: `${n * k}` });
    } else {
      const a = ri(rng, 2, 6);
      const b = ri(rng, 1, 5);
      const n = a * b;
      qs.push({ question: `Is ${n} a factor of ${n * ri(rng, 1, 5)}?`, answer: "Yes" });
    }
  }
  return qs;
}

function genGeometryShapes(rng: () => number): Question[] {
  const shapes: [string, number][] = [
    ["Triangle", 3], ["Square", 4], ["Rectangle", 4], ["Pentagon", 5],
    ["Hexagon", 6], ["Heptagon", 7], ["Octagon", 8], ["Nonagon", 9], ["Decagon", 10]
  ];
  const qs: Question[] = [];
  while (qs.length < 20) {
    const [name, sides] = shapes[ri(rng, 0, shapes.length - 1)];
    if (rng() < 0.5) qs.push({ question: `Sides of ${name}?`, answer: `${sides}` });
    else qs.push({ question: `${sides} sides = ?`, answer: name });
  }
  return qs;
}

function genSymmetry(rng: () => number): Question[] {
  const data: [string, number][] = [
    ["Circle", 999], ["Square", 4], ["Rectangle", 2], ["Equilateral triangle", 3],
    ["Isosceles triangle", 1], ["Regular hexagon", 6], ["Rhombus", 2],
    ["Pentagon", 5], ["Scalene triangle", 0]
  ];
  const qs: Question[] = [];
  while (qs.length < 20) {
    const [name, lines] = data[ri(rng, 0, data.length - 1)];
    const ans = lines === 999 ? "Infinite" : `${lines}`;
    qs.push({ question: `Lines of symmetry: ${name}?`, answer: ans });
  }
  return qs;
}

function genProbability(rng: () => number): Question[] {
  const qs: Question[] = [];
  while (qs.length < 20) {
    const type = ri(rng, 0, 2);
    if (type === 0) {
      const fav = ri(rng, 1, 5);
      const total = ri(rng, fav, fav + 5);
      qs.push({ question: `${fav} fav, ${total} total. P(event)?`, answer: `${fav}/${total}` });
    } else if (type === 1) {
      const sides = [4, 6, 8, 10, 12][ri(rng, 0, 4)];
      const target = ri(rng, 1, sides);
      qs.push({ question: `Die: 1-${sides}. P(${target})?`, answer: `1/${sides}` });
    } else {
      const red = ri(rng, 1, 5), blue = ri(rng, 1, 5);
      qs.push({ question: `Bag: ${red}R,${blue}B. P(Red)?`, answer: `${red}/${red + blue}` });
    }
  }
  return qs;
}

function genPatterns(rng: () => number): Question[] {
  const qs: Question[] = [];
  while (qs.length < 20) {
    const type = ri(rng, 0, 2);
    if (type === 0) {
      const start = ri(rng, 1, 10), step = ri(rng, 1, 10);
      const seq = [start, start+step, start+2*step, start+3*step, start+4*step];
      qs.push({ question: `Next: ${seq.slice(0,4).join(",")},...?`, answer: `${seq[4]}` });
    } else if (type === 1) {
      const start = ri(rng, 2, 5), mult = ri(rng, 2, 3);
      const seq = [start, start*mult, start*mult*mult, start*mult**3];
      qs.push({ question: `Next: ${seq.join(",")},...?`, answer: `${start*mult**4}` });
    } else {
      const a = ri(rng, 2, 20), d = ri(rng, 2, 10);
      const seq = [a, a+d, a+2*d, "?", a+4*d];
      qs.push({ question: `Fill: ${seq.join(",")}`, answer: `${a+3*d}` });
    }
  }
  return qs;
}

function genExpandedForm(rng: () => number, t: Tier): Question[] {
  const qs: Question[] = [];
  while (qs.length < 20) {
    let n: number;
    if (t === 1) n = ri(rng, 100, 999);
    else if (t === 2) n = ri(rng, 1000, 9999);
    else n = ri(rng, 10000, 99999);
    const digits = n.toString().split("").map(Number);
    const places = ["10000","1000","100","10","1"].slice(5 - digits.length);
    const expanded = digits.map((d, i) => `${d}x${places[i]}`).join("+");
    if (rng() < 0.5) qs.push({ question: `Expanded form of ${n}?`, answer: expanded });
    else qs.push({ question: `${expanded} = ?`, answer: `${n}` });
  }
  return qs;
}

// ── main router ────────────────────────────────────────────────────────────

function topicKey(topic: string): string {
  return topic.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

export function generateMathQuestions(
  gradeId: string,
  topicLabel: string,
  sheetNumber: number
): Question[] {
  const seed = `${gradeId}|${topicLabel}|${sheetNumber}`;
  const rng = makePrng(seed);
  const t = tier(gradeId);
  const k = topicKey(topicLabel);

  if (/\badd/.test(k) && !/subtrac/.test(k)) return genAddition(rng, t);
  if (/subtrac/.test(k)) return genSubtraction(rng, t);
  if (/multipli/.test(k) && !/table/.test(k)) return genMultiplication(rng, t);
  if (/table/.test(k)) return genTables(rng);
  if (/divis/.test(k)) return genDivision(rng, t);
  if (/\blcm\b/.test(k)) return genLCM(rng, t);
  if (/\bhcf\b/.test(k) || /highest common/.test(k)) return genHCF(rng, t);
  if (/fraction/.test(k)) return genFractions(rng, t);
  if (/decimal/.test(k)) return genDecimals(rng, t);
  if (/percent/.test(k)) return genPercentage(rng, t);
  if (/\bratio\b/.test(k)) return genRatio(rng);
  if (/proportion/.test(k)) return genProportion(rng, /inverse/.test(k) ? "inverse" : "direct");
  if (/place value/.test(k)) return genPlaceValue(rng, t);
  if (/compar/.test(k)) return genComparing(rng, t);
  if (/profit/.test(k)) return genProfitLoss(rng);
  if (/simple interest/.test(k)) return genSimpleInterest(rng);
  if (/compound interest/.test(k)) return genCompoundInterest(rng);
  if (/roman/.test(k)) return genRomanNumerals(rng);
  if (/square root/.test(k) || /squares and square/.test(k)) return genSquaresAndRoots(rng);
  if (/\bsquare\b/.test(k)) return genSquaresAndRoots(rng);
  if (/cube root/.test(k) || /cubes and cube/.test(k)) return genCubesAndRoots(rng);
  if (/exponent/.test(k) || /power/.test(k)) return genExponents(rng, t);
  if (/integer/.test(k)) return genIntegers(rng);
  if (/rational number/.test(k)) return genRationalNumbers(rng);
  if (/linear equation/.test(k) || /simple equation/.test(k)) return genLinearEquations(rng);
  if (/algebraic expression/.test(k)) return genAlgebraicExpressions(rng);
  if (/\bangle/.test(k)) return genAngles(rng);
  if (/perimeter/.test(k)) return genPerimeter(rng, t);
  if (/\bvolume/.test(k)) return genVolume(rng);
  if (/\barea\b/.test(k) || /mensuration/.test(k)) return genArea(rng, t);
  if (/symmetr/.test(k)) return genSymmetry(rng);
  if (/probabil/.test(k)) return genProbability(rng);
  if (/pattern/.test(k)) return genPatterns(rng);
  if (/number name/.test(k)) return genNumberNames(rng, t);
  if (/time/.test(k)) return genTime(rng, t);
  if (/money/.test(k)) return genMoney(rng, t);
  if (/measure/.test(k)) return genMeasurement(rng, t);
  if (/data handling/.test(k)) return genDataHandling(rng);
  if (/word problem/.test(k)) return genWordProblems(rng, t);
  if (/prime.*composite|composite.*prime/.test(k) || /prime number/.test(k)) return genPrimesFactors(rng);
  if (/factor.*multiple|multiple.*factor/.test(k) || /\bfactor\b/.test(k) || /\bmultiple\b/.test(k)) return genFactorsMultiples(rng);
  if (/geometr/.test(k) || /\bshape/.test(k)) return genGeometryShapes(rng);
  if (/number recognition|number trac|counting/.test(k) || /number.*quantit/.test(k)) {
    const rqs: Question[] = [];
    while (rqs.length < 20) {
      const n = ri(rng, 1, t===1 ? 20 : 100);
      rqs.push({ question: `Count: 1 to ${n}. Last number?`, answer: `${n}` });
    }
    return rqs;
  }
  if (/missing number/.test(k) || /before.*after|after.*before/.test(k) || /sequen/.test(k)) return genPatterns(rng);
  if (/greater.*less|less.*greater|ascending|descending/.test(k)) return genComparing(rng, t);
  if (/whole number|large number/.test(k)) return genComparing(rng, t);
  if (/expand/.test(k)) return genExpandedForm(rng, t);
  if (/number.*1000|numbers.*1000/.test(k)) return genPlaceValue(rng, t);
  if (/congruence|triangle/.test(k)) return genGeometryShapes(rng);
  if (/quadrilateral|line.*angle|symmetr/.test(k)) return genGeometryShapes(rng);
  if (/graph/.test(k)) return genDataHandling(rng);
  if (/sqrt|square root/.test(k)) return genSquareRoots(rng);

  // Fallback: mixed arithmetic appropriate to grade
  return genWordProblems(rng, t);
}
