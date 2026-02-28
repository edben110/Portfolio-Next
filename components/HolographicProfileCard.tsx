'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

export default function HolographicProfileCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const shineRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    let boundingRect: DOMRect | null = null;
    let rafId: number;

    const handleMouseEnter = () => {
      setIsHovering(true);
      boundingRect = card.getBoundingClientRect();
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!boundingRect) return;
      
      // Usar requestAnimationFrame para optimizar las actualizaciones
      if (rafId) cancelAnimationFrame(rafId);
      
      rafId = requestAnimationFrame(() => {
        const x = e.clientX - boundingRect!.left;
        const y = e.clientY - boundingRect!.top;
        
        const xPercent = (x / boundingRect!.width) * 100;
        const yPercent = (y / boundingRect!.height) * 100;
        
        // Límites de rotación similares al original: -10 a 10 grados
        const tiltX = ((yPercent - 50) / 50) * -10;
        const tiltY = ((xPercent - 50) / 50) * 10;
        
        setRotation({ x: tiltX, y: tiltY });
        setGlowPosition({ x: xPercent, y: yPercent });
      });
    };

    const handleMouseLeave = () => {
      if (rafId) cancelAnimationFrame(rafId);
      setIsHovering(false);
      setRotation({ x: 0, y: 0 });
      setGlowPosition({ x: 50, y: 50 });
      boundingRect = null;
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="profile-card-container relative">
      {/* Profile Card - Estructura exacta del original */}
      <div className="profile-card-wrapper holographic-card relative p-8 rounded-[2rem] border justify-center items-center flex flex-col">        
        {/* Profile Image Wrapper - 300x300px exacto del original */}
        <div
          ref={cardRef}
          className="profile-img-wrapper holographic-img-wrapper relative w-[300px] h-[300px] rounded-[1.5rem] overflow-hidden 
                     border-[3px] mb-6 flex items-center justify-center cursor-pointer"
          style={{
            boxShadow: isHovering 
              ? '0 15px 50px rgba(0, 255, 65, 0.4)' 
              : '0 10px 40px rgba(0, 255, 65, 0.3)',
            transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(${
              isHovering ? 1.02 : 1
            }, ${isHovering ? 1.02 : 1}, ${isHovering ? 1.02 : 1})`,
            transition: 'transform 0.1s ease-out, box-shadow 0.3s ease',
            transformStyle: 'preserve-3d',
            willChange: 'transform',
          }}
        >
          {/* Profile Card Glow - Efecto de brillo que sigue al cursor */}
          <div
            ref={glowRef}
            className="profile-card-glow absolute w-[300px] h-[300px] rounded-full pointer-events-none -z-[2] blur-[40px]"
            style={{
              background: `rgba(0, 255, 65, 0.35)`,
              left: `${glowPosition.x}%`,
              top: `${glowPosition.y}%`,
              transform: 'translate(-50%, -50%)',
              opacity: isHovering ? 1 : 0,
              transition: 'opacity 0.3s ease',
            }}
          />

          {/* Profile Image Shine - Efecto de brillo sobre la imagen */}
          <div
            ref={shineRef}
            className="profile-img-shine absolute inset-0 pointer-events-none z-[1]"
            style={{
              background: `rgba(255, 255, 255, 0.12)`,
              opacity: isHovering ? 1 : 0,
              transition: 'opacity 0.3s ease',
            }}
          />



          {/* Profile Image */}
          <Image
            src="/perfil.jpeg"
            alt="Edben Profile"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Tech Icons - Usando iconos SVG de public/ */}
        <div className="tech-icons flex justify-around items-center gap-4">
          <Image
            src="/python-original.svg"
            alt="Python"
            width={40}
            height={40}
            className="transition-all duration-300 hover:scale-125"
          />
          <Image
            src="/react-original.svg"
            alt="React"
            width={40}
            height={40}
            className="transition-all duration-300 hover:scale-125"
          />
          <Image
            src="/nextjs-original.svg"
            alt="Next.js"
            width={40}
            height={40}
            className="transition-all duration-300 hover:scale-125"
          />
          <Image
            src="/angularjs-original.svg"
            alt="Angular"
            width={40}
            height={40}
            className="transition-all duration-300 hover:scale-125"
          />
          <Image
            src="/java-original.svg"
            alt="Java"
            width={40}
            height={40}
            className="transition-all duration-300 hover:scale-125"
          />
          <Image
            src="/flutter-original.svg"
            alt="Flutter"
            width={40}
            height={40}
            className="transition-all duration-300 hover:scale-125"
          />
        </div>
      </div>
    </div>
  );
}
