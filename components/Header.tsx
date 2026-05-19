'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Blog', path: '/blog' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header
            style={{
                background: isScrolled ? 'rgba(253, 250, 246, 0.95)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                borderBottom: isScrolled ? '1px solid rgba(0, 0, 0, 0.05)' : 'none'
            }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-sm py-4' : 'py-6'
                }`}
        >
            <nav className="container">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group hover:opacity-90 transition-opacity">
                        <img
                            src="/logo.png"
                            alt="Nigoweb Technologies Logo"
                            className="h-10 w-auto"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="hidden lg:flex items-center gap-8">
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <Link
                                    href={item.path}
                                    className={`font-medium transition-colors duration-200 relative group ${pathname === item.path
                                        ? 'text-navy font-semibold'
                                        : 'text-gray-600 hover:text-navy'
                                        }`}
                                >
                                    {item.name}
                                    <span
                                        className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-200 ${pathname === item.path ? 'w-full bg-orange' : 'w-0 group-hover:w-full'
                                            }`}
                                        style={{
                                            background: 'var(--orange)'
                                        }}
                                    ></span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <Link href="/contact" className="btn btn-primary h-[50px]">
                            Get a Quote
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'text-navy hover:bg-navy/5' : 'text-navy hover:bg-white/10'}`}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMobileMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 mt-6' : 'max-h-0'
                        }`}
                >
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4">
                        <ul className="flex flex-col gap-2">
                            {navItems.map((item) => (
                                <li key={item.path}>
                                    <Link
                                        href={item.path}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`block py-3 px-4 rounded-xl font-medium transition-all duration-200 ${pathname === item.path
                                            ? 'bg-orange text-white shadow-orange'
                                            : 'text-gray-600 hover:bg-gray-50 hover:text-navy'
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                            <li className="pt-2">
                                <Link
                                    href="/contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="btn btn-primary w-full py-4 text-base"
                                >
                                    Get a Quote
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
