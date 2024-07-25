import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import des fichiers de traduction
import enTranslation from './locales/en/translation.json';
import frTranslation from './locales/fr/translation.json';

i18n
  .use(LanguageDetector) // Détecte la langue du navigateur de l'utilisateur
  .use(initReactI18next) // Lie i18n avec React
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      fr: {
        translation: frTranslation
      }
    },
    fallbackLng: 'en', // Langue par défaut si la langue détectée n'est pas disponible
    interpolation: {
      escapeValue: false // React échappe automatiquement les valeurs
    }
  });

export default i18n;