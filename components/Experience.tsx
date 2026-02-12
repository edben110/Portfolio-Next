import { memo } from 'react';

function Experience() {
  const experiences = [
    {
      title: 'Estudiante de Ingeniería de Software',
      company: 'Universidad Cooperativa de Colombia, Campus Pasto',
      date: 'Actualidad',
      icon: 'fa-graduation-cap',
      descriptions: [
        'Formación en desarrollo de software, arquitectura de sistemas y metodologías ágiles',
        'Especialización en tecnologías full-stack modernas',
      ],
      tags: ['Software', 'Full-Stack', 'Arquitectura'],
    },
    {
      title: 'Monitor de Bienestar Universitario',
      company: 'Universidad Cooperativa de Colombia, Campus Pasto',
      date: 'Actualidad',
      icon: 'fa-user-tie',
      descriptions: [
        'Administración del ciclo de vida de documentos y políticas',
        'Digitalización, gestión de acceso y control de información',
        'Apoyo en procesos de bienestar estudiantil',
      ],
      tags: ['Gestión Documental', 'Bienestar', 'Digitalización'],
    },
    {
      title: 'Auxiliar en Gestión de Archivo',
      company: 'Batallón de Infantería #47 Francisco de Paula Vélez / Bivel 47',
      date: 'Sem. B 2023',
      icon: 'fa-archive',
      descriptions: [
        'Clasificación y ordenamiento de documentos operativos',
        'Gestión de préstamo y archivo físico',
        'Control y organización de información institucional',
      ],
      tags: ['Archivo', 'Clasificación', 'Institucional'],
    },
    {
      title: 'Tutor de Inglés',
      company: 'Santa Marta / San Pedro de Urabá',
      date: 'Sem. A 2023',
      icon: 'fa-chalkboard-teacher',
      descriptions: [
        'Apoyo personalizado en el aprendizaje del idioma inglés',
        'Desarrollo de habilidades comunicativas y gramaticales',
        'Metodologías de enseñanza adaptadas a cada estudiante',
      ],
      tags: ['Inglés', 'Tutoría', 'Comunicación'],
    },
  ];

  return (
    <section id="experience" className="relative py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#00ff41] mb-4">
            Experiencia
          </h2>
          <p className="text-base sm:text-lg text-white px-4">Mi trayectoria académica y profesional</p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00ff41] to-[#00ff88] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#00ff41] via-[#00ff88] to-[#00ff41]"></div>

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
                  <div className="bg-[#0d1b0d] border-2 border-[rgba(0,255,65,0.3)] rounded-2xl p-8 
                                shadow-[0_4px_20px_rgba(0,255,65,0.15)] hover:shadow-[0_8px_30px_rgba(0,255,65,0.25)]
                                transition-all duration-300 hover:scale-105 relative overflow-hidden">
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
                        <h4 className="text-lg text-white flex items-center gap-2 
                                     flex-wrap">
                          <i className="fas fa-building text-primary"></i>
                          {exp.company}
                        </h4>
                      </div>
                    </div>

                    {/* Descriptions */}
                    <div className="space-y-2 mb-6">
                      {exp.descriptions.map((desc, descIdx) => (
                        <p key={descIdx} className="text-white flex items-start gap-2 text-justify leading-relaxed">
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
