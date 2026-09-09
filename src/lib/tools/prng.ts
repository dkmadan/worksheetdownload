// ─────────────────────────────────────────────────────────────────────────────
// Tiny deterministic PRNG (mulberry32) + helpers, shared by every generator
// tool. A worksheet is fully described by its config + a numeric `seed`, so
// "New sheet" just means "pick a new seed" and any sheet can be reproduced.
// ─────────────────────────────────────────────────────────────────────────────

export type Rng = () => number;

export function makeRng(seed: number): Rng {
  let s = seed >>> 0;
  return function () {
    s |= 0;
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Inclusive integer in [lo, hi]. */
export function randInt(rng: Rng, lo: number, hi: number): number {
  if (hi < lo) [lo, hi] = [hi, lo];
  return Math.floor(rng() * (hi - lo + 1)) + lo;
}

export function pick<T>(rng: Rng, arr: readonly T[]): T {
  return arr[Math.floor(rng() * arr.length)];
}

export function shuffle<T>(rng: Rng, arr: readonly T[]): T[] {
  const out = arr.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export function gcd(a: number, b: number): number {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) [a, b] = [b, a % b];
  return a || 1;
}

export function lcm(a: number, b: number): number {
  return Math.abs(a * b) / gcd(a, b);
}

/** A fresh, hard-to-guess seed for "New sheet". */
export function freshSeed(): number {
  return (Math.floor(Math.random() * 0xffffffff) ^ Date.now()) >>> 0;
}
