'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Skills() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const skillCategories = [
    {
      title: 'Backend Development',
      icon: 'fa-server',
      skills: [
        {
          name: 'Django',
          iconPath: '/python-original.svg',
          color: '#092E20',
          description: 'Framework web de Python',
        },
        {
          name: 'Flask',
          iconPath: 'https://www.svgrepo.com/show/508915/flask.svg',
          color: '#BD3C00',
          description: 'Microframework web Python',
        },
        {
          name: 'Spring Boot',
          iconPath: '/java-original.svg',
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
          iconPath: '/react-original.svg',
          color: '#61DAFB',
          description: 'Librería JavaScript UI',
        },
        {
          name: 'Angular',
          iconPath: '/angularjs-original.svg',
          color: '#DD0031',
          description: 'Framework TypeScript completo',
        },
        {
          name: 'Next.js',
          iconPath: '/nextjs-original.svg',
          color: '#A000FF',
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
          iconPath: '/flutter-original.svg',
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
          iconPath: '/mongodb-original.svg',
          color: '#47A248',
          description: 'Base de datos NoSQL',
        },
        {
          name: 'PostgreSQL',
          iconPath: '/postgresql-original.svg',
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
          iconPath: '/docker-original.svg',
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
          iconPath: '/arduino-original.svg',
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-theme-primary mb-4">
            Tech Stack & Habilidades
          </h2>
          <p className="text-base sm:text-lg text-theme-secondary max-w-2xl mx-auto px-4">
            Mi conjunto de habilidades centrado en desarrollo full-stack y tecnologías modernas
          </p>
          <div className="w-24 h-1 bg-[#00ff41] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Skills Carousel */}
        <div className="relative w-full md:max-w-3xl mx-auto">
          <div className="overflow-x-hidden py-4 px-[4%]">
            <div
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <div className="flex">
                {skillCategories.map((category, idx) => (
                  <div key={idx} className="w-full flex-shrink-0 px-2 sm:px-4">
                    <div className={`carousel-container-card border-2 rounded-2xl md:rounded-[0px_50px_0px_50px] p-4 sm:p-5 md:p-6 lg:p-8 
                                  transition-all duration-300 relative mx-auto`}>
                      
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-matrix-green mb-4 md:mb-6 flex items-center justify-center gap-3">
                        <i className={`fas ${category.icon}`}></i>
                        {category.title}
                      </h3>
                      <div className="flex flex-wrap justify-center gap-3 md:gap-4 w-full">
                        {category.skills.map((skill, skillIdx) => (
                          <div
                            key={skillIdx}
                            className="skill-item-card border rounded-2xl p-3 sm:p-4 
                                     transition-all duration-300 
                                     group
                                     flex-1 min-w-[150px] max-w-[190px] h-[180px] flex items-center justify-center"
                          >
                            <div className="flex flex-col items-center text-center space-y-2 w-full px-1">
                              {skill.iconPath ? (
                                <div className="relative w-[2.2rem] h-[2.2rem] sm:w-[2.8rem] sm:h-[2.8rem] 
                                              transition-transform duration-300 group-hover:scale-110 flex-shrink-0">
                                  <Image
                                    src={skill.iconPath}
                                    alt={`${skill.name} icon`}
                                    fill
                                    className="object-contain"
                                    style={{
                                      filter: `drop-shadow(0 0 8px ${skill.color}66) drop-shadow(0 0 4px ${skill.color}99)`,
                                    }}
                                  />
                                </div>
                              ) : (
                                <i
                                  className={`${skill.icon} text-[1.8rem] sm:text-[2.2rem] transition-all duration-300 
                                           group-hover:scale-110 flex-shrink-0`}
                                  style={{ 
                                    color: skill.color,
                                    filter: `drop-shadow(0 0 8px ${skill.color}66) drop-shadow(0 0 4px ${skill.color}99)`,
                                  }}
                                ></i>
                              )}
                              <h4 className="text-[0.95rem] font-semibold text-matrix-green tracking-wide break-words w-full">
                                {skill.name}
                              </h4>
                              <p className="text-[0.72rem] text-theme-muted leading-snug break-words w-full">{skill.description}</p>
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
          <div className=" flex justify-center items-center gap-4 mt-4 sm:mt-5 md:mt-6">
            <button
              onClick={prevSlide}
              className="carousel-nav-btn border 
                       rounded-full w-12 h-12 flex items-center justify-center 
                       transition-all duration-300 hover:scale-110
                       active:scale-95"
              aria-label="Habilidad anterior"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            
            {/* Indicators */}
            <div className="flex justify-center gap-2">
            {skillCategories.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`carousel-indicator border h-[10px] rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'active w-8'
                    : 'w-[10px]'
                }`}
                aria-label={`Ir a categoría ${idx + 1}`}
              ></button>
            ))}            </div>
            
            <button
              onClick={nextSlide}
              className="carousel-nav-btn border 
                       rounded-full w-12 h-12 flex items-center justify-center 
                       transition-all duration-300 hover:scale-110
                       active:scale-95"
              aria-label="Próxima habilidad"
            >
              <i className="fas fa-chevron-right"></i>
            </button>          </div>
        </div>
      </div>
    </section>
  );
}
