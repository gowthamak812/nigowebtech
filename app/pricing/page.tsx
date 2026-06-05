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
              background: isOpen ? '#ffffff' : '#ffffff',
              border: isOpen ? '1.5px solid rgba(99,102,241,0.4)' : '1.5px solid rgba(0,0,0,0.07)',
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
                  color: isOpen ? '#111827' : '#374151',
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
                background: isOpen ? 'linear-gradient(135deg,#6366f1,#a855f7)' : 'rgba(99,102,241,0.1)',
                color: isOpen ? '#ffffff' : '#6366f1',
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
                  color: '#6b7280',
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
      <section className="relative pt-20 pb-12 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img src="/banner-img.png" alt="" className="w-full h-full object-cover" loading="eager" fetchPriority="high" decoding="sync" />
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.55)' }} />
        </div>

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

          <h1 className="mb-4 animate-slide-in-up" style={{ color: '#ffffff' }}>
            Simple,{' '}
            <span className="gradient-text-warm">Affordable</span>{' '}
            Plans
          </h1>
          <p className="text-sm font-medium max-w-xl mx-auto leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.75)' }}>
            No hidden fees. No long-term contracts. Choose a plan that fits your goals — or get a custom quote.
          </p>

          {/* Trust badges */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-3 max-w-xs sm:max-w-none mx-auto mt-6 mb-8 sm:mb-14">
            {[
              { label: 'Free Consultation', icon: '💬', color: '#f97316' },
              { label: 'Fast Delivery', icon: '⚡', color: '#6366f1' },
              { label: '100% Satisfaction', icon: '✅', color: '#10b981' },
              { label: 'Flexible Payment', icon: '💳', color: '#ec4899' },
            ].map((item, k) => (
              <span key={k} className="flex items-center justify-center gap-2 px-4 py-2 rounded-full text-[11px] sm:text-xs font-semibold leading-tight transition-all duration-300 hover:-translate-y-1 text-white"
                style={{ background: 'rgba(255,255,255,0.10)', border: `1.5px solid ${item.color}`, backdropFilter: 'blur(12px)', boxShadow: `0 4px 16px ${item.color}30` }}>
                <span>{item.icon}</span>
                {item.label}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* ── Website Plans ─────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden" style={{ background: '#ffffff' }}>
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full blur-[120px] pointer-events-none" style={{ background: 'rgba(99,102,241,0.06)' }} />
        <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full blur-[120px] pointer-events-none" style={{ background: 'rgba(168,85,247,0.05)' }} />

        <div className="container relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <span className="badge mb-4">Website Plans</span>
            <h2 className="text-brand-navy mb-3">
              Website <span className="gradient-text">Development</span>
            </h2>
            <div className="section-divider section-divider-center" />
            <p className="text-gray-500 max-w-xl mx-auto text-lg font-medium">
              One-time payment. Own it forever.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 max-w-6xl mx-auto items-stretch">
            {websitePlans.map((p, i) => (
              <div
                key={i}
                style={{
                  borderRadius: '28px',
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 400ms cubic-bezier(0.16,1,0.3,1)',
                  ...(p.featured
                    ? {
                        background: 'linear-gradient(160deg, #0e1a42 0%, #111827 100%)',
                        border: '1.5px solid rgba(99,102,241,0.55)',
                        boxShadow: '0 0 0 1px rgba(99,102,241,0.1), 0 24px 70px rgba(99,102,241,0.28)',
                      }
                    : {
                        background: '#ffffff',
                        border: '1.5px solid rgba(0,0,0,0.08)',
                        boxShadow: '0 6px 32px rgba(0,0,0,0.08)',
                      }),
                }}
                className="hover:-translate-y-2"
              >
                {/* Colored top bar */}
                <div style={{
                  height: '4px',
                  background: p.featured
                    ? 'linear-gradient(to right, #6366f1, #a855f7)'
                    : p.name === 'Custom Enterprise'
                    ? 'linear-gradient(to right, #a855f7, #ec4899)'
                    : 'linear-gradient(to right, #6366f1, #38bdf8)',
                }} />

                {/* Header area */}
                <div style={{
                  padding: '1.75rem 2rem 1.5rem',
                  borderBottom: p.featured ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(0,0,0,0.06)',
                  background: p.featured ? 'rgba(255,255,255,0.03)' : `${p.accent}05`,
                }}>
                  {/* Tag + badge row */}
                  <div className="flex justify-between items-center mb-4">
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
                    fontSize: '1.4rem',
                    fontWeight: 900,
                    color: p.featured ? '#ffffff' : '#111827',
                    marginBottom: '1.25rem',
                    letterSpacing: '-0.03em',
                  }}>
                    {p.name}
                  </h3>

                  {/* Price */}
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0.4rem' }}>
                    <span style={{
                      fontSize: p.price === 'Custom' ? '2.5rem' : '3.2rem',
                      fontWeight: 900,
                      lineHeight: 1,
                      letterSpacing: '-0.04em',
                      color: p.featured ? '#ffffff' : '#111827',
                    }}>
                      {p.price}
                    </span>
                    <span style={{
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      paddingBottom: '0.4rem',
                      color: p.featured ? 'rgba(165,180,252,0.65)' : '#9ca3af',
                    }}>
                      {p.priceNote}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul style={{ flex: 1, listStyle: 'none', padding: '1.75rem 2rem', margin: 0, marginBottom: '0', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {p.features.map((f, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                      <CheckIcon color={p.featured ? '#6ee7b7' : p.accent} />
                      <span style={{
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        color: p.featured ? 'rgba(255,255,255,0.82)' : '#374151',
                      }}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div style={{ padding: '0 2rem 2rem' }}>
                  <Link
                    href="/contact"
                    id={`plan-${p.name.toLowerCase().replace(/\s/g, '-')}`}
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      padding: '1rem',
                      borderRadius: '16px',
                      fontWeight: 800,
                      fontSize: '0.95rem',
                      letterSpacing: '-0.01em',
                      textDecoration: 'none',
                      transition: 'all 300ms cubic-bezier(0.16,1,0.3,1)',
                      ...(p.featured
                        ? {
                            background: 'linear-gradient(135deg,#6366f1,#a855f7)',
                            color: '#ffffff',
                            boxShadow: '0 8px 24px rgba(99,102,241,0.45)',
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
              </div>
            ))}
          </div>

          <p className="text-center mt-10 text-sm font-medium text-gray-400">
            All plans include free consultation · No setup fees · Full source code ownership
          </p>
        </div>
      </section>

      {/* ── Support Plans ─────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <img src="/bg-img.png" alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" loading="lazy" decoding="async" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'rgba(0,0,0,0.75)' }} />
        <div className="absolute inset-0 grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="absolute top-0 left-1/2 w-[700px] h-[400px] rounded-full blur-[150px] pointer-events-none -translate-x-1/2 -translate-y-1/2" style={{ background: 'rgba(99,102,241,0.12)' }} />

        <div className="container relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <span className="badge mb-4" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}>Ongoing Support</span>
            <h2 className="mb-3" style={{ color: '#ffffff' }}>
              Support &amp; <span className="gradient-text">Maintenance</span>
            </h2>
            <div className="section-divider section-divider-center" />
            <p className="max-w-xl mx-auto text-lg font-medium" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Keep your website fast, secure and up to date.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 max-w-6xl mx-auto">
            {supportPlans.map((p, i) => (
              <div
                key={i}
                style={{
                  borderRadius: '28px',
                  background: '#ffffff',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 400ms cubic-bezier(0.16,1,0.3,1)',
                  overflow: 'hidden',
                  border: p.popular ? `2px solid ${p.accent}` : '1.5px solid rgba(255,255,255,0.12)',
                  boxShadow: p.popular
                    ? `0 0 0 4px ${p.accent}18, 0 24px 60px ${p.accent}28`
                    : '0 8px 32px rgba(0,0,0,0.3)',
                }}
                className="hover:-translate-y-2"
              >
                {/* Colored top bar */}
                <div style={{
                  height: '4px',
                  background: `linear-gradient(to right, ${p.accent}, ${p.accent}80)`,
                }} />

                {/* Header */}
                <div style={{
                  padding: '1.75rem 2rem 1.5rem',
                  borderBottom: `1px solid ${p.accent}15`,
                  background: `${p.accent}06`,
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div style={{
                      width: '2.75rem', height: '2.75rem', borderRadius: '12px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: `${p.accent}15`, color: p.accent,
                      border: `1px solid ${p.accent}25`,
                    }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '1.25rem', height: '1.25rem' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    {p.popular && (
                      <span style={{
                        padding: '4px 14px', borderRadius: '999px',
                        fontSize: '0.58rem', fontWeight: 900,
                        letterSpacing: '0.1em', textTransform: 'uppercase',
                        color: '#fff',
                        background: `linear-gradient(135deg, ${p.accent}, #ec4899)`,
                        boxShadow: `0 4px 12px ${p.accent}40`,
                      }}>
                        Popular
                      </span>
                    )}
                  </div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#111827', marginBottom: '0.3rem', letterSpacing: '-0.03em' }}>
                    {p.name}
                  </h3>
                  <p style={{ fontSize: '0.8rem', color: '#6b7280', fontWeight: 500, lineHeight: 1.5, margin: 0 }}>
                    {p.desc}
                  </p>
                </div>

                {/* Price + features */}
                <div style={{ padding: '1.5rem 2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  {/* Price */}
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0.4rem', marginBottom: '1.5rem' }}>
                    <span style={{ fontSize: '3.2rem', fontWeight: 900, color: '#111827', lineHeight: 1, letterSpacing: '-0.04em' }}>
                      {p.price}
                    </span>
                    <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#9ca3af', paddingBottom: '0.4rem' }}>
                      {p.period}
                    </span>
                  </div>

                  {/* Features */}
                  <ul style={{ flex: 1, listStyle: 'none', padding: 0, margin: 0, marginBottom: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                    {p.features.map((f, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                        <CheckIcon color={p.accent} />
                        <span style={{ fontSize: '0.875rem', fontWeight: 500, color: '#374151' }}>{f}</span>
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
                      padding: '1rem',
                      borderRadius: '16px',
                      fontWeight: 800,
                      fontSize: '0.95rem',
                      textDecoration: 'none',
                      transition: 'all 300ms',
                      ...(p.popular
                        ? {
                            background: `linear-gradient(135deg, ${p.accent}, #ec4899)`,
                            color: '#ffffff',
                            boxShadow: `0 8px 24px ${p.accent}40`,
                          }
                        : {
                            background: `linear-gradient(135deg, ${p.accent}, ${p.accent}cc)`,
                            color: '#ffffff',
                            boxShadow: `0 6px 20px ${p.accent}35`,
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
      <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(160deg, #f5f3ff 0%, #ffffff 50%, #eff6ff 100%)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(99,102,241,0.06) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 left-1/2 w-[500px] h-[400px] rounded-full blur-[160px] pointer-events-none -translate-x-1/2 -translate-y-1/3" style={{ background: 'rgba(99,102,241,0.08)' }} />

        <div className="container relative z-10 px-3 sm:px-8">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="text-center mb-14 animate-fade-in">
            <span className="badge mb-4">FAQ</span>
            <h2 className="text-brand-navy mb-3">
              Common <span className="gradient-text">Questions</span>
            </h2>
            <div className="section-divider section-divider-center" />
            <p className="text-gray-500 max-w-lg mx-auto text-base font-medium">
              Everything you need to know before getting started.
            </p>
          </div>
          <FaqAccordion />
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <img src="/bg-img.png" alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" loading="lazy" decoding="async" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'rgba(0,0,0,0.75)' }} />
        <div className="absolute inset-0 grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none" style={{ background: 'rgba(99,102,241,0.14)', transform: 'translate(20%,-20%)' }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none" style={{ background: 'rgba(251,146,60,0.1)', transform: 'translate(-20%,20%)' }} />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-5xl mx-auto">

            {/* Left — copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#fb923c', flexShrink: 0 }} />
                <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>
                  Free Consultation
                </span>
              </div>

              <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2rem,4vw,3.25rem)', fontWeight: 900, letterSpacing: '-0.04em', color: '#ffffff', lineHeight: 1.15, marginBottom: '1rem' }}>
                Not Sure Which Plan?{' '}
                <span className="gradient-text-warm">Let&apos;s Talk</span>
              </h2>

              <p style={{ color: 'rgba(255,255,255,0.48)', fontSize: '1rem', lineHeight: 1.8, fontWeight: 500, maxWidth: '30rem', marginBottom: '2rem' }}>
                Tell us about your project and we&apos;ll recommend the best plan for your budget. No pressure &amp; no commitment.
              </p>

              <div className="flex flex-col gap-2.5">
                {[
                  { icon: '⚡', text: 'Response within 2 hours' },
                  { icon: '🎯', text: 'Tailored plan recommendation' },
                  { icon: '🔒', text: 'No commitment required' },
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book Free Consultation
              </Link>

              <a
                href="https://wa.me/919344832658"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 font-bold text-sm transition-all hover:scale-[1.02] hover:-translate-y-0.5"
                style={{ padding: '1rem 1.5rem', borderRadius: '16px', background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.8)', border: '1.5px solid rgba(255,255,255,0.12)', textDecoration: 'none', fontSize: '0.95rem' }}
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>

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
