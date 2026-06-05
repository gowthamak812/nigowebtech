import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Portfolio | Real Projects by Nigoweb Technologies',
  description: 'Explore our real-world projects — FinTech platforms, corporate websites, and our own SaaS product. Built with Next.js, React Native, and modern cloud infrastructure.',
};

const projects = [
  {
    number: '01',
    title: 'Sarvamtax',
    category: 'FinTech Platform',
    tagline: 'GST + Income Tax Filing, Reimagined',
    desc: 'End-to-end tax compliance platform built for Chartered Accountants and their clients. Includes a futuristic public website, a powerful web dashboard for managing GST and IT filings, and a cross-platform mobile app — all in one unified ecosystem.',
    built: ['Website', 'Web Dashboard', 'Mobile App'],
    metrics: [
      { label: 'Monthly Filings', value: '10K+' },
      { label: 'CA Users', value: '200+' },
      { label: 'Report Speed', value: '<200ms' },
      { label: 'Uptime', value: '99.9%' },
    ],
    tech: ['Next.js', 'React Native', 'Node.js', 'MongoDB', 'JWT Auth', 'AWS'],
    accent: '#6366f1',
    accentEnd: '#38bdf8',
    badge: null,
    liveUrl: 'https://sarvamtax.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '2.5rem', height: '2.5rem' }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Alpha Engineering Solutions',
    category: 'Corporate Website',
    tagline: 'Building Excellence, Delivering Trust',
    desc: "Premium corporate web presence for India's foremost engineering solutions provider. The site communicates authority and expertise across civil, mechanical, electrical, painting, and pipeline works — with high-fidelity UI and SEO-optimised architecture.",
    built: ['Corporate Website', 'SEO Optimisation'],
    metrics: [
      { label: 'Page Speed', value: '97/100' },
      { label: 'Load Time', value: '1.4s' },
      { label: 'Leads/mo', value: '300+' },
      { label: 'Mobile Score', value: '95/100' },
    ],
    tech: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
    accent: '#f97316',
    accentEnd: '#fbbf24',
    badge: null,
    liveUrl: 'https://www.aesgroupofcompanies.com/',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '2.5rem', height: '2.5rem' }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Portfolio Website',
    category: 'SaaS Product',
    tagline: 'Your Professional Identity, Instantly Online',
    desc: 'Our own subscription-based SaaS platform that generates stunning portfolio websites for individuals students, working professionals, doctors, engineers, and more. Pick a plan, fill your details, and your portfolio goes live in minutes.',
    built: ['SaaS Platform', 'Subscription Billing', 'Multi-template Engine'],
    metrics: [
      { label: 'Portfolio Types', value: '8+' },
      { label: 'Setup Time', value: '<5 min' },
      { label: 'Starting At', value: '₹199/mo' },
      { label: 'Templates', value: '12+' },
    ],
    tech: ['Next.js', 'Stripe', 'PostgreSQL', 'Prisma', 'Node.js', 'Cloudinary'],
    accent: '#a855f7',
    accentEnd: '#ec4899',
    badge: 'Our Product',
    liveUrl: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '2.5rem', height: '2.5rem' }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative pt-20 pb-12 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img src="/banner-img.png" alt="" className="w-full h-full object-cover" loading="eager" fetchPriority="high" decoding="sync" />
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.55)' }} />
        </div>

        <div className="container relative z-10 text-center">
          <span className="badge mb-5">Our Portfolio</span>

          <h1 className="mb-4" style={{ color: '#ffffff' }}>
            Work We&apos;re{' '}
            <span className="gradient-text">Proud Of</span>
          </h1>

          <div className="section-divider section-divider-center" />

          <p className="text-sm font-medium leading-relaxed max-w-xl mx-auto mb-6" style={{ color: 'rgba(255,255,255,0.75)' }}>
            From futuristic FinTech platforms to corporate identities and our own SaaS product — here&apos;s what we&apos;ve built.
          </p>

          {/* Service tag pills — matching services page nav links style */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-3 max-w-xs sm:max-w-none mx-auto items-stretch mt-6">
            {[
              { label: 'FinTech Platform', color: '#6366f1' },
              { label: 'Web Dashboard', color: '#38bdf8' },
              { label: 'Mobile App', color: '#a855f7' },
              { label: 'Corporate Website', color: '#f97316' },
              { label: 'SaaS Product', color: '#ec4899' },
              { label: 'SEO Optimisation', color: '#10b981' },
              { label: 'UI / UX Design', color: '#f59e0b' },
              { label: 'API Integration', color: '#3b82f6' },
            ].map((tag, i) => (
              <span
                key={i}
                className="flex items-center justify-center px-4 py-2 rounded-full text-[11px] sm:text-xs font-semibold text-center leading-tight transition-all duration-300 hover:-translate-y-1"
                style={{ background: 'rgba(255,255,255,0.08)', border: `1.5px solid ${tag.color}`, color: '#ffffff', backdropFilter: 'blur(12px)', boxShadow: `0 4px 16px ${tag.color}30` }}
              >
                {tag.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ──────────────────────────────────────── */}
      <section className="relative py-20 overflow-hidden">
        <img src="/our-projects-bg.png" alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" loading="lazy" decoding="async" />

        <div className="container relative z-10">
          <div className="text-center mb-12">
            <span className="badge mb-4">Case Studies</span>
            <h2 className="text-brand-navy mb-3">Our <span className="gradient-text">Projects</span></h2>
            <div className="section-divider section-divider-center" />
          </div>

          <div className="flex flex-col gap-8 max-w-5xl mx-auto">
            {projects.map((p, i) => (
              <article
                key={i}
                style={{
                  borderRadius: '28px',
                  overflow: 'hidden',
                  background: '#ffffff',
                  border: '1.5px solid rgba(0,0,0,0.06)',
                  boxShadow: '0 4px 32px rgba(0,0,0,0.05)',
                  transition: 'all 400ms cubic-bezier(0.16,1,0.3,1)',
                }}
                className="flex flex-col lg:flex-row hover:-translate-y-1 hover:shadow-xl group"
              >
                {/* Left — visual panel */}
                <div
                  style={{
                    background: `linear-gradient(145deg, ${p.accent} 0%, ${p.accentEnd} 100%)`,
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '1.5rem',
                    flexShrink: 0,
                  }}
                  className="w-full lg:w-[280px] min-h-[200px] lg:min-h-0"
                >
                  {/* Large faded number */}
                  <span style={{
                    position: 'absolute',
                    bottom: '-0.5rem',
                    right: '-0.5rem',
                    fontSize: '8rem',
                    fontWeight: 900,
                    lineHeight: 1,
                    color: 'rgba(255,255,255,0.1)',
                    fontFamily: 'Outfit, sans-serif',
                    userSelect: 'none',
                    pointerEvents: 'none',
                  }}>
                    {p.number}
                  </span>

                  {/* Top: badge */}
                  <div>
                    {p.badge && (
                      <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        padding: '4px 10px',
                        borderRadius: '999px',
                        fontSize: '0.6rem',
                        fontWeight: 900,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: p.accent,
                        background: '#ffffff',
                        marginBottom: '1rem',
                      }}>
                        <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: p.accent, flexShrink: 0 }} />
                        {p.badge}
                      </span>
                    )}

                    {/* Icon */}
                    <div style={{
                      width: '3.5rem',
                      height: '3.5rem',
                      borderRadius: '16px',
                      background: 'rgba(255,255,255,0.18)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      marginBottom: '1rem',
                    }}>
                      {p.icon}
                    </div>

                    {/* Category */}
                    <p style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '0.4rem' }}>
                      {p.category}
                    </p>
                    <p style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.3 }}>
                      {p.tagline}
                    </p>
                  </div>

                  {/* Bottom: deliverables */}
                  <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {p.built.map((b, j) => (
                      <span key={j} style={{
                        padding: '3px 10px',
                        borderRadius: '999px',
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        color: 'rgba(255,255,255,0.9)',
                        background: 'rgba(255,255,255,0.15)',
                        border: '1px solid rgba(255,255,255,0.2)',
                      }}>
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right — content */}
                <div className="p-4 sm:p-8" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1.25rem' }}>
                  {/* Title row */}
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h2 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#111827', letterSpacing: '-0.03em', lineHeight: 1.2 }}>
                        {p.title}
                      </h2>
                      <span style={{
                        flexShrink: 0,
                        fontSize: '0.6rem',
                        fontWeight: 800,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        padding: '4px 10px',
                        borderRadius: '999px',
                        background: `${p.accent}12`,
                        color: p.accent,
                        border: `1px solid ${p.accent}25`,
                        marginTop: '0.2rem',
                      }}>
                        {p.number}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.875rem', color: '#6b7280', lineHeight: 1.75, fontWeight: 500 }}>
                      {p.desc}
                    </p>
                  </div>

                  {/* Metrics grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {p.metrics.map((m, j) => (
                      <div key={j} style={{
                        background: `${p.accent}08`,
                        border: `1px solid ${p.accent}15`,
                        borderRadius: '12px',
                        padding: '0.75rem',
                        textAlign: 'center',
                      }}>
                        <div style={{ fontSize: '1.2rem', fontWeight: 900, color: p.accent, lineHeight: 1, letterSpacing: '-0.02em', marginBottom: '0.3rem' }}>
                          {m.value}
                        </div>
                        <div style={{ fontSize: '0.62rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech + CTA row */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    {/* Tech chips */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {p.tech.map((t, j) => (
                        <span key={j} style={{
                          padding: '3px 10px',
                          borderRadius: '8px',
                          fontSize: '0.68rem',
                          fontWeight: 700,
                          color: '#6b7280',
                          background: '#f3f4f6',
                          border: '1px solid rgba(0,0,0,0.05)',
                        }}>
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    {p.liveUrl ? (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 inline-flex items-center gap-2 font-bold text-sm transition-all hover:scale-105"
                        style={{
                          padding: '0.6rem 1.25rem',
                          borderRadius: '12px',
                          background: `linear-gradient(135deg, ${p.accent}, ${p.accentEnd})`,
                          color: '#ffffff',
                          textDecoration: 'none',
                          boxShadow: `0 6px 20px ${p.accent}35`,
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <svg style={{ width: '0.9rem', height: '0.9rem', flexShrink: 0 }} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Site
                      </a>
                    ) : (
                      <span
                        className="flex-shrink-0 inline-flex items-center gap-2 font-bold text-sm"
                        style={{
                          padding: '0.6rem 1.25rem',
                          borderRadius: '12px',
                          background: `${p.accent}12`,
                          color: p.accent,
                          border: `1.5px solid ${p.accent}25`,
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <svg style={{ width: '0.9rem', height: '0.9rem', flexShrink: 0 }} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA — full-width dark ─────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <img src="/bg-img.png" alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" loading="lazy" decoding="async" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'rgba(0,0,0,0.75)' }} />
        <div className="absolute inset-0 grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none" style={{ background: 'rgba(99,102,241,0.14)', transform: 'translate(20%,-20%)' }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none" style={{ background: 'rgba(251,146,60,0.1)', transform: 'translate(-20%,20%)' }} />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[300px] rounded-full blur-[160px] pointer-events-none -translate-x-1/2 -translate-y-1/2" style={{ background: 'rgba(168,85,247,0.08)' }} />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-5xl mx-auto">

            {/* Left — copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#fb923c', flexShrink: 0 }} />
                <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>
                  Start Your Project
                </span>
              </div>

              <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2rem,4vw,3.25rem)', fontWeight: 900, letterSpacing: '-0.04em', color: '#ffffff', lineHeight: 1.15, marginBottom: '1rem' }}>
                Want Similar{' '}
                <span className="gradient-text-warm">Results?</span>
              </h2>

              <p style={{ color: 'rgba(255,255,255,0.48)', fontSize: '1rem', lineHeight: 1.8, fontWeight: 500, maxWidth: '30rem', marginBottom: '2rem' }}>
                Let&apos;s build something remarkable together — a high-performance product tailored to your business goals and budget.
              </p>

              {/* Trust row */}
              <div className="flex flex-col gap-2.5">
                {[
                  { icon: '⚡', text: 'Fast delivery — 7 to 14 days average' },
                  { icon: '🎯', text: 'Dedicated project manager throughout' },
                  { icon: '🔒', text: 'Full source code ownership on delivery' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <span style={{ width: '1.6rem', height: '1.6rem', borderRadius: '8px', background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', flexShrink: 0 }}>
                      {item.icon}
                    </span>
                    <span style={{ fontSize: '0.83rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)' }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — stats + buttons */}
            <div className="flex flex-col gap-4">
              {/* Mini stat row */}
              <div className="grid grid-cols-3 gap-3 mb-1">
                {[
                  { value: '50+', label: 'Projects' },
                  { value: '4.8★', label: 'Rating' },
                  { value: '<2hr', label: 'Response' },
                ].map((s, i) => (
                  <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '1rem 0.75rem', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#ffffff', lineHeight: 1, marginBottom: '0.3rem', letterSpacing: '-0.02em' }}>{s.value}</div>
                    <div style={{ fontSize: '0.62rem', fontWeight: 700, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.07em' }}>{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Primary button */}
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 font-bold text-sm transition-all hover:scale-[1.02] hover:-translate-y-0.5"
                style={{
                  padding: '1rem 1.5rem',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg,#fb923c,#ec4899,#6366f1)',
                  color: '#fff',
                  textDecoration: 'none',
                  boxShadow: '0 10px 32px rgba(251,146,60,0.25)',
                  fontSize: '0.95rem',
                }}
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                Start Your Project
              </Link>

              {/* Secondary button */}
              <Link
                href="/pricing"
                className="flex items-center justify-center gap-2 font-bold text-sm transition-all hover:scale-[1.02] hover:-translate-y-0.5"
                style={{
                  padding: '1rem 1.5rem',
                  borderRadius: '16px',
                  background: 'rgba(255,255,255,0.06)',
                  color: 'rgba(255,255,255,0.8)',
                  border: '1.5px solid rgba(255,255,255,0.12)',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                }}
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                View Pricing Plans
              </Link>

              <p className="text-center" style={{ fontSize: '0.72rem', fontWeight: 600, color: 'rgba(255,255,255,0.25)' }}>
                Free consultation · No commitment required
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
