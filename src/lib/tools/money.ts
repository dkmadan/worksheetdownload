// ─────────────────────────────────────────────────────────────────────────────
// Money-Counting Worksheet Engine
// Multi-currency support (USD, INR, GBP, EUR, CAD, AUD) with exact integer arithmetic
// and educational vector SVG coin & banknote representations.
// ─────────────────────────────────────────────────────────────────────────────

import { makeRng, randInt, pick, shuffle, type Rng } from "./prng";

export type CurrencyCode = "USD" | "INR" | "GBP" | "EUR" | "CAD" | "AUD";

export type MoneyExerciseType =
  | "identify-coins"
  | "identify-banknotes"
  | "count-coins"
  | "count-mixed"
  | "add-money"
  | "compare-money"
  | "make-amount"
  | "calculate-change"
  | "shopping-word-problems";

export interface CurrencyItem {
  id: string;
  name: string;
  value: number; // In minor units (cents, paise, pence)
  isCoin: boolean;
  symbol: string;
  displayStr: string;
  color: string; // Hex for coin metal or note tint
  textColor: string;
  sizeMultiplier: number;
}

export interface MoneyProblem {
  id: string;
  num: number;
  type: MoneyExerciseType;
  instructions: string;
  prompt: string;
  currency: CurrencyCode;
  itemsA?: CurrencyItem[];
  itemsB?: CurrencyItem[]; // For compare or add
  targetAmount?: number; // minor units
  paidAmount?: number; // minor units
  costAmount?: number; // minor units
  storeItems?: { name: string; icon: string; price: number }[];
  answer: string;
  answerExplanation: string;
}

export interface MoneyConfig {
  grade: number; // 0 (K) to 6
  currency: CurrencyCode;
  difficulty: "easy" | "medium" | "hard";
  problemCount: number; // 5, 10, 15, 20, 30
  exercises: MoneyExerciseType[];
  grayscale: boolean;
  includeAnswerKey: boolean;
}

export const CURRENCY_METAS: Record<
  CurrencyCode,
  { name: string; symbol: string; majorUnit: string; minorUnit: string; minorPerMajor: number }
> = {
  USD: { name: "US Dollar", symbol: "$", majorUnit: "Dollar", minorUnit: "Cent", minorPerMajor: 100 },
  INR: { name: "Indian Rupee", symbol: "₹", majorUnit: "Rupee", minorUnit: "Paisa", minorPerMajor: 100 },
  GBP: { name: "British Pound", symbol: "£", majorUnit: "Pound", minorUnit: "Pence", minorPerMajor: 100 },
  EUR: { name: "Euro", symbol: "€", majorUnit: "Euro", minorUnit: "Cent", minorPerMajor: 100 },
  CAD: { name: "Canadian Dollar", symbol: "CA$", majorUnit: "Dollar", minorUnit: "Cent", minorPerMajor: 100 },
  AUD: { name: "Australian Dollar", symbol: "A$", majorUnit: "Dollar", minorUnit: "Cent", minorPerMajor: 100 },
};

// ── Currency Denominations ────────────────────────────────────────────────────

