"use client";

import dynamic from "next/dynamic";
import {
  SectionTag,
  SectionTitle,
  Reveal,
  BtnPrimary,
  BtnOutline,
  Ticker,
} from "@/components/ui/Components";
import BlogVisual from "@/components/visuals/BlogVisual";
import Link from "next/link";
import Image from "next/image";

const ParticleCanvas = dynamic(
  () => import("@/components/three/ParticleCanvas"),
  { ssr: false },
);

const featured = {
  id: "shopify-conversion-tips",
  cat: "Shopify",
  title: "10 Proven Shopify Tweaks That Doubled Our Client's Conversion Rate",
  excerpt:
    "After optimising 50+ Shopify stores, we've isolated the 10 changes that consistently move the needle on conversion rates. No fluff — just what works.",
  author: "Jordan Blake",
  role: "Lead Developer",
  date: "Dec 18, 2025",
  readTime: "8 min read",
  initials: "JB",
  image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=1200", // High-quality Shopify/Ecommerce growth image
};

const posts = [
  {
    id: "meta-ads-2025",
    cat: "Social Media",
    title: "Meta Ads in 2025: The Strategy Changes You Cannot Ignore",
    excerpt:
      "iOS 17 changed everything again. Here's how we restructured our campaign architecture to maintain ROAS across all our clients.",
    author: "Sofia Morales",
    date: "Dec 10, 2025",
    readTime: "6 min read",
    initials: "SM",
  },
  {
    id: "nextjs-vs-wordpress",
    cat: "Development",
    title: "Next.js vs WordPress in 2025: Which Should You Actually Build On?",
    excerpt:
      "We've built on both extensively. Here's the honest, opinionated guide based on 80+ client projects — not theoretical blog posts.",
    author: "Jordan Blake",
    date: "Nov 28, 2025",
    readTime: "10 min read",
    initials: "JB",
  },
  {
    id: "seo-guide-ecommerce",
    cat: "SEO",
    title:
      "The Complete Ecommerce SEO Guide: From Category Pages to Product Schema",
    excerpt:
      "Technical SEO for ecommerce is ruthless. This is the exact framework we used to take a fashion brand from Page 5 to Position 1.",
    author: "Theo Park",
    date: "Nov 15, 2025",
    readTime: "14 min read",
    initials: "TP",
  },
  {
    id: "figma-design-systems",
    cat: "Design",
    title: "How We Build Figma Design Systems That Developers Actually Love",
    excerpt:
      "Bad design handoffs are the single biggest time-waster in digital product development. Here's our 6-step system that eliminates the pain.",
    author: "Priya Nair",
    date: "Nov 4, 2025",
    readTime: "7 min read",
    initials: "PN",
  },
  {
    id: "ecommerce-cro",
    cat: "Ecommerce",
    title:
      "CRO for Ecommerce: The 15 Tests That Move Revenue, Not Just Numbers",
    excerpt:
      "Most CRO articles talk about button colours. We talk about what actually drives revenue. Here are the tests with the biggest impact.",
    author: "Marcus Reed",
    date: "Oct 22, 2025",
    readTime: "9 min read",
    initials: "MR",
  },
  {
    id: "client-reporting",
    cat: "Agency",
    title:
      "How We Report Results to Clients: The Report Format That Saved Our Retention",
    excerpt:
      "Agencies lose clients because they report the wrong metrics. Here's the reporting framework we use to retain 98% of our clients year over year.",
    author: "Aisha Rahman",
    date: "Oct 10, 2025",
    readTime: "5 min read",
    initials: "AR",
  },
];

const categories = [
  "All",
  "Shopify",
  "Social Media",
  "SEO",
  "Development",
  "Design",
  "Ecommerce",
  "Agency",
];

