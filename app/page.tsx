'use client';

import { useEffect, useState } from 'react';
import MatrixRain from '@/components/MatrixRain';
import Asteroids from '@/components/Asteroids';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import TerminalMode from '@/components/TerminalMode';
import { useTheme } from '@/components/ThemeContext';

export default function Home() {
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = isLoading ? 'hidden' : '';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isLoading]);

  useEffect(() => {
    if (isLoading) return;

    const hideTimer = setTimeout(() => {
      setShowLoader(false);
    }, 700);

    return () => {
      clearTimeout(hideTimer);
    };
  }, [isLoading]);

  return (
    <>
      <div
        className={`transition-opacity duration-700 ease-out ${
          isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <div
          className={`theme-bg-layer fixed inset-0 z-0 pointer-events-none ${
            theme === 'dark' ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <MatrixRain active={theme === 'dark'} />
        </div>
        <div
          className={`theme-bg-layer fixed inset-0 z-0 pointer-events-none ${
            theme === 'light' ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Asteroids active={theme === 'light'} />
        </div>
        <Header />
        <main className="relative z-10">
          <>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Testimonials />
            <Experience />
            <Contact />
          </>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>

      {showLoader && (
        <div
          className={`fixed inset-0 z-[95] transition-opacity duration-700 ease-out ${
            isLoading ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <TerminalMode loaderMode onLoaderComplete={() => setIsLoading(false)} />
        </div>
      )}
    </>
  );
}
