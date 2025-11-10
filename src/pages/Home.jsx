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
          <h2>Premium Minecraft Experience</h2>
          <p>Join the most advanced Minecraft network with unique gameplay, custom plugins, and an active community.</p>
          <div className="cta-buttons">
            <Link to="/game-modes" className="btn primary">Explore Game Modes</Link>
            <Link to="/contact" className="btn secondary">Contact Us</Link>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose Wither Networks?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-bolt"></i>
            </div>
            <h3>High Performance</h3>
            <p>Optimized servers with 99.9% uptime and minimal lag for the best gameplay experience.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3>Secure Environment</h3>
            <p>Advanced anti-cheat systems and 24/7 moderation to ensure fair play for all players.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-gamepad"></i>
            </div>
            <h3>Custom Game Modes</h3>
            <p>Unique gameplay experiences with custom plugins and regularly updated content.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-users"></i>
            </div>
            <h3>Active Community</h3>
            <p>Join thousands of players in our friendly and welcoming Minecraft community.</p>
          </div>
        </div>
      </section>

      <section className="game-modes">
        <h2>Our Game Modes</h2>
        <div className="modes-container">
          <div className="mode-card">
            <div className="mode-header">
              <div className="mode-icon">
                <i className="fas fa-mountain"></i>
              </div>
              <h3>Survival</h3>
            </div>
            <div className="mode-status released">LIVE NOW</div>
            <p>Classic Minecraft survival with enhanced features, custom plugins, and community events.</p>
            <ul className="mode-features">
              <li>Custom terrain generation</li>
              <li>Unique economy system</li>
              <li>Regular events and competitions</li>
            </ul>
          </div>
          
          <div className="mode-card">
            <div className="mode-header">
              <div className="mode-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Lifesteal</h3>
            </div>
            <div className="mode-status coming-soon">COMING SOON</div>
            <p>Intense PvP survival where you steal health from opponents in combat.</p>
            <ul className="mode-features">
              <li>Unique combat mechanics</li>
              <li>Progression system</li>
              <li>Leaderboard rankings</li>
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
        <h2>Premium Ranks</h2>
        <p className="section-description">Support the server and unlock exclusive perks with our premium ranks!</p>
        <div className="ranks-grid">
          <div className="rank-preview-card">
            <div className="rank-icon"><i className="fas fa-star"></i></div>
            <h3>VIP</h3>
            <div className="rank-price">$1.99</div>
            <p>Access to /fly, VIP prefix, and 2 player vaults</p>
          </div>
          <div className="rank-preview-card">
            <div className="rank-icon"><i className="fas fa-skull"></i></div>
            <h3>WITHER</h3>
            <div className="rank-price">$12.99</div>
            <p>All LEGEND perks, 16 vaults, exclusive cosmetics</p>
          </div>
        </div>
        <div className="cta-center">
          <Link to="/ranks" className="btn secondary">View All Ranks</Link>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Players Say</h2>
        <div className="testimonials-container">
          {[
            { name: 'MinecraftPro99', role: 'Early Supporter', text: 'Wither Networks has completely changed my Minecraft experience. The custom plugins and active community make it the best server I\'ve ever played on. The survival mode is incredibly engaging with unique features!' },
            { name: 'BuilderExpert', role: 'Community Moderator', text: 'The staff team is incredibly helpful and the anti-cheat system keeps the game fair for everyone. I\'ve been playing here for over 2 years and it just keeps getting better. Best Minecraft server hands down!' },
            { name: 'PixelMaster', role: 'Event Winner 2025', text: 'The Survival mode with custom terrain generation is unlike anything else. The regular events and competitions keep the community engaged and active. Can\'t wait for the new game modes to launch!' },
            { name: 'SkyWalker2024', role: 'MYTHIC Rank', text: 'Amazing server with zero lag! The economy system is well-balanced and the community is super friendly. I\'ve made so many friends here. The ranks are worth every penny for the perks you get!' },
            { name: 'CraftMaster88', role: 'LEGEND Rank', text: 'I\'ve tried many servers but WitherNetworks stands out. The custom features, active moderation, and constant updates make it feel fresh every time I log in. Highly recommend to everyone!' },
            { name: 'DiamondHunter', role: 'Tournament Champion', text: 'The community events are incredible and the rewards are generous. Staff actually listens to player feedback and implements suggestions. This is how a Minecraft server should be run!' }
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
