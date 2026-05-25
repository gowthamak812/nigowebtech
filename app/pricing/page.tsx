'use client';

import Link from 'next/link';
import { useState } from 'react';



const websitePlans = [
  {
    tag: 'Startups & Portfolios',
    name: 'Basic Website',
    price: '₹9,999',
    period: 'one-time',
    color: '#6366f1',
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
    period: 'one-time',
    color: '#ffffff',
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
    period: 'pricing',
    color: '#a855f7',
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
    color: '#6366f1',
    features: [
      'Website Maintenance',
      'Security Updates',
      'Bug Fixes',
      'Email Support',
      'Monthly Report',
    ],
  },
  {
    name: 'Mid Support',
    price: '₹7,000',
    period: '/year',
    color: '#fb923c',
    popular: true,
    features: [
      'Priority Support',
      'Monthly Updates',
      'Performance Monitoring',
      'Chat Support',
      'Uptime Monitoring',
      'Weekly Backups',
    ],
  },
  {
    name: 'Premium Support',
    price: '₹10,000',
    period: '/year',
    color: '#a855f7',
    features: [
      'Daily Support',
      'Dedicated Manager',
      'Full Maintenance',
      'Fast Issue Resolution',
      'Server Monitoring',
      '24/7 Emergency Line',
    ],
  },
];

