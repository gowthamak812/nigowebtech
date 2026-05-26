'use client';

import Link from 'next/link';
import { useState } from 'react';

const websitePlans = [
  {
    tag: 'Startups & Portfolios',
    name: 'Basic Website',
    price: '₹9,999',
    priceNote: 'one-time',
    accent: '#6366f1',
    features: [
      'Up to 5 Pages',
      'Responsive Design',
      'Contact Form',
      'Basic SEO Setup',
      'Mobile Friendly',
      'Fast Loading',
      'Social Media Integration',
      '1 Month Free Support',
    ],
    btn: 'Get Started',
    featured: false,
  },
  {
    tag: 'Growing Businesses',
    name: 'Professional Website',
    price: '₹14,999',
    priceNote: 'one-time',
    accent: '#6366f1',
    badge: 'Most Popular',
    features: [
      'Up to 10 Pages',
      'Premium UI Design',
      'Advanced SEO Setup',
      'Performance Optimization',
      'Lead Generation Setup',
      'Analytics Integration',
      'Security Optimization',
      '3 Months Free Support',
    ],
    btn: 'Get Started',
    featured: true,
  },
  {
    tag: 'SaaS & Enterprise',
    name: 'Custom Enterprise',
    price: 'Custom',
    priceNote: 'pricing',
    accent: '#a855f7',
    features: [
      'Custom Dashboard',
      'Backend Development',
      'Mobile App Included',
      'Custom Features',
      'API Integration',
      'AI Features',
      'Dedicated Manager',
      '1 Year Full Support',
    ],
    btn: 'Talk With Us',
    featured: false,
  },
];

const supportPlans = [
  {
    name: 'Basic Support',
    price: '₹5,000',
    period: '/year',
    accent: '#6366f1',
    desc: 'Perfect for small sites that need regular care.',
    features: [
      'Website Maintenance',
      'Security Updates',
      'Bug Fixes',
      'Email Support',
      'Monthly Report',
    ],
    popular: false,
  },
  {
    name: 'Mid Support',
    price: '₹7,000',
    period: '/year',
    accent: '#f97316',
    desc: 'For growing businesses that need consistent monitoring.',
    features: [
      'Priority Support',
      'Monthly Updates',
      'Performance Monitoring',
      'Chat Support',
      'Uptime Monitoring',
      'Weekly Backups',
    ],
    popular: true,
  },
  {
    name: 'Premium Support',
    price: '₹10,000',
    period: '/year',
    accent: '#a855f7',
    desc: 'Dedicated care for high-traffic, business-critical sites.',
    features: [
      'Daily Support',
      'Dedicated Manager',
      'Full Maintenance',
      'Fast Issue Resolution',
      'Server Monitoring',
      '24/7 Emergency Line',
    ],
    popular: false,
  },
];

const faqs = [
  { q: 'Are there any hidden fees?', a: 'No. All pricing is transparent and discussed upfront before any work begins. You only pay what is agreed.' },
  { q: 'How long does a website take?', a: 'Basic websites take 7–10 days. Professional websites take 2–4 weeks. Enterprise projects are scoped individually.' },
  { q: 'Do you offer EMI or payment plans?', a: 'Yes, we offer flexible payment schedules. Typically 50% upfront and 50% on delivery for website projects.' },
  { q: 'What happens after delivery?', a: 'We provide free support during the included period and offer ongoing maintenance plans to keep your site running smoothly.' },
  { q: 'Can I upgrade my plan later?', a: 'Absolutely. You can start with Basic and upgrade as your business grows. We make transitions seamless.' },
];

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '4.8+', label: 'Google Rating' },
  { value: '7–10', label: 'Days Avg. Delivery' },
  { value: '100%', label: 'Client Satisfaction' },
];

