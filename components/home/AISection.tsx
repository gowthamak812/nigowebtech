const features = [
  { icon: '🤖', title: 'AI Chatbot',             desc: 'Intelligent chatbots that handle customer queries, bookings, and support 24/7 without human intervention.', color: '#a855f7' },
  { icon: '⚡', title: 'Workflow Automation',    desc: 'Automate repetitive business tasks, approvals, and data processing to save hours every day.', color: '#6366f1' },
  { icon: '💡', title: 'Smart Recommendations', desc: 'Personalized product, content, or service recommendations powered by machine learning models.', color: '#3b82f6' },
  { icon: '🎧', title: 'Customer Support AI',   desc: 'AI-powered support systems that resolve tickets instantly and escalate when human assistance is needed.', color: '#10b981' },
  { icon: '📊', title: 'Business Analytics',    desc: 'AI-driven dashboards that turn raw data into actionable insights, forecasts, and growth metrics.', color: '#fb923c' },
];

export default function AISection() {
  return (
    <section className="section-ai relative py-24 overflow-hidden" style={{ background: '#f5f7ff' }}>
      {/* Grid pattern for light bg */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

      {/* Glow orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none" style={{ background: 'rgba(168,85,247,0.14)', transform: 'translate(30%,-30%)' }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none" style={{ background: 'rgba(99,102,241,0.1)', transform: 'translate(-30%,30%)' }} />
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] rounded-full blur-[200px] pointer-events-none animate-blob" style={{ background: 'rgba(56,189,248,0.05)', transform: 'translate(-50%,-50%)' }} />

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
            style={{ background: 'rgba(168,85,247,0.15)', color: '#c084fc', border: '1px solid rgba(168,85,247,0.25)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            AI-Powered Solutions
          </span>
          <h2 className="text-brand-navy mb-4">
            Smart <span style={{ background: 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>AI Integration</span>
          </h2>
          <div className="section-divider section-divider-center" style={{ background: 'linear-gradient(90deg, #a855f7, #6366f1)' }} />
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">
            AI integration available for custom and premium websites and applications. Transform your business with intelligent automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className={`group relative bg-white rounded-3xl p-6 border border-gray-100 shadow-sm transition-all duration-400 hover:-translate-y-2 ${i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              {/* Hover glow border */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ border: `1px solid ${f.color}40`, boxShadow: `0 0 30px ${f.color}20` }}
              />

              {/* Number indicator */}
              <div className="text-[10px] font-black uppercase tracking-widest mb-3" style={{ color: `${f.color}80` }}>
                {String(i + 1).padStart(2, '0')}
              </div>

              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 transition-all group-hover:scale-110 relative z-10"
                style={{ background: `${f.color}18`, border: `1.5px solid ${f.color}30` }}
              >
                {f.icon}
              </div>
              <h3 className="text-brand-navy font-bold mb-3 text-lg relative z-10">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed relative z-10">{f.desc}</p>
              <div className="mt-5 h-0.5 w-10 rounded-full transition-all duration-300 group-hover:w-20 relative z-10" style={{ background: `linear-gradient(to right, ${f.color}, transparent)` }} />
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div
          className="mt-16 p-8 rounded-3xl text-center relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #090d16 0%, #1e1b4b 100%)', border: '1px solid rgba(99,102,241,0.2)' }}
        >
          <div className="absolute inset-0 grid-pattern-dark opacity-50 pointer-events-none" />
          <div className="relative z-10">
            <p className="text-white font-bold text-xl mb-2">Ready to integrate AI into your business?</p>
            <p className="text-blue-200 text-sm mb-6 opacity-80">Book a free consultation and discover what AI can do for you.</p>
            <a
              href="/contact"
              id="ai-section-cta"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white text-sm transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)', boxShadow: '0 8px 24px rgba(168,85,247,0.4)' }}
            >
              🤖 Explore AI Solutions
            </a>
          </div>
        </div>
      </div>

      <div className="wave-bottom">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ height: '60px' }}>
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#fff8f8" />
        </svg>
      </div>
    </section>
  );
}
