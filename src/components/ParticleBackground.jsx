import React, { useEffect, useRef } from 'react';

/**
 * Architectural Precision Grid Canvas
 * Replaces generic floating "constellation" particles with a bespoke
 * engineering CAD / LiDAR crosshair matrix and interactive coordinate spotlight.
 */
export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = -1000;
    let mouseY = -1000;
    let targetMouseX = -1000;
    let targetMouseY = -1000;

    const gridSize = 48; // Spacing of architectural crosshair matrix
    let time = 0;

    const handleMouseMove = (e) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    const handleMouseLeave = () => {
      targetMouseX = -1000;
      targetMouseY = -1000;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.015;

      // Smooth cursor lerp
      mouseX += (targetMouseX - mouseX) * 0.12;
      mouseY += (targetMouseY - mouseY) * 0.12;

      // Subtle base coordinate grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.025)';
      ctx.lineWidth = 1;

      // Vertical grid lines
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Horizontal grid lines
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw subtle crosshair markers (+) at intersections within view
      const crossSize = 3;
      for (let x = gridSize; x < width; x += gridSize) {
        for (let y = gridSize; y < height; y += gridSize) {
          // Distance to cursor
          const dx = mouseX - x;
          const dy = mouseY - y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          let alpha = 0.08;
          let glowSize = crossSize;
          let isNear = false;

          if (dist < 220) {
            isNear = true;
            const proximity = 1 - dist / 220;
            alpha = 0.08 + proximity * 0.65;
            glowSize = crossSize + proximity * 1.5;
            ctx.strokeStyle = `rgba(34, 211, 238, ${alpha})`;
          } else {
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
          }

          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(x - glowSize, y);
          ctx.lineTo(x + glowSize, y);
          ctx.moveTo(x, y - glowSize);
          ctx.lineTo(x, y + glowSize);
          ctx.stroke();

          // If very near cursor, draw subtle micro coordinate
          if (isNear && dist < 110) {
            ctx.fillStyle = `rgba(34, 211, 238, ${(1 - dist / 110) * 0.4})`;
            ctx.font = '8px monospace';
            ctx.fillText(`${x},${y}`, x + 5, y - 5);
          }
        }
      }

      // Cursor spotlight ambient cone
      if (mouseX > 0 && mouseY > 0) {
        const gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 280);
        gradient.addColorStop(0, 'rgba(6, 182, 212, 0.08)');
        gradient.addColorStop(0.5, 'rgba(16, 185, 129, 0.03)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 280, 0, Math.PI * 2);
        ctx.fill();
      }

      // Subtle horizontal scanning telemetry pulse (LiDAR scanline)
      const sweepY = (Math.sin(time * 0.7) * 0.5 + 0.5) * height;
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.04)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, sweepY);
      ctx.lineTo(width, sweepY);
      ctx.stroke();

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.95 }}
    />
  );
}
