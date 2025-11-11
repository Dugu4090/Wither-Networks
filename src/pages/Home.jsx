import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FloatingMessage from '../components/FloatingMessage';

const Home = () => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    // Fetch content from the backend API through proxy
    const controller = new AbortController();
    const signal = controller.signal;
    
    fetch('/api/content', { signal })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (!signal.aborted) {
          setContent(data);
          setLoading(false);
        }
      })
      .catch(err => {
        if (err.name !== 'AbortError' && !signal.aborted) {
          console.error('Error fetching content:', err);
          setError(err.message);
          setLoading(false);
        }
      });
      
    // Cleanup function to abort fetch if component unmounts
    return () => {
      controller.abort();
    };
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
      {/* Floating Message for invalid credentials */}
      {message && (
        <FloatingMessage 
          message={message.text} 
          type={message.type}
          duration={3000}
        />
      )}
      
      <section className="hero">
        <div className="hero-content">
          <h2>{content.heroTitle || 'Welcome to Wither Networks'}</h2>
          <p>{content.heroSubtitle || 'Experience the ultimate gaming platform'}</p>
          <div className="cta-buttons">
            <Link to="/game-modes" className="btn primary">Explore Game Modes</Link>
            <Link to="/contact" className="btn secondary">Join Community</Link>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose Wither Networks</h2>
        <div className="features-grid">
          {content.features && content.features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="stats">
        {content.stats && content.stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <div className="stat-number">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;