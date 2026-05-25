'use client';
import Link from 'next/link';

const features = [
  { emoji: '🎯', label: 'Result-Driven' },
  { emoji: '⚡', label: 'Fast Delivery' },
  { emoji: '🔒', label: 'Secure Code' },
  { emoji: '✨', label: 'Premium Quality' },
  { emoji: '💡', label: 'Innovative' },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex flex-col overflow-hidden">

      {/* ── BACKGROUND: Animated Aurora ── */}
      <div className="absolute inset-0 pointer-events-none select-none" style={{ background: '#050914' }}>

        {/* Blob 1 — cyan/sky, top-right */}
        <div
          className="absolute rounded-full animate-blob"
          style={{
            top: '-18%', right: '-10%',
            width: '750px', height: '750px',
            background: 'radial-gradient(circle at 40% 40%, rgba(56,189,248,0.75) 0%, rgba(59,130,246,0.45) 42%, transparent 68%)',
            filter: 'blur(85px)',
          }}
        />

        {/* Blob 2 — violet/indigo, bottom-left */}
        <div
          className="absolute rounded-full animate-blob"
          style={{
            bottom: '-22%', left: '-10%',
            width: '720px', height: '720px',
            background: 'radial-gradient(circle at 55% 55%, rgba(139,92,246,0.70) 0%, rgba(99,102,241,0.40) 42%, transparent 68%)',
            filter: 'blur(90px)',
            animationDelay: '-5s',
          }}
        />

        {/* Blob 3 — orange, top-left */}
        <div
          className="absolute rounded-full animate-blob"
          style={{
            top: '-8%', left: '-6%',
            width: '560px', height: '560px',
            background: 'radial-gradient(circle at 50% 50%, rgba(249,115,22,0.55) 0%, rgba(245,101,0,0.28) 45%, transparent 68%)',
            filter: 'blur(100px)',
            animationDelay: '-9s',
          }}
        />

        {/* Blob 4 — pink/rose, right-center */}
        <div
          className="absolute rounded-full animate-blob"
          style={{
            top: '35%', right: '-5%',
            width: '480px', height: '480px',
            background: 'radial-gradient(circle at 50% 50%, rgba(236,72,153,0.38) 0%, transparent 68%)',
            filter: 'blur(110px)',
            animationDelay: '-12s',
          }}
        />

        {/* Blob 5 — teal, bottom-center */}
        <div
          className="absolute rounded-full animate-blob"
          style={{
            bottom: '0%', left: '30%',
            width: '420px', height: '420px',
            background: 'radial-gradient(circle at 50% 50%, rgba(20,184,166,0.28) 0%, transparent 68%)',
            filter: 'blur(110px)',
            animationDelay: '-7s',
          }}
        />

        {/* Dark vignette over center for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 78% 75% at 50% 46%, rgba(5,9,20,0.90) 0%, rgba(5,9,20,0.55) 52%, transparent 100%)',
          }}
        />

        {/* Edge darkening */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 150% 150% at 50% 50%, transparent 42%, rgba(5,9,20,0.70) 100%)',
          }}
        />

        {/* Bottom fade */}
        <div
          className="absolute inset-x-0 bottom-0 h-[30%]"
          style={{ background: 'linear-gradient(to top, rgba(5,9,20,1) 0%, rgba(5,9,20,0.5) 60%, transparent 100%)' }}
        />

        {/* Subtle grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

      </div>

      {/* ── Main content ── */}
      <div className="flex-1 flex items-center">
        <div className="container relative z-10 pt-32 pb-16 sm:pt-36 lg:py-40">
          <div className="max-w-4xl mx-auto text-center">

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 text-xs font-bold uppercase tracking-widest"
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1.5px solid rgba(255,255,255,0.13)',
                color: 'rgba(203,213,225,0.85)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              Premium Digital Agency · Coimbatore
            </div>

            {/* Headline */}
            <h1
              className="mb-6"
              style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontWeight: 900,
                lineHeight: 1.08,
                fontSize: 'clamp(2.1rem, 4.6vw, 4rem)',
                letterSpacing: '-0.03em',
              }}
            >
              <span style={{ color: '#ffffff' }}>Building </span>
              <span style={{
                background: 'linear-gradient(135deg, #fb923c 0%, #f97316 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>Websites</span>
              <br />
              <span style={{ color: '#ffffff' }}>That </span>
              <span style={{
                background: 'linear-gradient(135deg, #60a5fa 0%, #38bdf8 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>Drive </span>
              <span style={{
                background: 'linear-gradient(135deg, #f472b6 0%, #ec4899 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>Real </span>
              <span style={{
                background: 'linear-gradient(135deg, #34d399 0%, #10b981 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>Growth</span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-base lg:text-lg mb-10 leading-relaxed max-w-2xl mx-auto"
              style={{ color: 'rgba(203,213,225,0.78)', fontWeight: 400 }}
            >
              Premium web development &amp; SEO solutions tailored for your success. We blend{' '}
              <strong style={{ color: '#fb923c', fontWeight: 600 }}>stunning design</strong>
              {' '}with{' '}
              <strong style={{ color: '#60a5fa', fontWeight: 600 }}>vibrant functionality</strong>
              {' '}to scale your revenue.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-nowrap gap-2 sm:gap-4 justify-center mb-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 sm:px-7 sm:py-3 rounded-lg sm:rounded-xl font-bold text-white text-xs sm:text-sm transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'linear-gradient(135deg, #38bdf8 0%, #3b82f6 45%, #6366f1 100%)',
                  boxShadow: '0 6px 24px rgba(59,130,246,0.45)',
                }}
              >
                Free Consultation
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 sm:px-7 sm:py-3 rounded-lg sm:rounded-xl font-bold text-white text-xs sm:text-sm transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 100%)',
                  border: '1.5px solid rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                }}
              >
                View Our Portfolio
              </Link>
            </div>

            {/* Social proof */}
            <div className="flex justify-center mb-10">
              <div
                className="inline-flex items-center gap-2 sm:gap-4 px-3 py-2.5 sm:px-6 sm:py-3.5 rounded-2xl"
                style={{
                  background: 'rgba(255,255,255,0.07)',
                  border: '1.5px solid rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(16px)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.25)',
                }}
              >
                <div className="flex -space-x-2">
                  {[21, 22, 23, 24].map((id, i) => (
                    <img key={i} src={`https://i.pravatar.cc/48?u=${id}`} alt="Client"
                      className="w-7 h-7 sm:w-9 sm:h-9 rounded-full object-cover"
                      style={{ border: '2px solid rgba(255,255,255,0.22)', zIndex: 4 - i }} />
                  ))}
                </div>
                <div className="w-px h-7 sm:h-9 flex-shrink-0" style={{ background: 'rgba(255,255,255,0.1)' }} />
                <div className="text-left">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <div className="flex gap-0.5 text-amber-400 text-xs sm:text-sm leading-none">★★★★★</div>
                    <span className="text-white font-bold text-xs sm:text-sm">4.9/5</span>
                  </div>
                  <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.35)' }}>
                    Trusted by 50+ Businesses
                  </p>
                </div>
              </div>
            </div>

            {/* Feature chips */}
            <div className="flex flex-wrap justify-center gap-2">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-1 sm:gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider cursor-default transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: 'rgba(255,255,255,0.07)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: 'rgba(203,213,225,0.8)',
                    backdropFilter: 'blur(8px)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                  }}
                >
                  <span className="text-xs sm:text-sm">{f.emoji}</span>
                  {f.label}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
