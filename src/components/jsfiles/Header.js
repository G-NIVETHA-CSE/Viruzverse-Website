import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../stylefiles/Header.css';
import logo from "../../assets/logo.png";

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
      <div className="nav-container">
        <Link to="/" className="logo" onClick={() => handleNavClick('home')}>
          <img src={logo} alt="Logo" className="logo-img" />
        </Link>
        
        <nav className={isMenuOpen ? 'active' : ''}>
          <ul>
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

        <button className="menu-toggle" onClick={handleMenuToggle}>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
