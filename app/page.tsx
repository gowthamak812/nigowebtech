import type { Metadata } from 'next';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'Modern Web Development Services | Nigoweb Technologies',
  description: 'Professional web development company in Coimbatore. We build SEO-optimized websites, web applications, and mobile apps for growing businesses. Fast, modern, and reliable.',
};

const MinimalBackground = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
    <div className="absolute top-1/4 -left-10 w-64 h-64 bg-rose/5 rounded-full blur-[80px]"></div>
    <div className="absolute bottom-1/4 -right-10 w-80 h-80 bg-blue/5 rounded-full blur-[100px]"></div>
  </div>
);

const GeometricBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Base Crisp Light Layer */}
    <div className="absolute inset-0 bg-white"></div>

    {/* Large Angular Design Shapes - Inspired by Miles & Barr structure */}
    <div
      className="absolute inset-0 bg-gradient-to-br from-[#e0f2fe] via-transparent to-transparent opacity-80"
      style={{ clipPath: 'polygon(0 0, 80% 0, 40% 100%, 0% 100%)' }}
    ></div>

    <div
      className="absolute inset-0 bg-gradient-to-bl from-[#fff7ed] via-[#fff1f2] to-transparent opacity-70"
      style={{ clipPath: 'polygon(100% 0, 40% 0, 80% 100%, 100% 100%)' }}
    ></div>

    {/* Secondary Sharp Geometric Overlays for depth */}
    <div
      className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue/10 to-transparent"
      style={{ clipPath: 'polygon(100% 0, 60% 0, 100% 40%)' }}
    ></div>

    <div
      className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-rose/5 to-transparent"
      style={{ clipPath: 'polygon(0 100%, 40% 100%, 0% 60%)' }}
    ></div>

    {/* Subtle Decorative Accents */}
    <div className="absolute top-[15%] left-[10%] w-[500px] h-[500px] bg-blue/10 rounded-full blur-[120px] animate-pulse"></div>
    <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-orange/10 rounded-full blur-[120px] animate-pulse [animation-delay:2s]"></div>

    {/* Clean Geometric Grid */}
    <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)', backgroundSize: '80px 80px' }}></div>
  </div>
);

