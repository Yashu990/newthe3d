
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Process', path: '/process' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <header className="fixed top-0 left-0 right-0 bg-black border-b border-gray-800 z-50 shadow-lg">
            <div className="w-full px-0">
                <div className="flex items-center justify-between h-20 px-4">
                    {/* Logo Section - Absolute Left Edge */}
                    <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
                        <div className="h-14 w-14 flex items-center justify-center">
                            <img
                                src="/photo/logo.png"
                                alt="Logo"
                                className="h-14 w-14 object-contain"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg font-black text-white tracking-tight leading-tight">
                                THE 3D PRINTING COMPANY
                            </span>
                            <span className="text-[10px] font-semibold text-gray-400 tracking-widest uppercase">
                                Industrial Manufacturing
                            </span>
                        </div>
                    </Link>

                    {/* Navigation + Button - Absolute Right Edge */}
                    <div className="hidden lg:flex items-center gap-8">
                        {/* Navigation Links */}
                        <nav className="flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="text-sm font-bold text-white hover:text-[#FF6B35] transition-colors relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF6B35] transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            ))}
                        </nav>

                        {/* Get Quote Button */}
                        <Link
                            to="/contact"
                            className="bg-white hover:bg-gray-100 text-black font-bold text-sm px-8 py-3.5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            Get Quote
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 text-white hover:bg-gray-800 rounded-md transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden py-4 border-t border-gray-800 bg-black px-4">
                        <nav className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-sm font-semibold text-white hover:text-[#FF6B35] transition-colors px-2 py-2"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="/contact"
                                onClick={() => setIsMenuOpen(false)}
                                className="bg-white hover:bg-gray-100 text-black font-bold text-sm px-6 py-3 rounded-lg transition-all duration-300 text-center"
                            >
                                Get Quote
                            </Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
