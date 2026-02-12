import React from 'react';

const Support = () => {
    return (
        <section id="support" className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2">
                        <img
                            src="/photo/hero-printer.png"
                            alt="Engineering Support"
                            className="rounded-lg shadow-xl"
                            onError={(e) => { e.target.onerror = null; e.target.src = "/photo/2026-01-02.webp" }}
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 uppercase tracking-tight">From Concept to Production</h2>
                        <div className="h-1 w-20 bg-black mb-8"></div>

                        <p className="text-xl text-gray-600 mb-8">
                            We collaborate with academic institutions, research organizations, government agencies, and private enterprises to accelerate innovation through additive manufacturing.
                        </p>

                        <ul className="space-y-4">
                            {[
                                "CAD Design Services",
                                "Engineering Validation",
                                "Rapid Iterations",
                                "Functional Testing Support",
                                "Collaboration with Institutions",
                                "Research Partnerships"
                            ].map((item, index) => (
                                <li key={index} className="flex items-center text-lg text-gray-800 font-medium border-b border-gray-100 pb-2">
                                    <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center mr-4 text-sm font-bold">
                                        {index + 1}
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-10">
                            <a href="#contact" className="text-black font-bold uppercase tracking-wider border-b-2 border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-all">
                                Consult with an Engineer
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Support;
