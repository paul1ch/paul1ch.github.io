import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';
import {FaMapMarkerAlt, FaGlobe} from 'react-icons/fa';
import logoADP from '../assets/experience-logo/logoADP.png';
import logoFRAMATOME from '../assets/experience-logo/logoFRAMATOME.jpg';
import logoDSSmith from '../assets/experience-logo/logoDSSmith.png';
import logoHydrogeo from '../assets/experience-logo/logoHydrogeo.jpg';
import logoLabinfra from '../assets/experience-logo/logoLabinfra.svg';
import logoPN from '../assets/experience-logo/logoPN.jpg';
import logoWolfberger from '../assets/experience-logo/logoWolfberger.png';


const About = () => {
  const [activeExperience, setActiveExperience] = useState(null);

  const handleExperienceClick = (index) => {
      setActiveExperience(activeExperience === index ? null : index);
  };

  const { t } = useTranslation();


  return (
      <div className="about-container">
          <h1 className="title">{t('about.title')}</h1>
          <p className="intro-text">
              {t('about.description1')}
          </p>

          <h2 className="subtitle">{t('about.subtitle1')}</h2>
          <div className="studies-timeline">
              <div className="timeline-item">
                  <p>{t('about.item-date1')}</p>
                  <h3>{t('about.item-title1')}</h3>
                  <p>{t('about.item-desc1')}</p>
              </div>
              <div className="timeline-item">
                  <p>{t('about.item-date2')}</p>
                  <h3>{t('about.item-title2')}</h3>
                  <p>{t('about.item-desc2')}</p>
              </div>
              <div className="timeline-item">
                  <p>{t('about.item-date3')}</p>
                  <h3>{t('about.item-title3')}</h3>
                  <p>{t('about.item-desc3')}</p>
              </div>
          </div>

          <h2 className="subtitle">{t('about.subtitle2')}</h2>
          <ul className="experience-list">
              {[
                  {
                      title: t('about.job-title7'),
                      place: t('about.job-place7'),
                      details: t('about.job-detail7'),
                      date: t('about.job-date7'),
                      logo: logoADP,
                      website: 'https://www.lamourdupain.com/'
                  },
                  {
                      title: t('about.job-title6'),
                      place: t('about.job-place6'),
                      details: t('about.job-detail6'),
                      date: t('about.job-date6'),
                      logo: logoFRAMATOME,
                      website: 'https://www.framatome.com/'
                  },
                  {
                      title: t('about.job-title5'),
                      place: t('about.job-place5'),
                      details: t('about.job-detail5'),
                      date: t('about.job-date5'),
                      logo: logoPN,
                      website: 'https://polytech-nancy.univ-lorraine.fr/'
                  },
                  {
                      title: t('about.job-title4'),
                      place: t('about.job-place4'),
                      details: t('about.job-detail4'),
                      date: t('about.job-date4'),
                      logo: logoWolfberger,
                      website: 'https://www.wolfberger.com/'
                  },
                  {
                      title: t('about.job-title3'),
                      place: t('about.job-place3'),
                      details: t('about.job-detail3'),
                      date: t('about.job-date3'),
                      logo: logoHydrogeo,
                      website: 'https://www.hydrogeotechnique.com/'
                  },
                  {
                      title: t('about.job-title2'),
                      place: t('about.job-place2'),
                      details: t('about.job-detail2'),
                      date: t('about.job-date2'),
                      logo: logoDSSmith,
                      website: 'https://www.dssmith.com/'
                  },
                  {
                      title: t('about.job-title1'),
                      place: t('about.job-place1'),
                      details: t('about.job-detail1'),
                      date: t('about.job-date1'),
                      logo: logoLabinfra,
                      website: 'https://labinfra.com/'
                  }
              ].map((job, index) => (
                  <li key={index} className="experience-item">
                      <button onClick={() => handleExperienceClick(index)} className="experience-button">
                          <div className="logo-wrapper">
                              <img src={job.logo} alt="logo" className="experience-logo"/>
                          </div>
                          <div className="text-wrapper">
                              <p>{job.date}</p>
                              <h3>{job.title}</h3>
                          </div>
                      </button>
                      {activeExperience === index && (
                          <div className="experience-details">
                              <p dangerouslySetInnerHTML={{__html: job.details}}></p>
                              <div className="experience-place-icon-wrapper">
                                  <FaMapMarkerAlt className="experience-icon"/>
                                  <p>{job.place}</p>
                              </div>
                                  <div className="experience-website-icon-wrapper">
                                      <FaGlobe className="experience-icon" />
                                      <a
                                          href={job.website}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="experience-website-link"
                                      >
                                          Website
                                      </a>
                                  </div>
                          </div>
                      )}
                  </li>
              ))}
          </ul>
      </div>
  );
};

export default About;
