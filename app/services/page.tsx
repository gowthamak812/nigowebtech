import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Web & Mobile App Development Services | Nigoweb Technologies',
    description: 'We offer Next.js web development, custom React dashboards, mobile app engineering, SEO campaigns, and responsive maintenance support packages.',
};

const services = [
    {
        id: 'web-development',
        badge: 'Web Development',
        iconClass: 'icon-rose',
        iconPath: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
        heading: 'High-Performance',
        headingAccent: 'Web Development',
        desc: 'We build blazing-fast websites using Next.js and React that load in milliseconds, rank on search engines, and turn visitors into paying customers.',
        features: ['Custom Business Sites', 'React Dashboards', 'Stripe Integrations', 'SEO Architecture', 'Static Site Generation', 'Headless CMS Options'],
        ctaLabel: 'Discuss Web Project',
        ctaGradient: 'linear-gradient(135deg, #f97316 0%, #ec4899 100%)',
        ctaShadow: '0 4px 18px rgba(249,115,22,0.35)',
        cardTitle: 'Core Technology Choices',
        cardDesc: 'We engineer with tools that guarantee long-term performance:',
        cardItems: [
            { title: 'Next.js / SSR', value: 'High Performance & Page Crawling', color: '#6366f1' },
            { title: 'Tailwind CSS', value: 'Lightweight & Responsive Layouts', color: '#38bdf8' },
            { title: 'TypeScript', value: 'Type-safe & Stable Codebases', color: '#3b82f6' },
            { title: 'Sanity / Strapi', value: 'Flexible Headless Content Panels', color: '#8c4bff' },
        ],
        reverse: false,
        accent: '#ec4899',
        ctaHref: '/contact',
    },
    {
        id: 'mobile-apps',
        badge: 'Mobile Apps',
        iconClass: 'icon-blue',
        iconPath: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
        heading: 'Cross-Platform',
        headingAccent: 'Mobile Applications',
        desc: 'Connect directly with mobile users. We build iOS and Android apps using React Native — native performance, one unified codebase, shipped faster.',
        features: ['Cross-Platform Native', 'Secure Cloud Auth', 'Push Notification APIs', 'App Store Publishing', 'Offline Support Maps', 'Smooth Transitions'],
        ctaLabel: 'Discuss App Project',
        ctaGradient: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
        ctaShadow: '0 4px 18px rgba(59,130,246,0.35)',
        cardTitle: 'Mobile-First Features',
        cardDesc: 'A single codebase that runs natively on every screen:',
        cardItems: [
            { title: 'Unified Codebase', value: 'Deploy to Android and iOS from a single source', color: '#3b82f6' },
            { title: 'Device Integrations', value: 'Camera, files, locations, biometric logins', color: '#06b6d4' },
            { title: 'Real-time Updates', value: 'Push bugfixes instantly without store approval', color: '#8b5cf6' },
        ],
        reverse: true,
        accent: '#3b82f6',
        ctaHref: '/contact',
    },
    {
        id: 'seo',
        badge: 'SEO & Performance',
        iconClass: 'icon-orange',
        iconPath: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
        heading: 'Rankings &',
        headingAccent: 'SEO Performance',
        desc: 'A great site is useless if nobody finds it. We bake SEO directly into the codebase — structured data, Core Web Vitals, and keyword strategy built-in from day one.',
        features: ['Core Web Vital Checks', 'Schema Markup Metadata', 'Sitemap Automation', 'Keywords Integration', 'Page Load Audits', 'Local Map Placement'],
        ctaLabel: 'Grow Your Rankings',
        ctaGradient: 'linear-gradient(135deg, #f97316 0%, #ec4899 100%)',
        ctaShadow: '0 4px 18px rgba(249,115,22,0.35)',
        cardTitle: 'Core Web Vitals',
        cardDesc: 'Google rewards experience. We optimize every parameter:',
        cardItems: [
            { title: 'LCP < 1.5s', value: 'Largest Contentful Paint — loads blazing fast', color: '#f97316' },
            { title: 'FID Instant', value: 'Immediate response on every click & input', color: '#ec4899' },
            { title: 'CLS = 0', value: 'Zero layout shift — stable, polished UI', color: '#10b981' },
            { title: '100 Mobile', value: 'Full-score responsive fluid viewports', color: '#6366f1' },
        ],
        reverse: false,
        accent: '#f97316',
        ctaHref: '/contact',
    },
    {
        id: 'redesign',
        badge: 'Website Re-design',
        iconClass: 'icon-purple',
        iconPath: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
        heading: 'Transform Your',
        headingAccent: 'Website Re-design',
        desc: 'Is your current site outdated, slow, or losing customers? We audit, redesign, and rebuild your digital presence — preserving your SEO while delivering a modern, high-converting result.',
        features: ['Full UX Audit', 'Modern UI Redesign', 'Data Migration', 'Performance Boost', 'Brand Alignment', 'SEO Preservation'],
        ctaLabel: 'Start Re-design',
        ctaGradient: 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)',
        ctaShadow: '0 4px 18px rgba(168,85,247,0.35)',
        cardTitle: 'What We Transform',
        cardDesc: 'A complete digital refresh from the ground up:',
        cardItems: [
            { title: 'Speed & Performance', value: 'Rebuilt for sub-2s load times with Next.js', color: '#a855f7' },
            { title: 'Modern UI / UX', value: 'Clean, conversion-focused design from scratch', color: '#6366f1' },
            { title: 'SEO Preserved', value: 'Retain all rankings while improving structure', color: '#10b981' },
            { title: 'Mobile-First', value: 'Pixel-perfect on every device and screen size', color: '#f97316' },
        ],
        reverse: false,
        accent: '#a855f7',
        ctaHref: '/contact',
    },
    {
        id: 'maintenance',
        badge: 'Support & Maintenance',
        iconClass: 'icon-green',
        iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
        heading: 'Ongoing Support &',
        headingAccent: 'Maintenance',
        desc: 'Keep your digital product fast, secure, and up-to-date. We offer responsive maintenance plans covering daily backups, patch deployments, content changes, and 24/7 uptime monitoring.',
        features: ['Daily Cloud Backups', 'Uptime Monitoring 24/7', 'SSL & DNS Setup', 'Monthly Site Audits', 'Immediate Bugfixes', 'Content Adjustments'],
        ctaLabel: 'View Support Packages',
        ctaGradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        ctaShadow: '0 4px 18px rgba(16,185,129,0.35)',
        cardTitle: 'Peace of Mind Guarantee',
        cardDesc: 'We keep your site safe, fast and always online:',
        cardItems: [
            { title: 'Security Updates', value: 'Monitor packages and patch vulnerabilities daily', color: '#10b981' },
            { title: 'Uptime Monitoring', value: 'Instant alerts if any server goes offline', color: '#059669' },
            { title: 'Content Priority', value: 'Edits completed within 24–48 business hours', color: '#6366f1' },
        ],
        reverse: true,
        accent: '#10b981',
        ctaHref: '/pricing',
    }
];

