import React, { useState } from 'react';
import './App.css';
import AdminView from './views/AdminView';
import UserView from './views/UserView'; 
import ClientView from './views/ClientView'; // Similar to UserView but restricted
import Login from './views/Login';

function App() {
  const [user, setUser] = useState(null);
  const [webApps, setWebApps] = useState([
    { id: 1, name: "Bathroom Checklist", color: "#2563eb", active: true },
    { id: 2, name: "Supply Orders", color: "#059669", active: true },
    { id: 3, name: "Maintenance Logs", color: "#dc2626", active: true }
  ]);

  if (!user) return <Login onLogin={setUser} />;

  const renderView = () => {
    const activeApps = webApps.filter(a => a.active);
    switch(user.role) {
      case 'admin': return <AdminView apps={webApps} setApps={setWebApps} />;
      case 'user':  return <UserView apps={activeApps} />;
      case 'client': return <ClientView apps={activeApps} />;
      default: return <div>Select a role</div>;
    }
  };

  return (
    <div className="mobile-container">
      {/* HEADER */}
      <header style={{ 
        background: user.role === 'admin' ? 'var(--admin-bg)' : 'var(--primary)', 
        color: 'white', padding: '20px', display: 'flex', justifyContent: 'space-between' 
      }}>
        <h2 style={{ fontSize: '1.1rem' }}>ESC-SYSTEM</h2>
        <button onClick={() => setUser(null)} style={{ background: 'none', border: 'none', color: 'white' }}>Logout</button>
      </header>

      {/* VIEW CONTENT */}
      <main className="main-content">
        <h1 style={{ marginBottom: '15px' }}>Hello, {user.name}</h1>
        {renderView()}
      </main>

      {/* FOOTER */}
      <footer style={{ 
        position: 'fixed', bottom: 0, width: '100%', maxWidth: '500px', 
        background: 'white', display: 'flex', justifyContent: 'space-around', padding: '15px', borderTop: '1px solid #eee' 
      }}>
        <span>🏠 Home</span>
        <span>📊 Stats</span>
        <span>⚙️ Settings</span>
      </footer>
    </div>
  );
}

export default App;