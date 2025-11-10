import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const faqItems = [
    {
      question: 'How do I connect to the server?',
      answer: 'Simply copy our server IP (play.withernetworks.fun) and paste it into the Minecraft server address field. No additional mods or resource packs are required.'
    },
    {
      question: 'What versions of Minecraft are supported?',
      answer: 'We support Minecraft Java Edition versions 1.16.5 and above. Our server is regularly updated to support the latest Minecraft versions.'
    },
    {
      question: 'Is the server free to play?',
      answer: 'Yes, our server is completely free to play. We offer optional cosmetic ranks and items through our store to support server development.'
    },
    {
      question: 'How can I report a player or issue?',
      answer: 'You can report issues through our in-game reporting system, forums, or by contacting our support team directly through Discord.'
    }
  ];

  const [activeFAQ, setActiveFAQ] = useState(null);

  return (
    <div className="container">
      <section className="hero">
        <div className="hero-content">
          <h2>Elite Minecraft Server Network</h2>
          <p>Experience premium gameplay with cutting-edge features, advanced anti-cheat protection, and a thriving community of dedicated players.</p>
          <div className="cta-buttons">
            <Link to="/game-modes" className="btn primary">Explore Game Modes</Link>
            <Link to="/contact" className="btn secondary">Join Community</Link>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose Wither Networks</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-tachometer-alt"></i>
            </div>
            <h3>Ultra Performance</h3>
            <p>State-of-the-art servers delivering 99.9% uptime with zero lag for seamless gameplay.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3>Enterprise Security</h3>
            <p>Military-grade anti-cheat systems and 24/7 monitoring ensure a fair competitive environment.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-rocket"></i>
            </div>
            <h3>Custom Systems</h3>
            <p>Proprietary game mechanics and exclusive features built from the ground up.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-users"></i>
            </div>
            <h3>Professional Community</h3>
            <p>Join thousands of skilled players in a mature, competitive gaming environment.</p>
          </div>
        </div>
      </section>

      <section className="game-modes">
        <h2>Game Modes</h2>
        <div className="modes-container">
          <div className="mode-card">
            <div className="mode-header">
              <div className="mode-icon">
                <i className="fas fa-globe"></i>
              </div>
              <h3>Survival</h3>
            </div>
            <div className="mode-status released">LIVE</div>
            <p>Enhanced vanilla survival with advanced economy systems, land claiming, and regular community events.</p>
            <ul className="mode-features">
              <li>Custom world generation</li>
              <li>Advanced economy & trading</li>
              <li>Weekly tournaments</li>
            </ul>
          </div>
          
          <div className="mode-card">
            <div className="mode-header">
              <div className="mode-icon">
                <i className="fas fa-heart-broken"></i>
              </div>
              <h3>Lifesteal</h3>
            </div>
            <div className="mode-status coming-soon">COMING Q2 2025</div>
            <p>Competitive PvP survival where combat prowess determines your health pool and dominance.</p>
            <ul className="mode-features">
              <li>Skill-based combat mechanics</li>
              <li>Ranked progression system</li>
              <li>Global leaderboards</li>
            </ul>
          </div>
        </div>
        <div className="cta-center">
          <Link to="/game-modes" className="btn secondary">View All Game Modes</Link>
        </div>
      </section>

      <section className="stats">
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
      </section>

      <section className="ranks-preview">
        <h2>Premium Membership</h2>
        <p className="section-description">Unlock exclusive features and support server development with premium ranks</p>
        <div className="ranks-grid">
          <div className="rank-preview-card">
            <div className="rank-icon"><i className="fas fa-gem"></i></div>
            <h3>VIP</h3>
            <div className="rank-price">$1.99</div>
            <p>Essential perks including /fly command, VIP prefix, and 2 player vaults</p>
          </div>
          <div className="rank-preview-card">
            <div className="rank-icon"><i className="fas fa-crown"></i></div>
            <h3>WITHER</h3>
            <div className="rank-price">$12.99</div>
            <p>Ultimate access with all LEGEND perks, 16 vaults, and exclusive cosmetics</p>
          </div>
        </div>
        <div className="cta-center">
          <Link to="/ranks" className="btn secondary">View All Ranks</Link>
        </div>
      </section>

      <section className="testimonials">
        <h2>Player Testimonials</h2>
        <div className="testimonials-container">
          {[
            { name: 'ElitePvP', role: 'Tournament Champion', text: 'The most professional Minecraft server I\'ve encountered. Zero lag, exceptional anti-cheat, and a truly competitive environment. The custom features are leagues ahead of other networks.' },
            { name: 'BuildMaster', role: 'Community Leader', text: 'Outstanding server architecture and management. The staff team is highly professional and responsive. Been playing for 2+ years and the quality only improves with each update.' },
            { name: 'TechGamer', role: 'WITHER Rank', text: 'Unparalleled performance and stability. The custom terrain generation is innovative, and the economy system is perfectly balanced. Worth every minute spent here.' },
            { name: 'StrategyKing', role: 'Survival Lead', text: 'The level of polish and attention to detail is remarkable. Regular updates keep the gameplay fresh, and the community is mature and skilled. Highly recommended.' },
            { name: 'ProBuilder', role: 'LEGEND Rank', text: 'Best investment I\'ve made in Minecraft. The premium ranks provide excellent value, and the exclusive features are actually useful. Server uptime is consistently perfect.' },
            { name: 'CombatPro', role: 'Leaderboard #3', text: 'Fair competitive environment with professional moderation. The anti-cheat works flawlessly without affecting legitimate players. This is how servers should be run.' }
          ].map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-content">
                <p>"{testimonial.text}"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <i className="fas fa-user"></i>
                </div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <div className="author-role">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeFAQ === index ? 'active' : ''}`}
              onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
            >
              <div className="faq-question">
                <h3>{item.question}</h3>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
