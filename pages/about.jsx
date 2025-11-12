import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faBalanceScale, faChartLine, faShieldAlt, faServer, faNetworkWired, faLock, faDatabase } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const coreValues = [
    {
      icon: faTrophy,
      title: 'Excellence',
      description: 'We maintain the highest standards in server performance, feature development, and player support. Every system is optimized for maximum efficiency.'
    },
    {
      icon: faBalanceScale,
      title: 'Integrity',
      description: 'Zero-tolerance policy for cheating. Our military-grade anti-cheat systems ensure a level playing field for all competitive players.'
    },
    {
      icon: faChartLine,
      title: 'Innovation',
      description: 'Continuous development of proprietary features and game mechanics that push the boundaries of what\'s possible in Minecraft.'
    },
    {
      icon: faShieldAlt,
      title: 'Security',
      description: 'Enterprise-level security protocols protect player data and ensure safe, stable gameplay 24/7/365.'
    }
  ];

  const infrastructure = [
    {
      icon: faServer,
      title: 'Enterprise Hardware',
      description: 'Dedicated servers with latest-generation processors and NVMe SSDs ensure zero-lag gameplay.'
    },
    {
      icon: faNetworkWired,
      title: 'Global Network',
      description: 'Strategically positioned data centers provide optimal latency for players worldwide.'
    },
    {
      icon: faLock,
      title: 'DDoS Protection',
      description: 'Multi-layered security infrastructure protects against attacks and ensures uninterrupted service.'
    },
    {
      icon: faDatabase,
      title: 'Data Redundancy',
      description: 'Automated backup systems and failover protocols guarantee data integrity and availability.'
    }
  ];

  const stats = [
    { value: '2025', label: 'Established' },
    { value: '50K+', label: 'Total Players' },
    { value: '99.9%', label: 'Uptime' },
    { value: '24/7', label: 'Support Available' }
  ];

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
          {coreValues.map((value, index) => (
            <div className="feature-card" key={index}>
              <FontAwesomeIcon icon={value.icon} className="feature-icon" />
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="stats">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <div className="stat-number">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </section>

      <section className="features">
        <h2>Infrastructure</h2>
        <div className="features-grid">
          {infrastructure.map((item, index) => (
            <div className="feature-card" key={index}>
              <FontAwesomeIcon icon={item.icon} className="feature-icon" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;