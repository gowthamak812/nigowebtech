import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog | Web Development Tips & SEO Insights | Nigoweb',
  description: 'Read our blog for the latest web development tips, SEO strategies, performance optimization techniques, and industry insights.',
};

const categoryColors: Record<string, string> = {
  'SEO & Performance': '#10b981',
  'SEO':              '#38bdf8',
  'Web Development':  '#6366f1',
  'Design':           '#ec4899',
  'Business':         '#f97316',
  'AI & Innovation':  '#a855f7',
};

const blogPosts = [
  {
    title: 'Why SSG (Static Site Generation) is Perfect for Business Websites',
    excerpt: 'Learn how Static Site Generation delivers lightning-fast websites with excellent SEO performance, perfect for small businesses looking to rank on Google.',
    category: 'SEO & Performance',
    date: 'February 2026',
    readTime: '5 min read',
    slug: 'ssg-perfect-for-business-websites',
    featured: true,
  },
  {
    title: 'Core Web Vitals: What Small Businesses Need to Know',
    excerpt: "Google's Core Web Vitals are crucial for SEO. Discover what they are, why they matter, and how to optimize your website for better rankings.",
    category: 'SEO',
    date: 'January 2026',
    readTime: '7 min read',
    slug: 'core-web-vitals-guide',
    featured: false,
  },
  {
    title: 'React vs WordPress: Which is Better for Your Business?',
    excerpt: 'Comparing modern JavaScript frameworks like React with traditional CMS platforms. Find out which technology stack suits your business needs.',
    category: 'Web Development',
    date: 'January 2026',
    readTime: '6 min read',
    slug: 'react-vs-wordpress',
    featured: false,
  },
  {
    title: 'Mobile-First Design: Why It Matters in 2026',
    excerpt: "With 60%+ of traffic coming from mobile devices, mobile-first design isn't optional anymore. Learn best practices for mobile optimization.",
    category: 'Design',
    date: 'December 2025',
    readTime: '4 min read',
    slug: 'mobile-first-design-2026',
    featured: false,
  },
  {
    title: 'How to Choose the Right Support Package for Your Website',
    excerpt: 'Understanding the different types of website maintenance and support. A guide to choosing the perfect package for your business needs.',
    category: 'Business',
    date: 'December 2025',
    readTime: '5 min read',
    slug: 'choosing-support-package',
    featured: false,
  },
  {
    title: 'AI Chat Assistants: The Future of Customer Service',
    excerpt: 'Explore how AI chat assistants can transform customer service on your website. Benefits, implementation, and what to expect in the near future.',
    category: 'AI & Innovation',
    date: 'November 2025',
    readTime: '6 min read',
    slug: 'ai-chat-assistants-future',
    featured: false,
  },
];

const categories = ['All', 'SEO & Performance', 'Web Development', 'Design', 'Business', 'AI & Innovation'];

const [featured, ...rest] = blogPosts;

