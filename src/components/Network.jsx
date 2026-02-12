
import React from 'react';

const Network = () => {
    const partners = [
        { name: "Manufacturing in China", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=600" },
        { name: "CNC machining factory in China", image: "https://images.unsplash.com/photo-1565043589221-1a51f3f28054?auto=format&fit=crop&q=80&w=600" },
        { name: "3D printing factory in Netherlands", image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=600" },
        { name: "3D printing facility in Texas, US", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=600" },
        { name: "Manufacturing facility in India", image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=600" }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-[1400px]">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-[#111] text-center">
                    Meet our vetted network of specialized manufacturing partners
                </h2>

                {/* Horizontal Scroll Gallery */}
                <div className="relative overflow-hidden">
                    <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
                        {partners.map((partner, index) => (
                            <div key={index} className="flex-shrink-0 w-[350px] snap-start group cursor-pointer">
                                <div className="h-64 w-full bg-gray-100 rounded-lg overflow-hidden mb-4 shadow-md">
                                    <img
                                        src={partner.image}
                                        alt={partner.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <h3 className="text-base font-bold text-[#111] flex items-center gap-2">
                                    {partner.name}
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Arrows */}
                <div className="flex justify-center gap-4 mt-8">
                    <button className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-[#0066CC] hover:text-[#0066CC] transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-[#0066CC] hover:text-[#0066CC] transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>
            </div>

            <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
};

export default Network;
