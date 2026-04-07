'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { useTheme } from './ThemeContext';

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const { language } = useTheme();

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

  const content = {
    es: {
      title: 'Portafolio',
      subtitle: 'Algunos de mis proyectos recientes',
      solutions: 'Soluciones',
      technologies: 'Tecnologias',
      prevProject: 'Proyecto anterior',
      nextProject: 'Proximo proyecto',
      goToProject: 'Ir a proyecto',
      projects: [
        {
          title: 'Calculadora Multivariable',
          description: 'Aplicacion web para el analisis y visualizacion interactiva de funciones en 3D.',
          solutions: [
            'Modelado 3D de superficies con controles interactivos',
            'Calculo simbolico y numerico integrado',
            'Resultados exportables para uso academico',
          ],
          image: '/imgs/prove multivar.jpeg',
          tags: ['Three.js', 'Django', 'Wolfram API'],
          link: 'https://multivar-3d.onrender.com',
          hasLink: true,
        },
        {
          title: 'App Movil',
          description: 'Aplicacion de monitoreo de generadores electricos en tiempo real.',
          solutions: [
            'Lectura y envio de datos IoT en tiempo real',
            'Panel movil con alertas de estado',
            'Historico para analisis y mantenimiento',
          ],
          image: '/imgs/aplicacion movil.jpeg',
          tags: ['Flutter', 'ThingSpeak', 'Arduino'],
          link: '',
          hasLink: false,
        },
        {
          title: 'Reproductor mp3',
          description: 'Reproductor de musica con uso de api de jamendo para busqueda y reproduccion de canciones.',
          solutions: [
            'Comprension de estructuras de datos y consumo de APIs',
            'Implementacion de reproductor con controles basicos',
            'adicion de funcionalidades como busqueda y listas de reproduccion',
          ],
          image: '/imgs/ToneStatic.jpeg',
          tags: ['Next.js', 'Jamendo API', 'estructuras de datos'],
          link: '',
          hasLink: false,
        },
        {
          title: 'API REST',
          description: 'Aplicativo de control de gastos con reportes y categorias.',
          solutions: [
            'Registro de transacciones y categorias',
            'Dashboard con metricas clave',
            'Autenticacion segura por usuario',
          ],
          image: '/imgs/cashify prove.jpeg',
          tags: ['SpringBoot', 'MongoDB', 'React'],
          link: 'https://cashify-black.vercel.app/',
          hasLink: true,
        },
        {
          title: 'API selectora por IA',
          description: 'API para preseleccion de candidatos con procesamiento de texto.',
          solutions: [
            'Clasificacion de perfiles por afinidad',
            'Normalizacion de CV y datos',
            'Endpoints listos para integracion',
          ],
          image: '/imgs/seleccion prove.jpeg',
          tags: ['Flask', 'BERT', 'NLP'],
          link: 'https://clippers-frontend.vercel.app/feed',
          hasLink: true,
        },
        {
          title: 'juego de javaScript ',
          description: 'Videojuego estilo beat em up basado en double dragon.',
          solutions: [
            'expresiones 3d en entornos 2d',
            'comprension y configuraciones fisicas en juegos',
            'comprension de patrones de diseño en juegos',
          ],
          image: '/imgs/black-night-guns.jpeg',
          tags: ['JavaScript', 'Canva', 'HTML5'],
          link: 'https://black-night-guns.vercel.app',
          hasLink: true,
        },
      ],
    },
    en: {
      title: 'Portfolio',
      subtitle: 'Some of my recent projects',
      solutions: 'Solutions',
      technologies: 'Technologies',
      prevProject: 'Previous project',
      nextProject: 'Next project',
      goToProject: 'Go to project',
      projects: [
        {
          title: 'Multivariable Calculator',
          description: 'Web app for interactive analysis and 3D visualization of mathematical functions.',
          solutions: [
            '3D surface modeling with interactive controls',
            'Integrated symbolic and numerical calculations',
            'Exportable results for academic use',
          ],
          image: '/imgs/prove multivar.jpeg',
          tags: ['Three.js', 'Django', 'Wolfram API'],
          link: 'https://multivar-3d.onrender.com',
          hasLink: true,
        },
        {
          title: 'Mobile App',
          description: 'Real-time electric generator monitoring application.',
          solutions: [
            'Real-time IoT data reading and transmission',
            'Mobile dashboard with status alerts',
            'Historical records for analysis and maintenance',
          ],
          image: '/imgs/aplicacion movil.jpeg',
          tags: ['Flutter', 'ThingSpeak', 'Arduino'],
          link: '',
          hasLink: false,
        },
        {
          title: 'mp3 Player',
          description: 'Music player using the Jamendo API for song search and playback.',
          solutions: [
            'Understanding data structures and API consumption',
            'Implementation of a player with basic controls',
            'Addition of features like search and playlists',
          ],
          image: '/imgs/ToneStatic.jpeg',
          tags: ['Next.js', 'Jamendo API', 'data structures'],
          link: '',
          hasLink: false,
        },
        {
          title: 'REST API',
          description: 'Expense tracking app with reports and categories.',
          solutions: [
            'Transaction and category registration',
            'Dashboard with key metrics',
            'Secure user authentication',
          ],
          image: '/imgs/cashify prove.jpeg',
          tags: ['SpringBoot', 'MongoDB', 'React'],
          link: 'https://cashify-black.vercel.app/',
          hasLink: true,
        },
        {
          title: 'AI Screening API',
          description: 'API for candidate pre-screening using text processing.',
          solutions: [
            'Profile classification by affinity',
            'CV and data normalization',
            'Integration-ready endpoints',
          ],
          image: '/imgs/seleccion prove.jpeg',
          tags: ['Flask', 'BERT', 'NLP'],
          link: 'https://clippers-frontend.vercel.app/feed',
          hasLink: true,
        },
        {
          title: 'JavaScript Game',
          description: 'beat em up videogame inspired by double dragon.',
          solutions: [
            'apply 3d expressions in 2d environments',
            'understand and configure physics in games',
            'understand design patterns in games',
          ],
          image: '/imgs/black-night-guns.jpeg',
          tags: ['JavaScript', 'Canva', 'HTML5'],
          link: 'https://github.com/edben110/Py-scripts/tree/master/programas',
          hasLink: true,
        },
      ],
    },
  };

  const currentContent = content[language];
  const projects = currentContent.projects;

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
            {currentContent.title}
          </h2>
          <p className="text-base sm:text-lg text-theme-secondary px-4">{currentContent.subtitle}</p>
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
                      <div className="relative h-[160px] sm:h-[180px] md:h-[165px] lg:h-[130px] overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/50"></div>
                      </div>

                      {/* Project Content */}
                      <div className="p-4 md:p-4 text-center">
                        <h3 className="text-lg sm:text-xl md:text-xl font-bold text-matrix-green mb-3 md:mb-2">
                          {project.title}
                        </h3>
                        <p className="text-sm md:text-sm text-theme-secondary mb-4 md:mb-3 leading-relaxed text-center max-w-md mx-auto">
                          {project.description}
                        </p>

                        <div className="text-left max-w-md mx-auto mb-4 md:mb-3">
                          <p className="text-xs uppercase tracking-[0.2em] text-theme-muted mb-2 text-center">
                            {currentContent.solutions}
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
                            {currentContent.technologies}
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
              aria-label={currentContent.prevProject}
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
                aria-label={`${currentContent.goToProject} ${idx + 1}`}
              ></button>
            ))}            </div>
            
            <button
              onClick={nextSlide}
              className="carousel-nav-btn border hidden md:flex
                       rounded-full w-12 h-12 items-center justify-center 
                       transition-all duration-300 hover:scale-110
                       active:scale-95"
              aria-label={currentContent.nextProject}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
