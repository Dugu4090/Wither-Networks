import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    { path: '/', icon: 'fa-home', label: 'Home' },
    { path: '/about', icon: 'fa-info-circle', label: 'About' },
    { path: '/game-modes', icon: 'fa-gamepad', label: 'Games' },
    { path: '/rules', icon: 'fa-gavel', label: 'Rules' },
    { path: '/ranks', icon: 'fa-crown', label: 'Ranks' },
    { path: '/contact', icon: 'fa-envelope', label: 'Contact' }
  ];

  const isActive = (path) => router.pathname === path;

  return (
    <>
      <a href="#" className="discord-float">
        <i className="fab fa-discord"></i>
      </a>
      
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