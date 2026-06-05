'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const testimonials = [
  {
    name: 'Arjun Sharma',
    role: 'Founder, TechStart',
    avatar: 21,
    rating: 5,
    color: '#6366f1',
    text: 'Nigoweb delivered an exceptional website that tripled our leads within 3 months. Their attention to detail and SEO expertise is unmatched. Highly recommend!',
  },
  {
    name: 'Priya Nair',
    role: 'CEO, GrowthLab',
    avatar: 22,
    rating: 5,
    color: '#10b981',
    text: 'The team built our custom web app from scratch and it handles thousands of users seamlessly. The UI is beautiful and the performance is incredible.',
  },
  {
    name: 'Rahul Mehta',
    role: 'Director, BuildCo',
    avatar: 23,
    rating: 5,
    color: '#fb923c',
    text: 'Page speed went from 45 to 98 on Google PageSpeed. Conversion rate improved by 40% in just two months. Absolutely worth every penny.',
  },
  {
    name: 'Kavya Krishnan',
    role: 'Owner, StyleShop',
    avatar: 24,
    rating: 5,
    color: '#ec4899',
    text: 'The mobile app they built is polished and intuitive. Customer downloads exceeded 10,000 in the first month. Amazing team to work with!',
  },
  {
    name: 'Vikram Patel',
    role: 'CTO, DataFlow',
    avatar: 25,
    rating: 5,
    color: '#a855f7',
    text: 'Integrated AI chatbot into our platform seamlessly. Support tickets dropped by 60% overnight. The AI solution was exactly what our business needed.',
  },
  {
    name: 'Sneha Rajan',
    role: 'Marketing Head, NexaHub',
    avatar: 26,
    rating: 5,
    color: '#38bdf8',
    text: 'SEO results were visible within weeks. We now rank on page 1 for all our target keywords. Our organic traffic grew by 200% in 3 months.',
  },
];

