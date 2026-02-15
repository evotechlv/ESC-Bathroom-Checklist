import React from 'react';

export default function Footer() {
  const items = [
    { icon: '🏠', label: 'Home' },
    { icon: '📋', label: 'Checklist' },
    { icon: '⚙️', label: 'Settings' }
  ];

  return (
    <footer style={{ 
      position: 'fixed', bottom: 0, width: '100%', maxWidth: '500px', 
      background: 'white', borderTop: '1px solid #e2e8f0', 
      display: 'flex', justifyContent: 'space-around', padding: '10px 0' 
    }}>
      {items.map(item => (
        <div key={item.label} style={{ textAlign: 'center', cursor: 'pointer' }}>
          <div style={{ fontSize: '1.2rem' }}>{item.icon}</div>
          <p style={{ fontSize: '10px', fontWeight: 'bold', color: '#64748b' }}>{item.label}</p>
        </div>
      ))}
    </footer>
  );
}