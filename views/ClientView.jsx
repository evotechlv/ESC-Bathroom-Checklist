import React from 'react';

export default function UserView({ apps, title }) {
  return (
    <div>
      <h4 style={{ color: '#64748b', fontSize: '0.8rem', marginBottom: '15px' }}>{title || 'YOUR SERVICES'}</h4>
      {apps.map(app => (
        <div key={app.id} className="card" style={{ borderLeft: `6px solid ${app.color}` }}>
          <span style={{ fontWeight: 'bold' }}>{app.name}</span>
          <span style={{ color: '#cbd5e1' }}>➔</span>
        </div>
      ))}
    </div>
  );
}