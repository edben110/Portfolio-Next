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
    <section id="portfolio" className="relative py-20 bg-black/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Portafolio
          </h2>
          <p className="text-lg text-green-200">Algunos de mis proyectos recientes</p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Portfolio Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <div className="flex">
                {projects.map((project, idx) => (
                  <div key={idx} className="w-full flex-shrink-0 px-4">
                    <div
                      className={`bg-gradient-to-br from-black/80 to-primary/5 backdrop-blur-sm 
                                border border-primary/30 rounded-2xl overflow-hidden 
                                transition-all duration-300 hover:shadow-glow-lg group
                                ${project.hasLink ? 'cursor-pointer' : ''}`}
                      onClick={() => project.hasLink && window.open(project.link, '_blank')}
                    >
                      {/* Project Image */}
                      <div className="relative h-64 md:h-96 overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                      </div>

                      {/* Project Content */}
                      <div className="p-8">
                        <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                          {project.title}
                        </h3>
                        <p className="text-lg text-green-200 mb-6">{project.description}</p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tagIdx) => (
                            <span
                              key={tagIdx}
                              className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full 
                                       text-primary text-sm font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {!project.hasLink && (
                          <p className="text-sm text-green-200/60 mt-4 italic">
                            Link pendiente
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 
                     bg-primary/20 hover:bg-primary/40 backdrop-blur-sm border border-primary 
                     rounded-full w-12 h-12 flex items-center justify-center text-primary 
                     transition-all duration-300 hover:scale-110 shadow-glow-md"
            aria-label="Proyecto anterior"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 
                     bg-primary/20 hover:bg-primary/40 backdrop-blur-sm border border-primary 
                     rounded-full w-12 h-12 flex items-center justify-center text-primary 
                     transition-all duration-300 hover:scale-110 shadow-glow-md"
            aria-label="Próximo proyecto"
          >
            <i className="fas fa-chevron-right"></i>
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
