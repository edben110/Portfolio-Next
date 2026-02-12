'use client';

import HolographicProfileCard from './HolographicProfileCard';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 z-10">
            <span className="text-primary-light text-lg md:text-xl">
              Hola que tal, soy
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="gradient-text">Edwar Alexander</span>
              <br />
              <span className="text-primary">Benito Basante</span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary-light">
              Software Developer
            </h2>
            <p className="text-lg md:text-xl text-green-200 max-w-2xl leading-relaxed">
              Estudiante de Ingeniería de Software apasionado por la ciencia ficción, la historia, 
              el belicismo y la ingeniería. Especializado en desarrollo full-stack con tecnologías modernas.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-black font-semibold 
                         rounded-lg hover:bg-primary-light transition-all duration-300 shadow-glow-md 
                         hover:shadow-glow-lg transform hover:scale-105"
              >
                <i className="fas fa-briefcase"></i>
                Ver Proyectos
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
