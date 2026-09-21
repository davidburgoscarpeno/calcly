import { useState } from 'react';
import { UNITS, convertUnit, simplifyFraction, mean, median, mode, simplifyRatio } from './lib';
import { Field, Result, fmt, num } from './widgets';

export function UnitTool() {
  const kinds = { Length: Object.keys(UNITS.Length), Weight: Object.keys(UNITS.Weight), Temperature: ['celsius', 'fahrenheit', 'kelvin'] };
  const [kind, setKind] = useState<keyof typeof kinds>('Length');
  const [val, setVal] = useState('1');
  const [from, setFrom] = useState('kilometer');
  const [to, setTo] = useState('mile');
  const v = num(val);
  const res = v !== null ? convertUnit(v, from, to, kind as string) : null;
  function switchKind(k: keyof typeof kinds) {
    setKind(k);
    setFrom(kinds[k][0]); setTo(kinds[k][1] ?? kinds[k][0]);
  }
  return (
    <div className="panel">
      <div className="btn-row">
        {(Object.keys(kinds) as (keyof typeof kinds)[]).map((k) => (
          <button key={k} className={k === kind ? '' : 'secondary'} onClick={() => switchKind(k)}>{k}</button>
        ))}
      </div>
      <div className="btn-row" style={{ flexWrap: 'wrap' }}>
        <Field label="Value" value={val} onChange={setVal} width={100} />
        <label>From<br /><select value={from} onChange={(e) => setFrom(e.target.value)} style={{ width: 'auto' }}>{kinds[kind].map((u) => <option key={u}>{u}</option>)}</select></label>
        <label>To<br /><select value={to} onChange={(e) => setTo(e.target.value)} style={{ width: 'auto' }}>{kinds[kind].map((u) => <option key={u}>{u}</option>)}</select></label>
      </div>
      {res !== null && <div className="tool-grid"><Result label={`${val} ${from} =`} value={`${fmt(res, 4)} ${to}`} /></div>}
    </div>
  );
}
export function FractionTool() {
  const [n, setN] = useState(''); const [d, setD] = useState('');
  const N = num(n), D = num(d);
  const res = N !== null && D !== null && D !== 0 ? simplifyFraction(N, D) : null;
  return (
    <div className="panel">
      <div className="btn-row">
        <Field label="Numerator" value={n} onChange={setN} width={90} /> /
        <Field label="Denominator" value={d} onChange={setD} width={90} />
      </div>
      {res && <div className="tool-grid">
        <Result label="Simplified" value={`${fmt(res.num, 4)} / ${fmt(res.den, 4)}`} />
        <Result label="Decimal" value={fmt(N! / D!, 6)} />
        <Result label="Percentage" value={`${fmt((N! / D!) * 100)}%`} />
      </div>}
    </div>
  );
}
export function AverageTool() {
  const [raw, setRaw] = useState('');
  const nums = raw.split(/[\s,;]+/).map(Number).filter((x) => !isNaN(x) && raw.trim() !== '');
  const valid = nums.length > 0;
  return (
    <div className="panel">
      <label htmlFor="nums">Numbers (comma or space separated)</label>
      <textarea id="nums" rows={4} value={raw} onChange={(e) => setRaw(e.target.value)} placeholder="4, 8, 15, 16, 23, 42" />
      {valid && <div className="tool-grid">
        <Result label="Mean" value={fmt(mean(nums), 4)} />
        <Result label="Median" value={fmt(median(nums), 4)} />
        <Result label="Mode" value={mode(nums).map((x) => fmt(x, 4)).join(', ')} />
        <Result label="Count" value={nums.length} />
      </div>}
    </div>
  );
}
export function RatioTool() {
  const [a, setA] = useState(''); const [b, setB] = useState('');
  const A = num(a), B = num(b);
  const res = A !== null && B !== null && B !== 0 ? simplifyRatio(A, B) : null;
  return (
    <div className="panel">
      <div className="btn-row">
        <Field label="A" value={a} onChange={setA} width={90} /> :
        <Field label="B" value={b} onChange={setB} width={90} />
      </div>
      {res && <div className="tool-grid">
        <Result label="Simplest form" value={`${fmt(res.a, 4)} : ${fmt(res.b, 4)}`} />
        <Result label="A as % of total" value={`${fmt((A! / (A! + B!)) * 100)}%`} />
      </div>}
    </div>
  );
}
