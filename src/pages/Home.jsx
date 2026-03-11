
import React from 'react';
import Hero from '../components/Hero';
import Industries from '../components/Industries';

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <Hero />

            {/* Professional 3D Printing Solutions */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional 3D Printing Solutions</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            From rapid prototyping to end-use production, we deliver precision additive manufacturing solutions tailored to your industry needs.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-2xl hover:border-[#FF6B35] hover:scale-105 transition-all duration-300 group cursor-pointer">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🚀</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#FF6B35] transition-colors">Fast Turnaround</h3>
                            <p className="text-gray-600">Get your prototypes and production parts in days, not weeks. Our streamlined process ensures rapid delivery without compromising quality.</p>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-2xl hover:border-[#FF6B35] hover:scale-105 transition-all duration-300 group cursor-pointer">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">⚙️</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#FF6B35] transition-colors">Advanced Technology</h3>
                            <p className="text-gray-600">State-of-the-art FDM, SLA, and SLS printing technologies with multiple material options for every application.</p>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-2xl hover:border-[#FF6B35] hover:scale-105 transition-all duration-300 group cursor-pointer">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">💎</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#FF6B35] transition-colors">Premium Quality</h3>
                            <p className="text-gray-600">Rigorous quality control at every stage ensures your parts meet exact specifications and industry standards.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industry-Leading Standards */}
            <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Industry-Leading Standards</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We maintain the highest quality standards and certifications to serve demanding industries.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
                            <div className="text-3xl mb-3 group-hover:scale-125 transition-transform duration-300">✓</div>
                            <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#FF6B35] transition-colors">ISO Compliant</h3>
                            <p className="text-sm text-gray-600">Quality management systems</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
                            <div className="text-3xl mb-3 group-hover:scale-125 transition-transform duration-300">🔬</div>
                            <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#FF6B35] transition-colors">Material Testing</h3>
                            <p className="text-sm text-gray-600">Certified material properties</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
                            <div className="text-3xl mb-3 group-hover:scale-125 transition-transform duration-300">📐</div>
                            <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#FF6B35] transition-colors">Precision ±0.1mm</h3>
                            <p className="text-sm text-gray-600">Dimensional accuracy</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
                            <div className="text-3xl mb-3 group-hover:scale-125 transition-transform duration-300">🛡️</div>
                            <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#FF6B35] transition-colors">Quality Certified</h3>
                            <p className="text-sm text-gray-600">ISO 9001:2015</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recent Projects */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Projects</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            A showcase of our latest 3D printing work across various industries and applications.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { img: "/photo/2026-01-02.webp", title: "Complex Assembly", category: "Industrial" },
                            { img: "/photo/gallery-drone.webp", title: "Aerospace Component", category: "Aerospace" },
                            { img: "/photo/2025-06-04.webp", title: "Medical Device", category: "Healthcare" },
                            { img: "/photo/gallery-angel.webp", title: "Consumer Product", category: "Retail" },
                            { img: "/photo/2024-08-04.webp", title: "Manufacturing Tool", category: "Industrial" },
                            { img: "/photo/2025-11-17.webp", title: "Automotive Part", category: "Automotive" }
                        ].map((project, idx) => (
                            <div key={idx} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                                <div className="aspect-square overflow-hidden">
                                    <img
                                        src={project.img}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <div>
                                        <h3 className="text-white font-bold text-lg mb-1">{project.title}</h3>
                                        <p className="text-gray-300 text-sm">{project.category}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <a href="/gallery" className="inline-block bg-[#FF6B35] hover:bg-[#E55A28] text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-110">
                            View All Projects
                        </a>
                    </div>
                </div>
            </section>

            {/* Serving Multiple Sectors */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Serving Multiple Sectors</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our 3D printing expertise spans across diverse industries, delivering customized solutions for each sector.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { icon: "🏭", name: "Manufacturing" },
                            { icon: "🏥", name: "Healthcare" },
                            { icon: "✈️", name: "Aerospace" },
                            { icon: "🚗", name: "Automotive" },
                            { icon: "🏗️", name: "Construction" },
                            { icon: "🎓", name: "Education" },
                            { icon: "🛍️", name: "Consumer Products" },
                            { icon: "🔧", name: "Tooling & Molds" }
                        ].map((sector, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#FF6B35] hover:shadow-xl hover:scale-105 transition-all duration-300 text-center group cursor-pointer">
                                <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">{sector.icon}</div>
                                <h3 className="font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors">{sector.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries Impact Section */}
            <Industries />

            {/* Trusted by Industry Leaders */}
            <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            We partner with leading companies across industries to deliver precision 3D printing solutions.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="text-center">
                            <div className="text-5xl font-bold text-[#FF6B35] mb-2">500+</div>
                            <div className="text-gray-400">Projects Completed</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-[#FF6B35] mb-2">50+</div>
                            <div className="text-gray-400">Enterprise Clients</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-[#FF6B35] mb-2">99%</div>
                            <div className="text-gray-400">Client Satisfaction</div>
                        </div>
                    </div>

                    <div className="border-t border-gray-700 pt-12">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
                            {/* Client logos would go here - using placeholder text */}
                            {["Enterprise Partner", "Tech Company", "Manufacturing Corp", "Medical Systems"].map((client, idx) => (
                                <div key={idx} className="flex items-center justify-center h-16 bg-white/10 rounded-lg hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer">
                                    <span className="text-sm font-semibold text-gray-400">{client}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-center mt-16">
                        <a href="/contact" className="inline-block bg-[#FF6B35] hover:bg-[#E55A28] text-white font-bold px-10 py-5 rounded-lg text-lg transition-all duration-300 shadow-2xl hover:shadow-[0_20px_60px_rgba(255,107,53,0.5)] hover:scale-110">
                            Get Started Today
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