export const CURRENCY_DENOMINATIONS: Record<CurrencyCode, CurrencyItem[]> = {
  USD: [
    { id: "usd-1c", name: "Penny", value: 1, isCoin: true, symbol: "1¢", displayStr: "1¢", color: "#b45309", textColor: "#ffffff", sizeMultiplier: 0.85 },
    { id: "usd-5c", name: "Nickel", value: 5, isCoin: true, symbol: "5¢", displayStr: "5¢", color: "#94a3b8", textColor: "#0f172a", sizeMultiplier: 0.95 },
    { id: "usd-10c", name: "Dime", value: 10, isCoin: true, symbol: "10¢", displayStr: "10¢", color: "#cbd5e1", textColor: "#0f172a", sizeMultiplier: 0.78 },
    { id: "usd-25c", name: "Quarter", value: 25, isCoin: true, symbol: "25¢", displayStr: "25¢", color: "#94a3b8", textColor: "#0f172a", sizeMultiplier: 1.05 },
    { id: "usd-50c", name: "Half Dollar", value: 50, isCoin: true, symbol: "50¢", displayStr: "50¢", color: "#64748b", textColor: "#ffffff", sizeMultiplier: 1.15 },
    { id: "usd-1b", name: "$1 Bill", value: 100, isCoin: false, symbol: "$1", displayStr: "$1", color: "#15803d", textColor: "#ffffff", sizeMultiplier: 1 },
    { id: "usd-5b", name: "$5 Bill", value: 500, isCoin: false, symbol: "$5", displayStr: "$5", color: "#166534", textColor: "#ffffff", sizeMultiplier: 1 },
    { id: "usd-10b", name: "$10 Bill", value: 1000, isCoin: false, symbol: "$10", displayStr: "$10", color: "#14532d", textColor: "#ffffff", sizeMultiplier: 1 },
    { id: "usd-20b", name: "$20 Bill", value: 2000, isCoin: false, symbol: "$20", displayStr: "$20", color: "#065f46", textColor: "#ffffff", sizeMultiplier: 1 },
  ],
  INR: [
    { id: "inr-1c", name: "₹1 Coin", value: 100, isCoin: true, symbol: "₹1", displayStr: "₹1", color: "#94a3b8", textColor: "#0f172a", sizeMultiplier: 0.88 },
    { id: "inr-2c", name: "₹2 Coin", value: 200, isCoin: true, symbol: "₹2", displayStr: "₹2", color: "#cbd5e1", textColor: "#0f172a", sizeMultiplier: 0.95 },
    { id: "inr-5c", name: "₹5 Coin", value: 500, isCoin: true, symbol: "₹5", displayStr: "₹5", color: "#d97706", textColor: "#ffffff", sizeMultiplier: 0.98 },
    { id: "inr-10c", name: "₹10 Coin", value: 1000, isCoin: true, symbol: "₹10", displayStr: "₹10", color: "#b45309", textColor: "#ffffff", sizeMultiplier: 1.08 },
    { id: "inr-10b", name: "₹10 Note", value: 1000, isCoin: false, symbol: "₹10", displayStr: "₹10", color: "#a16207", textColor: "#ffffff", sizeMultiplier: 1 },
    { id: "inr-20b", name: "₹20 Note", value: 2000, isCoin: false, symbol: "₹20", displayStr: "₹20", color: "#ca8a04", textColor: "#0f172a", sizeMultiplier: 1 },
    { id: "inr-50b", name: "₹50 Note", value: 5000, isCoin: false, symbol: "₹50", displayStr: "₹50", color: "#0284c7", textColor: "#ffffff", sizeMultiplier: 1 },
    { id: "inr-100b", name: "₹100 Note", value: 10000, isCoin: false, symbol: "₹100", displayStr: "₹100", color: "#7c3aed", textColor: "#ffffff", sizeMultiplier: 1 },
    { id: "inr-500b", name: "₹500 Note", value: 50000, isCoin: false, symbol: "₹500", displayStr: "₹500", color: "#475569", textColor: "#ffffff", sizeMultiplier: 1 },
  ],
  GBP: [
    { id: "gbp-1p", name: "1p Coin", value: 1, isCoin: true, symbol: "1p", displayStr: "1p", color: "#b45309", textColor: "#ffffff", sizeMultiplier: 0.8 },
    { id: "gbp-2p", name: "2p Coin", value: 2, isCoin: true, symbol: "2p", displayStr: "2p", color: "#b45309", textColor: "#ffffff", sizeMultiplier: 1.02 },
    { id: "gbp-5p", name: "5p Coin", value: 5, isCoin: true, symbol: "5p", displayStr: "5p", color: "#cbd5e1", textColor: "#0f172a", sizeMultiplier: 0.75 },
    { id: "gbp-10p", name: "10p Coin", value: 10, isCoin: true, symbol: "10p", displayStr: "10p", color: "#94a3b8", textColor: "#0f172a", sizeMultiplier: 0.95 },
    { id: "gbp-20p", name: "20p Coin", value: 20, isCoin: true, symbol: "20p", displayStr: "20p", color: "#cbd5e1", textColor: "#0f172a", sizeMultiplier: 0.88 },
    { id: "gbp-50p", name: "50p Coin", value: 50, isCoin: true, symbol: "50p", displayStr: "50p", color: "#94a3b8", textColor: "#0f172a", sizeMultiplier: 1.1 },
    { id: "gbp-1l", name: "£1 Coin", value: 100, isCoin: true, symbol: "£1", displayStr: "£1", color: "#eab308", textColor: "#0f172a", sizeMultiplier: 0.95 },
    { id: "gbp-2l", name: "£2 Coin", value: 200, isCoin: true, symbol: "£2", displayStr: "£2", color: "#ca8a04", textColor: "#ffffff", sizeMultiplier: 1.15 },
    { id: "gbp-5b", name: "£5 Note", value: 500, isCoin: false, symbol: "£5", displayStr: "£5", color: "#0891b2", textColor: "#ffffff", sizeMultiplier: 1 },
    { id: "gbp-10b", name: "£10 Note", value: 1000, isCoin: false, symbol: "£10", displayStr: "£10", color: "#ea580c", textColor: "#ffffff", sizeMultiplier: 1 },
    { id: "gbp-20b", name: "£20 Note", value: 2000, isCoin: false, symbol: "£20", displayStr: "£20", color: "#9333ea", textColor: "#ffffff", sizeMultiplier: 1 },
  ],
  EUR: [
    { id: "eur-1c", name: "1c Coin", value: 1, isCoin: true, symbol: "1c", displayStr: "1c", color: "#b45309", textColor: "#ffffff", sizeMultiplier: 0.75 },
    { id: "eur-2c", name: "2c Coin", value: 2, isCoin: true, symbol: "2c", displayStr: "2c", color: "#b45309", textColor: "#ffffff", sizeMultiplier: 0.85 },
    { id: "eur-5c", name: "5c Coin", value: 5, isCoin: true, symbol: "5c", displayStr: "5c", color: "#b45309", textColor: "#ffffff", sizeMultiplier: 0.95 },
    { id: "eur-10c", name: "10c Coin", value: 10, isCoin: true, symbol: "10c", displayStr: "10c", color: "#eab308", textColor: "#0f172a", sizeMultiplier: 0.88 },
    { id: "eur-20c", name: "20c Coin", value: 20, isCoin: true, symbol: "20c", displayStr: "20c", color: "#eab308", textColor: "#0f172a", sizeMultiplier: 0.98 },
    { id: "eur-50c", name: "50c Coin", value: 50, isCoin: true, symbol: "50c", displayStr: "50c", color: "#ca8a04", textColor: "#0f172a", sizeMultiplier: 1.05 },
    { id: "eur-1e", name: "€1 Coin", value: 100, isCoin: true, symbol: "€1", displayStr: "€1", color: "#94a3b8", textColor: "#0f172a", sizeMultiplier: 0.98 },
    { id: "eur-2e", name: "€2 Coin", value: 200, isCoin: true, symbol: "€2", displayStr: "€2", color: "#ca8a04", textColor: "#ffffff", sizeMultiplier: 1.12 },
    { id: "eur-5b", name: "€5 Note", value: 500, isCoin: false, symbol: "€5", displayStr: "€5", color: "#64748b", textColor: "#ffffff", sizeMultiplier: 1 },
    { id: "eur-10b", name: "€10 Note", value: 1000, isCoin: false, symbol: "€10", displayStr: "€10", color: "#dc2626", textColor: "#ffffff", sizeMultiplier: 1 },
    { id: "eur-20b", name: "€20 Note", value: 2000, isCoin: false, symbol: "€20", displayStr: "€20", color: "#2563eb", textColor: "#ffffff", sizeMultiplier: 1 },
  ],
  CAD: [
    { id: "cad-5c", name: "Nickel (5¢)", value: 5, isCoin: true, symbol: "5¢", displayStr: "5¢", color: "#94a3b8", textColor: "#0f172a", sizeMultiplier: 0.92 },
    { id: "cad-10c", name: "Dime (10¢)", value: 10, isCoin: true, symbol: "10¢", displayStr: "10¢", color: "#cbd5e1", textColor: "#0f172a", sizeMultiplier: 0.8 },
    { id: "cad-25c", name: "Quarter (25¢)", value: 25, isCoin: true, symbol: "25¢", displayStr: "25¢", color: "#94a3b8", textColor: "#0f172a", sizeMultiplier: 1.02 },
    { id: "cad-1l", name: "Loonie ($1)", value: 100, isCoin: true, symbol: "$1", displayStr: "$1", color: "#eab308", textColor: "#0f172a", sizeMultiplier: 1.05 },
    { id: "cad-2t", name: "Toonie ($2)", value: 200, isCoin: true, symbol: "$2", displayStr: "$2", color: "#ca8a04", textColor: "#ffffff", sizeMultiplier: 1.15 },
    { id: "cad-5b", name: "$5 Note", value: 500, isCoin: false, symbol: "$5", displayStr: "$5", color: "#2563eb", textColor: "#ffffff", sizeMultiplier: 1 },
    { id: "cad-10b", name: "$10 Note", value: 1000, isCoin: false, symbol: "$10", displayStr: "$10", color: "#9333ea", textColor: "#ffffff", sizeMultiplier: 1 },
    { id: "cad-20b", name: "$20 Note", value: 2000, isCoin: false, symbol: "$20", displayStr: "$20", color: "#16a34a", textColor: "#ffffff", sizeMultiplier: 1 },
  ],
  AUD: [
    { id: "aud-5c", name: "5¢ Coin", value: 5, isCoin: true, symbol: "5¢", displayStr: "5¢", color: "#cbd5e1", textColor: "#0f172a", sizeMultiplier: 0.82 },
    { id: "aud-10c", name: "10¢ Coin", value: 10, isCoin: true, symbol: "10¢", displayStr: "10¢", color: "#94a3b8", textColor: "#0f172a", sizeMultiplier: 0.95 },
    { id: "aud-20c", name: "20¢ Coin", value: 20, isCoin: true, symbol: "20¢", displayStr: "20¢", color: "#cbd5e1", textColor: "#0f172a", sizeMultiplier: 1.1 },
    { id: "aud-50c", name: "50¢ Coin", value: 50, isCoin: true, symbol: "50¢", displayStr: "50¢", color: "#94a3b8", textColor: "#0f172a", sizeMultiplier: 1.25 },
    { id: "aud-1d", name: "$1 Coin", value: 100, isCoin: true, symbol: "$1", displayStr: "$1", color: "#eab308", textColor: "#0f172a", sizeMultiplier: 1.0 },
    { id: "aud-2d", name: "$2 Coin", value: 200, isCoin: true, symbol: "$2", displayStr: "$2", color: "#ca8a04", textColor: "#ffffff", sizeMultiplier: 0.9 },
    { id: "aud-5b", name: "$5 Note", value: 500, isCoin: false, symbol: "$5", displayStr: "$5", color: "#a855f7", textColor: "#ffffff", sizeMultiplier: 1 },
    { id: "aud-10b", name: "$10 Note", value: 1000, isCoin: false, symbol: "$10", displayStr: "$10", color: "#0284c7", textColor: "#ffffff", sizeMultiplier: 1 },
    { id: "aud-20b", name: "$20 Note", value: 2000, isCoin: false, symbol: "$20", displayStr: "$20", color: "#ea580c", textColor: "#ffffff", sizeMultiplier: 1 },
  ],
};

