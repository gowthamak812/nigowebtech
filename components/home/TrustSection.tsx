// ── SVG Tech Logos ────────────────────────────────────────────────────────────
const LogoReact = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
    <circle cx="12" cy="12" r="2.4" fill="#61DAFB" />
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" />
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(120 12 12)" />
  </svg>
);

const LogoNextjs = () => (
  <svg viewBox="0 0 24 24" width="22" height="22">
    <circle cx="12" cy="12" r="11" fill="#000" />
    <path d="M7 17V7l10 12h-2.5L7 10.5V17z" fill="#fff" />
    <rect x="14.5" y="7" width="2" height="7" fill="#fff" />
  </svg>
);

const LogoTypeScript = () => (
  <svg viewBox="0 0 24 24" width="22" height="22">
    <rect width="24" height="24" rx="3" fill="#3178C6" />
    <path d="M13.5 13.5h2.25v5.5h2V13.5H20V12h-6.5zM11 14.5c0-.83-.67-1.5-1.5-2.5H5v1.5h3.5c.5.5.5 1 0 1.5H5V16.5h3.5c.6.6.5 1 0 1.5H5V19.5h3.5C10.33 19.5 11 18.5 11 17.5v-1c0-.6-.2-1.1-.5-1.5.3-.4.5-.9.5-1.5z" fill="#fff" />
  </svg>
);

const LogoNodejs = () => (
  <svg viewBox="0 0 24 24" width="22" height="22">
    <path d="M12 2L3 7v10l9 5 9-5V7z" fill="#339933" />
    <text x="12" y="15" textAnchor="middle" fontSize="6" fontWeight="900" fill="#fff" fontFamily="sans-serif">JS</text>
  </svg>
);

const LogoTailwind = () => (
  <svg viewBox="0 0 24 24" width="22" height="22">
    <path d="M12 6C9.6 6 8.1 7.2 7.5 9.6c.9-1.2 1.95-1.65 3.15-1.35.685.171 1.174.668 1.715 1.219C13.248 10.438 14.28 11.5 16.5 11.5c2.4 0 3.9-1.2 4.5-3.6-.9 1.2-1.95 1.65-3.15 1.35-.685-.171-1.174-.668-1.715-1.219C15.252 7.062 14.22 6 12 6zM7.5 11.5C5.1 11.5 3.6 12.7 3 15.1c.9-1.2 1.95-1.65 3.15-1.35.685.171 1.174.668 1.715 1.219C8.748 15.938 9.78 17 12 17c2.4 0 3.9-1.2 4.5-3.6-.9 1.2-1.95 1.65-3.15 1.35-.685-.171-1.174-.668-1.715-1.219C10.752 12.562 9.72 11.5 7.5 11.5z" fill="#38BDF8" />
  </svg>
);

const LogoPython = () => (
  <svg viewBox="0 0 24 24" width="22" height="22">
    <defs>
      <linearGradient id="pyGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#3776AB" />
        <stop offset="1" stopColor="#FFD43B" />
      </linearGradient>
    </defs>
    <path d="M12 2C9 5 7 8 7 12c0 3 1.5 5.5 5 7.5.5-1 .5-2 .5-2V4.5C12.5 3.5 12 2 12 2z" fill="#3776AB" />
    <path d="M12 2c3 3 5 6 5 10 0 3-1.5 5.5-5 7.5-.5-1-.5-2-.5-2V4.5C11.5 3.5 12 2 12 2z" fill="#FFD43B" />
    <circle cx="9.5" cy="5.5" r="1" fill="#FFD43B" />
    <circle cx="14.5" cy="18.5" r="1" fill="#3776AB" />
  </svg>
);

const LogoGraphQL = () => (
  <svg viewBox="0 0 24 24" width="22" height="22">
    <path d="M12 2l8.66 5v10L12 22l-8.66-5V7z" fill="none" stroke="#E535AB" strokeWidth="1.5" />
    <circle cx="12" cy="2"  r="1.5" fill="#E535AB" />
    <circle cx="20.66" cy="7"  r="1.5" fill="#E535AB" />
    <circle cx="20.66" cy="17" r="1.5" fill="#E535AB" />
    <circle cx="12" cy="22" r="1.5" fill="#E535AB" />
    <circle cx="3.34" cy="17" r="1.5" fill="#E535AB" />
    <circle cx="3.34" cy="7"  r="1.5" fill="#E535AB" />
    <circle cx="12" cy="12" r="2"   fill="#E535AB" />
  </svg>
);

