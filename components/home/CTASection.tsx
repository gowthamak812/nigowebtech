import Link from 'next/link';

const trustPoints = [
  { label: 'Free Consultation',  color: '#f97316', bg: 'rgba(249,115,22,0.12)'  },
  { label: 'Fast Turnaround',    color: '#34d399', bg: 'rgba(52,211,153,0.12)'  },
  { label: '100% Satisfaction',  color: '#c084fc', bg: 'rgba(192,132,252,0.12)' },
  { label: 'No Long Contracts',  color: '#60a5fa', bg: 'rgba(96,165,250,0.12)'  },
];

export default function CTASection() {
  return (
    <section
      className="relative py-24 overflow-hidden"
    >
      <img src="/bg-img.png" alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'rgba(0,0,0,0.75)' }} />

      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />

      {/* Orange / rose glow — top-left */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-20%', left: '-8%',
          width: '55%', height: '70%',
          background: 'radial-gradient(circle, rgba(249,115,22,0.22) 0%, transparent 65%)',
          filter: 'blur(100px)',
        }}
      />

      {/* Indigo glow — top-right */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-15%', right: '-10%',
          width: '50%', height: '65%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 65%)',
          filter: 'blur(100px)',
        }}
      />

      {/* Sky-blue glow — bottom-center */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-20%', left: '25%',
          width: '50%', height: '55%',
          background: 'radial-gradient(circle, rgba(56,189,248,0.14) 0%, transparent 65%)',
          filter: 'blur(90px)',
        }}
      />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">

        {/* Section label above the card */}
        <div className="flex justify-center mb-8">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest"
            style={{
              background: 'rgba(249,115,22,0.12)',
              color: '#fb923c',
              border: '1px solid rgba(249,115,22,0.25)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            Let&apos;s Work Together
          </span>
        </div>

        {/* ── Light module card ── */}
        <div
          className="relative rounded-[2rem] overflow-hidden"
          style={{
            background: '#ffffff',
            boxShadow: '0 0 0 1px rgba(255,255,255,0.08), 0 40px 120px rgba(0,0,0,0.5)',
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px]">

            {/* ── LEFT: Content ── */}
            <div
              className="p-6 sm:p-8 lg:p-14 text-left"
              style={{ borderRight: '1px solid rgba(15,23,42,0.07)', borderBottom: '1px solid rgba(15,23,42,0.07)' }}
            >
              {/* Headline */}
              <h2
                className="mb-5"
                style={{
                  fontSize: 'clamp(1.6rem, 4vw, 2.9rem)',
                  lineHeight: 1.08,
                  fontWeight: 900,
                  letterSpacing: '-0.035em',
                  color: '#0f172a',
                }}
              >
                Ready To Grow<br />
                <span
                  style={{
                    background: 'linear-gradient(135deg, #f97316 0%, #ec4899 55%, #6366f1 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Your Business?
                </span>
              </h2>

              <p
                className="mb-10 leading-relaxed"
                style={{ color: '#64748b', maxWidth: '30rem', fontSize: '0.97rem' }}
              >
                Let&apos;s create modern, scalable and high-performance digital solutions tailored to your goals — and your budget.
              </p>

              {/* Trust chips — 2 × 2 */}
              <div className="grid grid-cols-2 gap-3 max-w-sm">
                {trustPoints.map(({ label, color, bg }) => (
                  <div key={label} className="flex items-center gap-2.5">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: bg }}
                    >
                      <svg
                        className="w-3 h-3"
                        style={{ color }}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium" style={{ color: '#475569' }}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT: Actions ── */}
            <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-between gap-6">

              <div>
                <p
                  className="text-[10px] font-black uppercase tracking-[0.22em] mb-5"
                  style={{ color: '#94a3b8' }}
                >
                  Get started today
                </p>

                <div className="flex flex-row gap-2 lg:flex-col lg:gap-3">
                  <Link
                    href="/contact"
                    className="flex-1 flex items-center justify-center gap-1.5 lg:gap-2.5 py-3 px-3 lg:py-4 lg:px-6 rounded-xl lg:rounded-2xl font-bold text-white text-xs lg:text-sm transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
                      boxShadow: '0 8px 28px rgba(249,115,22,0.42)',
                    }}
                  >
                    <svg className="w-3.5 h-3.5 lg:w-4 lg:h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Start Project
                  </Link>

                  <a
                    href="https://wa.me/919344832658"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 lg:gap-2.5 py-3 px-3 lg:py-4 lg:px-6 rounded-xl lg:rounded-2xl font-bold text-xs lg:text-sm transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: 'rgba(15,23,42,0.04)',
                      border: '1.5px solid rgba(15,23,42,0.1)',
                      color: '#0f172a',
                    }}
                  >
                    <svg className="w-3.5 h-3.5 lg:w-4 lg:h-4 flex-shrink-0" style={{ fill: '#25D366' }} viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(15,23,42,0.08), transparent)' }} />

              {/* Social proof */}
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex -space-x-2">
                    {[21, 22, 23, 24, 25].map((id, i) => (
                      <img
                        key={i}
                        src={`https://i.pravatar.cc/48?u=${id}`}
                        alt="Client"
                        className="w-8 h-8 rounded-full object-cover"
                        style={{ border: '2px solid white', zIndex: 5 - i }}
                      />
                    ))}
                  </div>
                  <div>
                    <div className="text-amber-400 text-xs leading-none mb-0.5">★★★★★</div>
                    <p className="text-xs font-bold" style={{ color: '#0f172a' }}>4.8 / 5 Rating</p>
                  </div>
                </div>
                <p className="text-[11px] font-medium" style={{ color: '#94a3b8' }}>
                  Trusted by 50+ businesses across India
                </p>
              </div>

            </div>
          </div>

          {/* Multi-color brand strip at card bottom */}
          <div
            className="h-1 w-full"
            style={{ background: 'linear-gradient(90deg, #f97316, #ec4899, #6366f1, #38bdf8, #34d399)' }}
          />
        </div>

        </div>{/* end max-w-4xl */}
      </div>
    </section>
  );
}
