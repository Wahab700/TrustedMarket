import dynamic from 'next/dynamic';
import Link from 'next/link';
import { SectionTag, SectionTitle, Reveal, BtnPrimary, BtnOutline, Ticker } from '@/components/ui/Components';
import { ShoppingBag, Zap, Megaphone, Globe, Palette, Code2, KeyRound, CarFront, Smartphone } from 'lucide-react';
import NetworkFlow from '@/components/visuals/NetworkFlow';

const ParticleCanvas = dynamic(() => import('@/components/three/ParticleCanvas'), { ssr: false });

export const metadata = {
  title: 'Services — Trusted Market',
  description: 'Ecommerce, Shopify, Social Media, WordPress, Figma Design, Full Stack Development, Car Rental, Car Sale & Purchase, and Mobile Phone Sale & Purchase services.',
};

const services = [
  {
    num: '01',
    title: 'Ecommerce Development',
    tagline: 'Build stores that sell.',
    desc: 'We architect high-converting ecommerce experiences from the ground up. Whether you\'re launching a new store or scaling an existing one, our team brings deep expertise in Shopify, WooCommerce, and custom headless commerce solutions.',
    features: ['Custom store design & development', 'Payment gateway integration', 'Inventory & order management', 'Mobile-first responsive design', 'Conversion rate optimisation', 'Performance & speed tuning'],
    tools: ['Shopify', 'WooCommerce', 'Headless Commerce', 'Stripe', 'PayPal'],
    icon: ShoppingBag,
    result: '300% average revenue increase',
  },
  {
    num: '02',
    title: 'Shopify Solutions',
    tagline: 'From setup to scale.',
    desc: 'We are a specialist Shopify agency handling everything from brand-new store setups to advanced Shopify Plus builds. Our team handles theme development, custom apps, third-party integrations, and ongoing performance optimisation.',
    features: ['Shopify & Shopify Plus setup', 'Custom theme development', 'App development & integration', 'Speed & Core Web Vitals optimisation', 'Migration from other platforms', 'Ongoing maintenance & support'],
    tools: ['Shopify Liquid', 'Shopify Plus', 'Shopify CLI', 'Klaviyo', 'ReCharge'],
    icon: Zap,
    result: '2.8x average ROAS improvement',
  },
  {
    num: '03',
    title: 'Social Media Marketing',
    tagline: 'Turn attention into revenue.',
    desc: 'Strategic social media marketing that builds brand authority and generates measurable business results. We manage everything from organic content strategy and community management to high-performance paid ad campaigns.',
    features: ['Facebook & Instagram advertising', 'Content creation & strategy', 'Community management', 'Influencer partnerships', 'TikTok marketing', 'Monthly analytics reporting'],
    tools: ['Meta Ads Manager', 'TikTok Ads', 'Canva Pro', 'Hootsuite', 'Sprout Social'],
    icon: Megaphone,
    result: '2.4M+ impressions per campaign avg',
  },
  {
    num: '04',
    title: 'WordPress Development',
    tagline: 'Websites that rank & convert.',
    desc: 'Custom WordPress websites built for performance, SEO, and conversion. From blogs and landing pages to complex corporate sites, we design and develop on WordPress with an obsessive focus on speed, security, and search rankings.',
    features: ['Custom WordPress theme development', 'WooCommerce integration', 'Landing page design', 'On-page SEO optimisation', 'Security hardening', 'Speed & performance tuning'],
    tools: ['WordPress', 'Elementor Pro', 'WooCommerce', 'Yoast SEO', 'WP Rocket'],
    icon: Globe,
    result: 'Top 3 Google rankings for clients',
  },
  {
    num: '05',
    title: 'Figma UI/UX Design',
    tagline: 'Pixel-perfect. Developer-ready.',
    desc: 'World-class product design that bridges the gap between business goals and user needs. We create scalable design systems, intuitive user interfaces, and detailed prototypes that your development team can execute flawlessly.',
    features: ['User research & journey mapping', 'Wireframing & prototyping', 'UI component library & design system', 'Interactive Figma prototypes', 'Handoff-ready developer specs', 'Usability testing & iteration'],
    tools: ['Figma', 'FigJam', 'Lottie', 'Zeplin', 'Maze'],
    icon: Palette,
    result: '40% avg improvement in user retention',
  },
  {
    num: '06',
    title: 'Full Stack Development',
    tagline: 'Scalable. Fast. Reliable.',
    desc: 'End-to-end web application development using modern technologies. From React frontends to Node.js APIs and cloud infrastructure, we build scalable digital products that handle real traffic and grow with your business.',
    features: ['React & Next.js frontend development', 'Node.js & Express backend', 'REST & GraphQL API development', 'Database design & optimisation', 'Cloud deployment (AWS, Vercel)', 'CI/CD pipeline setup'],
    tools: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'MongoDB', 'AWS'],
    icon: Code2,
    result: 'Sub-1s load times, 99.9% uptime',
  },
  {
    num: '07',
    title: 'Rent a Car',
    tagline: 'Drive when you need it.',
    desc: 'Flexible car rental for personal trips, business travel, and special occasions. Choose from a range of well-maintained vehicles with clear, upfront pricing and no hidden charges — available on daily, weekly, or monthly terms.',
    features: ['Daily, weekly & monthly rentals', 'Economy, sedan & SUV options', 'With or without driver', 'Regularly serviced vehicles', 'Transparent pricing, no hidden fees', 'Convenient pickup & drop-off'],
    tools: ['Economy', 'Sedan', 'SUV', 'Luxury', 'With Driver'],
    icon: KeyRound,
    result: 'Hassle-free rentals, on time',
  },
  {
    num: '08',
    title: 'Car Sale & Purchase',
    tagline: 'Buy and sell with confidence.',
    desc: 'Whether you are selling your current car or looking for your next one, we make the process simple and secure. We verify every vehicle, help you get a fair price, and handle the paperwork so the deal goes through smoothly.',
    features: ['Verified vehicle listings', 'Fair market valuation', 'Vehicle inspection & history check', 'Ownership transfer & documentation', 'Trade-in options', 'Secure payment handling'],
    tools: ['New Cars', 'Used Cars', 'Inspection', 'Valuation', 'Trade-In'],
    icon: CarFront,
    result: 'Fair deals, fully documented',
  },
  {
    num: '09',
    title: 'Mobile Phones Sale & Purchase',
    tagline: 'Trusted phones. Fair prices.',
    desc: 'Buy and sell new and used smartphones from a source you can trust. Every device is checked for condition, authenticity, and functionality, and we offer fair prices whether you are buying, selling, or trading in.',
    features: ['New & used smartphones', 'Device condition & authenticity check', 'Instant price quotes for your phone', 'Trade-in & upgrade options', 'Accessories available', 'Secure, transparent transactions'],
    tools: ['iPhone', 'Samsung', 'Google Pixel', 'Xiaomi', 'Trade-In'],
    icon: Smartphone,
    result: 'Checked devices, honest pricing',
  },
];

