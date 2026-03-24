'use client';

import HolographicProfileCard from './HolographicProfileCard';
import { useTheme } from './ThemeContext';

export default function Hero() {
  const { language } = useTheme();

  const content = {
    es: {
      greeting: 'Hola que tal, soy',
      role: 'Software Developer',
      description:
        'Estudiante de Ingenieria de Software apasionado por la ciencia ficcion, la historia, el belicismo y la ingenieria. Especializado en desarrollo full-stack con tecnologias modernas.',
      projects: 'Ver Proyectos',
      downloadCv: 'Descargar CV',
    },
    en: {
      greeting: 'Hi there, I am',
      role: 'Software Developer',
      description:
        'Software Engineering student passionate about science fiction, history, military topics and engineering. Focused on modern full-stack development and practical digital solutions.',
      projects: 'View Projects',
      downloadCv: 'Download CV',
    },
  };

  const currentContent = content[language];

  return (
    <section id="inicio" className="relative min-h-screen flex items-start pt-20">
      <div className="container mx-auto px-4 py-8 md:py-10 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-6 md:gap-8 lg:gap-4 items-center">
          {/* Text Content */}
          <div className="space-y-6 z-10 flex flex-col items-center md:items-start">
            <div className='text-center md:text-left'>
              <span className="text-base sm:text-lg md:text-xl text-matrix-green text-center md:text-left">
              {currentContent.greeting}
            </span></div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-center md:text-left">
              <span className="gradient-text">Edwar Alexander</span>
              <br />
              <span className="text-matrix-green">Benito Basante</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-matrix-green text-center md:text-left">
              {currentContent.role}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-theme-secondary max-w-2xl leading-relaxed text-justify">
              {currentContent.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 items-center justify-center w-full">
              <a
                href="#portfolio"
                className="btn-theme-primary transform hover:scale-105"
              >
                <i className="fas fa-briefcase"></i>
                {currentContent.projects}
              </a>
              <a
                href="/CV%20ATS.pdf"
                download
                className="btn-theme-outline transform hover:scale-105"
              >
                <i className="fas fa-file-download"></i>
                {currentContent.downloadCv}
              </a>
            </div>
          </div>

          {/* Profile Card with Holographic Effect */}
          <div className="flex justify-center lg:justify-center z-10">
            <HolographicProfileCard />
          </div>
        </div>
      </div>
    </section>
  );
}
