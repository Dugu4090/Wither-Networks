const Contact = () => {
  return (
    <div className="container">
      <div className="page-header">
        <h1>Contact Us</h1>
        <p>Professional support available 24/7</p>
      </div>

      <section className="features">
        <h2>Contact Channels</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon"><i className="fab fa-discord"></i></div>
            <h3>Discord</h3>
            <p>Primary communication channel with instant staff response and active community engagement.</p>
            <div style={{ marginTop: '20px' }}>
              <a href="#" className="btn primary">Join Discord Server</a>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><i className="fas fa-envelope"></i></div>
            <h3>Email Support</h3>
            <p>For business inquiries, partnerships, or detailed technical support requests.</p>
            <p style={{ color: 'var(--green)', fontWeight: 600, marginTop: '20px', fontFamily: 'monospace' }}>support@withernetworks.fun</p>
            <p style={{ color: 'var(--green)', fontWeight: 600, fontFamily: 'monospace' }}>business@withernetworks.fun</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><i className="fas fa-ticket-alt"></i></div>
            <h3>Support Tickets</h3>
            <p>Private support channel for account issues, reports, and confidential matters.</p>
            <div style={{ marginTop: '20px' }}>
              <a href="#" className="btn secondary">Create Ticket</a>
            </div>
          </div>
        </div>
      </section>

      <section className="features" style={{ paddingBottom: '80px' }}>
        <h2>Support Categories</h2>
        <div className="features-grid">
          <div className="feature-card" style={{ textAlign: 'left' }}>
            <div className="feature-icon"><i className="fas fa-cogs"></i></div>
            <h3>Technical Support</h3>
            <p>Professional assistance with technical issues and system errors.</p>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '16px', color: 'var(--light-grey)' }}>
              <li style={{ padding: '6px 0' }}>• Connection diagnostics</li>
              <li style={{ padding: '6px 0' }}>• Performance optimization</li>
              <li style={{ padding: '6px 0' }}>• Bug reporting & tracking</li>
              <li style={{ padding: '6px 0' }}>• Client compatibility issues</li>
            </ul>
          </div>
          <div className="feature-card" style={{ textAlign: 'left' }}>
            <div className="feature-icon"><i className="fas fa-credit-card"></i></div>
            <h3>Transaction Support</h3>
            <p>Assistance with purchases, upgrades, and payment processing.</p>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '16px', color: 'var(--light-grey)' }}>
              <li style={{ padding: '6px 0' }}>• Rank purchase support</li>
              <li style={{ padding: '6px 0' }}>• Payment processing issues</li>
              <li style={{ padding: '6px 0' }}>• Upgrade inquiries</li>
              <li style={{ padding: '6px 0' }}>• Transaction verification</li>
            </ul>
          </div>
          <div className="feature-card" style={{ textAlign: 'left' }}>
            <div className="feature-icon"><i className="fas fa-flag"></i></div>
            <h3>Player Reports</h3>
            <p>Report rule violations and suspicious activity for immediate review.</p>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '16px', color: 'var(--light-grey)' }}>
              <li style={{ padding: '6px 0' }}>• Cheating & exploits</li>
              <li style={{ padding: '6px 0' }}>• Chat violations</li>
              <li style={{ padding: '6px 0' }}>• Griefing incidents</li>
              <li style={{ padding: '6px 0' }}>• Fraudulent activity</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
