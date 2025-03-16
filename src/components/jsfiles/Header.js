import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../stylefiles/Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

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

  const handleNavClick = (section) => {
    setActiveLink(section);
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <h1>Viruzverse</h1>
      </div>
      <button className="menu-toggle" onClick={handleMenuToggle}>
        <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
      </button>
      <nav>
        <ul className={isMenuOpen ? 'active' : ''}>
          <li>
            <Link
              to="/"
              className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
              onClick={() => handleNavClick('home')}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}
              onClick={() => handleNavClick('about')}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={`nav-link ${activeLink === 'services' ? 'active' : ''}`}
              onClick={() => handleNavClick('services')}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/courses"
              className={`nav-link ${activeLink === 'courses' ? 'active' : ''}`}
              onClick={() => handleNavClick('courses')}
            >
              Courses
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`}
              onClick={() => handleNavClick('contact')}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;