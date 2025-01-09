import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      navbar: {
        home: "Home",
        portfolio: "Portfolio",
        about: "About Me",
        testimonials: "Testimonials",
        contact: "Contact Me"
      },
      hero: {
        title: "I create web and mobile designs",
        cta: "Get in Touch"
      },
      expertise: {
        title: "My Expertise",
        ui: "UI/UX Design",
        frontend: "Frontend Development",
        react: "React & React Native"
      }
    }
  },
  es: {
    translation: {
      navbar: {
        home: "Inicio",
        portfolio: "Portafolio",
        about: "Sobre mí",
        testimonials: "Testimonios",
        contact: "Contáctame"
      },
      hero: {
        title: "Creo diseños web y móviles",
        cta: "Contáctame"
      },
      expertise: {
        title: "Mi experiencia",
        ui: "Diseño UI/UX",
        frontend: "Desarrollo Frontend",
        react: "React y React Native"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en', // Idioma por defecto
    interpolation: {
      escapeValue: false, // React ya maneja la protección contra XSS
    }
  });

export default i18n;