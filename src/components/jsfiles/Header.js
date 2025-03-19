import React, { useState, useEffect } from 'react';
import '../stylefiles/Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Header background effect
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'services', 'courses', 'team', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
      <div className="logo" onClick={() => scrollToSection('home')}>
      <h1 className="logo-text">VIRUZVERSE</h1>
    </div>

        <nav className={isMenuOpen ? 'active' : ''}>
          <ul>
          <li>
  <button 
    onClick={() => scrollToSection('home')}
    className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
  >
    Home
  </button>
</li>
<li>
  <button 
    onClick={() => scrollToSection('about')}
    className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
  >
    About
  </button>
</li>
<li>
  <button 
    onClick={() => scrollToSection('services')}
    className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
  >
    Services
  </button>
</li>
<li>
  <button 
    onClick={() => scrollToSection('courses')}
    className={`nav-link ${activeSection === 'courses' ? 'active' : ''}`}
  >
    Courses
  </button>
</li>
<li>
  <button 
    onClick={() => scrollToSection('team')}
    className={`nav-link ${activeSection === 'team' ? 'active' : ''}`}
  >
    Our Team
  </button>
</li>
<li>
  <button 
    onClick={() => scrollToSection('contact')}
    className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
  >
    Contact
  </button>
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
