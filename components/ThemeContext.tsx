'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Theme = 'dark' | 'light';
type Language = 'es' | 'en';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  matrixBgColor: string;
  language: Language;
  setLanguage: (language: Language) => void;
  terminalMode: boolean;
  toggleTerminalMode: () => void;
  setTerminalMode: (enabled: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [language, setLanguage] = useState<Language>('es');
  const [terminalMode, setTerminalMode] = useState(false);

  useEffect(() => {
    // Cargar tema guardado del localStorage
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }

    const savedLanguage = localStorage.getItem('language') as Language | null;
    if (savedLanguage === 'es' || savedLanguage === 'en') {
      setLanguage(savedLanguage);
    }

    const savedTerminalMode = localStorage.getItem('terminalMode');
    if (savedTerminalMode === 'true') {
      setTerminalMode(true);
    }
  }, []);

  useEffect(() => {
    // Aplicar clase al elemento HTML
    const html = document.documentElement;
    html.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute('lang', language);
    localStorage.setItem('language', language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem('terminalMode', terminalMode ? 'true' : 'false');
  }, [terminalMode]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  const toggleTerminalMode = () => {
    setTerminalMode((prev) => !prev);
  };

  // Color de fondo para el efecto Matrix
  const matrixBgColor = theme === 'dark' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 1)';

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        matrixBgColor,
        language,
        setLanguage,
        terminalMode,
        toggleTerminalMode,
        setTerminalMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
