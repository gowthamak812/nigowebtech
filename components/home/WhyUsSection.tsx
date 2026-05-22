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

export default function WhyUsSection() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(120deg, #fdf6ff 0%, #fff9f5 35%, #f0fef8 65%, #f0f5ff 100%)' }}
    >
      {/* Subtle dot grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.04) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }} />

      {/* Soft center glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 65% 50% at 50% 30%, rgba(99,102,241,0.05) 0%, transparent 65%)' }}
      />

      <div className="container relative z-10">
        <div className="text-center mb-14">
          <span className="badge mb-4">Why Choose Us</span>
          <h2 className="text-brand-navy mb-4">
            The <span className="gradient-text">Nigoweb</span> Advantage
          </h2>
          <div className="section-divider section-divider-center" />
          <p className="text-gray-500 max-w-xl mx-auto font-medium">
            Design excellence, technical mastery, and a genuine commitment to your growth.
          </p>
        </div>

        {/* 4×2 grid — each card has its own unique color as a top border only */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {whyUs.map((w, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-default"
              style={{
                border: '1px solid rgba(0,0,0,0.05)',
                borderTop: `3px solid ${w.color}`,
              }}
            >
              {/* Hover tint */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at top left, ${w.color}08, transparent 60%)` }}
              />

              <div className="p-5 relative z-10">
                {/* Number */}
                <div className="text-[10px] font-black uppercase tracking-widest mb-3"
                  style={{ color: `${w.color}70` }}>
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Icon — each card's own color */}
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{ background: `${w.color}12`, color: w.color }}
                >
                  {w.icon}
                </div>

                <h3 className="text-brand-navy text-sm font-bold mb-1.5 leading-snug">{w.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{w.desc}</p>

                {/* Bottom accent — expands on hover in card's color */}
                <div
                  className="mt-4 h-px w-6 rounded-full transition-all duration-300 group-hover:w-full"
                  style={{ background: `linear-gradient(to right, ${w.color}, transparent)` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
