'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

// ── Icons ────────────────────────────────────────────────────────────────────
const IconGlobe = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
  </svg>
);
const IconCode = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);
const IconPhone = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);
const IconAI = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
const IconRefresh = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);
const IconSearch = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);
const IconMegaphone = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
  </svg>
);
const IconShield = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

// ── Featured services ────────────────────────────────────────────────────────
const featured = [
  {
    Icon: IconGlobe,
    image: '/services/website-development.png',
    title: 'Website Development',
    desc: 'High-performance, SEO-optimized websites built with Next.js that load in under a second and convert visitors into customers.',
    tags: ['Next.js', 'React', 'SEO', 'Performance'],
    color: '#818cf8',
    border: 'rgba(129,140,248,0.3)',
    stat: { value: '98/100', label: 'PageSpeed Score' },
  },
  {
    Icon: IconCode,
    image: '/services/web-application.png',
    title: 'Web App Development',
    desc: 'Scalable dashboards, portals and SaaS products engineered for reliability, security and seamless user experience.',
    tags: ['Node.js', 'APIs', 'Databases', 'Auth'],
    color: '#38bdf8',
    border: 'rgba(56,189,248,0.3)',
    stat: { value: '99.9%', label: 'Uptime SLA' },
  },
  {
    Icon: IconPhone,
    image: '/services/mobile-app-development.png',
    title: 'Mobile App Development',
    desc: 'Beautiful cross-platform apps built with React Native & Flutter. One codebase — iOS and Android, both flawless.',
    tags: ['React Native', 'Flutter', 'iOS', 'Android'],
    color: '#34d399',
    border: 'rgba(52,211,153,0.3)',
    stat: { value: '10K+', label: 'App Downloads' },
  },
];

// ── Supporting services ──────────────────────────────────────────────────────
const supporting = [
  {
    Icon: IconAI,
    image: '/services/ai-integration.png',
    title: 'AI Integration',
    desc: 'Intelligent chatbots, workflow automation and smart AI features seamlessly built into your product to save time and boost efficiency.',
    tags: ['Chatbot', 'Automation', 'ML', 'OpenAI'],
    color: '#c084fc',
    border: 'rgba(192,132,252,0.25)',
  },
  {
    Icon: IconRefresh,
    image: '/services/redesign.png',
    title: 'Website Redesign',
    desc: 'Modernise your existing site with a fresh UI/UX, improved speed and a bold new brand identity that converts better.',
    tags: ['UI/UX', 'Figma', 'Branding', 'Speed'],
    color: '#fb923c',
    border: 'rgba(251,146,60,0.25)',
  },
  {
    Icon: IconSearch,
    image: '/services/seo.png',
    title: 'SEO Optimization',
    desc: 'Rank on page 1 with technical SEO, keyword strategy and content optimisation that drives consistent organic traffic growth.',
    tags: ['On-Page', 'Technical', 'Keywords', 'Analytics'],
    color: '#fbbf24',
    border: 'rgba(251,191,36,0.25)',
  },
  {
    Icon: IconMegaphone,
    image: '/services/digital-marketing.png',
    title: 'Digital Marketing',
    desc: 'Targeted Google, Meta and email campaigns engineered to generate qualified leads, increase conversions and grow your revenue.',
    tags: ['Google Ads', 'Meta', 'Email', 'Growth'],
    color: '#f472b6',
    border: 'rgba(244,114,182,0.25)',
  },
  {
    Icon: IconShield,
    image: '/services/web-maintanence.png',
    title: 'Maintenance & Support',
    desc: '24/7 monitoring, proactive security updates and reliable technical support to keep your website fast, safe and always online.',
    tags: ['Monitoring', 'Security', 'Updates', '24/7'],
    color: '#22d3ee',
    border: 'rgba(34,211,238,0.25)',
  },
];

const allServices = [...featured, ...supporting];
const GAP_PX = 32;

