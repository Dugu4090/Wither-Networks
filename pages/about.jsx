const About = () => {
  return (
    <div className="container">
      <div className="page-header">
        <h1>About Wither Networks</h1>
        <p>Building elite Minecraft experiences since 2025</p>
      </div>

      <div className="content-section">
        <h2>Our Mission</h2>
        <p>
          Wither Networks was established by veteran Minecraft developers and competitive players who recognized the need for a truly professional server network. We combine enterprise-grade infrastructure with innovative gameplay mechanics to deliver an unmatched gaming experience.
        </p>
        <p>
          From our inception, we&apos;ve prioritized performance, security, and fair play. Our proprietary systems and custom-built features set new industry standards for what players should expect from a premium Minecraft network.
        </p>
      </div>

      <section className="features">
        <h2>Core Values</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-trophy"></i>
            </div>
            <h3>Excellence</h3>
            <p>We maintain the highest standards in server performance, feature development, and player support. Every system is optimized for maximum efficiency.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-balance-scale"></i>
            </div>
            <h3>Integrity</h3>
            <p>Zero-tolerance policy for cheating. Our military-grade anti-cheat systems ensure a level playing field for all competitive players.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3>Innovation</h3>
            <p>Continuous development of proprietary features and game mechanics that push the boundaries of what&apos;s possible in Minecraft.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3>Security</h3>
            <p>Enterprise-level security protocols protect player data and ensure safe, stable gameplay 24/7/365.</p>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stat-card">
          <div className="stat-number">2025</div>
          <div className="stat-label">Established</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">50K+</div>
          <div className="stat-label">Total Players</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">99.9%</div>
          <div className="stat-label">Uptime</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">24/7</div>
          <div className="stat-label">Support Available</div>
        </div>
      </section>

      <section className="features">
        <h2>Infrastructure</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-server"></i>
            </div>
            <h3>Enterprise Hardware</h3>
            <p>Dedicated servers with latest-generation processors and NVMe SSDs ensure zero-lag gameplay.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-network-wired"></i>
            </div>
            <h3>Global Network</h3>
            <p>Strategically positioned data centers provide optimal latency for players worldwide.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-lock"></i>
            </div>
            <h3>DDoS Protection</h3>
            <p>Multi-layered security infrastructure protects against attacks and ensures uninterrupted service.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-database"></i>
            </div>
            <h3>Data Redundancy</h3>
            <p>Automated backup systems and failover protocols guarantee data integrity and availability.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;