import type { Metadata } from 'next';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
    title: 'Web & Mobile App Development Services | Nigoweb Technologies',
    description: 'We offer Next.js web development, custom React dashboards, mobile app engineering, SEO campaigns, and responsive maintenance support packages.',
};

export default function ServicesPage() {
    return (
        <>
            {/* Services Hero */}
            <section className="section pt-32 pb-20 bg-gradient-to-b from-brand-cream to-white relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-[100px] animate-pulse"></div>
                    <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-brand-rose/5 rounded-full blur-[100px] animate-pulse [animation-delay:2s]"></div>
                </div>

                <div className="container relative z-10 text-center">
                    <div className="max-w-3xl mx-auto space-y-6">
                        <span className="badge">What We Do</span>
                        <h1 className="text-brand-navy">
                            Our Digital <span className="gradient-text">Engineering Services</span>
                        </h1>
                        <p className="text-xl text-gray-600 font-medium leading-relaxed">
                            We design and build high-performance web systems, custom mobile apps,
                            and results-oriented marketing pipelines to help your brand grow.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Services List */}
            <section className="section bg-white pt-0">
                <div className="container">
                    <div className="space-y-24 max-w-6xl mx-auto">
                        
                        {/* 1. Web Development */}
                        <div id="web-development" className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="icon-rose">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                </div>
                                <h2 className="text-3xl font-black text-brand-navy">Web Development</h2>
                                <p className="text-gray-600 text-lg leading-relaxed font-medium">
                                    We build high-performance websites using progressive frameworks like Next.js and React.
                                    Our sites load fast, rank on search engines, and convert visitors into customers.
                                </p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                                    {['Custom Business Sites', 'React Dashboards', 'Stripe Integrations', 'SEO Architecture', 'Static Site Generation', 'Headless CMS Options'].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-2.5 text-sm font-semibold text-gray-700">
                                            <span className="premium-check">✓</span> {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="pt-4">
                                    <CTAButton href="/contact" variant="primary" className="px-8 py-3.5 bg-gradient-to-r from-brand-orange to-brand-rose border-none text-white text-sm shadow-md">
                                        Discuss Web Project
                                    </CTAButton>
                                </div>
                            </div>
                            <div className="card p-10 bg-brand-cream/30 border-gray-150 flex flex-col justify-center h-full">
                                <h3 className="text-xl font-bold text-brand-navy mb-4">Core Technology Choices</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                    We don't rely on cookie-cutter site builders. We engineer with tools that guarantee long-term performance:
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { title: 'Next.js / SSR', value: 'High Performance & Page Crawling' },
                                        { title: 'Tailwind CSS', value: 'Lightweight & Responsive Layouts' },
                                        { title: 'TypeScript', value: 'Type-safe & Stable Codebases' },
                                        { title: 'Sanity / Strapi', value: 'Flexible Headless Content Panels' },
                                    ].map((tech, idx) => (
                                        <div key={idx} className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                                            <div className="text-xs font-extrabold text-brand-navy mb-1">{tech.title}</div>
                                            <div className="text-[10px] font-semibold text-gray-400 uppercase leading-tight">{tech.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* 2. Mobile Applications */}
                        <div id="mobile-apps" className="grid lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
                            <div className="lg:order-2 space-y-6">
                                <div className="icon-blue">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h2 className="text-3xl font-black text-brand-navy">Mobile Applications</h2>
                                <p className="text-gray-600 text-lg leading-relaxed font-medium">
                                    Connect directly with mobile users. We build cross-platform mobile apps for iOS and Android
                                    using React Native, giving you native performance with unified development efficiency.
                                </p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                                    {['Cross-Platform Native', 'Secure Cloud Auth', 'Push Notification APIs', 'App Store Publishing', 'Offline Support Maps', 'Smooth Transitions'].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-2.5 text-sm font-semibold text-gray-700">
                                            <span className="premium-check">✓</span> {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="pt-4">
                                    <CTAButton href="/contact" variant="primary" className="px-8 py-3.5 bg-gradient-to-r from-brand-blue to-accent-indigo border-none text-white text-sm shadow-md">
                                        Discuss App Project
                                    </CTAButton>
                                </div>
                            </div>
                            <div className="lg:order-1 card p-10 bg-brand-cream/30 border-gray-150 flex flex-col justify-center h-full">
                                <h3 className="text-xl font-bold text-brand-navy mb-4">Mobile Features</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                    Deploy a single app codebase that runs natively on all screen sizes:
                                </p>
                                <div className="space-y-3.5">
                                    {[
                                        { title: 'Unified Codebase', value: 'Deploy to Android and iOS from a single source' },
                                        { title: 'Device Integrations', value: 'Access camera, files, locations, and biometric logins' },
                                        { title: 'Real-time Updates', value: 'Push background bugfixes instantly without store approval' }
                                    ].map((feat, idx) => (
                                        <div key={idx} className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm flex items-start gap-3">
                                            <span className="text-brand-blue text-sm mt-0.5">✓</span>
                                            <div>
                                                <div className="text-xs font-extrabold text-brand-navy mb-1">{feat.title}</div>
                                                <div className="text-xs text-gray-500 font-medium leading-tight">{feat.value}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* 3. SEO & Performance */}
                        <div id="seo" className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="icon-orange">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                </div>
                                <h2 className="text-3xl font-black text-brand-navy">SEO & Performance</h2>
                                <p className="text-gray-600 text-lg leading-relaxed font-medium">
                                    A great site is only useful if people can find it. We design search engine optimization directly
                                    into the codebase structure, matching Google Core Web Vitals to score maximum ranking potentials.
                                </p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                                    {['Core Web Vital Checks', 'Schema Markup Metadata', 'Sitemap Automation', 'Keywords Integration', 'Page Load Audits', 'Local Map Placement'].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-2.5 text-sm font-semibold text-gray-700">
                                            <span className="premium-check">✓</span> {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="pt-4">
                                    <CTAButton href="/contact" variant="primary" className="px-8 py-3.5 bg-gradient-to-r from-brand-orange to-brand-rose border-none text-white text-sm shadow-md">
                                        Grow Your Rankings
                                    </CTAButton>
                                </div>
                            </div>
                            <div className="card p-10 bg-brand-cream/30 border-gray-150 flex flex-col justify-center h-full">
                                <h3 className="text-xl font-bold text-brand-navy mb-4">Core Web Vital Indicators</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                    Google prioritizes user experience above all else. We design to maximize these parameters:
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { title: 'LCP (Load Speed)', value: 'Loads layout within 1.5 seconds' },
                                        { title: 'FID (Interact)', value: 'Instant response on click elements' },
                                        { title: 'CLS (Shift)', value: 'Stable typography without shifting content' },
                                        { title: 'Mobile Score', value: '100% responsive fluid viewports' }
                                    ].map((vital, idx) => (
                                        <div key={idx} className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                                            <div className="text-xs font-extrabold text-brand-navy mb-1">{vital.title}</div>
                                            <div className="text-[10px] font-semibold text-gray-400 uppercase leading-tight">{vital.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* 4. Support & Maintenance */}
                        <div id="maintenance" className="grid lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
                            <div className="lg:order-2 space-y-6">
                                <div className="icon-green">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h2 className="text-3xl font-black text-brand-navy">Support & Maintenance</h2>
                                <p className="text-gray-600 text-lg leading-relaxed font-medium">
                                    Ensure your digital properties remain fast, clean, and secure. We offer responsive maintenance
                                    agreements covering daily backups, patch deployments, content changes, and uptime monitoring.
                                </p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                                    {['Daily Cloud Backups', 'Uptime Monitoring 24/7', 'SSL & DNS Setup', 'Monthly Site Audits', 'Immediate Bugfixes', 'Content Adjustments'].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-2.5 text-sm font-semibold text-gray-700">
                                            <span className="premium-check">✓</span> {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="pt-4">
                                    <CTAButton href="/pricing" variant="outline" className="text-brand-navy border-brand-navy/15 hover:bg-brand-navy hover:text-white px-8 py-3.5 text-sm">
                                        View Support Packages
                                    </CTAButton>
                                </div>
                            </div>
                            <div className="lg:order-1 card p-10 bg-brand-cream/30 border-gray-150 flex flex-col justify-center h-full">
                                <h3 className="text-xl font-bold text-brand-navy mb-4">Peace of Mind Guarantee</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                    Your website requires constant updates to run smoothly and stay safe from cyber attacks:
                                </p>
                                <div className="space-y-3.5">
                                    {[
                                        { title: 'Security Updates', value: 'We monitor package dependencies and patch vulnerabilities' },
                                        { title: 'Uptime Monitoring', value: 'Automated pings alert us instantly if a server falls offline' },
                                        { title: 'Content Priority', value: 'Get content edits completed within 24-48 business hours' }
                                    ].map((guar, idx) => (
                                        <div key={idx} className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm flex items-start gap-3">
                                            <span className="text-brand-green text-sm mt-0.5">✓</span>
                                            <div>
                                                <div className="text-xs font-extrabold text-brand-navy mb-1">{guar.title}</div>
                                                <div className="text-xs text-gray-500 font-medium leading-tight">{guar.value}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* FAQ Summary */}
            <section className="section bg-gradient-to-t from-brand-cream/30 to-white">
                <div className="container">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <div className="text-center">
                            <span className="badge mb-3">Answers</span>
                            <h2 className="text-brand-navy font-black text-3xl">Frequently Asked Questions</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="card hover:border-gray-200">
                                <h3 className="font-bold text-brand-navy mb-2 text-base">How long takes to deploy a site?</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Typically, standard business websites are completed in 3 to 4 weeks. 
                                    Complex custom dashboards or mobile systems require 6 to 12 weeks.
                                </p>
                            </div>
                            <div className="card hover:border-gray-200">
                                <h3 className="font-bold text-brand-navy mb-2 text-base">Do you offer content updates?</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Yes! Content changes, additions, and updates are covered inside our support plans. 
                                    We also write user panels so you can edit pages yourself.
                                </p>
                            </div>
                            <div className="card hover:border-gray-200">
                                <h3 className="font-bold text-brand-navy mb-2 text-base">Can you improve an old site?</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Absolutely. We audit your existing system, redesign the user experience, migrate data, 
                                    and deploy on Next.js to increase page loading speed.
                                </p>
                            </div>
                            <div className="card hover:border-gray-200">
                                <h3 className="font-bold text-brand-navy mb-2 text-base">Are sites SEO optimized?</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Yes, every site we deploy features structured data schema, automated sitemaps, 
                                    alt image tags, and optimal loading parameters standard.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
