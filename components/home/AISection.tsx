const features = [
  {
    title: 'AI Chatbot',
    desc: 'Intelligent chatbots that handle customer queries, bookings, and support 24/7 without human intervention.',
    color: '#c084fc',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: 'Workflow Automation',
    desc: 'Automate repetitive business tasks, approvals, and data processing to save hours every single day.',
    color: '#818cf8',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: 'Smart Recommendations',
    desc: 'Personalized product, content, or service recommendations powered by machine learning models.',
    color: '#60a5fa',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Customer Support AI',
    desc: 'AI-powered support systems that resolve tickets instantly and escalate when human assistance is needed.',
    color: '#34d399',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: 'Business Analytics',
    desc: 'AI-driven dashboards that turn raw data into actionable insights, forecasts, and growth metrics.',
    color: '#fb923c',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

export default function AISection() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #07091a 0%, #0d1230 50%, #07091a 100%)' }}
    >
      {/* Light-to-dark transition from WhyUsSection above */}
      <div className="absolute top-0 left-0 right-0 h-20 pointer-events-none z-10"
        style={{ background: 'linear-gradient(180deg, rgba(247,245,255,0.08) 0%, transparent 100%)' }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern-dark opacity-25 pointer-events-none" />

      {/* Glow orbs */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.18) 0%, transparent 60%)', transform: 'translate(35%, -35%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 60%)', transform: 'translate(-35%, 35%)' }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(96,165,250,0.06) 0%, transparent 70%)', transform: 'translate(-50%,-50%)' }}
      />

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
            style={{ background: 'rgba(168,85,247,0.12)', color: '#c084fc', border: '1px solid rgba(168,85,247,0.3)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            AI-Powered Solutions
          </span>
          <h2
            className="mb-4"
            style={{ color: '#ffffff' }}
          >
            Smart{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #c084fc 0%, #818cf8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              AI Integration
            </span>
          </h2>
          <div
            className="section-divider section-divider-center"
            style={{ background: 'linear-gradient(90deg, #a855f7, #6366f1)' }}
          />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-medium">
            Transform your business with intelligent automation. Available for custom and premium projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              className={`group relative rounded-3xl p-7 transition-all duration-400 hover:-translate-y-2 cursor-default overflow-hidden ${i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
                backdropFilter: 'blur(12px)',
              }}
            >
              {/* Hover glow border */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ border: `1px solid ${f.color}45`, boxShadow: `0 0 50px ${f.color}12` }}
              />

              {/* Top shimmer line on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-t-3xl"
                style={{ background: `linear-gradient(to right, transparent, ${f.color}80, transparent)` }}
              />

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 relative z-10"
                style={{ background: `${f.color}18`, border: `1px solid ${f.color}30`, color: f.color }}
              >
                {f.icon}
              </div>

              <h3 className="font-bold mb-3 text-lg relative z-10" style={{ color: '#f1f5f9' }}>{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed relative z-10">{f.desc}</p>

              {/* Bottom accent bar */}
              <div
                className="mt-6 h-0.5 w-10 rounded-full transition-all duration-400 group-hover:w-20 relative z-10"
                style={{ background: `linear-gradient(to right, ${f.color}, transparent)` }}
              />
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div
          className="mt-16 p-8 lg:p-12 rounded-3xl text-center relative overflow-hidden"
          style={{
            background: 'rgba(99,102,241,0.1)',
            border: '1px solid rgba(99,102,241,0.25)',
            backdropFilter: 'blur(16px)',
          }}
        >
          <div className="absolute inset-0 grid-pattern-dark opacity-20 pointer-events-none" />
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[180px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(168,85,247,0.22) 0%, transparent 70%)' }}
          />
          <div className="relative z-10">
            <p className="text-white font-bold text-xl mb-2">Ready to integrate AI into your business?</p>
            <p className="mb-8" style={{ color: 'rgba(148,163,184,0.75)', fontSize: '0.875rem' }}>
              Book a free consultation and discover what AI can do for you.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl font-bold text-white text-sm transition-all hover:scale-105 hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)',
                boxShadow: '0 8px 32px rgba(168,85,247,0.45)',
              }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Explore AI Solutions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
