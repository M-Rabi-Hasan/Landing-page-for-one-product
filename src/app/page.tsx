'use client'
import React from 'react';
import Header from './components/Header';
import ProductDescription from './components/ProductDescription';
import AssemblyInstructions from './components/AssemblyInstructions';
import LanguageSwitcher from './components/LanguageSwitcher';
import Footer from './components/Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <Header />

      {/* Product Description Section */}
      <ProductDescription />

      {/* Assembly Instructions Section */}
      <AssemblyInstructions />

      {/* Language Switcher Section */}
      <section className="p-4 md:p-6 flex justify-end">
        <LanguageSwitcher />
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );  
};

export default LandingPage;
