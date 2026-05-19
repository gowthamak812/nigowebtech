import type { Metadata } from 'next';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
    title: 'Our Portfolio | Website Projects & Case Studies | Nigoweb',
    description: 'View our portfolio of successful web development projects including Webbersway, Krishnam Builders, and GST Portal. See our work and results.',
};

export default function PortfolioPage() {
    const projects = [
        {
            name: 'Webbersway',
            category: 'IT Company Website',
            description: 'Modern, professional website for a growing IT services company. Built with Next.js and optimized for SEO to attract B2B clients.',
            image: '🌐',
            tech: ['Next.js', 'React', 'Tailwind CSS', 'Node.js'],
            results: [
                '3x faster load times vs old site',
                '150% increase in organic traffic',
                '95+ Google PageSpeed score',
                'Mobile-first responsive design'
            ],
            link: '#'
        },
        {
            name: 'Krishnam Builders',
            category: 'Construction Company',
            description: 'Professional website showcasing construction projects and services. Gallery integration and lead generation forms for capturing client inquiries.',
            image: '🏗️',
            tech: ['React', 'Next.js', 'SSG', 'Image Optimization'],
            results: [
                'Beautiful project portfolio gallery',
                '40% increase in quote requests',
                'Perfect mobile responsiveness',
                'Fast Google indexing'
            ],
            link: '#'
        },
        {
            name: 'GST Portal',
            category: 'Web Application',
            description: 'Internal business application for GST filing and management. Custom dashboard with data visualization and automated workflows.',
            image: '📊',
            tech: ['React', 'Node.js', 'Express', 'MongoDB', 'AWS'],
            results: [
                'Automated GST filing process',
                '70% reduction in manual work',
                'Real-time data synchronization',
                'Secure file handling & storage'
            ],
            link: '#'
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="section pt-32 bg-gradient-to-br from-gray-50 to-white">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h1>
                            Our <span className="gradient-text">Portfolio</span>
                        </h1>
                        <p className="text-xl text-gray-600">
                            Real projects, real results. See how we've helped businesses grow with modern,
                            SEO-optimized websites and applications.
                        </p>
                    </div>
                </div>
            </section>

            {/* Portfolio Grid */}
            <section className="section">
                <div className="container">
                    <div className="space-y-16">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Project Image/Icon */}
                                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                                    <div className="card bg-gradient-hero text-white text-center p-16">
                                        <div className="text-9xl mb-4">{project.image}</div>
                                        <h3 className="text-3xl font-bold text-white">{project.name}</h3>
                                        <p className="text-white/90 mt-2">{project.category}</p>
                                    </div>
                                </div>

                                {/* Project Details */}
                                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                                    <div className="mb-4">
                                        <span className="inline-block px-3 py-1 bg-rose/10 text-rose rounded-full text-sm font-semibold">
                                            {project.category}
                                        </span>
                                    </div>
                                    <h2 className="text-3xl font-bold">{project.name}</h2>
                                    <p className="text-lg text-gray-600 mb-6">{project.description}</p>

                                    {/* Technology Stack */}
                                    <div className="mb-6">
                                        <h4 className="font-semibold text-navy-dark mb-3">Technology Stack:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1 bg-gray-100 rounded-lg text-sm text-gray-700"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Results */}
                                    <div className="mb-6">
                                        <h4 className="font-semibold text-navy-dark mb-3">Results & Impact:</h4>
                                        <ul className="space-y-2">
                                            {project.results.map((result, idx) => (
                                                <li key={idx} className="flex items-start gap-2">
                                                    <svg className="w-5 h-5 text-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="text-gray-700">{result}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Client Testimonials Placeholder */}
            <section className="section bg-navy-dark text-white">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-white mb-4">What Our <span className="text-gradient-secondary">Clients Say</span></h2>
                            <p className="text-gray-300 text-lg">
                                Don't just take our word for it — here's what our clients have to say about working with us
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="card bg-white/10 backdrop-blur-lg border-white/20 text-white">
                                <div className="text-3xl mb-4">💬</div>
                                <p className="text-gray-200 mb-4 italic">
                                    "Nigoweb Technologies transformed our online presence. The new website is fast,
                                    beautiful, and we're getting 3x more inquiries than before. Highly recommended!"
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-xl">
                                        👤
                                    </div>
                                    <div>
                                        <p className="font-semibold">Happy Client</p>
                                        <p className="text-sm text-gray-400">Construction Industry</p>
                                    </div>
                                </div>
                            </div>

                            <div className="card bg-white/10 backdrop-blur-lg border-white/20 text-white">
                                <div className="text-3xl mb-4">💬</div>
                                <p className="text-gray-200 mb-4 italic">
                                    "Professional team, modern technology, and excellent support. Our web application
                                    has significantly improved our business operations. Thank you!"
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-gradient-secondary flex items-center justify-center text-xl">
                                        👤
                                    </div>
                                    <div>
                                        <p className="font-semibold">Satisfied Customer</p>
                                        <p className="text-sm text-gray-400">IT Services</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Performance Metrics */}
            <section className="section">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="mb-4">
                            Performance <span className="gradient-text">Metrics</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            We measure success by real numbers. Here are the average improvements our clients see
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        <div className="card text-center">
                            <div className="text-5xl font-bold gradient-text mb-2">95+</div>
                            <p className="text-gray-600">Average PageSpeed Score</p>
                        </div>
                        <div className="card text-center">
                            <div className="text-5xl font-bold gradient-text mb-2">3x</div>
                            <p className="text-gray-600">Faster Load Times</p>
                        </div>
                        <div className="card text-center">
                            <div className="text-5xl font-bold gradient-text mb-2">150%</div>
                            <p className="text-gray-600">Increase in Organic Traffic</p>
                        </div>
                        <div className="card text-center">
                            <div className="text-5xl font-bold gradient-text mb-2">100%</div>
                            <p className="text-gray-600">Mobile Responsive</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section bg-gradient-primary text-white">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-white mb-6">Ready to See Your Project Here?</h2>
                        <p className="text-xl mb-8 opacity-95">
                            Let's create something amazing together. Contact us today to start your project.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <CTAButton href="/contact" variant="outline">
                                <span className="text-white">Start Your Project</span>
                            </CTAButton>
                            <CTAButton href="/services" variant="outline">
                                <span className="text-white">View Our Services</span>
                            </CTAButton>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
