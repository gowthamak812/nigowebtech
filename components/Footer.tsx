import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const companyLinks = [
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Blog', href: '/blog' },
    ];

    const serviceLinks = [
        { name: 'Web Development', href: '/services#web-development' },
        { name: 'Mobile Apps', href: '/services#mobile-apps' },
        { name: 'SEO Services', href: '/services#seo' },
        { name: 'Maintenance', href: '/services#maintenance' },
    ];

    const resourceLinks = [
        { name: 'Pricing', href: '/pricing' },
        { name: 'Contact', href: '/contact' },
        { name: 'FAQs', href: '/contact#faq' },
    ];

    return (
        <footer className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-red-50 border-t-2 border-white pt-20">
            {/* Background Pattern - Circles like Code Quality card */}
            <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: 'radial-gradient(circle, transparent 40%, #000 40%, #000 42%, transparent 42%)',
                backgroundSize: '30px 30px'
            }}></div>

            {/* Gradient Orb */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-orange-500 to-red-500 rounded-full blur-3xl opacity-10"></div>
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-tr from-red-500 to-orange-500 rounded-full blur-3xl opacity-10"></div>

            <div className="container relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <div>
                        <Link href="/" className="inline-block mb-6 hover:opacity-90 transition-opacity group">
                            <img
                                src="/logo.png"
                                alt="Nigoweb Technologies Logo"
                                className="h-12 w-auto group-hover:scale-105 transition-transform"
                            />
                        </Link>
                        <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                            Building fast, modern, and SEO-optimized web solutions that drive business growth.
                        </p>
                        <div className="flex gap-3">
                            {/* Social Media Icons */}
                            <a
                                href="#"
                                className="w-11 h-11 rounded-2xl bg-white/80 backdrop-blur-sm text-navy hover:bg-gradient-to-br hover:from-orange-500 hover:to-red-500 hover:text-white flex items-center justify-center transition-all hover:scale-110 shadow-lg hover:shadow-xl border border-white"
                                aria-label="LinkedIn"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>

                            <a
                                href="#"
                                className="w-11 h-11 rounded-2xl bg-white/80 backdrop-blur-sm text-navy hover:bg-gradient-to-br hover:from-orange-500 hover:to-red-500 hover:text-white flex items-center justify-center transition-all hover:scale-110 shadow-lg hover:shadow-xl border border-white"
                                aria-label="Twitter"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="w-11 h-11 rounded-2xl bg-white/80 backdrop-blur-sm text-navy hover:bg-gradient-to-br hover:from-orange-500 hover:to-red-500 hover:text-white flex items-center justify-center transition-all hover:scale-110 shadow-lg hover:shadow-xl border border-white"
                                aria-label="Instagram"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-lg font-black text-navy mb-6 uppercase tracking-wider">Company</h3>
                        <ul className="space-y-3">
                            {companyLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-700 hover:text-orange font-medium transition-colors inline-flex items-center gap-2 group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-orange transition-all duration-300 rounded-full"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-black text-navy mb-6 uppercase tracking-wider">Services</h3>
                        <ul className="space-y-3">
                            {serviceLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-700 hover:text-orange font-medium transition-colors inline-flex items-center gap-2 group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-orange transition-all duration-300 rounded-full"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-black text-navy mb-6 uppercase tracking-wider">Contact Us</h3>
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-start gap-3 group">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 text-white flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <span className="font-medium pt-2">Coimbatore, Tamil Nadu, India</span>
                            </li>
                            <li className="flex items-start gap-3 group">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 text-white flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <a href="mailto:contact@nigoweb.com" className="hover:text-orange transition-colors font-medium pt-2">
                                    contact@nigoweb.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3 group">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 text-white flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <a href="tel:+919344832658" className="hover:text-orange transition-colors font-medium pt-2">
                                    +91 93448 32658
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t-2 border-white/50">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 pb-8">
                        <p className="text-gray-600 text-sm text-center md:text-left font-medium">
                            © {currentYear} <span className="font-black text-navy">Nigoweb Technologies</span>. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sm">
                            <Link href="/privacy" className="text-gray-600 hover:text-orange transition-colors font-medium">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-gray-600 hover:text-orange transition-colors font-medium">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}