
import React from 'react';

const Services = () => {
    const services = [
        {
            title: "FDM (Fused Deposition Modeling)",
            description: "Most affordable and widely used 3D printing technology for prototyping and functional parts.",
            features: [
                "Large build volumes",
                "Multiple material options (PLA, ABS, PETG, Nylon)",
                "Fast production times",
                "Ideal for prototypes and tooling"
            ],
            image: "/photo/auto-box.jpg"
        },
        {
            title: "SLA (Stereolithography)",
            description: "High-precision resin-based printing for detailed parts with smooth surface finishes.",
            features: [
                "Exceptional detail and accuracy",
                "Smooth surface finish",
                "Medical-grade materials available",
                "Perfect for jewelry, dental, and medical"
            ],
            image: "/photo/2025-01-08.webp"
        },
        {
            title: "SLS (Selective Laser Sintering)",
            description: "Industrial-grade powder-based printing for strong, functional end-use parts.",
            features: [
                "No support structures needed",
                "Strong, durable parts",
                "Complex geometries possible",
                "Nylon and other engineering materials"
            ],
            image: "/photo/2024-08-04.webp"
        },
        {
            title: "Multi-Material Printing",
            description: "Advanced printing with multiple materials in a single build for complex assemblies.",
            features: [
                "Multiple colors and materials",
                "Overmolding capabilities",
                "Flexible and rigid combinations",
                "Realistic prototypes"
            ],
            image: "/photo/2026-01-02.webp"
        }
    ];

    return (
        <div className="bg-white">
            {/* Page Header */}
            <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/photo/vibrant-printers.webp"
                        alt="3D Printing Services"
                        className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-800/70"></div>
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">Our 3D Printing Services</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        We offer a comprehensive range of additive manufacturing technologies to meet your specific needs,
                        from rapid prototyping to end-use production.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
                                <div className="h-64 overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                                    <h4 className="font-bold text-sm text-gray-400 uppercase tracking-wider mb-3">Key Features:</h4>
                                    <ul className="space-y-2">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start text-gray-700">
                                                <svg className="w-5 h-5 text-[#FF6B35] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Materials Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl font-bold text-center mb-12">Available Materials</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { name: "PLA", desc: "Biodegradable, easy to print", color: "bg-green-100" },
                            { name: "ABS", desc: "Strong, heat resistant", color: "bg-blue-100" },
                            { name: "PETG", desc: "Durable, chemical resistant", color: "bg-purple-100" },
                            { name: "Nylon", desc: "Flexible, impact resistant", color: "bg-yellow-100" },
                            { name: "TPU", desc: "Rubber-like flexibility", color: "bg-pink-100" },
                            { name: "Resin", desc: "High detail, smooth finish", color: "bg-orange-100" }
                        ].map((material, idx) => (
                            <div key={idx} className={`${material.color} p-6 rounded-lg border border-gray-200`}>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{material.name}</h3>
                                <p className="text-gray-700 text-sm">{material.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industry Impact Overview */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Impact of 3D Printing Across All Major Sectors</h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            3D printing, also known as <strong>Additive Manufacturing</strong>, is a production technology that creates objects layer by layer from digital designs.
                            Unlike traditional subtractive or molding-based manufacturing, 3D printing enables tool-less, flexible, and highly customized production.
                            Over the past decade, 3D printing has evolved from a rapid prototyping tool into a core manufacturing solution across industries.
                        </p>
                    </div>
                </div>
            </section>

            {/* Manufacturing & Industrial Production */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-block bg-[#FF6B35] text-white text-sm font-bold px-4 py-2 rounded-full mb-4">Manufacturing</div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Manufacturing & Industrial Production</h2>

                            <div className="mb-6">
                                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                    <span className="text-[#FF6B35]">●</span> Key Contributions
                                </h3>
                                <ul className="space-y-2 text-gray-700 ml-4">
                                    <li>✓ Rapid prototyping for faster product development</li>
                                    <li>✓ Low-volume and bridge manufacturing</li>
                                    <li>✓ Tool-less production reduces cost and lead time</li>
                                    <li>✓ On-demand spare parts manufacturing</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                    <span className="text-[#FF6B35]">●</span> Applications
                                </h3>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">Jigs & Fixtures</div>
                                    <div className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">Functional Parts</div>
                                    <div className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">Enclosures</div>
                                    <div className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">Replacement Parts</div>
                                </div>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                                <h3 className="font-bold text-green-900 mb-2">Benefits</h3>
                                <ul className="text-green-800 text-sm space-y-1">
                                    <li>• 60–80% reduction in lead time</li>
                                    <li>• Significant cost savings for small batches</li>
                                    <li>• Reduced inventory and warehousing</li>
                                </ul>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
                            <img src="/photo/2026-01-02.webp" alt="Manufacturing" className="w-full h-80 object-cover rounded-xl mb-4" />
                            <p className="text-gray-600 text-center">Industrial 3D printing for manufacturing excellence</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Healthcare & Medical */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 bg-white p-8 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
                            <img src="/photo/2025-06-04.webp" alt="Healthcare" className="w-full h-80 object-cover rounded-xl mb-4" />
                            <p className="text-gray-600 text-center">Precision medical devices and prosthetics</p>
                        </div>
                        <div className="order-1 md:order-2">
                            <div className="inline-block bg-red-500 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">Healthcare</div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Healthcare & Medical Sector</h2>

                            <div className="mb-6">
                                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                    <span className="text-red-500">●</span> Key Contributions
                                </h3>
                                <ul className="space-y-2 text-gray-700 ml-4">
                                    <li>✓ Patient-specific customization</li>
                                    <li>✓ Faster production of medical devices</li>
                                    <li>✓ Improved surgical accuracy</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                    <span className="text-red-500">●</span> Applications
                                </h3>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-red-50 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">Prosthetics</div>
                                    <div className="bg-red-50 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">Surgical Guides</div>
                                    <div className="bg-red-50 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">Dental Models</div>
                                    <div className="bg-red-50 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">Implants</div>
                                </div>
                            </div>

                            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                                <h3 className="font-bold text-red-900 mb-2">Benefits</h3>
                                <ul className="text-red-800 text-sm space-y-1">
                                    <li>• Customized treatment for each patient</li>
                                    <li>• Reduced surgery time and risk</li>
                                    <li>• Lower cost vs traditional manufacturing</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Aerospace & Defense */}
            <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-block bg-blue-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">Aerospace</div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Aerospace & Defense</h2>

                            <div className="mb-6">
                                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                    <span className="text-blue-600">●</span> Key Contributions
                                </h3>
                                <ul className="space-y-2 text-gray-700 ml-4">
                                    <li>✓ Lightweight and high-strength parts</li>
                                    <li>✓ Complex geometries impossible with traditional methods</li>
                                    <li>✓ On-demand manufacturing in remote locations</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                    <span className="text-blue-600">●</span> Applications
                                </h3>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">Aircraft Components</div>
                                    <div className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">Structural Brackets</div>
                                    <div className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">Defense Parts</div>
                                    <div className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">UAV Components</div>
                                </div>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                                <h3 className="font-bold text-blue-900 mb-2">Benefits</h3>
                                <ul className="text-blue-800 text-sm space-y-1">
                                    <li>• Weight reduction improves fuel efficiency</li>
                                    <li>• Faster prototyping and testing</li>
                                    <li>• High-performance part optimization</li>
                                </ul>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
                            <img src="/photo/gallery-drone.webp" alt="Aerospace" className="w-full h-80 object-cover rounded-xl mb-4" />
                            <p className="text-gray-600 text-center">Advanced aerospace components</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Automotive Industry */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 bg-white p-8 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
                            <img src="/photo/2025-11-17.webp" alt="Automotive" className="w-full h-80 object-cover rounded-xl mb-4" />
                            <p className="text-gray-600 text-center">Automotive prototypes and custom parts</p>
                        </div>
                        <div className="order-1 md:order-2">
                            <div className="inline-block bg-orange-500 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">Automotive</div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Automotive Industry</h2>

                            <div className="mb-6">
                                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                    <span className="text-orange-500">●</span> Key Contributions
                                </h3>
                                <ul className="space-y-2 text-gray-700 ml-4">
                                    <li>✓ Faster vehicle development cycles</li>
                                    <li>✓ Cost-effective tooling</li>
                                    <li>✓ Custom and performance parts</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                    <span className="text-orange-500">●</span> Applications
                                </h3>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-orange-50 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">Prototypes</div>
                                    <div className="bg-orange-50 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">Tooling</div>
                                    <div className="bg-orange-50 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">Interior Trims</div>
                                    <div className="bg-orange-50 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">Performance Parts</div>
                                </div>
                            </div>

                            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
                                <h3 className="font-bold text-orange-900 mb-2">Benefits</h3>
                                <ul className="text-orange-800 text-sm space-y-1">
                                    <li>• Reduced R&D cost</li>
                                    <li>• Faster time-to-market</li>
                                    <li>• Customization for limited editions</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Industries Grid */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">More Industry Applications</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Construction */}
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
                            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🏗️</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#FF6B35] transition-colors">Construction & Architecture</h3>
                            <p className="text-gray-600 mb-4">3D printed houses, architectural models, and custom building components.</p>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li>✓ Lower construction cost</li>
                                <li>✓ Reduced labor dependency</li>
                                <li>✓ Sustainable material usage</li>
                            </ul>
                        </div>

                        {/* Education */}
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
                            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🎓</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#FF6B35] transition-colors">Education & Research</h3>
                            <p className="text-gray-600 mb-4">Hands-on learning, innovation projects, and research prototyping.</p>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li>✓ Encourages creativity</li>
                                <li>✓ Bridges theory and practice</li>
                                <li>✓ Prepares for Industry 4.0</li>
                            </ul>
                        </div>

                        {/* Consumer Products */}
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
                            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🛍️</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#FF6B35] transition-colors">Consumer Products & Retail</h3>
                            <p className="text-gray-600 mb-4">Mass customization, personalized gifts, and custom gadgets.</p>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li>✓ Unique customer experiences</li>
                                <li>✓ On-demand manufacturing</li>
                                <li>✓ Quick design changes</li>
                            </ul>
                        </div>

                        {/* Tooling & Molds */}
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
                            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🔧</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#FF6B35] transition-colors">Tooling, Molds & Casting</h3>
                            <p className="text-gray-600 mb-4">Rapid tooling, master patterns, and low-cost mold production.</p>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li>✓ Faster tooling development</li>
                                <li>✓ Lower upfront investment</li>
                                <li>✓ Ideal for pilot runs</li>
                            </ul>
                        </div>

                        {/* Sustainability */}
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
                            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🌱</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#FF6B35] transition-colors">Sustainability & Supply Chain</h3>
                            <p className="text-gray-600 mb-4">Localized production, reduced emissions, minimal waste.</p>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li>✓ Reduced carbon footprint</li>
                                <li>✓ Lean supply chain</li>
                                <li>✓ Digital inventory</li>
                            </ul>
                        </div>

                        {/* Innovation */}
                        <div className="bg-gradient-to-br from-[#FF6B35] to-[#E55A28] p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 text-white group">
                            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🚀</div>
                            <h3 className="text-2xl font-bold mb-3">Future of Manufacturing</h3>
                            <p className="mb-4 text-orange-100">3D printing is reshaping industries worldwide with speed, customization, and innovation.</p>
                            <p className="text-sm text-orange-100">Central role in Industry 4.0 and smart manufacturing.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Conclusion Section */}
            <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-4xl font-bold mb-6">The Future is Additive</h2>
                    <p className="text-xl text-gray-300 leading-relaxed mb-8">
                        3D printing is no longer just a prototyping tool—it is a <strong>strategic manufacturing technology</strong> reshaping industries worldwide.
                        From healthcare and aerospace to education and construction, additive manufacturing enables <strong>speed, customization, cost-efficiency, and innovation</strong>.
                    </p>
                    <p className="text-lg text-gray-400 mb-8">
                        As materials, machines, and software continue to advance, 3D printing will play a central role in the future of
                        smart manufacturing, Industry 4.0, and localized production ecosystems.
                    </p>
                    <div className="flex justify-center gap-4">
                        <a href="/contact" className="bg-[#FF6B35] hover:bg-[#E55A28] text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-xl hover:scale-110">
                            Start Your Project
                        </a>
                        <a href="/gallery" className="bg-white text-gray-900 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-xl hover:scale-110">
                            View Projects
                        </a>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-[#FF6B35] text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
                    <p className="text-lg mb-8 text-orange-100">Get a free consultation and quote for your 3D printing needs</p>
                    <a
                        href="/contact"
                        className="inline-block bg-white text-[#FF6B35] font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
                    >
                        Request a Quote
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Services;
