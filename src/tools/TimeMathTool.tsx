import { useState } from 'react';
import { Field, Result, num } from './widgets';

export default function TimeMathTool({ mode }: { mode: 'add' | 'between' }) {
  const [h1, setH1] = useState(''); const [m1, setM1] = useState('');
  const [h2, setH2] = useState(''); const [m2, setM2] = useState('');
  const a = (num(h1) ?? 0) * 60 + (num(m1) ?? 0);
  const b = (num(h2) ?? 0) * 60 + (num(m2) ?? 0);
  const filled = (h1 !== '' || m1 !== '') && (h2 !== '' || m2 !== '');
  if (mode === 'between') {
    const diff = filled ? Math.abs(b - a) : null;
    return (
      <div className="panel">
        <div className="btn-row">
          <Field label="Time 1 (hours)" value={h1} onChange={setH1} width={80} />
          <Field label="minutes" value={m1} onChange={setM1} width={70} />
          <Field label="Time 2 (hours)" value={h2} onChange={setH2} width={80} />
          <Field label="minutes" value={m2} onChange={setM2} width={70} />
        </div>
        {diff !== null && <div className="tool-grid">
          <Result label="Between the two times" value={`${Math.floor(diff / 60)}h ${diff % 60}m`} />
          <Result label="In hours" value={(diff / 60).toFixed(2)} />
        </div>}
      </div>
    );
  }
  const total = filled ? a + b : null;
  return (
    <div className="panel">
      <p>Add two durations (hours and minutes each):</p>
      <div className="btn-row">
        <Field label="Duration 1 h" value={h1} onChange={setH1} width={80} />
        <Field label="min" value={m1} onChange={setM1} width={70} />
        <Field label="Duration 2 h" value={h2} onChange={setH2} width={80} />
        <Field label="min" value={m2} onChange={setM2} width={70} />
      </div>
      {total !== null && <div className="tool-grid"><Result label="Total" value={`${Math.floor(total / 60)}h ${total % 60}m`} /></div>}
    </div>
  );
}
