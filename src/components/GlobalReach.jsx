
import React from 'react';

const GlobalReach = () => {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 max-w-[1400px]">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left: World Map Visual */}
                    <div className="w-full lg:w-2/3 relative">
                        <div className="aspect-[16/9] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-xl relative">
                            {/* Simple World Map SVG representation */}
                            <svg className="w-full h-full opacity-20" viewBox="0 0 1000 500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <text x="50%" y="50%" textAnchor="middle" className="text-6xl font-bold fill-gray-400">WORLD MAP</text>
                            </svg>

                            {/* Overlay dots representing locations */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative w-full h-full">
                                    {/* Sample location dots */}
                                    {[
                                        { top: '30%', left: '20%' },
                                        { top: '25%', left: '45%' },
                                        { top: '40%', left: '52%' },
                                        { top: '35%', left: '72%' },
                                        { top: '55%', left: '80%' },
                                        { top: '45%', left: '15%' }
                                    ].map((pos, i) => (
                                        <div
                                            key={i}
                                            className="absolute w-3 h-3 bg-blue-500 rounded-full animate-pulse shadow-lg"
                                            style={{ top: pos.top, left: pos.left }}
                                        >
                                            <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-75"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Text Content */}
                    <div className="w-full lg:w-1/3">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#111] mb-6 tracking-tight">
                            Limitless manufacturing
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            3D Printing Co. is a world first. We are the only solution that pairs in-house factories with a highly vetted global network to provide customers with all-in manufacturing.
                        </p>
                        <p className="text-base text-gray-600 leading-relaxed mb-8">
                            Access 3D Printing factories for accelerated manufacturing of quality parts or use our Network for volume pricing, tighter tolerances, and more complex parts. The result? Digital manufacturing and engineering expertise that meets all your needs from prototyping to production.
                        </p>
                        <a href="#" className="text-[#0066CC] font-bold text-base inline-flex items-center hover:underline group">
                            Learn more about our network
                            <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GlobalReach;
