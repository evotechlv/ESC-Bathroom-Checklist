import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './views/Login';
import AdminView from './views/AdminView';
import UserView from './views/UserView';

function App() {
  const [user, setUser] = useState(null);
  const [apps, setApps] = useState([
    { id: 1, name: "Bathroom Checklist", color: "#2563eb", enabled: true },
    { id: 2, name: "Supply Order", color: "#059669", enabled: true },
    { id: 3, name: "Maintenance Request", color: "#dc2626", enabled: true }
  ]);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <div className="app-container">
      <Header role={user.role} onLogout={() => setUser(null)} />
      
      <main className="main-content">
        <h2 style={{ marginBottom: '20px' }}>Hello, {user.name}</h2>
        
        {user.role === 'admin' && <AdminView apps={apps} setApps={setApps} />}
        {user.role === 'user' && <UserView apps={apps.filter(a => a.enabled)} />}
        {user.role === 'client' && <UserView apps={apps.filter(a => a.enabled)} title="CLIENT PORTAL" />}
      </main>

      <Footer />
    </div>
  );
}

export default App;