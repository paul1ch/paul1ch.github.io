import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <p className="home-hello">{t('home.hello')}</p>
      <h1 className="home-name">{t('home.name')}</h1>
      <p className="description">{t('home.description1')}</p>
      <div className="buttons">
        <a href="#contact" className="button">{t('home.contactButton')}</a>
        <a href="PaulinCHARDIGNY_CV_fr.pdf" className="button" download>{t('home.downloadCV')}</a>
      </div>
    </div>
  );
};

export default Home;
