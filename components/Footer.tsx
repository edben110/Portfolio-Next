'use client';

import { memo } from 'react';
import Image from 'next/image';
import { useTheme } from './ThemeContext';

function Footer() {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();

  return (
    <footer className="backdrop-blur-md relative border-t border-theme py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Contact Section */}
          <div className="text-center md:text-center">
            <h3 className="text-2xl font-bold text-theme-primary mb-4">Contacto</h3>
            <div className="space-y-3">
              <a
                href="mailto:ebenito370@gmail.com"
                className="flex items-center justify-center md:justify-center gap-3 text-theme-secondary hover:text-matrix-green 
                         transition-colors duration-300 group"
              >
                <i className="fas fa-envelope text-matrix-green group-hover:scale-110 
                             transition-transform duration-300"></i>
                <span>ebenito370@gmail.com</span>
              </a>
              <a
                href="mailto:edben1407@gmail.com"
                className="flex items-center justify-center md:justify-center gap-3 text-theme-secondary hover:text-matrix-green 
                         transition-colors duration-300 group"
              >
                <i className="fas fa-envelope text-matrix-green group-hover:scale-110 
                             transition-transform duration-300"></i>
                <span>edben1407@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Social Section */}
          <div className="text-center md:text-center">
            <h3 className="text-2xl font-bold text-theme-primary mb-4">Sígueme</h3>
            <div className="space-y-3">
              <a
                href="https://github.com/edben110"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-center gap-3 text-theme-secondary hover:text-matrix-green 
                         transition-colors duration-300 group"
              >
                <div className="relative w-6 h-6 transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src="/github-original.svg"
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
                className="flex items-center justify-center md:justify-center gap-3 text-theme-secondary hover:text-matrix-green 
                         transition-colors duration-300 group"
              >
                <div className="relative w-5 h-5 transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src="/linkedin-original.svg"
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

        {/* Footer Bottom */}
        <div className="border-t border-theme pt-8 text-center">
          <p className="text-theme-secondary">
            &copy; {currentYear} Edben. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
