import React, { useState } from 'react';
import './App.css';
import Login from './views/Login';
import AdminView from './views/AdminView';
import UserView from './views/UserView';
import ClientView from './views/ClientView';

function App() {
  const [user, setUser] = useState(null); // Stores { name, role }

  // App Global State (passed to Admin for management)
  const [webApps, setWebApps] = useState([
    { id: 1, name: "Analytics", color: "#3b82f6", enabled: true },
    { id: 2, name: "CRM", color: "#10b981", enabled: true },
    { id: 3, name: "Invoicing", color: "#f59e0b", enabled: true },
  ]);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <div className="layout">
      {/* Dynamic Header based on Role */}
      <header className="header" style={{ backgroundColor: user.role === 'admin' ? '#dc2626' : '#2563eb' }}>
        <span style={{ fontWeight: 'bold' }}>{user.role.toUpperCase()} PANEL</span>
        <button onClick={() => setUser(null)} style={{ background: 'none', color: 'white', border: 'none' }}>Logout</button>
      </header>

      <main style={{ padding: '1.5rem', paddingBottom: '5rem' }}>
        {user.role === 'admin' && <AdminView apps={webApps} setApps={setWebApps} />}
        {user.role === 'user' && <UserView apps={webApps.filter(a => a.enabled)} />}
        {user.role === 'client' && <ClientView apps={webApps.filter(a => a.enabled)} />}
      </main>

      <nav className="footer-nav">
        <button>🏠</button>
        <button>👤</button>
        <button>⚙️</button>
      </nav>
    </div>
  );
}

export default App;