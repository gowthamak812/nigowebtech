import Link from 'next/link';

const services = [
  {
    icon: '🌐', title: 'Website Development', color: '#6366f1', bg: 'rgba(99,102,241,0.08)',
    desc: 'Modern responsive websites optimized for SEO and speed. Built with Next.js for blazing-fast performance.',
    tags: ['Next.js','React','SEO'],
  },
  {
    icon: '⚙️', title: 'Web App Development', color: '#3b82f6', bg: 'rgba(59,130,246,0.08)',
    desc: 'Secure, scalable systems, dashboards, and portals engineered to your business workflows.',
    tags: ['Node.js','APIs','Dashboards'],
  },
  {
    icon: '📱', title: 'Mobile App Development', color: '#10b981', bg: 'rgba(16,185,129,0.08)',
    desc: 'Android and iOS apps using React Native and Flutter — cross-platform with native performance.',
    tags: ['React Native','Flutter','iOS/Android'],
  },
  {
    icon: '🤖', title: 'AI Integration', color: '#a855f7', bg: 'rgba(168,85,247,0.08)',
    desc: 'Chatbots, automation, AI assistants and smart workflows integrated directly into your products.',
    tags: ['OpenAI','Automation','Chatbots'],
  },
  {
    icon: '🔄', title: 'Website Redesign', color: '#fb923c', bg: 'rgba(251,146,60,0.08)',
    desc: 'Upgrade existing websites with modern technologies, improved UI/UX and better page speed scores.',
    tags: ['UI/UX','Performance','Conversion'],
  },
  {
    icon: '📈', title: 'SEO Optimization', color: '#f59e0b', bg: 'rgba(245,158,11,0.08)',
    desc: 'Rank higher on Google. Technical SEO, content strategy, and performance optimization.',
    tags: ['Technical SEO','Rankings','Traffic'],
  },
  {
    icon: '📣', title: 'Digital Marketing', color: '#ec4899', bg: 'rgba(236,72,153,0.08)',
    desc: 'Generate leads and improve business visibility with targeted digital marketing campaigns.',
    tags: ['Ads','Social','Email'],
  },
  {
    icon: '🛡️', title: 'Maintenance & Support', color: '#38bdf8', bg: 'rgba(56,189,248,0.08)',
    desc: 'Ongoing website support, security updates, performance monitoring and 24/7 assistance.',
    tags: ['Security','Updates','Monitoring'],
  },
];

export default function ServicesSection() {
  return (
    <section className="navy-section relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-pattern-dark opacity-30 pointer-events-none" />
      <div className="wave-top">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ height: '60px' }}>
          <path d="M0,30 C360,0 1080,60 1440,30 L1440,0 L0,0 Z" fill="#ffffff" />
        </svg>
      </div>

      {/* Background blobs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full blur-[140px] pointer-events-none" style={{ background: 'rgba(99,102,241,0.06)', transform: 'translate(30%,0)' }} />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full blur-[140px] pointer-events-none" style={{ background: 'rgba(168,85,247,0.06)', transform: 'translate(-30%,0)' }} />

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="badge mb-4" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}>Our Core Expertise</span>
          <h2 className="text-white mb-4">
            Premium <span className="gradient-text-secondary">Digital Services</span>
          </h2>
          <div className="section-divider section-divider-center" />
          <p className="text-blue-200 opacity-80 max-w-2xl mx-auto text-lg font-medium">
            End-to-end digital solutions to help your business excel in the modern marketplace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="card-dark group relative"
              style={{
                cursor: 'default',
                animationDelay: `${i * 0.07}s`,
                '--service-color': s.color,
              } as React.CSSProperties}
            >
              {/* Colored top accent bar (replaces generic gradient on hover) */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, ${s.color}, ${s.color}88)` }}
              />

              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 transition-transform group-hover:scale-110"
                style={{ background: s.bg, border: `1.5px solid ${s.color}22` }}
              >
                {s.icon}
              </div>
              <h3 className="text-white text-base font-bold mb-3 leading-snug">{s.title}</h3>
              <p className="text-blue-200 opacity-75 text-sm leading-relaxed mb-5">{s.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {s.tags.map((t, j) => (
                  <span
                    key={j}
                    className="text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wide"
                    style={{ background: s.bg, color: s.color }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <Link
                href="/services"
                className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-all group-hover:gap-3"
                style={{ color: s.color }}
              >
                Explore
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-14 text-center">
          <Link
            href="/services"
            id="services-view-all"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl font-bold text-white text-sm transition-all hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)', boxShadow: '0 8px 24px rgba(99,102,241,0.3)' }}
          >
            View All Services
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>


    </section>
  );
}
