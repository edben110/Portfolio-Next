'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from './ThemeContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-md shadow-theme-card'
          : ''
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('inicio')}>
            <div className="relative w-12 h-12">
              <Image
                src="/logo.png"
                alt="Logo Edben"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-2xl font-bold text-theme-primary">Edben</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex gap-8 items-center">
              {['inicio', 'about', 'skills', 'portfolio', 'experience'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="text-theme-primary hover:text-matrix-green transition-colors duration-300 font-medium capitalize"
                  >
                    {item === 'inicio' ? 'Inicio' : 
                     item === 'about' ? 'Sobre mí' :
                     item === 'skills' ? 'Habilidades' :
                     item === 'portfolio' ? 'Portafolio' : 'Experiencia'}
                  </button>
                </li>
              ))}
              {/* Botón de Toggle de Tema */}
              <li>
                <button
                  onClick={toggleTheme}
                  className="text-theme-primary hover:text-matrix-green transition-all duration-300 text-2xl"
                  aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
                  title={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
                >
                  <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
                </button>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            {/* Botón de Toggle de Tema para móvil */}
            <button
              onClick={toggleTheme}
              className="text-theme-primary hover:text-matrix-green transition-all duration-300 text-xl"
              aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            >
              <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
            </button>
            <button
              className="text-theme-primary text-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4">
            <ul className="flex flex-col gap-4">
              {['inicio', 'about', 'skills', 'portfolio', 'experience'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="text-theme-primary hover:text-matrix-green transition-colors duration-300 font-medium capitalize w-full text-left"
                  >
                    {item === 'inicio' ? 'Inicio' : 
                     item === 'about' ? 'Sobre mí' :
                     item === 'skills' ? 'Habilidades' :
                     item === 'portfolio' ? 'Portafolio' : 'Experiencia'}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
