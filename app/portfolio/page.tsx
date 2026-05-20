import CTAButton from '@/components/CTAButton';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Our Portfolio | Web Design & Custom App Projects | Nigoweb Technologies',
    description: 'Explore our latest web development and design projects. Case studies from clients in E-commerce, Real Estate, and Financial software solutions in Coimbatore.',
};

export default function PortfolioPage() {
    const projects = [
        {
            title: 'Webbersway',
            category: 'E-Commerce Store',
            desc: 'A premium apparel online store built with Next.js and Tailwind CSS. Integrated with Stripe and optimized for mobile shoppers to secure conversions.',
            metrics: [
                { label: 'Loading Speed', value: '1.2s' },
                { label: 'Mobile Conversion', value: '+35%' }
            ],
            tech: ['Next.js', 'React', 'Tailwind CSS', 'Stripe', 'Node.js'],
            slug: 'webbersway'
        },
        {
            title: 'Krishnam Builders',
            category: 'Real Estate Platform',
            desc: 'A high-end property listing and leads capture portal engineered for a premier construction group. Built with high-fidelity UI and responsive forms.',
            metrics: [
                { label: 'Leads Generated', value: '450+/mo' },
                { label: 'Page Speed Index', value: '98/100' }
            ],
            tech: ['React', 'Next.js', 'PostgreSQL', 'Tailwind CSS', 'Framer Motion'],
            slug: 'krishnam-builders'
        },
        {
            title: 'GST Portal Extension',
            category: 'Financial Web Application',
            desc: 'A secure backend administration console designed for financial advisors to track and file GST compliance pipelines. Features secure authorization levels.',
            metrics: [
                { label: 'Filings Streamlined', value: '10k+/mo' },
                { label: 'Report Run Time', value: '<200ms' }
            ],
            tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT Auth'],
            slug: 'gst-portal-extension'
        }
    ];

    const categories = ['All', 'E-Commerce', 'Real Estate', 'Financial Apps', 'Custom Dashboards'];

    return (
        <>
            {/* Portfolio Hero */}
            <section className="section pt-32 pb-20 bg-gradient-to-b from-brand-cream to-white relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-[100px] animate-pulse"></div>
                    <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-brand-rose/5 rounded-full blur-[100px] animate-pulse [animation-delay:2s]"></div>
                </div>

                <div className="container relative z-10 text-center">
                    <div className="max-w-3xl mx-auto space-y-6">
                        <span className="badge">Case Studies</span>
                        <h1 className="text-brand-navy">
                            Our Digital <span className="gradient-text">Showcase</span>
                        </h1>
                        <p className="text-xl text-gray-600 font-medium leading-relaxed">
                            Explore our latest work, showcasing high-performance architectures,
                            custom app designs, and SEO results.
                        </p>
                    </div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="section pt-0 pb-10 bg-white">
                <div className="container">
                    <div className="flex flex-wrap gap-2.5 justify-center max-w-2xl mx-auto">
                        {categories.map((cat, idx) => (
                            <button
                                key={idx}
                                className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 ${cat === 'All'
                                        ? 'bg-brand-navy text-white shadow-sm'
                                        : 'bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-brand-navy'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Grid */}
            <section className="section bg-white pt-10">
                <div className="container">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {projects.map((project, index) => (
                            <article key={index} className="card group flex flex-col justify-between hover:border-brand-rose/20">
                                <div>
                                    {/* Category Chip */}
                                    <span className="text-[10px] font-bold text-brand-rose uppercase tracking-widest block mb-3">
                                        {project.category}
                                    </span>

                                    {/* Title */}
                                    <h3 className="text-2xl font-black text-brand-navy mb-4 group-hover:text-brand-rose transition-colors duration-200">
                                        {project.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                        {project.desc}
                                    </p>

                                    {/* Key Outcomes */}
                                    <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-brand-cream/40 border border-gray-100 mb-6">
                                        {project.metrics.map((metric, idx) => (
                                            <div key={idx}>
                                                <div className="text-xs font-bold text-gray-400 mb-0.5 leading-tight">{metric.label}</div>
                                                <div className="text-lg font-black text-brand-navy leading-none">{metric.value}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-1.5 mb-6">
                                        {project.tech.map((t, idx) => (
                                            <span key={idx} className="px-2.5 py-1 rounded-md bg-gray-50 text-[10px] font-semibold text-gray-500 border border-gray-100">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Read case study link */}
                                    <div className="pt-4 border-t border-gray-50">
                                        <Link
                                            href={`/portfolio/${project.slug}`}
                                            className="text-xs font-extrabold uppercase tracking-wider text-brand-navy hover:text-brand-rose transition-all flex items-center gap-1.5"
                                        >
                                            View Case Study
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quote CTA */}
            <section className="section bg-brand-navy text-white text-center py-20">
                <div className="container">
                    <div className="max-w-2xl mx-auto space-y-8">
                        <h2 className="text-white font-black text-3xl">Want Similar Results?</h2>
                        <p className="text-gray-300 text-base leading-relaxed">
                            Let's discuss how we can build a high-performance web solution designed specifically to increase your business margins.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <CTAButton href="/contact" variant="primary" className="bg-gradient-to-r from-brand-orange to-brand-rose border-none text-white px-8 py-3.5">
                                Start Your Project
                            </CTAButton>
                            <CTAButton href="/services" variant="outline" className="text-white border-white/20 hover:bg-white/10 px-8 py-3.5">
                                Explore Services
                            </CTAButton>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
