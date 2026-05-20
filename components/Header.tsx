'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
        <header
            style={{
                background: isScrolled
                    ? 'rgba(255, 255, 255, 0.82)'
                    : 'rgba(255, 255, 255, 0.0)',
                backdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
                WebkitBackdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
                borderBottom: isScrolled ? '1px solid rgba(15, 23, 42, 0.07)' : 'none',
                boxShadow: isScrolled ? '0 4px 32px rgba(0,0,0,0.06)' : 'none',
            }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-3' : 'py-5'}`}
        >
            <nav className="container">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2.5 group hover:opacity-90 transition-opacity">
                        <img
                            src="/logo.png"
                            alt="Nigoweb Technologies Logo"
                            className="h-9 w-auto"
                            loading="eager"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="hidden lg:flex items-center gap-1">
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <Link
                                    href={item.path}
                                    className={`text-sm font-semibold tracking-tight transition-all duration-200 relative px-3 py-2 rounded-xl group ${
                                        pathname === item.path
                                            ? 'text-accent-indigo bg-indigo-50'
                                            : 'text-gray-600 hover:text-brand-navy hover:bg-gray-50'
                                    }`}
                                >
                                    {item.name}
                                    {pathname === item.path && (
                                        <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 w-4 rounded-full bg-gradient-to-r from-accent-indigo to-accent-purple" />
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* CTA Buttons */}
                    <div className="hidden lg:flex items-center gap-3">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-brand-navy border-2 border-brand-navy/15 hover:border-brand-navy hover:bg-brand-navy hover:text-white rounded-xl transition-all duration-200"
                            id="nav-get-quote"
                        >
                            Get Quote
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg"
                            style={{ background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)', boxShadow: '0 4px 16px rgba(99,102,241,0.3)' }}
                            id="nav-book-consultation"
                        >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Free Consultation
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2.5 rounded-xl text-brand-navy hover:bg-gray-100 transition-colors"
                        aria-label="Toggle menu"
                        id="mobile-menu-toggle"
                    >
                        <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" stroke="currentColor">
                            {isMobileMenuOpen
                                ? <path d="M6 18L18 6M6 6l12 12" />
                                : <path d="M4 6h16M4 12h16M4 18h16" />}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu Drawer */}
                <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-[520px] mt-4' : 'max-h-0'}`}>
                    <div className="bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100 p-4" style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }}>
                        <ul className="flex flex-col gap-1.5">
                            {navItems.map((item) => (
                                <li key={item.path}>
                                    <Link
                                        href={item.path}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`block py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200 ${
                                            pathname === item.path
                                                ? 'bg-indigo-50 text-accent-indigo'
                                                : 'text-gray-600 hover:bg-gray-50 hover:text-brand-navy'
                                        }`}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="pt-3 border-t border-gray-100 mt-2 flex flex-col gap-2">
                            <Link
                                href="/contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block text-center py-3 px-4 rounded-xl text-sm font-bold uppercase tracking-wider text-brand-navy border-2 border-brand-navy/15"
                                id="mobile-get-quote"
                            >
                                Get Quote
                            </Link>
                            <Link
                                href="/contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block text-center py-3 px-4 rounded-xl text-sm font-bold uppercase tracking-wider text-white"
                                style={{ background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)' }}
                                id="mobile-book-consultation"
                            >
                                Book Free Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
