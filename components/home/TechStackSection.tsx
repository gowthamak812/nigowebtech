const techs = [
  { name: 'React.js',   emoji: '⚛️',  cat: 'Frontend',   color: '#61dafb', bg: 'rgba(97,218,251,0.1)' },
  { name: 'Next.js',    emoji: '▲',   cat: 'Framework',  color: '#6366f1', bg: 'rgba(99,102,241,0.08)' },
  { name: 'Strapi',     emoji: '🎛️',  cat: 'CMS',        color: '#8c4bff', bg: 'rgba(140,75,255,0.1)' },
  { name: 'Node.js',    emoji: '🟢',  cat: 'Backend',    color: '#68a063', bg: 'rgba(104,160,99,0.1)' },
  { name: 'MongoDB',    emoji: '🍃',  cat: 'Database',   color: '#4db33d', bg: 'rgba(77,179,61,0.1)' },
  { name: 'MySQL',      emoji: '🐬',  cat: 'Database',   color: '#00758f', bg: 'rgba(0,117,143,0.1)' },
  { name: 'AWS',        emoji: '☁️',  cat: 'Cloud',      color: '#ff9900', bg: 'rgba(255,153,0,0.1)' },
  { name: 'Docker',     emoji: '🐳',  cat: 'DevOps',     color: '#2496ed', bg: 'rgba(36,150,237,0.1)' },
  { name: 'Firebase',   emoji: '🔥',  cat: 'Backend',    color: '#ffca28', bg: 'rgba(255,202,40,0.1)' },
  { name: 'GraphQL',    emoji: '◈',   cat: 'API',        color: '#e535ab', bg: 'rgba(229,53,171,0.1)' },
  { name: 'REST APIs',  emoji: '🔗',  cat: 'API',        color: '#6366f1', bg: 'rgba(99,102,241,0.1)' },
  { name: 'Flutter',    emoji: '💙',  cat: 'Mobile',     color: '#027DFD', bg: 'rgba(2,125,253,0.1)' },
];

export default function TechStackSection() {
  return (
    <section className="navy-section relative py-24 overflow-hidden">


      <div className="absolute top-0 left-0 right-0 bottom-0 grid-pattern-dark opacity-30 pointer-events-none" />

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="badge badge-green mb-4">Our Core Stack</span>
          <h2 className="text-white mb-4">
            Built with <span className="gradient-text-secondary">Best Technologies</span>
          </h2>
          <div className="section-divider section-divider-center" />
          <p className="text-blue-200 opacity-80 max-w-2xl mx-auto text-lg font-medium">
            Using modern technologies for performance, scalability and future growth.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {techs.map((t, i) => (
            <div
              key={i}
              className="group relative rounded-2xl p-5 transition-all duration-350 hover:-translate-y-2 text-center flex flex-col items-center gap-3 cursor-default"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                animationDelay: `${i * 0.05}s`,
                backdropFilter: 'blur(12px)',
              }}
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: `0 0 24px ${t.color}30`, border: `1.5px solid ${t.color}40` }}
              />

              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl transition-transform group-hover:scale-110 relative z-10"
                style={{ background: t.bg, border: `1.5px solid ${t.color}30` }}
              >
                {t.emoji}
              </div>
              <p className="text-white text-xs font-bold text-center leading-tight relative z-10">{t.name}</p>
              <span
                className="text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider relative z-10"
                style={{ background: t.bg, color: t.color }}
              >
                {t.cat}
              </span>
            </div>
          ))}
        </div>

        {/* Supporting banner */}
        <div className="mt-14 text-center">
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)' }}
          >
            <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-white opacity-90 text-sm font-semibold">Production-ready • Scalable • Future-proof Architecture</span>
          </div>
        </div>
      </div>

      <div className="wave-bottom">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ height: '60px' }}>
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#f5f7ff" />
        </svg>
      </div>
    </section>
  );
}
