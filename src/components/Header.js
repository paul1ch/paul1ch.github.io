import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Header.css';
import Flag from 'react-world-flags';
import logo from "../assets/logo.jpg"

const Header = () => {
  const { t, i18n } = useTranslation();
  const [showHeader, setShowHeader] = useState(true);
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [activeSection, setActiveSection] = useState('');
  const [selectedLang, setSelectedLang] = useState(i18n.language);

  const handleScroll = () => {
    setShowHeader(window.scrollY < scrollY || window.scrollY < 100);
    setScrollY(window.scrollY);

    const sections = ['home', 'about', 'projects', 'contact'];
    let currentSection = '';

    sections.forEach(section => {
      const element = document.getElementById(section);
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        currentSection = section;
      }
    });

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setSelectedLang(lng);
  };

  return (
    <header className={`header ${showHeader ? '' : 'header-hidden'}`}>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className={`nav-item ${activeSection === 'home' ? 'active' : ''}`}>
            <a href="#home" className="nav-link">{t('header.home')}</a>
          </li>
          <li className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}>
            <a href="#about" className="nav-link">{t('header.about')}</a>
          </li>
          <li className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`}>
            <a href="#projects" className="nav-link">{t('header.projects')}</a>
          </li>
          <li className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}>
            <a href="#contact" className="nav-link">{t('header.contact')}</a>
          </li>
        </ul>
        <div className="language-switcher">
          <button
            onClick={() => changeLanguage('en')}
            className={`lang-button ${selectedLang === 'en' ? 'active-lang' : ''}`}
          >
            <Flag code="GB" style={{ width: '20px', height: '20px' }} />
          </button>
          <button
            onClick={() => changeLanguage('fr')}
            className={`lang-button ${selectedLang === 'fr' ? 'active-lang' : ''}`}
          >
            <Flag code="FR" style={{ width: '20px', height: '20px' }} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
