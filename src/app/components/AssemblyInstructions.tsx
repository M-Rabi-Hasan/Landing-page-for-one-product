import React from 'react';
import { useTranslation } from 'react-i18next';

const AssemblyInstructions: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-100 p-4 md:p-6">
      <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">{t('Assembly Instructions')}</h2>
      <p className="text-base md:text-lg mb-4 md:mb-6">
        {t('Follow the steps below to assemble the sensory swing. You can also download the full instructions as a PDF or watch the assembly video below.')}
      </p>

      {/* Download PDF */}
      <a
        href="/assembly-instructions.pdf"
        className="bg-blue-600 text-white py-2 px-4 rounded-md mb-2 md:mb-4 inline-block"
        download
      >
        {t('Download Assembly Instructions')}
      </a>

      {/* Assembly Video */}
      <div className="mt-4 md:mt-6">
        <video controls className="w-full max-w-md mx-auto" preload="metadata">
          <source src="/test.mp4" type="video/mp4" />
          {t('Your browser does not support the video tag.')}
        </video>
      </div>
    </section>
  );
};

export default AssemblyInstructions;
