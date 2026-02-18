'use client';
import { useEffect, useRef, ReactNode } from 'react';
import Link from 'next/link';

/* ── Section Tag ── */
export function SectionTag({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <p className={`section-tag font-mono text-xs text-red tracking-widest uppercase mb-3 flex items-center gap-2 ${className}`}>
      {children}
    </p>
  );
}

/* ── Section Title ── */
export function SectionTitle({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`font-display text-5xl md:text-7xl leading-none tracking-wider uppercase mb-6 ${className}`}>
      {children}
    </h2>
  );
}

/* ── Reveal on Scroll ── */
export function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.unobserve(el); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* ── Primary Button ── */
export function BtnPrimary({ href, children, onClick }: { href?: string; children: ReactNode; onClick?: () => void }) {
  const cls = 'clip-btn bg-red-dark text-white font-body font-bold text-xs tracking-widest uppercase px-7 py-4 transition-all duration-300 inline-block animate-pulse-glow';
  if (href) return <Link href={href} className={cls}>{children}</Link>;
  return <button onClick={onClick} className={cls}>{children}</button>;
}

/* ── Outline Button ── */
export function BtnOutline({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="border border-offwhite/25 hover:border-red-DEFAULT hover:text-red-DEFAULT text-offwhite font-body font-semibold text-xs tracking-widest uppercase px-7 py-4 transition-all duration-300 inline-block"
    >
      {children}
    </Link>
  );
}

/* ── Ticker ── */
const tickerItems = [
  'Ecommerce Development', 'Shopify Experts', 'Social Media Marketing',
  'WordPress Design', 'Figma UI/UX', 'Full Stack Development',
  'SEO Optimization', 'Facebook Ads', 'Brand Strategy', 'Performance Marketing',
];

export function Ticker() {
  const doubled = [...tickerItems, ...tickerItems];
  return (
    <div className="bg-red-DEFAULT overflow-hidden py-3 relative z-10">
      <div className="flex gap-12 animate-ticker whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="font-display text-sm tracking-widest uppercase text-white flex-shrink-0 flex items-center gap-12">
            {item}
            <span className="text-white/40 text-xs">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Counter ── */
export function Counter({ target, suffix = '+', duration = 1500 }: { target: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      let start = 0;
      const step = target / (duration / 16);
      const interval = setInterval(() => {
        start += step;
        if (start >= target) { el.textContent = target + suffix; clearInterval(interval); return; }
        el.textContent = Math.round(start) + suffix;
      }, 16);
      obs.unobserve(el);
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, suffix, duration]);
  return <span ref={ref}>0{suffix}</span>;
}
