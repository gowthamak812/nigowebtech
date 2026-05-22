export default function CTASection() {
  return (
    <section
      className="relative py-28 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #040a1a 0%, #081635 50%, #040a1a 100%)' }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Dot overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.09) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      {/* Sapphire glow — top-center */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(29,78,216,0.35) 0%, transparent 65%)' }}
      />

      {/* Indigo glow — bottom-left */}
      <div
        className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(79,70,229,0.22) 0%, transparent 65%)',
          transform: 'translate(-30%, 30%)',
        }}
      />

      {/* Sky blue glow — bottom-right */}
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(96,165,250,0.18) 0%, transparent 65%)',
          transform: 'translate(30%, 30%)',
        }}
      />

      <div className="container relative z-10 text-center">

        {/* Badge */}
        <div className="flex justify-center mb-7">
          <span
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest"
            style={{
              background: 'rgba(59,130,246,0.12)',
              color: '#93c5fd',
              border: '1px solid rgba(59,130,246,0.28)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Let&apos;s Build Together
          </span>
        </div>

        {/* Headline */}
        <h2
          className="mb-5 max-w-3xl mx-auto"
          style={{
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            lineHeight: '1.06',
            letterSpacing: '-0.04em',
            fontWeight: 900,
            color: '#ffffff',
          }}
        >
          Ready To{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #f97316 0%, #ec4899 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Grow
          </span>
          {' '}Your<br />Business?
        </h2>

        <p
          className="max-w-xl mx-auto font-medium mb-10 leading-relaxed"
          style={{ color: 'rgba(203,213,225,0.75)' }}
        >
          Let&apos;s create modern, scalable and high-performance digital solutions that take your business to the next level.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-full font-bold text-white text-base transition-all duration-300 hover:-translate-y-1.5"
            style={{
              background: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
              boxShadow: '0 8px 32px rgba(249,115,22,0.5)',
            }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Start Your Project
          </a>
          <a
            href="https://wa.me/919344832658"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-full font-bold text-white text-base transition-all duration-300 hover:-translate-y-1.5"
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1.5px solid rgba(255,255,255,0.2)',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
            }}
          >
            <svg className="w-5 h-5 flex-shrink-0" style={{ fill: '#25D366' }} viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat on WhatsApp
          </a>
        </div>

        {/* Social proof */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="flex -space-x-3">
            {[21, 22, 23, 24, 25].map((id, i) => (
              <img
                key={i}
                src={`https://i.pravatar.cc/48?u=${id}`}
                alt="Happy client"
                className="w-9 h-9 rounded-full object-cover"
                style={{ border: '2px solid rgba(255,255,255,0.2)', zIndex: 5 - i }}
              />
            ))}
          </div>
          <div className="text-left">
            <div className="flex gap-0.5 text-amber-400 text-sm leading-none mb-0.5">★★★★★</div>
            <p className="text-xs font-semibold" style={{ color: 'rgba(255,255,255,0.45)' }}>
              4.9 · 50+ Happy Businesses
            </p>
          </div>
        </div>

        {/* Trust chips */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {['Free Consultation', 'No Long-term Contracts', '100% Satisfaction', 'Fast Turnaround'].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(59,130,246,0.18)' }}
              >
                <svg
                  className="w-2.5 h-2.5"
                  style={{ color: '#60a5fa' }}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm font-semibold" style={{ color: 'rgba(203,213,225,0.7)' }}>
                {item}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
