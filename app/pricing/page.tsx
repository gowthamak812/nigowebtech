import type { Metadata } from 'next';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
    title: 'Pricing & Packages | Affordable Web Development | Nigoweb',
    description: 'Choose from our Platinum, Gold, and Silver packages for web development and ongoing support. Transparent pricing with flexible options to fit your budget.',
};

export default function PricingPage() {
    const packages = [
        {
            name: 'Silver',
            tagline: 'Perfect for Startups',
            icon: '🥈',
            features: [
                'Basic responsive website (up to 5 pages)',
                'Mobile-first design',
                'Basic SEO optimization',
                'Contact form integration',
                'Google Analytics setup',
                'Basic support (email only, 48h response)',
                '1 month free maintenance',
                'Hosting setup assistance'
            ],
            ideal: 'Small businesses, portfolios, basic company websites'
        },
        {
            name: 'Gold',
            tagline: 'Most Popular Choice',
            icon: '🥇',
            popular: true,
            features: [
                'Professional website (up to 10 pages)',
                'Advanced SEO optimization',
                'Blog integration (SSG/SSR)',
                'Custom design & animations',
                'Performance optimization (Core Web Vitals)',
                'WhatsApp & social integration',
                'Standard support (email & chat, 24h response)',
                '3 months free maintenance',
                'Hosting & SSL included',
                'Content updates (up to 5 per month)'
            ],
            ideal: 'Growing businesses, professional services, e-commerce startups'
        },
        {
            name: 'Platinum',
            tagline: 'Enterprise-Grade Solution',
            icon: '💎',
            features: [
                'Custom web application (unlimited pages)',
                'Advanced SSG/SSR architecture',
                'AI chat assistant integration (future-ready)',
                'Full SEO & performance optimization',
                'Mobile app (React Native, optional)',
                'Custom features & integrations',
                'Priority support (24/7, instant response)',
                '6 months free maintenance',
                'Premium hosting & CDN included',
                'Unlimited content updates',
                'Dedicated account manager',
                'Weekly performance reports'
            ],
            ideal: 'Established businesses, complex applications, high-traffic websites'
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="section pt-32 bg-gradient-to-br from-gray-50 to-white">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h1>
                            Transparent <span className="gradient-text">Pricing</span> for Every Business
                        </h1>
                        <p className="text-xl text-gray-600">
                            Choose the perfect package for your needs. No hidden fees, no surprises.
                            All packages include modern technology and SEO optimization.
                        </p>
                    </div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="section">
                <div className="container">
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {packages.map((pkg, index) => (
                            <div
                                key={index}
                                className={`card relative ${pkg.popular ? 'border-2 border-rose shadow-colored scale-105' : ''
                                    }`}
                            >
                                {pkg.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <span className="badge">⭐ Most Popular</span>
                                    </div>
                                )}

                                <div className="text-center mb-6">
                                    <div className="text-5xl mb-3">{pkg.icon}</div>
                                    <h2 className="text-2xl font-bold">{pkg.name}</h2>
                                    <p className="text-gray-600">{pkg.tagline}</p>
                                </div>

                                <div className="mb-6">
                                    <h3 className="font-semibold mb-3 text-navy-dark">What's Included:</h3>
                                    <ul className="space-y-2">
                                        {pkg.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm">
                                                <svg className="w-5 h-5 text-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-gray-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-4 border-t border-gray-200 mb-6">
                                    <p className="text-sm text-gray-600">
                                        <strong>Ideal for:</strong> {pkg.ideal}
                                    </p>
                                </div>

                                <CTAButton
                                    href="/contact"
                                    variant={pkg.popular ? 'primary' : 'outline'}
                                >
                                    Get a Quote
                                </CTAButton>
                            </div>
                        ))}
                    </div>

                    {/* Package Comparison Note */}
                    <div className="card-gradient max-w-4xl mx-auto text-center p-8">
                        <h3 className="text-2xl font-bold mb-4">Not sure which package is right for you?</h3>
                        <p className="text-gray-700 mb-6">
                            Every business is unique. Contact us for a free consultation and we'll help you choose
                            the perfect solution based on your goals and budget.
                        </p>
                        <CTAButton href="/contact" variant="primary">
                            Schedule a Free Consultation
                        </CTAButton>
                    </div>
                </div>
            </section>

            {/* Hosting Options */}
            <section className="section bg-gray-50">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="mb-4">
                                Hosting <span className="gradient-text">Options</span>
                            </h2>
                            <p className="text-lg text-gray-600">
                                Reliable hosting solutions with or without support packages
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="card">
                                <div className="text-4xl mb-4">☁️</div>
                                <h3 className="text-xl font-bold mb-4">Hosting Only</h3>
                                <p className="text-gray-600 mb-6">
                                    Need just hosting? We provide fast, secure hosting for your existing website or one we've built for you.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-start gap-2 text-sm">
                                        <svg className="w-5 h-5 text-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>99.9% uptime guarantee</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm">
                                        <svg className="w-5 h-5 text-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Free SSL certificate</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm">
                                        <svg className="w-5 h-5 text-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Daily automatic backups</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm">
                                        <svg className="w-5 h-5 text-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>CDN integration</span>
                                    </li>
                                </ul>
                                <CTAButton href="/contact" variant="outline">
                                    Get Hosting Quote
                                </CTAButton>
                            </div>

                            <div className="card border-2 border-green">
                                <div className="text-4xl mb-4">☁️ + 🛠️</div>
                                <h3 className="text-xl font-bold mb-4">Hosting + Support</h3>
                                <p className="text-gray-600 mb-6">
                                    Get hosting bundled with our maintenance packages for complete peace of mind.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-start gap-2 text-sm">
                                        <svg className="w-5 h-5 text-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Everything in Hosting Only</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm">
                                        <svg className="w-5 h-5 text-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Daily monitoring & updates</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm">
                                        <svg className="w-5 h-5 text-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Security patches & bug fixes</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm">
                                        <svg className="w-5 h-5 text-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Priority technical support</span>
                                    </li>
                                </ul>
                                <CTAButton href="/contact" variant="secondary">
                                    Learn More
                                </CTAButton>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Value Proposition */}
            <section className="section">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-center mb-12">
                            Why <span className="gradient-text">Invest</span> in Quality?
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="card">
                                <div className="text-3xl mb-3">⚡</div>
                                <h3 className="text-xl font-semibold mb-3">Lightning-Fast Performance</h3>
                                <p className="text-gray-600">
                                    SSG and performance optimization mean your site loads in under 2 seconds,
                                    improving SEO rankings and user experience.
                                </p>
                            </div>
                            <div className="card">
                                <div className="text-3xl mb-3">🎯</div>
                                <h3 className="text-xl font-semibold mb-3">SEO That Actually Works</h3>
                                <p className="text-gray-600">
                                    Fast indexing and excellent Core Web Vitals mean higher rankings on Google
                                    and more organic traffic to your business.
                                </p>
                            </div>
                            <div className="card">
                                <div className="text-3xl mb-3">📱</div>
                                <h3 className="text-xl font-semibold mb-3">Mobile-First Design</h3>
                                <p className="text-gray-600">
                                    60%+ of traffic comes from mobile. We design for mobile first, then scale up
                                    to desktop for the best experience everywhere.
                                </p>
                            </div>
                            <div className="card">
                                <div className="text-3xl mb-3">🤝</div>
                                <h3 className="text-xl font-semibold mb-3">Long-Term Partnership</h3>
                                <p className="text-gray-600">
                                    We're here for the long haul. Our support packages ensure your website stays
                                    updated, secure, and growing with your business.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section bg-gradient-primary text-white">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-white mb-6">Ready to Get Started?</h2>
                        <p className="text-xl mb-8 opacity-95">
                            Contact us today for a free quote and consultation. We'll help you find the perfect package for your business.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <CTAButton href="/contact" variant="outline">
                                <span className="text-white">Get a Free Quote</span>
                            </CTAButton>
                            <CTAButton
                                href="https://wa.me/919344832658?text=Hi!%20I'd%20like%20to%20discuss%20pricing%20for%20a%20website%20project"
                                variant="outline"
                                external
                            >
                                <span className="text-white">WhatsApp Us</span>
                            </CTAButton>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
