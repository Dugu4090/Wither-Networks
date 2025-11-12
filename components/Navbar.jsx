import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/modes', label: 'Modes' },
    { path: '/ranks', label: 'Ranks' },
    { path: '/rules', label: 'Rules' },
    { path: '/store', label: 'Store' },
    { path: '/contact', label: 'Contact' }
  ];
  const router = useRouter();

  const isActive = (path) => router.pathname === path;

  return (
    <>
      <header>
        <div className="container header-content">
          <Link href="/" className="logo">
            <span>Wither Networks</span>
          </Link>
          
          <nav className="desktop-nav">
            <ul>
              {navItems.map(item => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={isActive(item.path) ? 'active' : ''}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <button 
            className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="mobile-menu" onClick={(e) => {
          if (e.target.classList.contains('mobile-menu')) {
            setMobileMenuOpen(false);
          }
        }}>
          <div className="mobile-menu-content">
            <ul>
              {navItems.map(item => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={isActive(item.path) ? 'active' : ''}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;