export default function Home() {
  return (
    <>
      {/* Centered Colorful Hero Section - Refined Design */}
      <section className="min-h-[780px] flex items-center justify-center relative overflow-hidden pt-24 pb-12">
        <GeometricBackground />
        <div className="container relative z-10 flex flex-col items-center">
          <div className="max-w-5xl w-full text-center space-y-12">

            {/* Main Heading - Multi-color & Centered */}
            <div className="space-y-6">
              <h1 className="text-navy text-5xl md:text-7xl lg:text-9xl leading-[1.1] font-black animate-slide-in-up tracking-tight">
                Building <span className="text-orange">Websites</span> <br className="hidden md:block" />
                That <span className="text-blue">Drive</span> <span className="text-rose">Real</span> <span className="text-green">Growth</span>
              </h1>

              {/* Subheading */}
              <p className="text-xl md:text-2xl text-gray-600 eading-relaxed animate-slide-in-up font-medium">
                Premium web development & SEO solutions tailored for your success.
                We blend <span className="text-navy font-bold underline decoration-orange/30 decoration-2 underline-offset-4">stunning design</span> with <span className="text-navy font-bold underline decoration-blue/30 decoration-2 underline-offset-4">vibrant functionality</span> to scale your revenue.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-in-up">

              <CTAButton href="/contact" variant="primary" className="text-lg px-12 py-5 bg-gradient-to-r from-orange to-rose border-none hover:scale-105 transition-all text-white shadow-xl shadow-orange/20 min-w-[240px]">
                Get Your Free Quote
              </CTAButton>
              <CTAButton href="/portfolio" variant="outline" className="text-navy border-navy/20 hover:bg-navy hover:text-white text-lg px-12 py-5 min-w-[240px]">
                View Our Portfolio
              </CTAButton>
            </div>

            {/* Trust Badge - Ultra Refined */}
            <div className="flex justify-center animate-fade-in mt-8">
              <div className="glass px-6 py-2.5 rounded-full flex items-center gap-4 shadow-sm border border-navy/5">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-9 h-9 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center overflow-hidden shadow-sm">
                      <img src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col items-start leading-none gap-1">
                  <div className="flex items-center gap-1.5">
                    <div className="star-rating text-orange text-[10px] flex">★★★★★</div>
                    <span className="text-navy text-xs font-bold tracking-tight">4.9/5 Rating</span>
                  </div>
                  <span className="text-gray-500 text-[10px] font-medium uppercase tracking-wider">Trusted by 50+ businesses</span>
                </div>
              </div>
            </div>

            {/* Achievement Badges - Light Version */}
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { icon: '🎯', text: 'Result-Driven' },
                { icon: '⚡', text: 'Fast Delivery' },
                { icon: '🔒', text: 'Secure Code' },
                { icon: '🌟', text: 'Premium Quality' },
                { icon: '💡', text: 'Innovative' },
              ].map((badge, idx) => (
                <div key={idx} className="group">
                  <div className="px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-gray-300 hover:bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                    <div className="flex items-center gap-2">
                      <span className="text-base">{badge.icon}</span>
                      <span className="text-gray-700 font-semibold text-xs uppercase tracking-wider">{badge.text}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview - Modern White Section */}
      <section className="section bg-white relative overflow-hidden border-t border-gray-100">
        <MinimalBackground />
        <div className="container relative z-10">
          <div className="max-w-3xl mb-16 text-left">
            <h2 className="mb-4 text-navy">Premium Solutions</h2>
            <div className="h-2 w-24 bg-gradient-to-r from-rose via-orange to-blue mb-8"></div>
            <p className="text-2xl text-gray-700 font-medium">
              We provide end-to-end digital services to help your business excel in the modern marketplace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Web Development - Rose */}
            <div className="card group hover:border-rose/40 bg-white/80 backdrop-blur-sm">
              <div className="icon-rose mb-8 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-2xl mb-4 text-navy">Web Development</h3>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                High-performance websites built with Next.js and React, optimized for speed and user experience.
              </p>
              <a href="/services#web-development" className="text-rose font-black hover:tracking-wider transition-all flex items-center gap-2 text-sm uppercase tracking-widest">
                Explore Solution
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>

            {/* Mobile Apps - Blue */}
            <div className="card group hover:border-blue/40 bg-white/80 backdrop-blur-sm">
              <div className="icon-blue mb-8 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl mb-4 text-navy">Mobile Applications</h3>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Reach your customers anywhere with native and hybrid mobile apps built for scale.
              </p>
              <a href="/services#mobile-apps" className="text-blue font-black hover:tracking-wider transition-all flex items-center gap-2 text-sm uppercase tracking-widest">
                Explore Solution
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>

            {/* SEO - Orange */}
            <div className="card group hover:border-orange/40 bg-white/80 backdrop-blur-sm">
              <div className="icon-orange mb-8 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl mb-4 text-navy">SEO & Performance</h3>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Be seen by the right people at the right time. We optimize for search engines and performance.
              </p>
              <a href="/services#seo" className="text-orange font-black hover:tracking-wider transition-all flex items-center gap-2 text-sm uppercase tracking-widest">
                Explore Solution
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>

            {/* E-Commerce - Green */}
            <div className="card group hover:border-green/40 bg-white/80 backdrop-blur-sm">
              <div className="icon-green mb-8 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl mb-4 text-navy">E-Commerce</h3>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Sell smarter with fully integrated e-commerce solutions that drive conversion and loyalty.
              </p>
              <a href="/services#ecommerce" className="text-green font-black hover:tracking-wider transition-all flex items-center gap-2 text-sm uppercase tracking-widest">
                Explore Solution
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>

            {/* UI/UX - Rose/Blue Gradient */}
            <div className="card group hover:border-blue/40 bg-white/80 backdrop-blur-sm">
              <div className="icon-blue mb-8 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-3.343M7 21c-2.21 0-4-1.79-4-4m5-3.343l-3.343-3.343" />
                </svg>
              </div>
              <h3 className="text-2xl mb-4 text-navy">UI/UX Design</h3>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                User-centric design that not only looks beautiful but functions perfectly across all platforms.
              </p>
              <a href="/services#design" className="text-blue font-black hover:tracking-wider transition-all flex items-center gap-2 text-sm uppercase tracking-widest">
                Explore Solution
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>

            {/* Custom - Green/Orange */}
            <div className="card group hover:border-orange/40 bg-white/80 backdrop-blur-sm">
              <div className="icon-orange mb-8 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.022.547l-2.387 2.387a2 2 0 001.414 3.414h15.828a2 2 0 001.414-3.414l-2.387-2.387z" />
                </svg>
              </div>
              <h3 className="text-2xl mb-4 text-navy">Custom Web Apps</h3>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Solve complex business problems with custom developed software that fits your exact needs.
              </p>
              <a href="/services#custom" className="text-orange font-black hover:tracking-wider transition-all flex items-center gap-2 text-sm uppercase tracking-widest">
                Explore Solution
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack - Ultra Premium Redesign */}
      <section className="section relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
        {/* Elegant Background */}
        <div className="absolute inset-0">
          {/* Soft Gradient Orbs */}
          <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-gradient-to-br from-blue-100/40 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-tl from-orange-100/40 to-transparent rounded-full blur-3xl"></div>

          {/* Minimal Grid */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: 'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}></div>
        </div>

        <div className="container relative z-10">
          {/* Section Header */}
          <div className="max-w-5xl mx-auto mb-20 text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-navy/5 border border-navy/10 mb-8">
              <span className="text-xs font-bold text-navy uppercase tracking-[0.2em]">Technology Stack</span>
            </div>

            <h2 className="mb-6 text-navy text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
              Built with the <br className="hidden md:block" />
              <span className="relative inline-block mt-2">
                Best Technologies
                <svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 400 12" fill="none">
                  <path d="M2 6C100 2 300 2 398 6" stroke="url(#tech-gradient)" strokeWidth="4" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="tech-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgb(249 115 22)" />
                      <stop offset="50%" stopColor="rgb(244 63 94)" />
                      <stop offset="100%" stopColor="rgb(59 130 246)" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h2>

            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-medium">
              We use industry-leading tools and frameworks to create powerful, scalable solutions.
            </p>
          </div>

          {/* Main Tech Grid - Bento Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                name: 'React',
                icon: '⚛️',
                tagline: 'UI Framework',
                desc: 'Component-based architecture for lightning-fast, interactive interfaces',
                stat: '18+',
                statLabel: 'Version',
                accent: 'from-blue-500/10 to-cyan-500/10',
                border: 'border-blue-200/50',
                hoverBorder: 'hover:border-blue-400/70'
              },
              {
                name: 'Next.js',
                icon: '▲',
                tagline: 'React Framework',
                desc: 'Production-ready full-stack applications with SSR and optimal SEO',
                stat: '14+',
                statLabel: 'Version',
                accent: 'from-gray-500/10 to-slate-500/10',
                border: 'border-gray-200/50',
                hoverBorder: 'hover:border-gray-400/70'
              },
              {
                name: 'React Native',
                icon: '📱',
                tagline: 'Mobile Framework',
                desc: 'Native mobile apps for iOS and Android from a single codebase',
                stat: 'iOS + Android',
                statLabel: 'Platforms',
                accent: 'from-rose-500/10 to-pink-500/10',
                border: 'border-rose-200/50',
                hoverBorder: 'hover:border-rose-400/70'
              },
              {
                name: 'Node.js',
                icon: '🟢',
                tagline: 'Backend Runtime',
                desc: 'Scalable server-side applications with JavaScript runtime',
                stat: '20+',
                statLabel: 'Version',
                accent: 'from-green-500/10 to-emerald-500/10',
                border: 'border-green-200/50',
                hoverBorder: 'hover:border-green-400/70'
              },
            ].map((tech, idx) => (
              <div key={idx} className="group relative h-full">
                {/* Card */}
                <div className={`relative h-full p-8 rounded-3xl bg-gradient-to-br ${tech.accent} backdrop-blur-sm border-2 ${tech.border} ${tech.hoverBorder} transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl overflow-hidden`}>

                  {/* Background Shine */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-white/60 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2"></div>

                  {/* Content */}
                  <div className="relative">
                    {/* Icon */}
                    <div className="text-7xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      {tech.icon}
                    </div>

                    {/* Tagline */}
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
                      {tech.tagline}
                    </div>

                    {/* Name */}
                    <h3 className="text-4xl font-black text-navy mb-4 tracking-tight">
                      {tech.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-base leading-relaxed mb-6 font-medium">
                      {tech.desc}
                    </p>

                    {/* Stat Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-gray-200 shadow-sm">
                      <span className="text-sm font-black text-navy">{tech.stat}</span>
                      <span className="text-xs text-gray-500 font-semibold">{tech.statLabel}</span>
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute bottom-6 right-6 w-3 h-3 rounded-full bg-gray-300 group-hover:scale-[3] group-hover:bg-gray-400 transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Supporting Technologies - Chip Style */}
          <div className="mb-16">
            <h3 className="text-center text-lg font-bold text-gray-700 uppercase tracking-wider mb-8">
              + Supporting Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: 'TypeScript', icon: '🔷' },
                { name: 'Tailwind CSS', icon: '🎨' },
                { name: 'GraphQL', icon: '📊' },
                { name: 'PostgreSQL', icon: '🐘' },
                { name: 'MongoDB', icon: '🍃' },
                { name: 'AWS', icon: '☁️' },
                { name: 'Docker', icon: '🐳' },
                { name: 'Firebase', icon: '🔥' },
              ].map((tech, idx) => (
                <div
                  key={idx}
                  className="group px-5 py-3 rounded-2xl bg-white border-2 border-gray-200 hover:border-gray-400 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xl group-hover:scale-125 transition-transform duration-300">{tech.icon}</span>
                    <span className="text-sm font-bold text-gray-700">{tech.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Grid - Minimalist Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                value: '150+',
                label: 'Projects Delivered',
                icon: '🚀',
                description: 'Successfully completed'
              },
              {
                value: '98%',
                label: 'Client Satisfaction',
                icon: '⭐',
                description: '5-star reviews'
              },
              {
                value: '8+',
                label: 'Years Experience',
                icon: '🏆',
                description: 'Industry expertise'
              },
              {
                value: 'A+',
                label: 'Code Quality',
                icon: '💻',
                description: 'Best practices'
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-3xl bg-white border-2 border-gray-200 hover:border-gray-300 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="text-4xl mb-4 opacity-80 group-hover:scale-110 transition-all duration-500">
                  {stat.icon}
                </div>

                {/* Value */}
                <div className="text-5xl lg:text-6xl font-black text-navy mb-2 tracking-tight">
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  {stat.label}
                </div>

                {/* Description */}
                <div className="text-xs text-gray-500 font-medium">
                  {stat.description}
                </div>

                {/* Bottom Line */}
                <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-navy to-gray-400 transition-all duration-700 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Final Bold CTA - Clean Light Section */}
      < section className="bg-white py-24 relative overflow-hidden border-t border-gray-50" >
        <MinimalBackground />
        <div className="container relative z-10 text-center">
          <div className="max-w-4xl mx-auto p-12 rounded-[2.5rem] bg-white border border-gray-100 shadow-2xl relative overflow-hidden group hover:border-orange/30 transition-all">
            {/* Decorative Background Elements - Light Tints */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 animate-blob"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 animate-blob delay-2000"></div>

            <div className="relative z-10">
              <h2 className="text-navy text-4xl md:text-5xl lg:text-6xl mb-8">Ready to Elevate Your Business?</h2>
              <p className="text-xl md:text-2xl text-gray-700 font-medium mb-12 max-w-2xl mx-auto">
                Join our family of happy clients and start your journey to a world-class digital presence today.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <CTAButton href="/contact" variant="primary" className="text-xl px-12 py-6 bg-gradient-to-r from-orange to-rose text-white border-none shadow-orange">
                  Start Your Project
                </CTAButton>
                <CTAButton href="https://wa.me/919344832658" variant="outline" className="text-navy border-navy/20 hover:bg-navy/5 text-xl px-12 py-6" external>
                  Chat on WhatsApp
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section >
    </>
  );
}
