import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../stylefiles/Header.css';
import logo from "../../assets/logo.png";
import logo2 from "../../assets/logo2.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get the current route path

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="logo">
        <img src={logo2} alt="Logo Symbol" className="logo-symbol" />
        <img src={logo} alt="Logo" className="logo-img" />
        </Link>

        <nav className={isMenuOpen ? 'active' : ''}>
          <ul>
            <li>
              <Link 
                to="/" 
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="/courses" 
                className={`nav-link ${location.pathname === '/courses' ? 'active' : ''}`}
              >
                Courses
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link 
                to="/team" 
                className={`nav-link ${location.pathname === '/team' ? 'active' : ''}`}
              >
                Our Team
              </Link>
            </li>
          </ul>
        </nav>

        <button className="menu-toggle" onClick={handleMenuToggle}>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
