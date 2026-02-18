"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import {
  Ticker,
  SectionTag,
  SectionTitle,
  Reveal,
  BtnPrimary,
  BtnOutline,
  Counter,
} from "@/components/ui/Components";
import {
  ShoppingBag,
  Zap,
  Megaphone,
  Globe,
  Palette,
  Code2,
} from "lucide-react";

const HeroCanvas = dynamic(() => import("@/components/three/HeroCanvas"), {
  ssr: false,
});
const ParticleCanvas = dynamic(
  () => import("@/components/three/ParticleCanvas"),
  { ssr: false },
);

const services = [
  {
    num: "01",
    title: "Ecommerce",
    desc: "We build high-converting ecommerce stores that drive real sales. Shopify, WooCommerce, and custom integrations.",
    tags: ["Shopify", "WooCommerce", "Custom"],
    icon: ShoppingBag,
  },
  {
    num: "02",
    title: "Shopify",
    desc: "Full-service Shopify agency. Store setup, theme customisation, app development, and CRO.",
    tags: ["Setup", "Customisation", "Speed"],
    icon: Zap,
  },
  {
    num: "03",
    title: "Social Media",
    desc: "Paid ads, organic content, influencer campaigns. We build authority and turn followers into customers.",
    tags: ["Facebook Ads", "Instagram", "Content"],
    icon: Megaphone,
  },
  {
    num: "04",
    title: "WordPress",
    desc: "Custom WordPress websites built for performance. Blogs, landing pages, and corporate sites that rank.",
    tags: ["Design", "Landing Pages", "SEO"],
    icon: Globe,
  },
  {
    num: "05",
    title: "Figma Design",
    desc: "Pixel-perfect UI/UX design systems. Wireframes, prototypes, and production-ready Figma files.",
    tags: ["UI Design", "UX", "Prototyping"],
    icon: Palette,
  },
  {
    num: "06",
    title: "Full Stack",
    desc: "Scalable web apps from frontend to backend. React, Next.js, Node.js, APIs — built for real traffic.",
    tags: ["React", "Next.js", "Node.js"],
    icon: Code2,
  },
];

const portfolio = [
  {
    cat: "Shopify / Ecommerce",
    title: "LuxeHome Store",
    result: "↑ 300% monthly sales revenue",
    span: true,
    letter: "S",
    image: "/images/portfolio/luxehome.png",
  },
  {
    cat: "Social Media Marketing",
    title: "NexaFit Campaign",
    result: "2.4M impressions in 30 days",
    span: false,
    letter: "M",
    image: "/images/portfolio/nexafit.png",
  },
  {
    cat: "WordPress / Full Stack",
    title: "Brandvault Platform",
    result: "SaaS serving 10k+ users",
    span: false,
    letter: "W",
    image: "/images/portfolio/brandvault.png",
  },
  {
    cat: "Figma / UI Design",
    title: "Scalr Dashboard",
    result: "200+ component design system",
    span: false,
    letter: "U",
    image: "/images/portfolio/scalr.png",
  },
  {
    cat: "Next.js / React",
    title: "Alvenex Web App",
    result: "Sub-1s load, 99.9% uptime",
    span: false,
    letter: "A",
    image: "/images/portfolio/alvenex.png",
  },
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, LuxeHome",
    initials: "SM",
    review:
      "Trusted Market completely transformed our online presence. Our Shopify store went from stagnant to generating 300% more revenue within just 3 months. Incredible team.",
  },
  {
    name: "James Kowalski",
    role: "Marketing Dir, NexaFit",
    initials: "JK",
    review:
      "Their Facebook and Instagram ad campaigns delivered 2.4 million impressions in under a month. The ROI exceeded every expectation we had going in. Highly recommend.",
  },
  {
    name: "Aisha Rahman",
    role: "CTO, Scalr.io",
    initials: "AR",
    review:
      "The Figma design system they built saved months of dev time. Clean, scalable, and exactly on-brand. Our engineering team was thrilled with every single handoff.",
  },
];

const stats = [
  { num: 150, suffix: "+", label: "Projects Completed" },
  { num: 98, suffix: "%", label: "Client Satisfaction" },
  { num: 5, suffix: "+", label: "Years Experience" },
  { num: 12, suffix: "+", label: "Team Members" },
];

