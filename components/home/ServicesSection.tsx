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

// ── Featured services (large cards, top row) ─────────────────────────────────
const featured = [
  {
    Icon: IconGlobe,
    title: 'Website Development',
    desc: 'High-performance, SEO-optimized websites built with Next.js that load in under a second and convert visitors into customers.',
    tags: ['Next.js', 'React', 'SEO', 'Performance'],
    color: '#6366f1',
    gradient: 'linear-gradient(135deg, rgba(99,102,241,0.18) 0%, rgba(99,102,241,0.04) 100%)',
    border: 'rgba(99,102,241,0.22)',
    stat: { value: '98/100', label: 'PageSpeed Score' },
  },
  {
    Icon: IconCode,
    title: 'Web App Development',
    desc: 'Scalable dashboards, portals and SaaS products engineered for reliability, security and seamless user experience.',
    tags: ['Node.js', 'APIs', 'Databases', 'Auth'],
    color: '#3b82f6',
    gradient: 'linear-gradient(135deg, rgba(59,130,246,0.18) 0%, rgba(59,130,246,0.04) 100%)',
    border: 'rgba(59,130,246,0.22)',
    stat: { value: '99.9%', label: 'Uptime SLA' },
  },
  {
    Icon: IconPhone,
    title: 'Mobile App Development',
    desc: 'Beautiful cross-platform apps built with React Native & Flutter. One codebase — iOS and Android, both flawless.',
    tags: ['React Native', 'Flutter', 'iOS', 'Android'],
    color: '#10b981',
    gradient: 'linear-gradient(135deg, rgba(16,185,129,0.18) 0%, rgba(16,185,129,0.04) 100%)',
    border: 'rgba(16,185,129,0.22)',
    stat: { value: '10K+', label: 'App Downloads' },
  },
];

// ── Supporting services (compact cards, bottom row) ───────────────────────────
const supporting = [
  {
    Icon: IconAI,
    title: 'AI Integration',
    desc: 'Chatbots, automation & smart workflows built into your product.',
    color: '#a855f7',
    border: 'rgba(168,85,247,0.18)',
  },
  {
    Icon: IconRefresh,
    title: 'Website Redesign',
    desc: 'Modernise your existing site with better UI/UX and speed.',
    color: '#fb923c',
    border: 'rgba(251,146,60,0.18)',
  },
  {
    Icon: IconSearch,
    title: 'SEO Optimization',
    desc: 'Rank on page 1 with technical SEO and content strategy.',
    color: '#f59e0b',
    border: 'rgba(245,158,11,0.18)',
  },
  {
    Icon: IconMegaphone,
    title: 'Digital Marketing',
    desc: 'Targeted campaigns that generate real leads and revenue.',
    color: '#ec4899',
    border: 'rgba(236,72,153,0.18)',
  },
  {
    Icon: IconShield,
    title: 'Maintenance & Support',
    desc: '24/7 monitoring, security updates and reliable assistance.',
    color: '#38bdf8',
    border: 'rgba(56,189,248,0.18)',
  },
];

export default function ServicesSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-white">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.045) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Soft glow center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(251,146,60,0.05) 0%, transparent 60%)', filter: 'blur(40px)' }} />


      <div className="container relative z-10">

        {/* Section header */}
        <div className="text-center mb-14">
          <span className="badge mb-4">Our Core Expertise</span>
          <h2 className="text-brand-navy mb-4">
            Premium <span className="gradient-text-secondary">Digital Services</span>
          </h2>
          <div className="section-divider section-divider-center" />
          <p className="text-gray-500 max-w-2xl mx-auto font-medium">
            End-to-end digital solutions that help your business stand out, scale up, and stay ahead.
          </p>
        </div>

        {/* ── Featured row (3 large cards) ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {featured.map((s, i) => (
            <div
              key={i}
              className="group relative rounded-3xl p-7 transition-all duration-400 hover:-translate-y-2 cursor-default overflow-hidden"
              style={{ background: s.gradient, border: `1px solid ${s.border}` }}
            >
              {/* Hover glow overlay */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ boxShadow: `inset 0 0 0 1px ${s.color}50`, background: `radial-gradient(ellipse at top left, ${s.color}12, transparent 55%)` }}
              />

              {/* Stat badge top-right */}
              <div
                className="absolute top-5 right-5 text-right"
                style={{ color: s.color }}
              >
                <div className="text-lg font-black leading-none" style={{ fontFamily: 'Outfit, sans-serif' }}>{s.stat.value}</div>
                <div className="text-[9px] font-bold uppercase tracking-wider" style={{ color: `${s.color}80` }}>{s.stat.label}</div>
              </div>

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 relative z-10"
                style={{ background: `${s.color}22`, border: `1px solid ${s.color}35`, color: s.color }}
              >
                <s.Icon />
              </div>

              <h3 className="text-brand-navy font-bold text-lg mb-3 leading-snug relative z-10">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 relative z-10">{s.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6 relative z-10">
                {s.tags.map((t, j) => (
                  <span
                    key={j}
                    className="text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wide"
                    style={{ background: `${s.color}18`, color: s.color }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-all group-hover:gap-3 relative z-10"
                style={{ color: s.color }}
              >
                Learn More
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* ── Supporting services row (5 compact cards) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {supporting.map((s, i) => (
            <div
              key={i}
              className="group relative rounded-2xl p-5 transition-all duration-400 hover:-translate-y-1.5 cursor-default overflow-hidden"
              style={{
                background: '#ffffff',
                border: `1px solid ${s.border}`,
                boxShadow: '0 2px 16px rgba(0,0,0,0.04)',
              }}
            >
              {/* Hover fill */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at top left, ${s.color}10, transparent 65%)` }}
              />

              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 relative z-10"
                style={{ background: `${s.color}18`, color: s.color }}
              >
                <s.Icon />
              </div>

              <h3 className="text-brand-navy text-sm font-bold mb-2 leading-snug relative z-10">{s.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed relative z-10">{s.desc}</p>

              {/* Bottom accent */}
              <div
                className="mt-4 h-px w-8 rounded-full transition-all duration-400 group-hover:w-full relative z-10"
                style={{ background: `linear-gradient(to right, ${s.color}, transparent)` }}
              />
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl font-bold text-white text-sm transition-all hover:scale-105 hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)', boxShadow: '0 8px 32px rgba(99,102,241,0.35)' }}
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
