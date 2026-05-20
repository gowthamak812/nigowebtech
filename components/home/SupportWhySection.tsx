import Link from 'next/link';

const plans = [
  {
    name: 'Basic Support',
    price: '₹5,000',
    period: '/year or /month',
    color: '#6366f1',
    features: ['Website Maintenance','Security Updates','Bug Fixes','Email Support','Monthly Report'],
  },
  {
    name: 'Mid Support',
    price: '₹7,000',
    period: '/month',
    color: '#fb923c',
    popular: true,
    features: ['Priority Support','Monthly Updates','Performance Monitoring','Chat Support','Uptime Monitoring'],
  },
  {
    name: 'Premium Support',
    price: '₹10,000',
    period: '/month',
    color: '#a855f7',
    features: ['Daily Support','Dedicated Manager','Full Maintenance','Fast Issue Resolution','Server Monitoring','24/7 Emergency Line'],
  },
];

const whyUs = [
  { icon: '🎨', title: 'Premium UI/UX',        desc: 'Pixel-perfect designs that convert visitors into customers.' },
  { icon: '🔍', title: 'SEO Optimized',        desc: 'Built for top search rankings from day one.' },
  { icon: '⚡', title: 'Fast Performance',     desc: 'Sub-second load times on all devices.' },
  { icon: '📐', title: 'Scalable Architecture',desc: 'Systems that grow as your business grows.' },
  { icon: '🔒', title: 'Secure Applications',  desc: 'Enterprise-grade security in every project.' },
  { icon: '💰', title: 'Affordable Pricing',   desc: 'Premium quality without the premium price tag.' },
  { icon: '🤝', title: 'Dedicated Support',    desc: 'A team that stays with you long after launch.' },
  { icon: '🌱', title: 'Long-term Partnership',desc: 'We invest in your success, not just your project.' },
];

export default function SupportWhySection() {
  return (
    <>
      {/* Support Plans */}
      <section className="section-support relative py-24 overflow-hidden">
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <span className="badge mb-4">Ongoing Support</span>
            <h2 className="text-brand-navy mb-4">Support <span className="gradient-text">Plans</span></h2>
            <div className="section-divider section-divider-center" />
            <p className="text-gray-500 max-w-xl mx-auto text-lg font-medium">
              Keep your website healthy, fast and secure with our dedicated support packages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((p, i) => (
              <div
                key={i}
                className="pricing-card relative group"
                style={{ border: p.popular ? `2px solid ${p.color}40` : undefined }}
              >
                {p.popular && (
                  <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider text-white"
                    style={{ background: `linear-gradient(135deg, ${p.color} 0%, #ec4899 100%)` }}
                  >
                    Popular
                  </div>
                )}
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: `${p.color}12` }}>
                  <svg className="w-5 h-5" style={{ color: p.color }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-brand-navy font-bold text-lg mb-1">{p.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-black text-brand-navy">{p.price}</span>
                  <span className="text-gray-400 text-sm ml-1">{p.period}</span>
                </div>
                <ul className="space-y-2.5 mb-8">
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
                  className="block w-full text-center py-3 rounded-xl font-bold text-sm text-white transition-all hover:scale-105"
                  style={{ background: `linear-gradient(135deg, ${p.color} 0%, ${p.color}cc 100%)`, boxShadow: `0 4px 16px ${p.color}40` }}
                  id={`support-${p.name.toLowerCase().replace(/\s/g,'-')}`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="wave-bottom">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ height: '60px' }}>
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#f8f4ff" />
          </svg>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-whyus relative py-24 overflow-hidden">
        <div className="wave-top">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ height: '60px' }}>
            <path d="M0,30 C360,0 1080,60 1440,30 L1440,0 L0,0 Z" fill="#f7f7f7" />
          </svg>
        </div>

        <div className="container relative z-10">
          <div className="text-center mb-16">
            <span className="badge mb-4">Why Choose Us</span>
            <h2 className="text-brand-navy mb-4">The <span className="gradient-text">Nigoweb</span> Advantage</h2>
            <div className="section-divider section-divider-center" />
            <p className="text-gray-500 max-w-xl mx-auto text-lg font-medium">
              We bring together design excellence, technical mastery, and a genuine commitment to your growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((w, i) => (
              <div key={i} className="card text-center group">
                <div className="text-4xl mb-4 transition-transform group-hover:scale-125">{w.icon}</div>
                <h3 className="text-brand-navy text-base font-bold mb-2">{w.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="wave-bottom">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ height: '60px' }}>
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#fff8f8" />
          </svg>
        </div>
      </section>
    </>
  );
}
