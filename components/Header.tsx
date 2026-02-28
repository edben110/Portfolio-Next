'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from './ThemeContext';

const navItems = [
  { id: 'inicio',     label: 'Inicio',      icon: 'fa-house' },
  { id: 'about',      label: 'Sobre mí',    icon: 'fa-user' },
  { id: 'skills',     label: 'Habilidades', icon: 'fa-code' },
  { id: 'portfolio',  label: 'Portafolio',  icon: 'fa-briefcase' },
  { id: 'experience', label: 'Experiencia', icon: 'fa-briefcase-clock' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Barra superior fija */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md"
        style={{
          backgroundColor: theme === 'dark'
            ? 'rgba(10, 15, 20, 0.75)'
            : 'rgba(255, 255, 255, 0.75)',
        }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => scrollToSection('inicio')}
            >
              <div className="relative w-12 h-12">
                <Image
                  src="/logo.png"
                  alt="Logo Edben"
                  fill
                  className="object-contain rounded-full"
                  priority
                />
              </div>
              <span className={`text-xl font-bold tracking-widest transition-colors duration-300
                               ${theme === 'dark' ? 'text-matrix-green' : 'text-black'}`}>Edben</span>
            </div>

            {/* Controles derechos */}
            <div className="flex items-center gap-4">
              {/* Toggle tema */}
              <button
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
                className={`w-10 h-10 flex items-center justify-center rounded-full
                           transition-all duration-500 ease-in-out
                           hover:bg-matrix-green/10 hover:scale-110
                           ${theme === 'dark' ? 'text-matrix-green' : 'text-black'}`}
              >
                <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'} text-lg`}></i>
              </button>

              {/* Botón hamburger */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Abrir menú"
                className={`w-10 h-10 flex items-center justify-center rounded-full
                            transition-all duration-500 ease-in-out
                            hover:bg-matrix-green/10 hover:scale-110
                            ${theme === 'dark' ? 'text-white' : 'text-black'}`}
              >
                <i className={`fas ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay fullscreen */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center
                    transition-all duration-500 ease-in-out backdrop-blur-md
                    ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{
          backgroundColor: theme === 'dark'
            ? 'rgba(10, 15, 20, 0.90)'
            : 'rgba(255, 255, 255, 0.90)',
        }}
      >
        <nav className="w-full max-w-sm mx-auto px-8">
          <ul className="flex flex-col items-start gap-6">
            {navItems.map((item, idx) => (
              <li
                key={item.id}
                className="w-full transition-all duration-500"
                style={{
                  transitionDelay: isMenuOpen ? `${idx * 60}ms` : '0ms',
                  transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isMenuOpen ? 1 : 0,
                }}
              >
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`group flex items-center gap-4 w-full px-6 py-3 rounded-2xl
                              transition-all duration-400 ease-in-out
                              hover:bg-matrix-green/10 hover:scale-105
                              ${theme === 'dark' ? 'text-white' : 'text-black'}
                              hover:text-matrix-green`}
                >
                  <i className={`fas ${item.icon} text-matrix-green text-xl
                                 transition-transform duration-400 group-hover:scale-110`}></i>
                  <span className="text-2xl font-semibold tracking-widest uppercase">
                    {item.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
