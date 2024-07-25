import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="title">{t('about.title')}</h1>
      <p className="description">{t('about.description1')}</p>
      <h2 className="subtitle">{t('about.subtitle1')}</h2>
      <p className="description">{t('about.description2')}</p>
    </div>
  );
};

export default About;
