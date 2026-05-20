import Link from 'next/link';

const plans = [
  {
    tag: 'Startups & Portfolios',
    name: 'Basic Website',
    price: '₹9,999',
    period: 'one-time',
    desc: 'Perfect for small businesses and startups.',
    featured: false,
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
    href: '/contact',
  },
  {
    tag: 'Growing Businesses',
    name: 'Professional Website',
    price: '₹14,999',
    period: 'one-time',
    desc: 'Ideal for growing businesses that need more.',
    featured: true,
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
    href: '/contact',
  },
  {
    tag: 'SaaS & Enterprise',
    name: 'Custom Enterprise',
    price: 'Custom',
    period: 'pricing',
    desc: 'For businesses needing advanced custom solutions.',
    featured: false,
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
    href: '/contact',
  },
];

export default function PricingSection() {
  return (
    <section className="navy-section relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-pattern-dark opacity-30 pointer-events-none" />

      <div className="wave-top">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ height: '60px' }}>
          <path d="M0,30 C360,0 1080,60 1440,30 L1440,0 L0,0 Z" fill="#fef0f5" />
        </svg>
      </div>

      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none animate-blob" style={{ background: 'rgba(99,102,241,0.12)', transform: 'translate(30%,-30%)' }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none animate-blob" style={{ background: 'rgba(251,146,60,0.08)', transform: 'translate(-30%,30%)', animationDelay: '4s' }} />

      <div className="container relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <span className="badge mb-4" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}>
            Website Plans
          </span>
          <h2 className="text-white mb-3">
            Simple, <span className="gradient-text-warm">Affordable</span> Plans
          </h2>
          <div className="section-divider section-divider-center" />
          <p className="text-blue-100 opacity-80 max-w-xl mx-auto text-lg font-medium">
            No hidden fees. One-time payment. Own your website forever.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {plans.map((p, i) => (
            <div
              key={i}
              className={`pricing-card flex flex-col h-full relative ${
                p.featured
                  ? 'featured shadow-[0_0_60px_rgba(99,102,241,0.35)] !border-2 !border-indigo-500'
                  : ''
              }`}
            >
              {p.badge && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider text-white whitespace-nowrap"
                  style={{
                    background: 'linear-gradient(135deg, #fb923c 0%, #ec4899 100%)',
                    boxShadow: '0 4px 20px rgba(251,146,60,0.45)',
                  }}
                >
                  {p.badge}
                </div>
              )}

              <div className="flex justify-between items-start mb-3">
                <p className={`text-[10px] font-bold uppercase tracking-widest mt-1 ${p.featured ? 'text-blue-300' : 'text-gray-400'}`}>
                  {p.tag}
                </p>
              </div>

              <h3 className={`text-xl font-bold mb-1 ${p.featured ? '!text-white' : '!text-brand-navy'}`}>
                {p.name}
              </h3>
              <p className={`text-xs mb-4 ${p.featured ? 'text-blue-300' : 'text-gray-400'}`}>{p.desc}</p>

              <div className="mb-6 flex items-baseline flex-wrap">
                <span className={`text-5xl font-black ${p.featured ? 'text-white' : 'text-brand-navy'}`}>
                  {p.price}
                </span>
                <span className={`text-sm ml-2 whitespace-nowrap ${p.featured ? 'text-blue-200' : 'text-gray-500'}`}>
                  {p.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2.5">
                    <span
                      className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                        p.featured ? 'bg-white/15' : 'bg-green-50'
                      }`}
                    >
                      <svg
                        className="w-3 h-3"
                        style={{ color: p.featured ? '#6ee7b7' : '#10b981' }}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className={`text-sm font-medium ${p.featured ? 'text-blue-100' : 'text-gray-600'}`}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={p.href}
                id={`home-pricing-${p.name.toLowerCase().replace(/\s/g, '-')}`}
                className="block w-full text-center py-3.5 rounded-xl font-bold text-sm transition-all hover:scale-105 mt-auto"
                style={
                  p.featured
                    ? { background: 'white', color: '#1a2453', boxShadow: '0 4px 20px rgba(255,255,255,0.2)' }
                    : {
                        background: `linear-gradient(135deg, ${p.color} 0%, ${p.color}cc 100%)`,
                        color: 'white',
                        boxShadow: `0 4px 20px ${p.color}44`,
                      }
                }
              >
                {p.btn}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/pricing"
            id="home-pricing-view-all"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-300 hover:text-white transition-colors"
          >
            View Full Pricing & Support Plans
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      <div className="wave-bottom">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ height: '60px' }}>
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