const faqs = [
    { q: 'How long does it take to deploy a site?', a: 'Standard business websites take 3–4 weeks. Complex dashboards or mobile systems typically need 6–12 weeks depending on scope.' },
    { q: 'Do you offer content updates?', a: 'Yes — content changes, additions and updates are covered in our support plans. We also build user panels so you can edit pages yourself.' },
    { q: 'Can you improve an old site?', a: 'Absolutely. We audit your existing system, redesign the UX, migrate data, and deploy on Next.js to dramatically improve load speed.' },
    { q: 'Are sites SEO optimized?', a: 'Every site we deploy ships with structured data schema, automated sitemaps, optimised image alt tags, and Core Web Vitals as standard.' },
];

const divider = <div style={{ borderTop: '1px solid rgba(15,23,42,0.07)' }} />;

export default function ServicesPage() {
    return (
        <>
            {/* ── Hero ── */}
            <section className="relative pt-32 pb-16 overflow-hidden" style={{ background: 'linear-gradient(160deg, #faf5ff 0%, #ffffff 60%)' }}>
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] rounded-full blur-[120px]" style={{ background: 'rgba(168,85,247,0.08)' }} />
                    <div className="absolute top-[20%] right-[5%] w-[400px] h-[400px] rounded-full blur-[100px]" style={{ background: 'rgba(99,102,241,0.06)' }} />
                    <div className="absolute inset-0 grid-pattern opacity-40" />
                </div>
                <div className="container relative z-10 text-center">
                    <span className="badge badge-green mb-5">What We Do</span>
                    <h1 className="text-brand-navy mb-6">
                        Our Digital <span className="gradient-text">Engineering</span> Services
                    </h1>
                    <div className="section-divider section-divider-center" />
                    <p className="text-lg text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
                        We design and build high-performance web systems, custom mobile apps,
                        and results-oriented digital pipelines to help your brand grow.
                    </p>
                    <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-3 max-w-xs sm:max-w-none mx-auto items-stretch">
                        {services.map(s => (
                            <a
                                key={s.id}
                                href={`#${s.id}`}
                                className="flex items-center justify-center px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border text-center leading-tight transition-all duration-200 hover:-translate-y-0.5"
                                style={{ borderColor: `${s.accent}40`, color: s.accent, background: `${s.accent}0d` }}
                            >
                                {s.badge}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {divider}

            {/* ── Services overview (navy) ── */}
            <section className="navy-section relative py-16 overflow-hidden">
                <div className="absolute inset-0 grid-pattern-dark opacity-20 pointer-events-none" />
                <div className="container relative z-10">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        {services.map((s) => (
                            <a
                                key={s.id}
                                href={`#${s.id}`}
                                className="group flex flex-col gap-4 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                            >
                                <div className={`${s.iconClass} w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0`}>
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d={s.iconPath} />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-white font-bold text-sm mb-1">{s.badge}</p>
                                    <p className="text-blue-200 text-xs font-medium opacity-70 leading-relaxed">{s.desc.slice(0, 72)}…</p>
                                </div>
                                <span className="text-xs font-semibold flex items-center gap-1 mt-auto" style={{ color: s.accent }}>
                                    Learn more
                                    <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {divider}

            {/* ── Individual service sections ── */}
            {services.map((s, idx) => (
                <section
                    key={s.id}
                    id={s.id}
                    className="relative py-24 overflow-hidden"
                    style={{ background: idx % 2 === 0 ? '#ffffff' : '#f9fafb' }}
                >
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute w-[400px] h-[400px] rounded-full blur-[120px] opacity-40"
                            style={{ background: `${s.accent}12`, top: '10%', [s.reverse ? 'right' : 'left']: '-5%' }} />
                    </div>

                    <div className="container relative z-10">
                        <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${s.reverse ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''}`}>

                            {/* Left: content */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className={`${s.iconClass} w-12 h-12 rounded-2xl flex items-center justify-center`}>
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d={s.iconPath} />
                                        </svg>
                                    </div>
                                    <span className="text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full"
                                        style={{ background: `${s.accent}15`, color: s.accent }}>
                                        {s.badge}
                                    </span>
                                </div>

                                <h2 className="text-brand-navy font-black leading-tight">
                                    {s.heading}{' '}
                                    <span style={{
                                        background: s.ctaGradient,
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                    }}>
                                        {s.headingAccent}
                                    </span>
                                </h2>

                                <div className="h-1 w-16 rounded-full" style={{ background: s.ctaGradient }} />
                                <p className="text-gray-600 text-lg leading-relaxed font-medium">{s.desc}</p>

                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                                    {s.features.map((item, i) => (
                                        <li key={i} className="flex items-center gap-2.5 text-sm font-semibold text-gray-700">
                                            <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-white text-[10px] font-black"
                                                style={{ background: s.ctaGradient }}>✓</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <div className="pt-2">
                                    <Link
                                        href={s.ctaHref}
                                        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5"
                                        style={{ background: s.ctaGradient, boxShadow: s.ctaShadow }}
                                    >
                                        {s.ctaLabel}
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>

                            {/* Right: feature card */}
                            <div className="rounded-3xl p-8 flex flex-col justify-center"
                                style={{ background: '#ffffff', border: `1.5px solid ${s.accent}20`, boxShadow: `0 8px 40px ${s.accent}10` }}>
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-1 h-6 rounded-full" style={{ background: s.ctaGradient }} />
                                    <h3 className="text-base font-black text-brand-navy">{s.cardTitle}</h3>
                                </div>
                                <p className="text-gray-400 text-sm mb-6 pl-4">{s.cardDesc}</p>
                                <div className={`${s.cardItems.length === 4 ? 'grid grid-cols-1 sm:grid-cols-2 gap-3' : 'flex flex-col gap-3'}`}>
                                    {s.cardItems.map((item, i) => (
                                        <div key={i} className="p-4 rounded-2xl flex items-start gap-3"
                                            style={{ background: `${item.color}08`, border: `1px solid ${item.color}20` }}>
                                            <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: item.color }} />
                                            <div>
                                                <div className="text-xs font-extrabold text-brand-navy mb-0.5">{item.title}</div>
                                                <div className="text-[11px] font-medium text-gray-500 leading-snug">{item.value}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Simple horizontal divider at section end */}
                    <div className="absolute bottom-0 left-0 right-0" style={{ borderBottom: '1px solid rgba(15,23,42,0.07)' }} />
                </section>
            ))}

            {/* ── FAQ ── */}
            <section className="navy-section relative py-20">
                <div className="absolute inset-0 grid-pattern-dark opacity-20 pointer-events-none" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none" style={{ background: 'rgba(99,102,241,0.12)' }} />
                <div className="container relative z-10">
                    <div className="text-center mb-14">
                        <span className="badge badge-green mb-4">Answers</span>
                        <h2 className="text-white mb-4">Frequently Asked <span className="gradient-text-secondary">Questions</span></h2>
                        <div className="section-divider section-divider-center" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                        {faqs.map((faq, i) => (
                            <div key={i} className="p-6 rounded-2xl"
                                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <div className="flex items-start gap-3 mb-3">
                                    <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0 text-white"
                                        style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7)' }}>
                                        {i + 1}
                                    </span>
                                    <h3 className="font-bold text-white text-sm leading-snug">{faq.q}</h3>
                                </div>
                                <p className="text-blue-200 text-sm leading-relaxed opacity-80 pl-9">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {divider}

            {/* ── CTA ── */}
            <section className="relative py-24" style={{ background: 'linear-gradient(160deg, #f5f7ff 0%, #ffffff 100%)' }}>
                <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
                <div className="container relative z-10 text-center">
                    <span className="badge mb-5">Ready to Start?</span>
                    <h2 className="text-brand-navy font-black mb-4">
                        Let's Build Something <span className="gradient-text">Exceptional</span>
                    </h2>
                    <div className="section-divider section-divider-center" />
                    <p className="text-gray-500 font-medium text-lg max-w-xl mx-auto mb-10">
                        Book a free 30-minute consultation and get a tailored plan for your project — no commitment required.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5"
                            style={{ background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)', boxShadow: '0 4px 18px rgba(99,102,241,0.38)' }}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Book Free Consultation
                        </Link>
                        <Link
                            href="/pricing"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold border-2 border-gray-200 text-gray-600 hover:border-indigo-400 hover:text-indigo-600 transition-all duration-200"
                        >
                            View Pricing
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
