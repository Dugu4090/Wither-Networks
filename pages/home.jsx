import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faMountain, faCloud, faLock, faUsers, faServer, faMedal, faGamepad, faGem, faCrown, faCheck } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Mock data for the home page
    const mockData = {
      heroTitle: 'Welcome to Wither Networks',
      heroSubtitle: 'Experience the ultimate Minecraft gaming platform with multiple game modes, active community, and 24/7 support.',
      features: [
        {
          icon: faUsers,
          title: 'Active Community',
          description: 'Join our thriving community of players from around the world.'
        },
        {
          icon: faServer,
          title: 'Premium Servers',
          description: 'Enjoy high-performance servers with 99.9% uptime guarantee.'
        },
        {
          icon: faMedal,
          title: 'Regular Events',
          description: 'Participate in exciting events and competitions with amazing rewards.'
        },
        {
          icon: faGamepad,
          title: 'Multiple Modes',
          description: 'Experience a variety of game modes including Survival, SkyBlock, Prison, and more.'
        }
      ],
      stats: [
        { value: '5,248', label: 'Registered Players' },
        { value: '99.9%', label: 'Server Uptime' },
        { value: '24/7', label: 'Support Team' },
        { value: '12', label: 'Active Staff' }
      ]
    };
    
    setContent(mockData);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="container">
        <div className="hero">
          <div className="hero-content">
            <h2>Loading...</h2>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <div className="hero">
          <div className="hero-content">
            <h2>Error</h2>
            <p>Failed to load content: {error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="container">
        <div className="hero">
          <div className="hero-content">
            <h2>No Content Available</h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <section className="hero">
        <div className="hero-content">
          <h1>{content.heroTitle}</h1>
          <p>{content.heroSubtitle}</p>
          <div className="cta-buttons">
            <Link href="/modes" className="cta-button">
              <FontAwesomeIcon icon={faGamepad} />
              Explore Modes
            </Link>
            <Link href="/contact" className="btn secondary">
              <FontAwesomeIcon icon={faUsers} />
              Join Community
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose Wither Networks</h2>
        <div className="features-grid">
          {content.features && content.features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <FontAwesomeIcon icon={feature.icon} />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="stats">
        <h2>Server Statistics</h2>
        <div className="stats-grid">
          {content.stats && content.stats.map((stat, index) => (
            <div className="stat-card" key={index}>
              <div className="stat-number">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="game-modes-preview">
        <h2>Popular Modes</h2>
        <div className="modes-container">
          <div className="mode-card">
            <div className="mode-header">
              <div className="mode-icon">
                <FontAwesomeIcon icon={faMountain} />
              </div>
              <h3>Survival</h3>
            </div>
            <span className="mode-status released">Released</span>
            <p>Classic Minecraft survival experience with enhanced features and community events.</p>
            <ul className="mode-features">
              <li>Custom plugins and features</li>
              <li>Regular events and competitions</li>
              <li>Active community</li>
            </ul>
          </div>
          
          <div className="mode-card">
            <div className="mode-header">
              <div className="mode-icon">
                <FontAwesomeIcon icon={faCloud} />
              </div>
              <h3>SkyBlock</h3>
            </div>
            <span className="mode-status released">Released</span>
            <p>Start with nothing but a small island in the sky and work your way up to a thriving empire.</p>
            <ul className="mode-features">
              <li>Unique challenges and goals</li>
              <li>Special rewards system</li>
              <li>Regular updates</li>
            </ul>
          </div>
          
          <div className="mode-card">
            <div className="mode-header">
              <div className="mode-icon">
                <FontAwesomeIcon icon={faLock} />
              </div>
              <h3>Prison</h3>
            </div>
            <span className="mode-status coming-soon">Coming Soon</span>
            <p>Work your way up from a prisoner to a free citizen through mining and completing tasks.</p>
            <ul className="mode-features">
              <li>Rank progression system</li>
              <li>Mining challenges</li>
              <li>Rewards and perks</li>
            </ul>
          </div>
        </div>
        <div className="cta-buttons" style={{ marginTop: '2rem', justifyContent: 'center' }}>
          <Link href="/modes" className="cta-button">
            <FontAwesomeIcon icon={faGamepad} />
            View All Modes
          </Link>
        </div>
      </section>

      <section className="ranks-preview">
        <h2>Premium Ranks</h2>
        <div className="ranks-grid">
          <div className="rank-card">
            <div className="rank-icon">
              <FontAwesomeIcon icon={faGem} />
            </div>
            <h3 className="rank-name">VIP</h3>
            <div className="rank-price">$1.99</div>
            <ul className="rank-perks">
              <li>
                <FontAwesomeIcon icon={faCheck} className="perk-icon" />
                VIP prefix & chat color
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className="perk-icon" />
                Flight in survival
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className="perk-icon" />
                2 private vaults
              </li>
            </ul>
          </div>
          
          <div className="rank-card">
            <div className="rank-icon">
              <FontAwesomeIcon icon={faStar} />
            </div>
            <h3 className="rank-name">PRO</h3>
            <div className="rank-price">$4.99</div>
            <ul className="rank-perks">
              <li>
                <FontAwesomeIcon icon={faCheck} className="perk-icon" />
                All VIP benefits
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className="perk-icon" />
                PRO prefix & colors
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className="perk-icon" />
                5 private vaults
              </li>
            </ul>
          </div>
          
          <div className="rank-card">
            <div className="rank-icon">
              <FontAwesomeIcon icon={faCrown} />
            </div>
            <h3 className="rank-name">SUPREME</h3>
            <div className="rank-price">$6.99</div>
            <ul className="rank-perks">
              <li>
                <FontAwesomeIcon icon={faCheck} className="perk-icon" />
                All PRO benefits
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className="perk-icon" />
                SUPREME prefix
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className="perk-icon" />
                8 private vaults
              </li>
            </ul>
          </div>
        </div>
        <div className="cta-buttons" style={{ marginTop: '2rem', justifyContent: 'center' }}>
          <Link href="/ranks" className="cta-button">
            <FontAwesomeIcon icon={faCrown} />
            View All Ranks
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;