const pricing = [
  {
    tier: 'Basic',
    price: '$999',
    per: '/month',
    desc: 'Perfect for startups and small businesses getting started.',
    features: ['1 Service', 'Monthly reporting', 'Email support', '1 revision round', 'Basic analytics'],
    cta: 'Get Started',
    highlight: false,
  },
  {
    tier: 'Standard',
    price: '$2,499',
    per: '/month',
    desc: 'Our most popular plan for growing businesses.',
    features: ['3 Services', 'Weekly reporting', 'Priority support', 'Unlimited revisions', 'Advanced analytics', 'Dedicated account manager'],
    cta: 'Most Popular',
    highlight: true,
  },
  {
    tier: 'Premium',
    price: '$4,999',
    per: '/month',
    desc: 'Full-service package for established brands scaling fast.',
    features: ['All Services', 'Daily reporting', '24/7 support', 'Unlimited revisions', 'Custom analytics dashboard', 'Dedicated team', 'Monthly strategy calls'],
    cta: 'Contact Us',
    highlight: false,
  },
];

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-black-DEFAULT pt-40 pb-24 px-6 md:px-16 overflow-hidden border-b border-black-border">
        <div className="absolute inset-0 opacity-10">
          <ParticleCanvas color={0xe8192c} count={150} opacity={0.2} />
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left Content */}
          <div>
            <div
              className="font-mono text-xs text-red tracking-[0.3em] uppercase mb-6 flex items-center gap-4 opacity-0 animate-fade-up"
              style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
            >
              <span className="w-10 h-px bg-red block" />
              Service Disciplines
            </div>
            <h1
              className="font-display text-[clamp(4.5rem,10vw,9rem)] leading-[0.9] tracking-wider uppercase mb-8 opacity-0 animate-fade-up"
              style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
              OUR<br />
              <span className="text-red">SERVICES</span>
            </h1>
            <p
              className="text-offwhite/50 text-xl max-w-xl leading-relaxed font-light opacity-0 animate-fade-up"
              style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
            >
              Nine trusted services — from digital growth to car rentals, car sales, and mobile phone trading.
            </p>
            
            <div className="mt-12 opacity-0 animate-fade-up" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
              <BtnPrimary href="/contact">Book Free Audit</BtnPrimary>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden lg:block relative opacity-0 animate-fade-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <NetworkFlow />
          </div>
        </div>
      </section>

      <Ticker />

      {/* Service Blocks */}
      <section className="bg-black-mid py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto space-y-1">
          {services.map((s, i) => (
            <Reveal key={s.num} delay={i * 60}>
              <div className="bg-black-card border-b border-black-border group hover:bg-[#1a1a1a] transition-all duration-300 border-t-2 border-t-transparent hover:border-t-red-dark">
                <div className="p-10 grid grid-cols-1 lg:grid-cols-[auto_1fr_1fr] gap-8 lg:gap-16 items-start">
                  {/* Left */}
                  <div className="flex flex-col gap-3 lg:w-20">
                    <span className="font-mono text-xs text-red tracking-widest">{s.num}</span>
                    <div className="text-red-dark"><s.icon strokeWidth={1.5} size={40} /></div>
                  </div>

                  {/* Center */}
                  <div>
                    <h2 className="font-display text-4xl tracking-wider uppercase mb-2 group-hover:text-offwhite transition-colors">
                      {s.title}
                    </h2>
                    <p className="font-mono text-xs text-red tracking-widest uppercase mb-4">{s.tagline}</p>
                    <p className="text-offwhite/55 text-sm leading-relaxed mb-6 max-w-lg">{s.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {s.tools.map(t => (
                        <span key={t} className="font-mono text-[10px] px-3 py-1 border border-black-border text-offwhite/50 tracking-widest uppercase group-hover:border-red-dark/40 group-hover:text-offwhite transition-all duration-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right */}
                  <div>
                    <p className="font-mono text-[10px] text-red tracking-widest uppercase mb-4">What&apos;s Included</p>
                    <ul className="space-y-2">
                      {s.features.map(f => (
                        <li key={f} className="flex items-center gap-3 text-sm text-offwhite/60">
                          <span className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 p-4 border border-red/20 bg-red/5">
                      <p className="font-mono text-[10px] text-red/70 tracking-widest uppercase mb-1">Typical Result</p>
                      <p className="font-display text-lg tracking-wider text-offwhite">{s.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-black-DEFAULT py-28 px-6 md:px-16">
        <Reveal className="text-center mb-16">
          <SectionTag>Transparent Pricing</SectionTag>
          <SectionTitle>SIMPLE <span className="text-red">PACKAGES</span></SectionTitle>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black-border border border-black-border max-w-5xl mx-auto">
          {pricing.map((p) => (
            <Reveal key={p.tier}>
              <div className={`relative p-10 h-full flex flex-col ${p.highlight ? 'bg-red-dark' : 'bg-black-card hover:bg-[#1a1a1a]'} transition-colors duration-300`}>
                {p.highlight && (
                  <span className="absolute top-4 right-4 font-mono text-[10px] bg-white/20 text-white px-2 py-1 tracking-widest uppercase">
                    Popular
                  </span>
                )}
                <div>
                  <p className={`font-mono text-xs tracking-widest uppercase mb-4 ${p.highlight ? 'text-white/70' : 'text-red'}`}>{p.tier}</p>
                  <div className="flex items-end gap-1 mb-2">
                    <span className="font-display text-6xl">{p.price}</span>
                    <span className={`text-sm mb-3 ${p.highlight ? 'text-white/70' : 'text-offwhite/50'}`}>{p.per}</span>
                  </div>
                  <p className={`text-sm mb-8 leading-relaxed ${p.highlight ? 'text-white/70' : 'text-offwhite/50'}`}>{p.desc}</p>
                  <ul className="space-y-3 mb-10">
                    {p.features.map(f => (
                      <li key={f} className={`flex items-center gap-3 text-sm ${p.highlight ? 'text-white/80' : 'text-offwhite/60'}`}>
                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${p.highlight ? 'bg-white' : 'bg-red'}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto">
                  <Link
                    href="/contact"
                    className={`block text-center font-body font-bold text-xs tracking-widest uppercase py-4 transition-all duration-300
                      ${p.highlight
                        ? 'bg-white text-red hover:bg-offwhite'
                        : 'border border-red text-red hover:bg-red hover:text-white'
                      }`}
                  >
                    {p.cta}
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-black-mid py-24 px-6 md:px-16">
        <Reveal className="max-w-3xl mx-auto">
          <SectionTag>FAQs</SectionTag>
          <SectionTitle className="mb-12">COMMON <span className="text-red">QUESTIONS</span></SectionTitle>

          {[
            { q: 'How long does a typical project take?', a: 'Timelines vary by project scope. A Shopify store takes 2-4 weeks, a full web app 6-12 weeks. We\'ll give you a precise timeline during the free consultation.' },
            { q: 'Do you offer ongoing support?', a: 'Yes. All our plans include ongoing support. We also offer dedicated monthly retainer packages for brands that need continuous management and optimisation.' },
            { q: 'Can I start with just one service?', a: 'Absolutely. Many of our clients start with a single service and expand as they see results. Our Basic plan covers one service with the option to scale.' },
            { q: 'What industries do you specialise in?', a: 'We work across ecommerce, SaaS, retail, fashion, health & wellness, and professional services. If you have a product or service to sell online, we can help.' },
            { q: 'How do you measure success?', a: 'Through hard metrics: revenue, ROAS, conversion rates, traffic, and rankings. Every client gets a monthly performance report with clear KPIs tied to their goals.' },
          ].map((item, i) => (
            <div key={i} className="border-b border-black-border py-6 group">
              <div className="flex justify-between items-start gap-4 cursor-default">
                <p className="font-display text-xl tracking-wider uppercase group-hover:text-red transition-colors duration-300">{item.q}</p>
                <span className="text-red text-xl font-light flex-shrink-0">+</span>
              </div>
              <p className="text-offwhite/55 text-sm leading-relaxed mt-4">{item.a}</p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* CTA */}
      <section className="relative bg-black-DEFAULT py-32 px-6 md:px-16 overflow-hidden text-center">
        <ParticleCanvas color={0xE8192C} count={300} opacity={0.35} />
        <div className="absolute inset-0 bg-gradient-to-b from-black-DEFAULT via-transparent to-black-DEFAULT z-[1]" />
        <Reveal className="relative z-[2]">
          <h2 className="font-display text-[clamp(3rem,7vw,7rem)] leading-none tracking-wider uppercase mb-6">
            READY TO <span className="text-red">START?</span>
          </h2>
          <p className="text-offwhite/55 max-w-sm mx-auto mb-10">Get your free strategy consultation — no commitments, just results-focused advice.</p>
          <BtnPrimary href="/contact">Book Free Consultation</BtnPrimary>
        </Reveal>
      </section>
    </>
  );
}
