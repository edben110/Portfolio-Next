'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
  };

  const projects = [
    {
      title: 'Calculadora Multivariable',
      description: 'Aplicación web para el análisis y visualización interactiva de funciones en 3D.',
      solutions: [
        'Modelado 3D de superficies con controles interactivos',
        'Cálculo simbólico y numérico integrado',
        'Resultados exportables para uso académico',
      ],
      image: '/prove multivar.png',
      tags: ['Three.js', 'Django', 'Wolfram API'],
      link: 'https://multivar-3d.onrender.com',
      hasLink: true,
    },
    {
      title: 'App Móvil',
      description: 'Aplicación de monitoreo de generadores eléctricos en tiempo real.',
      solutions: [
        'Lectura y envío de datos IoT en tiempo real',
        'Panel móvil con alertas de estado',
        'Histórico para análisis y mantenimiento',
      ],
      image: '/aplicacion movil.jpeg',
      tags: ['Flutter', 'ThingSpeak', 'Arduino'],
      link: '',
      hasLink: false,
    },
    {
      title: 'Sistema IoT',
      description: 'Radar Arduino con visualización de distancias y zonas.',
      solutions: [
        'Detección de objetos con sensores ultrasónicos',
        'Barrido y mapeo en tiempo real',
        'Visualización serial para monitoreo',
      ],
      image: '/radar ard.jpeg',
      tags: ['Arduino', 'C++', 'Serial Plotter'],
      link: '',
      hasLink: false,
    },
    {
      title: 'API REST',
      description: 'Aplicativo de control de gastos con reportes y categorías.',
      solutions: [
        'Registro de transacciones y categorías',
        'Dashboard con métricas clave',
        'Autenticación segura por usuario',
      ],
      image: '/cashify prove.png',
      tags: ['SpringBoot', 'MongoDB', 'React'],
      link: 'https://cashify-black.vercel.app/',
      hasLink: true,
    },
    {
      title: 'API selectora por IA',
      description: 'API para preselección de candidatos con procesamiento de texto.',
      solutions: [
        'Clasificación de perfiles por afinidad',
        'Normalización de CV y datos',
        'Endpoints listos para integración',
      ],
      image: '/seleccion prove.png',
      tags: ['Flask', 'BERT', 'NLP'],
      link: 'https://clippers-frontend.vercel.app/feed',
      hasLink: true,
    },
    {
      title: 'Script de automatización',
      description: 'Script para generar certificados de seminarios de ingeniería.',
      solutions: [
        'Plantillas y datos dinámicos en lote',
        'Exportación automática a PDF',
        'Validación de asistentes',
      ],
      image: '/prove scripts.png',
      tags: ['Python', 'ReportLab', 'CSV'],
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-theme-primary mb-4">
            Portafolio
          </h2>
          <p className="text-base sm:text-lg text-theme-secondary px-4">Algunos de mis proyectos recientes</p>
          <div className="w-24 h-1 bg-[var(--matrix-green)] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Portfolio Carousel */}
        <div className="relative w-full md:max-w-[868px] mx-auto">
          <div className="overflow-x-hidden py-4 px-[4%]">
            <div
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="flex">
                {projects.map((project, idx) => (
                  <div key={idx} className="w-full flex-shrink-0 px-2 sm:px-4">
                    <div
                      className={`carousel-container-card border-2 rounded-2xl md:rounded-[0px_50px_0px_50px] overflow-hidden 
                                transition-all duration-300 group mx-auto
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
                        <div className="absolute inset-0 bg-black/50"></div>
                      </div>

                      {/* Project Content */}
                      <div className="p-4 md:p-5 text-center">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-matrix-green mb-3">
                          {project.title}
                        </h3>
                        <p className="text-sm md:text-base text-theme-secondary mb-4 leading-relaxed text-center max-w-md mx-auto">
                          {project.description}
                        </p>

                        <div className="text-left max-w-md mx-auto mb-4">
                          <p className="text-xs uppercase tracking-[0.2em] text-theme-muted mb-2 text-center">
                            Soluciones
                          </p>
                          <ul className="space-y-2 text-sm text-theme-secondary">
                            {project.solutions.map((solution, solutionIdx) => (
                              <li key={solutionIdx} className="flex items-start gap-2">
                                <i className="fas fa-check-circle text-matrix-green mt-1"></i>
                                <span>{solution}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-col items-center gap-2">
                          <p className="text-xs uppercase tracking-[0.2em] text-theme-muted">
                            Tecnologias
                          </p>
                          <div className="flex flex-wrap gap-2 justify-center">
                          {project.tags.map((tag, tagIdx) => (
                            <span
                              key={tagIdx}
                              className="tag-badge px-4 py-2 border rounded-full text-sm font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                          </div>
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
              className="carousel-nav-btn border hidden md:flex
                       rounded-full w-12 h-12 items-center justify-center 
                       transition-all duration-300 hover:scale-110
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
                className={`carousel-indicator border rounded-full h-[10px] transition-all duration-300 ${
                  idx === currentIndex
                    ? 'active w-8'
                    : 'w-[10px]'
                }`}
                aria-label={`Ir a proyecto ${idx + 1}`}
              ></button>
            ))}            </div>
            
            <button
              onClick={nextSlide}
              className="carousel-nav-btn border hidden md:flex
                       rounded-full w-12 h-12 items-center justify-center 
                       transition-all duration-300 hover:scale-110
                       active:scale-95"
              aria-label="Próximo proyecto"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
