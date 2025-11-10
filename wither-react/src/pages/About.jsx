const About = () => {
  return (
    <div className="container">
      <section className="hero">
        <div className="hero-content">
          <h2>About WitherNetworks</h2>
          <p>Building the ultimate Minecraft community since 2025</p>
        </div>
      </section>

      <section className="features">
        <div className="about-content">
          <h2>Our Story</h2>
          <p style={{ color: '#b0b0d0', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '30px', textAlign: 'center', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
            WitherNetworks was founded in 2025 by a group of passionate Minecraft enthusiasts who wanted to create a server that offered more than just the standard gameplay. We envisioned a community where players could experience unique game modes, custom features, and a welcoming environment that feels like home.
          </p>
          <p style={{ color: '#b0b0d0', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '30px', textAlign: 'center', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
            Over the years, we've grown from a small server with a handful of players to a thriving community with thousands of registered members. Our dedication to providing high-quality gameplay, fair moderation, and constant innovation has made us one of the most trusted Minecraft networks in the community.
          </p>
        </div>
      </section>

      <section className="features">
        <h2>Our Mission</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-users"></i>
            </div>
            <h3>Community First</h3>
            <p>We prioritize our players' experience above all else. Every decision we make is guided by what's best for our community. We actively listen to feedback and implement player suggestions.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-balance-scale"></i>
            </div>
            <h3>Fair Play</h3>
            <p>We maintain a zero-tolerance policy for cheating and ensure that all players have an equal opportunity to succeed. Our advanced anti-cheat systems and dedicated moderation team work 24/7 to keep the gameplay fair.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-lightbulb"></i>
            </div>
            <h3>Innovation</h3>
            <p>We constantly develop new features, game modes, and updates to keep the gameplay fresh and exciting. Our development team works tirelessly to bring you unique experiences you won't find anywhere else.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3>Safety & Security</h3>
            <p>Your data and account security are our top priorities. We use industry-standard encryption and security measures to protect our players. Our moderation team ensures a safe, family-friendly environment.</p>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stat-card">
          <div className="stat-number">2025</div>
          <div className="stat-label">Founded</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">50K+</div>
          <div className="stat-label">Total Players</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">1M+</div>
          <div className="stat-label">Hours Played</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">5</div>
          <div className="stat-label">Game Modes</div>
        </div>
      </section>

      <section className="features">
        <h2>Meet Our Team</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-crown"></i>
            </div>
            <h3>Server Owners</h3>
            <p>Our dedicated owners oversee all server operations and ensure everything runs smoothly. They're always working on new ideas to improve your experience.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-code"></i>
            </div>
            <h3>Development Team</h3>
            <p>Our talented developers create custom plugins, fix bugs, and implement new features. They're the backbone of our unique gameplay experience.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-user-shield"></i>
            </div>
            <h3>Moderation Team</h3>
            <p>Our moderators keep the server safe and friendly. They're available 24/7 to help players, resolve disputes, and enforce our community guidelines.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-hammer"></i>
            </div>
            <h3>Build Team</h3>
            <p>Our creative builders design stunning maps, lobbies, and custom structures that make our server visually unique and immersive.</p>
          </div>
        </div>
      </section>

      <section className="features" style={{ paddingBottom: '80px' }}>
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon"><i className="fas fa-server"></i></div>
            <h3>Premium Hardware</h3>
            <p>We use top-tier dedicated servers with the latest hardware to ensure lag-free gameplay and instant response times.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><i className="fas fa-sync"></i></div>
            <h3>Regular Updates</h3>
            <p>We release weekly updates with new content, bug fixes, and improvements based on community feedback.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><i className="fas fa-comments"></i></div>
            <h3>Active Community</h3>
            <p>Join our Discord with over 10,000 members, participate in events, make friends, and be part of something special.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><i className="fas fa-trophy"></i></div>
            <h3>Competitive Events</h3>
            <p>Participate in weekly tournaments, seasonal competitions, and special events with amazing prizes and rewards.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><i className="fas fa-headset"></i></div>
            <h3>24/7 Support</h3>
            <p>Our support team is always available to help you with any issues, questions, or concerns you might have.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><i className="fas fa-gift"></i></div>
            <h3>Rewards System</h3>
            <p>Earn rewards for playing, voting, and participating in community events. The more you play, the more you earn!</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
