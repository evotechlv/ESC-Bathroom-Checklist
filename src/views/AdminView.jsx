import React from 'react';

const AdminView = ({ apps, setApps }) => {
  const toggleStatus = (id) => {
    setApps(apps.map(a => a.id === id ? { ...a, enabled: !a.enabled } : a));
  };

  const changeColor = (id, color) => {
    setApps(apps.map(a => a.id === id ? { ...a, color } : a));
  };

  return (
    <div>
      <h2 style={{ marginBottom: '1rem' }}>Manage Apps</h2>
      {apps.map(app => (
        <div key={app.id} className={`card ${!app.enabled ? 'disabled' : ''}`}>
          <div style={{ flex: 1 }}>
            <h4 style={{ color: app.color }}>{app.name}</h4>
            <div style={{ display: 'flex', gap: '5px', marginTop: '8px' }}>
              {['#3b82f6', '#10b981', '#ef4444'].map(c => (
                <div 
                  key={c} 
                  className={`color-swatch ${app.color === c ? 'active' : ''}`}
                  style={{ backgroundColor: c }}
                  onClick={() => changeColor(app.id, c)}
                />
              ))}
            </div>
          </div>
          <button onClick={() => toggleStatus(app.id)}>
            {app.enabled ? 'Disable' : 'Enable'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default AdminView;