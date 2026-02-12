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
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Tech Stack & Habilidades
          </h2>
          <p className="text-lg text-green-200 max-w-2xl mx-auto">
            Mi conjunto de habilidades centrado en desarrollo full-stack y tecnologías modernas
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
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
                  <div key={idx} className="w-full flex-shrink-0 px-4">
                    <div className="bg-gradient-to-br from-black/80 to-primary/5 backdrop-blur-sm 
                                  border border-primary/30 rounded-2xl p-8 md:p-12">
                      <h3 className="text-2xl md:text-3xl font-bold text-primary mb-8 flex items-center gap-3">
                        <i className={`fas ${category.icon}`}></i>
                        {category.title}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {category.skills.map((skill, skillIdx) => (
                          <div
                            key={skillIdx}
                            className="bg-black/60 backdrop-blur-sm border border-primary/20 rounded-xl p-6 
                                     hover:border-primary/50 transition-all duration-300 hover:scale-105 
                                     hover:shadow-glow-md group"
                          >
                            <div className="flex flex-col items-center text-center space-y-4">
                              <div
                                className="w-16 h-16 rounded-full flex items-center justify-center 
                                         group-hover:scale-110 transition-transform duration-300"
                                style={{
                                  backgroundColor: `${skill.color}15`,
                                  border: `2px solid ${skill.color}40`,
                                }}
                              >
                                <i
                                  className={`${skill.icon} text-3xl`}
                                  style={{ color: skill.color }}
                                ></i>
                              </div>
                              <h4 className="text-xl font-semibold text-primary">
                                {skill.name}
                              </h4>
                              <p className="text-sm text-green-200">{skill.description}</p>
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
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 
                     bg-primary/20 hover:bg-primary/40 backdrop-blur-sm border border-primary 
                     rounded-full w-12 h-12 flex items-center justify-center text-primary 
                     transition-all duration-300 hover:scale-110 shadow-glow-md"
            aria-label="Habilidad anterior"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 
                     bg-primary/20 hover:bg-primary/40 backdrop-blur-sm border border-primary 
                     rounded-full w-12 h-12 flex items-center justify-center text-primary 
                     transition-all duration-300 hover:scale-110 shadow-glow-md"
            aria-label="Próxima habilidad"
          >
            <i className="fas fa-chevron-right"></i>
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {skillCategories.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-primary/30 hover:bg-primary/60'
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
