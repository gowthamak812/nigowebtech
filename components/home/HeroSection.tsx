'use client';
import Link from 'next/link';

export default function HeroSection() {
  const features = [
    {
      label: 'RESULT-DRIVEN',
      emoji: '🎯',
    },
    {
      label: 'FAST DELIVERY',
      emoji: '⚡',
    },
    {
      label: 'SECURE CODE',
      emoji: '🔒',
    },
    {
      label: 'PREMIUM QUALITY',
      emoji: '✨',
    },
    {
      label: 'INNOVATIVE',
      emoji: '💡',
    },
  ];

  return (
    <div className="relative flex flex-col w-full bg-white">
      {/* Hero Banner Area */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
            alt="IT Professionals working"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/60" />
          {/* Subtle vignette for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
        </div>

        {/* Centered Content */}
        <div className="container relative z-10 mx-auto px-6 sm:px-10 lg:px-20 py-24 flex flex-col items-center text-center animate-slide-in-up">

          {/* Premium Pill Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/25 text-white px-5 py-2 rounded-full text-sm font-semibold mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            We are an IT service agency
          </div>

          {/* Headline */}
          <h1
            className="font-bold leading-[1.1] mb-6 drop-shadow-lg tracking-tight"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', maxWidth: '900px', color: 'white' }}
          >
            We Provide Our{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: 'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #38bdf8 100%)',
              }}
            >
              World Best
            </span>
            <br />
            Service
          </h1>

          {/* Subtitle */}
          <p className="text-white/80 text-lg md:text-xl mb-10 leading-relaxed drop-shadow-md" style={{ maxWidth: '650px' }}>
            We create premium websites, scalable web applications, and AI-powered solutions that help businesses achieve long-term success.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-10">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-white px-9 py-4 rounded-full font-bold text-lg transition-all hover:-translate-y-1 shadow-[0_8px_30px_rgba(251,146,60,0.4)]"
              style={{ background: 'linear-gradient(135deg, #fb923c 0%, #f43f5e 100%)' }}
            >
              Get Your Free Quote
              <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/60 text-white px-9 py-4 rounded-full font-bold text-lg transition-all hover:-translate-y-1"
            >
              View Our Portfolio
            </Link>
          </div>

          {/* Trust / Rating Row */}
          <div className="flex items-center gap-4 justify-center mb-12">
            {/* Avatar Stack */}
            <div className="flex -space-x-3">
              {[
                'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=48&h=48&fit=crop&crop=face',
                'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=48&h=48&fit=crop&crop=face',
                'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=48&h=48&fit=crop&crop=face',
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Client"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  style={{ zIndex: 3 - i }}
                />
              ))}
            </div>

            {/* Rating */}
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5 text-amber-400 text-lg">
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <span className="text-white font-bold text-sm">4.9/5 Rating</span>
              </div>
              <span className="text-white/60 text-xs font-semibold tracking-widest uppercase">Trusted by 50+ Businesses</span>
            </div>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {features.map((f, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 hover:border-white/40 text-white px-5 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all hover:-translate-y-0.5 cursor-default"
              >
                <span>{f.emoji}</span>
                {f.label}
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
