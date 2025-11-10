const Contact = () => {
  return (
    <div className="container">
      <section className="hero">
        <div className="hero-content">
          <h2>Contact Us</h2>
          <p>Get in touch with our team - we're here to help!</p>
        </div>
      </section>

      <section className="features">
        <h2>Ways to Reach Us</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon"><i className="fab fa-discord"></i></div>
            <h3>Discord</h3>
            <p>Join our Discord server for the fastest response. Our staff and community are active 24/7 to help with any questions or issues.</p>
            <div style={{ marginTop: '15px' }}>
              <a href="#" className="btn primary" style={{ display: 'inline-block', padding: '10px 25px', fontSize: '0.9rem' }}>Join Discord</a>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><i className="fas fa-envelope"></i></div>
            <h3>Email</h3>
            <p>For business inquiries, partnership opportunities, or detailed support requests, send us an email.</p>
            <p style={{ color: '#6a5af9', fontWeight: 600, marginTop: '15px' }}>support@withernetworks.fun</p>
            <p style={{ color: '#6a5af9', fontWeight: 600 }}>business@withernetworks.fun</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><i className="fas fa-ticket-alt"></i></div>
            <h3>Support Tickets</h3>
            <p>Create a support ticket on our Discord for private assistance with account issues, reports, or sensitive matters.</p>
            <div style={{ marginTop: '15px' }}>
              <a href="#" className="btn secondary" style={{ display: 'inline-block', padding: '10px 25px', fontSize: '0.9rem' }}>Open Ticket</a>
            </div>
          </div>
        </div>
      </section>

      <section className="features" style={{ paddingBottom: '80px' }}>
        <h2>What Can We Help You With?</h2>
        <div className="features-grid">
          <div className="feature-card" style={{ textAlign: 'left' }}>
            <div className="feature-icon"><i className="fas fa-headset"></i></div>
            <h3>Technical Support</h3>
            <p>Having trouble connecting? Experiencing lag? Found a bug? Our technical team can help troubleshoot and resolve any issues you're facing.</p>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '15px', color: '#b0b0d0' }}>
              <li style={{ padding: '5px 0' }}>• Connection issues</li>
              <li style={{ padding: '5px 0' }}>• Performance problems</li>
              <li style={{ padding: '5px 0' }}>• Bug reports</li>
              <li style={{ padding: '5px 0' }}>• Client compatibility</li>
            </ul>
          </div>
          <div className="feature-card" style={{ textAlign: 'left' }}>
            <div className="feature-icon"><i className="fas fa-shopping-cart"></i></div>
            <h3>Purchase Support</h3>
            <p>Questions about ranks, purchases, or donations? Need help with a transaction? We're here to ensure your purchase experience is smooth.</p>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '15px', color: '#b0b0d0' }}>
              <li style={{ padding: '5px 0' }}>• Rank information</li>
              <li style={{ padding: '5px 0' }}>• Payment issues</li>
              <li style={{ padding: '5px 0' }}>• Upgrade questions</li>
              <li style={{ padding: '5px 0' }}>• Rank delivery</li>
            </ul>
          </div>
          <div className="feature-card" style={{ textAlign: 'left' }}>
            <div className="feature-icon"><i className="fas fa-user-times"></i></div>
            <h3>Report Player</h3>
            <p>Witnessed someone breaking the rules? Report players who are cheating, being toxic, or violating server rules to keep our community safe.</p>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '15px', color: '#b0b0d0' }}>
              <li style={{ padding: '5px 0' }}>• Hacking/Cheating</li>
              <li style={{ padding: '5px 0' }}>• Chat violations</li>
              <li style={{ padding: '5px 0' }}>• Griefing reports</li>
              <li style={{ padding: '5px 0' }}>• Scamming incidents</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
