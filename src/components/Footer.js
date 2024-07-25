import React from 'react';
import '../styles/Footer.css';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {t('footer.credits')}</p>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/paulin-chardigny-92b55a227" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/paul1ch" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:paulinchardigny@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
