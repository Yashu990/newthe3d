
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import galgotiasLogo from '../assets/Galgotias-University-Logo.png';
import asahiLogo from '../assets/asahi.jpg';
import cars24Logo from '../assets/car24.png';
import eulerLogo from '../assets/euler.jpg';
import paytmLogo from '../assets/paytam.png';
import shardaLogo from '../assets/sharda.jpg';
import shivNadarLogo from '../assets/shiv-nadar.png';

const Counter = ({ target, suffix = '', duration = 2000 }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        let start = 0;
        const step = target / (duration / 16);
        const timer = setInterval(() => {
            start += step;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(start));
        }, 16);
        return () => clearInterval(timer);
    }, [target, duration]);
    return <span>{count}{suffix}</span>;
};

const Hero = () => {
    const clients = [
        { name: "Paytm", logo: paytmLogo },
        { name: "Euler Motors", logo: eulerLogo },
        { name: "Cars24", logo: cars24Logo },
        { name: "Asahi India Glass", logo: asahiLogo },
        { name: "Sharda University", logo: shardaLogo },
        { name: "Galgotias University", logo: galgotiasLogo },
        { name: "Shiv Nadar University", logo: shivNadarLogo },
        { name: "ISRO", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Indian_Space_Research_Organisation_Logo.svg/1200px-Indian_Space_Research_Organisation_Logo.svg.png" },
        { name: "Indian Railways", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/45/Indian_Railways_logo.svg/1200px-Indian_Railways_logo.svg.png" },
    ];

    const stats = [
        { value: 500, suffix: '+', label: 'Projects Done' },
        { value: 50, suffix: '+', label: 'Enterprise Clients' },
        { value: 99, suffix: '%', label: 'Satisfaction Rate' },
        { value: 6, suffix: '+', label: 'Years Experience' },
    ];

    const badges = ['SLA', 'SLS', 'FDM', 'Vacuum Casting', 'Injection Molding'];

    return (
        <section className="relative w-full min-h-screen flex flex-col lg:flex-row overflow-hidden bg-[#080b12]">

            {/* ── LEFT: Image Panel ── */}
            <div className="relative w-full lg:w-[62%] h-[55vh] lg:h-screen flex-shrink-0 overflow-hidden">

                {/* Image */}
                <motion.div
                    initial={{ scale: 1.08, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    className="absolute inset-0"
                >
                    <img
                        src="/photo/hero-custom.jpg"
                        alt="3D Printing Manufacturing"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://images.unsplash.com/photo-1622329388330-2216d7d59837?auto=format&fit=crop&q=80&w=2070';
                        }}
                    />
                </motion.div>

                {/* Dark overlay – heavier on right so text panel blends */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-black/70" />
                {/* Bottom fade into panel bg */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080b12] to-transparent" />

                {/* Floating Badge – top-left */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="absolute top-6 left-6 flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2"
                >
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-white text-xs font-semibold tracking-wider uppercase">Live Production Facility</span>
                </motion.div>

                {/* Bottom-left mini stats on image */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.7 }}
                    className="absolute bottom-8 left-6 right-6 hidden lg:flex gap-4"
                >
                    {stats.map((s, i) => (
                        <div key={i} className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl px-4 py-3 flex-1 text-center">
                            <div className="text-white text-xl font-extrabold leading-none">
                                <Counter target={s.value} suffix={s.suffix} />
                            </div>
                            <div className="text-gray-300 text-[10px] font-medium mt-1 uppercase tracking-wider">{s.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* ── RIGHT: Content Panel ── */}
            <div className="relative w-full lg:w-[38%] flex flex-col justify-center px-8 md:px-12 lg:px-14 py-16 lg:py-0 z-10">

                {/* Subtle radial glow behind text */}
                <div className="absolute top-1/3 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-orange-500/8 rounded-full blur-3xl pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
                    className="relative max-w-xl"
                >
                    {/* Technology Pills */}
                    <div className="flex flex-wrap gap-2 mb-7">
                        {badges.map((b, i) => (
                            <motion.span
                                key={b}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 + i * 0.08 }}
                                className="px-3 py-1 rounded-full bg-[#FF6B35]/15 border border-[#FF6B35]/30 text-[#FF6B35] text-[11px] font-bold uppercase tracking-widest"
                            >
                                {b}
                            </motion.span>
                        ))}
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl md:text-5xl xl:text-[3.5rem] font-extrabold text-white leading-[1.08] tracking-tight mb-5">
                        Manufacturing{' '}
                        <span className="block">On‑Demand.</span>
                        <span className="block bg-gradient-to-r from-[#FF6B35] to-[#ff9a00] bg-clip-text text-transparent">
                            Built for Precision.
                        </span>
                    </h1>

                    {/* Divider line */}
                    <div className="w-16 h-[3px] bg-gradient-to-r from-[#FF6B35] to-[#ff9a00] rounded-full mb-5" />

                    {/* Sub-text */}
                    <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-9 max-w-md">
                        End‑to‑end additive manufacturing solutions — from rapid prototyping to production runs — trusted by leading institutions &amp; enterprises across India.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.04, boxShadow: '0 0 32px rgba(255,107,53,0.5)' }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#FF6B35] to-[#E55A28] text-white text-sm font-bold rounded-lg transition-all shadow-lg shadow-orange-900/30"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            Get an Instant Quote
                        </motion.a>
                        <motion.a
                            href="#gallery"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 text-white text-sm font-semibold rounded-lg transition-all"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            View Our Work
                        </motion.a>
                    </div>

                    {/* Stats strip – mobile only */}
                    <div className="flex gap-4 mb-10 lg:hidden">
                        {stats.map((s, i) => (
                            <div key={i} className="text-center flex-1">
                                <div className="text-white text-xl font-extrabold">
                                    <Counter target={s.value} suffix={s.suffix} />
                                </div>
                                <div className="text-gray-500 text-[10px] uppercase tracking-wider mt-0.5">{s.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Trusted By – scrolling logos */}
                    <div className="pt-7">
                        <p className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-5">
                            Trusted by Industry Leaders
                        </p>
                        <div className="relative overflow-hidden mask-fade">
                            <div className="flex w-[200%] animate-scroll items-center gap-10">
                                {[...clients, ...clients].map((client, index) => (
                                    <div key={index} className="flex-shrink-0 h-10 flex items-center justify-center min-w-[90px]">
                                        {client.logo ? (
                                            <img
                                                src={client.logo}
                                                alt={client.name}
                                                title={client.name}
                                                className="h-8 w-auto object-contain grayscale invert mix-blend-screen opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                    const span = document.createElement('span');
                                                    span.innerText = client.name;
                                                    span.className = 'text-xs font-bold text-gray-500 uppercase tracking-wide whitespace-nowrap';
                                                    e.target.parentNode.appendChild(span);
                                                }}
                                            />
                                        ) : (
                                            <span className="text-xs font-bold text-gray-500 uppercase tracking-wide whitespace-nowrap">{client.name}</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <style>{`
                @keyframes scroll {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll  { animation: scroll 40s linear infinite; }
                .mask-fade {
                    mask-image: linear-gradient(to right, transparent, black 12%, black 88%, transparent);
                    -webkit-mask-image: linear-gradient(to right, transparent, black 12%, black 88%, transparent);
                }
            `}</style>
        </section>
    );
};

export default Hero;
