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

      {/* ── BANNER BACKGROUND ── */}
      <div className="absolute inset-0 pointer-events-none">

        {/* Base dark layer */}
        <div className="absolute inset-0" style={{ background: '#07090f' }} />

        {/* Purple / indigo orb — top-left */}
        <div
          className="absolute"
          style={{
            top: '-15%', left: '-10%',
            width: '62%', height: '75%',
            background: 'radial-gradient(circle, rgba(99,102,241,0.55) 0%, transparent 65%)',
            filter: 'blur(90px)',
          }}
        />

        {/* Orange orb — top-right */}
        <div
          className="absolute"
          style={{
            top: '-20%', right: '-12%',
            width: '58%', height: '75%',
            background: 'radial-gradient(circle, rgba(249,115,22,0.5) 0%, transparent 65%)',
            filter: 'blur(110px)',
          }}
        />

        {/* Blue orb — bottom-center */}
        <div
          className="absolute"
          style={{
            bottom: '-15%', left: '20%',
            width: '60%', height: '60%',
            background: 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 65%)',
            filter: 'blur(90px)',
          }}
        />

        {/* Pink orb — center-right */}
        <div
          className="absolute"
          style={{
            top: '35%', right: '0%',
            width: '38%', height: '50%',
            background: 'radial-gradient(circle, rgba(236,72,153,0.3) 0%, transparent 65%)',
            filter: 'blur(80px)',
          }}
        />

        {/* Green accent — bottom-left */}
        <div
          className="absolute"
          style={{
            bottom: '0%', left: '0%',
            width: '30%', height: '40%',
            background: 'radial-gradient(circle, rgba(16,185,129,0.2) 0%, transparent 65%)',
            filter: 'blur(70px)',
          }}
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />

        {/* Dot overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* Depth vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 85% 65% at 50% 45%, transparent 20%, rgba(7,9,15,0.75) 100%)',
          }}
        />
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.35)' }}>
          Scroll
        </span>
        <div
          className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5"
          style={{ border: '1.5px solid rgba(255,255,255,0.18)' }}
        >
          <div className="w-0.5 h-2 rounded-full animate-bounce" style={{ background: 'rgba(255,255,255,0.4)' }} />
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="flex-1 flex items-center">
        <div className="container relative z-10 py-28 lg:py-36">
          <div className="max-w-4xl mx-auto text-center">

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 text-xs font-bold uppercase tracking-widest"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1.5px solid rgba(255,255,255,0.14)',
                color: 'rgba(203,213,225,0.85)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              Premium Digital Agency · Coimbatore
            </div>

            {/* ── Headline ── */}
            <h1
              className="mb-6"
              style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontWeight: 900,
                lineHeight: 1.1,
                fontSize: 'clamp(1.9rem, 4.2vw, 3.6rem)',
                letterSpacing: '-0.025em',
              }}
            >
              <span style={{ color: '#ffffff' }}>Building </span>
              <span style={{ color: '#fb923c' }}>Websites</span>
              <br />
              <span style={{ color: '#ffffff' }}>That </span>
              <span style={{ color: '#60a5fa' }}>Drive </span>
              <span style={{ color: '#f472b6' }}>Real </span>
              <span style={{ color: '#34d399' }}>Growth</span>
            </h1>

            {/* ── Subtitle ── */}
            <p
              className="text-base lg:text-lg mb-10 leading-relaxed max-w-2xl mx-auto"
              style={{ color: 'rgba(203,213,225,0.8)', fontWeight: 400 }}
            >
              Premium web development &amp; SEO solutions tailored for your success. We blend{' '}
              <strong style={{ color: '#fb923c', fontWeight: 600 }}>stunning design</strong>
              {' '}with{' '}
              <strong style={{ color: '#60a5fa', fontWeight: 600 }}>vibrant functionality</strong>
              {' '}to scale your revenue.
            </p>

            {/* ── CTA Buttons ── */}
            <div className="flex flex-wrap gap-4 justify-center mb-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-10 py-4 rounded-full font-bold text-white text-base transition-all duration-300 hover:-translate-y-1.5"
                style={{
                  background: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
                  boxShadow: '0 8px 32px rgba(249,115,22,0.5)',
                }}
              >
                Get Your Free Quote
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2.5 px-10 py-4 rounded-full font-bold text-white text-base transition-all duration-300 hover:-translate-y-1.5"
                style={{
                  background: 'rgba(255,255,255,0.09)',
                  border: '1.5px solid rgba(255,255,255,0.25)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                }}
              >
                View Our Portfolio
              </Link>
            </div>

            {/* ── Social proof card ── */}
            <div className="flex justify-center mb-12">
              <div
                className="inline-flex items-center gap-4 px-6 py-3.5 rounded-2xl"
                style={{
                  background: 'rgba(255,255,255,0.07)',
                  border: '1.5px solid rgba(255,255,255,0.11)',
                  backdropFilter: 'blur(16px)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.25)',
                }}
              >
                {/* Avatar stack */}
                <div className="flex -space-x-3">
                  {[21, 22, 23, 24].map((id, i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/48?u=${id}`}
                      alt="Happy client"
                      className="w-9 h-9 rounded-full object-cover"
                      style={{ border: '2px solid rgba(255,255,255,0.25)', zIndex: 4 - i }}
                    />
                  ))}
                </div>

                <div className="w-px h-9 flex-shrink-0" style={{ background: 'rgba(255,255,255,0.12)' }} />

                {/* Rating */}
                <div className="text-left">
                  <div className="flex items-center gap-2 mb-0.5">
                    <div className="flex gap-0.5 text-amber-400 text-sm leading-none">★★★★★</div>
                    <span className="text-white font-bold text-sm">4.9/5 Rating</span>
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.38)' }}>
                    Trusted by 50+ Businesses
                  </p>
                </div>
              </div>
            </div>

            {/* ── Feature chips — single row ── */}
            <div
              className="flex flex-nowrap justify-center gap-2 overflow-x-auto"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {features.map((f, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider cursor-default transition-all duration-200 hover:-translate-y-0.5 flex-shrink-0"
                  style={{
                    background: 'rgba(255,255,255,0.07)',
                    border: '1px solid rgba(255,255,255,0.13)',
                    color: 'rgba(203,213,225,0.82)',
                    backdropFilter: 'blur(8px)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                  }}
                >
                  <span className="text-sm">{f.emoji}</span>
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
