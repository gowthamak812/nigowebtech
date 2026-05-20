export default function CTASection() {
  return (
    <section className="relative py-28 overflow-hidden" style={{ background: '#ffffff' }}>
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

      {/* Glow orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[180px] animate-blob pointer-events-none" style={{ background: 'rgba(99,102,241,0.12)', transform: 'translate(30%,-30%)' }} />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[180px] animate-blob pointer-events-none" style={{ background: 'rgba(251,146,60,0.08)', transform: 'translate(-30%,30%)', animationDelay: '4s' }} />
      <div className="absolute top-1/2 left-1/2 w-[900px] h-[450px] rounded-full blur-[220px] pointer-events-none" style={{ background: 'rgba(168,85,247,0.06)', transform: 'translate(-50%,-50%)' }} />

      <div className="container relative z-10 text-center">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest"
            style={{ background: 'rgba(99,102,241,0.08)', color: '#4f46e5', border: '1px solid rgba(99,102,241,0.15)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            Let&apos;s Build Together
          </span>
        </div>

        <h2
          className="text-brand-navy mb-6 max-w-3xl mx-auto"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: 900 }}
        >
          Ready To{' '}
          <span style={{ background: 'linear-gradient(135deg, #fb923c 0%, #ec4899 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Grow
          </span>
          {' '}Your Business?
        </h2>

        <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium mb-12">
          Let&apos;s create modern, scalable and high-performance digital solutions that take your business to the next level.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="/contact"
            id="cta-start-project"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-2xl font-bold text-white text-base transition-all hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #fb923c 0%, #ec4899 50%, #6366f1 100%)', boxShadow: '0 12px 40px rgba(251,146,60,0.35)' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Start Project
          </a>
          <a
            href="https://wa.me/919344832658"
            id="cta-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-2xl font-bold text-brand-navy text-base transition-all hover:scale-105"
            style={{ background: 'white', border: '1.5px solid rgba(15,23,42,0.15)', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
          >
            <svg className="w-5 h-5 fill-current text-[#25D366]" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat on WhatsApp
          </a>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          {['✓ Free Consultation', '✓ No Long-term Contracts', '✓ 100% Satisfaction Guarantee', '✓ Fast Turnaround'].map((item, i) => (
            <span key={i} className="font-semibold">{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
