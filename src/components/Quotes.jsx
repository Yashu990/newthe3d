
import React from 'react';
import { motion } from 'framer-motion';

const Quotes = () => {
    return (
        <section className="bg-gray-50 py-24 mb-16">
            <div className="container mx-auto px-4 max-w-[1400px]">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* Left Content */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#111] mb-6 tracking-tight">
                            Instant, online quotes
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            Instead of traditional, rules-based quoting, we use machine learning algorithms to compare your CAD to millions of previously manufactured parts and generate a quote instantly.
                        </p>

                        <ul className="space-y-4 mb-8">
                            {[
                                "Upload a CAD to start (STEP, STP, IGES, IGS, SLDPRT, 3DM, SAT or X_T)",
                                "Price updates in real-time as you change materials, lead times, and other order specifications",
                                "We handle customs clearance and cover import duties on orders shipped to the EU, UK, and US"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start text-base text-gray-700">
                                    <svg className="w-5 h-5 text-[#0066CC] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    {item}
                                </li>
                            ))}
                        </ul>


                    </div>

                    {/* Right Image (Mockup of Quoting UI) */}
                    <div className="w-full lg:w-1/2 shadow-2xl rounded-lg overflow-hidden border border-gray-200 bg-white">
                        {/* Simple CSS-only Mockup of the UI shown in screenshot */}
                        <div className="flex bg-white h-[400px]">
                            {/* Sidebar */}
                            <div className="w-1/3 border-r border-gray-100 p-6 space-y-4">
                                <div className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-4">Select Technology</div>
                                <div className="p-3 border rounded-md border-blue-500 bg-blue-50 text-blue-700 text-sm font-bold flex items-center gap-2">
                                    <div className="w-4 h-4 bg-blue-500 rounded-sm"></div> CNC machining
                                </div>
                                <div className="p-3 border rounded-md border-gray-200 text-gray-600 text-sm font-medium flex items-center gap-2">
                                    <div className="w-4 h-4 bg-gray-300 rounded-sm"></div> 3D printing
                                </div>
                                <div className="p-3 border rounded-md border-gray-200 text-gray-600 text-sm font-medium flex items-center gap-2">
                                    <div className="w-4 h-4 bg-gray-300 rounded-sm"></div> Sheet metal
                                </div>
                            </div>
                            {/* Main Area */}
                            <div className="w-2/3 p-10 flex flex-col items-center justify-center bg-gray-50/50">
                                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white mb-6 shadow-lg">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                                </div>
                                <p className="font-bold text-gray-800 text-lg mb-2">Drag and drop or select files</p>
                                <p className="text-xs text-gray-400 text-center max-w-xs">File types: STL, OBJ, STEP, IGES, SLDPRT, 3DM, IPT, SAT used for instant quoting.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Quotes;
