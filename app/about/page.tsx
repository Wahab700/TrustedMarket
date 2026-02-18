"use client";

import dynamic from "next/dynamic";
import {
  SectionTag,
  SectionTitle,
  Reveal,
  BtnPrimary,
  Ticker,
  Counter,
} from "@/components/ui/Components";
import AboutVisual from "@/components/visuals/AboutVisual";

const ParticleCanvas = dynamic(
  () => import("@/components/three/ParticleCanvas"),
  { ssr: false },
);

const team = [
  {
    name: "Marcus Reed",
    role: "Founder & CEO",
    bio: "Former Google growth lead with 12 years in digital marketing. Built and sold two SaaS companies.",
    initials: "MR",
  },
  {
    name: "Priya Nair",
    role: "Head of Design",
    bio: "Ex-Airbnb senior designer. Led the redesign of three Y Combinator-backed startups.",
    initials: "PN",
  },
  {
    name: "Jordan Blake",
    role: "Lead Developer",
    bio: "Full-stack engineer. Previously at Shopify, built custom themes serving 500k+ visitors monthly.",
    initials: "JB",
  },
  {
    name: "Sofia Morales",
    role: "Head of Paid Media",
    bio: "Performance marketing specialist. Managed $4M+ in annual ad spend across Meta, Google, and TikTok.",
    initials: "SM",
  },
  {
    name: "Theo Park",
    role: "SEO Strategist",
    bio: "Ranked 200+ brands on page one of Google. Deep expertise in technical SEO and content strategy.",
    initials: "TP",
  },
  {
    name: "Aisha Rahman",
    role: "Client Success",
    bio: "Keeps our clients happy and our projects on track. Former consultant at McKinsey Digital.",
    initials: "AR",
  },
];

const values = [
  {
    title: "Results First",
    desc: "We don't chase vanity metrics. Every campaign, every design decision is tied to measurable business outcomes.",
  },
  {
    title: "Radical Transparency",
    desc: "No hidden fees, no jargon, no excuses. You see exactly what we're doing and why, every single week.",
  },
  {
    title: "Relentless Craft",
    desc: "We obsess over every pixel, every headline, every line of code. Good enough is never good enough for us.",
  },
  {
    title: "Long-term Partnership",
    desc: "We're not a vendor — we're a growth partner. We succeed only when you succeed, full stop.",
  },
];

const timeline = [
  {
    year: "2020",
    event:
      "Founded in New York with 2 clients and a vision to build a different kind of agency.",
  },
  {
    year: "2021",
    event: "Grew to 25 clients. Launched our Full Stack development practice.",
  },
  {
    year: "2022",
    event:
      "Hit $1M in managed ad spend. Opened our design studio and hired our first dedicated team.",
  },
  {
    year: "2023",
    event:
      "Named a top Shopify Partner agency. Expanded to serving 80+ brands across 12 countries.",
  },
  {
    year: "2024",
    event:
      "Launched proprietary analytics dashboard. Crossed 150 completed projects milestone.",
  },
  {
    year: "2025",
    event:
      "Scaling fast. Building the next generation of digital growth tools for our clients.",
  },
];

