const stats = [
  { value: '100+', label: 'Projects Delivered', icon: '🚀', badge: '& counting',  cardCls: 'card-indigo', iconCls: 'iw-indigo', valCls: 'sv-indigo', badgeCls: 'sb-indigo' },
  { value: '99%',  label: 'Client Satisfaction', icon: '⭐', badge: '5-star avg',  cardCls: 'card-orange', iconCls: 'iw-orange', valCls: 'sv-orange', badgeCls: 'sb-orange' },
  { value: '5+',   label: 'Years Experience',   icon: '🏆', badge: 'since 2019',  cardCls: 'card-green',  iconCls: 'iw-green',  valCls: 'sv-green',  badgeCls: 'sb-green'  },
  { value: '24/7', label: 'Support Available',  icon: '🛡️', badge: 'always on',   cardCls: 'card-purple', iconCls: 'iw-purple', valCls: 'sv-purple', badgeCls: 'sb-purple' },
];

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
    <path d="M12 6C9.6 6 8.1 7.2 7.5 9.6c.9-1.2 1.95-1.65 3.15-1.35.685.171 1.174.668 1.715 1.219C13.248 10.438 14.28 11.5 16.5 11.5c2.4 0 3.9-1.2 4.5-3.6-.9 1.2-1.95 1.65-3.15 1.35-.685-.171-1.174-.668-1.715-1.219C15.252 7.062 14.22 6 12 6zM7.5 11.5C5.1 11.5 3.6 12.7 3 15.1c.9 -1.2 1.95-1.65 3.15-1.35.685.171 1.174.668 1.715 1.219C8.748 15.938 9.78 17 12 17c2.4 0 3.9-1.2 4.5-3.6-.9 1.2-1.95 1.65-3.15 1.35-.685-.171-1.174-.668-1.715-1.219C10.752 12.562 9.72 11.5 7.5 11.5z" fill="#38BDF8" />
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

// ── Tech Data ─────────────────────────────────────────────────────────────────
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