export default function BlogPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative pt-20 pb-12 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img src="/banner-img.png" alt="" className="w-full h-full object-cover" loading="eager" fetchPriority="high" decoding="sync" />
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.55)' }} />
        </div>

        <div className="container relative z-10 text-center">
          <span className="badge badge-orange mb-5">Insights &amp; Tips</span>
          <h1 className="mb-4" style={{ color: '#ffffff' }}>
            Our <span className="gradient-text">Blog</span>
          </h1>
          <div className="section-divider section-divider-center" />
          <p className="text-sm font-medium leading-relaxed max-w-xl mx-auto mb-6" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Tips, insights, and best practices for building better websites.
            Learn from our experience helping businesses grow online.
          </p>

          {/* Category filter pills */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-3 max-w-xs sm:max-w-none mx-auto mt-6">
            {categories.map((cat) => {
              const color = categoryColors[cat] ?? '#6366f1';
              const isAll = cat === 'All';
              return (
                <span
                  key={cat}
                  className="flex justify-center px-4 py-2 rounded-full text-[11px] sm:text-xs font-semibold cursor-pointer transition-all hover:-translate-y-1"
                  style={{ background: 'rgba(255,255,255,0.08)', border: `1.5px solid ${isAll ? 'rgba(255,255,255,0.6)' : color}`, color: '#ffffff', backdropFilter: 'blur(12px)', boxShadow: isAll ? 'none' : `0 4px 16px ${color}30` }}
                >
                  {cat}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Posts ─────────────────────────────────────────── */}
      <section className="section-services relative py-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

        <div className="container relative z-10 max-w-6xl mx-auto">

          {/* Featured post */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group block mb-8"
            style={{
              borderRadius: '28px',
              overflow: 'hidden',
              background: '#ffffff',
              border: '1.5px solid rgba(0,0,0,0.06)',
              boxShadow: '0 4px 32px rgba(0,0,0,0.05)',
              transition: 'all 400ms cubic-bezier(0.16,1,0.3,1)',
              textDecoration: 'none',
            }}
          >
            <div className="flex flex-col lg:flex-row">
              {/* Colored panel */}
              <div
                style={{
                  background: `linear-gradient(145deg, ${categoryColors[featured.category]}, ${categoryColors[featured.category]}99)`,
                  minWidth: '320px',
                  maxWidth: '320px',
                  padding: '2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden',
                  flexShrink: 0,
                }}
                className="w-full lg:w-auto min-h-[200px] lg:min-h-0"
              >
                <span style={{
                  position: 'absolute', bottom: '-1rem', right: '-1rem',
                  fontSize: '9rem', fontWeight: 900, lineHeight: 1,
                  color: 'rgba(255,255,255,0.08)', fontFamily: 'Outfit, sans-serif',
                  userSelect: 'none', pointerEvents: 'none',
                }}>01</span>

                <div>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                    padding: '3px 10px', borderRadius: '999px', fontSize: '0.6rem',
                    fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase',
                    color: categoryColors[featured.category], background: '#ffffff',
                    marginBottom: '1rem',
                  }}>
                    ★ Featured
                  </span>
                  <p style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '0.4rem' }}>
                    {featured.category}
                  </p>
                  <p style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.3 }}>
                    {featured.date} · {featured.readTime}
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.8)', fontSize: '0.78rem', fontWeight: 700, marginTop: '1.5rem' }}>
                  Read Article
                  <svg style={{ width: '0.9rem', height: '0.9rem' }} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div style={{ flex: 1, padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span style={{
                  display: 'inline-block', alignSelf: 'flex-start', padding: '3px 12px', borderRadius: '999px',
                  fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: categoryColors[featured.category], background: `${categoryColors[featured.category]}12`,
                  border: `1px solid ${categoryColors[featured.category]}25`, marginBottom: '1rem',
                }}>
                  {featured.category}
                </span>
                <h2 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', fontWeight: 900, color: '#111827', letterSpacing: '-0.03em', lineHeight: 1.25, marginBottom: '1rem' }}
                  className="group-hover:text-indigo-600 transition-colors">
                  {featured.title}
                </h2>
                <p style={{ fontSize: '0.95rem', color: '#6b7280', lineHeight: 1.75, fontWeight: 500 }}>
                  {featured.excerpt}
                </p>
              </div>
            </div>
          </Link>

          {/* Rest — 3-column grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => {
              const color = categoryColors[post.category] ?? '#6366f1';
              return (
                <Link
                  key={i}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col"
                  style={{
                    borderRadius: '22px',
                    overflow: 'hidden',
                    background: '#ffffff',
                    border: '1.5px solid rgba(0,0,0,0.06)',
                    boxShadow: '0 4px 24px rgba(0,0,0,0.05)',
                    transition: 'all 400ms cubic-bezier(0.16,1,0.3,1)',
                    textDecoration: 'none',
                  }}
                >
                  {/* Top accent bar */}
                  <div style={{ height: '4px', background: `linear-gradient(90deg, ${color}, ${color}80)`, flexShrink: 0 }} />

                  <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    {/* Category + number */}
                    <div className="flex items-center justify-between mb-3">
                      <span style={{
                        padding: '3px 10px', borderRadius: '999px', fontSize: '0.6rem',
                        fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase',
                        color, background: `${color}10`, border: `1px solid ${color}20`,
                      }}>
                        {post.category}
                      </span>
                      <span style={{ fontSize: '0.65rem', fontWeight: 800, color: '#d1d5db', letterSpacing: '0.08em' }}>
                        0{i + 2}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#111827', lineHeight: 1.4, letterSpacing: '-0.02em', marginBottom: '0.75rem', flex: 1 }}
                      className="group-hover:text-indigo-600 transition-colors">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p style={{ fontSize: '0.82rem', color: '#6b7280', lineHeight: 1.7, fontWeight: 500, marginBottom: '1.25rem', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' } as React.CSSProperties}>
                      {post.excerpt}
                    </p>

                    {/* Footer */}
                    <div style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      paddingTop: '1rem', borderTop: '1px solid rgba(0,0,0,0.05)',
                    }}>
                      <div style={{ fontSize: '0.72rem', fontWeight: 600, color: '#9ca3af' }}>
                        {post.date} · {post.readTime}
                      </div>
                      <div className="flex items-center gap-1" style={{ fontSize: '0.72rem', fontWeight: 800, color, transition: 'gap 200ms' }}>
                        Read
                        <svg style={{ width: '0.8rem', height: '0.8rem' }} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <img src="/bg-img.png" alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" loading="lazy" decoding="async" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'rgba(0,0,0,0.75)' }} />
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
              <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900, letterSpacing: '-0.04em', color: '#ffffff', lineHeight: 1.15, marginBottom: '1rem' }}>
                Turn Ideas Into{' '}
                <span className="gradient-text-warm">Reality</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.48)', fontSize: '1rem', lineHeight: 1.8, fontWeight: 500, maxWidth: '30rem' }}>
                We build fast, modern, and SEO-optimised websites and apps that help your business grow — just like the projects in our portfolio.
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
                View Our Portfolio
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
