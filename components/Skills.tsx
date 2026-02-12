'use client';

import { useState } from 'react';

export default function Skills() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const skillCategories = [
    {
      title: 'Backend Development',
      icon: 'fa-server',
      skills: [
        {
          name: 'Django',
          icon: 'fab fa-python',
          color: '#092E20',
          description: 'Framework web de Python',
        },
        {
          name: 'Flask',
          icon: 'fas fa-flask',
          color: '#000000',
          description: 'Microframework web Python',
        },
        {
          name: 'Spring Boot',
          icon: 'fab fa-java',
          color: '#6DB33F',
          description: 'Framework Java moderno',
        },
      ],
    },
    {
      title: 'Frontend Development',
      icon: 'fa-laptop-code',
      skills: [
        {
          name: 'React',
          icon: 'fab fa-react',
          color: '#61DAFB',
          description: 'Librería JavaScript UI',
        },
        {
          name: 'Angular',
          icon: 'fab fa-angular',
          color: '#DD0031',
          description: 'Framework TypeScript completo',
        },
        {
          name: 'Next.js',
          icon: 'fas fa-layer-group',
          color: '#000000',
          description: 'Framework React con SSR',
        },
      ],
    },
    {
      title: 'Mobile Development',
      icon: 'fa-mobile-alt',
      skills: [
        {
          name: 'Flutter',
          icon: 'fas fa-mobile',
          color: '#02569B',
          description: 'Framework multiplataforma',
        },
      ],
    },
    {
      title: 'Bases de Datos',
      icon: 'fa-database',
      skills: [
        {
          name: 'MongoDB',
          icon: 'fas fa-leaf',
          color: '#47A248',
          description: 'Base de datos NoSQL',
        },
        {
          name: 'PostgreSQL',
          icon: 'fas fa-database',
          color: '#336791',
          description: 'Base de datos relacional',
        },
      ],
    },
    {
      title: 'Otras Tecnologías',
      icon: 'fa-cogs',
      skills: [
        {
          name: 'Docker',
          icon: 'fab fa-docker',
          color: '#2496ED',
          description: 'Containerización',
        },
        {
          name: 'ThingSpeak',
          icon: 'fas fa-broadcast-tower',
          color: '#F15A29',
          description: 'Plataforma IoT',
        },
        {
          name: 'n8n',
          icon: 'fas fa-diagram-project',
          color: '#EA4B71',
          description: 'Automatización flujos',
        },
        {
          name: 'Arduino',
          icon: 'fas fa-microchip',
          color: '#00979D',
          description: 'Desarrollo embebido',
        },
      ],
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % skillCategories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + skillCategories.length) % skillCategories.length);
  };

  return (
    <section id="skills" className="relative py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#00ff41] mb-4">
            Tech Stack & Habilidades
          </h2>
          <p className="text-base sm:text-lg text-white max-w-2xl mx-auto px-4">
            Mi conjunto de habilidades centrado en desarrollo full-stack y tecnologías modernas
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00ff41] to-[#00ff88] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Skills Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <div className="flex">
                {skillCategories.map((category, idx) => (
                  <div key={idx} className="w-full flex-shrink-0 px-2 sm:px-4">
                    <div className="bg-[#0d1b0d] border border-[#00ff41] rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 
                                  shadow-[0_4px_20px_rgba(0,255,65,0.15)] hover:shadow-[0_8px_30px_rgba(0,255,65,0.25)] 
                                  transition-all duration-300 hover:-translate-y-[5px] relative">
                      
                      {/* Gradient glow effect */}
                      <div className="absolute -inset-[2px] bg-gradient-to-br from-[#00ff41] to-[#00ff88] 
                                    rounded-2xl opacity-30 blur-[10px] -z-10" />
                      
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#00ff41] mb-6 md:mb-8 flex items-center gap-3">
                        <i className={`fas ${category.icon}`}></i>
                        {category.title}
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {category.skills.map((skill, skillIdx) => (
                          <div
                            key={skillIdx}
                            className="bg-[#0a0e0a] border border-[rgba(0,255,65,0.3)] rounded-xl sm:rounded-2xl p-4 sm:p-6 
                                     hover:border-[#00ff41] hover:bg-[#132613] transition-all duration-300 
                                     hover:-translate-y-2 hover:shadow-[0_8px_25px_rgba(0,255,65,0.3)] group"
                          >
                            <div className="flex flex-col items-center text-center space-y-2 sm:space-y-3">
                              <i
                                className={`${skill.icon} text-[1.85rem] sm:text-[2.25rem] transition-all duration-300 
                                         group-hover:scale-110`}
                                style={{ 
                                  color: skill.color,
                                  filter: `drop-shadow(0 0 8px ${skill.color}66) drop-shadow(0 0 4px ${skill.color}99)`,
                                }}
                              ></i>
                              <h4 className="text-[0.9rem] font-semibold text-[#00ff41] tracking-wide">
                                {skill.name}
                              </h4>
                              <p className="text-[0.7rem] text-[#00aa2b] leading-tight">{skill.description}</p>
                            </div>
                          </div>
                        ))}
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
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 md:-translate-x-12 
                     bg-[rgba(0,255,65,0.15)] hover:bg-[rgba(0,255,65,0.3)] border border-[#00ff41] 
                     rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-[#00ff41] 
                     transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(0,255,65,0.4)]
                     active:scale-95 z-10"
            aria-label="Habilidad anterior"
          >
            <i className="fas fa-chevron-left text-sm sm:text-base"></i>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 md:translate-x-12 
                     bg-[rgba(0,255,65,0.15)] hover:bg-[rgba(0,255,65,0.3)] border border-[#00ff41] 
                     rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-[#00ff41] 
                     transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(0,255,65,0.4)]
                     active:scale-95 z-10"
            aria-label="Próxima habilidad"
          >
            <i className="fas fa-chevron-right text-sm sm:text-base"></i>
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {skillCategories.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-[10px] rounded-full transition-all duration-300 border border-[rgba(0,255,65,0.4)] ${
                  idx === currentIndex
                    ? 'bg-[#00ff41] w-8'
                    : 'bg-[rgba(0,255,65,0.2)] w-[10px] hover:bg-[rgba(0,255,65,0.4)]'
                }`}
                aria-label={`Ir a categoría ${idx + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
