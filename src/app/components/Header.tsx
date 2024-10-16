import React from 'react';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header className="bg-gray-800 text-white p-4 md:p-6">
      <h1 className="text-2xl md:text-3xl font-bold text-center">{t('Sensory Swing')}</h1>
    </header>
  );
};

export default Header;
