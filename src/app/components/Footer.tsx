import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800 text-white p-4 md:p-6 text-center">
      <p>{t('© 2024 Sensory Swing. All Rights Reserved.')}</p>
    </footer>
  );
};

export default Footer;
