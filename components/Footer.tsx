
'use client';

import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const companyLinks = [
        { name: 'About Us',  href: '/about' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Blog',      href: '/blog' },
        { name: 'Pricing',   href: '/pricing' },
    ];

    const resourceLinks = [
        { name: 'Services',         href: '/services' },
        { name: 'Contact',          href: '/contact' },
        { name: 'Privacy Policy',   href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
    ];

    const devLinks = [
        { name: 'Website Development', href: '/services#web-development' },
        { name: 'Web Applications',    href: '/services#web-apps' },
        { name: 'Mobile Apps',         href: '/services#mobile-apps' },
        { name: 'Website Re-design',   href: '/services#redesign' },
    ];

    const solutionLinks = [
        { name: 'AI Integration',    href: '/services#ai' },
        { name: 'SEO Optimization',  href: '/services#seo' },
        { name: 'Digital Marketing', href: '/services#marketing' },
        { name: 'Maintenance',       href: '/services#maintenance' },
    ];

    const linkColColor = ['#6366f1', '#0ea5e9', '#f97316', '#10b981'];

    return (
        <footer
            className="relative overflow-hidden pt-16 pb-6"
            style={{ background: '#ffffff', borderTop: '1px solid rgba(15,23,42,0.07)' }}
        >
            <div className="container relative z-10">

                {/* ── Main grid: logo left + 4 columns right ── */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 pb-10">

                    {/* Logo */}
                    <div className="col-span-2 sm:col-span-1 flex flex-col justify-start">
                        <Link href="/" className="inline-block hover:opacity-75 transition-opacity mb-4">
                            <img src="/brand-logo.png" alt="Nigoweb Technologies" className="h-10 w-auto" loading="lazy" decoding="async" />
                        </Link>
                        <p className="text-sm leading-6 font-medium max-w-[180px]" style={{ color: '#6b7280' }}>
                            Turning ideas into digital experiences.
                        </p>
                        <div className="flex gap-2">
                            {[
                                { label: 'LinkedIn',  href: '#', color: '#6366f1', d: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
                                { label: 'X',         href: '#', color: '#475569', d: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
                                { label: 'Instagram', href: '#', color: '#ec4899', d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                            ].map(({ label, href, color, d }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                                    style={{ background: 'rgba(15,23,42,0.06)', border: '1px solid rgba(15,23,42,0.10)' }}
                                    onMouseEnter={e => {
                                        const el = e.currentTarget as HTMLElement;
                                        el.style.background = `${color}18`;
                                        el.style.borderColor = `${color}44`;
                                        const svg = el.querySelector('svg') as SVGElement | null;
                                        if (svg) svg.style.color = color;
                                    }}
                                    onMouseLeave={e => {
                                        const el = e.currentTarget as HTMLElement;
                                        el.style.background = 'rgba(15,23,42,0.06)';
                                        el.style.borderColor = 'rgba(15,23,42,0.10)';
                                        const svg = el.querySelector('svg') as SVGElement | null;
                                        if (svg) svg.style.color = 'rgba(15,23,42,0.40)';
                                    }}
                                >
                                    <svg className="w-3.5 h-3.5 transition-colors duration-300" style={{ color: 'rgba(15,23,42,0.40)' }} fill="currentColor" viewBox="0 0 24 24">
                                        <path d={d} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Company */}
                    <LinkColumn title="Company" links={companyLinks} color={linkColColor[0]} />

                    {/* Resources */}
                    <LinkColumn title="Resources" links={resourceLinks} color={linkColColor[1]} />

                    {/* Dev Services */}
                    <LinkColumn title="Dev Services" links={devLinks} color={linkColColor[2]} />

                    {/* Solutions */}
                    <LinkColumn title="Solutions" links={solutionLinks} color={linkColColor[3]} />
                </div>

                {/* ── Contact strip ── */}
                <div className="flex flex-col sm:flex-row sm:items-stretch divide-y sm:divide-y-0 sm:divide-x divide-slate-100 py-6" style={{ borderTop: '1px solid rgba(15,23,42,0.07)', borderBottom: '1px solid rgba(15,23,42,0.07)' }}>
                    {[
                        {
                            href: undefined,
                            label: 'Our Location',
                            value: 'Gandhipuram, Coimbatore, India',
                            color: '#6366f1',
                            d: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z',
                        },
                        {
                            href: 'mailto:nigowebtechnologies@gmail.com',
                            label: 'Email Us',
                            value: 'nigowebtechnologies@gmail.com',
                            color: '#0ea5e9',
                            d: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
                        },
                        {
                            href: 'tel:+919344832658',
                            label: 'Call Us',
                            value: '+91 93448 32658',
                            color: '#10b981',
                            d: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
                        },
                    ].map(({ href, label, value, color, d }) => {
                        const inner = (
                            <div className="flex items-center gap-3 py-4 sm:py-2 md:py-0 md:px-6 group">
                                <div className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center" style={{ background: `${color}15` }}>
                                    <svg className="w-4 h-4" style={{ color }} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d={d} />
                                    </svg>
                                </div>
                                <div className="min-w-0">
                                    <p className="text-xs font-semibold uppercase tracking-wider whitespace-nowrap" style={{ color }}>{label}</p>
                                    <p className="text-sm font-medium mt-0.5 group-hover:text-slate-900 transition-colors duration-200 truncate" style={{ color: '#374151' }}>{value}</p>
                                </div>
                            </div>
                        );
                        return href
                            ? <a key={label} href={href} className="flex-1 min-w-0">{inner}</a>
                            : <div key={label} className="flex-1 min-w-0">{inner}</div>;
                    })}
                </div>

                {/* ── Bottom bar ── */}
                <div className="pt-5 pb-1 text-center">
                    <p className="text-sm font-medium" style={{ color: '#6b7280' }}>
                        © {currentYear} <span className="font-semibold" style={{ color: '#111827' }}>Nigoweb Technologies.</span> All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
}

function LinkColumn({ title, links, color }: { title: string; links: { name: string; href: string }[]; color: string }) {
    return (
        <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-5" style={{ color: '#111827' }}>{title}</h4>
            <ul className="space-y-2.5">
                {links.map(link => (
                    <li key={link.name}>
                        <Link
                            href={link.href}
                            className="text-sm font-medium transition-all duration-200 flex items-center gap-1.5 sm:gap-0 sm:group-hover:gap-1.5 group"
                            style={{ color: '#4b5563' }}
                        >
                            <svg
                                className="w-2.5 h-2.5 flex-shrink-0 opacity-100 sm:w-0 sm:opacity-0 sm:group-hover:w-2.5 sm:group-hover:opacity-100 transition-all duration-200 overflow-hidden"
                                style={{ color }}
                                fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                            <span className="sm:group-hover:translate-x-1 sm:group-hover:ml-1 sm:group-hover:text-slate-900 transition-all duration-200">{link.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
