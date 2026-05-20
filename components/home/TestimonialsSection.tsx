import Link from 'next/link';

const testimonials = [
  {
    name: 'Arjun Sharma', role: 'Founder, TechStart', avatar: 21,
    rating: 5, color: '#6366f1',
    text: 'Nigoweb delivered an exceptional website that tripled our leads within 3 months. Their attention to detail and SEO expertise is unmatched. Highly recommend!',
  },
  {
    name: 'Priya Nair', role: 'CEO, GrowthLab', avatar: 22,
    rating: 5, color: '#10b981',
    text: 'The team built our custom web app from scratch and it handles thousands of users seamlessly. The UI is beautiful and the performance is incredible.',
  },
  {
    name: 'Rahul Mehta', role: 'Director, BuildCo', avatar: 23,
    rating: 5, color: '#fb923c',
    text: 'Our website redesign was completed ahead of schedule. Page speed went from 45 to 98 on Google. Our conversion rate improved by 40% in just two months.',
  },
  {
    name: 'Kavya Krishnan', role: 'Owner, StyleShop', avatar: 24,
    rating: 5, color: '#ec4899',
    text: 'The mobile app they built for us is polished and intuitive. Customer downloads exceeded 10,000 in the first month. Amazing team to work with!',
  },
  {
    name: 'Vikram Patel', role: 'CTO, DataFlow', avatar: 25,
    rating: 5, color: '#a855f7',
    text: 'Integrated AI chatbot into our platform seamlessly. Support tickets dropped by 60% overnight. The AI solution was exactly what our business needed.',
  },
  {
    name: 'Sneha Rajan', role: 'Marketing Head, NexaHub', avatar: 26,
    rating: 5, color: '#38bdf8',
    text: 'SEO results were visible within weeks. We now rank on page 1 for all our target keywords. Our organic traffic grew by 200% in 3 months.',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-testimonials relative py-24 overflow-hidden">


      {/* Soft background glow */}
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[400px] rounded-full blur-[160px] pointer-events-none" style={{ background: 'rgba(236,72,153,0.05)', transform: 'translate(-50%,-50%)' }} />

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="badge mb-4" style={{ background: 'rgba(236,72,153,0.08)', color: '#db2777', borderColor: 'rgba(236,72,153,0.2)' }}>
            Client Stories
          </span>
          <h2 className="text-brand-navy mb-4">What Our <span className="gradient-text">Clients Say</span></h2>
          <div className="section-divider section-divider-center" />
          <p className="text-gray-500 max-w-xl mx-auto text-lg font-medium">
            Real results from real businesses. Don&apos;t take our word for it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-3xl p-6 border transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl"
              style={{
                border: `1px solid rgba(0,0,0,0.06)`,
                boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
                borderTop: `3px solid ${t.color}`,
              }}
            >
              {/* Large quote mark */}
              <div
                className="absolute top-4 right-5 text-6xl font-black leading-none font-serif select-none"
                style={{ color: `${t.color}18` }}
              >
                "
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array(t.rating).fill(0).map((_, j) => (
                  <span key={j} className="text-yellow-400 text-sm">★</span>
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-6 font-medium relative z-10">&ldquo;{t.text}&rdquo;</p>

              <div className="flex items-center gap-3">
                <div className="relative flex-shrink-0">
                  <img
                    src={`https://i.pravatar.cc/80?u=${t.avatar}`}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover"
                    style={{ border: `2.5px solid ${t.color}` }}
                  />
                  {/* Verified badge */}
                  <div
                    className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: t.color }}
                  >
                    <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-brand-navy font-bold text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Review aggregator */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6">
          <div className="glass px-8 py-5 rounded-2xl flex items-center gap-4">
            <div>
              <p className="text-brand-navy text-3xl font-black">4.9</p>
              <div className="star-rating text-sm">★★★★★</div>
            </div>
            <div className="w-px h-12 bg-gray-200" />
            <div>
              <p className="text-brand-navy font-bold text-sm">Average Rating</p>
              <p className="text-gray-400 text-xs font-semibold">Based on 50+ reviews</p>
            </div>
          </div>
          <Link
            href="/contact"
            id="testimonials-cta"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-sm transition-all hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #ec4899 0%, #6366f1 100%)', boxShadow: '0 8px 24px rgba(236,72,153,0.3)' }}
          >
            Start Your Project →
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
