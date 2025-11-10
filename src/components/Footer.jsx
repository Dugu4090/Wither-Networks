import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Wither Networks</h3>
          <p>Premium Minecraft server providing the best gameplay experience since 2025.</p>
          <div className="social-links">
            <a href="#" className="social-link"><i className="fab fa-discord"></i></a>
            <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-link"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/game-modes">Game Modes</Link>
          <Link to="/rules">Rules</Link>
        </div>
        <div className="footer-section">
          <h3>Support</h3>
          <Link to="/contact">Help Center</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/ranks">Premium Ranks</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Wither Networks | play.withernetworks.fun</p>
      </div>
    </footer>
  );
};

export default Footer;
