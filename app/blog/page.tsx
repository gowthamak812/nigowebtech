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
            {/* Blog Hero */}
            <section className="section pt-32 pb-20 bg-gradient-to-b from-brand-cream to-white relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-[100px] animate-pulse"></div>
                    <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-brand-rose/5 rounded-full blur-[100px] animate-pulse [animation-delay:2s]"></div>
                </div>

                <div className="container relative z-10 text-center">
                    <div className="max-w-3xl mx-auto space-y-6">
                        <span className="badge">Insights</span>
                        <h1 className="text-brand-navy">
                            Our <span className="gradient-text">Blog</span>
                        </h1>
                        <p className="text-xl text-gray-600 font-medium leading-relaxed">
                            Tips, insights, and best practices for building better websites.
                            Learn from our experience helping businesses grow online.
                        </p>
                    </div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="section pt-0 pb-10 bg-white">
                <div className="container">
                    <div className="flex flex-wrap gap-2.5 justify-center max-w-3xl mx-auto">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 ${category === 'All'
                                        ? 'bg-brand-navy text-white shadow-sm'
                                        : 'bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-brand-navy'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="section bg-white pt-10">
                <div className="container">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {blogPosts.map((post, index) => (
                            <article key={index} className="card group flex flex-col justify-between hover:border-brand-rose/20">
                                <div>
                                    {/* Category Badge */}
                                    <div className="mb-4">
                                        <span className="inline-block px-3 py-1 bg-gradient-to-r from-brand-orange to-brand-rose text-white rounded-md text-[9px] font-extrabold uppercase tracking-widest shadow-sm">
                                            {post.category}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold mb-3 text-brand-navy group-hover:text-brand-rose transition-colors duration-200">
                                        {post.title}
                                    </h3>

                                    {/* Excerpt */}
                                    <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                </div>

                                <div>
                                    {/* Meta Info */}
                                    <div className="flex items-center justify-between text-xs text-gray-400 font-semibold pt-4 border-t border-gray-50 mb-4">
                                        <span>{post.date}</span>
                                        <span>{post.readTime}</span>
                                    </div>

                                    {/* Read More Link */}
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="text-xs font-extrabold uppercase tracking-wider text-brand-navy hover:text-brand-rose transition-all inline-flex items-center gap-1.5"
                                    >
                                        Read More
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="section bg-brand-navy text-white py-20">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center space-y-8">
                        <span className="badge bg-white/5 border-white/10 text-white">Newsletter</span>
                        <h2 className="text-white font-black text-3xl">Stay Updated</h2>
                        <p className="text-gray-300 text-base leading-relaxed max-w-xl mx-auto">
                            Get the latest web development tips, SEO strategies, and industry insights delivered directly to your inbox.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-rose focus:ring-2 focus:ring-brand-rose/20 text-sm font-semibold transition-all"
                            />
                            <button className="btn btn-primary bg-gradient-to-r from-brand-orange to-brand-rose border-none text-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider shadow-md">
                                Subscribe
                            </button>
                        </div>
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                    </div>
                </div>
            </section>

            {/* Topics Section */}
            <section className="section bg-gradient-to-b from-white to-brand-cream/30">
                <div className="container">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <span className="badge mb-3">Categories</span>
                        <h2 className="mb-4 text-brand-navy">
                            Popular <span className="gradient-text">Topics</span>
                        </h2>
                        <p className="text-lg text-gray-600 font-medium">
                            Explore our most popular content categories
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        <div className="card flex flex-col justify-between hover:border-brand-rose/20">
                            <div>
                                <div className="text-3xl mb-4">🎯</div>
                                <h3 className="text-xl font-bold text-brand-navy mb-2">SEO & Performance</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                    Learn how to rank higher on Google and deliver lightning-fast websites.
                                </p>
                            </div>
                            <Link href="/blog?category=seo" className="text-xs font-bold uppercase tracking-widest text-brand-rose hover:text-brand-rose-dark">
                                Explore SEO Articles →
                            </Link>
                        </div>

                        <div className="card flex flex-col justify-between hover:border-brand-blue/20">
                            <div>
                                <div className="text-3xl mb-4">⚛️</div>
                                <h3 className="text-xl font-bold text-brand-navy mb-2">Web Development</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                    Modern frameworks, best practices, and cutting-edge development techniques.
                                </p>
                            </div>
                            <Link href="/blog?category=development" className="text-xs font-bold uppercase tracking-widest text-brand-blue hover:text-brand-blue-dark">
                                Read Dev Articles →
                            </Link>
                        </div>

                        <div className="card flex flex-col justify-between hover:border-brand-orange/20">
                            <div>
                                <div className="text-3xl mb-4">🤖</div>
                                <h3 className="text-xl font-bold text-brand-navy mb-2">AI & Innovation</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                    Future of web with AI integration, chatbots, and smart automation.
                                </p>
                            </div>
                            <Link href="/blog?category=ai" className="text-xs font-bold uppercase tracking-widest text-brand-orange hover:text-brand-orange-dark">
                                Discover AI Content →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
