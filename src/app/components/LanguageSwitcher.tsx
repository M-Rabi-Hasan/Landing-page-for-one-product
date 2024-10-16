import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="bg-gray-200 p-2 rounded-lg"
    >
      {i18n.language === 'en' ? 'Español' : 'English'}
    </button>
  );
};

export default LanguageSwitcher;
