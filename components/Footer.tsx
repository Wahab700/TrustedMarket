import Link from 'next/link';
import Image from 'next/image';

const services = ['Ecommerce', 'Shopify', 'Social Media', 'WordPress', 'Figma Design', 'Full Stack Dev'];
const company = ['About Us', 'Portfolio', 'Testimonials', 'Pricing', 'Blog', 'Contact'];

export default function Footer() {
  return (
    <footer className="bg-black-DEFAULT border-t border-black-border">
      <div className="max-w-7xl mx-auto px-6 md:px-16 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-4 transition-opacity hover:opacity-80">
              <Image 
                src="/Logo/TM Logo.svg" 
                alt="Trusted Market" 
                width={180} 
                height={19} 
                className="h-7 w-auto md:h-8"
              />
            </Link>
            <p className="text-offwhite/50 text-sm leading-relaxed max-w-xs mt-4">
              We help ambitious brands scale with result-driven digital marketing, cutting-edge development, and design that converts.
            </p>
            <div className="flex gap-3 mt-6">
              {['in', '𝕏', '▶', 'ig'].map(s => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center text-white text-xs font-mono bg-red-dark border border-red-dark transition-all duration-300 hover:bg-red-DEFAULT hover:border-red-DEFAULT"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-base tracking-widest uppercase mb-5 text-offwhite">Services</h4>
            <ul className="space-y-3">
              {services.map(s => (
                <li key={s}>
                  <Link href="/services" className="text-sm text-offwhite/50 hover:text-offwhite transition-colors duration-300 flex items-center gap-2 group">
                    <span className="text-red-DEFAULT opacity-0 group-hover:opacity-100 transition-opacity text-xs">→</span>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-base tracking-widest uppercase mb-5 text-offwhite">Company</h4>
            <ul className="space-y-3">
              {company.map(c => (
                <li key={c}>
                  <Link
                    href={`/${c.toLowerCase().replace(' ', '-')}`}
                    className="text-sm text-offwhite/50 hover:text-offwhite transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="text-red-DEFAULT opacity-0 group-hover:opacity-100 transition-opacity text-xs">→</span>
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-base tracking-widest uppercase mb-5 text-offwhite">Contact</h4>
            <ul className="space-y-4">
              <li>
                <p className="font-mono text-xs text-red-DEFAULT tracking-widest uppercase mb-1">Email</p>
                <a href="mailto:hello@trustedmarket.agency" className="text-sm text-offwhite/50 hover:text-offwhite transition-colors">hello@trustedmarket.agency</a>
              </li>
              <li>
                <p className="font-mono text-xs text-red-DEFAULT tracking-widest uppercase mb-1">Phone</p>
                <a href="tel:+15552345678" className="text-sm text-offwhite/50 hover:text-offwhite transition-colors">+1 (555) 234-5678</a>
              </li>
              <li>
                <p className="font-mono text-xs text-red-DEFAULT tracking-widest uppercase mb-1">Address</p>
                <p className="text-sm text-offwhite/50">123 Market Street<br />New York, NY 10001</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-black-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-offwhite/40 tracking-widest">
            © 2025 <span className="text-red-DEFAULT">Trusted Market</span>. All rights reserved.
          </p>
          <p className="font-mono text-xs text-offwhite/40 tracking-widest">
            Built for ambitious brands ✦
          </p>
        </div>
      </div>
    </footer>
  );
}
