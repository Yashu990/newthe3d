
import React from 'react';
import { motion } from 'framer-motion';

import galgotiasLogo from '../assets/Galgotias-University-Logo.png';
import asahiLogo from '../assets/asahi.jpg';
import cars24Logo from '../assets/car24.png';
import eulerLogo from '../assets/euler.jpg';
import paytmLogo from '../assets/paytam.png';
import shardaLogo from '../assets/sharda.jpg';
import shivNadarLogo from '../assets/shiv-nadar.png';

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

    return (
        <section className="relative w-full min-h-[90vh] flex flex-col lg:flex-row bg-[#0b0b0b]">
            <div className="w-full lg:w-1/2 relative h-[50vh] lg:h-auto order-1 lg:order-1 overflow-hidden">
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="w-full h-full"
                >
                    <img
                        src="/photo/hero-main.webp"
                        alt="Prototype parts to production runs"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://images.unsplash.com/photo-1622329388330-2216d7d59837?auto=format&fit=crop&q=80&w=2070";
                        }}
                    />
                    <div className="absolute inset-0 bg-black/10"></div>
                </motion.div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16 lg:py-0 order-2 lg:order-2 bg-[#111111] text-white z-10">
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-xl"
                >
                    <div className="flex gap-2 mb-6">
                        <span className="px-3 py-1 rounded-full bg-gray-800 text-xs font-bold uppercase tracking-wider text-gray-300">Prototyping</span>
                        <span className="px-3 py-1 rounded-full bg-gray-800 text-xs font-bold uppercase tracking-wider text-gray-300">Production</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
                        Manufacturing <br /> On-Demand. <br />
                        <span className="text-[#0066CC]">Built for Precision.</span>
                    </h1>

                    <p className="text-lg text-gray-400 font-normal leading-relaxed mb-10 max-w-lg">
                        We provide SLA, SLS, FDM, vacuum casting, injection molding, and end-to-end prototyping solutions trusted by leading institutions and enterprises across India.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-16">
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-[#0066CC] hover:bg-[#0052a3] text-white text-base font-bold rounded-[2px] transition-all shadow-lg text-center min-w-[180px]"
                        >
                            Get an Instant Quote
                        </a>
                    </div>

                    <div className="border-t border-gray-800 pt-8 w-full overflow-hidden">
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">
                            Trusted by Industry Leaders
                        </p>

                        <div className="relative w-full overflow-hidden mask-linear-fade">
                            <div className="flex w-[200%] animate-scroll items-center gap-12">
                                {[...clients, ...clients].map((client, index) => (
                                    <div key={index} className="flex-shrink-0 relative group h-12 w-auto flex items-center justify-center min-w-[100px]">
                                        {client.logo ? (
                                            <img
                                                src={client.logo}
                                                alt={client.name}
                                                title={client.name}
                                                // FIXED: Removed brightness-0 which caused the white block issue. 
                                                // Using simple grayscale and invert for verified dark mode look, plus mix-blend-screen for JPEGs.
                                                className="h-10 md:h-12 w-auto object-contain grayscale invert mix-blend-screen opacity-80 hover:opacity-100 transition-opacity"
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                    const span = document.createElement('span');
                                                    span.innerText = client.name;
                                                    span.className = "text-sm font-bold text-gray-400 uppercase tracking-wide whitespace-nowrap";
                                                    e.target.parentNode.appendChild(span);
                                                }}
                                            />
                                        ) : (
                                            <span className="text-sm font-bold text-gray-400 uppercase tracking-wide whitespace-nowrap">{client.name}</span>
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
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll {
                    animation: scroll 40s linear infinite;
                }
                .mask-linear-fade {
                    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                }
            `}</style>
        </section>
    );
};

export default Hero;
