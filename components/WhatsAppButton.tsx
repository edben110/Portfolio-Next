'use client';

import { memo } from 'react';
import { useTheme } from './ThemeContext';

function WhatsAppButton() {
  const { language } = useTheme();

  const content = {
    es: {
      link: 'https://wa.me/573054789477?text=Hola%20Edben%2C%20vi%20tu%20portafolio%20y%20me%20gustaria%20contactarte',
      ariaLabel: 'Contactar por WhatsApp',
    },
    en: {
      link: 'https://wa.me/573054789477?text=Hi%20Edben%2C%20I%20saw%20your%20portfolio%20and%20I%20would%20like%20to%20contact%20you',
      ariaLabel: 'Contact via WhatsApp',
    },
  };

  const currentContent = content[language];

  return (
    <a
      href={currentContent.link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 
               rounded-full flex items-center justify-center text-white text-3xl 
               transition-all duration-300 hover:scale-110"
      style={{
        animation: 'pulse-glow 2s ease-in-out infinite'
      }}
      aria-label={currentContent.ariaLabel}
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
}

export default memo(WhatsAppButton);
