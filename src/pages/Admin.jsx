import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../utils/api';
import FloatingMessage from '../components/FloatingMessage';
import AdminDashboard from '../components/admin/AdminDashboard';
import AdminSettings from '../components/admin/AdminSettings';
import AdminRanks from '../components/admin/AdminRanks';
import AdminGameModes from '../components/admin/AdminGameModes';
import AdminFeatures from '../components/admin/AdminFeatures';
import AdminStats from '../components/admin/AdminStats';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loading, setLoading] = useState(false);
  const [authToken, setAuthToken] = useState(localStorage.getItem('authToken') || '');
  const [message, setMessage] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setLoginError('');
    
    try {
      const data = await login(username, password);
      setAuthToken(data.token);
      localStorage.setItem('authToken', data.token);
      setIsLoggedIn(true);
      setUsername('');
      setPassword('');
    } catch (error) {
      console.error('Login error:', error);
      setLoginError('Invalid credentials. Please try again.');
      // Show floating message for invalid credentials
      setMessage({
        text: 'Invalid credentials. Please try again.',
        type: 'error'
      });
      
      // Clear message after 3 seconds
      setTimeout(() => {
        setMessage(null);
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setAuthToken('');
    localStorage.removeItem('authToken');
  };

  if (!isLoggedIn) {
    return (
      <div className="container">
        <section className="page-header">
          <h1>Admin Login</h1>
          <p>Access the administrative dashboard</p>
        </section>
        
        <section className="content-section">
          {/* Floating Message for invalid credentials */}
          {message && (
            <FloatingMessage 
              message={message.text} 
              type={message.type}
              duration={3000}
            />
          )}
          
          <form onSubmit={handleLogin} className="admin-login-form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            {loginError && <div className="error-message">{loginError}</div>}
            
            <button 
              type="submit" 
              className="btn primary" 
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </section>
      </div>
    );
  }

  return (
    <div className="container">
      <section className="page-header">
        <div className="admin-header">
          <h1>Admin Dashboard</h1>
          <button onClick={handleLogout} className="btn secondary">Logout</button>
        </div>
        <p>Manage your website content</p>
      </section>

      {/* Floating Message */}
      {message && (
        <FloatingMessage 
          message={message.text} 
          type={message.type}
          duration={3000}
        />
      )}

      <div className="admin-tabs">
        <button 
          className={`tab-button ${activeTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('dashboard')}
        >
          Dashboard
        </button>
        <button 
          className={`tab-button ${activeTab === 'settings' ? 'active' : ''}`}
          onClick={() => setActiveTab('settings')}
        >
          Settings
        </button>
        <button 
          className={`tab-button ${activeTab === 'ranks' ? 'active' : ''}`}
          onClick={() => setActiveTab('ranks')}
        >
          Ranks
        </button>
        <button 
          className={`tab-button ${activeTab === 'gamemodes' ? 'active' : ''}`}
          onClick={() => setActiveTab('gamemodes')}
        >
          Game Modes
        </button>
        <button 
          className={`tab-button ${activeTab === 'features' ? 'active' : ''}`}
          onClick={() => setActiveTab('features')}
        >
          Features
        </button>
        <button 
          className={`tab-button ${activeTab === 'stats' ? 'active' : ''}`}
          onClick={() => setActiveTab('stats')}
        >
          Stats
        </button>
      </div>

      {activeTab === 'dashboard' && <AdminDashboard />}
      {activeTab === 'settings' && <AdminSettings authToken={authToken} setMessage={setMessage} />}
      {activeTab === 'ranks' && <AdminRanks authToken={authToken} setMessage={setMessage} />}
      {activeTab === 'gamemodes' && <AdminGameModes authToken={authToken} setMessage={setMessage} />}
      {activeTab === 'features' && <AdminFeatures authToken={authToken} setMessage={setMessage} />}
      {activeTab === 'stats' && <AdminStats authToken={authToken} setMessage={setMessage} />}
    </div>
  );
};

export default Admin;