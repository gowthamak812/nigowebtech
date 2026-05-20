import type { Metadata } from 'next';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
    title: 'About Us | Nigoweb Technologies | Web Development Company in Coimbatore',
    description: 'Learn about Nigoweb Technologies - a modern web development company in Coimbatore specializing in SEO-optimized websites, web applications, and mobile apps.',
};

export default function AboutPage() {
    return (
        <>
            {/* Elegant Hero Section */}
            <section className="section pt-32 pb-20 bg-gradient-to-b from-brand-cream to-white relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-[100px] animate-pulse"></div>
                    <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-brand-rose/5 rounded-full blur-[100px] animate-pulse [animation-delay:2s]"></div>
                </div>
                
                <div className="container relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="badge mb-4">Our Journey</span>
                        <h1 className="text-brand-navy">
                            About <span className="gradient-text">Nigoweb Technologies</span>
                        </h1>
                        <p className="text-xl text-gray-600 font-medium leading-relaxed mt-6">
                            We're a modern web development company helping businesses
                            succeed online with fast, secure, and SEO-optimized digital platforms.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Bento */}
            <section className="section bg-white pt-0">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <div className="card p-10 hover:border-brand-rose/30">
                            <div className="w-12 h-12 rounded-xl bg-brand-rose/10 flex items-center justify-center text-brand-rose mb-6 text-2xl font-bold">
                                🎯
                            </div>
                            <h2 className="text-2xl font-black text-brand-navy mb-4">Our Mission</h2>
                            <p className="text-gray-600 text-base leading-relaxed">
                                To empower businesses with modern, SEO-optimized digital platforms
                                that drive real growth. We believe every organization deserves an outstanding
                                online presence engineered to high production standards.
                            </p>
                        </div>
                        <div className="card p-10 hover:border-brand-blue/30">
                            <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-6 text-2xl font-bold">
                                🚀
                            </div>
                            <h2 className="text-2xl font-black text-brand-navy mb-4">Our Vision</h2>
                            <p className="text-gray-600 text-base leading-relaxed">
                                To be the trusted technology partner for forward-thinking enterprises,
                                driving their expansion with future-ready websites, custom web apps,
                                and intelligent system integrations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story - Dark Premium Section */}
            <section className="section navy-section py-24 text-white">
                <div className="container">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <div className="text-center">
                            <span className="badge mb-3 bg-white/5 border-white/10 text-white">Behind the Scenes</span>
                            <h2 className="text-white font-black text-4xl mt-2">Our Story</h2>
                        </div>
                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-medium">
                            <p>
                                Nigoweb Technologies was founded with a simple belief: <strong className="text-white">
                                    every business deserves a website that works as hard as they do</strong>.
                            </p>
                            <p>
                                Based in <strong className="text-brand-rose font-bold">Gandhipuram, Coimbatore</strong>, we started
                                by helping local businesses modernize their online presence. We saw too many companies
                                held back by slow, outdated websites that didn't rank on Google or convert visitors.
                            </p>
                            <p>
                                Today, we build high-performance websites using cutting-edge technologies like
                                React, Next.js, and Node.js. We focus on <strong className="text-brand-green font-bold">speed, SEO,
                                    and user experience</strong> — the three pillars that actually drive growth online.
                            </p>
                            <p>
                                We operate as a <strong className="text-brand-blue font-bold">flexible, remote-first team</strong>,
                                which allows us to keep costs low and pass those savings directly to our clients. While we work
                                remotely, we're always available and committed to providing professional, reliable service.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Grid */}
            <section className="section bg-gradient-to-b from-white to-brand-cream/30">
                <div className="container">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <span className="badge mb-3">Our Core Principles</span>
                        <h2 className="mb-4 text-brand-navy">
                            What Guide <span className="gradient-text">Our Work</span>
                        </h2>
                        <p className="text-lg text-gray-600 font-medium">
                            The core beliefs that shape how we build and deliver digital products
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {/* Value 1 */}
                        <div className="card hover:border-brand-orange/30">
                            <div className="mb-6">
                                <svg className="w-8 h-8 text-brand-orange" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-brand-navy mb-3">Transparency</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Clear communication, honest scoping, and no hidden fees. You'll always know
                                exactly what we are building, why, and what it costs.
                            </p>
                        </div>

                        {/* Value 2 */}
                        <div className="card hover:border-brand-rose/30">
                            <div className="mb-6">
                                <svg className="w-8 h-8 text-brand-rose" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-brand-navy mb-3">Quality First</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                We never compromise. Every codebase is optimized for performance, 
                                structured using industry best practices, and designed to scale.
                            </p>
                        </div>

                        {/* Value 3 */}
                        <div className="card hover:border-brand-blue/30">
                            <div className="mb-6">
                                <svg className="w-8 h-8 text-brand-blue" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-brand-navy mb-3">Long-Term Partners</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                We are not a one-and-done agency. We build lasting relationships, supporting
                                your business with maintenance and optimizations as you grow.
                            </p>
                        </div>

                        {/* Value 4 */}
                        <div className="card hover:border-brand-green/30">
                            <div className="mb-6">
                                <svg className="w-8 h-8 text-brand-green" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-brand-navy mb-3">Speed & Performance</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Fast websites rank higher and retain visitors. We obsess over metrics to 
                                guarantee a frictionless browsing experience.
                            </p>
                        </div>

                        {/* Value 5 */}
                        <div className="card hover:border-brand-orange/30">
                            <div className="mb-6">
                                <svg className="w-8 h-8 text-brand-orange" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-brand-navy mb-3">Results-Driven</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Aesthetics are vital, but conversion is key. We design with SEO, CTR, and 
                                business metrics at the center of every layout choice.
                            </p>
                        </div>

                        {/* Value 6 */}
                        <div className="card hover:border-brand-rose/30">
                            <div className="mb-6">
                                <svg className="w-8 h-8 text-brand-rose" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-brand-navy mb-3">Future-Ready</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                We build with progressive tools and integrate AI functionalities to keep
                                your website modern as technology marches forward.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section bg-white">
                <div className="container">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <div className="text-center">
                            <span className="badge mb-3">Why Nigoweb</span>
                            <h2 className="text-brand-navy font-black text-3xl">What Sets Us Apart</h2>
                        </div>

                        <div className="space-y-4">
                            {[
                                {
                                    title: 'Modern Technology Stack',
                                    desc: 'We utilize Next.js, React, Node.js, and TypeScript to deploy architectures that load faster and score better than standard templates.'
                                },
                                {
                                    title: 'SEO-First Engineering',
                                    desc: 'Search visibility is baked in from code level. Structured markup, static generation, image sizing, and speed optimization come standard.'
                                },
                                {
                                    title: 'Flexible & Cost-Efficient',
                                    desc: 'Our remote operations eliminate unnecessary agency overhead, letting us deploy premium code at prices friendly to growing businesses.'
                                },
                                {
                                    title: 'Dedicated Lifecycle Support',
                                    desc: 'We offer comprehensive monitoring and hosting packages post-launch, ensuring your systems remain secure and current.'
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="card p-6 flex items-start gap-4 hover:border-gray-300">
                                    <div className="premium-check mt-1">✓</div>
                                    <div>
                                        <h3 className="text-lg font-bold text-brand-navy mb-1.5">{item.title}</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Locations */}
            <section className="section bg-gradient-to-t from-brand-cream/30 to-white">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="badge mb-3">Presence</span>
                            <h2 className="text-brand-navy font-black text-3xl">Based in Coimbatore, Serving Nationwide</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="card hover:border-gray-200">
                                <div className="w-12 h-12 rounded-xl bg-brand-rose/10 flex items-center justify-center text-xl mb-5">📍</div>
                                <h3 className="text-xl font-bold text-brand-navy mb-2">Our Location</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    <strong>Gandhipuram, Coimbatore</strong><br />
                                    Tamil Nadu, India
                                </p>
                                <p className="text-gray-500 text-xs leading-relaxed">
                                    While our workspace is in Coimbatore, our remote infrastructure connects us with businesses across all states in India.
                                </p>
                            </div>

                            <div className="card hover:border-gray-200">
                                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-xl mb-5">🌐</div>
                                <h3 className="text-xl font-bold text-brand-navy mb-2">How We Collaborate</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                                    We utilize modern collaboration tooling to keep project progress fully transparent:
                                </p>
                                <ul className="space-y-2 text-xs font-semibold text-gray-600">
                                    <li className="flex items-center gap-2">
                                        <span className="text-brand-green font-bold">✓</span> Real-time staging links for constant review
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-brand-green font-bold">✓</span> Direct Slack/WhatsApp project coordination
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-brand-green font-bold">✓</span> Bi-weekly scheduled check-ins
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section bg-brand-navy text-white text-center py-20">
                <div className="container">
                    <div className="max-w-2xl mx-auto space-y-8">
                        <h2 className="text-white font-black text-3xl">Ready to Work Together?</h2>
                        <p className="text-gray-300 text-base leading-relaxed">
                            Let's discuss how we can engineer a digital system that accelerates your business reach and conversion.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <CTAButton href="/contact" variant="primary" className="bg-gradient-to-r from-brand-orange to-brand-rose border-none text-white px-8 py-3.5">
                                Get in Touch
                            </CTAButton>
                            <CTAButton href="/portfolio" variant="outline" className="text-white border-white/20 hover:bg-white/10 px-8 py-3.5">
                                See Our Work
                            </CTAButton>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
