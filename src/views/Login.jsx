import React, { useState, useEffect } from 'react';

// PASTE YOUR GOOGLE DEPLOY URL HERE
const SHEET_API_URL = "https://script.google.com/macros/s/15zit8lVbjnSzy6322tZUYuw7FEbuP9WnMpEhnpelidYoJjrT4sjbg7ts/exec";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(SHEET_API_URL);
      const users = await response.json();

      // Find user in the Google Sheet data
      const foundUser = users.find(u => u.username === username && u.password === password);

      if (foundUser) {
        onLogin({ 
          name: foundUser.name, 
          role: foundUser.role 
        });
      } else {
        setError('Invalid username or password');
      }
    } catch (err) {
      setError('Connection failed. Check Google Sheet API.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>ESC Login</h1>
      <form onSubmit={handleLogin} style={{ marginTop: '20px' }}>
        <input 
          className="card" style={{ width: '100%', padding: '12px' }}
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <input 
          className="card" style={{ width: '100%', padding: '12px' }}
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button type="submit" className="btn-primary" disabled={loading}>
          {loading ? 'Verifying...' : 'Login'}
        </button>
      </form>
      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
    </div>
  );
}