'use client';

import { useRef, useState } from 'react';
import { useTheme } from './ThemeContext';

type Testimonio = {
  nombre: string;
  cargo: string;
  descripcion: string;
};

export default function Testimonios() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const { language } = useTheme();

  const content = {
    es: {
      title: 'Testimonios',
      subtitle: 'Opiniones de personas con las que he trabajado',
      prev: 'Testimonio anterior',
      next: 'Proximo testimonio',
      goTo: 'Ir a testimonio',
      items: [
        {
          nombre: 'Mariana Cardenas',
          cargo: 'Product Manager - Fintech',
          descripcion:
            'Trabajar con Edben fue clave para transformar una idea compleja en una solucion funcional. Tiene una gran capacidad para escuchar, proponer mejoras y entregar resultados con alta calidad tecnica.',
        },
        {
          nombre: 'Jose Luis Torres',
          cargo: 'Tech Lead - Consultora de Software',
          descripcion:
            'Edben demostro criterio tecnico y compromiso en todo el proceso. Su forma de estructurar soluciones, documentar decisiones y colaborar con el equipo acelero de forma notable los tiempos de entrega.',
        },
        {
          nombre: 'Valeria Paredes',
          cargo: 'Coordinadora Academica - Universidad',
          descripcion:
            'Destaca por su responsabilidad y enfoque practico. Explica conceptos complejos con claridad, mantiene una comunicacion constante y siempre busca que el resultado final sea util y sostenible.',
        },
        {
          nombre: 'Diego Ramiro Quinones',
          cargo: 'Founder - Startup de IA',
          descripcion:
            'Edben aporta vision de producto y solidez tecnica. Durante nuestro proyecto, propuso mejoras que elevaron el rendimiento de la plataforma y mejoraron la experiencia de los usuarios finales.',
        },
      ] as Testimonio[],
    },
    en: {
      title: 'Testimonials',
      subtitle: 'Feedback from people I have worked with',
      prev: 'Previous testimonial',
      next: 'Next testimonial',
      goTo: 'Go to testimonial',
      items: [
        {
          nombre: 'Mariana Cardenas',
          cargo: 'Product Manager - Fintech',
          descripcion:
            'Working with Edben was key to turning a complex idea into a functional solution. He has a strong ability to listen, propose improvements, and deliver high-quality technical results.',
        },
        {
          nombre: 'Jose Luis Torres',
          cargo: 'Tech Lead - Software Consulting',
          descripcion:
            'Edben showed strong technical judgment and commitment throughout the process. His way of structuring solutions, documenting decisions, and collaborating with the team significantly improved delivery times.',
        },
        {
          nombre: 'Valeria Paredes',
          cargo: 'Academic Coordinator - University',
          descripcion:
            'He stands out for his responsibility and practical mindset. He explains complex concepts clearly, keeps communication consistent, and always aims for a useful and sustainable final result.',
        },
        {
          nombre: 'Diego Ramiro Quinones',
          cargo: 'Founder - AI Startup',
          descripcion:
            'Edben brings product vision and technical strength. During our project, he proposed improvements that boosted platform performance and improved the end-user experience.',
        },
      ] as Testimonio[],
    },
  };

  const currentContent = content[language];
  const testimonios = currentContent.items;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonios.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonios.length) % testimonios.length);
  };

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

  return (
    <section id="testimonios" className="relative py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-theme-primary mb-4">
            {currentContent.title}
          </h2>
          <p className="text-base sm:text-lg text-theme-secondary px-4">
            {currentContent.subtitle}
          </p>
          <div className="w-24 h-1 bg-[var(--matrix-green)] mx-auto mt-4 rounded-full"></div>
        </div>

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
                {testimonios.map((testimonio, idx) => (
                  <div key={idx} className="w-full flex-shrink-0 px-2 sm:px-4">
                    <div className="carousel-container-card border-2 rounded-2xl md:rounded-[0px_50px_0px_50px] transition-all duration-300 mx-auto">
                      <div className="p-6 md:p-8">
                        <h3 className="text-xl sm:text-2xl font-bold text-matrix-green mb-2 text-center">
                          {testimonio.nombre}
                        </h3>
                        <p className="text-sm md:text-base text-theme-muted mb-5 text-center uppercase tracking-[0.12em]">
                          {testimonio.cargo}
                        </p>

                        <p className="text-sm md:text-base text-theme-secondary leading-relaxed text-justify">
                          {testimonio.descripcion}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 mt-5">
            <button
              onClick={prevSlide}
              className="carousel-nav-btn border hidden md:flex rounded-full w-12 h-12 items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label={currentContent.prev}
            >
              <i className="fas fa-chevron-left"></i>
            </button>

            <div className="flex justify-center gap-2">
              {testimonios.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`carousel-indicator border rounded-full h-[10px] transition-all duration-300 ${
                    idx === currentIndex ? 'active w-8' : 'w-[10px]'
                  }`}
                  aria-label={`${currentContent.goTo} ${idx + 1}`}
                ></button>
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="carousel-nav-btn border hidden md:flex rounded-full w-12 h-12 items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label={currentContent.next}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}