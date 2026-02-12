import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">ABOUT 3D PRINTING COMPANY</h2>
                    <p className="text-xl text-gray-600 leading-relaxed mb-12">
                        We are a Noida-based additive manufacturing company specializing in high-precision 3D printing, prototyping, tooling, and small-batch production. With a strong focus on quality, innovation, and customer satisfaction, we support businesses across multiple industries.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                        <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-black">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                            <p className="text-gray-600">
                                To become a leading additive manufacturing partner enabling smart, localized, and sustainable production ecosystems.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-black">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start"><span className="mr-2 text-black font-bold">✓</span> Deliver precision-driven manufacturing solutions</li>
                                <li className="flex items-start"><span className="mr-2 text-black font-bold">✓</span> Reduce lead time and cost</li>
                                <li className="flex items-start"><span className="mr-2 text-black font-bold">✓</span> Enable innovation through advanced technologies</li>
                                <li className="flex items-start"><span className="mr-2 text-black font-bold">✓</span> Support Industry 4.0 transformation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
