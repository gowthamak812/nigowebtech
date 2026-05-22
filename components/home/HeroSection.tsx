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
    <section className="relative min-h-[100vh] flex flex-col overflow-hidden bg-white">

      {/* ── Multi-corner pastel gradient ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 70% 70% at 0% 0%, rgba(186,219,255,0.55) 0%, transparent 55%)' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 70% 70% at 100% 0%, rgba(255,220,180,0.55) 0%, transparent 55%)' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 110%, rgba(255,200,230,0.45) 0%, transparent 55%)' }}
        />
      </div>

      {/* ── Subtle dot grid ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.055) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* ── Main content ── */}
      <div className="flex-1 flex items-center">
        <div className="container relative z-10 py-28 lg:py-36">
          <div className="max-w-4xl mx-auto text-center">

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 text-xs font-bold uppercase tracking-widest"
              style={{
                background: 'rgba(15,23,42,0.05)',
                border: '1.5px solid rgba(15,23,42,0.1)',
                color: '#64748b',
              }}
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
              Premium Digital Agency · Coimbatore
            </div>

            {/* ── Headline ── */}
            <h1
              className="mb-6"
              style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontWeight: 900,
                lineHeight: 1.1,
                fontSize: 'clamp(2.2rem, 5.5vw, 4.8rem)',
                letterSpacing: '-0.025em',
              }}
            >
              <span style={{ color: '#0f172a' }}>Building </span>
              <span style={{ color: '#f97316' }}>Websites</span>
              <br />
              <span style={{ color: '#0f172a' }}>That </span>
              <span style={{ color: '#3b82f6' }}>Drive </span>
              <span style={{ color: '#ec4899' }}>Real </span>
              <span style={{ color: '#10b981' }}>Growth</span>
            </h1>

            {/* ── Subtitle ── */}
            <p
              className="text-gray-500 text-base lg:text-lg mb-10 leading-relaxed max-w-2xl mx-auto"
              style={{ fontWeight: 400 }}
            >
              Premium web development &amp; SEO solutions tailored for your success. We blend{' '}
              <strong
                className="text-brand-navy underline underline-offset-4 decoration-2"
                style={{ textDecorationColor: '#f97316' }}
              >
                stunning design
              </strong>
              {' '}with{' '}
              <strong
                className="text-brand-navy underline underline-offset-4 decoration-2"
                style={{ textDecorationColor: '#06b6d4' }}
              >
                vibrant functionality
              </strong>
              {' '}to scale your revenue.
            </p>

            {/* ── CTA Buttons ── */}
            <div className="flex flex-wrap gap-4 justify-center mb-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-10 py-4 rounded-full font-bold text-white text-base transition-all duration-300 hover:-translate-y-1.5"
                style={{
                  background: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
                  boxShadow: '0 8px 32px rgba(249,115,22,0.4)',
                }}
              >
                Get Your Free Quote
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2.5 px-10 py-4 rounded-full font-bold text-brand-navy text-base transition-all duration-300 hover:-translate-y-1.5 hover:bg-brand-navy hover:text-white"
                style={{
                  background: 'white',
                  border: '2px solid #0f172a',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.07)',
                }}
              >
                View Our Portfolio
              </Link>
            </div>

            {/* ── Social proof card ── */}
            <div className="flex justify-center mb-14">
              <div
                className="inline-flex items-center gap-4 px-6 py-3.5 rounded-2xl"
                style={{
                  background: 'rgba(255,255,255,0.75)',
                  border: '1.5px solid rgba(255,255,255,0.9)',
                  backdropFilter: 'blur(16px)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
                }}
              >
                {/* Avatar stack */}
                <div className="flex -space-x-3">
                  {[21, 22, 23, 24].map((id, i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/48?u=${id}`}
                      alt="Happy client"
                      className="w-10 h-10 rounded-full object-cover"
                      style={{ border: '2.5px solid white', zIndex: 4 - i }}
                    />
                  ))}
                </div>

                <div className="w-px h-10 bg-gray-200 flex-shrink-0" />

                {/* Rating */}
                <div className="text-left">
                  <div className="flex items-center gap-2 mb-0.5">
                    <div className="flex gap-0.5 text-amber-400 text-base leading-none">★★★★★</div>
                    <span className="text-brand-navy font-bold text-sm">4.9/5 Rating</span>
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    Trusted by 50+ Businesses
                  </p>
                </div>
              </div>
            </div>

            {/* ── Feature chips ── */}
            <div className="flex flex-wrap justify-center gap-3">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest cursor-default transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                  style={{
                    background: 'rgba(255,255,255,0.8)',
                    border: '1.5px solid rgba(15,23,42,0.1)',
                    color: '#475569',
                    backdropFilter: 'blur(8px)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  }}
                >
                  <span className="text-base">{f.emoji}</span>
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