const LogoPostgres = () => (
  <svg viewBox="0 0 24 24" width="22" height="22">
    <ellipse cx="12" cy="6"  rx="7" ry="3" fill="#336791" />
    <rect x="5" y="6" width="14" height="9" fill="#336791" />
    <ellipse cx="12" cy="15" rx="7" ry="3" fill="#4a8fc1" />
    <path d="M5 9c0 1.65 3.13 3 7 3s7-1.35 7-3" stroke="#4a8fc1" strokeWidth="1" fill="none" />
    <text x="12" y="11.5" textAnchor="middle" fontSize="4.5" fill="#fff" fontFamily="sans-serif" fontWeight="700">SQL</text>
  </svg>
);

const LogoAWS = () => (
  <svg viewBox="0 0 24 24" width="22" height="22">
    <path d="M7 14.5c-2.2-.8-3.5-2.2-3.5-3.5C3.5 9.2 5.5 8 8 8c.5-2 2.5-3.5 5-3.5 3 0 5 2 5 4.5h.5C20.5 9 22 10.5 22 12s-1.5 3-3.5 3H7z" fill="#FF9900" />
    <path d="M8 18l-2-2h12l-2 2" fill="#FF9900" opacity=".6" />
  </svg>
);

const LogoDocker = () => (
  <svg viewBox="0 0 24 24" width="22" height="22">
    <rect x="2"   y="10" width="20" height="7" rx="2" fill="#2496ED" />
    <rect x="4"   y="12" width="2.5" height="2.5" rx=".4" fill="#fff" />
    <rect x="7.5" y="12" width="2.5" height="2.5" rx=".4" fill="#fff" />
    <rect x="11"  y="12" width="2.5" height="2.5" rx=".4" fill="#fff" />
    <rect x="14.5" y="12" width="2.5" height="2.5" rx=".4" fill="#fff" />
    <rect x="7.5" y="8.5" width="2.5" height="2.5" rx=".4" fill="#2496ED" stroke="#2496ED" />
    <rect x="11"  y="8.5" width="2.5" height="2.5" rx=".4" fill="#2496ED" stroke="#2496ED" />
  </svg>
);

const LogoFigma = () => (
  <svg viewBox="0 0 24 24" width="22" height="22">
    <rect x="8" y="3"    width="8" height="5.5" rx="2.75" fill="#F24E1E" />
    <rect x="8" y="9.25" width="8" height="5.5" rx="2.75" fill="#A259FF" />
    <rect x="8" y="15.5" width="8" height="5.5" rx="2.75" fill="#0ACF83" />
    <circle cx="16" cy="12" r="2.75" fill="#1ABCFE" />
  </svg>
);

const LogoMongoDB = () => (
  <svg viewBox="0 0 24 24" width="22" height="22">
    <path d="M12 2C9 5 7 8 7 12c0 3 1.5 5.5 5 7.5.5-1 .5-2 .5-2V4.5C12.5 3.5 12 2 12 2z" fill="#4DB33D" />
    <path d="M12 2c3 3 5 6 5 10 0 3-1.5 5.5-5 7.5-.5-1-.5-2-.5-2V4.5C11.5 3.5 12 2 12 2z" fill="#3FA037" />
    <circle cx="12" cy="19" r="1.5" fill="#fff" />
  </svg>
);

const LogoRedis = () => (
  <svg viewBox="0 0 24 24" width="22" height="22">
    <ellipse cx="12" cy="18" rx="9" ry="3" fill="#DC382C" opacity=".4" />
    <ellipse cx="12" cy="14" rx="9" ry="3" fill="#DC382C" opacity=".6" />
    <ellipse cx="12" cy="10" rx="9" ry="3" fill="#DC382C" />
    <path d="M3 10v4c0 1.65 4.03 3 9 3s9-1.35 9-3v-4"   fill="#DC382C" opacity=".6" />
    <path d="M3 14v4c0 1.65 4.03 3 9 3s9-1.35 9-3v-4"   fill="#DC382C" opacity=".4" />
  </svg>
);

