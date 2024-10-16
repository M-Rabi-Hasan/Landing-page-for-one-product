'use client';

import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import './globals.css';
import Head from 'next/head';

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang={i18n.language}>
      <Head>
        <title>Sensory Swing Landing Page</title>
        <meta name="description" content="Discover the Sensory Swing, designed to provide a calming experience for both children and adults. Perfect for relaxation and sensory integration." />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Sensory Swing" />
        <meta property="og:description" content="Discover the Sensory Swing, designed to provide a calming experience for both children and adults." />
        <meta property="og:image" content="/assets/swing-og.jpg" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sensory Swing" />
        <meta name="twitter:description" content="Discover the Sensory Swing, designed to provide a calming experience for both children and adults." />
        <meta name="twitter:image" content="/assets/swing-og.jpg" />
        
        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Sensory Swing",
              "image": [
                "https://yourdomain.com/assets/swing.jpg",
                "https://yourdomain.com/assets/swing-og.jpg"
              ],
              "description": "The sensory swing is designed to provide a calming experience. Perfect for children and adults, it helps with relaxation and sensory integration.",
              "brand": {
                "@type": "Brand",
                "name": "Sensory Swing"
              },
              "offers": {
                "@type": "Offer",
                "url": "https://yourdomain.com",
                "priceCurrency": "USD",
                "price": "199.99",
                "availability": "https://schema.org/InStock",
                "itemCondition": "https://schema.org/NewCondition"
              }
            }),
          }}
        />
      </Head>
      <body>
        <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
