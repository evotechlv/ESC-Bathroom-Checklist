import React from 'react';

export default function UserView({ apps }) {
  return (
    <div>
      <h4 style={{ marginBottom: '12px', color: '#475569' }}>AVAILABLE SERVICES</h4>
      {apps.length > 0 ? apps.map(app => (
        <div key={app.id} className="card" style={{ borderLeft: `6px solid ${app.color}` }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontWeight: 'bold' }}>{app.name}</p>
            <p style={{ fontSize: '0.8rem', color: '#64748b' }}>Tap to open checklist</p>
          </div>
          <span style={{ fontSize: '1.2rem' }}>➔</span>
        </div>
      )) : (
        <p style={{ textAlign: 'center', color: '#94a3b8', marginTop: '40px' }}>No apps currently available.</p>
      )}
    </div>
  );
}