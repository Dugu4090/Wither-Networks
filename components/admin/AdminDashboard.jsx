const AdminDashboard = () => {
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
          <button className="btn secondary">
            Edit Homepage Content
          </button>
          <button className="btn secondary">
            Manage Users
          </button>
          <button className="btn secondary">
            View Analytics
          </button>
          <button className="btn secondary">
            Server Controls
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;