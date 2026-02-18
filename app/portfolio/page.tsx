import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { SectionTag, SectionTitle, Reveal, BtnPrimary, Ticker } from '@/components/ui/Components';
import PortfolioVisual from '@/components/visuals/PortfolioVisual';

export const metadata = {
  title: 'Portfolio — Trusted Market',
  description: 'Our selected case studies and client projects.',
};

const ParticleCanvas = dynamic(() => import('@/components/three/ParticleCanvas'), { ssr: false });

const projects = [
  {
    id: '01',
    cat: 'Shopify / Ecommerce',
    title: 'LuxeHome Store',
    client: 'LuxeHome Interior Co.',
    description: 'A complete Shopify Plus store redesign and marketing overhaul for a premium home décor brand. We rebuilt their store architecture, implemented a new checkout flow, and launched targeted Meta campaigns.',
    results: [
      { label: 'Revenue Increase', value: '300%' },
      { label: 'Conversion Rate', value: '4.8%' },
      { label: 'ROAS', value: '6.2x' },
    ],
    tags: ['Shopify Plus', 'Meta Ads', 'CRO'],
    letter: 'LH',
    image: '/images/portfolio/luxehome.png',
  },
  {
    id: '02',
    cat: 'Social Media Marketing',
    title: 'NexaFit Campaign',
    client: 'NexaFit Sports',
    description: 'A 30-day social media blitz for a fitness brand launching a new supplement line. Managed influencer partnerships, UGC campaigns, and paid Meta/TikTok ads.',
    results: [
      { label: 'Impressions', value: '2.4M' },
      { label: 'Engagement Rate', value: '8.2%' },
      { label: 'New Followers', value: '+18K' },
    ],
    tags: ['Meta Ads', 'TikTok', 'Influencer', 'UGC'],
    letter: 'NF',
    image: '/images/portfolio/nexafit.png',
  },
  {
    id: '03',
    cat: 'WordPress / Full Stack',
    title: 'Brandvault Platform',
    client: 'Brandvault SaaS',
    description: 'Full platform rebuild for a brand asset management SaaS. We designed and developed the marketing site, app dashboard, and onboarding flow in Next.js and Node.js.',
    results: [
      { label: 'Active Users', value: '10K+' },
      { label: 'Page Load', value: '0.8s' },
      { label: 'Churn Reduction', value: '35%' },
    ],
    tags: ['Next.js', 'Node.js', 'PostgreSQL'],
    letter: 'BV',
    image: '/images/portfolio/brandvault.png',
  },
  {
    id: '04',
    cat: 'Figma / UI Design',
    title: 'Scalr Dashboard',
    client: 'Scalr.io',
    description: 'Designed a comprehensive SaaS dashboard and design system from scratch. 200+ components, full dark mode, accessibility-first, and developer handoff in 6 weeks.',
    results: [
      { label: 'Components', value: '200+' },
      { label: 'Design Screens', value: '80+' },
      { label: 'Dev Time Saved', value: '4mo' },
    ],
    tags: ['Figma', 'Design System', 'UX Research'],
    letter: 'SC',
    image: '/images/portfolio/scalr.png',
  },
  {
    id: '05',
    cat: 'Next.js / React',
    title: 'Alvenex Web App',
    client: 'Alvenex Technologies',
    description: 'Built a high-performance web application for a fintech startup. Real-time data dashboards, authentication, multi-tenant architecture, and AWS infrastructure.',
    results: [
      { label: 'Page Load', value: '<1s' },
      { label: 'Uptime', value: '99.9%' },
      { label: 'Lighthouse Score', value: '98' },
    ],
    tags: ['Next.js', 'AWS', 'React', 'Fintech'],
    letter: 'AX',
    image: '/images/portfolio/alvenex.png',
  },
  {
    id: '06',
    cat: 'Shopify / SEO',
    title: 'MarkOra Fashion',
    client: 'Markora Clothing',
    description: 'SEO overhaul and Shopify migration for a D2C fashion brand. New site architecture, content strategy, and link building took them from page 5 to page 1.',
    results: [
      { label: 'Organic Traffic', value: '+420%' },
      { label: 'Google Rankings', value: 'Page 1' },
      { label: 'Organic Revenue', value: '+280%' },
    ],
    tags: ['SEO', 'Shopify', 'Content'],
    letter: 'MO',
    image: '/images/portfolio/luxehome.png',
  },
];

const categories = ['All', 'Shopify', 'Social Media', 'WordPress', 'UI Design', 'Full Stack', 'SEO'];

