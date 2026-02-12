'use client';

import HolographicProfileCard from './HolographicProfileCard';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 z-10">
            <span className="text-base sm:text-lg md:text-xl text-[#39ff14]">
              Hola que tal, soy
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="gradient-text">Edwar Alexander</span>
              <br />
              <span className="text-[#00ff41]">Benito Basante</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#39ff14]">
              Software Developer
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white max-w-2xl leading-relaxed text-justify">
              Estudiante de Ingeniería de Software apasionado por la ciencia ficción, la historia, 
              el belicismo y la ingeniería. Especializado en desarrollo full-stack con tecnologías modernas.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#00ff41] text-black font-semibold 
                         rounded-lg hover:bg-[#39ff14] transition-all duration-300 shadow-[0_4px_15px_rgba(0,255,65,0.2)] 
                         hover:shadow-[0_8px_25px_rgba(0,255,65,0.25)] transform hover:scale-105"
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
