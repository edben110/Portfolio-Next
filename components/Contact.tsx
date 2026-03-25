'use client';

import { memo } from 'react';
import Image from 'next/image';
import { useTheme } from './ThemeContext';

function Contact() {
  const { theme, language } = useTheme();

  const content = {
    es: {
      title: 'Contacto',
      subtitle: 'Puedes escribirme por correo o seguirme en redes.',
      contact: 'Contacto',
      followMe: 'Sigueme',
    },
    en: {
      title: 'Contact',
      subtitle: 'You can reach me by email or follow me on social media.',
      contact: 'Contact',
      followMe: 'Follow me',
    },
  };

  const currentContent = content[language];

  return (
    <section id="contacto" className="relative py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-theme-primary mb-4">
            {currentContent.title}
          </h2>
          <p className="text-base sm:text-lg text-theme-secondary px-4">{currentContent.subtitle}</p>
          <div className="w-24 h-1 bg-[var(--matrix-green)] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-theme-primary mb-4">{currentContent.contact}</h3>
            <div className="space-y-3">
              <a
                href="mailto:ebenito370@gmail.com"
                className="flex items-center justify-center gap-3 text-theme-secondary hover:text-matrix-green transition-colors duration-300 group"
              >
                <i className="fas fa-envelope text-matrix-green group-hover:scale-110 transition-transform duration-300"></i>
                <span>ebenito370@gmail.com</span>
              </a>
              <a
                href="mailto:edben1407@gmail.com"
                className="flex items-center justify-center gap-3 text-theme-secondary hover:text-matrix-green transition-colors duration-300 group"
              >
                <i className="fas fa-envelope text-matrix-green group-hover:scale-110 transition-transform duration-300"></i>
                <span>edben1407@gmail.com</span>
              </a>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-theme-primary mb-4">{currentContent.followMe}</h3>
            <div className="space-y-3">
              <a
                href="https://github.com/edben110"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 text-theme-secondary hover:text-matrix-green transition-colors duration-300 group"
              >
                <div className="relative w-6 h-6 transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src="/svg/github-original.svg"
                    alt="GitHub icon"
                    fill
                    className="object-contain"
                    style={{ filter: theme === 'dark' ? 'brightness(0) invert(1)' : 'brightness(0)' }}
                  />
                </div>
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/edwar-alexander-benito-basante-0a9742393/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 text-theme-secondary hover:text-matrix-green transition-colors duration-300 group"
              >
                <div className="relative w-5 h-5 transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src="/svg/linkedin-original.svg"
                    alt="LinkedIn icon"
                    fill
                    className="object-contain"
                  />
                </div>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Contact);
