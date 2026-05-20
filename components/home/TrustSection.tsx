const stats = [
  { value: '100+', label: 'Projects Delivered', icon: '🚀', color: '#6366f1', bg: 'rgba(99,102,241,0.15)' },
  { value: '99%',  label: 'Client Satisfaction', icon: '⭐', color: '#f59e0b', bg: 'rgba(245,158,11,0.15)' },
  { value: '5+',   label: 'Years Experience',   icon: '🏆', color: '#10b981', bg: 'rgba(16,185,129,0.15)' },
  { value: '24/7', label: 'Support Available',  icon: '🛡️', color: '#a855f7', bg: 'rgba(168,85,247,0.15)' },
];

const logos = ['TechCorp','StartupX','BuildCo','GrowthLab','NexaHub','VisionAI','DataFlow','CloudBase','InnoTech','BrandHub'];

export default function TrustSection() {
  return (
    <section className="section-trust relative py-20 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      
      <div className="container relative z-10">
        <div className="text-center mb-14">
          <span className="badge badge-indigo mb-4" style={{ background: 'rgba(99,102,241,0.1)', color: '#4f46e5', borderColor: 'rgba(99,102,241,0.2)' }}>Trusted By Businesses</span>
          <h2 className="text-brand-navy mb-4">Helping <span className="gradient-text">Startups &amp; Businesses</span> Grow</h2>
          <div className="section-divider section-divider-center" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg font-medium">
            Helping startups and businesses build modern digital solutions with scalable technologies that deliver measurable results.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center group relative overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              style={{ borderTop: `3px solid ${s.color}` }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-3 transition-transform group-hover:scale-110"
                style={{ background: s.bg }}
              >
                {s.icon}
              </div>
              <div
                className="text-4xl font-black mb-1 group-hover:scale-110 transition-transform origin-center"
                style={{ color: s.color }}
              >
                {s.value}
              </div>
              <div className="text-gray-500 text-sm font-semibold">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Logo marquee */}
        <div className="relative overflow-hidden">
          <p className="text-center text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-6">Trusted by leading companies</p>
          <div className="relative flex overflow-hidden">
            <div className="animate-marquee flex gap-8 items-center whitespace-nowrap">
              {[...logos, ...logos].map((name, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-gray-200 shadow-sm bg-white"
                >
                  <span className="w-2 h-2 rounded-full" style={{ background: `hsl(${i * 37 % 360},70%,55%)` }} />
                  <span className="text-brand-navy text-sm font-bold">{name}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-24 pointer-events-none" style={{ background: 'linear-gradient(to right, #f3f8ff, transparent)' }} />
          <div className="absolute inset-y-0 right-0 w-24 pointer-events-none" style={{ background: 'linear-gradient(to left, #f3f8ff, transparent)' }} />
        </div>
      </div>

    </section>
  );
}
