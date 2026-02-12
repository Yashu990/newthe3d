
import React from 'react';
import { motion } from 'framer-motion';

const Process = () => {
    const steps = [
        { title: "Upload CAD file", desc: "Securely upload your part design to our online quote builder", active: true },
        { title: "Confirm specs", desc: "Configure your part specifications and select a lead time that suits your schedule", active: false },
        { title: "Receive instant quote", desc: "Upload your CAD to our online quoting platform", active: false },
        { title: "Manufacturing", desc: "We select the best manufacturer for your order, and production begins immediately", active: false },
        { title: "Quality control", desc: "We take full responsibility for making sure your parts are manufactured according to our standards", active: false },
        { title: "Delivery", desc: "", active: false }
    ];

    return (
        <section className="py-16 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 max-w-[1400px]">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-[#111] text-center md:text-left">
                    Our ordering process
                </h2>

                <div className="relative">
                    {/* Progress Bar Background */}
                    <div className="hidden md:block absolute top-[11px] left-0 w-full h-[2px] bg-gray-200 z-0"></div>

                    {/* Steps Container */}
                    <div className="flex flex-col md:flex-row justify-between items-start relative z-10 gap-8 md:gap-4">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-row md:flex-col items-start md:items-center w-full md:w-1/6 gap-4 md:gap-0">
                                {/* Circle with Ring */}
                                <div className="flex-shrink-0 relative flex items-center justify-center w-6 h-6 bg-white rounded-full border-[3px] border-[#0066CC] mb-4 z-10">
                                    {/* Inner white dot is default, handled by bg-white. If active, maybe filled? Screenshot shows all open circles. */}
                                </div>

                                {/* Text Content */}
                                <div className="text-left md:text-center">
                                    <h3 className="text-sm font-bold text-[#111] mb-2 leading-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-xs text-gray-500 leading-snug">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
