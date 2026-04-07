'use client';

import { memo, useState } from 'react';
import { useTheme } from './ThemeContext';

type ExperienceType = 'academic' | 'professional';

function Experience() {
  const { language } = useTheme();
  const [activeType, setActiveType] = useState<ExperienceType>('academic');

  const content = {
    es: {
      title: 'Experiencia',
      subtitle: 'Mi trayectoria academica y profesional',
      labels: {
        academic: 'Academica',
        professional: 'Laboral',
      },
      experiences: {
        academic: [
          {
            title: 'Estudiante de Ingenieria de Software',
            company: 'Universidad Cooperativa de Colombia, Campus Pasto',
            date: 'Actualidad',
            icon: 'fa-graduation-cap',
            descriptions: [
              'Formacion en desarrollo de software, arquitectura de sistemas y metodologias agiles',
              'Desarrollo en tecnologias full-stack modernas',
            ],
            tags: ['Software', 'Full-Stack', 'Arquitectura'],
          },
          {
            title: 'Estudiante de Ingles',
            company: 'Instituto de Idiomas Darseini, Santa Marta',
            date: '2022',
            icon: 'fa-graduation-cap',
            descriptions: [
              'Formacion en habla y escritura en ingles',
              'gramatica y practica presencial con personas nativas',
            ],
            tags: ['Ingles', 'Gramatica', 'Comunicacion'],
          },
        ],
        professional: [
          {
            title: 'Monitor de Bienestar Universitario',
            company: 'Universidad Cooperativa de Colombia, Campus Pasto',
            date: '2025',
            icon: 'fa-user-tie',
            descriptions: [
              'Administracion del ciclo de vida de documentos y politicas',
              'Digitalizacion, gestion de acceso y control de informacion',
              'Apoyo en procesos de bienestar estudiantil',
            ],
            tags: ['Gestion Documental', 'Digitalizacion'],
          },
          {
            title: 'Auxiliar en Gestion de Archivo',
            company: 'Batallon de Infanteria #47 Francisco de Paula Velez / Bivel 47',
            date: 'Sem. B 2023',
            icon: 'fa-archive',
            descriptions: [
              'Clasificacion y ordenamiento de documentos operativos',
              'Gestion de prestamo y archivo fisico',
              'Control y organizacion de informacion institucional',
            ],
            tags: ['Archivo', 'Clasificacion', 'Institucional'],
          },
          {
            title: 'Tutor de Ingles',
            company: 'Santa Marta / San Pedro de Uraba',
            date: 'Sem. A 2023',
            icon: 'fa-chalkboard-teacher',
            descriptions: [
              'Apoyo personalizado en el aprendizaje del idioma ingles',
              'Desarrollo de habilidades comunicativas y gramaticales',
              'Metodologias de ensenanza adaptadas a cada estudiante',
            ],
            tags: ['Ingles', 'Tutoria', 'Comunicacion'],
          },
        ],
      },
    },
    en: {
      title: 'Experience',
      subtitle: 'My academic and professional journey',
      labels: {
        academic: 'Academic',
        professional: 'Professional',
      },
      experiences: {
        academic: [
          {
            title: 'Software Engineering Student',
            company: 'Cooperative University of Colombia, Pasto Campus',
            date: 'Present',
            icon: 'fa-graduation-cap',
            descriptions: [
              'Training in software development, systems architecture and agile methodologies',
              'Hands-on development with modern full-stack technologies',
            ],
            tags: ['Software', 'Full-Stack', 'Architecture'],
          },
          {
            title: 'English Student',
            company: 'Languages Institute Darseini, Santa Marta',
            date: '2022',
            icon: 'fa-graduation-cap',
            descriptions: [
              'Formation in speaking and writing in English',
              'Grammar and face-to-face practice with native speakers',
            ],
            tags: ['English', 'Grammar', 'Communication'],
          },
        ],
        professional: [
          {
            title: 'University Wellbeing Assistant',
            company: 'Cooperative University of Colombia, Pasto Campus',
            date: 'Present',
            icon: 'fa-user-tie',
            descriptions: [
              'Document and policy lifecycle administration',
              'Digitalization, access management and information control',
              'Support in student wellbeing processes',
            ],
            tags: ['Document Management', 'Digitalization'],
          },
          {
            title: 'Archive Management Assistant',
            company: 'Infantry Battalion #47 Francisco de Paula Velez / Bivel 47',
            date: 'Semester B 2023',
            icon: 'fa-archive',
            descriptions: [
              'Classification and organization of operational documents',
              'Physical archive and loan management',
              'Control and organization of institutional information',
            ],
            tags: ['Archive', 'Classification', 'Institutional'],
          },
          {
            title: 'English Tutor',
            company: 'Santa Marta / San Pedro de Uraba',
            date: 'Semester A 2023',
            icon: 'fa-chalkboard-teacher',
            descriptions: [
              'Personalized support for English language learning',
              'Development of communication and grammar skills',
              'Teaching methodologies adapted to each student',
            ],
            tags: ['English', 'Tutoring', 'Communication'],
          },
        ],
      },
    },
  };

  const currentContent = content[language];
  const experiences = currentContent.experiences[activeType];

  return (
    <section id="experience" className="relative py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-theme-primary mb-4">
            {currentContent.title}
          </h2>
          <p className="text-base sm:text-lg text-theme-secondary px-4">{currentContent.subtitle}</p>
          <div className="w-24 h-1 bg-[var(--matrix-green)] mx-auto mt-4 rounded-full"></div>

          {/* Experience Type Selector */}
          <div className="mt-8 inline-flex  border border-primary/30 bg-primary/10 p-1">
            <button
              type="button"
              onClick={() => setActiveType('academic')}
              className={`px-5 py-2  text-sm sm:text-base font-semibold transition-colors duration-300 ${
                activeType === 'academic'
                  ? 'bg-primary text-black'
                  : 'text-primary hover:bg-primary/20'
              }`}
              aria-pressed={activeType === 'academic'}
            >
              {currentContent.labels.academic}
            </button>
            <button
              type="button"
              onClick={() => setActiveType('professional')}
              className={`px-5 py-2 text-sm sm:text-base font-semibold transition-colors duration-300 ${
                activeType === 'professional'
                  ? 'bg-primary text-black'
                  : 'text-primary hover:bg-primary/20'
              }`}
              aria-pressed={activeType === 'professional'}
            >
              {currentContent.labels.professional}
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[var(--matrix-green)]"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row gap-8 items-center ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 
                              w-6 h-6 bg-primary rounded-full border-4 border-black 
                              shadow-glow-md z-10"></div>

                {/* Content */}
                <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right' : ''}`}>
                  <div className="experience-card border-2 rounded-[0px_50px_0px_50px] p-8 
                                transition-all duration-300 relative overflow-hidden">
                    {/* Date Badge */}
                    <div className={`inline-flex items-center px-4 py-2 bg-primary/20 
                                   border border-primary/40 rounded-full text-primary text-sm 
                                   font-semibold mb-4`}>
                      {exp.date}
                    </div>

                    {/* Icon and Title */}
                    <div className={`flex items-start gap-4 mb-4 ${
                      idx % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''
                    }`}>
                      <div className="w-14 h-14 bg-primary/20 border border-primary/40 
                                    rounded-full flex items-center justify-center flex-shrink-0">
                        <i className={`fas ${exp.icon} text-primary text-xl`}></i>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-2">
                          {exp.title}
                        </h3>
                        <h4 className="text-lg text-theme-secondary flex items-center gap-2 
                                     flex-wrap">
                          <i className="fas fa-building text-primary"></i>
                          {exp.company}
                        </h4>
                      </div>
                    </div>

                    {/* Descriptions */}
                    <div className="space-y-2 mb-6">
                      {exp.descriptions.map((desc, descIdx) => (
                        <p key={descIdx} className="text-theme-secondary flex items-start gap-2 text-justify leading-relaxed">
                          <i className="fas fa-check-circle text-primary mt-1 flex-shrink-0"></i>
                          <span>{desc}</span>
                        </p>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className={`flex flex-wrap gap-2 ${
                      idx % 2 === 0 ? 'md:justify-end' : ''
                    }`}>
                      {exp.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="px-4 py-2 bg-primary/10 border border-primary/30 
                                   rounded-full text-primary text-sm font-medium 
                                   inline-flex items-center gap-2"
                        >
                          <i className="fas fa-tag"></i>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Experience);
