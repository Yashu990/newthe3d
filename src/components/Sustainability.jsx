import React from 'react';

const Sustainability = () => {
    return (
        <section id="sustainability" className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-start gap-16">
                    <div className="w-full lg:w-1/3">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">SUSTAINABLE MANUFACTURING</h2>
                        <div className="h-1 w-20 bg-black mb-6"></div>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            We are committed to reducing the environmental impact of manufacturing through localized production, minimal waste, and energy-efficient additive processes.
                        </p>
                    </div>

                    <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-6 bg-gray-50 border border-gray-100 rounded-lg">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Localized Production</h3>
                            <p className="text-gray-600 text-sm">Reduced transportation emissions by manufacturing closer to the point of need.</p>
                        </div>

                        <div className="p-6 bg-gray-50 border border-gray-100 rounded-lg">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Minimal Material Waste</h3>
                            <p className="text-gray-600 text-sm">Additive processes use only the material needed, significantly reducing waste compared to subtractive methods.</p>
                        </div>

                        <div className="p-6 bg-gray-50 border border-gray-100 rounded-lg">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Lean Supply Chain</h3>
                            <p className="text-gray-600 text-sm">Digital inventory replaces physical stock, minimizing warehousing and obsolescence.</p>
                        </div>

                        <div className="p-6 bg-gray-50 border border-gray-100 rounded-lg">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Eco-Responsible</h3>
                            <p className="text-gray-600 text-sm">Lower carbon footprint and optimized material usage for a greener future.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sustainability;
