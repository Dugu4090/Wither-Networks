import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getContent } from './utils/api';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navItems, setNavItems] = useState([
    { path: '/', icon: 'fa-home', label: 'Home' },
    { path: '/about', icon: 'fa-info-circle', label: 'About' },
    { path: '/game-modes', icon: 'fa-gamepad', label: 'Games' },
    { path: '/rules', icon: 'fa-gavel', label: 'Rules' },
    { path: '/ranks', icon: 'fa-crown', label: 'Ranks' },
    { path: '/contact', icon: 'fa-envelope', label: 'Contact' }
  ]);
  const router = useRouter();

  useEffect(() => {
    // Fetch navigation data from API
    const fetchNavData = async () => {
      try {
        const data = await getContent();
        if (data.navigation && data.navigation.length > 0) {
          setNavItems(data.navigation);
        }
      } catch (error) {
        console.error('Error fetching navigation data:', error);
        // Keep default nav items if API fails
      }
    };

    fetchNavData();
  }, []);

  const isActive = (path) => router.pathname === path;

  return (
    <>
      <header>
        <div className="header-content">
          <Link href="/" className="logo">
            <img src="https://i.ibb.co/RkpxzFvT/wither-logo-DLNW1xn-N.png" alt="Wither Networks Logo" className="logo-img" />
            <h1>Wither Networks</h1>
          </Link>
          
          <nav className="desktop-nav">
            {navItems.map(item => (
              <Link
                key={item.path}
                href={item.path}
                className={`nav-btn ${isActive(item.path) ? 'active' : ''}`}
              >
                <i className={`fas ${item.icon}`}></i>
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
          
          <button 
            className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`} onClick={(e) => {
        if (e.target.classList.contains('mobile-menu')) {
          setMobileMenuOpen(false);
        }
      }}>
        <div className="mobile-menu-content">
          {navItems.map(item => (
            <Link
              key={item.path}
              href={item.path}
              className={`mobile-menu-item ${isActive(item.path) ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <i className={`fas ${item.icon}`}></i>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;