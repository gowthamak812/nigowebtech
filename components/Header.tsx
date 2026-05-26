'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isMobileMenuOpen]);

    const isHome = pathname === '/';

    const navItems = [
        { name: 'Home',      path: '/' },
        { name: 'Services',  path: '/services' },
        { name: 'Pricing',   path: '/pricing' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Blog',      path: '/blog' },
        { name: 'About',     path: '/about' },
        { name: 'Contact',   path: '/contact' },
    ];

    return (
        <>
            {/* ── Rainbow top-accent strip ── */}
            <div
                className="fixed top-0 left-0 right-0 h-[3px] z-[70]"
                style={{ background: 'linear-gradient(90deg, #f97316, #ec4899, #6366f1, #38bdf8, #10b981)' }}
            />

            {/* ── Header — always on top ── */}
            <header
                className={`fixed left-0 right-0 z-[65] transition-all duration-500 ${isScrolled ? 'py-3' : 'py-4'}`}
                style={{
                    top: '3px',
                    background: '#ffffff',
                    borderBottom: '1px solid rgba(15,23,42,0.08)',
                    boxShadow: isScrolled ? '0 4px 32px rgba(0,0,0,0.07)' : 'none',
                }}
            >
                <nav className="container">
                    <div className="flex items-center justify-between">

                        {/* Logo */}
                        <Link href="/" className="flex items-center hover:opacity-85 transition-opacity duration-200" onClick={() => setIsMobileMenuOpen(false)}>
                            <img
                                src="/brand-logo.png"
                                alt="Nigoweb Technologies"
                                className="h-9 w-auto"
                                loading="eager"
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <ul className="hidden lg:flex items-center gap-0.5">
                            {navItems.map((item) => {
                                const isActive = pathname === item.path;
                                return (
                                    <li key={item.path}>
                                        <Link
                                            href={item.path}
                                            className={`relative text-sm font-semibold px-3.5 py-2 rounded-xl transition-all duration-200 flex items-center gap-1 ${
                                                isActive
                                                    ? 'text-indigo-600 bg-indigo-50'
                                                    : 'text-gray-500 hover:text-indigo-600 hover:bg-indigo-50'
                                            }`}
                                        >
                                            {item.name}
                                            {isActive && (
                                                <span
                                                    className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-[3px] w-5 rounded-full"
                                                    style={{ background: 'linear-gradient(90deg, #6366f1, #a855f7)' }}
                                                />
                                            )}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>

                        {/* Desktop CTA Buttons */}
                        <div className="hidden lg:flex items-center gap-2.5">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl border-2 transition-all duration-200 text-gray-600 border-gray-200 hover:text-indigo-600 hover:border-indigo-400 hover:bg-indigo-50"
                            >
                                Get Quote
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                                style={{ background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)', boxShadow: '0 4px 18px rgba(99,102,241,0.38)' }}
                            >
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                Free Consultation
                            </Link>
                        </div>

                        {/* Mobile Menu Toggle — hamburger ↔ X */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden relative w-9 h-9 flex items-center justify-center rounded-xl text-gray-700 hover:bg-gray-100 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {/* Hamburger */}
                            <svg
                                className={`w-5 h-5 absolute transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`}
                                fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" stroke="currentColor"
                            >
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            {/* Close */}
                            <svg
                                className={`w-5 h-5 absolute transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`}
                                fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" stroke="currentColor"
                            >
                                <path d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </nav>
            </header>

            {/* ── Mobile menu — slides from top ── */}
            <div
                className={`fixed left-0 right-0 bottom-0 z-[60] bg-white flex flex-col lg:hidden transition-transform duration-350 ease-in-out ${
                    isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
                }`}
                style={{ top: '3px', transitionTimingFunction: 'cubic-bezier(0.4,0,0.2,1)' }}
            >
                {/* Spacer for header height */}
                <div className="flex-shrink-0" style={{ height: isScrolled ? '55px' : '63px' }} />

                {/* Divider */}
                <div style={{ borderTop: '1px solid rgba(15,23,42,0.07)' }} />

                {/* Nav links */}
                <div className="flex-1 overflow-y-auto px-6 py-2">
                    <ul className="flex flex-col">
                        {navItems.map((item) => (
                            <li key={item.path} style={{ borderBottom: '1px solid rgba(15,23,42,0.05)' }}>
                                <Link
                                    href={item.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`flex items-center justify-between py-4 text-base font-semibold transition-colors duration-200 ${
                                        pathname === item.path ? 'text-indigo-600' : 'text-gray-700'
                                    }`}
                                >
                                    {item.name}
                                    {pathname === item.path && (
                                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* CTA buttons */}
                <div className="px-6 pb-10 pt-4 flex flex-col gap-3" style={{ borderTop: '1px solid rgba(15,23,42,0.07)' }}>
                    <Link
                        href="/contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-center py-3.5 rounded-xl text-sm font-bold border-2 border-gray-200 text-gray-600 hover:border-indigo-400 hover:text-indigo-600 transition-all duration-200"
                    >
                        Get Quote
                    </Link>
                    <Link
                        href="/contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-center py-3.5 rounded-xl text-sm font-bold text-white"
                        style={{ background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)' }}
                    >
                        Book Free Consultation
                    </Link>
                </div>
            </div>

            {/* Backdrop */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 z-[58] lg:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
        </>
    );
}
