'use client';

import MatrixRain from '@/components/MatrixRain';
import Asteroids from '@/components/Asteroids';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Testimonios from '@/components/Testimonios';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useTheme } from '@/components/ThemeContext';

export default function Home() {
  const { theme } = useTheme();

  return (
    <>
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
          <Testimonios />
          <Experience />
          <Contact />
        </>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