const LogoVue = () => (
  <svg viewBox="0 0 24 24" width="22" height="22">
    <path d="M12 21L2 4h4.5L12 14l5.5-10H22z" fill="#41B883" />
    <path d="M12 21L7 12l2.25-4L12 14l2.75-6L17 12z" fill="#34495E" />
  </svg>
);

const LogoKubernetes = () => (
  <svg viewBox="0 0 24 24" width="22" height="22">
    <path d="M12 2l8 4.5v9L12 20l-8-4.5v-9z" fill="none" stroke="#326CE5" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="2.5" fill="#326CE5" />
    <line x1="12" y1="9.5" x2="12" y2="4"    stroke="#326CE5" strokeWidth="1.2" />
    <line x1="14.2" y1="10.7" x2="19" y2="7.7"  stroke="#326CE5" strokeWidth="1.2" />
    <line x1="14.2" y1="13.3" x2="19" y2="16.3" stroke="#326CE5" strokeWidth="1.2" />
    <line x1="12" y1="14.5" x2="12" y2="20"   stroke="#326CE5" strokeWidth="1.2" />
    <line x1="9.8" y1="13.3" x2="5"  y2="16.3" stroke="#326CE5" strokeWidth="1.2" />
    <line x1="9.8" y1="10.7" x2="5"  y2="7.7"  stroke="#326CE5" strokeWidth="1.2" />
  </svg>
);

const LogoGit = () => (
  <svg viewBox="0 0 24 24" width="22" height="22">
    <circle cx="6"  cy="6"  r="2.5" fill="none" stroke="#F05032" strokeWidth="1.5" />
    <circle cx="18" cy="6"  r="2.5" fill="none" stroke="#F05032" strokeWidth="1.5" />
    <circle cx="6"  cy="18" r="2.5" fill="none" stroke="#F05032" strokeWidth="1.5" />
    <path d="M6 8.5v7" stroke="#F05032" strokeWidth="1.5" />
    <path d="M8.5 6h3c2.5 0 4 1.5 4 4v4" stroke="#F05032" strokeWidth="1.5" fill="none" />
  </svg>
);

const techsRow1 = [
  { name: 'React',       color: '#61DAFB', Logo: LogoReact      },
  { name: 'Next.js',     color: '#818cf8', Logo: LogoNextjs     },
  { name: 'TypeScript',  color: '#3178C6', Logo: LogoTypeScript },
  { name: 'Node.js',     color: '#339933', Logo: LogoNodejs     },
  { name: 'Tailwind CSS',color: '#38BDF8', Logo: LogoTailwind   },
  { name: 'Python',      color: '#FFD43B', Logo: LogoPython     },
  { name: 'GraphQL',     color: '#E535AB', Logo: LogoGraphQL    },
  { name: 'PostgreSQL',  color: '#4a8fc1', Logo: LogoPostgres   },
];

const techsRow2 = [
  { name: 'AWS',        color: '#FF9900', Logo: LogoAWS        },
  { name: 'Docker',     color: '#2496ED', Logo: LogoDocker     },
  { name: 'Figma',      color: '#F24E1E', Logo: LogoFigma      },
  { name: 'MongoDB',    color: '#4DB33D', Logo: LogoMongoDB    },
  { name: 'Redis',      color: '#DC382C', Logo: LogoRedis      },
  { name: 'Vue.js',     color: '#41B883', Logo: LogoVue        },
  { name: 'Kubernetes', color: '#326CE5', Logo: LogoKubernetes },
  { name: 'Git',        color: '#F05032', Logo: LogoGit        },
];

function TechPill({ tech }: { tech: typeof techsRow1[number] }) {
  const { name, color, Logo } = tech;
  return (
    <div
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full cursor-default group transition-all duration-300 hover:-translate-y-1 flex-shrink-0"
      style={{
        background: `${color}14`,
        border: `1.5px solid ${color}38`,
        boxShadow: `0 2px 12px ${color}14`,
      }}
    >
      <div className="w-[22px] h-[22px] flex items-center justify-center flex-shrink-0">
        <Logo />
      </div>
      <span className="font-bold text-[12px] tracking-wide whitespace-nowrap" style={{ color }}>
        {name}
      </span>
    </div>
  );
}