// ── Pill Component ────────────────────────────────────────────────────────────
function TechPill({ tech }) {
  const { name, color, Logo } = tech;
  return (
    <div
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full cursor-default group transition-all duration-300 hover:-translate-y-1 flex-shrink-0"
      style={{
        background: `${color}15`,
        border: `1.5px solid ${color}44`,
        boxShadow: `0 4px 14px ${color}18, inset 0 1px 0 rgba(255,255,255,0.6)`,
      }}
    >
      <div className="w-[22px] h-[22px] flex items-center justify-center flex-shrink-0">
        <Logo />
      </div>
      <span
        className="font-bold text-[12px] tracking-wide whitespace-nowrap"
        style={{ color }}
      >
        {name}
      </span>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function TrustSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-tr from-rose-50 via-white to-cyan-50">

      {/* Background mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-100/60 via-transparent to-purple-100/60 pointer-events-none" />
      <div className="glow-orb w-[700px] h-[700px] bg-pink-400/30 top-[-100px] left-[-200px] animate-blob" />
      <div className="glow-orb w-[600px] h-[600px] bg-cyan-400/30 bottom-[-100px] right-[-100px] animate-blob" style={{ animationDelay: '2s' }} />
      <div className="glow-orb w-[500px] h-[500px] bg-amber-400/30 top-[20%] left-[50%] animate-blob" style={{ animationDelay: '4s' }} />

      <div className="container relative z-10">

        {/* ── Top Heading ── */}
        <div className="text-center mb-16 animate-slide-in-up">
          <span className="badge mb-4 border-rose-200 text-rose-600 bg-rose-50/80 backdrop-blur-sm shadow-sm">
            Trusted By Businesses
          </span>
          <h2 className="text-brand-navy mb-4">
            Helping <span className="gradient-text-multi">Startups &amp; Businesses</span> Grow
          </h2>
          <div className="section-divider section-divider-center bg-gradient-to-r from-rose-400 via-purple-400 to-cyan-400" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg font-medium">
            Empowering modern businesses with scalable, high-performance digital solutions that drive real growth and measurable results.
          </p>
        </div>

        {/* ── Content + Stats Row ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20 items-center">

          {/* Left: Content & CTAs */}
          <div className="text-left animate-slide-in-up pr-0 lg:pr-4">
            <h3 className="text-brand-navy text-3xl font-bold mb-4">Why Partner With Us?</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We go beyond just delivering code. Our team focuses on building{' '}
              <strong className="text-brand-navy">future-proof digital ecosystems</strong>{' '}
              tailored to your unique business needs. We blend stunning design with robust engineering.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="mt-0.5 w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center text-[10px] shadow-sm">✓</div>
                <span className="text-gray-700 font-medium text-sm lg:text-base">Proven track record across multiple industries</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 w-5 h-5 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center text-[10px] shadow-sm">✓</div>
                <span className="text-gray-700 font-medium text-sm lg:text-base">Dedicated agile teams for rapid deployment</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 w-5 h-5 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-[10px] shadow-sm">✓</div>
                <span className="text-gray-700 font-medium text-sm lg:text-base">Post-launch support and scalable architecture</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn btn-primary hover:scale-105 px-6 py-2.5">
                Start Your Project <span className="ml-1 text-lg">🚀</span>
              </a>
              <a
                href="#portfolio"
                className="btn btn-outline bg-white/60 backdrop-blur-md border-gray-200 hover:border-indigo-400 hover:bg-white hover:text-indigo-600 hover:shadow-lg hover:shadow-indigo-500/10 px-6 py-2.5"
              >
                View Portfolio
              </a>
            </div>
          </div>

          {/* Right: Bold Stats Grid */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            {stats.map((s, i) => (
              <div
                key={i}
                className={`stat-card ${s.cardCls} rounded-[2rem] p-6 lg:p-8 text-center flex flex-col items-center justify-center gap-2 group transition-all duration-500 hover:-translate-y-1`}
              >
                {/* Icon bubble */}
                <div
                  className={`icon-bubble ${s.iconCls} w-14 h-14 rounded-[1.1rem] flex items-center justify-center text-2xl mb-1 transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105`}
                >
                  {s.icon}
                </div>

                {/* Value */}
                <div className={`text-4xl font-black tracking-tight leading-none ${s.valCls}`}>
                  {s.value}
                </div>

                {/* Label */}
                <div className="text-gray-400 font-bold tracking-[0.1em] uppercase text-[9px] lg:text-[10px]">
                  {s.label}
                </div>

                {/* Micro badge */}
                <div className={`stat-badge ${s.badgeCls} text-[9px] font-bold px-2.5 py-1 rounded-full tracking-wide uppercase`}>
                  {s.badge}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Technologies ── */}
        <div className="relative mt-4 pt-12">

          {/* Ambient blobs */}
          <div className="absolute top-0 left-1/4 w-72 h-40 rounded-full bg-pink-300/15 blur-3xl pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-72 h-40 rounded-full bg-indigo-300/15 blur-3xl pointer-events-none" />

          {/* Label */}
          <div className="text-center mb-10">
            <p className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.35em] text-brand-navy/40">
              <span className="w-12 h-px bg-gradient-to-r from-transparent to-brand-navy/15 inline-block" />
              Our Technologies
              <span className="w-12 h-px bg-gradient-to-l from-transparent to-brand-navy/15 inline-block" />
            </p>
          </div>

          {/* ── Row 1 — scrolls left ── */}
          {/*
            FIX: Use both -webkit-mask-image AND mask-image so Chrome/Safari/Edge
            all apply the fade. The plain mask-image alone only works in Firefox.
          */}
          <div
            className="relative overflow-hidden mb-4"
            style={{
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
              maskImage:       'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
            }}
          >
            <div className="animate-marquee flex gap-3 whitespace-nowrap">
              {[...techsRow1, ...techsRow1, ...techsRow1].map((tech, i) => (
                <TechPill key={i} tech={tech} />
              ))}
            </div>
          </div>

          {/* ── Row 2 — scrolls right ── */}
          <div
            className="relative overflow-hidden"
            style={{
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
              maskImage:       'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
            }}
          >
            <div className="animate-marquee-reverse flex gap-3 whitespace-nowrap">
              {[...techsRow2, ...techsRow2, ...techsRow2].map((tech, i) => (
                <TechPill key={i} tech={tech} />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/*
        ── Stat Card & Icon Bubble Styles ──────────────────────────────────────
        Add these to your global CSS or tailwind.config safelist.
        They use light tinted backgrounds that match each accent color.
      */}
      <style>{`
        .stat-card { border: 1.5px solid; }

        .card-indigo { background: linear-gradient(145deg, #eef0ff, #dde1ff); border-color: #c5caff; }
        .card-orange { background: linear-gradient(145deg, #fff4e8, #ffe8c8); border-color: #ffd4a0; }
        .card-green  { background: linear-gradient(145deg, #edfff4, #d4f8e4); border-color: #a6edc4; }
        .card-purple { background: linear-gradient(145deg, #f5eeff, #e8d8ff); border-color: #d0aaff; }

        .iw-indigo { background: linear-gradient(135deg, #6272ff, #8b9bff); box-shadow: 0 8px 24px #6272ff44; }
        .iw-orange { background: linear-gradient(135deg, #ff8c38, #ffad6a); box-shadow: 0 8px 24px #ff8c3844; }
        .iw-green  { background: linear-gradient(135deg, #22c566, #5de89a); box-shadow: 0 8px 24px #22c56644; }
        .iw-purple { background: linear-gradient(135deg, #9b5fff, #be8fff); box-shadow: 0 8px 24px #9b5fff44; }

        .sv-indigo { color: #3d52d5; }
        .sv-orange { color: #c96800; }
        .sv-green  { color: #167a42; }
        .sv-purple { color: #6b28c2; }

        .sb-indigo { background: #dde1ff; color: #3d52d5; }
        .sb-orange { background: #ffe8c8; color: #c96800; }
        .sb-green  { background: #d4f8e4; color: #167a42; }
        .sb-purple { background: #e8d8ff; color: #6b28c2; }
      `}</style>

    </section>
  );
}