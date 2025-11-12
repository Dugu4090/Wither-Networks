import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { getContent } from './utils/api';

const Footer = () => {
  const [footerData, setFooterData] = useState({
    customLinks: [],
    discordLink: '#',
    copyrightText: '© 2025 Wither Networks | play.withernetworks.fun'
  });

  useEffect(() => {
    // Fetch footer data from API
    const fetchFooterData = async () => {
      try {
        const data = await getContent();
        if (data) {
          setFooterData({
            customLinks: data.footerLinks || [],
            discordLink: data.discordLink || '#',
            copyrightText: data.copyrightText || '© 2025 Wither Networks | play.withernetworks.fun'
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
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Wither Networks</h3>
            <p>Premium Minecraft server providing the best gameplay experience since 2025.</p>
            <div className="social-links">
              <a href={footerData.discordLink} className="social-link" aria-label="Discord" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faDiscord} />
              </a>
            </div>
          </div>
          
          {footerData.customLinks && footerData.customLinks.length > 0 && (
            <div className="footer-section">
              <h3>Links</h3>
              <ul>
                {footerData.customLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.path} target={link.external ? "_blank" : "_self"} rel={link.external ? "noopener noreferrer" : ""}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="footer-bottom">
          <p>{footerData.copyrightText}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;