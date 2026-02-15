import React from 'react';

export default function Login({ onLogin }) {
  const roles = ['admin', 'user', 'client'];
  
  return (
    <div style={{ padding: '40px', textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ marginBottom: '10px' }}>ESC</h1>
      <p style={{ color: '#64748b', marginBottom: '40px' }}>Select access level</p>
      {roles.map(role => (
        <button 
          key={role} 
          onClick={() => onLogin({ role, name: `Staff-${role}` })}
          style={{ 
            width: '100%', padding: '16px', marginBottom: '12px', borderRadius: '12px',
            border: '1px solid #e2e8f0', background: 'white', fontWeight: 'bold',
            textTransform: 'uppercase', cursor: 'pointer', boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
          }}
        >
          {role} Access
        </button>
      ))}
    </div>
  );
}