import { describe, it, expect } from 'vitest';
import { pctIncrease, pctDifference, ageFromDob, daysBetween, loanPayment, tipAmount, discount, vat, hourlyToAnnual, simplifyFraction, mean, median, simplifyRatio, compound, convertUnit } from '../src/tools/lib';

describe('percentages', () => {
  it('increase', () => expect(pctIncrease(80, 92)).toBeCloseTo(15));
  it('difference', () => expect(pctDifference(150, 180)).toBeCloseTo(18.18, 1));
});
describe('dates', () => {
  it('age', () => {
    const a = ageFromDob(new Date('1990-06-15'), new Date('2026-09-22'));
    expect(a).toEqual({ years: 36, months: 3, days: 7 });
  });
  it('days between', () => expect(daysBetween(new Date('2026-01-01'), new Date('2026-12-31'))).toBe(364));
});
describe('money', () => {
  it('loan payment', () => { const r = loanPayment(20000, 6, 5); expect(r.monthly).toBeCloseTo(386.66, 1); });
  it('zero rate loan', () => { const r = loanPayment(1200, 0, 1); expect(r.monthly).toBe(100); });
  it('tip', () => { const r = tipAmount(86.5, 18, 2); expect(r.total).toBeCloseTo(102.07, 2); });
  it('discount', () => { const r = discount(79.99, 30); expect(r.final).toBeCloseTo(55.99, 2); });
  it('vat add', () => { const r = vat(100, 21, 'add'); expect(r.gross).toBe(121); });
  it('vat remove', () => { const r = vat(121, 21, 'remove'); expect(r.net).toBeCloseTo(100, 6); });
  it('salary', () => expect(hourlyToAnnual(25)).toBe(52000));
  it('compound', () => { const r = compound(10000, 7, 10, 0); expect(r.total).toBeCloseTo(20096.61, 0); });
});
describe('math', () => {
  it('simplify fraction', () => expect(simplifyFraction(42, 56)).toEqual({ num: 3, den: 4 }));
  it('mean', () => expect(mean([4, 8, 15, 16, 23, 42])).toBe(18));
  it('median even', () => expect(median([1, 2, 3, 4])).toBe(2.5));
  it('ratio', () => expect(simplifyRatio(250, 150)).toEqual({ a: 5, b: 3 }));
  it('units', () => expect(convertUnit(5, 'kilometer', 'mile', 'Length')).toBeCloseTo(3.1069, 3));
  it('temperature', () => expect(convertUnit(100, 'celsius', 'fahrenheit', 'Temperature')).toBe(212));
});
