// Pure calculator logic, unit-tested.
export function pctIncrease(from: number, to: number): number { return ((to - from) / from) * 100; }
export function pctDifference(a: number, b: number): number { return (Math.abs(a - b) / ((a + b) / 2)) * 100; }
export function ageFromDob(dob: Date, now = new Date()): { years: number; months: number; days: number } {
  let years = now.getFullYear() - dob.getFullYear();
  let months = now.getMonth() - dob.getMonth();
  let days = now.getDate() - dob.getDate();
  if (days < 0) { months--; days += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); }
  if (months < 0) { years--; months += 12; }
  return { years, months, days };
}
export function daysBetween(a: Date, b: Date): number {
  return Math.round((Date.UTC(b.getFullYear(), b.getMonth(), b.getDate()) - Date.UTC(a.getFullYear(), a.getMonth(), a.getDate())) / 86400000);
}
export function addDays(d: Date, n: number): Date { const r = new Date(d); r.setDate(r.getDate() + n); return r; }
export function loanPayment(principal: number, annualRate: number, years: number): { monthly: number; total: number; interest: number } {
  const r = annualRate / 100 / 12, n = years * 12;
  if (r === 0) { const monthly = principal / n; return { monthly, total: principal, interest: 0 }; }
  const monthly = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const total = monthly * n;
  return { monthly, total, interest: total - principal };
}
export function tipAmount(bill: number, pct: number, people = 1): { tip: number; total: number; perPerson: number } {
  const tip = (bill * pct) / 100;
  const total = bill + tip;
  return { tip, total, perPerson: total / Math.max(1, people) };
}
export function discount(price: number, pct: number): { final: number; saved: number } {
  const saved = (price * pct) / 100;
  return { final: price - saved, saved };
}
export function vat(amount: number, pct: number, mode: 'add' | 'remove'): { net: number; vat: number; gross: number } {
  if (mode === 'add') { const v = (amount * pct) / 100; return { net: amount, vat: v, gross: amount + v }; }
  const net = amount / (1 + pct / 100);
  return { net, vat: amount - net, gross: amount };
}
export function hourlyToAnnual(hourly: number, hoursPerWeek = 40, weeks = 52): number { return hourly * hoursPerWeek * weeks; }
export function gcd(a: number, b: number): number { return b === 0 ? Math.abs(a) : gcd(b, a % b); }
export function simplifyFraction(num: number, den: number): { num: number; den: number } {
  const g = gcd(num, den) || 1;
  return { num: num / g, den: den / g };
}
export function mean(nums: number[]): number { return nums.reduce((a, b) => a + b, 0) / nums.length; }
export function median(nums: number[]): number {
  const s = [...nums].sort((a, b) => a - b);
  const mid = Math.floor(s.length / 2);
  return s.length % 2 ? s[mid] : (s[mid - 1] + s[mid]) / 2;
}
export function mode(nums: number[]): number[] {
  const freq = new Map<number, number>();
  nums.forEach((n) => freq.set(n, (freq.get(n) ?? 0) + 1));
  const max = Math.max(...freq.values());
  return [...freq.entries()].filter(([, c]) => c === max).map(([n]) => n);
}
export function simplifyRatio(a: number, b: number): { a: number; b: number } {
  const g = gcd(a, b) || 1;
  return { a: a / g, b: b / g };
}
export function compound(P: number, annualRate: number, years: number, monthly = 0): { total: number; contributed: number; interest: number } {
  const r = annualRate / 100 / 12, n = 12 * years;
  const fvP = P * Math.pow(1 + r, n);
  const fvC = r > 0 ? monthly * ((Math.pow(1 + r, n) - 1) / r) : monthly * n;
  const total = fvP + fvC;
  const contributed = P + monthly * n;
  return { total, contributed, interest: total - contributed };
}
export const UNITS: Record<string, Record<string, number>> = {
  Length: { meter: 1, kilometer: 1000, centimeter: 0.01, mile: 1609.344, foot: 0.3048, inch: 0.0254, yard: 0.9144 },
  Weight: { kilogram: 1, gram: 0.001, pound: 0.45359237, ounce: 0.028349523125, tonne: 1000 },
};
export function convertUnit(value: number, from: string, to: string, kind: string): number {
  if (kind === 'Temperature') {
    const toC = (v: number, u: string) => (u === 'fahrenheit' ? ((v - 32) * 5) / 9 : u === 'kelvin' ? v - 273.15 : v);
    const fromC = (v: number, u: string) => (u === 'fahrenheit' ? (v * 9) / 5 + 32 : u === 'kelvin' ? v + 273.15 : v);
    return fromC(toC(value, from), to);
  }
  const table = UNITS[kind];
  return (value * table[from]) / table[to];
}
