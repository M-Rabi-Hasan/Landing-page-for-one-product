import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const ProductDescription: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="flex-grow p-4 md:p-6">
      <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">{t('About the Product')}</h2>
      <p className="text-base md:text-lg mb-4 md:mb-6">
        {t('The sensory swing is designed to provide a calming experience. Perfect for children and adults, it helps with relaxation and sensory integration.')}
      </p>

      {/* Product Image */}
      <div className="mb-4 md:mb-6">
        <Image 
          src="/swing.jpg" 
          alt={t('Sensory Swing')} 
          width={300} 
          height={200} 
          className="w-full h-auto max-w-md mx-auto" // Adjusted for max width and centering
        />
      </div>
    </section>
  );
};

export default ProductDescription;
