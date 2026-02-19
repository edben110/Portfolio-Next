'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: 'Calculadora Multivariable',
      description: 'Aplicación web desarrollada con Three.js, Wolfram API y Django',
      image: '/prove multivar.png',
      tags: ['Three.js', 'Django', 'Wolfram API'],
      link: 'https://multivar-3d.onrender.com',
      hasLink: true,
    },
    {
      title: 'App Móvil',
      description: 'Aplicación de monitoreo de generadores eléctricos',
      image: '/aplicacion movil.jpeg',
      tags: ['Flutter', 'ThingSpeak', 'IoT', 'Arduino'],
      link: '',
      hasLink: false,
    },
    {
      title: 'Sistema IoT',
      description: 'Radar Arduino',
      image: '/radar ard.jpeg',
      tags: ['Arduino'],
      link: '',
      hasLink: false,
    },
    {
      title: 'API REST',
      description: 'Aplicativo de control de gastos',
      image: '/cashify prove.png',
      tags: ['SpringBoot', 'MongoDB', 'React'],
      link: 'https://cashify-black.vercel.app/',
      hasLink: true,
    },
    {
      title: 'API selectora por IA',
      description: 'API de selección de postulantes a aplicaciones laborales',
      image: '/seleccion prove.png',
      tags: ['Flask', 'AI BERT'],
      link: 'https://clippers-frontend.vercel.app/feed',
      hasLink: true,
    },
    {
      title: 'Script de automatización',
      description: 'Script de creación de certificaciones de seminarios de ingeniería',
      image: '/prove scripts.png',
      tags: ['Python'],
      link: 'https://github.com/edben110/Py-scripts/tree/master/programas',
      hasLink: true,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="portfolio" className="relative py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#00ff41] mb-4">
            Portafolio
          </h2>
          <p className="text-base sm:text-lg text-white px-4">Algunos de mis proyectos recientes</p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00ff41] to-[#00ff88] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Portfolio Carousel */}
        <div className="relative max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <div className="flex">
                {projects.map((project, idx) => (
                  <div key={idx} className="w-full flex-shrink-0 px-2 sm:px-4">
                    <div
                      className={`bg-[#0d1b0d] border border-[rgba(0,255,65,0.3)] rounded-[0px_50px_0px_50px] overflow-hidden 
                                transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,255,65,0.3)] 
                                hover:border-[#00ff41] hover:-translate-y-[10px] group mx-auto
                                ${project.hasLink ? 'cursor-pointer' : ''}`}
                      onClick={() => project.hasLink && window.open(project.link, '_blank')}
                    >
                      {/* Project Image */}
                      <div className="relative h-[160px] sm:h-[180px] md:h-[200px] lg:h-[220px] overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                      </div>

                      {/* Project Content */}
                      <div className="p-4 md:p-5 text-center">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#00ff41] mb-3">
                          {project.title}
                        </h3>
                        <p className="text-sm md:text-base text-white mb-4 leading-relaxed text-center max-w-md mx-auto">{project.description}</p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 justify-center">
                          {project.tags.map((tag, tagIdx) => (
                            <span
                              key={tagIdx}
                              className="px-4 py-2 bg-[rgba(0,255,65,0.1)] border border-[rgba(0,255,65,0.3)] rounded-full 
                                       text-[#00ff41] text-sm font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-5">
            <button
              onClick={prevSlide}
              className="bg-[rgba(0,255,65,0.15)] hover:bg-[rgba(0,255,65,0.3)] border border-[#00ff41] 
                       rounded-full w-12 h-12 flex items-center justify-center text-[#00ff41] 
                       transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(0,255,65,0.4)]
                       active:scale-95"
              aria-label="Proyecto anterior"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            
            {/* Indicators */}
            <div className="flex justify-center gap-2">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-primary/30 hover:bg-primary/60'
                }`}
                aria-label={`Ir a proyecto ${idx + 1}`}
              ></button>
            ))}            </div>
            
            <button
              onClick={nextSlide}
              className="bg-[rgba(0,255,65,0.15)] hover:bg-[rgba(0,255,65,0.3)] border border-[#00ff41] 
                       rounded-full w-12 h-12 flex items-center justify-center text-[#00ff41] 
                       transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(0,255,65,0.4)]
                       active:scale-95"
              aria-label="Próximo proyecto"
            >
              <i className="fas fa-chevron-right"></i>
            </button>          </div>
        </div>
      </div>
    </section>
  );
}
