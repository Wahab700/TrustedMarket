"use client";

import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Reveal, BtnPrimary } from '@/components/ui/Components';

const ParticleCanvas = dynamic(() => import('@/components/three/ParticleCanvas'), { ssr: false });

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-black-DEFAULT flex items-center justify-center px-6 overflow-hidden">
      {/* Background Particles */}
      <ParticleCanvas color={0xE8192C} count={400} opacity={0.4} />
      
      {/* Ghostly Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none">
        <h1 className="font-display text-[30vw] leading-none tracking-tighter text-white">404</h1>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl">
        <Reveal>
          <div className="flex flex-col items-center">
            <div className="font-mono text-xs text-red tracking-[0.2em] uppercase mb-8 flex items-center gap-4">
              <span className="w-12 h-px bg-red/30 block" />
              Error Code 404
              <span className="w-12 h-px bg-red/30 block" />
            </div>
            
            <h2 className="font-display text-7xl md:text-9xl tracking-wider uppercase mb-6 leading-tight">
              LOST IN THE<br /><span className="text-red">VOID</span>
            </h2>
            
            <p className="text-offwhite/50 text-lg mb-12 max-w-md mx-auto leading-relaxed">
              The page you are seeking has been moved, deleted, or never existed in this dimension.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <BtnPrimary href="/">Back to Reality</BtnPrimary>
              <Link 
                href="/contact" 
                className="font-mono text-[10px] tracking-widest uppercase px-8 py-4 border border-offwhite/10 text-offwhite/60 hover:border-red hover:text-white transition-all duration-300"
              >
                Report an Issue
              </Link>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red/5 blur-[120px] rounded-full animate-float pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-red/10 blur-[100px] rounded-full animate-float pointer-events-none" style={{ animationDelay: '-3s' }} />
    </main>
  );
}