export default function Portfolio() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black-DEFAULT pt-40 pb-32 px-6 md:px-16 relative overflow-hidden border-b border-black-border">
        <div className="absolute inset-0 opacity-10">
          <ParticleCanvas color={0xE8192C} count={100} opacity={0.2} />
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          {/* Left Content */}
          <div>
            <div
              className="font-mono text-xs text-red tracking-[0.3em] uppercase mb-6 flex items-center gap-4 opacity-0 animate-fade-up"
              style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
            >
              <span className="w-10 h-px bg-red block" />
              Case Studies
            </div>
            <h1
              className="font-display text-[clamp(4.5rem,10vw,9rem)] leading-[0.9] tracking-wider uppercase mb-8 opacity-0 animate-fade-up"
              style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
              OUR<br />
              <span className="text-red">PORTFOLIO</span>
            </h1>
            <p
              className="text-offwhite/50 text-xl max-w-xl mt-8 leading-relaxed opacity-0 animate-fade-up"
              style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
            >
              Real clients. Real campaigns. Real results. Browse our battle-tested projects across every digital discipline.
            </p>
          </div>

          {/* Right Visual */}
          <div className="hidden lg:block relative opacity-0 animate-fade-up" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            <PortfolioVisual />
          </div>
        </div>
      </section>

      <Ticker />

      {/* Filter Pills */}
      <section className="bg-black-mid py-12 px-6 md:px-16 border-b border-black-border">
        <div className="flex flex-wrap gap-3 max-w-7xl mx-auto">
          {categories.map((c, i) => (
            <button
              key={c}
              className={`font-mono text-[10px] tracking-widest uppercase px-6 py-2.5 border transition-all duration-300
                ${i === 0
                  ? 'border-red-dark bg-red-dark text-white'
                  : 'border-black-border text-offwhite/50 hover:border-red hover:text-offwhite'
                }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Timeline Layout */}
      <section className="bg-black-mid py-32 px-6 md:px-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-red/50 via-red/20 to-transparent -translate-x-px md:-translate-x-1/2" />

          <div className="space-y-32">
            {projects.map((p, i) => (
              <div key={p.id} className="relative">
                <Reveal delay={100}>
                  <div className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                    
                    {/* Content Column */}
                    <div className="w-full md:w-1/2">
                      <div className={`p-8 lg:p-12 bg-black-card border border-black-border hover:border-red/40 transition-all duration-500 group relative
                        ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                        
                        {/* ID Badge */}
                        <div className={`absolute top-0 -translate-y-1/2 font-mono text-xs text-red tracking-widest bg-black-mid px-4 py-1 border border-red/30
                          ${i % 2 === 0 ? 'right-0' : 'left-0'}`}>
                          {p.id}
                        </div>

                        <p className="font-mono text-[10px] text-red tracking-widest uppercase mb-3">{p.cat}</p>
                        <h3 className="font-display text-4xl lg:text-5xl tracking-wider uppercase mb-2 group-hover:text-red transition-colors duration-300">
                          {p.title}
                        </h3>
                        <p className="text-offwhite/40 font-mono text-[10px] tracking-widest uppercase mb-6">{p.client}</p>
                        
                        <p className="text-offwhite/60 text-sm leading-relaxed mb-8 max-w-lg mx-0 ml-auto md:ml-0 md:mr-0 inline-block">
                          {p.description}
                        </p>

                        {/* Results Grid */}
                        <div className={`grid grid-cols-2 lg:grid-cols-3 gap-6 pt-8 border-t border-black-border ${i % 2 === 0 ? 'justify-items-end' : 'justify-items-start'}`}>
                          {p.results.map(r => (
                            <div key={r.label} className={i % 2 === 0 ? 'text-right' : 'text-left'}>
                              <p className="font-display text-2xl text-red">{r.value}</p>
                              <p className="font-mono text-[9px] text-offwhite/40 tracking-widest uppercase">{r.label}</p>
                            </div>
                          ))}
                        </div>

                        {/* Tags */}
                        <div className={`flex flex-wrap gap-2 mt-8 ${i % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                          {p.tags.map(t => (
                            <span key={t} className="font-mono text-[9px] px-3 py-1 border border-black-border text-offwhite/30 tracking-widest uppercase group-hover:border-red/20 group-hover:text-offwhite/60 transition-all duration-300">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Timeline Node (Center) */}
                    <div className="absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2 flex items-center justify-center z-10 hidden md:flex">
                      <div className="w-3 h-3 bg-red rounded-full animate-pulse-glow" />
                      <div className="absolute inset-0 w-8 h-8 rounded-full border border-red/30 animate-ping opacity-20" />
                    </div>

                    {/* Image Column */}
                    <div className="w-full md:w-1/2">
                      <div className="aspect-[16/10] relative group overflow-hidden border border-black-border">
                        <div className="absolute inset-0 bg-red-dark mix-blend-color opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10" />
                        <Image
                          src={p.image}
                          alt={p.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black-DEFAULT/80 via-transparent to-transparent opacity-60" />
                        
                        {/* Link Overlay */}
                        <Link href={`/portfolio/${p.title.toLowerCase().replace(/ /g, '-')}`} className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-16 h-16 rounded-full bg-red flex items-center justify-center text-white text-2xl scale-50 group-hover:scale-100 transition-transform duration-500 shadow-2xl">
                            ↗
                          </div>
                        </Link>

                        {/* Background Letter */}
                        <div className="absolute -bottom-10 -right-10 font-display text-[12rem] text-white/5 pointer-events-none select-none">
                          {p.letter}
                        </div>
                      </div>
                    </div>

                  </div>
                </Reveal>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-black-DEFAULT py-32 px-6 md:px-16 text-center overflow-hidden">
        <ParticleCanvas color={0xE8192C} count={300} opacity={0.3} />
        <div className="absolute inset-0 bg-gradient-to-b from-black-DEFAULT via-transparent to-black-DEFAULT z-[1]" />
        <Reveal className="relative z-[2]">
          <SectionTag>Your Project Next</SectionTag>
          <h2 className="font-display text-[clamp(3rem,7vw,7rem)] leading-none tracking-wider uppercase mb-6">
            LET&apos;S BUILD<br /><span className="text-red">SOMETHING</span>
          </h2>
          <p className="text-offwhite/55 max-w-sm mx-auto mb-10">Ready to be our next case study? Start with a free strategy consultation.</p>
          <BtnPrimary href="/contact">Start Your Project</BtnPrimary>
        </Reveal>
      </section>
    </>
  );
}
