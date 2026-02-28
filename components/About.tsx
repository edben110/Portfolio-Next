import { memo } from 'react';

function About() {
  const interests = [
    { icon: 'fa-rocket', text: 'Ciencia Ficción' },
    { icon: 'fa-book', text: 'Historia' },
    { icon: 'fa-cogs', text: 'Ingeniería' },
    { icon: 'fa-code', text: 'Desarrollo Software' },
    { icon: 'fa-dumbbell', text: 'Fit' },
    { icon: 'fa-hand-rock', text: 'MMA' },
    { icon: 'fa-gamepad', text: 'Gaming' },
  ];

  return (
    <section id="about" className="relative py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-theme-primary mb-4">
              Sobre mí
            </h2>
            <div className="w-24 h-1 bg-[var(--matrix-green)] mx-auto rounded-full"></div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <p className="text-lg text-theme-secondary leading-relaxed text-justify">
              Buenos días, tardes o noches. Soy <strong className="text-matrix-green">Edwar Alexander Benito Basante</strong>, 
              estudiante de Ingeniería de Software en la Universidad Cooperativa de Colombia.
            </p>
            <p className="text-lg text-theme-secondary leading-relaxed text-justify">
              Me apasionan la ciencia ficción, el belicismo, amante de los metroidvanias, la historia, 
              la ingeniería, ir al gimnasio y las artes marciales. Mi enfoque está en crear 
              soluciones tecnológicas innovadoras utilizando las mejores prácticas de desarrollo.
            </p>

            {/* Interests */}
            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-theme-primary mb-6">Intereses</h3>
              <div className="flex flex-wrap gap-4">
                {interests.map((interest, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[rgba(0,255,65,0.1)] 
                             tag-badge border rounded-full 
                             transition-all duration-300 hover:scale-105"
                  >
                    <i className={`fas ${interest.icon}`}></i>
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