function TestimonialCard({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <div
      className="h-full rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 cursor-default bg-white"
      style={{ border: `2px solid ${t.color}80` }}
    >
      {/* Top image banner */}
      <div
        className="relative h-28 flex-shrink-0"
        style={{
          backgroundImage: `url('/review-bg.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Color overlay */}
        <div className="absolute inset-0" style={{ background: t.color, opacity: 0.75 }} />

        {/* Avatar — overlapping bottom edge */}
        <div className="absolute -bottom-7 left-6">
          <div className="relative">
            <img
              src={`https://i.pravatar.cc/80?u=${t.avatar}`}
              alt={t.name}
              className="w-14 h-14 rounded-full object-cover"
              style={{ border: `3px solid white` }}
            />
            <div
              className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center"
              style={{ background: t.color, border: '2px solid white' }}
            >
              <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* White body */}
      <div className="flex-1 flex flex-col px-6 pt-10 pb-6">
        {/* Name left, stars right — same line */}
        <div className="flex items-center justify-between mb-1" style={{ minHeight: '20px' }}>
          <span className="text-gray-900 font-bold text-sm">{t.name}</span>
          <span className="flex items-center gap-0.5 text-amber-400 text-lg">★★★★★</span>
        </div>
        <p className="text-xs font-semibold mb-4" style={{ color: t.color }}>{t.role}</p>

        {/* Review text */}
        <p className="text-gray-500 text-sm leading-relaxed flex-1 font-medium">
          &ldquo;{t.text}&rdquo;
        </p>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const update = () => {
      const ipp = window.innerWidth < 1024 ? 1 : 3;
      setItemsPerPage(ipp);
      setCurrentPage(0);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const pages: (typeof testimonials)[] = [];
  for (let i = 0; i < testimonials.length; i += itemsPerPage) {
    pages.push(testimonials.slice(i, i + itemsPerPage));
  }
  const totalPages = pages.length;

  const prev = () => setCurrentPage(p => Math.max(0, p - 1));
  const next = () => setCurrentPage(p => Math.min(totalPages - 1, p + 1));

  return (
    <section
      className="relative py-24 overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-28 pointer-events-none z-10"
        style={{ background: 'linear-gradient(180deg, rgba(7,9,26,0.1) 0%, transparent 100%)' }}
      />
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, rgba(236,72,153,0.06) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }} />
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: '50%', height: '55%',
          background: 'radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 60%)',
          transform: 'translate(25%, -25%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 pointer-events-none"
        style={{
          width: '45%', height: '50%',
          background: 'radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 60%)',
          transform: 'translate(-25%, 25%)',
          filter: 'blur(60px)',
        }}
      />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 60%, rgba(99,102,241,0.04) 0%, transparent 70%)' }}
      />

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span
            className="badge mb-4"
            style={{ background: 'rgba(236,72,153,0.08)', color: '#db2777', borderColor: 'rgba(236,72,153,0.2)' }}
          >
            Client Stories
          </span>
          <h2 className="text-brand-navy mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <div className="section-divider section-divider-center" />
          <p className="text-gray-500 max-w-xl mx-auto font-medium">
            Real results from real businesses. Don&apos;t take our word for it.
          </p>
        </div>

        {/* Average Rating */}
        <div className="flex justify-center mb-10">
          <div
            className="glass px-8 py-5 rounded-2xl flex items-center gap-4"
            style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}
          >
            <div>
              <p className="text-brand-navy text-3xl font-black" style={{ fontFamily: 'Outfit, sans-serif' }}>4.8</p>
              <div className="flex gap-0.5 text-amber-400 text-sm">★★★★★</div>
            </div>
            <div className="w-px h-12 bg-gray-200" />
            <div>
              <p className="text-brand-navy font-bold text-sm">Average Rating</p>
              <p className="text-gray-400 text-xs font-semibold">Based on 50+ reviews</p>
            </div>
          </div>
        </div>

        {/* Slider */}
        <div className="relative">
          {/* Prev arrow */}
          <button
            onClick={prev}
            disabled={currentPage === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 lg:-translate-x-7 z-20 w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-md transition-all duration-200 hover:shadow-lg hover:scale-105 opacity-50 hover:opacity-100 disabled:opacity-20 disabled:cursor-not-allowed"
            style={{ border: '1px solid rgba(236,72,153,0.15)' }}
            aria-label="Previous"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" style={{ color: '#ec4899' }}>
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1.5" fill="none" />
              <path stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M13.5 8.5L10 12l3.5 3.5" />
            </svg>
          </button>

          <div style={{ overflowX: 'clip', overflowY: 'visible' }}>
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentPage * 100}%)` }}
            >
              {pages.map((page, pi) => (
                <div key={pi} className="w-full flex-none flex gap-6">
                  {page.map((t, i) => (
                    <div key={i} style={{ flex: '1 1 0', minWidth: 0 }}>
                      <TestimonialCard t={t} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Next arrow */}
          <button
            onClick={next}
            disabled={currentPage === totalPages - 1}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 lg:translate-x-7 z-20 w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-md transition-all duration-200 hover:shadow-lg hover:scale-105 opacity-50 hover:opacity-100 disabled:opacity-20 disabled:cursor-not-allowed"
            style={{ border: '1px solid rgba(236,72,153,0.15)' }}
            aria-label="Next"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" style={{ color: '#ec4899' }}>
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1.5" fill="none" />
              <path stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M10.5 8.5L14 12l-3.5 3.5" />
            </svg>
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className="h-2.5 rounded-full transition-all duration-300"
              style={{
                width: i === currentPage ? '24px' : '10px',
                background: i === currentPage ? '#ec4899' : '#d1d5db',
              }}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white text-sm transition-all hover:scale-105 hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, #ec4899 0%, #6366f1 100%)',
              boxShadow: '0 8px 32px rgba(236,72,153,0.3)',
            }}
          >
            Start Your Project →
          </Link>
        </div>
      </div>
    </section>
  );
}
