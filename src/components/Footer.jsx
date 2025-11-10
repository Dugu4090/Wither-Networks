import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Wither Networks</h3>
          <p>Premium Minecraft server providing the best gameplay experience since 2025.</p>
          <div className="social-links">
            <a href="#"><i className="fab fa-discord"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/game-modes">Game Modes</Link></li>
            <li><Link to="/rules">Rules</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li><Link to="/contact">Help Center</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/contact">Report a Bug</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 WitherNetworks | play.withernetworks.fun</p>
        <p className="made-with-love">Made with ❤️ for the community</p>
      </div>
    </footer>
  );
};

export default Footer;
