import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getContent } from './utils/api';

const Footer = () => {
  const [footerData, setFooterData] = useState({
    footerLinks: {
      quickLinks: [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About Us' },
        { path: '/game-modes', label: 'Game Modes' },
        { path: '/rules', label: 'Rules' }
      ],
      supportLinks: [
        { path: '/contact', label: 'Help Center' },
        { path: '/contact', label: 'Contact Us' },
        { path: '/ranks', label: 'Premium Ranks' }
      ]
    },
    discordLink: '#'
  });

  useEffect(() => {
    // Fetch footer data from API
    const fetchFooterData = async () => {
      try {
        const data = await getContent();
        if (data.footerLinks || data.discordLink) {
          setFooterData({
            footerLinks: data.footerLinks || footerData.footerLinks,
            discordLink: data.discordLink || '#'
          });
        }
      } catch (error) {
        console.error('Error fetching footer data:', error);
        // Keep default footer data if API fails
      }
    };

    fetchFooterData();
  }, []);

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Wither Networks</h3>
          <p>Premium Minecraft server providing the best gameplay experience since 2025.</p>
          <div className="social-links">
            <a href={footerData.discordLink} className="social-link discord-link">
              <i className="fab fa-discord"></i>
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          {footerData.footerLinks.quickLinks.map((link, index) => (
            <Link key={index} href={link.path}>{link.label}</Link>
          ))}
        </div>
        <div className="footer-section">
          <h3>Support</h3>
          {footerData.footerLinks.supportLinks.map((link, index) => (
            <Link key={index} href={link.path}>{link.label}</Link>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Wither Networks | play.withernetworks.fun</p>
      </div>
    </footer>
  );
};

export default Footer;