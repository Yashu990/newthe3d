
import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
    // Matching the "Protolabs Network" Manufacturing Capabilities Screenshot
    // Focus: Technologies (CNC, 3DP, Sheet Metal, Injection Molding)

    const capabilities = [
        {
            title: "CNC machining",
            description: "Milling, turning and post-processing",
            bullets: [
                "Tolerances down to ±.020 mm (±.001 in)",
                "Lead times from 5 business days"
            ],
            image: "https://images.unsplash.com/photo-1616738942207-6bb30ed97c6d?auto=format&fit=crop&q=80&w=600", // Metal/CNC part
            linkText: "See our CNC machining services"
        },
        {
            title: "3D printing",
            description: "FDM, SLA, SLS, MJF",
            bullets: [
                "± 0.3% with a lower limit of ± 0.3 mm (± 0.012 in)",
                "Lead times from 1 business day"
            ],
            image: "https://images.unsplash.com/photo-1574357278278-f7b57ad23f5b?auto=format&fit=crop&q=80&w=600", // 3D Printed part
            linkText: "See our 3D printing services"
        },
        {
            title: "Sheet metal fabrication",
            description: "Laser cutting, bending, post-processing",
            bullets: [
                "Tolerances down to ±0.1 mm (±.004 in)",
                "Lead times from 5 business days"
            ],
            image: "https://images.unsplash.com/photo-1565043589221-1a51f3f28054?auto=format&fit=crop&q=80&w=600", // Sheet metal looking
            linkText: "See our sheet metal fabrication services"
        },
        {
            title: "Injection molding",
            description: "Prototypes and production tooling",
            bullets: [
                "Wide range of part complexities and sizes",
                "1 to 1M parts"
            ],
            image: "https://images.unsplash.com/photo-1622329388330-2216d7d59837?auto=format&fit=crop&q=80&w=600", // Injection mold looking
            linkText: "See our injection molding capabilities"
        }
    ];

    return (
        <section className="py-24 bg-white text-[#111]">
            <div className="container mx-auto px-4 max-w-[1400px]">
                {/* Header */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-[#111]">
                        Our manufacturing capabilities
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        With hundreds of manufacturers in our network, 3D Printing Co. offers a very broad range of
                        manufacturing capabilities and support both one-off prototyping and low-volume production.
                        We pride ourselves on being the go-to manufacturer for geometrically complex parts or highly cosmetic parts.
                    </p>
                </div>

                {/* Grid: 4 Columns lg */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {capabilities.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="bg-transparent flex flex-col h-full group"
                        >
                            {/* Image Top - Rounded Corners as per screenshot */}
                            <div className="h-48 w-full bg-gray-50 rounded-xl overflow-hidden mb-6 relative">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col flex-1 px-1">
                                <h3 className="text-xl font-bold text-[#111] mb-2 leading-tight">
                                    {item.title}
                                </h3>

                                <p className="text-base font-semibold text-gray-800 mb-4">
                                    {item.description}
                                </p>

                                <ul className="space-y-1 mb-8 flex-1">
                                    {item.bullets.map((bullet, idx) => (
                                        <li key={idx} className="flex items-start text-xs text-gray-500 font-medium">
                                            <span className="mr-2 text-gray-400">•</span>
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>

                                {/* Blue Link at bottom */}
                                <a href="#" className="text-[#0066CC] font-bold text-sm inline-flex items-center hover:underline mt-auto">
                                    {item.linkText}
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
