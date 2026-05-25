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

    const isHome = pathname === '/';
    const isDark = false; // Always use white header

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
                className="fixed top-0 left-0 right-0 h-[3px] z-[61]"
                style={{ background: 'linear-gradient(90deg, #f97316, #ec4899, #6366f1, #38bdf8, #10b981)' }}
            />

            {/* ── Full-screen mobile menu overlay ── */}
            <div
                className={`fixed inset-0 z-[60] bg-white flex flex-col lg:hidden transition-opacity duration-300 ${
                    isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
            >
                {/* Top bar */}
                <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: '1px solid rgba(15,23,42,0.07)' }}>
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                        <img src="/brand-logo.png" alt="Nigoweb Technologies" className="h-9 w-auto" />
                    </Link>
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="p-2 text-gray-600"
                        aria-label="Close menu"
                    >
                        <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Nav links */}
                <div className="flex-1 overflow-y-auto px-5 py-4">
                    <ul className="flex flex-col">
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <Link
                                    href={item.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`block py-4 text-lg font-semibold transition-colors duration-200 ${
                                        pathname === item.path ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* CTA buttons */}
                <div className="px-5 pb-10 flex flex-col gap-3">
                    <Link
                        href="/contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-center py-3.5 px-4 rounded-xl text-sm font-bold border-2 border-gray-200 text-gray-600 hover:border-indigo-400 hover:text-indigo-600 transition-all duration-200"
                    >
                        Get Quote
                    </Link>
                    <Link
                        href="/contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-center py-3.5 px-4 rounded-xl text-sm font-bold text-white"
                        style={{ background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)' }}
                    >
                        Book Free Consultation
                    </Link>
                </div>
            </div>

            <header
                className={`fixed left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-3' : 'py-4'}`}
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
                        <Link href="/" className="flex items-center hover:opacity-85 transition-opacity duration-200">
                            <img
                                src="/brand-logo.png"
                                alt="Nigoweb Technologies"
                                className={`h-9 w-auto transition-all duration-500 ${isDark ? 'brightness-0 invert' : ''}`}
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
                                                isDark
                                                    ? isActive
                                                        ? 'text-white bg-white/10'
                                                        : 'text-white/60 hover:text-sky-300 hover:bg-white/10'
                                                    : isActive
                                                        ? 'text-indigo-600 bg-indigo-50'
                                                        : 'text-gray-500 hover:text-indigo-600 hover:bg-indigo-50'
                                            }`}
                                        >
                                            {item.name}
                                            {isActive && (
                                                <span
                                                    className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-[3px] w-5 rounded-full"
                                                    style={{
                                                        background: isDark
                                                            ? 'rgba(56,189,248,0.9)'
                                                            : 'linear-gradient(90deg, #6366f1, #a855f7)',
                                                    }}
                                                />
                                            )}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>

                        {/* CTA Buttons */}
                        <div className="hidden lg:flex items-center gap-2.5">
                            {/* Get Quote — outlined */}
                            <Link
                                href="/contact"
                                className={`inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl border-2 transition-all duration-200 ${
                                    isDark
                                        ? 'text-white/70 border-white/20 hover:text-white hover:border-white/50 hover:bg-white/10'
                                        : 'text-gray-600 border-gray-200 hover:text-indigo-600 hover:border-indigo-400 hover:bg-indigo-50'
                                }`}
                            >
                                Get Quote
                            </Link>

                            {/* Free Consultation — gradient fill */}
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                                style={{
                                    background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
                                    boxShadow: '0 4px 18px rgba(99,102,241,0.38)',
                                }}
                                onMouseEnter={e => {
                                    (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 28px rgba(99,102,241,0.55)';
                                }}
                                onMouseLeave={e => {
                                    (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 18px rgba(99,102,241,0.38)';
                                }}
                            >
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                Free Consultation
                            </Link>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`lg:hidden p-2.5 rounded-xl transition-colors ${
                                isDark ? 'text-white hover:bg-white/10' : 'text-gray-700 hover:bg-gray-100'
                            }`}
                            aria-label="Toggle menu"
                        >
                            <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" stroke="currentColor">
                                {isMobileMenuOpen
                                    ? <path d="M6 18L18 6M6 6l12 12" />
                                    : <path d="M4 6h16M4 12h16M4 18h16" />}
                            </svg>
                        </button>
                    </div>

                </nav>
            </header>
        </>
    );
}
