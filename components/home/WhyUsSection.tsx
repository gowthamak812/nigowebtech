const whyUs = [
  { icon: '🎨', title: 'Premium UI/UX',         desc: 'Pixel-perfect designs that convert visitors into customers.', color: '#6366f1', bg: 'rgba(99,102,241,0.15)' },
  { icon: '🔍', title: 'SEO Optimized',         desc: 'Built for top search rankings from day one.', color: '#10b981', bg: 'rgba(16,185,129,0.15)' },
  { icon: '⚡', title: 'Fast Performance',      desc: 'Sub-second load times on all devices.', color: '#f59e0b', bg: 'rgba(245,158,11,0.15)' },
  { icon: '📐', title: 'Scalable Architecture', desc: 'Systems that grow as your business grows.', color: '#3b82f6', bg: 'rgba(59,130,246,0.15)' },
  { icon: '🔒', title: 'Secure Applications',   desc: 'Enterprise-grade security in every project.', color: '#fb923c', bg: 'rgba(251,146,60,0.15)' },
  { icon: '💰', title: 'Affordable Pricing',    desc: 'Premium quality without the premium price tag.', color: '#a855f7', bg: 'rgba(168,85,247,0.15)' },
  { icon: '🤝', title: 'Dedicated Support',     desc: 'A team that stays with you long after launch.', color: '#ec4899', bg: 'rgba(236,72,153,0.15)' },
  { icon: '🌱', title: 'Long-term Partnership', desc: 'We invest in your success, not just your project.', color: '#38bdf8', bg: 'rgba(56,189,248,0.15)' },
];

export default function WhyUsSection() {
  return (
    <section className="section-whyus relative py-24 overflow-hidden bg-white">
      <div className="wave-top">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ height: '60px' }}>
          <path d="M0,30 C360,0 1080,60 1440,30 L1440,0 L0,0 Z" fill="#090d16" />
        </svg>
      </div>

      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

      {/* Subtle background orbs */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[400px] rounded-full blur-[160px] pointer-events-none" style={{ background: 'rgba(99,102,241,0.06)', transform: 'translate(-50%,-50%)' }} />

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="badge mb-4">Why Choose Us</span>
          <h2 className="text-brand-navy mb-4">The <span className="gradient-text">Nigoweb</span> Advantage</h2>
          <div className="section-divider section-divider-center" />
          <p className="text-gray-500 max-w-xl mx-auto text-lg font-medium">
            Design excellence, technical mastery, and a genuine commitment to your growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUs.map((w, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-3xl p-6 border border-gray-100 shadow-sm transition-all duration-400 hover:-translate-y-2 hover:shadow-xl cursor-default"
            >
              {/* Left accent bar on hover */}
              <div
                className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: w.color }}
              />

              {/* Number */}
              <div
                className="text-[10px] font-black uppercase tracking-widest mb-3"
                style={{ color: w.color }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>

              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-4 transition-transform group-hover:scale-110"
                style={{ background: w.bg }}
              >
                {w.icon}
              </div>
              <h3 className="text-brand-navy text-sm font-bold mb-2 leading-snug">{w.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="wave-bottom">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ height: '60px' }}>
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#090d16" />
        </svg>
      </div>
    </section>
  );
}
