
import React from 'react';

const Process = () => {
    const steps = [
        {
            number: "01",
            title: "Consultation & Design",
            description: "Share your requirements, CAD files, or sketches. Our team will help optimize your design for 3D printing.",
            icon: "💬",
            details: [
                "Free design consultation",
                "CAD file optimization",
                "Material recommendations",
                "Feasibility analysis"
            ]
        },
        {
            number: "02",
            title: "Quote & Timeline",
            description: "Receive a detailed quote with material options, lead times, and cost breakdown within 24 hours.",
            icon: "💰",
            details: [
                "Transparent pricing",
                "Multiple material options",
                "Realistic timelines",
                "No hidden costs"
            ]
        },
        {
            number: "03",
            title: "Production",
            description: "Your project goes into production using the selected technology and materials with quality checks.",
            icon: "⚙️",
            details: [
                "State-of-the-art equipment",
                "Quality control at each stage",
                "Real-time updates",
                "Experienced technicians"
            ]
        },
        {
            number: "04",
            title: "Post-Processing",
            description: "Parts undergo finishing processes like sanding, painting, or assembly as per your requirements.",
            icon: "✨",
            details: [
                "Sanding & smoothing",
                "Painting & coating",
                "Assembly services",
                "Custom finishing"
            ]
        },
        {
            number: "05",
            title: "Quality Control",
            description: "Rigorous inspection ensures every part meets your specifications and quality standards.",
            icon: "✓",
            details: [
                "Dimensional accuracy check",
                "Visual inspection",
                "Functional testing",
                "Documentation"
            ]
        },
        {
            number: "06",
            title: "Delivery",
            description: "Secure packaging and timely delivery to your location with tracking information.",
            icon: "📦",
            details: [
                "Protective packaging",
                "Fast shipping",
                "Tracking updates",
                "Installation support"
            ]
        }
    ];

    return (
        <div className="bg-white">
            {/* Page Header */}
            <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/photo/printing.png"
                        alt="Our Process"
                        className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-800/70"></div>
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">Our Process</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        From concept to delivery, we ensure quality and precision at every step of your 3D printing journey.
                    </p>
                </div>
            </section>

            {/* Process Steps */}
            <section className="py-20">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="space-y-16">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`flex flex-col md:flex-row gap-8 items-start ${index % 2 === 1 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Icon & Number */}
                                <div className="flex-shrink-0 text-center md:w-1/4">
                                    <div className="inline-block bg-gradient-to-br from-[#FF6B35] to-[#E55A28] text-white rounded-full w-24 h-24 flex items-center justify-center text-4xl mb-4 shadow-lg">
                                        {step.icon}
                                    </div>
                                    <div className="text-6xl font-bold text-gray-200">
                                        {step.number}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">{step.description}</p>
                                    <div className="grid md:grid-cols-2 gap-3">
                                        {step.details.map((detail, idx) => (
                                            <div key={idx} className="flex items-start">
                                                <svg className="w-5 h-5 text-[#FF6B35] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-gray-700">{detail}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Visual */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl font-bold mb-12">Typical Project Timeline</h2>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="flex-1">
                            <div className="text-4xl font-bold text-[#FF6B35] mb-2">24 hrs</div>
                            <div className="text-gray-600">Quote Delivery</div>
                        </div>
                        <div className="hidden md:block text-4xl text-gray-300">→</div>
                        <div className="flex-1">
                            <div className="text-4xl font-bold text-[#FF6B35] mb-2">3-5 days</div>
                            <div className="text-gray-600">Production</div>
                        </div>
                        <div className="hidden md:block text-4xl text-gray-300">→</div>
                        <div className="flex-1">
                            <div className="text-4xl font-bold text-[#FF6B35] mb-2">1-2 days</div>
                            <div className="text-gray-600">Post-Processing</div>
                        </div>
                        <div className="hidden md:block text-4xl text-gray-300">→</div>
                        <div className="flex-1">
                            <div className="text-4xl font-bold text-[#FF6B35] mb-2">2-3 days</div>
                            <div className="text-gray-600">Delivery</div>
                        </div>
                    </div>
                    <p className="text-gray-500 mt-8 text-sm">
                        *Timeline may vary based on project complexity and quantity
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-[#FF6B35] text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                    <p className="text-lg mb-8 text-orange-100">Let's bring your ideas to life with precision 3D printing</p>
                    <a
                        href="/contact"
                        className="inline-block bg-white text-[#FF6B35] font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
                    >
                        Start Your Project
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Process;
