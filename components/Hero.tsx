'use client';

import HolographicProfileCard from './HolographicProfileCard';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 z-10 flex flex-col items-center md:items-start">
            <div className='text-center md:text-left'>
              <span className="text-base sm:text-lg md:text-xl text-matrix-green text-center md:text-left">
              Hola que tal, soy
            </span></div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-center md:text-left">
              <span className="gradient-text">Edwar Alexander</span>
              <br />
              <span className="text-matrix-green">Benito Basante</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-matrix-green text-center md:text-left">
              Software Developer
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-theme-secondary max-w-2xl leading-relaxed text-justify">
              Estudiante de Ingeniería de Software apasionado por la ciencia ficción, la historia, 
              el belicismo y la ingeniería. Especializado en desarrollo full-stack con tecnologías modernas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 items-center justify-center w-full">
              <a
                href="#portfolio"
                className="btn-theme-primary transform hover:scale-105"
              >
                <i className="fas fa-briefcase"></i>
                Ver Proyectos
              </a>
              <a
                href="/cv.pdf"
                download
                className="btn-theme-outline transform hover:scale-105"
              >
                <i className="fas fa-file-download"></i>
                Descargar CV
              </a>
            </div>
          </div>

          {/* Profile Card with Holographic Effect */}
          <div className="flex justify-center lg:justify-end z-10">
            <HolographicProfileCard />
          </div>
        </div>
      </div>
    </section>
  );
}
