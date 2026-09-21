import { useState } from 'react';

function fmt(n: number) {
  if (!isFinite(n)) return '-';
  return Math.abs(n) >= 1000 ? n.toLocaleString('en-US', { maximumFractionDigits: 2 }) : String(Math.round(n * 10000) / 10000);
}

export default function PercentTool() {
  const [a1, setA1] = useState(''); const [b1, setB1] = useState('');
  const [a2, setA2] = useState(''); const [b2, setB2] = useState('');
  const [a3, setA3] = useState(''); const [b3, setB3] = useState('');
  const r1 = (parseFloat(b1) * parseFloat(a1)) / 100;
  const r2 = (parseFloat(a2) / parseFloat(b2)) * 100;
  const r3 = ((parseFloat(b3) - parseFloat(a3)) / parseFloat(a3)) * 100;
  const num = (v: string) => v !== '' && !isNaN(parseFloat(v));
  return (
    <div className="panel">
      <h3>What is X% of Y?</h3>
      <div className="btn-row">
        <input type="text" inputMode="decimal" style={{maxWidth:110}} value={a1} onChange={(e)=>setA1(e.target.value)} aria-label="percentage" /> % of
        <input type="text" inputMode="decimal" style={{maxWidth:110}} value={b1} onChange={(e)=>setB1(e.target.value)} aria-label="of value" />
        = <strong>{num(a1)&&num(b1) ? fmt(r1) : '-'}</strong>
      </div>
      <h3>X is what percent of Y?</h3>
      <div className="btn-row">
        <input type="text" inputMode="decimal" style={{maxWidth:110}} value={a2} onChange={(e)=>setA2(e.target.value)} aria-label="part" /> is what % of
        <input type="text" inputMode="decimal" style={{maxWidth:110}} value={b2} onChange={(e)=>setB2(e.target.value)} aria-label="whole" />
        = <strong>{num(a2)&&num(b2)&&parseFloat(b2)!==0 ? fmt(r2)+'%' : '-'}</strong>
      </div>
      <h3>Percentage change</h3>
      <div className="btn-row">
        from <input type="text" inputMode="decimal" style={{maxWidth:110}} value={a3} onChange={(e)=>setA3(e.target.value)} aria-label="from" />
        to <input type="text" inputMode="decimal" style={{maxWidth:110}} value={b3} onChange={(e)=>setB3(e.target.value)} aria-label="to" />
        = <strong>{num(a3)&&num(b3)&&parseFloat(a3)!==0 ? (r3>0?'+':'')+fmt(r3)+'%' : '-'}</strong>
      </div>
    </div>
  );
}
