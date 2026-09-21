import { useState } from 'react';
import { daysBetween, addDays } from './lib';
import { Field, Result, num } from './widgets';

export default function DateMathTool({ mode }: { mode: 'between' | 'add' }) {
  const [d1, setD1] = useState(''); const [d2, setD2] = useState('');
  const [base, setBase] = useState(''); const [days, setDays] = useState('');
  if (mode === 'between') {
    const a = d1 ? new Date(d1 + 'T00:00:00') : null;
    const b = d2 ? new Date(d2 + 'T00:00:00') : null;
    const valid = a && b && !isNaN(a.getTime()) && !isNaN(b.getTime());
    return (
      <div className="panel">
        <div className="btn-row">
          <label>Start date<br /><input type="date" value={d1} onChange={(e) => setD1(e.target.value)} style={{ width: 'auto' }} /></label>
          <label>End date<br /><input type="date" value={d2} onChange={(e) => setD2(e.target.value)} style={{ width: 'auto' }} /></label>
        </div>
        {valid && <div className="tool-grid">
          <Result label="Days between" value={Math.abs(daysBetween(a!, b!)).toLocaleString()} />
          <Result label="Weeks" value={(Math.abs(daysBetween(a!, b!)) / 7).toFixed(1)} />
        </div>}
      </div>
    );
  }
  const bd = base ? new Date(base + 'T00:00:00') : null;
  const n = num(days);
  const valid2 = bd && !isNaN(bd.getTime()) && n !== null;
  const res = valid2 ? addDays(bd!, n!) : null;
  return (
    <div className="panel">
      <div className="btn-row">
        <label>Start date<br /><input type="date" value={base} onChange={(e) => setBase(e.target.value)} style={{ width: 'auto' }} /></label>
        <Field label="Days to add (or negative)" value={days} onChange={setDays} />
      </div>
      {res && <div className="tool-grid"><Result label="Resulting date" value={res.toDateString()} /></div>}
    </div>
  );
}
