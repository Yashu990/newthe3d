
import React from 'react';
import { motion } from 'framer-motion';

const Industries = () => {
    // USER'S SPECIFIC CONTENT with REAL images from /public/photo
    const industries = [
        {
            id: 2,
            title: "3D Printing in Manufacturing & Industrial Production",
            subtitle: "Rapid prototyping for faster product development",
            keyContributions: [
                "Rapid prototyping for faster product development",
                "Low-volume and bridge manufacturing",
                "Tool-less production reduces cost and lead time",
                "On-demand spare parts manufacturing"
            ],
            applications: [
                "Jigs, fixtures, gauges, and tooling",
                "Functional end-use parts",
                "Enclosures, housings, brackets",
                "Replacement parts for legacy machines"
            ],
            benefits: [
                "60–80% reduction in lead time",
                "Significant cost savings for small batches",
                "Faster design iterations",
                "Reduced inventory and warehousing"
            ],
            images: ["/photo/2024-08-04.webp", "/photo/2025-01-08.webp"]
        },
        {
            id: 3,
            title: "3D Printing in Healthcare & Medical Sector",
            subtitle: "Patient-specific customization",
            keyContributions: [
                "Patient-specific customization",
                "Faster production of medical devices",
                "Improved surgical accuracy"
            ],
            applications: [
                "Prosthetics and orthotics",
                "Surgical guides and implants",
                "Dental crowns, aligners, and models",
                "Anatomical models for surgery planning"
            ],
            benefits: [
                "Customized treatment for each patient",
                "Reduced surgery time and risk",
                "Lower cost compared to traditional medical manufacturing",
                "Faster recovery outcomes"
            ],
            images: ["/photo/sla-skulls.jpg", "/photo/2025-12-19.webp"]
        },
        {
            id: 4,
            title: "3D Printing in Aerospace & Defense",
            subtitle: "Lightweight and high-strength parts",
            keyContributions: [
                "Lightweight and high-strength parts",
                "Complex geometries impossible with traditional methods",
                "On-demand manufacturing in remote locations"
            ],
            applications: [
                "Aircraft interior components",
                "Structural brackets and ducts",
                "Defense equipment parts",
                "UAV and drone components"
            ],
            benefits: [
                "Weight reduction improves fuel efficiency",
                "Faster prototyping and testing",
                "Reduced dependency on long supply chains",
                "High-performance part optimization"
            ],
            images: ["/photo/gallery-drone.webp", "/photo/2026-01-02.webp"]
        },
        {
            id: 5,
            title: "3D Printing in Automotive Industry",
            subtitle: "Faster vehicle development cycles",
            keyContributions: [
                "Faster vehicle development cycles",
                "Cost-effective tooling",
                "Custom and performance parts"
            ],
            applications: [
                "Prototypes and concept models",
                "Assembly line tools and fixtures",
                "Interior trims and functional parts",
                "Motorsport and performance components"
            ],
            benefits: [
                "Reduced R&D cost",
                "Faster time-to-market",
                "Lightweight part production",
                "Customization for limited editions"
            ],
            images: ["/photo/auto-box.jpg", "/photo/2026-01-17.webp"]
        },
        {
            id: 6,
            title: "3D Printing in Construction & Architecture",
            subtitle: "Faster building construction",
            keyContributions: [
                "Faster building construction",
                "Reduced material waste",
                "Affordable housing solutions"
            ],
            applications: [
                "3D printed houses and walls",
                "Architectural scale models",
                "Decorative and structural elements",
                "Customized building components"
            ],
            benefits: [
                "Lower construction cost",
                "Reduced labor dependency",
                "Sustainable material usage",
                "Rapid project execution"
            ],
            images: ["/photo/arch-model.jpg", "/photo/2025-11-20.webp"]
        },
        {
            id: 7,
            title: "3D Printing in Education & Research",
            subtitle: "Hands-on learning",
            keyContributions: [
                "Hands-on learning",
                "Innovation-driven education",
                "Faster research prototyping"
            ],
            applications: [
                "Engineering and design projects",
                "Science models and experiments",
                "Research prototypes",
                "Skill development labs"
            ],
            benefits: [
                "Encourages creativity and problem-solving",
                "Bridges theory and practical learning",
                "Prepares students for Industry 4.0",
                "Low-cost experimentation"
            ],
            images: ["/photo/edu-research.jpg", "/photo/2025-12-04.webp"]
        },
        {
            id: 8,
            title: "3D Printing in Consumer Products & Retail",
            subtitle: "Mass customization",
            keyContributions: [
                "Mass customization",
                "Faster product launches",
                "Reduced inventory risks"
            ],
            applications: [
                "Personalized gifts and décor",
                "Wearables and accessories",
                "Customized gadgets",
                "Packaging prototypes"
            ],
            benefits: [
                "Unique customer experiences",
                "On-demand manufacturing",
                "Lower production risk",
                "Quick design changes"
            ],
            images: ["/photo/gallery-angel.webp", "/photo/gallery-deer.webp"]
        },
        {
            id: 9,
            title: "3D Printing in Tooling, Molds & Casting",
            subtitle: "Rapid tooling solutions",
            keyContributions: [
                "Rapid tooling solutions",
                "Master patterns for casting",
                "Low-cost mold production"
            ],
            applications: [
                "Vacuum casting masters",
                "Injection mold inserts",
                "Silicone mold patterns",
                "Sand casting patterns"
            ],
            benefits: [
                "Faster tooling development",
                "Lower upfront investment",
                "Ideal for pilot and low-volume runs",
                "Faster market validation"
            ],
            images: ["/photo/tooling-molds.jpg", "/photo/2025-12-08.webp"]
        }
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 max-w-[1400px]">

                {/* Section 1: Introduction */}
                <div className="text-center mb-20 max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-[#111]">
                        Impact of 3D Printing Across All Major Sectors
                    </h2>
                    <div className="text-left md:text-center space-y-4 text-lg text-gray-600 leading-relaxed">
                        <p>
                            3D printing, also known as Additive Manufacturing, is a production technology that creates objects
                            layer by layer from digital designs. Unlike traditional subtractive or molding-based manufacturing,
                            3D printing enables tool-less, flexible, and highly customized production.
                        </p>
                        <p>
                            Over the past decade, 3D printing has evolved from a rapid prototyping tool into a core manufacturing
                            solution across industries such as manufacturing, healthcare, aerospace, automotive, construction,
                            education, consumer products, and defense.
                        </p>
                    </div>
                </div>

                {/* Grid of Industries - Protolabs Style with REAL USER IMAGES */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    {industries.map((industry, index) => (
                        <motion.div
                            key={industry.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 h-full group border border-gray-100"
                        >
                            {/* Image - Using USER'S REAL PHOTOS */}
                            <div className="h-48 w-full bg-gray-100 overflow-hidden">
                                <img
                                    src={industry.images[0]}
                                    alt={industry.title}
                                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-lg font-bold text-[#111] mb-2 leading-tight">
                                    {industry.title}
                                </h3>
                                <p className="text-sm text-gray-600 font-semibold mb-4 pb-4 border-b border-gray-100">
                                    {industry.subtitle}
                                </p>

                                {/* Key Contributions */}
                                <div className="mb-4">
                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Key Contributions</h4>
                                    <ul className="space-y-1">
                                        {industry.keyContributions.slice(0, 2).map((item, idx) => (
                                            <li key={idx} className="text-xs text-gray-600 flex items-start">
                                                <span className="mr-1.5 text-[#FF6B35] mt-0.5">•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Applications */}
                                <div className="mb-4 flex-1">
                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Applications</h4>
                                    <ul className="space-y-1">
                                        {industry.applications.slice(0, 3).map((item, idx) => (
                                            <li key={idx} className="text-xs text-gray-600 flex items-start">
                                                <span className="mr-1.5 text-[#FF6B35] mt-0.5">•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Benefits - Highlighted */}
                                <div className="mt-auto pt-4 border-t border-gray-100">
                                    <p className="text-xs font-bold text-[#FF6B35]">
                                        ✓ {industry.benefits[0]}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Section 10: Sustainability */}
                <div className="bg-green-50 border-l-4 border-green-600 p-10 rounded-r-xl mb-16 max-w-5xl mx-auto">
                    <h3 className="text-2xl font-bold text-[#111] mb-6">10. Sustainability & Supply Chain Impact</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-bold text-gray-800 mb-3 text-lg">Key Contributions</h4>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start"><span className="mr-2">•</span> Localized production</li>
                                <li className="flex items-start"><span className="mr-2">•</span> Reduced transportation emissions</li>
                                <li className="flex items-start"><span className="mr-2">•</span> Minimal material waste</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-800 mb-3 text-lg">Benefits</h4>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start"><span className="mr-2">•</span> Environmentally friendly manufacturing</li>
                                <li className="flex items-start"><span className="mr-2">•</span> Reduced carbon footprint</li>
                                <li className="flex items-start"><span className="mr-2">•</span> Lean supply chain</li>
                                <li className="flex items-start"><span className="mr-2">•</span> Digital inventory replaces physical stock</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Section 11: Conclusion */}
                <div className="bg-gradient-to-br from-[#FF6B35] to-[#E55A28] text-white p-10 rounded-2xl shadow-2xl max-w-5xl mx-auto">
                    <h3 className="text-2xl font-bold mb-6">11. Conclusion</h3>
                    <p className="text-lg leading-relaxed mb-4 text-orange-100">
                        3D printing is no longer just a prototyping tool—it is a strategic manufacturing technology reshaping
                        industries worldwide. From healthcare and aerospace to education and construction, additive manufacturing
                        enables speed, customization, cost-efficiency, and innovation.
                    </p>
                    <p className="text-lg leading-relaxed text-orange-100">
                        As materials, machines, and software continue to advance, 3D printing will play a central role in the
                        future of smart manufacturing, Industry 4.0, and localized production ecosystems.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Industries;
