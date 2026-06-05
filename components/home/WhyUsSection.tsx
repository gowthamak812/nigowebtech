const whyUs = [
  {
    title: 'Premium UI/UX',
    desc: 'Pixel-perfect designs that convert visitors into customers.',
    color: '#6366f1',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: 'SEO Optimized',
    desc: 'Built for top search rankings and organic traffic from day one.',
    color: '#10b981',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: 'Fast Performance',
    desc: 'Sub-second load times on all devices — no compromises.',
    color: '#f97316',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Scalable Architecture',
    desc: 'Systems that grow seamlessly as your business scales.',
    color: '#3b82f6',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: 'Secure Applications',
    desc: 'Enterprise-grade security standards baked into every project.',
    color: '#a855f7',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: 'Affordable Pricing',
    desc: 'Premium quality at rates that make business sense.',
    color: '#f59e0b',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Dedicated Support',
    desc: 'A responsive team that stays with you long after launch.',
    color: '#ec4899',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
  },
  {
    title: 'Long-term Partnership',
    desc: 'We invest in your success — not just your project deadline.',
    color: '#38bdf8',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
      </svg>
    ),
  },
];

const stats = [
  { value: '50+', label: 'Projects Delivered', color: '#6366f1' },
  { value: '4.9★', label: 'Average Rating', color: '#f59e0b' },
  { value: '100%', label: 'Client Satisfaction', color: '#10b981' },
  { value: '<2hr', label: 'Response Time', color: '#38bdf8' },
];

export default function WhyUsSection() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #f5f3ff 0%, #ffffff 45%, #eff6ff 100%)' }}
    >
      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, rgba(99,102,241,0.07) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }} />

      {/* Indigo glow top-left */}
      <div className="absolute pointer-events-none" style={{
        top: '-10%', left: '-5%', width: '50%', height: '60%',
        background: 'radial-gradient(circle, rgba(99,102,241,0.10) 0%, transparent 65%)',
        filter: 'blur(80px)',
      }} />

      {/* Sky glow bottom-right */}
      <div className="absolute pointer-events-none" style={{
        bottom: '-10%', right: '-5%', width: '45%', height: '55%',
        background: 'radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 65%)',
        filter: 'blur(80px)',
      }} />

      <div className="container relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
            style={{ background: 'rgba(99,102,241,0.10)', color: '#6366f1', border: '1px solid rgba(99,102,241,0.22)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            Why Choose Us
          </span>
          <h2 className="mb-4" style={{ color: '#0f172a' }}>
            The{' '}
            <span style={{
              background: 'linear-gradient(135deg, #6366f1 0%, #38bdf8 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              Nigoweb
            </span>{' '}
            Advantage
          </h2>
          <div className="mx-auto mb-5 h-px w-20 rounded-full"
            style={{ background: 'linear-gradient(to right, transparent, #6366f1, #38bdf8, transparent)' }} />
          <p className="max-w-xl mx-auto text-base font-medium" style={{ color: '#64748b' }}>
            Design excellence, technical mastery, and a genuine commitment to your growth.
          </p>
        </div>

        {/* ── 4×2 Cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {whyUs.map((w, i) => (
            <div
              key={i}
              className="group relative rounded-3xl overflow-hidden cursor-default transition-all duration-400 hover:-translate-y-2"
              style={{
                background: `linear-gradient(145deg, #ffffff 0%, ${w.color}08 100%)`,
                border: `1px solid ${w.color}25`,
                boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
              }}
            >
              {/* Top color bar */}
              <div className="h-0.5 w-full" style={{ background: `linear-gradient(to right, ${w.color}, ${w.color}40)` }} />

              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at top left, ${w.color}18, transparent 65%)` }} />

              {/* Large decorative number */}
              <div className="absolute bottom-1 right-3 font-black leading-none select-none pointer-events-none"
                style={{ fontSize: '5.5rem', color: `${w.color}09`, fontFamily: 'Outfit, sans-serif' }}>
                {String(i + 1).padStart(2, '0')}
              </div>

              <div className="relative z-10 p-6">
                {/* Icon */}
                <div
                  className="w-13 h-13 w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${w.color}18`, border: `1.5px solid ${w.color}38`, color: w.color }}
                >
                  {w.icon}
                </div>

                <h3 className="font-bold text-base mb-2 leading-snug" style={{ color: '#0f172a' }}>{w.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>{w.desc}</p>

                {/* Bottom accent */}
                <div className="mt-5 h-0.5 w-7 rounded-full transition-all duration-400 group-hover:w-full"
                  style={{ background: `linear-gradient(to right, ${w.color}, transparent)` }} />
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