export default function Blog() {
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
              Insights & Strategy
            </div>
            <h1
              className="font-display text-[clamp(4.5rem,10vw,9rem)] leading-[0.9] tracking-wider uppercase mb-8 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
            >
              THE<br />
              <span className="text-red">BLOG</span>
            </h1>
            <p
              className="text-offwhite/50 text-xl max-w-xl mt-8 leading-relaxed opacity-0 animate-fade-up"
              style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
            >
              Tactical frameworks, deep dives, and growth strategies from the humans behind Trusted Market.
            </p>
          </div>

          {/* Right Visual */}
          <div className="hidden lg:block relative opacity-0 animate-fade-up" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            <BlogVisual />
          </div>
        </div>
      </section>

      <Ticker />

      {/* Category filter */}
      <section className="bg-black-mid py-8 px-6 md:px-16 border-b border-black-border relative z-20">
        <div className="flex flex-wrap gap-4">
          {categories.map((c, i) => (
            <button
              key={c}
              className={`font-mono text-[10px] tracking-[0.2em] uppercase px-5 py-2.5 border transition-all duration-300
                ${i === 0 ? "border-red-dark bg-red-dark text-white" : "border-black-border text-offwhite/40 hover:border-red hover:text-white"}`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Post */}
      <section className="bg-black-mid py-24 px-6 md:px-16">
        <Reveal>
          <div 
            className="relative bg-black-card border border-black-border overflow-hidden group transition-all duration-700"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%)",
            }}
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-red via-red/50 to-transparent z-10" />
            
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr]">
              {/* Visual */}
              <div className="aspect-video lg:aspect-auto bg-black-DEFAULT relative overflow-hidden flex items-center justify-center">
                <Image 
                  src={featured.image} 
                  alt={featured.title}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-red/20 to-transparent mix-blend-overlay" />
                <div className="absolute top-8 left-8 font-mono text-[10px] text-red tracking-widest uppercase border border-red/40 px-4 py-1.5 bg-black/50 backdrop-blur-sm z-10">
                  Featured Article
                </div>
              </div>
              
              {/* Content */}
              <div className="p-10 lg:p-16 flex flex-col justify-center relative">
                <p className="font-mono text-xs text-red tracking-widest uppercase mb-6 flex items-center gap-3">
                  <span className="w-6 h-px bg-red/40 block" />
                  {featured.cat}
                </p>
                <h2 className="font-display text-4xl md:text-5xl tracking-wider uppercase leading-[1.1] mb-6 group-hover:text-red transition-colors duration-500">
                  {featured.title}
                </h2>
                <p className="text-offwhite/50 text-lg leading-relaxed mb-10 max-w-xl font-light">
                  {featured.excerpt}
                </p>
                
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-4">
                    <div className="clip-avatar w-12 h-12 bg-red-dark flex items-center justify-center font-display text-white text-lg group-hover:bg-red transition-colors">
                      {featured.initials}
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-wider">{featured.author}</p>
                      <p className="font-mono text-[10px] text-offwhite/30 tracking-widest uppercase mt-0.5">
                        {featured.date} · {featured.readTime}
                      </p>
                    </div>
                  </div>
                  
                  <Link
                    href={`/blog/${featured.id}`}
                    className="w-12 h-12 rounded-full border border-offwhite/10 flex items-center justify-center text-offwhite/60 hover:bg-red hover:border-red hover:text-white transition-all duration-300 text-lg"
                  >
                    ↗
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Post Grid */}
      <section className="bg-black-mid pb-32 px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <Reveal key={post.id} delay={i * 60}>
              <article 
                className="bg-black-card p-10 h-full flex flex-col group hover:bg-[#1a1a1a] transition-all duration-300 relative overflow-hidden"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%)",
                }}
              >
                <div className="absolute top-0 left-0 w-full h-0.5 bg-red scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                
                <div className="flex items-start justify-between mb-8">
                  <span className="font-mono text-[10px] text-red tracking-widest uppercase border border-red/20 px-3 py-1 bg-black/20">
                    {post.cat}
                  </span>
                  <span className="font-mono text-[10px] text-offwhite/30 tracking-widest uppercase">
                    {post.readTime}
                  </span>
                </div>

                <h3 className="font-display text-2xl tracking-wider uppercase leading-tight mb-5 group-hover:text-red transition-colors duration-300 flex-grow font-semibold">
                  {post.title}
                </h3>

                <p className="text-offwhite/50 text-sm leading-relaxed mb-8 line-clamp-3 font-light">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto pt-8 border-t border-black-border">
                  <div className="flex items-center gap-3">
                    <div className="clip-avatar w-9 h-9 bg-red-dark flex items-center justify-center font-display text-white text-sm group-hover:bg-red transition-colors">
                      {post.initials}
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider">{post.author}</p>
                      <p className="font-mono text-[9px] text-offwhite/30 tracking-widest uppercase">
                        {post.date}
                      </p>
                    </div>
                  </div>
                  <Link
                    href={`/blog/${post.id}`}
                    className="w-10 h-10 rounded-full border border-black-border flex items-center justify-center text-offwhite/40 group-hover:border-red group-hover:text-red transition-all duration-300"
                  >
                    ↗
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Load more */}
        <div className="text-center mt-20">
          <Link 
            href="#" 
            className="inline-block font-mono text-[10px] tracking-[0.3em] uppercase px-12 py-5 border border-white/10 text-white/60 hover:border-red hover:text-red hover:bg-red/5 transition-all duration-300"
          >
            Load More Articles
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-black-DEFAULT py-32 px-6 md:px-16 relative overflow-hidden border-t border-black-border">
        <div className="absolute inset-0 opacity-20">
          <ParticleCanvas color={0xE8192C} count={150} opacity={0.2} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black-DEFAULT via-transparent to-black-DEFAULT z-[1]" />
        
        <Reveal className="max-w-3xl mx-auto text-center relative z-[2]">
          <div className="flex flex-col items-center">
            <span className="w-12 h-px bg-red mb-8" />
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-red font-bold mb-4">
              Intelligence Briefing
            </p>
            <h2 className="font-display text-5xl md:text-7xl tracking-wider uppercase text-white mb-8 leading-tight">
              THE <span className="text-red">WEEKLY</span> INSIGHT
            </h2>
            <p className="text-offwhite/50 text-lg leading-relaxed mb-12 max-w-sm mx-auto font-light">
              Strategic growth insights delivered to your inbox every Friday. No fluff, just results.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 w-full max-w-lg mx-auto">
              <input
                type="email"
                required
                placeholder="your@email.com"
                className="flex-1 bg-black-card border border-black-border text-white px-6 py-4 text-sm outline-none focus:border-red transition-colors placeholder:text-white/20 font-mono"
              />
              <button
                type="submit"
                className="bg-red text-white font-bold text-[11px] tracking-[0.2em] uppercase px-10 py-4 hover:bg-red-dark transition-all duration-300 shadow-[0_0_20px_rgba(232,25,44,0.2)]"
              >
                Subscribe
              </button>
            </form>
            <p className="font-mono text-[10px] text-white/20 tracking-widest mt-6 uppercase">
              Join 5,000+ Founders & Marketers
            </p>
          </div>
        </Reveal>
      </section>

      {/* Final CTA */}
      <section className="relative bg-black-mid py-32 px-6 md:px-16 overflow-hidden text-center border-t border-black-border">
        <Reveal className="relative z-[2]">
          <SectionTag className="justify-center">Ready to Grow?</SectionTag>
          <h2 className="font-display text-[clamp(3.5rem,8vw,8rem)] leading-none tracking-wider uppercase mb-8">
            START YOUR <span className="text-red">JOURNEY</span>
          </h2>
          <p className="text-offwhite/50 text-xl max-w-lg mx-auto mb-12 font-light">
            Move from reading strategy to executing it. Get your free high-performance audit.
          </p>
          <BtnPrimary href="/contact">Book Free Consultation</BtnPrimary>
        </Reveal>
      </section>
    </>
  );
}
