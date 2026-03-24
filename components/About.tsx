'use client';

import { memo } from 'react';
import { useTheme } from './ThemeContext';

function About() {
  const { language } = useTheme();

  const content = {
    es: {
      title: 'Sobre mi',
      intro: 'Buenos dias, tardes o noches. Soy',
      introEnd: 'estudiante de Ingenieria de Software en la Universidad Cooperativa de Colombia.',
      description:
        'Me apasionan la ciencia ficcion, el belicismo, amante de los metroidvanias, la historia, la ingenieria, ir al gimnasio y las artes marciales. Mi enfoque esta en crear soluciones tecnologicas innovadoras utilizando las mejores practicas de desarrollo.',
      interestsTitle: 'Intereses',
      interests: [
        { icon: 'fa-rocket', text: 'Ciencia ficcion' },
        { icon: 'fa-book', text: 'Historia' },
        { icon: 'fa-cogs', text: 'Ingenieria' },
        { icon: 'fa-code', text: 'Desarrollo software' },
        { icon: 'fa-dumbbell', text: 'Fitness' },
        { icon: 'fa-hand-rock', text: 'MMA' },
        { icon: 'fa-gamepad', text: 'Gaming' },
      ],
    },
    en: {
      title: 'About me',
      intro: 'Good morning, afternoon or evening. I am',
      introEnd: 'a Software Engineering student at Cooperative University of Colombia.',
      description:
        'I am passionate about science fiction, military topics, metroidvania games, history, engineering, fitness and martial arts. My focus is on creating innovative technology solutions using software development best practices.',
      interestsTitle: 'Interests',
      interests: [
        { icon: 'fa-rocket', text: 'Science fiction' },
        { icon: 'fa-book', text: 'History' },
        { icon: 'fa-cogs', text: 'Engineering' },
        { icon: 'fa-code', text: 'Software development' },
        { icon: 'fa-dumbbell', text: 'Fitness' },
        { icon: 'fa-hand-rock', text: 'MMA' },
        { icon: 'fa-gamepad', text: 'Gaming' },
      ],
    },
  };

  const currentContent = content[language];

  return (
    <section id="about" className="relative py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-theme-primary mb-4">
              {currentContent.title}
            </h2>
            <div className="w-24 h-1 bg-[var(--matrix-green)] mx-auto rounded-full"></div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <p className="text-lg text-theme-secondary leading-relaxed text-justify">
              {currentContent.intro} <strong className="text-matrix-green">Edwar Alexander Benito Basante</strong>, {currentContent.introEnd}
            </p>
            <p className="text-lg text-theme-secondary leading-relaxed text-justify">
              {currentContent.description}
            </p>

            {/* Interests */}
            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-theme-primary mb-6">{currentContent.interestsTitle}</h3>
              <div className="flex flex-wrap gap-4">
                {currentContent.interests.map((interest, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[rgba(0,255,65,0.1)] 
                             tag-badge border rounded-full 
                             transition-all duration-300 hover:scale-105"
                  >
                    <i className={`fas ${interest.icon} text-primary`}></i>
                    <span>{interest.text}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(About);
