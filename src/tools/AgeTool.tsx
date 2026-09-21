import { useState } from 'react';
import { ageFromDob } from './lib';
import { Result } from './widgets';

export default function AgeTool() {
  const [dob, setDob] = useState('');
  const d = dob ? new Date(dob + 'T00:00:00') : null;
  const valid = d && !isNaN(d.getTime()) && d <= new Date();
  const age = valid ? ageFromDob(d!) : null;
  return (
    <div className="panel">
      <label>Date of birth<br /><input type="date" value={dob} onChange={(e) => setDob(e.target.value)} style={{ width: 'auto' }} /></label>
      {age && (
        <div className="tool-grid" style={{ marginTop: 14 }}>
          <Result label="Years" value={age.years} />
          <Result label="Months" value={age.months} />
          <Result label="Days" value={age.days} />
          <Result label="Total days alive" value={(Math.floor((Date.now() - d!.getTime()) / 86400000)).toLocaleString()} />
        </div>
      )}
    </div>
  );
}
