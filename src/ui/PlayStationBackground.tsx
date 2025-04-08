'use client';

import { useEffect, useRef } from 'react';

export default function PlayStationBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const symbols = ['✕', '◯', '△', '▢'];
    const container = containerRef.current;
    const figures: HTMLSpanElement[] = [];

    if (!container) return;

    const numShapes = window.innerWidth < 720 ? 16 : 32;

    for (let i = 0; i < numShapes; i++) {
      const el = document.createElement('span');
      el.className = 'shape';
      el.textContent = symbols[i % symbols.length];
      el.style.left = `${Math.random() * 100}%`;
      el.style.top = `${Math.random() * 100}%`;
      el.style.fontSize = `${1 + Math.random() * 15}rem`;
      el.style.position = 'absolute';
      el.style.opacity = '0.1';
      container.appendChild(el);
      figures.push(el);
    }

    const velocities = figures.map(() => ({
      x: (Math.random() - 0.5) * 0.05,
      y: (Math.random() - 0.5) * 0.05,
    }));

    const move = () => {
      figures.forEach((el, i) => {
        const fontSize = parseFloat(el.style.fontSize || '64');
        const marginX = (fontSize / window.innerWidth) * 100;
        const marginY = (fontSize / window.innerHeight) * 100;

        let left = parseFloat(el.style.left);
        let top = parseFloat(el.style.top);

        left += velocities[i].x;
        top += velocities[i].y;

        if (left <= 0 || left >= 100 - marginX) velocities[i].x *= -1;
        if (top <= 0 || top >= 100 - marginY) velocities[i].y *= -1;

        el.style.left = `${Math.max(0, Math.min(100 - marginX, left))}%`;
        el.style.top = `${Math.max(0, Math.min(100 - marginY, top))}%`;
      });

      // Colisiones entre figuras usando coordenadas reales
      for (let i = 0; i < figures.length; i++) {
        const a = figures[i].getBoundingClientRect();
        for (let j = i + 1; j < figures.length; j++) {
          const b = figures[j].getBoundingClientRect();

          const dx = a.x + a.width / 2 - (b.x + b.width / 2);
          const dy = a.y + a.height / 2 - (b.y + b.height / 2);
          const distance = Math.sqrt(dx * dx + dy * dy);

          const aR = (a.width / 2) * 0.6;
          const bR = (b.width / 2) * 0.6;

          if (distance < aR + bR) {
            const temp = velocities[i];
            velocities[i] = velocities[j];
            velocities[j] = temp;

            const overlap = (aR + bR - distance) / 2;
            const nx = dx / distance;
            const ny = dy / distance;

            const aEl = figures[i];
            const bEl = figures[j];

            const aLeft = parseFloat(aEl.style.left);
            const aTop = parseFloat(aEl.style.top);
            const bLeft = parseFloat(bEl.style.left);
            const bTop = parseFloat(bEl.style.top);

            aEl.style.left = `${Math.max(0, Math.min(100, aLeft + (nx * overlap * 100) / window.innerWidth))}%`;
            aEl.style.top = `${Math.max(0, Math.min(100, aTop + (ny * overlap * 100) / window.innerHeight))}%`;

            bEl.style.left = `${Math.max(0, Math.min(100, bLeft - (nx * overlap * 100) / window.innerWidth))}%`;
            bEl.style.top = `${Math.max(0, Math.min(100, bTop - (ny * overlap * 100) / window.innerHeight))}%`;
          }
        }
      }

      requestAnimationFrame(move);
    };

    move();

    return () => {
      figures.forEach(el => container.removeChild(el));
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 -z-10 overflow-hidden blur-sm" />;
}
