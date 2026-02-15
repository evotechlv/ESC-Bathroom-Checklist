import React, { useState } from 'react';

export default function AdminView({ apps, setApps }) {
  const [users, setUsers] = useState([
    { id: 1, name: "John Tech" },
    { id: 2, name: "Jane Client" }
  ]);

  const colors = ['#2563eb', '#dc2626', '#059669', '#f59e0b', '#000000'];

  const toggleApp = (id) => {
    setApps(apps.map(a => a.id === id ? { ...a, enabled: !a.enabled } : a));
  };

  const changeColor = (id, color) => {
    setApps(apps.map(a => a.id === id ? { ...a, color } : a));
  };

  return (
    <div>
      <section style={{ marginBottom: '30px' }}>
        <h4 style={{ marginBottom: '12px', color: '#475569' }}>APP CONFIGURATION</h4>
        {apps.map(app => (
          <div key={app.id} className="card" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '10px' }}>
              <span style={{ fontWeight: 'bold' }}>{app.name}</span>
              <button onClick={() => toggleApp(app.id)} style={{ color: app.enabled ? 'green' : 'red', border: 'none', background: 'none', fontWeight: 'bold' }}>
                {app.enabled ? 'ENABLED' : 'DISABLED'}
              </button>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              {colors.map(c => (
                <button 
                  key={c} 
                  onClick={() => changeColor(app.id, c)}
                  style={{ width: '24px', height: '24px', background: c, borderRadius: '4px', border: app.color === c ? '2px solid black' : 'none' }}
                />
              ))}
            </div>
          </div>
        ))}
      </section>

      <section>
        <h4 style={{ marginBottom: '12px', color: '#475569' }}>USER MANAGEMENT</h4>
        {users.map(u => (
          <div key={u.id} className="card">
            <span style={{ flex: 1 }}>👤 {u.name}</span>
            <button onClick={() => setUsers(users.filter(x => x.id !== u.id))} style={{ color: 'red', border: 'none', background: 'none' }}>Remove</button>
          </div>
        ))}
        <button style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '2px dashed #cbd5e1', background: 'none', color: '#64748b', fontWeight: 'bold' }}>
          + Add New User
        </button>
      </section>
    </div>
  );
}