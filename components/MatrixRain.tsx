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
    const horizontalStep = fontSize * columnSpacing;
    const cursorRadiusPx = fontSize * 3;
    const drops: number[] = [];
    const columnChars: string[] = [];
    const columnImpulse: number[] = [];
    const rowImpulse: number[] = [];
    const cursorState = {
      col: -1,
      row: -1,
      pulse: 0,
      active: false,
    };

    const randomChar = () => chars[Math.floor(Math.random() * chars.length)];

    const setupCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const columns = Math.floor(canvas.width / horizontalStep);
      const rows = Math.floor(canvas.height / fontSize) + 2;

      drops.length = 0;
      columnChars.length = 0;
      columnImpulse.length = 0;
      rowImpulse.length = 0;

      for (let i = 0; i < columns; i++) {
        drops.push(Math.random() * -140);
        columnChars.push(randomChar());
        columnImpulse.push(0);
      }

      for (let i = 0; i < rows; i++) {
        rowImpulse.push(0);
      }
    };

    setupCanvas();

    function draw() {
      if (!ctx || !canvas) return;
      
      ctx.fillStyle = matrixBgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px OCR A Extended`;

      for (let i = 0; i < drops.length; i++) {
        const colBoost = columnImpulse[i] ?? 0;
        const currentRow = Math.max(0, Math.floor(drops[i]));
        const rowBoost = rowImpulse[currentRow] ?? 0;
        let cursorBoost = 0;

        if (cursorState.active) {
          const dx = i * horizontalStep - cursorState.col * horizontalStep;
          const dy = currentRow * fontSize - cursorState.row * fontSize;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < cursorRadiusPx) {
            cursorBoost = (1 - distance / cursorRadiusPx) * cursorState.pulse;
          }
        }

        const boost = Math.max(colBoost, rowBoost, cursorBoost);

        if (Math.random() < 0.45 - boost * 0.22) {
          drops[i] += 0.55;
          continue;
        }

        if (Math.random() < 0.07) {
          columnChars[i] = randomChar();
        }

        const text = boost > 0.08 ? randomChar() : columnChars[i];
        const alpha = 0.24 + boost * 0.45;
        ctx.fillStyle = `rgba(0, 255, 65, ${Math.min(alpha, 0.85)})`;
        ctx.fillText(text, i * horizontalStep, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.985) {
          drops[i] = Math.random() * -60;
        }

        drops[i] += 0.55 + colBoost * 0.7;
        columnImpulse[i] *= 0.88;
      }

      for (let i = 0; i < rowImpulse.length; i++) {
        rowImpulse[i] *= 0.88;
      }

      if (cursorState.active && cursorState.pulse > 0.02) {
        const pulseAlpha = Math.min(0.85, 0.3 + cursorState.pulse * 0.7);
        const radiusCols = Math.ceil(cursorRadiusPx / horizontalStep);
        const radiusRows = Math.ceil(cursorRadiusPx / fontSize);
        const colMin = Math.max(0, cursorState.col - radiusCols);
        const colMax = Math.min(columnChars.length - 1, cursorState.col + radiusCols);
        const rowMin = Math.max(0, cursorState.row - radiusRows);
        const rowMax = Math.min(rowImpulse.length - 1, cursorState.row + radiusRows);

        for (let row = rowMin; row <= rowMax; row++) {
          for (let col = colMin; col <= colMax; col++) {
            const dx = col * horizontalStep - cursorState.col * horizontalStep;
            const dy = row * fontSize - cursorState.row * fontSize;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance <= cursorRadiusPx && Math.random() < 0.62) {
              const localAlpha = pulseAlpha * (1 - distance / cursorRadiusPx);
              ctx.fillStyle = `rgba(0, 255, 65, ${Math.max(0.12, localAlpha)})`;
              ctx.fillText(randomChar(), col * horizontalStep, row * fontSize);
            }
          }
        }

        cursorState.pulse *= 0.9;
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

    animate(0);

    const handleResize = () => setupCanvas();

    const handleMouseMove = (event: MouseEvent) => {
      const baseCol = Math.floor(event.clientX / horizontalStep);
      const baseRow = Math.floor(event.clientY / fontSize);
      cursorState.col = baseCol;
      cursorState.row = baseRow;
      cursorState.active = true;
      cursorState.pulse = 1;

      for (let offset = -8; offset <= 8; offset++) {
        const col = baseCol + offset;
        const intensity = Math.max(0.2, 1 - Math.abs(offset) * 0.1);

        if (col >= 0 && col < columnImpulse.length) {
          columnImpulse[col] = Math.max(columnImpulse[col], intensity);
          columnChars[col] = randomChar();
        }
      }

      for (let offset = -8; offset <= 8; offset++) {
        const row = baseRow + offset;
        const intensity = Math.max(0.2, 1 - Math.abs(offset) * 0.1);

        if (row >= 0 && row < rowImpulse.length) {
          rowImpulse[row] = Math.max(rowImpulse[row], intensity);
        }
      }
    };

    const handleMouseLeave = () => {
      cursorState.active = false;
      cursorState.pulse = 0;
      for (let i = 0; i < columnImpulse.length; i++) {
        columnImpulse[i] *= 0.8;
      }
      for (let i = 0; i < rowImpulse.length; i++) {
        rowImpulse[i] *= 0.8;
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
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
