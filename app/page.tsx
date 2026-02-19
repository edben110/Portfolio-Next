'use client';

import MatrixRain from '@/components/MatrixRain';
import RadioactiveRain from '@/components/RadioactiveRain';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Portfolio from '@/components/Portfolio';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useTheme } from '@/components/ThemeContext';

export default function Home() {
  const { theme } = useTheme();

  return (
    <>
      {theme === 'dark' ? <MatrixRain /> : <RadioactiveRain />}
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Experience />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