const clients = [
  "NEXGROW",
  "ALVENEX",
  "SHOPFLOW",
  "BRANDVAULT",
  "SCALR.IO",
  "PIXELX",
  "MARKORA",
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <HeroCanvas />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black-DEFAULT via-black-DEFAULT/70 to-transparent z-[1]" />

        <div className="relative z-[2] max-w-7xl mx-auto px-6 md:px-16 pt-24">
          <div
            className="font-mono text-xs text-red-DEFAULT tracking-widest uppercase mb-6 flex items-center gap-3 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            <span className="w-8 h-px bg-red-DEFAULT block" />
            Result-Driven Digital Marketing Agency
          </div>

          <h1
            className="font-display text-[clamp(4rem,10vw,10rem)] leading-none tracking-wider uppercase opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            GROW
            <br />
            YOUR <span className="text-red-DEFAULT">BRAND</span>
            <br />
            <span className="[-webkit-text-stroke:1px_#F5F5F5] text-transparent">
              DIGITALLY
            </span>
          </h1>

          <p
            className="text-offwhite/65 text-lg max-w-md mt-6 leading-relaxed font-light opacity-0 animate-fade-up"
            style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
          >
            We help ambitious brands scale with Shopify, SEO, Social Media,
            Full-Stack solutions, and campaigns that actually convert.
          </p>

          <div
            className="flex flex-wrap gap-4 mt-10 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
          >
            <BtnPrimary href="/contact">Get Started</BtnPrimary>
            <BtnOutline href="/services">View Services</BtnOutline>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          className="absolute bottom-10 left-6 md:left-16 z-[2] flex items-center gap-3 opacity-0 animate-fade-up"
          style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}
        >
          <div className="w-10 h-px bg-offwhite/30 relative overflow-hidden">
            <span className="absolute inset-y-0 left-0 w-full bg-red-DEFAULT animate-[slideLine_2s_infinite]" />
          </div>
          <span className="font-mono text-xs text-offwhite/40 tracking-widest uppercase">
            Scroll Down
          </span>
        </div>
      </section>

      {/* ── TICKER ── */}
      <Ticker />

      {/* ── CLIENTS ── */}
      <section className="bg-black-mid py-12 px-6 md:px-16">
        <p className="font-mono text-xs text-offwhite/40 tracking-widest uppercase text-center mb-8">
          Trusted by brands &amp; startups worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {clients.map((c) => (
            <span
              key={c}
              className="font-display text-xl tracking-widest text-offwhite/20 hover:text-offwhite/60 transition-colors duration-300 cursor-default"
            >
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="bg-black-DEFAULT py-28 px-6 md:px-16">
        <Reveal>
          <SectionTag>What We Do</SectionTag>
          <SectionTitle>
            OUR CORE <span className="text-red-DEFAULT">SERVICES</span>
          </SectionTitle>
          <p className="text-offwhite/55 max-w-md leading-relaxed mb-12">
            Six high-impact disciplines. One expert team. Delivered with
            precision, speed, and measurable ROI.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.num} delay={i * 80}>
              <div
                className="bg-black-card p-10 group relative overflow-hidden h-full hover:bg-[#1a1a1a] border-t-2 border-red-dark transition-all duration-300"
                style={{
                  clipPath:
                    "polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%)",
                }}
              >
                <p className="font-mono text-xs text-red-DEFAULT tracking-widest mb-6">
                  {s.num}
                </p>
                <div className="mb-4 text-red-dark"><s.icon strokeWidth={1.5} size={40} /></div>
                <h3 className="font-display text-3xl tracking-wider uppercase mb-3">
                  {s.title}
                </h3>
                <p className="text-offwhite/55 text-sm leading-relaxed mb-6">
                  {s.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] px-3 py-1 border border-black-border text-offwhite/50 tracking-widest uppercase group-hover:border-red-dark/40 group-hover:text-offwhite transition-all duration-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-12">
          <BtnOutline href="/services">View All Services</BtnOutline>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-red-DEFAULT py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100} className="text-center">
              <div className="font-display text-[clamp(3rem,7vw,6rem)] leading-none text-white">
                <Counter target={s.num} suffix={s.suffix} />
              </div>
              <p className="font-body font-semibold text-xs tracking-widest uppercase text-white/70 mt-2">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section className="bg-black-mid py-28 px-6 md:px-16">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <SectionTag>Our Work</SectionTag>
            <SectionTitle>
              SELECTED <span className="text-red-DEFAULT">PROJECTS</span>
            </SectionTitle>
          </div>
          <BtnOutline href="/portfolio">View All Projects</BtnOutline>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {portfolio.map((p, i) => (
            <Reveal key={p.title} delay={i * 100} className="w-full">
              <Link
                href="/portfolio"
                className="block group relative overflow-hidden aspect-video bg-black-card border border-white/5 hover:border-red-dark transition-all duration-300"
              >
                {/* Image */}
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-40"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black-DEFAULT via-transparent to-transparent opacity-80" />

                {/* Arrow */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full border border-red-dark flex items-center justify-center text-red-dark text-lg group-hover:bg-red-dark group-hover:text-white transition-all duration-500 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 z-20">
                  ↗
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-red-DEFAULT font-mono text-xs tracking-widest uppercase mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {p.cat}
                    </p>
                    <h3 className="text-3xl font-display text-white uppercase mb-2 leading-none">
                      {p.title}
                    </h3>
                    <p className="text-offwhite/60 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      {p.result}
                    </p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="bg-black-DEFAULT py-28 px-6 md:px-16">
        <Reveal className="text-center mb-16">
          <SectionTag>How We Work</SectionTag>
          <SectionTitle>
            OUR <span className="text-red-DEFAULT">PROCESS</span>
          </SectionTitle>
        </Reveal>

        <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {/* connector line */}
          <div className="hidden lg:block absolute top-6 left-[12%] right-[12%] h-px bg-red-dark" />

          {[
            {
              num: "01",
              title: "Research",
              desc: "Deep-dive into your brand, audience, and competitors to uncover the insights that drive strategy.",
            },
            {
              num: "02",
              title: "Strategy",
              desc: "Custom roadmap built around your business goals, budget, and timeline. No cookie-cutter approaches.",
            },
            {
              num: "03",
              title: "Execution",
              desc: "Expert team builds, designs, and launches with obsessive attention to quality and performance.",
            },
            {
              num: "04",
              title: "Growth",
              desc: "We don't stop until the numbers move.",
            },
          ].map((step: any, i: any) => (
            <Reveal key={step.num} delay={i * 100} className="text-center">
              <div className="w-12 h-12 border border-black-border flex items-center justify-center mx-auto mb-6 relative z-10 bg-black-DEFAULT group-hover:border-red-DEFAULT transition-colors duration-300">
                <span className="font-mono text-xs text-red-DEFAULT tracking-widest">
                  {step.num}
                </span>
              </div>
              <h3 className="font-display text-2xl tracking-wider uppercase mb-3">
                {step.title}
              </h3>
              <p className="text-offwhite/50 text-sm leading-relaxed">
                {step.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-black-mid py-28 px-6 md:px-16">
        <Reveal>
          <SectionTag>Client Reviews</SectionTag>
          <SectionTitle>
            WHAT CLIENTS <span className="text-red-DEFAULT">SAY</span>
          </SectionTitle>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <div className="bg-black-card p-8 h-full hover:bg-[#1a1a1a] transition-all duration-300 rounded-tl-[3rem] rounded-br-[3rem] border border-white/5 hover:border-red-dark relative group overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-red-DEFAULT/10 to-transparent rounded-bl-[100%] transition-opacity duration-300 opacity-50 group-hover:opacity-100" />
                <div className="text-red-dark font-display text-6xl leading-none mb-4 relative z-10">
                  &ldquo;
                </div>
                <div className="flex gap-1 mb-4 text-red-DEFAULT text-xs relative z-10">
                  ★★★★★
                </div>
                <p className="text-offwhite/60 text-sm leading-relaxed italic mb-6 relative z-10">
                  {t.review}
                </p>
                <div className="flex items-center gap-3 relative z-10">
                  <div className="clip-avatar w-10 h-10 bg-red-dark flex items-center justify-center font-display text-white text-base flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-display uppercase text-base mb-0.5">
                      {t.name}
                    </h4>
                    <p className="font-mono text-[10px] text-offwhite/40 tracking-widest uppercase">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative bg-black-DEFAULT py-32 px-6 md:px-16 overflow-hidden text-center">
        <ParticleCanvas color={0xe8192c} count={400} opacity={0.4} />
        <div className="absolute inset-0 bg-gradient-to-b from-black-DEFAULT via-transparent to-black-DEFAULT z-[1]" />
        <Reveal className="relative z-[2]">
          <SectionTag>Let&apos;s Talk</SectionTag>
          <h2 className="font-display text-[clamp(3rem,8vw,8rem)] leading-none tracking-wider uppercase mb-6">
            READY TO <span className="text-red-DEFAULT">SCALE</span>
            <br />
            YOUR BRAND?
          </h2>
          <p className="text-offwhite/55 max-w-sm mx-auto mb-10 leading-relaxed">
            Book a free strategy call with our team. No pressure. Just real talk
            about growing your business.
          </p>
          <BtnPrimary href="/contact">Book Free Consultation</BtnPrimary>
        </Reveal>
      </section>
    </>
  );
}
