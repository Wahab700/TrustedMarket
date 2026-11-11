"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import {
  SectionTag,
  SectionTitle,
  Reveal,
  Ticker,
} from "@/components/ui/Components";
import ContactVisual from "@/components/visuals/ContactVisual";

const ParticleCanvas = dynamic(
  () => import("@/components/three/ParticleCanvas"),
  { ssr: false },
);

const services = [
  "Ecommerce / Shopify",
  "Social Media Marketing",
  "WordPress Design",
  "Figma UI/UX Design",
  "Full Stack Development",
  "SEO Optimization",
  "Rent a Car",
  "Car Sale & Purchase",
  "Mobile Phone Sale & Purchase",
  "Multiple Services",
  "Not sure yet",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-black-DEFAULT pt-40 pb-32 px-6 md:px-16 relative overflow-hidden border-b border-black-border">
        <div className="absolute inset-0 opacity-10">
          <ParticleCanvas color={0xe8192c} count={100} opacity={0.2} />
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          {/* Left Content */}
          <div>
            <div
              className="font-mono text-xs text-red tracking-[0.3em] uppercase mb-6 flex items-center gap-4 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
            >
              <span className="w-10 h-px bg-red block" />
              Get In Touch
            </div>
            <h1
              className="font-display text-[clamp(4.5rem,10vw,9rem)] leading-[0.9] tracking-wider uppercase mb-8 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
            >
              LET&apos;S<br />
              <span className="text-red">CONNECT</span>
            </h1>
            <p
              className="text-offwhite/50 text-xl max-w-xl mt-8 leading-relaxed opacity-0 animate-fade-up"
              style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
            >
              Have a project in mind? Book a free strategy call or drop us a
              message and we&apos;ll get back to you within 24 hours.
            </p>
          </div>

          {/* Right Visual */}
          <div className="hidden lg:block relative opacity-0 animate-fade-up" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            <ContactVisual />
          </div>
        </div>
      </section>

      <Ticker />

      {/* Main Content */}
      <section className="bg-black-mid py-32 px-6 md:px-16 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-20">
          {/* Info Column */}
          <div className="relative z-10">
            <Reveal>
              <SectionTag>Contact Info</SectionTag>
              <h2 className="font-display text-5xl tracking-wider uppercase mb-12">
                REACH <span className="text-red">OUT</span>
              </h2>
            </Reveal>

            <div className="space-y-2">
              {[
                {
                  label: "Email",
                  value: "hello@trustedmarket.agency",
                  icon: "✉",
                  href: "mailto:hello@trustedmarket.agency",
                },
                {
                  label: "Phone",
                  value: "+1 (555) 234-5678",
                  icon: "☎",
                  href: "tel:+15552345678",
                },
                {
                  label: "Address",
                  value: "123 Market Street, New York, NY 10001",
                  icon: "◎",
                  href: "#",
                },
                {
                  label: "Business Hours",
                  value: "Mon–Fri, 9am–6pm EST",
                  icon: "◷",
                  href: "#",
                },
              ].map((item, i) => (
                <Reveal key={item.label} delay={i * 80}>
                  <a
                    href={item.href}
                    className="flex gap-6 items-start p-8 border-b border-black-border group hover:bg-black-card transition-all duration-500 relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-0.5 h-full bg-red scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
                    <div className="w-12 h-12 border border-black-border flex items-center justify-center text-offwhite/30 flex-shrink-0 group-hover:border-red group-hover:text-red group-hover:bg-red/5 transition-all duration-300 text-lg">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-mono text-[10px] text-red tracking-widest uppercase mb-1 font-bold">
                        {item.label}
                      </p>
                      <p className="text-base text-offwhite/50 group-hover:text-offwhite transition-colors leading-tight">
                        {item.value}
                      </p>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>

            {/* Social */}
            <Reveal delay={300}>
              <div className="mt-16">
                <p className="font-mono text-[10px] text-offwhite/30 tracking-[0.3em] uppercase mb-6">
                  Follow Our Journey
                </p>
                <div className="flex gap-4">
                  {[
                    ["LinkedIn", "in"],
                    ["Twitter/X", "𝕏"],
                    ["YouTube", "▶"],
                    ["Instagram", "ig"],
                  ].map(([label, icon]) => (
                    <a
                      key={label}
                      href="#"
                      aria-label={label}
                      className="w-12 h-12 border border-black-border flex items-center justify-center text-offwhite/40 font-mono text-xs hover:border-red hover:text-white hover:bg-red transition-all duration-400"
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Map placeholder */}
            <Reveal delay={400}>
              <div className="mt-16 aspect-video bg-black-card border border-black-border flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 opacity-5">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute border-b border-white"
                      style={{ top: `${i * 14}%`, left: 0, right: 0 }}
                    />
                  ))}
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute border-r border-white"
                      style={{ left: `${i * 11}%`, top: 0, bottom: 0 }}
                    />
                  ))}
                </div>
                <div className="relative z-10 text-center">
                  <div className="w-5 h-5 bg-red rounded-full mx-auto mb-4 animate-pulse shadow-[0_0_20px_rgba(232,25,44,0.5)]" />
                  <p className="font-mono text-[10px] text-offwhite tracking-[0.2em] uppercase font-bold">
                    HQ: NEW YORK, NY
                  </p>
                  <p className="font-mono text-[9px] text-offwhite/30 tracking-widest mt-2 group-hover:text-red transition-colors">
                    View Interactive Map →
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form Column */}
          <Reveal delay={200} className="relative">
            <div className="absolute -inset-1 bg-gradient-to-br from-red/20 via-transparent to-red/10 opacity-30 blur-2xl" />
            <div className="relative bg-black-card border border-black-border p-10 lg:p-16 h-full flex flex-col items-center">
              {submitted ? (
                <div className="flex flex-col items-center justify-center flex-grow text-center py-20">
                  <div className="w-20 h-20 bg-red flex items-center justify-center text-white text-3xl mb-8 clip-logo shadow-[0_10px_30px_rgba(232,25,44,0.3)]">
                    ✓
                  </div>
                  <h3 className="font-display text-5xl tracking-wider uppercase mb-6 leading-none">
                    MESSAGE <span className="text-red">SENT</span>
                  </h3>
                  <p className="text-offwhite/50 text-base max-w-sm leading-relaxed font-light">
                    Your request has been prioritized. Our team will review your
                    brand and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-12 font-mono text-[10px] text-red-dark tracking-[0.3em] uppercase border-b border-red-dark/30 pb-1 hover:text-red hover:border-red transition-all"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <>
                  <div className="text-center mb-12">
                    <h3 className="font-display text-4xl md:text-5xl tracking-wider uppercase mb-4 leading-none">
                      START THE <span className="text-red">PROJECT</span>
                    </h3>
                    <p className="text-offwhite/40 text-sm tracking-wide font-light max-w-sm mx-auto">
                      Fill out the form below to initiate a strategic high-performance audit.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="font-mono text-[10px] text-offwhite/30 tracking-[0.2em] uppercase block font-bold">
                          Client Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Full Name"
                          className="w-full bg-black-mid/40 border border-black-border text-offwhite px-5 py-4 text-sm focus:border-red outline-none transition-all duration-300 placeholder:text-white/10 font-light"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="font-mono text-[10px] text-offwhite/30 tracking-[0.2em] uppercase block font-bold">
                          Email Endpoint *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="you@company.com"
                          className="w-full bg-black-mid/40 border border-black-border text-offwhite px-5 py-4 text-sm focus:border-red outline-none transition-all duration-300 placeholder:text-white/10 font-light"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="font-mono text-[10px] text-offwhite/30 tracking-[0.2em] uppercase block font-bold">
                          Direct Line
                        </label>
                        <input
                          type="tel"
                          placeholder="+1 (000) 000-0000"
                          className="w-full bg-black-mid/40 border border-black-border text-offwhite px-5 py-4 text-sm focus:border-red outline-none transition-all duration-300 placeholder:text-white/10 font-light"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="font-mono text-[10px] text-offwhite/30 tracking-[0.2em] uppercase block font-bold">
                          Estimated Budget
                        </label>
                        <div className="relative">
                          <select className="w-full bg-black-mid/40 border border-black-border text-offwhite/60 px-5 py-4 text-sm focus:border-red outline-none transition-all duration-300 appearance-none cursor-pointer font-light">
                            <option value="">Select Scale</option>
                            <option>Under $1,000</option>
                            <option>$1,000 – $5,000</option>
                            <option>$5,000 – $15,000</option>
                            <option>$15,000+</option>
                          </select>
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-offwhite/20">
                            ↓
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="font-mono text-[10px] text-offwhite/30 tracking-[0.2em] uppercase block font-bold">
                        Service Discipline *
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        {services.map((s) => (
                          <label
                            key={s}
                            className="flex items-center gap-3 cursor-pointer group"
                          >
                            <div className="relative flex items-center justify-center">
                              <input
                                type="radio"
                                name="service"
                                value={s}
                                className="peer appearance-none w-4 h-4 border border-black-border checked:border-red transition-all cursor-pointer"
                              />
                              <div className="absolute w-2 h-2 bg-red scale-0 peer-checked:scale-100 transition-transform pointer-events-none" />
                            </div>
                            <span className="text-[11px] text-offwhite/40 group-hover:text-offwhite transition-colors tracking-wide">
                              {s}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="font-mono text-[10px] text-offwhite/30 tracking-[0.2em] uppercase block font-bold">
                        Company URL
                      </label>
                      <input
                        type="text"
                        placeholder="https://yoursite.com"
                        className="w-full bg-black-mid/40 border border-black-border text-offwhite px-5 py-4 text-sm focus:border-red outline-none transition-all duration-300 placeholder:text-white/10 font-light"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="font-mono text-[10px] text-offwhite/30 tracking-[0.2em] uppercase block font-bold">
                        Mission Brief *
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Describe your goals, current challenges, and desired outcome…"
                        className="w-full bg-black-mid/40 border border-black-border text-offwhite px-5 py-4 text-sm focus:border-red outline-none transition-all duration-300 placeholder:text-white/10 resize-none font-light leading-relaxed"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className={`clip-btn w-full py-5 font-bold text-[11px] tracking-[0.3em] uppercase transition-all duration-500 flex items-center justify-center gap-4 shadow-[0_10px_30px_rgba(232,25,44,0.1)]
                        ${loading ? "bg-red-dark text-white/50 cursor-not-allowed" : "bg-red text-white hover:bg-red-dark hover:shadow-[0_10px_40px_rgba(232,25,44,0.25)]"}`}
                    >
                      {loading ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                          Processing…
                        </>
                      ) : (
                        "Initiate Strategy Call →"
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Quick contact strip */}
      <section className="bg-black-DEFAULT py-32 px-6 md:px-16 border-t border-black-border relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <ParticleCanvas color={0xe8192c} count={100} opacity={0.2} />
        </div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative z-10 text-center md:text-left">
          <div>
            <h3 className="font-display text-4xl md:text-5xl tracking-tight uppercase leading-none">
              URGENT <span className="text-red">ENQUIRY?</span>
            </h3>
            <p className="text-offwhite/40 text-sm mt-3 tracking-widest font-mono uppercase">
              Immediate triage available Mon–Fri, 9am–6pm EST
            </p>
          </div>
          <a
            href="tel:+15552345678"
            className="font-display text-4xl md:text-5xl tracking-widest text-red hover:text-white transition-all duration-500 border-b border-red/20 pb-2 hover:border-white"
          >
            +1 (555) 234-5678
          </a>
        </div>
      </section>
    </>
  );
}
