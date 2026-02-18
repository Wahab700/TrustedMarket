'use client';
import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px';
        dotRef.current.style.top = e.clientY + 'px';
      }
    };

    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px';
        ringRef.current.style.top = ring.current.y + 'px';
      }
      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMove);
    animate();

    const hoverEls = document.querySelectorAll('a, button, [data-cursor-hover]');
    const enter = () => {
      dotRef.current?.style.setProperty('transform', 'translate(-50%, -50%) scale(2)');
      ringRef.current?.style.setProperty('transform', 'translate(-50%, -50%) scale(1.5)');
    };
    const leave = () => {
      dotRef.current?.style.setProperty('transform', 'translate(-50%, -50%) scale(1)');
      ringRef.current?.style.setProperty('transform', 'translate(-50%, -50%) scale(1)');
    };

    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', enter);
      el.addEventListener('mouseleave', leave);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" />
      <div ref={ringRef} className="cursor-ring hidden md:block" />
    </>
  );
}
