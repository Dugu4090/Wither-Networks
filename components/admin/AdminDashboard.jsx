const AdminDashboard = ({ onTabChange }) => {
  return (
    <div className="content-section">
      <h2>Dashboard Overview</h2>
      <div className="admin-stats">
        <div className="stat-card">
          <div className="stat-number">5,248</div>
          <div className="stat-label">Registered Players</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">99.9%</div>
          <div className="stat-label">Server Uptime</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">24/7</div>
          <div className="stat-label">Support Team</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">12</div>
          <div className="stat-label">Active Staff</div>
        </div>
      </div>
      
      <div className="admin-actions">
        <h3>Quick Actions</h3>
        <div className="action-buttons">
          <button className="btn secondary" onClick={() => onTabChange('settings')}>
            Edit Homepage Content
          </button>
          <button className="btn secondary" onClick={() => onTabChange('settings')}>
            Manage Users
          </button>
          <button className="btn secondary" onClick={() => onTabChange('settings')}>
            View Analytics
          </button>
          <button className="btn secondary" onClick={() => onTabChange('settings')}>
            Server Controls
          </button>
        </div>
      </div>
      
      <div className="admin-actions" style={{ marginTop: '2rem' }}>
        <h3>Server Information</h3>
        <div className="action-buttons">
          <button className="server-ip-btn" onClick={() => {
            navigator.clipboard.writeText('play.withernetworks.fun');
            alert('Server IP copied to clipboard!');
          }}>
            <i className="fas fa-copy"></i>
            Copy Server IP: play.withernetworks.fun
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;