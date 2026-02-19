'use client';

import { useEffect, useRef } from 'react';

export default function RadioactiveRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initDrops();
    }

    const chars = '|';
    const fontSize = 14;

    let drops: Drop[] = [];

    type Drop = {
      x: number;
      y: number;
      speed: number;
      delay: number;
    };

    let extraWidth = 0;
    let totalWidth = 0;
    let columns = 0;

    function initDrops() {
      extraWidth = canvas.width * 0.5;
      totalWidth = canvas.width + extraWidth * 2;
      columns = Math.floor(totalWidth / fontSize);

      drops = [];

      for (let i = 0; i < columns; i++) {
        drops.push({
          x: (i * fontSize) - extraWidth,
          y: Math.random() * -canvas.height,
          speed: 1 + Math.random() * 3,
          delay: Math.random() * 200
        });
      }
    }

    resize();

    function draw() {
      if (!ctx) return;

      ctx.fillStyle = 'rgba(255,255,255,0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'green';
      ctx.font = `${fontSize}px OCR A Extended`;

      for (let drop of drops) {

        if (drop.delay > 0) {
          drop.delay--;
          continue;
        }

        ctx.save();
        ctx.translate(drop.x, drop.y);
        ctx.rotate(30 * Math.PI / 180);
        ctx.fillText(chars, 0, 0);
        ctx.restore();

        drop.y += drop.speed;
        drop.x += drop.speed;

        if (
          drop.y > canvas.height ||
          drop.x > canvas.width + extraWidth
        ) {
          drop.y = Math.random() * -200;
          drop.x = Math.random() * totalWidth - extraWidth;
          drop.speed = 1 + Math.random() * 3;
          drop.delay = Math.random() * 200;
        }
      }
    }

    let animationId: number;

    function animate() {
      draw();
      animationId = requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
}