export const STORE_ITEMS_CATALOG = [
  { name: "Pencil", icon: "✏️", basePrice: 45 },
  { name: "Notebook", icon: "📓", basePrice: 150 },
  { name: "Apple", icon: "🍎", basePrice: 75 },
  { name: "Juice Box", icon: "🧃", basePrice: 125 },
  { name: "Toy Car", icon: "🚗", basePrice: 280 },
  { name: "Crayons", icon: "🖍️", basePrice: 220 },
  { name: "Cupcake", icon: "🧁", basePrice: 195 },
  { name: "Backpack", icon: "🎒", basePrice: 950 },
  { name: "Ruler", icon: "📏", basePrice: 60 },
  { name: "Teddy Bear", icon: "🧸", basePrice: 475 },
];

// ── Currency Formatting ───────────────────────────────────────────────────────

export function formatMoney(minorUnits: number, currency: CurrencyCode): string {
  const meta = CURRENCY_METAS[currency];
  const major = Math.floor(minorUnits / meta.minorPerMajor);
  const minor = minorUnits % meta.minorPerMajor;

  if (currency === "INR") {
    if (minor === 0) return `₹${major}`;
    return `₹${major}.${minor.toString().padStart(2, "0")}`;
  }
  if (currency === "GBP") {
    if (major === 0) return `${minor}p`;
    return `£${major}.${minor.toString().padStart(2, "0")}`;
  }
  if (currency === "EUR") {
    return `${major},${minor.toString().padStart(2, "0")} €`;
  }
  if (currency === "USD" || currency === "CAD" || currency === "AUD") {
    if (major === 0 && minor < 100) return `${minor}¢`;
    return `${meta.symbol}${major}.${minor.toString().padStart(2, "0")}`;
  }
  return `${meta.symbol}${major}.${minor.toString().padStart(2, "0")}`;
}

