import { useState } from 'react';
import { pctIncrease, pctDifference } from './lib';
import { Field, Result, fmt, num } from './widgets';

export default function PercentChangeTool({ mode }: { mode: 'increase' | 'difference' }) {
  const [a, setA] = useState(''); const [b, setB] = useState('');
  const x = num(a), y = num(b);
  const valid = x !== null && y !== null && (mode === 'difference' ? x + y !== 0 : x !== 0);
  const r = valid ? (mode === 'increase' ? pctIncrease(x!, y!) : pctDifference(x!, y!)) : null;
  return (
    <div className="panel">
      <div className="btn-row">
        {mode === 'increase' ? <span>from</span> : <span>value A</span>}
        <Field label="" value={a} onChange={setA} />
        {mode === 'increase' ? <span>to</span> : <span>value B</span>}
        <Field label="" value={b} onChange={setB} />
      </div>
      <div className="tool-grid">
        <Result label={mode === 'increase' ? 'Percentage increase' : 'Percentage difference'} value={r !== null ? `${r > 0 && mode === 'increase' ? '+' : ''}${fmt(r)}%` : '-'} />
      </div>
      <p style={{ fontSize: '.85rem', color: 'var(--text-muted)' }}>
        {mode === 'increase' ? 'Formula: (new - old) / old x 100' : 'Formula: |A - B| / ((A + B) / 2) x 100'}
      </p>
    </div>
  );
}