function CheckIcon({ color }: { color: string }) {
  return (
    <span style={{
      flexShrink: 0,
      width: '1.25rem',
      height: '1.25rem',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: `${color}18`,
    }}>
      <svg style={{ width: '0.55rem', height: '0.55rem', color }} fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
  );
}

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((f, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            style={{
              borderRadius: '16px',
              background: isOpen ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.03)',
              border: isOpen ? '1.5px solid rgba(99,102,241,0.45)' : '1.5px solid rgba(255,255,255,0.08)',
              boxShadow: isOpen ? '0 8px 32px rgba(99,102,241,0.12)' : 'none',
              transition: 'all 300ms cubic-bezier(0.16,1,0.3,1)',
              overflow: 'hidden',
            }}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                padding: '1.25rem 1.5rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1 }}>
                <span style={{
                  flexShrink: 0,
                  width: '1.75rem',
                  height: '1.75rem',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: isOpen ? 'linear-gradient(135deg,#6366f1,#a855f7)' : 'rgba(99,102,241,0.12)',
                  fontSize: '0.65rem',
                  fontWeight: 800,
                  color: isOpen ? '#fff' : 'rgba(99,102,241,0.8)',
                  transition: 'all 300ms',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span style={{
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  color: isOpen ? '#ffffff' : 'rgba(255,255,255,0.8)',
                  lineHeight: 1.4,
                  transition: 'color 200ms',
                }}>
                  {f.q}
                </span>
              </div>
              <span style={{
                flexShrink: 0,
                width: '1.75rem',
                height: '1.75rem',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: isOpen ? 'linear-gradient(135deg,#6366f1,#a855f7)' : 'rgba(255,255,255,0.08)',
                color: '#ffffff',
                fontSize: '1.1rem',
                fontWeight: 300,
                lineHeight: 1,
                transition: 'all 300ms cubic-bezier(0.16,1,0.3,1)',
                transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
              }}>
                +
              </span>
            </button>

            <div style={{
              display: 'grid',
              gridTemplateRows: isOpen ? '1fr' : '0fr',
              transition: 'all 350ms cubic-bezier(0.16,1,0.3,1)',
              opacity: isOpen ? 1 : 0,
            }}>
              <div style={{ overflow: 'hidden' }}>
                <p style={{
                  margin: 0,
                  padding: '0 1.5rem 1.25rem 4.25rem',
                  fontSize: '0.875rem',
                  color: 'rgba(255,255,255,0.55)',
                  lineHeight: 1.75,
                }}>
                  {f.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function PricingPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="section-hero relative pt-24 sm:pt-28 pb-12 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[140px] pointer-events-none animate-blob" style={{ background: 'rgba(99,102,241,0.12)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[140px] pointer-events-none animate-blob" style={{ background: 'rgba(251,146,60,0.09)', animationDelay: '3s' }} />

        <div className="container relative z-10 text-center">
          <div className="animate-slide-in-down mb-4 sm:mb-6">
            <span className="badge badge-orange">
              <span className="flex h-2 w-2 relative mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: '#f97316' }} />
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: '#ea6f00' }} />
              </span>
              Transparent Pricing
            </span>
          </div>

          <h1 className="text-brand-navy mb-4 animate-slide-in-up">
            Simple,{' '}
            <span className="gradient-text-warm">Affordable</span>{' '}
            Plans
          </h1>
          <p className="text-gray-500 text-xl font-medium max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-10 animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
            No hidden fees. No long-term contracts. Choose a plan that fits your goals — or get a custom quote.
          </p>

          {/* Trust badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm text-gray-500 font-semibold animate-slide-in-up mb-8 sm:mb-14 max-w-xl sm:max-w-3xl mx-auto" style={{ animationDelay: '0.2s' }}>
            {[
              { label: 'Free Consultation', icon: '💬' },
              { label: 'Fast Delivery', icon: '⚡' },
              { label: '100% Satisfaction', icon: '✅' },
              { label: 'Flexible Payment', icon: '💳' },
            ].map((item, k) => (
              <span key={k} className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                <span>{item.icon}</span>
                {item.label}
              </span>
            ))}
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
            {stats.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl px-4 py-5 border border-gray-100 shadow-sm text-center hover:shadow-md hover:-translate-y-1 transition-all">
                <div className="text-2xl font-black gradient-text mb-1">{s.value}</div>
                <div className="text-xs text-gray-500 font-semibold">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Website Plans ─────────────────────────────────── */}
      <section className="navy-section relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern-dark opacity-30" />
        <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full blur-[120px] pointer-events-none" style={{ background: 'rgba(99,102,241,0.1)' }} />
        <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full blur-[120px] pointer-events-none" style={{ background: 'rgba(168,85,247,0.08)' }} />

        <div className="container relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <span className="badge mb-4" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}>
              Website Plans
            </span>
            <h2 className="text-white mb-3">
              Website <span className="gradient-text">Development</span>
            </h2>
            <div className="section-divider section-divider-center" />
            <p className="text-blue-100 opacity-80 max-w-xl mx-auto text-lg font-medium">
              One-time payment. Own it forever.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
            {websitePlans.map((p, i) => (
              <div
                key={i}
                style={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 400ms cubic-bezier(0.16,1,0.3,1)',
                  padding: '2rem',
                  ...(p.featured
                    ? {
                        background: 'linear-gradient(160deg, #0e1a42 0%, #111827 100%)',
                        border: '1.5px solid rgba(99,102,241,0.6)',
                        boxShadow: '0 0 0 1px rgba(99,102,241,0.1), 0 20px 60px rgba(99,102,241,0.25), 0 0 100px rgba(99,102,241,0.08)',
                      }
                    : {
                        background: '#ffffff',
                        border: '1.5px solid rgba(0,0,0,0.08)',
                        boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                      }),
                }}
                className="hover:-translate-y-2"
              >
                {/* Tag + badge row */}
                <div className="flex justify-between items-center mb-5">
                  <span style={{
                    fontSize: '0.6rem',
                    fontWeight: 800,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: p.featured ? 'rgba(165,180,252,0.7)' : '#9ca3af',
                  }}>
                    {p.tag}
                  </span>
                  {p.badge && (
                    <span style={{
                      padding: '4px 14px',
                      borderRadius: '999px',
                      fontSize: '0.6rem',
                      fontWeight: 900,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: '#fff',
                      background: 'linear-gradient(135deg, #f97316, #ec4899)',
                      boxShadow: '0 4px 14px rgba(249,115,22,0.4)',
                    }}>
                      {p.badge}
                    </span>
                  )}
                </div>

                {/* Plan name */}
                <h3 style={{
                  fontSize: '1.35rem',
                  fontWeight: 800,
                  color: p.featured ? '#ffffff' : '#111827',
                  marginBottom: '1rem',
                  letterSpacing: '-0.025em',
                }}>
                  {p.name}
                </h3>

                {/* Price */}
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0.35rem', marginBottom: '1.5rem' }}>
                  <span style={{
                    fontSize: p.price === 'Custom' ? '2.75rem' : '3rem',
                    fontWeight: 900,
                    lineHeight: 1,
                    letterSpacing: '-0.035em',
                    color: p.featured ? '#ffffff' : '#111827',
                  }}>
                    {p.price}
                  </span>
                  <span style={{
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    paddingBottom: '0.35rem',
                    color: p.featured ? 'rgba(165,180,252,0.7)' : '#9ca3af',
                  }}>
                    {p.priceNote}
                  </span>
                </div>

                {/* Divider */}
                <div style={{
                  height: '1px',
                  background: p.featured ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
                  marginBottom: '1.5rem',
                }} />

                {/* Features */}
                <ul style={{ flex: 1, listStyle: 'none', padding: 0, margin: 0, marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                  {p.features.map((f, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <CheckIcon color={p.featured ? '#6ee7b7' : '#10b981'} />
                      <span style={{
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        color: p.featured ? 'rgba(255,255,255,0.8)' : '#374151',
                      }}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="/contact"
                  id={`plan-${p.name.toLowerCase().replace(/\s/g, '-')}`}
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '0.9rem',
                    borderRadius: '14px',
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    letterSpacing: '-0.01em',
                    textDecoration: 'none',
                    transition: 'all 300ms cubic-bezier(0.16,1,0.3,1)',
                    ...(p.featured
                      ? {
                          background: '#ffffff',
                          color: '#111827',
                          boxShadow: '0 4px 20px rgba(255,255,255,0.15)',
                        }
                      : p.name === 'Custom Enterprise'
                      ? {
                          background: 'linear-gradient(135deg,#a855f7,#ec4899)',
                          color: '#ffffff',
                          boxShadow: '0 6px 20px rgba(168,85,247,0.35)',
                        }
                      : {
                          background: 'linear-gradient(135deg,#6366f1,#818cf8)',
                          color: '#ffffff',
                          boxShadow: '0 6px 20px rgba(99,102,241,0.35)',
                        }),
                  }}
                  className="hover:scale-[1.02] hover:-translate-y-0.5"
                >
                  {p.btn}
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center mt-10 text-sm opacity-40 font-medium" style={{ color: '#93c5fd' }}>
            All plans include free consultation · No setup fees · Full source code ownership
          </p>
        </div>
      </section>

      {/* ── Support Plans ─────────────────────────────────── */}
      <section style={{ background: '#f8f7ff' }} className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute top-0 left-1/2 w-[700px] h-[400px] rounded-full blur-[150px] pointer-events-none -translate-x-1/2 -translate-y-1/2" style={{ background: 'rgba(99,102,241,0.07)' }} />

        <div className="container relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <span className="badge mb-4">Ongoing Support</span>
            <h2 className="text-brand-navy mb-3">
              Support &amp; <span className="gradient-text">Maintenance</span>
            </h2>
            <div className="section-divider section-divider-center" />
            <p className="text-gray-500 max-w-xl mx-auto text-lg font-medium">
              Keep your website fast, secure and up to date.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {supportPlans.map((p, i) => (
              <div
                key={i}
                style={{
                  borderRadius: '24px',
                  background: '#ffffff',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 400ms cubic-bezier(0.16,1,0.3,1)',
                  overflow: 'hidden',
                  ...(p.popular
                    ? {
                        border: `2px solid ${p.accent}`,
                        boxShadow: `0 0 0 4px ${p.accent}12, 0 20px 50px ${p.accent}18`,
                      }
                    : {
                        border: '1.5px solid rgba(0,0,0,0.07)',
                        boxShadow: '0 4px 24px rgba(0,0,0,0.05)',
                      }),
                }}
                className="hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Color header band */}
                <div style={{
                  padding: '1.75rem 1.75rem 1.5rem',
                  background: `linear-gradient(135deg, ${p.accent}10 0%, ${p.accent}05 100%)`,
                  borderBottom: `1px solid ${p.accent}15`,
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div style={{
                      width: '2.75rem',
                      height: '2.75rem',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: `${p.accent}18`,
                      color: p.accent,
                    }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '1.25rem', height: '1.25rem' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    {p.popular && (
                      <span style={{
                        padding: '3px 12px',
                        borderRadius: '999px',
                        fontSize: '0.58rem',
                        fontWeight: 900,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: '#fff',
                        background: `linear-gradient(135deg, ${p.accent}, #ec4899)`,
                        boxShadow: `0 4px 12px ${p.accent}40`,
                      }}>
                        Popular
                      </span>
                    )}
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#111827', marginBottom: '0.25rem', letterSpacing: '-0.02em' }}>
                    {p.name}
                  </h3>
                  <p style={{ fontSize: '0.8rem', color: '#6b7280', fontWeight: 500, lineHeight: 1.5, margin: 0 }}>
                    {p.desc}
                  </p>
                </div>

                {/* Body */}
                <div style={{ padding: '1.5rem 1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  {/* Price */}
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0.3rem', marginBottom: '1.5rem' }}>
                    <span style={{ fontSize: '2.5rem', fontWeight: 900, color: '#111827', lineHeight: 1, letterSpacing: '-0.035em' }}>
                      {p.price}
                    </span>
                    <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#9ca3af', paddingBottom: '0.3rem' }}>
                      {p.period}
                    </span>
                  </div>

                  {/* Features */}
                  <ul style={{ flex: 1, listStyle: 'none', padding: 0, margin: 0, marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {p.features.map((f, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <CheckIcon color={p.accent} />
                        <span style={{ fontSize: '0.85rem', fontWeight: 500, color: '#374151' }}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    id={`support-${p.name.toLowerCase().replace(/\s/g, '-')}`}
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      padding: '0.875rem',
                      borderRadius: '14px',
                      fontWeight: 800,
                      fontSize: '0.875rem',
                      textDecoration: 'none',
                      transition: 'all 300ms',
                      ...(p.popular
                        ? {
                            background: `linear-gradient(135deg, ${p.accent}, #ec4899)`,
                            color: '#ffffff',
                            boxShadow: `0 8px 24px ${p.accent}38`,
                          }
                        : {
                            background: `${p.accent}10`,
                            color: p.accent,
                            border: `1.5px solid ${p.accent}25`,
                          }),
                    }}
                    className="hover:scale-[1.02] hover:-translate-y-0.5"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="navy-section relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern-dark opacity-30" />
        <div className="absolute top-0 left-1/2 w-[500px] h-[400px] rounded-full blur-[160px] pointer-events-none -translate-x-1/2 -translate-y-1/3" style={{ background: 'rgba(99,102,241,0.1)' }} />

        <div className="container relative z-10 max-w-3xl mx-auto">
          <div className="text-center mb-14 animate-fade-in">
            <span className="badge mb-4" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}>
              FAQ
            </span>
            <h2 className="text-white mb-3">
              Common <span className="gradient-text">Questions</span>
            </h2>
            <div className="section-divider section-divider-center" />
            <p className="text-blue-100 opacity-60 max-w-lg mx-auto text-base font-medium">
              Everything you need to know before getting started.
            </p>
          </div>
          <FaqAccordion />
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="relative py-20 overflow-hidden" style={{ background: '#ffffff' }}>
        <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none" style={{ background: 'rgba(99,102,241,0.07)', transform: 'translate(30%,-30%)' }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none" style={{ background: 'rgba(251,146,60,0.06)', transform: 'translate(-30%,30%)' }} />

        <div className="container relative z-10 px-3 sm:px-8">

          {/* Badge — outside the card, centered like homepage */}
          <div className="flex justify-center mb-6">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest"
              style={{
                background: 'rgba(249,115,22,0.12)',
                color: '#fb923c',
                border: '1px solid rgba(249,115,22,0.25)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
              Free Consultation
            </span>
          </div>

          {/* Outer card */}
          <div
            style={{
              maxWidth: '900px',
              margin: '0 auto',
              borderRadius: '32px',
              background: 'linear-gradient(135deg, #0e1a42 0%, #111827 55%, #1a0b30 100%)',
              padding: '3px',
              boxShadow: '0 32px 80px rgba(99,102,241,0.18), 0 8px 32px rgba(0,0,0,0.12)',
            }}
          >
            {/* Inner card */}
            <div
              className="p-6 sm:p-12"
              style={{
                borderRadius: '30px',
                background: 'linear-gradient(135deg, #0e1a42 0%, #111827 55%, #1a0b30 100%)',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              {/* Decorative glows inside card */}
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] pointer-events-none" style={{ background: 'rgba(168,85,247,0.15)', transform: 'translate(20%,-20%)' }} />
              <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-[100px] pointer-events-none" style={{ background: 'rgba(99,102,241,0.12)', transform: 'translate(-20%,20%)' }} />

              <div className="relative z-10 flex flex-col lg:flex-row gap-10 lg:items-center">

                {/* Left — copy (left-aligned like portfolio on mobile) */}
                <div className="flex-1 text-left flex flex-col justify-center">
                  <h2 style={{ fontSize: 'clamp(1.75rem,3.5vw,2.75rem)', fontWeight: 900, letterSpacing: '-0.04em', color: '#ffffff', lineHeight: 1.15, marginBottom: '1rem' }}>
                    Not Sure Which<br />Plan?{' '}
                    <span className="gradient-text-warm">Let&apos;s Talk</span>
                  </h2>

                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', fontWeight: 500, lineHeight: 1.7, marginBottom: '1.5rem', maxWidth: '26rem' }}>
                    Tell us about your project and we&apos;ll recommend the best plan for your budget. No pressure &amp; no commitment.
                  </p>

                  {/* Mini trust items — left-aligned */}
                  <div className="flex flex-col gap-2.5">
                    {[
                      { icon: '⚡', text: 'Response within 2 hours' },
                      { icon: '🎯', text: 'Tailored plan recommendation' },
                      { icon: '🔒', text: 'No commitment required' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <span style={{
                          width: '1.6rem', height: '1.6rem', borderRadius: '8px', flexShrink: 0,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          background: 'rgba(255,255,255,0.07)', fontSize: '0.7rem',
                        }}>
                          {item.icon}
                        </span>
                        <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'rgba(255,255,255,0.55)' }}>
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Vertical divider (desktop only) */}
                <div className="hidden lg:block w-px self-stretch" style={{ background: 'rgba(255,255,255,0.08)' }} />

                {/* Right — actions (mini stats + buttons, matching portfolio pattern) */}
                <div className="flex-shrink-0 w-full lg:w-64 flex flex-col gap-3">
                  {/* Mini stat row — 3 cols like portfolio */}
                  <div className="grid grid-cols-3 gap-3 mb-1">
                    {[
                      { value: '50+', label: 'Projects' },
                      { value: '4.8★', label: 'Rating' },
                      { value: '<2hr', label: 'Response' },
                    ].map((s, i) => (
                      <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '0.9rem 0.5rem', textAlign: 'center' }}>
                        <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#ffffff', lineHeight: 1, marginBottom: '0.3rem', letterSpacing: '-0.02em' }}>{s.value}</div>
                        <div style={{ fontSize: '0.58rem', fontWeight: 700, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Primary CTA */}
                  <Link
                    href="/contact"
                    id="pricing-cta-contact"
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
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Book Free Consultation
                  </Link>

                  {/* WhatsApp CTA */}
                  <a
                    href="https://wa.me/919344832658"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="pricing-cta-whatsapp"
                    className="flex items-center justify-center gap-2 font-bold text-sm transition-all hover:scale-[1.02] hover:-translate-y-0.5"
                    style={{
                      padding: '1rem 1.5rem',
                      borderRadius: '16px',
                      background: 'rgba(37,211,102,0.12)',
                      color: '#4ade80',
                      border: '1.5px solid rgba(37,211,102,0.25)',
                      textDecoration: 'none',
                      fontSize: '0.95rem',
                    }}
                  >
                    <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Chat on WhatsApp
                  </a>

                  <p className="text-center" style={{ fontSize: '0.7rem', fontWeight: 600, color: 'rgba(255,255,255,0.25)', marginTop: '0.25rem' }}>
                    Average response within 2 hours
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
