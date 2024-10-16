import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "Sensory Swing": "Sensory Swing",
      "About the Product": "About the Product",
      "Assembly Instructions": "Assembly Instructions",
      "Download Assembly Instructions": "Download Assembly Instructions",
      "Switch Language": "Switch Language",
      "© 2024 Sensory Swing. All Rights Reserved.": "© 2024 Sensory Swing. All Rights Reserved.",
      // Add more translations as needed
    },
  },
  es: {
    translation: {
      "Sensory Swing": "Columpio Sensorial",
      "About the Product": "Sobre el Producto",
      "Assembly Instructions": "Instrucciones de Montaje",
      "Download Assembly Instructions": "Descargar Instrucciones de Montaje",
      "Switch Language": "Cambiar Idioma",
      "© 2024 Sensory Swing. All Rights Reserved.": "© 2024 Columpio Sensorial. Todos los Derechos Reservados.",
      // Add more translations as needed
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
  });

export default i18n;
