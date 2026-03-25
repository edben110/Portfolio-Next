'use client';

import { memo } from 'react';
import { useTheme } from './ThemeContext';

function Footer() {
  const currentYear = new Date().getFullYear();
  const { language } = useTheme();

  const content = {
    es: {
      rights: 'Todos los derechos reservados.',
    },
    en: {
      rights: 'All rights reserved.',
    },
  };

  const currentContent = content[language];

  return (
    <footer className="backdrop-blur-md relative border-t border-theme py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-theme-secondary">
            &copy; {currentYear} Edben. {currentContent.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
