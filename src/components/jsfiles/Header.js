import React, { useState, useEffect } from "react";
import "../stylefiles/Header.css";
import logo from "../../assets/logo1.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const headerHeight = document.querySelector('.header')?.offsetHeight || 80; // Get actual header height
    const scrollBuffer = 10; // Small buffer to detect sections
  
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
  
      const sections = ["home", "about", "services", "products", "team", "career", "contact"];
      const scrollPosition = window.scrollY + headerHeight + scrollBuffer;
  
      let activeSectionFound = false;
  
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top <= headerHeight && bottom >= headerHeight) {
            setActiveSection(section);
            activeSectionFound = true;
            break;
          }
        }
      }
  
      if (!activeSectionFound) {
        setActiveSection("home"); // Default to home if no section is detected
      }
    };
  
    // Attach multiple event listeners for better detection
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleScroll, { passive: true }); // Fix for touchpad scrolling
    window.addEventListener('touchmove', handleScroll, { passive: true }); // Fix for mobile touch scrolling
    window.addEventListener('resize', handleScroll, { passive: true }); // Handles viewport changes
  
    handleScroll(); // Run initially
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);
  

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      if (window.innerWidth <= 768) {
        setIsMenuOpen(false);
      }
      element.scrollIntoView({ 
        behavior: "smooth", 
        block: "start" 
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div 
          className="logo" 
          onClick={() => handleLinkClick("home")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleLinkClick("home")}
        >
          <img src={logo} alt="Logo" className="logo-img" />
          <h1 className="logo-text">VIRUZVERSE</h1>
        </div>

        <button
          className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={handleMenuToggle}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <div className="hamburger"></div>
        </button>

        <nav className={isMenuOpen ? "active" : ""}>
          <ul>
            {["home", "about", "services", "products", "team", "career", "contact"].map((section) => (
              <li key={section}>
                <button
                  onClick={() => handleLinkClick(section)}
                  className={`nav-link ${activeSection === section ? "active" : ""}`}
                  aria-current={activeSection === section ? "page" : undefined}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;