const stats = [
  {
    value: '100+',
    label: 'Projects Delivered',
    sub: '& counting',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: '#f97316',
  },
  {
    value: '99%',
    label: 'Client Satisfaction',
    sub: '5-star average',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    color: '#ec4899',
  },
  {
    value: '5+',
    label: 'Years Experience',
    sub: 'since 2019',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    color: '#10b981',
  },
  {
    value: '24/7',
    label: 'Support Available',
    sub: 'always on',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: '#3b82f6',
  },
];

const maskStyle = {
  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
  maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
};

export default function TrustSection() {
  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{ background: '#ffffff' }}
    >
      {/* Subtle dot grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, rgba(99,102,241,0.07) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }} />

      {/* Soft indigo glow — top center */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(99,102,241,0.08) 0%, transparent 65%)' }}
      />

      {/* Warm orange glow — bottom right for depth */}
      <div className="absolute pointer-events-none"
        style={{
          bottom: '-10%', right: '-5%',
          width: '40%', height: '60%',
          background: 'radial-gradient(circle, rgba(251,146,60,0.05) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="container relative z-10">

        {/* Section header */}
        <div className="text-center mb-12">
          <span className="badge mb-4"
            style={{ background: 'rgba(99,102,241,0.08)', color: '#4f46e5', borderColor: 'rgba(99,102,241,0.2)' }}>
            Trusted By Businesses
          </span>
          <h2 className="text-brand-navy mb-4">
            Helping <span className="gradient-text-secondary">Startups &amp; Businesses</span> Grow
          </h2>
          <div className="section-divider section-divider-center" />
          <p className="text-gray-500 max-w-xl mx-auto font-medium">
            Empowering modern businesses with scalable, high-performance digital solutions that drive real growth.
          </p>
        </div>

        {/* Stats — Services-style featured cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {stats.map((s, i) => (
            <div
              key={i}
              className="group relative rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-default"
              style={{
                background: '#ffffff',
                border: `1px solid ${s.color}28`,
                boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
              }}
            >
              {/* Colored top bar */}
              <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${s.color}, ${s.color}50)` }} />

              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at top left, ${s.color}12, transparent 60%)` }}
              />

              <div className="p-4 sm:p-5 lg:p-7 flex flex-col items-center gap-2 sm:gap-3 text-center relative z-10">

                {/* Icon */}
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{ background: `${s.color}15`, color: s.color }}>
                  {s.icon}
                </div>

                {/* Large value */}
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-none"
                  style={{ color: s.color, fontFamily: 'Outfit, sans-serif' }}>
                  {s.value}
                </div>

                {/* Label */}
                <div className="text-brand-navy font-bold text-xs sm:text-sm leading-tight">{s.label}</div>

                {/* Sub badge */}
                <div className="text-[9px] sm:text-[10px] font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase tracking-wider"
                  style={{ background: `${s.color}14`, color: s.color }}>
                  {s.sub}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technologies — wrapped in a clean card */}
        <div
          className="rounded-3xl px-6 py-10 relative overflow-hidden"
          style={{ background: 'white', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 24px rgba(0,0,0,0.04)' }}
        >
          {/* Label */}
          <div className="text-center mb-8">
            <p className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.35em]"
              style={{ color: 'rgba(15,23,42,0.28)' }}>
              <span className="w-16 h-px bg-gradient-to-r from-transparent to-gray-200 inline-block" />
              Our Technologies
              <span className="w-16 h-px bg-gradient-to-l from-transparent to-gray-200 inline-block" />
            </p>
          </div>

          <div className="relative overflow-hidden mb-3" style={maskStyle}>
            <div className="animate-marquee flex gap-3 whitespace-nowrap">
              {[...techsRow1, ...techsRow1, ...techsRow1].map((tech, i) => (
                <TechPill key={i} tech={tech} />
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden" style={maskStyle}>
            <div className="animate-marquee-reverse flex gap-3 whitespace-nowrap">
              {[...techsRow2, ...techsRow2, ...techsRow2].map((tech, i) => (
                <TechPill key={i} tech={tech} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
