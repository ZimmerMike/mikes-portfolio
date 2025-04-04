'use client';

import { useEffect, useRef } from 'react';

const GlowEffect = () => {
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.setProperty('--glow-x', `${e.clientX}px`);
        glowRef.current.style.setProperty('--glow-y', `${e.clientY}px`);
        glowRef.current.style.setProperty('--glow-opacity', `1`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return <div ref={glowRef} className="glow-overlay" />;
};

export default GlowEffect;