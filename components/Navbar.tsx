'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 py-4 transition-all duration-500 ${
          scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-black-border' : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image 
            src="/Logo/TM Logo.svg" 
            alt="Trusted Market" 
            width={200} 
            height={21} 
            className="h-8 w-auto md:h-9"
            priority
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative font-body text-xs font-semibold tracking-widest uppercase transition-colors duration-300
                  ${pathname === link.href ? 'text-offwhite' : 'text-offwhite/60 hover:text-offwhite'}
                  group`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 right-0 h-px bg-red-DEFAULT transition-transform duration-300 origin-left
                    ${pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                />
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="clip-btn bg-red-dark text-white font-body font-bold text-xs tracking-widest uppercase px-6 py-3 transition-colors duration-300"
            >
              Get Quote
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2 z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-offwhite transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-offwhite transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-offwhite transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black-DEFAULT/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 transition-all duration-500 lg:hidden
          ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {navLinks.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            className={`font-display text-5xl tracking-widest uppercase transition-colors duration-300
              ${pathname === link.href ? 'text-red-DEFAULT' : 'text-offwhite/70 hover:text-offwhite'}`}
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="mt-4 clip-btn bg-red-dark text-white font-body font-bold text-sm tracking-widest uppercase px-8 py-4"
        >
          Get Free Quote
        </Link>
      </div>
    </>
  );
}
