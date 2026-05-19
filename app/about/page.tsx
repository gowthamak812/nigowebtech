import type { Metadata } from 'next';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
    title: 'About Us | Nigoweb Technologies | Web Development Company in Coimbatore',
    description: 'Learn about Nigoweb Technologies - a modern web development company in Coimbatore specializing in SEO-optimized websites, web applications, and mobile apps.',
};

export default function AboutPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="section pt-32 bg-gradient-to-br from-gray-50 to-white">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h1>
                            About <span className="gradient-text">Nigoweb Technologies</span>
                        </h1>
                        <p className="text-xl text-gray-600">
                            We're a modern web development company helping small and growing businesses
                            succeed online with fast, SEO-optimized websites and applications.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <div className="card card-gradient">
                            <div className="text-5xl mb-4">🎯</div>
                            <h2 className="text-2xl font-bold">Our Mission</h2>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                To empower small and growing businesses with modern, SEO-optimized websites
                                that drive real growth. We believe every business deserves a professional
                                online presence, regardless of size.
                            </p>
                        </div>
                        <div className="card card-gradient">
                            <div className="text-5xl mb-4">🚀</div>
                            <h2 className="text-2xl font-bold">Our Vision</h2>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                To be the trusted technology partner for businesses across India, helping them
                                thrive in the digital age with future-ready websites, applications, and AI integration.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Story */}
            <section className="section bg-navy-dark text-white">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-center text-white mb-12">Our Story</h2>
                        <div className="space-y-6 text-gray-200 text-lg leading-relaxed">
                            <p>
                                Nigoweb Technologies was founded with a simple belief: <strong className="text-white">
                                    every business deserves a website that works as hard as they do</strong>.
                            </p>
                            <p>
                                Based in <strong className="text-rose">Gandhipuram, Coimbatore</strong>, we started
                                by helping local businesses modernize their online presence. We saw too many great
                                companies held back by slow, outdated websites that didn't rank on Google or convert visitors.
                            </p>
                            <p>
                                Today, we build modern, SEO-optimized websites using cutting-edge technology like
                                React, Next.js, and Node.js. We focus on <strong className="text-green">speed, SEO,
                                    and user experience</strong> — the three pillars that actually drive business growth online.
                            </p>
                            <p>
                                We operate as a <strong className="text-blue">flexible, remote-first team</strong>,
                                which allows us to keep costs low and pass the savings to our clients. While we work
                                remotely, we're always available and committed to providing professional, reliable service.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="mb-4">
                            Our <span className="gradient-text">Core Values</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="card text-center hover-lift">
                            <div className="text-5xl mb-4">🤝</div>
                            <h3 className="text-xl font-semibold mb-3">Transparency</h3>
                            <p className="text-gray-600">
                                Clear communication, honest pricing, and no hidden fees. You'll always know
                                exactly what you're getting and what it costs.
                            </p>
                        </div>

                        <div className="card text-center hover-lift">
                            <div className="text-5xl mb-4">💎</div>
                            <h3 className="text-xl font-semibold mb-3">Quality First</h3>
                            <p className="text-gray-600">
                                We never compromise on quality. Every website is built with modern technology,
                                optimized for performance, and designed to last.
                            </p>
                        </div>

                        <div className="card text-center hover-lift">
                            <div className="text-5xl mb-4">🌱</div>
                            <h3 className="text-xl font-semibold mb-3">Long-Term Partnership</h3>
                            <p className="text-gray-600">
                                We're not a one-and-done service. We build lasting relationships and support
                                your growth every step of the way.
                            </p>
                        </div>

                        <div className="card text-center hover-lift">
                            <div className="text-5xl mb-4">⚡</div>
                            <h3 className="text-xl font-semibold mb-3">Speed & Performance</h3>
                            <p className="text-gray-600">
                                Fast websites rank better and convert better. We obsess over performance so
                                your business can thrive online.
                            </p>
                        </div>

                        <div className="card text-center hover-lift">
                            <div className="text-5xl mb-4">🎯</div>
                            <h3 className="text-xl font-semibold mb-3">Results-Driven</h3>
                            <p className="text-gray-600">
                                Beautiful design is great, but what matters is results. We focus on SEO,
                                conversions, and business growth.
                            </p>
                        </div>

                        <div className="card text-center hover-lift">
                            <div className="text-5xl mb-4">🚀</div>
                            <h3 className="text-xl font-semibold mb-3">Future-Ready</h3>
                            <p className="text-gray-600">
                                We use modern technology and plan for the future. Your website will stay
                                relevant as technology evolves.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Sets Us Apart */}
            <section className="section bg-gray-50">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-center mb-12">
                            Why Choose <span className="gradient-text">Nigoweb?</span>
                        </h2>

                        <div className="space-y-6">
                            <div className="card flex items-start gap-4">
                                <div className="text-3xl">✅</div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Modern Technology Stack</h3>
                                    <p className="text-gray-600">
                                        We use React, Next.js, Node.js, and other cutting-edge tools that deliver
                                        superior performance and SEO results compared to traditional platforms.
                                    </p>
                                </div>
                            </div>

                            <div className="card flex items-start gap-4">
                                <div className="text-3xl">✅</div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">SEO-First Approach</h3>
                                    <p className="text-gray-600">
                                        Every website is built with SEO in mind from day one. SSG, fast load times,
                                        perfect Core Web Vitals, and clean code that Google loves.
                                    </p>
                                </div>
                            </div>

                            <div className="card flex items-start gap-4">
                                <div className="text-3xl">✅</div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Flexible & Affordable</h3>
                                    <p className="text-gray-600">
                                        Our remote-first approach keeps costs low without compromising quality.
                                        We offer flexible packages to fit any budget.
                                    </p>
                                </div>
                            </div>

                            <div className="card flex items-start gap-4">
                                <div className="text-3xl">✅</div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
                                    <p className="text-gray-600">
                                        We don't disappear after launch. Our support packages ensure your website
                                        stays updated, secure, and optimized for growth.
                                    </p>
                                </div>
                            </div>

                            <div className="card flex items-start gap-4">
                                <div className="text-3xl">✅</div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">AI-Ready for the Future</h3>
                                    <p className="text-gray-600">
                                        We're preparing for the future with AI chat assistant integration, giving
                                        your business cutting-edge customer service capabilities.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Location & Contact Info */}
            <section className="section">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-center mb-12">
                            Based in <span className="gradient-text">Coimbatore</span>, Serving All of India
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="card">
                                <div className="text-4xl mb-4">📍</div>
                                <h3 className="text-xl font-semibold mb-3">Our Location</h3>
                                <p className="text-gray-700 mb-4">
                                    <strong>Gandhipuram, Coimbatore</strong><br />
                                    Tamil Nadu, India
                                </p>
                                <p className="text-gray-600">
                                    While we're based in Coimbatore, we work with clients across India.
                                    Our remote-first approach means we can serve you efficiently no matter where you are.
                                </p>
                            </div>

                            <div className="card">
                                <div className="text-4xl mb-4">🌐</div>
                                <h3 className="text-xl font-semibold mb-3">How We Work</h3>
                                <p className="text-gray-600 mb-4">
                                    We operate as a <strong>flexible, remote-first team</strong>. This allows us to:
                                </p>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-start gap-2">
                                        <svg className="w-5 h-5 text-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Offer competitive pricing</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="w-5 h-5 text-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Work with the best talent</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="w-5 h-5 text-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Serve clients nationwide</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="w-5 h-5 text-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Maintain high quality standards</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section bg-gradient-primary text-white">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-white mb-6">Ready to Work Together?</h2>
                        <p className="text-xl mb-8 opacity-95">
                            Let's discuss how we can help your business grow with a modern, SEO-optimized website.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <CTAButton href="/contact" variant="outline">
                                <span className="text-white">Get in Touch</span>
                            </CTAButton>
                            <CTAButton href="/portfolio" variant="outline">
                                <span className="text-white">See Our Work</span>
                            </CTAButton>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