// ── SVG Coin & Banknote Rendering ─────────────────────────────────────────────

export function renderCoinSvg(item: CurrencyItem, size = 44, grayscale = false): string {
  const r = (size / 2 - 2) * item.sizeMultiplier;
  const cx = size / 2;
  const cy = size / 2;
  const fill = grayscale ? "#64748b" : item.color;
  const stroke = grayscale ? "#1e293b" : "#475569";
  const textColor = item.textColor;

  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="2" />
    <circle cx="${cx}" cy="${cy}" r="${r - 3}" fill="none" stroke="${stroke}" stroke-width="0.75" stroke-dasharray="2,1" />
    <text x="${cx}" y="${cy + 4}" font-size="${Math.max(10, r * 0.65)}" font-weight="bold" fill="${textColor}" text-anchor="middle" font-family="system-ui, sans-serif">${item.displayStr}</text>
  </svg>`;
}

export function renderBanknoteSvg(item: CurrencyItem, w = 78, h = 42, grayscale = false): string {
  const fill = grayscale ? "#475569" : item.color;
  const stroke = "#0f172a";
  const textColor = "#ffffff";

  return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <rect x="1" y="1" width="${w - 2}" height="${h - 2}" rx="3" fill="${fill}" stroke="${stroke}" stroke-width="1.5" />
    <rect x="4" y="4" width="${w - 8}" height="${h - 8}" rx="2" fill="none" stroke="#ffffff" stroke-width="0.75" stroke-opacity="0.6" stroke-dasharray="3,2" />
    <circle cx="${w / 2}" cy="${h / 2}" r="${h * 0.28}" fill="#ffffff" fill-opacity="0.15" stroke="#ffffff" stroke-width="0.75" stroke-opacity="0.7" />
    <text x="${w / 2}" y="${h / 2 + 4}" font-size="11" font-weight="900" fill="${textColor}" text-anchor="middle" font-family="system-ui, sans-serif">${item.displayStr}</text>
    <text x="8" y="12" font-size="7" font-weight="bold" fill="${textColor}" font-family="system-ui, sans-serif">${item.symbol}</text>
    <text x="${w - 8}" y="${h - 6}" font-size="7" font-weight="bold" fill="${textColor}" text-anchor="end" font-family="system-ui, sans-serif">${item.symbol}</text>
  </svg>`;
}