export default function ServicesSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const update = () => {
      setItemsPerPage(window.innerWidth < 1024 ? 1 : 3);
      setCurrentPage(0);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const totalPages = Math.ceil(allServices.length / itemsPerPage);
  const next = useCallback(() => setCurrentPage(p => (p + 1) % totalPages), [totalPages]);
  const prev = () => setCurrentPage(p => (p - 1 + totalPages) % totalPages);

  // Auto-slide every 4s
  useEffect(() => {
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, [next]);

  const pages = Array.from({ length: totalPages }, (_, i) =>
    allServices.slice(i * itemsPerPage, i * itemsPerPage + itemsPerPage)
  );


  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #040b1f 0%, #091a3f 50%, #040b1f 100%)' }}
    >
      {/* Light-to-dark transition */}
      <div className="absolute top-0 left-0 right-0 h-20 pointer-events-none z-10"
        style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.07) 0%, transparent 100%)' }}
      />
      {/* Grid pattern */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />
      {/* Dot overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.09) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }} />
      {/* Glow — top-left */}
      <div className="absolute pointer-events-none" style={{
        top: '-20%', left: '-10%', width: '55%', height: '65%',
        background: 'radial-gradient(circle, rgba(37,99,235,0.38) 0%, transparent 65%)',
        filter: 'blur(90px)',
      }} />
      {/* Glow — top-right */}
      <div className="absolute pointer-events-none" style={{
        top: '-15%', right: '-12%', width: '50%', height: '60%',
        background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 65%)',
        filter: 'blur(100px)',
      }} />
      {/* Glow — bottom-center */}
      <div className="absolute pointer-events-none" style={{
        bottom: '-15%', left: '25%', width: '50%', height: '50%',
        background: 'radial-gradient(circle, rgba(56,189,248,0.22) 0%, transparent 65%)',
        filter: 'blur(80px)',
      }} />

      <div className="container relative z-10">

        {/* Section header */}
        <div className="text-center mb-14">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            style={{ background: 'rgba(59,130,246,0.12)', color: '#60a5fa', border: '1px solid rgba(59,130,246,0.28)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Our Core Expertise
          </span>
          <h2 className="mb-4" style={{ color: '#ffffff' }}>
            Premium{' '}
            <span style={{
              background: 'linear-gradient(135deg, #60a5fa 0%, #38bdf8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Digital Services
            </span>
          </h2>
          <div className="section-divider section-divider-center" style={{ background: 'linear-gradient(90deg, #3b82f6, #38bdf8)' }} />
          <p className="max-w-2xl mx-auto font-medium" style={{ color: 'rgba(203,213,225,0.75)' }}>
            End-to-end digital solutions that help your business stand out, scale up, and stay ahead.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          {/* Prev arrow */}
          <button
            onClick={prev}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 z-20 w-12 h-12 rounded-full items-center justify-center transition-all duration-200 hover:scale-105 opacity-60 hover:opacity-100"
            style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}
            aria-label="Previous"
          >
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Overflow container: px-3 -mx-3 gives 12px shadow breathing room each side */}
          <div style={{ overflowX: 'clip', overflowY: 'visible' }}>
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentPage * 100}%)` }}
            >
              {pages.map((page, pi) => (
                <div
                  key={pi}
                  className="w-full flex-none flex"
                  style={{ gap: `${GAP_PX}px` }}
                >
                  {page.map((s, i) => (
                    <div
                      key={i}
                      style={{ width: `calc((100% - ${(itemsPerPage - 1) * GAP_PX}px) / ${itemsPerPage})`, flexShrink: 0 }}
                    >
                      <div
                        className="group rounded-3xl overflow-hidden cursor-default transition-all duration-500 hover:-translate-y-3 flex flex-col h-full"
                        style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.5)', border: `1.5px solid ${s.border}` }}
                      >
                        {/* Image */}
                        <div className="relative overflow-hidden" style={{ height: '220px', flexShrink: 0 }}>
                          <img
                            src={s.image} alt={s.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy" decoding="async"
                          />
                          {(s as any).stat && (
                            <div className="absolute top-4 right-4 px-3 py-1.5 rounded-xl text-right"
                              style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(10px)', border: `1px solid ${s.color}50` }}>
                              <div className="text-base font-black leading-none" style={{ color: s.color }}>{(s as any).stat.value}</div>
                              <div className="text-[8px] font-bold uppercase tracking-wider text-white/50">{(s as any).stat.label}</div>
                            </div>
                          )}
                          <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: `linear-gradient(to right, ${s.color}, ${s.color}60)` }} />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col flex-1 p-6" style={{ background: '#ffffff' }}>
                          {/* Title */}
                          <div style={{ display: 'grid', gridTemplateColumns: '40px 1fr', gap: '12px', alignItems: 'center', marginBottom: '12px' }}>
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                              style={{ background: `${s.color}15`, border: `1.5px solid ${s.color}35`, color: s.color }}>
                              <s.Icon />
                            </div>
                            <h3 style={{ margin: 0, fontWeight: 700, fontSize: '18px', lineHeight: '1.3', color: '#0f172a' }}>{s.title}</h3>
                          </div>

                          {/* Description — fixed 3-line height */}
                          <p style={{
                            fontSize: '14px', lineHeight: '1.6', height: '67px',
                            overflow: 'hidden', display: '-webkit-box',
                            WebkitLineClamp: 3, WebkitBoxOrient: 'vertical',
                            color: '#475569', marginBottom: '16px',
                          }}>{s.desc}</p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-1.5 overflow-hidden" style={{ height: '22px', marginBottom: '16px' }}>
                            {s.tags.map((t, j) => (
                              <span key={j} className="text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wide"
                                style={{ background: `${s.color}12`, color: s.color, border: `1px solid ${s.color}30` }}>{t}</span>
                            ))}
                          </div>

                          {/* View More */}
                          <div className="flex justify-end mt-auto">
                            <Link href="/services"
                              className="group/link inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-bold uppercase tracking-wider text-white transition-all duration-300 hover:opacity-90 hover:scale-105"
                              style={{ fontSize: '10px', background: s.color }}>
                              View More
                              <svg className="w-3 h-3 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Next arrow */}
          <button
            onClick={next}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 z-20 w-12 h-12 rounded-full items-center justify-center transition-all duration-200 hover:scale-105 opacity-60 hover:opacity-100"
            style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}
            aria-label="Next"
          >
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className="h-2.5 rounded-full transition-all duration-300"
              style={{
                width: i === currentPage ? '24px' : '10px',
                background: i === currentPage ? '#60a5fa' : 'rgba(255,255,255,0.25)',
              }}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl font-bold text-white text-sm transition-all hover:scale-105 hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, #2563eb 0%, #38bdf8 100%)',
              boxShadow: '0 8px 32px rgba(37,99,235,0.45)',
            }}
          >
            View All Services
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