const faqs = [
  { q: 'Are there any hidden fees?', a: 'No. All pricing is transparent and discussed upfront before any work begins. You only pay what is agreed.' },
  { q: 'How long does a website take?', a: 'Basic websites take 7–10 days. Professional websites take 2–4 weeks. Enterprise projects are scoped individually.' },
  { q: 'Do you offer EMI or payment plans?', a: 'Yes, we offer flexible payment schedules. Typically 50% upfront and 50% on delivery for website projects.' },
  { q: 'What happens after delivery?', a: 'We provide free support during the included period and offer ongoing maintenance plans to keep your site running smoothly.' },
  { q: 'Can I upgrade my plan later?', a: 'Absolutely. You can start with Basic and upgrade as your business grows. We make transitions seamless.' },
];

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
              borderRadius: '20px',
              background: 'white',
              border: isOpen ? '1.5px solid rgba(99,102,241,0.25)' : '1.5px solid rgba(0,0,0,0.06)',
              boxShadow: isOpen ? '0 8px 40px rgba(99,102,241,0.08)' : '0 2px 12px rgba(0,0,0,0.04)',
              transition: 'all 300ms cubic-bezier(0.16,1,0.3,1)',
              overflow: 'hidden',
            }}
          >
            {/* Trigger row */}
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              id={`faq-btn-${i}`}
              aria-expanded={isOpen}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                padding: '1.4rem 1.75rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                margin: 0,
              }}
            >
              <span
                style={{
                  fontSize: '0.975rem',
                  fontWeight: 700,
                  color: isOpen ? '#4f46e5' : '#1a2453',
                  lineHeight: 1.4,
                  flex: 1,
                  transition: 'color 200ms',
                }}
              >
                {f.q}
              </span>
              {/* Circular +/− button */}
              <span
                style={{
                  flexShrink: 0,
                  width: '2rem',
                  height: '2rem',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: isOpen
                    ? 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)'
                    : 'rgba(99,102,241,0.09)',
                  color: isOpen ? '#ffffff' : '#6366f1',
                  fontSize: '1.4rem',
                  fontWeight: 300,
                  lineHeight: 1,
                  transition: 'all 300ms cubic-bezier(0.16,1,0.3,1)',
                  boxShadow: isOpen ? '0 4px 16px rgba(99,102,241,0.3)' : 'none',
                }}
              >
                {isOpen ? '−' : '+'}
              </span>
            </button>

            {/* Collapsible answer */}
            <div
              style={{
                display: 'grid',
                gridTemplateRows: isOpen ? '1fr' : '0fr',
                transition: 'all 350ms cubic-bezier(0.16,1,0.3,1)',
                opacity: isOpen ? 1 : 0,
              }}
            >
              <div style={{ overflow: 'hidden' }}>
                <p
                  style={{
                    margin: 0,
                    padding: '0 1.75rem 1.5rem 1.75rem',
                    fontSize: '0.9rem',
                    color: '#6b7280',
                    lineHeight: 1.75,
                    transform: isOpen ? 'translateY(0)' : 'translateY(-8px)',
                    transition: 'transform 350ms cubic-bezier(0.16,1,0.3,1)',
                  }}
                >
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
      {/* Hero - Light */}
      <section className="section-hero relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full blur-[120px] pointer-events-none animate-blob" style={{ background: 'rgba(99,102,241,0.1)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-[120px] pointer-events-none animate-blob" style={{ background: 'rgba(251,146,60,0.08)', animationDelay: '3s' }} />

        <div className="container relative z-10 text-center">
          <div className="animate-slide-in-down mb-6">
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
          <p className="text-gray-500 text-xl font-medium max-w-2xl mx-auto leading-relaxed mb-10 animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
            No hidden fees. No long-term contracts. Choose a plan that fits your goals — or get a custom quote.
          </p>
          <div className="flex flex-wrap justify-start gap-4 text-sm text-gray-500 font-semibold animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            {['✓ Free Consultation', '✓ Fast Delivery', '✓ 100% Satisfaction', '✓ Flexible Payment'].map((i, k) => (
              <span key={k} className="px-4 py-2 rounded-xl bg-white border border-gray-100 shadow-sm hover:scale-105 transition-all">{i}</span>
            ))}
          </div>
        </div>

        <div className="wave-bottom">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ height: '60px' }}>
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#090d16" />
          </svg>
        </div>
      </section>

      {/* Website Plans - Dark */}
      <section className="navy-section relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern-dark opacity-30" />
        <div className="container relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <span className="badge mb-4" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}>Website Plans</span>
            <h2 className="text-white mb-3">Website <span className="gradient-text">Development</span></h2>
            <div className="section-divider section-divider-center" />
            <p className="text-blue-100 opacity-80 max-w-xl mx-auto text-lg font-medium">One-time payment. Own it forever.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {websitePlans.map((p, i) => (
              <div key={i} className={`pricing-card flex flex-col h-full relative ${p.featured ? 'featured shadow-[0_0_40px_rgba(99,102,241,0.3)] !border-2 !border-indigo-500' : ''}`}>
                <div className="flex justify-between items-start mb-3">
                  <p className={`text-[10px] font-bold uppercase tracking-widest mt-1 ${p.featured ? 'text-blue-300' : 'text-gray-400'}`}>{p.tag}</p>
                  {p.badge && (
                    <div
                      className="px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider text-white whitespace-nowrap"
                      style={{ background: 'linear-gradient(135deg, #fb923c 0%, #ec4899 100%)', boxShadow: '0 4px 16px rgba(251,146,60,0.4)' }}
                    >
                      {p.badge}
                    </div>
                  )}
                </div>
                <h3 className={`text-xl font-bold mb-2 ${p.featured ? '!text-white' : '!text-black'}`}>{p.name}</h3>
                <div className="mb-6 flex items-baseline flex-wrap">
                  <span className={`text-5xl font-black ${p.featured ? 'text-white' : 'text-black'}`}>{p.price}</span>
                  <span className={`text-sm ml-2 whitespace-nowrap ${p.featured ? 'text-blue-200' : 'text-gray-500'}`}>{p.period}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2.5">
                      <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${p.featured ? 'bg-white/15' : 'bg-green-50'}`}>
                        <svg className="w-3 h-3" style={{ color: p.featured ? '#6ee7b7' : '#10b981' }} fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className={`text-sm font-medium ${p.featured ? 'text-blue-100' : 'text-gray-600'}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  id={`plan-${p.name.toLowerCase().replace(/\s/g, '-')}`}
                  className={`block w-full text-center py-3.5 rounded-xl font-bold text-sm transition-all hover:scale-105 mt-auto ${p.featured ? 'text-brand-navy' : 'text-white'}`}
                  style={p.featured
                    ? { background: 'white', boxShadow: '0 4px 20px rgba(255,255,255,0.2)' }
                    : { background: `linear-gradient(135deg, ${p.color} 0%, ${p.color}cc 100%)`, boxShadow: `0 4px 20px ${p.color}44` }
                  }
                >
                  {p.btn}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="wave-bottom">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ height: '60px' }}>
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#faf7ff" />
          </svg>
        </div>
      </section>

      {/* Support Plans - Light */}
      <section className="section-services relative py-24 overflow-hidden">
        <div className="container relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <span className="badge mb-4">Ongoing Support</span>
            <h2 className="text-brand-navy mb-3">Support &amp; <span className="gradient-text">Maintenance</span></h2>
            <div className="section-divider section-divider-center" />
            <p className="text-gray-500 max-w-xl mx-auto text-lg font-medium">
              Keep your website fast, secure and up to date with our dedicated support packages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {supportPlans.map((p, i) => (
              <div key={i} className="pricing-card flex flex-col h-full relative" style={{ border: p.popular ? `2px solid ${p.color}` : undefined, boxShadow: p.popular ? `0 0 30px ${p.color}33` : undefined }}>
                <div className="flex justify-between items-start mb-5">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: `${p.color}12` }}>
                    <svg className="w-5 h-5" style={{ color: p.color }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  {p.popular && (
                    <div
                      className="px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-wider text-white whitespace-nowrap"
                      style={{ background: `linear-gradient(135deg, ${p.color} 0%, #ec4899 100%)` }}
                    >
                      Popular
                    </div>
                  )}
                </div>
                <h3 className="text-brand-navy font-bold text-xl mb-1">{p.name}</h3>
                <div className="mb-6 flex items-baseline flex-wrap">
                  <span className="text-4xl font-black text-brand-navy">{p.price}</span>
                  <span className="text-gray-400 text-sm ml-1 whitespace-nowrap">{p.period}</span>
                </div>
                <ul className="space-y-2.5 mb-8 flex-grow">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-sm text-gray-600 font-medium">
                      <svg className="w-4 h-4 flex-shrink-0" style={{ color: p.color }} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  id={`support-${p.name.toLowerCase().replace(/\s/g, '-')}`}
                  className="block w-full text-center py-3.5 rounded-xl font-bold text-sm text-white transition-all hover:scale-105 mt-auto"
                  style={{ background: `linear-gradient(135deg, ${p.color} 0%, ${p.color}cc 100%)`, boxShadow: `0 4px 16px ${p.color}40` }}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="wave-bottom">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ height: '60px' }}>
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#090d16" />
          </svg>
        </div>
      </section>

      {/* FAQ - Dark */}
      <section className="navy-section relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern-dark opacity-30" />
        <div className="container relative z-10 max-w-3xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <span className="badge mb-4" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}>FAQ</span>
            <h2 className="text-white mb-3">Common <span className="gradient-text">Questions</span></h2>
            <div className="section-divider section-divider-center" />
          </div>

          <FaqAccordion />
        </div>

        <div className="wave-bottom">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ height: '60px' }}>
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* CTA - Light */}
      <section className="relative py-24 overflow-hidden" style={{ background: '#ffffff' }}>
        <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[140px] pointer-events-none" style={{ background: 'rgba(99,102,241,0.12)', transform: 'translate(30%,-30%)' }} />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-[140px] pointer-events-none" style={{ background: 'rgba(251,146,60,0.08)', transform: 'translate(-30%,30%)' }} />

        <div className="container relative z-10 text-center animate-fade-in">
          <h2 className="text-brand-navy mb-4" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 900 }}>
            Not Sure Which Plan? <span className="gradient-text-warm">Let&apos;s Talk</span>
          </h2>
          <p className="text-gray-500 text-lg font-medium max-w-xl mx-auto mb-10">
            Book a free consultation and we&apos;ll recommend the best plan for your business and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              id="pricing-cta-contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-2xl font-bold text-white text-base transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg,#fb923c,#ec4899,#6366f1)', boxShadow: '0 8px 32px rgba(251,146,60,0.3)' }}
            >
              Book Free Consultation
            </Link>
            <a
              href="https://wa.me/919344832658"
              target="_blank"
              rel="noopener noreferrer"
              id="pricing-cta-whatsapp"
              className="btn-outline px-10 py-4 inline-flex items-center justify-center gap-2 rounded-2xl font-bold text-base transition-all hover:scale-105"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
