'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from './ThemeContext';

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { matrixBgColor } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()';
    const fontSize = 18;
    const columnSpacing = 1.35;
    const drops: number[] = [];

    const setupCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const columns = Math.floor(canvas.width / (fontSize * columnSpacing));
      drops.length = 0;
      for (let i = 0; i < columns; i++) {
        drops.push(Math.random() * -140);
      }
    };

    setupCanvas();

    function draw() {
      if (!ctx || !canvas) return;
      
      ctx.fillStyle = matrixBgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'rgba(0, 255, 65, 0.33)';
      ctx.font = `${fontSize}px OCR A Extended`;

      for (let i = 0; i < drops.length; i++) {
        if (Math.random() < 0.45) {
          drops[i] += 0.55;
          continue;
        }

        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize * columnSpacing, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.985) {
          drops[i] = Math.random() * -60;
        }
        drops[i] += 0.55;
      }
    }

    let animationId: number;
    let lastDraw = 0;
    const frameInterval = 1000 / 27;

    function animate(timestamp: number) {
      if (timestamp - lastDraw >= frameInterval) {
        draw();
        lastDraw = timestamp;
      }
      animationId = requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      setupCanvas();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [matrixBgColor]);

  return (
    <canvas
      ref={canvasRef}
      id="matrixCanvas"
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
}
