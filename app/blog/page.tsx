import type { Metadata } from 'next';
import Link from 'next/link';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
    title: 'Blog | Web Development Tips & SEO Insights | Nigoweb',
    description: 'Read our blog for the latest web development tips, SEO strategies, performance optimization techniques, and industry insights.',
};

export default function BlogPage() {
    const blogPosts = [
        {
            title: 'Why SSG (Static Site Generation) is Perfect for Business Websites',
            excerpt: 'Learn how Static Site Generation delivers lightning-fast websites with excellent SEO performance, perfect for small businesses looking to rank on Google.',
            category: 'SEO & Performance',
            date: 'February 2026',
            readTime: '5 min read',
            slug: 'ssg-perfect-for-business-websites'
        },
        {
            title: 'Core Web Vitals: What Small Businesses Need to Know',
            excerpt: 'Google\'s Core Web Vitals are crucial for SEO. Discover what they are, why they matter, and how to optimize your website for better rankings.',
            category: 'SEO',
            date: 'January 2026',
            readTime: '7 min read',
            slug: 'core-web-vitals-guide'
        },
        {
            title: 'React vs WordPress: Which is Better for Your Business?',
            excerpt: 'Comparing modern JavaScript frameworks like React with traditional CMS platforms. Find out which technology stack suits your business needs.',
            category: 'Web Development',
            date: 'January 2026',
            readTime: '6 min read',
            slug: 'react-vs-wordpress'
        },
        {
            title: 'Mobile-First Design: Why It Matters in 2026',
            excerpt: 'With 60%+ of traffic coming from mobile devices, mobile-first design isn\'t optional anymore. Learn best practices for mobile optimization.',
            category: 'Design',
            date: 'December 2025',
            readTime: '4 min read',
            slug: 'mobile-first-design-2026'
        },
        {
            title: 'How to Choose the Right Support Package for Your Website',
            excerpt: 'Understanding the different types of website maintenance and support. A guide to choosing the perfect package for your business needs.',
            category: 'Business',
            date: 'December 2025',
            readTime: '5 min read',
            slug: 'choosing-support-package'
        },
        {
            title: 'AI Chat Assistants: The Future of Customer Service',
            excerpt: 'Explore how AI chat assistants can transform customer service on your website. Benefits, implementation, and what to expect in the near future.',
            category: 'AI & Innovation',
            date: 'November 2025',
            readTime: '6 min read',
            slug: 'ai-chat-assistants-future'
        }
    ];

    const categories = ['All', 'SEO & Performance', 'Web Development', 'Design', 'Business', 'AI & Innovation'];

    return (
        <>
            {/* Hero Section */}
            <section className="section pt-32 bg-gradient-to-br from-gray-50 to-white">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h1 className="mb-6">
                            Our <span className="gradient-text">Blog</span>
                        </h1>
                        <p className="text-xl text-gray-600">
                            Tips, insights, and best practices for building better websites.
                            Learn from our experience helping businesses grow online.
                        </p>
                    </div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="section pt-0">
                <div className="container">
                    <div className="flex flex-wrap gap-3 justify-center mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`px-4 py-2 rounded-full font-medium transition-all ${category === 'All'
                                        ? 'bg-gradient-primary text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="section pt-0">
                <div className="container">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <article key={index} className="card hover-lift group cursor-pointer">
                                {/* Category Badge */}
                                <div className="mb-4">
                                    <span className="inline-block px-3 py-1 bg-gradient-primary text-white rounded-full text-xs font-semibold">
                                        {post.category}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold mb-3 group-hover:text-rose transition-colors">
                                    {post.title}
                                </h3>

                                {/* Excerpt */}
                                <p className="text-gray-600 mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                {/* Meta Info */}
                                <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-200">
                                    <span>{post.date}</span>
                                    <span>{post.readTime}</span>
                                </div>

                                {/* Read More Link */}
                                <div className="mt-4">
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="text-rose font-semibold hover:text-rose-dark transition-colors inline-flex items-center gap-2"
                                    >
                                        Read More
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="section bg-navy-dark text-white">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-white mb-4">Stay Updated</h2>
                        <p className="text-gray-300 text-lg mb-8">
                            Get the latest web development tips, SEO strategies, and industry insights delivered to your inbox.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-rose"
                            />
                            <button className="btn btn-primary whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                        <p className="text-sm text-gray-400 mt-4">
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                    </div>
                </div>
            </section>

            {/* Topics Section */}
            <section className="section">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="mb-4">
                            Popular <span className="gradient-text">Topics</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Explore our most popular content categories
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="card hover-lift">
                            <div className="text-4xl mb-3">🎯</div>
                            <h3 className="text-xl font-semibold mb-2">SEO & Performance</h3>
                            <p className="text-gray-600 mb-4">
                                Learn how to rank higher on Google and deliver lightning-fast websites.
                            </p>
                            <Link href="/blog?category=seo" className="text-rose font-semibold hover:text-rose-dark">
                                Explore SEO Articles →
                            </Link>
                        </div>

                        <div className="card hover-lift">
                            <div className="text-4xl mb-3">⚛️</div>
                            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                            <p className="text-gray-600 mb-4">
                                Modern frameworks, best practices, and cutting-edge development techniques.
                            </p>
                            <Link href="/blog?category=development" className="text-rose font-semibold hover:text-rose-dark">
                                Read Dev Articles →
                            </Link>
                        </div>

                        <div className="card hover-lift">
                            <div className="text-4xl mb-3">🤖</div>
                            <h3 className="text-xl font-semibold mb-2">AI & Innovation</h3>
                            <p className="text-gray-600 mb-4">
                                Future of web with AI integration, chatbots, and smart automation.
                            </p>
                            <Link href="/blog?category=ai" className="text-rose font-semibold hover:text-rose-dark">
                                Discover AI Content →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section bg-gradient-primary text-white">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-white mb-6">Ready to Build Something Great?</h2>
                        <p className="text-xl mb-8 opacity-95">
                            Let's turn these insights into action. Start your web development project today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <CTAButton href="/contact" variant="outline">
                                <span className="text-white">Get a Free Quote</span>
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