export default function About() {
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
              style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
            >
              <span className="w-10 h-px bg-red block" />
              Our Collective Story
            </div>
            <h1
              className="font-display text-[clamp(4.5rem,10vw,9rem)] leading-[0.9] tracking-wider uppercase mb-8 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
            >
              ABOUT<br />
              <span className="text-red">TRUSTED</span><br />
              MARKET
            </h1>
            <p
              className="text-offwhite/50 text-xl max-w-xl mt-8 leading-relaxed opacity-0 animate-fade-up"
              style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
            >
              A high-performance team of strategists, designers, and developers dedicated to scaling digital-first brands.
            </p>
          </div>

          {/* Right Visual */}
          <div className="hidden lg:block relative opacity-0 animate-fade-up" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            <AboutVisual />
          </div>
        </div>
      </section>

      <Ticker />

      {/* Mission / Values */}
      <section className="bg-black-mid py-32 px-6 md:px-16 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <Reveal>
            <SectionTag>Who We Are</SectionTag>
            <h2 className="font-display text-5xl md:text-6xl tracking-wider uppercase mb-8 leading-tight">
              A DIFFERENT KIND OF <span className="text-red">AGENCY</span>
            </h2>
            <div className="space-y-6 text-offwhite/60 leading-relaxed text-lg">
              <p>
                Trusted Market was founded with one conviction: that
                digital agencies were failing their clients by prioritising
                activity over outcomes.
              </p>
              <p>
                We built our team of strategists, designers, developers, and
                marketers around a single obsession — measurable growth. Not
                impressions. Not followers. Revenue.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-black-border border border-black-border">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="bg-black-card p-10 hover:bg-[#151515] transition-all duration-500 group h-full relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-px h-0 bg-red group-hover:h-full transition-all duration-700" />
                  <div className="w-8 h-px bg-red mb-6" />
                  <h3 className="font-display text-2xl tracking-wider uppercase mb-4 group-hover:text-red transition-colors duration-300">
                    {v.title}
                  </h3>
                  <p className="text-offwhite/50 text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-red py-20 px-6 md:px-16 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-dark/20 to-transparent opacity-50" />
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 text-center relative z-10">
          {[
            { num: 150, suf: "+", label: "Projects Delivered" },
            { num: 80, suf: "+", label: "Active Clients" },
            { num: 12, suf: "", label: "Countries Served" },
            { num: 98, suf: "%", label: "Client Retention" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="font-display text-7xl text-white leading-none mb-2">
                <Counter target={s.num} suffix={s.suf} />
              </div>
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/80 font-bold">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-black-DEFAULT py-32 px-6 md:px-16 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-20">
          <Reveal>
            <SectionTag>Our Journey</SectionTag>
            <h2 className="font-display text-5xl md:text-6xl tracking-wider uppercase mb-8 leading-tight">
              EVOLUTION & <span className="text-red">GROWTH</span>
            </h2>
          </Reveal>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[7px] top-4 bottom-4 w-px bg-red/20" />

            <div className="space-y-16">
              {timeline.map((t, i) => (
                <Reveal key={t.year} delay={i * 80}>
                  <div className="flex gap-12 items-start relative pl-4">
                    {/* Node */}
                    <div className="absolute left-[-2px] top-1.5 w-4 h-4 rounded-full border border-red bg-black-DEFAULT z-10 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-red rounded-full" />
                    </div>
                    
                    <div className="flex-shrink-0 w-24 -mt-1">
                      <span className="font-display text-2xl text-red tracking-wider block leading-none text-right">
                        {t.year}
                      </span>
                    </div>
                    
                    <div>
                      <p className="text-offwhite/70 text-lg leading-relaxed max-w-xl italic font-light">
                        {t.event}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-black-mid py-32 px-6 md:px-16 relative">
        <Reveal className="mb-20 text-center max-w-3xl mx-auto">
          <SectionTag className="justify-center">The Team</SectionTag>
          <SectionTitle>
            MEET THE <span className="text-red">HUMANS</span>
          </SectionTitle>
          <p className="text-offwhite/50 text-lg mx-auto">
            12 specialists. No juniors. Every client works directly with the
            senior people building their digital presence.
          </p>
        </Reveal>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black-border border border-black-border">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 80}>
              <div className="bg-black-card p-10 group hover:bg-[#151515] transition-all duration-500 h-full flex flex-col items-center text-center">
                <div className="clip-avatar w-20 h-20 bg-red-dark flex items-center justify-center font-display text-3xl text-white mb-8 group-hover:bg-red group-hover:shadow-[0_0_30px_rgba(232,25,44,0.4)] transition-all duration-500">
                  {member.initials}
                </div>
                <h3 className="font-display text-3xl tracking-wider uppercase mb-2 group-hover:text-red transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="font-mono text-xs text-red tracking-widest uppercase mb-6 font-bold">
                  {member.role}
                </p>
                <p className="text-offwhite/50 text-sm leading-relaxed max-w-xs">
                  {member.bio}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Legacy Mission Vision Section - Retained but improved */}
      <section className="bg-black-DEFAULT py-32 px-6 md:px-16 border-t border-black-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <Reveal>
            <div className="p-12 bg-black-card border border-black-border hover:border-red/40 transition-colors duration-500 h-full relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 font-display text-8xl text-white/[0.03] pointer-events-none group-hover:text-red/[0.05] transition-colors">01</div>
              <div className="w-12 h-px bg-red mb-8" />
              <h3 className="font-display text-4xl tracking-wider uppercase mb-6"> Our <span className="text-red">Mission</span></h3>
              <p className="text-offwhite/60 leading-relaxed text-lg font-light">
                To deliver high-impact digital solutions that create
                measurable, lasting value for the brands we partner with — at
                every stage of their growth journey.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="p-12 bg-black-card border border-black-border hover:border-red/40 transition-colors duration-500 h-full relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 font-display text-8xl text-white/[0.03] pointer-events-none group-hover:text-red/[0.05] transition-colors">02</div>
              <div className="w-12 h-px bg-red mb-8" />
              <h3 className="font-display text-4xl tracking-wider uppercase mb-6"> Our <span className="text-red">Vision</span></h3>
              <p className="text-offwhite/60 leading-relaxed text-lg font-light">
                To become the most trusted digital growth partner for ambitious
                brands worldwide — known not for our size, but for the impact
                we consistently deliver.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative bg-black-mid py-32 px-6 md:px-16 overflow-hidden text-center border-t border-black-border">
        <ParticleCanvas color={0xE8192C} count={300} opacity={0.3} />
        <div className="absolute inset-0 bg-gradient-to-b from-black-mid via-transparent to-black-mid z-[1]" />
        <Reveal className="relative z-[2]">
          <h2 className="font-display text-[clamp(3.5rem,8vw,8rem)] leading-none tracking-wider uppercase mb-8">
            JOIN OUR <span className="text-red">JOURNEY</span>
          </h2>
          <p className="text-offwhite/50 text-xl max-w-lg mx-auto mb-12 font-light">
            Ready to work with a dedicated team that treats your business like their own?
          </p>
          <BtnPrimary href="/contact">Start a Conversation</BtnPrimary>
        </Reveal>
      </section>
    </>
  );
}
