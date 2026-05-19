import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Services | Web Development, Mobile Apps & SEO | Nigoweb Technologies',
    description: 'Complete digital services for growing businesses: custom web development, mobile apps, SEO optimization, e-commerce solutions, and ongoing maintenance. Get your free quote today.',
};

export default function Services() {
    return (
        <>
            {/* Hero Section */}
            <section className="geometric-hero flex items-center">
                <div className="container relative z-10 section">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-block mb-6">
                            <span className="badge">💼 Complete Digital Solutions</span>
                        </div>
                        <h1 className="text-white">
                            Services That Drive Business Growth
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                            From stunning websites to powerful mobile apps, we deliver digital solutions that help your business thrive online.
                        </p>
                    </div>
                </div>
            </section>

            {/* Detailed Services */}
            <section className="section bg-white">
                <div className="container">
                    <div className="space-y-20">
                        {/* Web Development */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="icon-rose inline-flex mb-4">
                                    🌐
                                </div>
                                <h2 className="mb-4">Web Development</h2>
                                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                    Custom websites built with cutting-edge technologies like React and Next.js. We create fast, SEO-optimized websites that convert visitors into customers.
                                </p>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-start gap-3">
                                        <span className="text-green text-xl">✓</span>
                                        <span className="text-gray-700"><strong>Responsive Design:</strong> Perfect on all devices</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-green text-xl">✓</span>
                                        <span className="text-gray-700"><strong>Lightning Fast:</strong> Optimized for Core Web Vitals</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-green text-xl">✓</span>
                                        <span className="text-gray-700"><strong>SEO Built-in:</strong> Rank higher on Google from day one</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-green text-xl">✓</span>
                                        <span className="text-gray-700"><strong>Modern Stack:</strong> React, Next.js, Tailwind CSS</span>
                                    </li>
                                </ul>
                                <a href="/contact" className="btn btn-primary">
                                    Start Your Project
                                </a>
                            </div>
                            <div className="card bg-gradient-to-br from-rose/10 to-orange/10 p-8">
                                <h3 className="mb-4">Perfect For:</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Small Business Websites</li>
                                    <li>• Corporate Websites</li>
                                    <li>• Landing Pages</li>
                                    <li>• Portfolio Sites</li>
                                    <li>• Custom Web Applications</li>
                                </ul>
                            </div>
                        </div>

                        {/* Mobile Applications */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="order-2 md:order-1">
                                <div className="card bg-gradient-to-br from-blue/10 to-green/10 p-8">
                                    <h3 className="mb-4">Technologies:</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• React Native (Cross-platform)</li>
                                        <li>• iOS Native Development</li>
                                        <li>• Android Native Development</li>
                                        <li>• Progressive Web Apps (PWA)</li>
                                        <li>• Backend Integration</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="order-1 md:order-2">
                                <div className="icon-blue inline-flex mb-4">
                                    📱
                                </div>
                                <h2 className="mb-4">Mobile Applications</h2>
                                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                    Native and cross-platform mobile apps that provide seamless user experiences. Reach your customers wherever they are.
                                </p>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-start gap-3">
                                        <span className="text-green text-xl">✓</span>
                                        <span className="text-gray-700"><strong>Cross-Platform:</strong> One codebase, iOS & Android</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-green text-xl">✓</span>
                                        <span className="text-gray-700"><strong>Native Performance:</strong> Smooth and responsive</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-green text-xl">✓</span>
                                        <span className="text-gray-700"><strong>Push Notifications:</strong> Engage with your users</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-green text-xl">✓</span>
                                        <span className="text-gray-700"><strong>App Store Ready:</strong> We handle the submission</span>
                                    </li>
                                </ul>
                                <a href="/contact" className="btn btn-primary">
                                    Build Your App
                                </a>
                            </div>
                        </div>

                        {/* SEO & Performance */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="icon-orange inline-flex mb-4">
                                    🎯
                                </div>
                                <h2 className="mb-4">SEO & Performance Optimization</h2>
                                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                    Get found on Google and deliver lightning-fast experiences. We optimize every aspect of your website for search engines and speed.
                                </p>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-start gap-3">
                                        <span className="text-green text-xl">✓</span>
                                        <span className="text-gray-700"><strong>Technical SEO:</strong> Proper structure and metadata</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-green text-xl">✓</span>
                                        <span className="text-gray-700"><strong>Page Speed:</strong> 95+ Google PageSpeed scores</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-green text-xl">✓</span>
                                        <span className="text-gray-700"><strong>Core Web Vitals:</strong> Optimized for Google's ranking factors</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-green text-xl">✓</span>
                                        <span className="text-gray-700"><strong>Schema Markup:</strong> Rich search results</span>
                                    </li>
                                </ul>
                                <a href="/contact" className="btn btn-primary">
                                    Boost Your Rankings
                                </a>
                            </div>
                            <div className="card bg-gradient-to-br from-orange/10 to-rose/10 p-8">
                                <h3 className="mb-4">SEO Services Include:</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• On-Page SEO</li>
                                    <li>• Technical SEO Audit</li>
                                    <li>• Performance Optimization</li>
                                    <li>• Mobile-First Indexing</li>
                                    <li>• Local SEO Setup</li>
                                </ul>
                            </div>
                        </div>

                        {/* E-Commerce */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="order-2 md:order-1">
                                <div className="card bg-gradient-to-br from-green/10 to-blue/10 p-8">
                                    <h3 className="mb-4">E-Commerce Features:</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• Product Catalog Management</li>
                                        <li>• Payment Gateway Integration</li>
                                        <li>• Inventory Tracking</li>
                                        <li>• Order Management System</li>
                                        <li>• Customer Accounts</li>
                                        <li>• Analytics & Reports</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="order-1 md:order-2">
                                <div className="icon-green inline-flex mb-4">
                                    🛒
                                </div>
                                <h2 className="mb-4">E-Commerce Solutions</h2>
                                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                    Complete online store solutions that make it easy to sell products online. Secure payments, inventory management, and seamless checkout.
                                </p>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-start gap-3">
                                        <span className="text-green text-xl">✓</span>
                                        <span className="text-gray-700"><strong>Secure Payments:</strong> Multiple payment options</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-green text-xl">✓</span>
                                        <span className="text-gray-700"><strong>Mobile Commerce:</strong> Perfect shopping on any device</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-green text-xl">✓</span>
                                        <span className="text-gray-700"><strong>Easy Management:</strong> Simple admin dashboard</span>
                                    </li>
                                </ul>
                                <a href="/contact" className="btn btn-primary">
                                    Launch Your Store
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="navy-section section">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="mb-6">Ready to Get Started?</h2>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            Let's discuss your project and create a custom solution that fits your needs and budget.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/contact" className="btn btn-primary">
                                Get a Free Quote
                            </a>
                            <a href="/pricing" className="btn btn-outline">
                                View Pricing
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
