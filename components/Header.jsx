import React from 'react';

export default function Header({ role, onLogout }) {
  const bgColor = role === 'admin' ? 'var(--admin)' : role === 'client' ? 'var(--client)' : 'var(--user)';
  
  return (
    <header style={{ 
      background: bgColor, color: 'white', padding: '16px', 
      display: 'flex', justifyContent: 'space-between', alignItems: 'center' 
    }}>
      <h2 style={{ fontSize: '1rem', letterSpacing: '1px' }}>ESC SYSTEM</h2>
      <button onClick={onLogout} style={{ 
        background: 'rgba(255,255,255,0.2)', border: 'none', 
        color: 'white', padding: '6px 12px', borderRadius: '6px', fontSize: '0.8rem' 
      }}>
        LOGOUT
      </button>
    </header>
  );
}