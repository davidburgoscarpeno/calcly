import { useState } from 'react';
import { loanPayment, tipAmount, discount, vat, hourlyToAnnual, compound } from './lib';
import { Field, Result, fmt, num } from './widgets';

const money = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 });

export function LoanTool() {
  const [p, setP] = useState('20000'); const [r, setR] = useState('6'); const [y, setY] = useState('5');
  const P = num(p), R = num(r), Y = num(y);
  const res = P !== null && R !== null && Y !== null && Y > 0 ? loanPayment(P, R, Y) : null;
  return (
    <div className="panel">
      <div className="btn-row" style={{ flexWrap: 'wrap' }}>
        <Field label="Loan amount" value={p} onChange={setP} width={120} />
        <Field label="Annual rate %" value={r} onChange={setR} width={90} />
        <Field label="Term (years)" value={y} onChange={setY} width={80} />
      </div>
      {res && <div className="tool-grid">
        <Result label="Monthly payment" value={money(res.monthly)} />
        <Result label="Total paid" value={money(res.total)} />
        <Result label="Total interest" value={money(res.interest)} />
      </div>}
      <p style={{ fontSize: '.8rem', color: 'var(--text-muted)' }}>Formula: M = P x r(1+r)^n / ((1+r)^n - 1), fixed rate, monthly payments.</p>
    </div>
  );
}
export function TipTool() {
  const [bill, setBill] = useState(''); const [pct, setPct] = useState('15'); const [people, setPeople] = useState('1');
  const b = num(bill), p = num(pct), n = num(people);
  const res = b !== null && p !== null ? tipAmount(b, p, n ?? 1) : null;
  return (
    <div className="panel">
      <div className="btn-row" style={{ flexWrap: 'wrap' }}>
        <Field label="Bill amount" value={bill} onChange={setBill} />
        <Field label="Tip %" value={pct} onChange={setPct} width={70} />
        <Field label="Split between" value={people} onChange={setPeople} width={70} />
      </div>
      <div className="btn-row">{[10, 15, 18, 20, 25].map((x) => <button key={x} className="secondary" onClick={() => setPct(String(x))}>{x}%</button>)}</div>
      {res && <div className="tool-grid">
        <Result label="Tip" value={money(res.tip)} />
        <Result label="Total" value={money(res.total)} />
        <Result label="Per person" value={money(res.perPerson)} />
      </div>}
    </div>
  );
}
export function DiscountTool() {
  const [price, setPrice] = useState(''); const [pct, setPct] = useState('');
  const P = num(price), d = num(pct);
  const res = P !== null && d !== null ? discount(P, d) : null;
  return (
    <div className="panel">
      <div className="btn-row">
        <Field label="Original price" value={price} onChange={setPrice} />
        <Field label="Discount %" value={pct} onChange={setPct} width={80} />
      </div>
      {res && <div className="tool-grid">
        <Result label="Final price" value={money(res.final)} />
        <Result label="You save" value={money(res.saved)} />
      </div>}
    </div>
  );
}
export function VatTool() {
  const [amount, setAmount] = useState(''); const [pct, setPct] = useState('21'); const [mode, setMode] = useState<'add' | 'remove'>('add');
  const a = num(amount), p = num(pct);
  const res = a !== null && p !== null ? vat(a, p, mode) : null;
  return (
    <div className="panel">
      <div className="btn-row" style={{ flexWrap: 'wrap' }}>
        <Field label="Amount" value={amount} onChange={setAmount} />
        <Field label="VAT %" value={pct} onChange={setPct} width={80} />
        <label>Mode<br />
          <select value={mode} onChange={(e) => setMode(e.target.value as any)} style={{ width: 'auto' }}>
            <option value="add">Add VAT (net to gross)</option>
            <option value="remove">Remove VAT (gross to net)</option>
          </select>
        </label>
      </div>
      {res && <div className="tool-grid">
        <Result label="Net" value={money(res.net)} />
        <Result label={`VAT (${fmt(p ?? 0)}%)`} value={money(res.vat)} />
        <Result label="Gross" value={money(res.gross)} />
      </div>}
    </div>
  );
}
export function SalaryTool() {
  const [hourly, setHourly] = useState(''); const [hours, setHours] = useState('40');
  const h = num(hourly), hw = num(hours);
  const annual = h !== null && hw !== null ? hourlyToAnnual(h, hw) : null;
  return (
    <div className="panel">
      <div className="btn-row">
        <Field label="Hourly rate" value={hourly} onChange={setHourly} />
        <Field label="Hours per week" value={hours} onChange={setHours} width={80} />
      </div>
      {annual !== null && <div className="tool-grid">
        <Result label="Annual (52 weeks)" value={money(annual)} />
        <Result label="Monthly" value={money(annual / 12)} />
        <Result label="Weekly" value={money(annual / 52)} />
      </div>}
    </div>
  );
}
export function CompoundCalcTool() {
  const [p, setP] = useState('10000'); const [r, setR] = useState('7'); const [y, setY] = useState('10'); const [c, setC] = useState('100');
  const P = num(p) ?? 0, R = num(r) ?? 0, Y = num(y) ?? 0, C = num(c) ?? 0;
  const res = compound(P, R, Y, C);
  return (
    <div className="panel">
      <div className="btn-row" style={{ flexWrap: 'wrap' }}>
        <Field label="Initial amount" value={p} onChange={setP} width={120} />
        <Field label="Annual rate %" value={r} onChange={setR} width={90} />
        <Field label="Years" value={y} onChange={setY} width={70} />
        <Field label="Monthly contribution" value={c} onChange={setC} width={120} />
      </div>
      <div className="tool-grid">
        <Result label="Projected balance" value={money(res.total)} />
        <Result label="Total contributed" value={money(res.contributed)} />
        <Result label="Interest earned" value={money(res.interest)} />
      </div>
      <p style={{ fontSize: '.8rem', color: 'var(--text-muted)' }}>Monthly compounding. Estimate only - not financial advice.</p>
    </div>
  );
}