// ── Problem Generator Engine ──────────────────────────────────────────────────

export const DEFAULT_MONEY_CONFIG: MoneyConfig = {
  grade: 2,
  currency: "USD",
  difficulty: "medium",
  problemCount: 10,
  exercises: [
    "identify-coins",
    "count-coins",
    "count-mixed",
    "compare-money",
    "calculate-change",
    "shopping-word-problems",
  ],
  grayscale: false,
  includeAnswerKey: true,
};

export function generateMoneyProblems(cfg: MoneyConfig, seed: number): MoneyProblem[] {
  const rng = makeRng(seed);
  const denoms = CURRENCY_DENOMINATIONS[cfg.currency] || CURRENCY_DENOMINATIONS.USD;
  const coins = denoms.filter((d) => d.isCoin);
  const notes = denoms.filter((d) => !d.isCoin);
  const exercises = cfg.exercises.length > 0 ? cfg.exercises : ["count-coins", "shopping-word-problems"];

  const problems: MoneyProblem[] = [];

  for (let i = 0; i < cfg.problemCount; i++) {
    const exType = exercises[i % exercises.length];

    switch (exType) {
      case "identify-coins": {
        const coin = pick(rng, coins);
        problems.push({
          id: `m-${i + 1}`,
          num: i + 1,
          type: "identify-coins",
          currency: cfg.currency,
          instructions: "Identify the coin shown below. Write its name and exact value.",
          prompt: "Name and value of this coin: ____________________",
          itemsA: [coin],
          answer: `${coin.name} (${formatMoney(coin.value, cfg.currency)})`,
          answerExplanation: `This is a ${coin.name}, which has a value of ${formatMoney(coin.value, cfg.currency)}.`,
        });
        break;
      }

      case "identify-banknotes": {
        const note = pick(rng, notes.length > 0 ? notes : coins);
        problems.push({
          id: `m-${i + 1}`,
          num: i + 1,
          type: "identify-banknotes",
          currency: cfg.currency,
          instructions: "Identify the banknote shown below. Write its face value.",
          prompt: "Value of this banknote: ____________________",
          itemsA: [note],
          answer: `${note.name} (${formatMoney(note.value, cfg.currency)})`,
          answerExplanation: `This is a ${note.name}, worth ${formatMoney(note.value, cfg.currency)}.`,
        });
        break;
      }

      case "count-coins": {
        const count = cfg.difficulty === "easy" ? randInt(rng, 3, 5) : randInt(rng, 5, 8);
        const group: CurrencyItem[] = [];
        for (let c = 0; c < count; c++) group.push(pick(rng, coins));
        const total = group.reduce((sum, it) => sum + it.value, 0);
        problems.push({
          id: `m-${i + 1}`,
          num: i + 1,
          type: "count-coins",
          currency: cfg.currency,
          instructions: "Count the coins and write the total amount.",
          prompt: "Total value: _____ = ________________",
          itemsA: group,
          targetAmount: total,
          answer: formatMoney(total, cfg.currency),
          answerExplanation: `Sum of coins: ${group.map((c) => c.displayStr).join(" + ")} = ${formatMoney(total, cfg.currency)}`,
        });
        break;
      }

      case "count-mixed": {
        const nNotes = notes.length > 0 ? randInt(rng, 1, 3) : 0;
        const nCoins = randInt(rng, 3, 6);
        const group: CurrencyItem[] = [];
        for (let n = 0; n < nNotes; n++) group.push(pick(rng, notes));
        for (let c = 0; c < nCoins; c++) group.push(pick(rng, coins));
        const total = group.reduce((sum, it) => sum + it.value, 0);
        problems.push({
          id: `m-${i + 1}`,
          num: i + 1,
          type: "count-mixed",
          currency: cfg.currency,
          instructions: "Count the banknotes and coins together. Write the total amount.",
          prompt: "Total money: ________________",
          itemsA: group,
          targetAmount: total,
          answer: formatMoney(total, cfg.currency),
          answerExplanation: `Total cash sum: ${formatMoney(total, cfg.currency)}`,
        });
        break;
      }

      case "add-money": {
        const count1 = randInt(rng, 2, 4);
        const count2 = randInt(rng, 2, 4);
        const group1 = Array.from({ length: count1 }, () => pick(rng, denoms.slice(0, 5)));
        const group2 = Array.from({ length: count2 }, () => pick(rng, denoms.slice(0, 5)));
        const total1 = group1.reduce((sum, it) => sum + it.value, 0);
        const total2 = group2.reduce((sum, it) => sum + it.value, 0);
        const total = total1 + total2;
        problems.push({
          id: `m-${i + 1}`,
          num: i + 1,
          type: "add-money",
          currency: cfg.currency,
          instructions: "Add the two sets of money together to find the sum.",
          prompt: `${formatMoney(total1, cfg.currency)} + ${formatMoney(total2, cfg.currency)} = ________________`,
          itemsA: group1,
          itemsB: group2,
          answer: formatMoney(total, cfg.currency),
          answerExplanation: `${formatMoney(total1, cfg.currency)} + ${formatMoney(total2, cfg.currency)} = ${formatMoney(total, cfg.currency)}`,
        });
        break;
      }

      case "compare-money": {
        const count1 = randInt(rng, 2, 5);
        const count2 = randInt(rng, 2, 5);
        const group1 = Array.from({ length: count1 }, () => pick(rng, denoms.slice(0, 6)));
        const group2 = Array.from({ length: count2 }, () => pick(rng, denoms.slice(0, 6)));
        const total1 = group1.reduce((sum, it) => sum + it.value, 0);
        const total2 = group2.reduce((sum, it) => sum + it.value, 0);
        const comp = total1 > total2 ? ">" : total1 < total2 ? "<" : "=";
        problems.push({
          id: `m-${i + 1}`,
          num: i + 1,
          type: "compare-money",
          currency: cfg.currency,
          instructions: "Compare the two money groups. Write <, >, or = in the circle.",
          prompt: `Group A (${formatMoney(total1, cfg.currency)}) [   ] Group B (${formatMoney(total2, cfg.currency)})`,
          itemsA: group1,
          itemsB: group2,
          answer: comp,
          answerExplanation: `${formatMoney(total1, cfg.currency)} is ${comp} ${formatMoney(total2, cfg.currency)}`,
        });
        break;
      }

      case "make-amount": {
        const targetCoin = pick(rng, coins);
        const targetMultiplier = randInt(rng, 2, 5);
        const target = targetCoin.value * targetMultiplier + pick(rng, coins).value;
        const candidatePool = shuffle(rng, [...coins, ...coins, ...notes.slice(0, 2)]);
        problems.push({
          id: `m-${i + 1}`,
          num: i + 1,
          type: "make-amount",
          currency: cfg.currency,
          instructions: `Circle or check the exact coins and bills needed to make ${formatMoney(target, cfg.currency)}.`,
          prompt: `Target Amount: ${formatMoney(target, cfg.currency)}`,
          itemsA: candidatePool.slice(0, 8),
          targetAmount: target,
          answer: formatMoney(target, cfg.currency),
          answerExplanation: `Select coins and notes that sum to exactly ${formatMoney(target, cfg.currency)}.`,
        });
        break;
      }

      case "calculate-change": {
        const bill = pick(rng, notes.length > 0 ? notes.slice(0, 3) : [denoms[denoms.length - 1]]);
        const cost = Math.max(10, bill.value - randInt(rng, 10, bill.value - 10));
        const change = bill.value - cost;
        problems.push({
          id: `m-${i + 1}`,
          num: i + 1,
          type: "calculate-change",
          currency: cfg.currency,
          instructions: "Calculate how much change you should receive.",
          prompt: `You buy an item for ${formatMoney(cost, cfg.currency)} and pay with a ${bill.name} (${formatMoney(bill.value, cfg.currency)}). What is your change?`,
          costAmount: cost,
          paidAmount: bill.value,
          answer: formatMoney(change, cfg.currency),
          answerExplanation: `${formatMoney(bill.value, cfg.currency)} - ${formatMoney(cost, cfg.currency)} = ${formatMoney(change, cfg.currency)} change`,
        });
        break;
      }

      case "shopping-word-problems": {
        const item1 = pick(rng, STORE_ITEMS_CATALOG);
        const item2 = pick(rng, STORE_ITEMS_CATALOG.filter((it) => it.name !== item1.name));
        const priceMult = cfg.difficulty === "easy" ? 1 : randInt(rng, 1, 3);
        const p1 = item1.basePrice * priceMult;
        const p2 = item2.basePrice * priceMult;
        const total = p1 + p2;
        const paidNote = notes.find((n) => n.value > total) || { name: "Bill", value: Math.ceil(total / 500) * 500 };
        const change = paidNote.value - total;

        problems.push({
          id: `m-${i + 1}`,
          num: i + 1,
          type: "shopping-word-problems",
          currency: cfg.currency,
          instructions: "Read the shopping scenario and solve the word problem.",
          prompt: `Sam buys a ${item1.name} (${item1.icon}) for ${formatMoney(p1, cfg.currency)} and a ${item2.name} (${item2.icon}) for ${formatMoney(p2, cfg.currency)}. Sam pays with ${formatMoney(paidNote.value, cfg.currency)}. (a) Total cost? (b) Change received?`,
          storeItems: [
            { name: item1.name, icon: item1.icon, price: p1 },
            { name: item2.name, icon: item2.icon, price: p2 },
          ],
          costAmount: total,
          paidAmount: paidNote.value,
          answer: `Total: ${formatMoney(total, cfg.currency)} | Change: ${formatMoney(change, cfg.currency)}`,
          answerExplanation: `Cost = ${formatMoney(p1, cfg.currency)} + ${formatMoney(p2, cfg.currency)} = ${formatMoney(total, cfg.currency)}. Change = ${formatMoney(paidNote.value, cfg.currency)} - ${formatMoney(total, cfg.currency)} = ${formatMoney(change, cfg.currency)}.`,
        });
        break;
      }
    }
  }

  return problems;
}
