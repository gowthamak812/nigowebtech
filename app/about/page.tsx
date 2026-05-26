import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | Nigoweb Technologies | Web Development Company in Coimbatore',
  description: 'Learn about Nigoweb Technologies — a modern web development company in Coimbatore specializing in SEO-optimized websites, web applications, and mobile apps for growing businesses.',
  keywords: 'about Nigoweb Technologies, web development company Coimbatore, React Next.js agency India',
};

const values = [
  {
    color: '#f97316',
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ width: '1.4rem', height: '1.4rem' }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: 'Transparency',
    desc: 'Clear communication, honest scoping, and no hidden fees. You always know exactly what we are building, why, and what it costs.',
  },
  {
    color: '#ec4899',
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ width: '1.4rem', height: '1.4rem' }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'Quality First',
    desc: 'We never compromise. Every codebase is optimised for performance, structured using industry best practices, and designed to scale.',
  },
  {
    color: '#6366f1',
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ width: '1.4rem', height: '1.4rem' }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Long-Term Partners',
    desc: 'We are not a one-and-done agency. We build lasting relationships, supporting your business with maintenance and optimisations as you grow.',
  },
  {
    color: '#10b981',
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ width: '1.4rem', height: '1.4rem' }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Speed & Performance',
    desc: 'Fast websites rank higher and retain visitors. We obsess over PageSpeed metrics to guarantee a frictionless browsing experience.',
  },
  {
    color: '#a855f7',
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ width: '1.4rem', height: '1.4rem' }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
      </svg>
    ),
    title: 'Results-Driven',
    desc: 'Aesthetics are vital, but conversion is key. We design with SEO, CTR, and business metrics at the centre of every layout choice.',
  },
  {
    color: '#38bdf8',
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ width: '1.4rem', height: '1.4rem' }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Future-Ready',
    desc: 'We build with progressive tools and integrate AI to keep your platform modern as technology evolves.',
  },
];

