
'use client';

import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const companyLinks = [
        { name: 'About Us',  href: '/about' },
        { name: 'Services',  href: '/services' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Blog',      href: '/blog' },
        { name: 'Pricing',   href: '/pricing' },
        { name: 'Contact',   href: '/contact' },
    ];

    const serviceLinks = [
        { name: 'Website Development',  href: '/services#web-development' },
        { name: 'Web Applications',     href: '/services#web-apps' },
        { name: 'Mobile Apps',          href: '/services#mobile-apps' },
        { name: 'AI Integration',       href: '/services#ai' },
        { name: 'SEO Optimization',     href: '/services#seo' },
        { name: 'Maintenance',          href: '/services#maintenance' },
    ];

    return (
        <footer
            className="relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #090d16 0%, #111827 50%, #090d16 100%)' }}
        >
            {/* Wave curve at the top */}
            <div className="w-full overflow-hidden leading-none" style={{ marginTop: '-2px' }}>
                <svg viewBox="0 0 1440 70" preserveAspectRatio="none" style={{ height: '70px', width: '100%', display: 'block' }}>
                    <path d="M0,0 C360,70 1080,0 1440,50 L1440,0 L0,0 Z" fill="#090d16" />
                </svg>
            </div>
            {/* Subtle ambient glows — same style as navy-section */}
            <div className="absolute top-0 left-0 w-[500px] h-[300px] pointer-events-none opacity-40" style={{ background: 'radial-gradient(ellipse at 0% 0%, rgba(99,102,241,0.12) 0%, transparent 70%)' }} />
            <div className="absolute bottom-0 right-0 w-[400px] h-[300px] pointer-events-none opacity-30" style={{ background: 'radial-gradient(ellipse at 100% 100%, rgba(168,85,247,0.10) 0%, transparent 70%)' }} />

            <div className="container relative z-10 pt-6 pb-0">

                {/* Main grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-16">

                    {/* Brand — spans 2 cols */}
                    <div className="md:col-span-2 space-y-6">
                        <Link href="/" className="inline-block hover:opacity-80 transition-opacity">
                            <img src="/logo.png" alt="Nigoweb Technologies" className="h-10 w-auto brightness-0 invert" />
                        </Link>

                        <p className="text-gray-400 text-sm leading-7 max-w-sm font-medium">
                            Building fast, modern and scalable digital solutions — websites, web apps, mobile apps and AI integrations that drive real business growth.
                        </p>

                        {/* Contact */}
                        <ul className="space-y-3.5">
                            {[
                                {
                                    href: undefined,
                                    d: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z',
                                    label: 'Gandhipuram, Coimbatore, India',
                                    color: '#818cf8',
                                },
                                {
                                    href: 'mailto:nigowebtechnologies@gmail.com',
                                    d: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
                                    label: 'nigowebtechnologies@gmail.com',
                                    color: '#38bdf8',
                                },
                                {
                                    href: 'tel:+919344832658',
                                    d: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
                                    label: '+91 93448 32658',
                                    color: '#34d399',
                                },
                            ].map(({ href, d, label, color }) => {
                                const inner = (
                                    <span className="flex items-center gap-3 group">
                                        <svg className="w-4 h-4 flex-shrink-0" style={{ color }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d={d} />
                                        </svg>
                                        <span className="text-gray-400 text-sm font-medium group-hover:text-white transition-colors duration-200">{label}</span>
                                    </span>
                                );
                                return href
                                    ? <li key={label}><a href={href}>{inner}</a></li>
                                    : <li key={label}>{inner}</li>;
                            })}
                        </ul>

                        {/* Socials */}
                        <div className="flex gap-2.5 pt-1">
                            {[
                                { label: 'LinkedIn', href: '#', color: '#6366f1', d: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
                                { label: 'X', href: '#', color: '#9ca3af', d: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
                                { label: 'Instagram', href: '#', color: '#ec4899', d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                            ].map(({ label, href, color, d }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                                    onMouseEnter={e => {
                                        const el = e.currentTarget as HTMLElement;
                                        el.style.background = `${color}22`;
                                        el.style.borderColor = `${color}60`;
                                        const svg = el.querySelector('svg') as SVGElement | null;
                                        if (svg) svg.style.color = color;
                                    }}
                                    onMouseLeave={e => {
                                        const el = e.currentTarget as HTMLElement;
                                        el.style.background = 'rgba(255,255,255,0.06)';
                                        el.style.borderColor = 'rgba(255,255,255,0.1)';
                                        const svg = el.querySelector('svg') as SVGElement | null;
                                        if (svg) svg.style.color = 'rgba(255,255,255,0.45)';
                                    }}
                                >
                                    <svg className="w-3.5 h-3.5 transition-colors duration-300" style={{ color: 'rgba(255,255,255,0.45)' }} fill="currentColor" viewBox="0 0 24 24">
                                        <path d={d} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-6">Company</h4>
                        <ul className="space-y-3.5">
                            {companyLinks.map(link => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200 flex items-center gap-2 group">
                                        <svg className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 flex-shrink-0" style={{ color: '#818cf8' }} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-6">Services</h4>
                        <ul className="space-y-3.5">
                            {serviceLinks.map(link => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200 flex items-center gap-2 group">
                                        <svg className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 flex-shrink-0" style={{ color: '#f97316' }} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px" style={{ background: 'rgba(255,255,255,0.06)' }} />

                {/* Bottom bar */}
                <div className="py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-xs font-medium order-2 md:order-1">
                            © {currentYear} <span className="text-gray-300 font-semibold">Nigoweb Technologies.</span> All rights reserved.
                        </p>
                        <div className="flex items-center gap-2 order-1 md:order-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: '#22c55e' }} />
                                <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: '#22c55e' }} />
                            </span>
                            <span className="text-gray-500 text-xs font-medium">All systems operational</span>
                        </div>
                        <div className="flex gap-6 text-xs font-medium order-3">
                            <Link href="/privacy" className="text-gray-500 hover:text-gray-200 transition-colors duration-200">Privacy Policy</Link>
                            <Link href="/terms" className="text-gray-500 hover:text-gray-200 transition-colors duration-200">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}