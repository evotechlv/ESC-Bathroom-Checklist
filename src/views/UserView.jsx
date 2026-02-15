import React from 'react';

const UserView = ({ apps }) => (
  <div>
    <h2>Your Workspace</h2>
    <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1rem' }}>Welcome, Team Member</p>
    {apps.map(app => (
      <div key={app.id} className="card">
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: app.color }} />
        <span>Launch {app.name}</span>
      </div>
    ))}
  </div>
);

export default UserView;