const differentiators = [
  {
    color: '#6366f1',
    title: 'Modern Technology Stack',
    desc: 'We use Next.js, React, Node.js, and TypeScript to build architectures that load faster and rank better than standard templates.',
  },
  {
    color: '#ec4899',
    title: 'SEO-First Engineering',
    desc: 'Search visibility is baked in from code level — structured markup, static generation, image optimisation, and speed come standard.',
  },
  {
    color: '#f97316',
    title: 'Flexible & Cost-Efficient',
    desc: 'Our remote-first model eliminates agency overhead, letting us deliver premium code at prices friendly to growing businesses.',
  },
  {
    color: '#10b981',
    title: 'Dedicated Lifecycle Support',
    desc: 'We offer comprehensive monitoring and maintenance post-launch, ensuring your platform stays secure, fast, and current.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: 'linear-gradient(160deg, #eff6ff 0%, #ffffff 60%)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] rounded-full" style={{ background: 'rgba(59,130,246,0.08)', filter: 'blur(120px)' }} />
          <div className="absolute top-[20%] right-[5%] w-[400px] h-[400px] rounded-full" style={{ background: 'rgba(99,102,241,0.06)', filter: 'blur(100px)' }} />
          <div className="absolute inset-0 grid-pattern opacity-40" />
        </div>

        <div className="container relative z-10 text-center">
          <span className="badge mb-5" style={{ background: 'rgba(99,102,241,0.08)', color: '#6366f1', borderColor: 'rgba(99,102,241,0.2)' }}>
            Our Journey
          </span>
          <h1 className="text-brand-navy mb-4">
            About <span className="gradient-text">Nigoweb Technologies</span>
          </h1>
          <div className="section-divider section-divider-center" />
          <p className="text-lg text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto mb-14">
            We&apos;re a modern web development company helping businesses succeed online
            with fast, secure, and SEO-optimised digital platforms built to last.
          </p>

          {/* Stats strip */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-5 mt-2">
            {[
              { value: '50+',   label: 'Projects Delivered', color: '#6366f1', bg: 'rgba(99,102,241,0.08)',   border: 'rgba(99,102,241,0.18)' },
              { value: '4.8★',  label: 'Google Rating',      color: '#f59e0b', bg: 'rgba(245,158,11,0.08)',   border: 'rgba(245,158,11,0.18)' },
              { value: '100%',  label: 'Client Satisfaction', color: '#10b981', bg: 'rgba(16,185,129,0.08)',  border: 'rgba(16,185,129,0.18)' },
              { value: '<2hr',  label: 'Avg. Response Time',  color: '#ec4899', bg: 'rgba(236,72,153,0.08)',  border: 'rgba(236,72,153,0.18)' },
            ].map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-center px-6 py-4 rounded-2xl"
                style={{ background: s.bg, border: `1.5px solid ${s.border}`, minWidth: '130px' }}
              >
                <span style={{ fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 900, color: s.color, letterSpacing: '-0.04em', lineHeight: 1 }}>
                  {s.value}
                </span>
                <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '0.4rem', textAlign: 'center' }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Story ──────────────────────────────────────── */}
      <section className="navy-section relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'rgba(99,102,241,0.12)', filter: 'blur(140px)', transform: 'translate(20%,-20%)' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'rgba(249,115,22,0.08)', filter: 'blur(120px)', transform: 'translate(-20%,20%)' }} />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-5xl mx-auto">

            {/* Left: copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#fb923c' }} />
                <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>
                  Behind the Scenes
                </span>
              </div>

              <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 900, letterSpacing: '-0.04em', color: '#ffffff', lineHeight: 1.15, marginBottom: '2rem' }}>
                Our <span className="gradient-text-warm">Story</span>
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                <p style={{ fontSize: '0.97rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, fontWeight: 450 }}>
                  Nigoweb Technologies was founded with a simple belief:{' '}
                  <span style={{ color: '#ffffff', fontWeight: 700 }}>every business deserves a website that works as hard as they do.</span>
                </p>
                <p style={{ fontSize: '0.97rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, fontWeight: 450 }}>
                  Based in{' '}
                  <span style={{ color: '#fb923c', fontWeight: 700 }}>Gandhipuram, Coimbatore</span>, we started by helping local businesses
                  modernise their online presence. We saw too many companies held back by slow, outdated websites that didn&apos;t rank on Google or convert visitors.
                </p>
                <p style={{ fontSize: '0.97rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, fontWeight: 450 }}>
                  Today, we build high-performance websites using cutting-edge technologies like React, Next.js, and Node.js —
                  focused on{' '}
                  <span style={{ color: '#34d399', fontWeight: 700 }}>speed, SEO, and user experience</span>, the three pillars that actually drive growth online.
                </p>
                <p style={{ fontSize: '0.97rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, fontWeight: 450 }}>
                  We operate as a{' '}
                  <span style={{ color: '#93c5fd', fontWeight: 700 }}>flexible, remote-first team</span>, which keeps costs low and lets us deliver enterprise-quality work at prices that work for growing Indian businesses.
                </p>
              </div>
            </div>

            {/* Right: milestone cards */}
            <div className="flex flex-col gap-4">
              {[
                { year: '2022', color: '#f97316', title: 'Founded in Coimbatore', desc: 'Started with a mission to modernise how local businesses present themselves online.' },
                { year: '2023', color: '#6366f1', title: 'Expanded to Web Apps', desc: 'Built custom dashboards, SaaS platforms, and React-powered apps for growing clients.' },
                { year: '2024', color: '#ec4899', title: 'Mobile & AI Integration', desc: 'Added cross-platform mobile apps and AI chat assistants to our service portfolio.' },
                { year: '2025+', color: '#10b981', title: '50+ Projects & Growing', desc: 'Serving businesses across India with a 4.8★ rating and zero long-term lock-in.' },
              ].map((m, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1rem 1.25rem', borderRadius: '16px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: `${m.color}20`, border: `1.5px solid ${m.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ fontSize: '0.62rem', fontWeight: 900, color: m.color, letterSpacing: '-0.01em' }}>{m.year}</span>
                  </div>
                  <div>
                    <p style={{ fontSize: '0.88rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.25rem' }}>{m.title}</p>
                    <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.65, fontWeight: 450 }}>{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── Values ─────────────────────────────────────────── */}
      <section className="section-services relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

        <div className="container relative z-10">
          <div className="text-center mb-16">
            <span className="badge mb-4" style={{ background: 'rgba(99,102,241,0.08)', color: '#6366f1', borderColor: 'rgba(99,102,241,0.2)' }}>
              Core Principles
            </span>
            <h2 className="text-brand-navy mb-4">
              What Guides <span className="gradient-text">Our Work</span>
            </h2>
            <div className="section-divider section-divider-center" />
            <p className="text-gray-500 max-w-xl mx-auto font-medium">
              The beliefs that shape how we build and deliver every digital product.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <div
                key={i}
                className="group bg-white rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ border: '1.5px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 20px rgba(0,0,0,0.04)', borderTop: `3px solid ${v.color}` }}
              >
                <div style={{ width: '44px', height: '44px', borderRadius: '14px', background: `${v.color}12`, color: v.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  {v.icon}
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#111827', letterSpacing: '-0.02em', marginBottom: '0.6rem' }}>{v.title}</h3>
                <p style={{ fontSize: '0.85rem', color: '#6b7280', lineHeight: 1.75, fontWeight: 450 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Nigoweb ────────────────────────────────────── */}
      <section className="relative py-20 overflow-hidden" style={{ background: '#ffffff' }}>
        <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'rgba(99,102,241,0.05)', filter: 'blur(120px)', transform: 'translate(20%,-20%)' }} />

        <div className="container relative z-10">
          <div className="text-center mb-14">
            <span className="badge mb-4" style={{ background: 'rgba(236,72,153,0.08)', color: '#db2777', borderColor: 'rgba(236,72,153,0.2)' }}>
              Why Nigoweb
            </span>
            <h2 className="text-brand-navy mb-4">
              What Sets Us <span className="gradient-text">Apart</span>
            </h2>
            <div className="section-divider section-divider-center" />
          </div>

          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {differentiators.map((d, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: '#ffffff', border: '1.5px solid rgba(0,0,0,0.06)', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}
              >
                <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: `${d.color}12`, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg style={{ width: '1.1rem', height: '1.1rem', color: d.color }} fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#111827', marginBottom: '0.35rem', letterSpacing: '-0.02em' }}>{d.title}</h3>
                  <p style={{ fontSize: '0.83rem', color: '#6b7280', lineHeight: 1.75, fontWeight: 450 }}>{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Location & Collaboration ───────────────────────── */}
      <section className="section-services relative py-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

        <div className="container relative z-10">
          <div className="text-center mb-14">
            <span className="badge mb-4" style={{ background: 'rgba(16,185,129,0.08)', color: '#059669', borderColor: 'rgba(16,185,129,0.2)' }}>
              Presence
            </span>
            <h2 className="text-brand-navy mb-4">
              Based in Coimbatore,{' '}
              <span className="gradient-text">Serving Nationwide</span>
            </h2>
            <div className="section-divider section-divider-center" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">

            {/* Location */}
            <div
              className="rounded-3xl p-8 relative overflow-hidden"
              style={{ background: '#ffffff', border: '1.5px solid rgba(0,0,0,0.06)', boxShadow: '0 4px 24px rgba(0,0,0,0.05)', borderTop: '3px solid #10b981' }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none" style={{ background: 'rgba(16,185,129,0.06)', filter: 'blur(40px)', transform: 'translate(20%,-20%)' }} />
              <div style={{ width: '44px', height: '44px', borderRadius: '14px', background: 'rgba(16,185,129,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <svg style={{ width: '1.25rem', height: '1.25rem', color: '#10b981' }} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#111827', marginBottom: '0.25rem', letterSpacing: '-0.02em' }}>Our Location</h3>
              <p style={{ fontSize: '0.83rem', color: '#6b7280', lineHeight: 1.75, fontWeight: 450, marginBottom: '1.25rem' }}>
                Based in Coimbatore, connected to businesses across all of India.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {[
                  { color: '#10b981', text: 'Gandhipuram, Coimbatore — Tamil Nadu, India' },
                  { color: '#6366f1', text: 'Remote-first setup — no geographical limits' },
                  { color: '#f97316', text: 'Serving clients across all states in India' },
                  { color: '#ec4899', text: 'Available in IST business hours + WhatsApp support' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.83rem', fontWeight: 600, color: '#374151' }}>
                    <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: `${item.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg style={{ width: '0.6rem', height: '0.6rem', color: item.color }} fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>

            {/* Collaboration */}
            <div
              className="rounded-3xl p-8 relative overflow-hidden"
              style={{ background: '#ffffff', border: '1.5px solid rgba(0,0,0,0.06)', boxShadow: '0 4px 24px rgba(0,0,0,0.05)', borderTop: '3px solid #6366f1' }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none" style={{ background: 'rgba(99,102,241,0.06)', filter: 'blur(40px)', transform: 'translate(20%,-20%)' }} />
              <div style={{ width: '44px', height: '44px', borderRadius: '14px', background: 'rgba(99,102,241,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <svg style={{ width: '1.25rem', height: '1.25rem', color: '#6366f1' }} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#111827', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>How We Collaborate</h3>
              <p style={{ fontSize: '0.83rem', color: '#6b7280', lineHeight: 1.75, fontWeight: 450, marginBottom: '1.25rem' }}>
                Modern collaboration tools keep your project fully transparent, every step of the way.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {[
                  { color: '#10b981', text: 'Real-time staging links for constant review' },
                  { color: '#6366f1', text: 'Direct WhatsApp / Slack project coordination' },
                  { color: '#f97316', text: 'Bi-weekly scheduled progress check-ins' },
                  { color: '#ec4899', text: 'Transparent project timelines and milestones' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.83rem', fontWeight: 600, color: '#374151' }}>
                    <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: `${item.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg style={{ width: '0.6rem', height: '0.6rem', color: item.color }} fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="navy-section relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'rgba(99,102,241,0.12)', filter: 'blur(140px)', transform: 'translate(20%,-20%)' }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'rgba(251,146,60,0.08)', filter: 'blur(140px)', transform: 'translate(-20%,20%)' }} />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-5xl mx-auto">

            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#fb923c' }} />
                <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>
                  Ready to Build?
                </span>
              </div>
              <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-0.04em', color: '#ffffff', lineHeight: 1.15, marginBottom: '1rem' }}>
                Let&apos;s Build Something{' '}
                <span className="gradient-text-warm">Great Together</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.48)', fontSize: '1rem', lineHeight: 1.8, fontWeight: 500, maxWidth: '30rem' }}>
                Discuss your project with us — no pressure, no commitment. We&apos;ll give you an honest roadmap and timeline.
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-3">
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
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 font-bold text-sm transition-all hover:scale-[1.02] hover:-translate-y-0.5"
                style={{ padding: '1rem 1.5rem', borderRadius: '16px', background: 'linear-gradient(135deg,#fb923c,#ec4899,#6366f1)', color: '#fff', textDecoration: 'none', boxShadow: '0 10px 32px rgba(251,146,60,0.25)', fontSize: '0.95rem' }}
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                Start Your Project
              </Link>
              <Link
                href="/portfolio"
                className="flex items-center justify-center gap-2 font-bold text-sm transition-all hover:scale-[1.02] hover:-translate-y-0.5"
                style={{ padding: '1rem 1.5rem', borderRadius: '16px', background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.8)', border: '1.5px solid rgba(255,255,255,0.12)', textDecoration: 'none', fontSize: '0.95rem' }}
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
                See Our Work
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
