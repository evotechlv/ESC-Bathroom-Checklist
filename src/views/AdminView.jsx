import React, { useState } from 'react';

export default function AdminView({ apps, setApps }) {
  const [users, setUsers] = useState([{ id: 1, name: "Operator A" }, { id: 2, name: "Manager B" }]);
  const palette = ['#2563eb', '#dc2626', '#059669', '#f59e0b', '#000000'];

  const toggleApp = (id) => setApps(apps.map(a => a.id === id ? { ...a, enabled: !a.enabled } : a));
  const changeColor = (id, color) => setApps(apps.map(a => a.id === id ? { ...a, color } : a));

  return (
    <div>
      <h4 style={{ color: '#64748b', fontSize: '0.8rem', marginBottom: '15px' }}>APP MANAGEMENT</h4>
      {apps.map(app => (
        <div key={app.id} className="card" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <span style={{ fontWeight: 'bold' }}>{app.name}</span>
            <button onClick={() => toggleApp(app.id)} style={{ border: 'none', background: 'none', fontWeight: 'bold', color: app.enabled ? '#059669' : '#dc2626' }}>
              {app.enabled ? 'ACTIVE' : 'HIDDEN'}
            </button>
          </div>
          <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
            {palette.map(c => (
              <div key={c} onClick={() => changeColor(app.id, c)} className="color-dot" style={{ background: c, border: app.color === c ? '2px solid #000' : '' }} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}