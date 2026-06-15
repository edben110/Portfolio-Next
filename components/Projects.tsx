'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { useTheme } from './ThemeContext';
import { SiYoutube } from 'react-icons/si';

const getYoutubeEmbedUrl = (url: string) => {
  const parsedUrl = new URL(url);
  const videoId = parsedUrl.searchParams.get('v') ?? parsedUrl.pathname.split('/').filter(Boolean).pop();

  if (!videoId) {
    return url;
  }

  return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1`;
};

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const { language, theme } = useTheme();

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
      title: 'Proyectos',
      subtitle: 'Algunos de mis proyectos recientes',
      solutions: 'Soluciones',
      technologies: 'Tecnologias',
      prevProject: 'Proyecto anterior',
      nextProject: 'Proximo proyecto',
      goToProject: 'Ir a proyecto',
      githubRepo: 'Ir al repositorio de GitHub',
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
          github: 'https://github.com/edben110/MultiVar-3D',
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
          github: 'https://github.com/edben110/PotenGraf',
          hasLink: false,
        },
        {
          title: 'Reproductor mp3',
          description: 'Reproductor de musica con uso de api de jamendo.',
          solutions: [
            'Comprension de estructuras de datos y consumo de APIs',
            'Implementacion de reproductor con controles basicos',
            'funcionalidades como busqueda y listas de reproduccion',
          ],
          image: '/imgs/ToneStatic.jpeg',
          tags: ['Next.js', 'Jamendo API', 'estructuras de datos'],
          link: '',
          github: 'https://github.com/edben110/Tone-Static',
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
          github: 'https://github.com/edben110/Cashify',
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
          github: 'https://github.com/edben110/MicroSelectIA',
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
          github: 'https://github.com/edben110/Black-night-guns',
          hasLink: true,
        },
        {
          title: 'Proyecto Unity',
          description: 'Demo en video del proyecto desarrollado en Unity.',
          solutions: [
            'Muestra interactiva del gameplay y la experiencia jugable',
            'Captura de mecánicas y control en tiempo real',
            'Presentacion optimizada para visualizarse desde cualquier dispositivo',
          ],
          mediaType: 'video',
          videoUrl: 'https://youtu.be/Z1Pcn8KtNjI',
          embedUrl: getYoutubeEmbedUrl('https://youtu.be/Z1Pcn8KtNjI'),
          tags: ['Unity', 'Video demo', 'Gameplay'],
          actionUrl: 'https://youtu.be/Z1Pcn8KtNjI',
          actionKind: 'youtube',
          actionLabel: 'Ver demo en YouTube',
          hasLink: false,
        },
        {
          title: 'Proyecto AWS',
          description: 'Demo tecnica del despliegue y arquitectura en AWS.',
          solutions: [
            'Presentacion del flujo desplegado en infraestructura cloud',
            'Visibilidad de la aplicacion en entorno productivo',
            'Acceso rapido a la demo sin afectar el rendimiento de la pagina',
          ],
          mediaType: 'video',
          videoUrl: 'https://youtu.be/giZSWFxuNuk',
          embedUrl: getYoutubeEmbedUrl('https://youtu.be/giZSWFxuNuk'),
          tags: ['AWS', 'Video demo', 'Cloud'],
          actionUrl: 'https://youtu.be/giZSWFxuNuk',
          actionKind: 'youtube',
          actionLabel: 'Ver demo en YouTube',
          hasLink: false,
        },
      ],
    },
    en: {
      title: 'Projects',
      subtitle: 'Some of my recent projects',
      solutions: 'Solutions',
      technologies: 'Technologies',
      prevProject: 'Previous project',
      nextProject: 'Next project',
      goToProject: 'Go to project',
      githubRepo: 'Go to GitHub repository',
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
          github: 'https://github.com/edben110/MultiVar-3D',
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
          github: 'https://github.com/edben110/PotenGraf',
          hasLink: false,
        },
        {
          title: 'mp3 Player',
          description: 'Music player using the Jamendo API.',
          solutions: [
            'Understanding data structures and API consumption',
            'Implementation of a player with basic controls',
            'Addition of features like search and playlists',
          ],
          image: '/imgs/ToneStatic.jpeg',
          tags: ['Next.js', 'Jamendo API', 'data structures'],
          link: '',
          github: 'https://github.com/edben110/Tone-Static',
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
          github: 'https://github.com/edben110/Cashify',
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
          github: 'https://github.com/edben110/MicroSelectIA',
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
          github: 'https://github.com/edben110/Black-night-guns',
          hasLink: true,
        },
        {
          title: 'Unity Project',
          description: 'Video demo of the project built in Unity.',
          solutions: [
            'Interactive showcase of the gameplay and user experience',
            'Real-time capture of core mechanics and controls',
            'Mobile-friendly presentation for any device',
          ],
          mediaType: 'video',
          videoUrl: 'https://youtu.be/Z1Pcn8KtNjI',
          embedUrl: getYoutubeEmbedUrl('https://youtu.be/Z1Pcn8KtNjI'),
          tags: ['Unity', 'Video demo', 'Gameplay'],
          actionUrl: 'https://youtu.be/Z1Pcn8KtNjI',
          actionKind: 'youtube',
          actionLabel: 'Watch YouTube demo',
          hasLink: false,
        },
        {
          title: 'AWS Project',
          description: 'Technical demo of the AWS deployment and architecture.',
          solutions: [
            'Shows the workflow deployed in cloud infrastructure',
            'Demonstrates the app in a production-like environment',
            'Fast access to the demo without hurting page performance',
          ],
          mediaType: 'video',
          videoUrl: 'https://youtu.be/giZSWFxuNuk',
          embedUrl: getYoutubeEmbedUrl('https://youtu.be/giZSWFxuNuk'),
          tags: ['AWS', 'Video demo', 'Cloud'],
          actionUrl: 'https://youtu.be/giZSWFxuNuk',
          actionKind: 'youtube',
          actionLabel: 'Watch YouTube demo',
          hasLink: false,
        },
      ],
    },
  };

  const currentContent = content[language];
  const projects = currentContent.projects;

  const renderProjectMedia = (project: (typeof projects)[number]) => {
    if (project.mediaType === 'video') {
      return (
        <div className="relative h-[115px] sm:h-[170px] md:h-[160px] overflow-hidden bg-black">
          <iframe
            src={project.embedUrl}
            title={project.title}
            className="absolute inset-0 h-full w-full"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/25 to-transparent"></div>
        </div>
      );
    }

    return (
      <div className="relative h-[115px] sm:h-[170px] md:h-[160px] overflow-hidden">
        <Image
          src={project.image ?? ''}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
    );
  };

  const renderActionButton = (project: (typeof projects)[number]) => {
    const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      window.open(project.actionUrl ?? project.github, '_blank', 'noopener,noreferrer');
    };

    const icon = project.actionKind === 'youtube' ? (
      <SiYoutube size={18} color="#FF0000" style={{ color: '#FF0000' }} />
    ) : (
      <Image
        src="/svg/github-original.svg"
        alt="GitHub"
        width={18}
        height={18}
        className={theme === 'dark' ? 'invert' : ''}
      />
    );

    const ariaLabel = project.actionLabel ?? currentContent.githubRepo;

    return (
      <>
        <div className="lg:hidden flex justify-start mb-2">
          <button
            type="button"
            onClick={handleOpen}
            className="w-10 h-10 tag-badge border rounded-full flex items-center justify-center p-0 transition-transform duration-300"
            aria-label={`${ariaLabel}: ${project.title}`}
          >
            {icon}
          </button>
        </div>

        <button
          type="button"
          onClick={handleOpen}
          className="hidden lg:flex absolute left-1 top-1/2 -translate-y-1/2 z-20 w-10 h-10 tag-badge border rounded-full items-center justify-center p-0 transition-transform duration-300 hover:scale-110"
          aria-label={`${ariaLabel}: ${project.title}`}
        >
          {icon}
        </button>
      </>
    );
  };

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
          <div className="overflow-x-hidden pt-2 pb-1 px-[4%]">
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
                      className={`carousel-container-card portfolio-card border-2 rounded-[0px_50px_0px_50px] overflow-hidden 
                                transition-all duration-300 group mx-auto relative h-full flex flex-col
                                md:min-h-[560px] ${project.hasLink ? 'cursor-pointer' : ''}`}
                      onClick={() => project.hasLink && window.open(project.link, '_blank', 'noopener,noreferrer')}
                    >
                      {/* Project Media */}
                      {renderProjectMedia(project)}

                      {/* Project Content */}
                      <div className="p-3 sm:p-4 md:p-4 text-center flex flex-col flex-1">
                        <h3 className="text-lg sm:text-xl md:text-xl font-bold text-matrix-green mb-3 md:mb-2 md:min-h-[52px] flex items-center justify-center leading-tight px-1">
                          {project.title}
                        </h3>
                        <p className="text-sm md:text-sm text-theme-secondary mb-3 md:mb-3 leading-relaxed text-center max-w-md mx-auto md:min-h-[48px]">
                          {project.description}
                        </p>

                        <div className="text-left max-w-md mx-auto mb-3 md:mb-3 md:min-h-[148px] w-full">
                          <p className="text-xs uppercase tracking-[0.2em] text-theme-muted mb-2 text-center">
                            {currentContent.solutions}
                          </p>
                          <ul className="space-y-1.5 sm:space-y-2 text-sm text-theme-secondary">
                            {project.solutions.map((solution, solutionIdx) => (
                              <li key={solutionIdx} className="flex items-start gap-2">
                                <i className="fas fa-check-circle text-matrix-green mt-1"></i>
                                <span className="leading-snug">{solution}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-col items-center gap-2 mt-auto">
                          <p className="text-xs uppercase tracking-[0.2em] text-theme-muted">
                            {currentContent.technologies}
                          </p>
                          <div className="relative w-full">
                            {renderActionButton(project)}

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
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-1 sm:mt-2 md:mt-3">
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
