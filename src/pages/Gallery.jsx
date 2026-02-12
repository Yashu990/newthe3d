
import React, { useState } from 'react';

const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'All Projects' },
        { id: 'industrial', name: 'Industrial' },
        { id: 'medical', name: 'Medical' },
        { id: 'consumer', name: 'Consumer Products' },
        { id: 'prototypes', name: 'Prototypes' }
    ];

    const projects = [
        // Industrial Projects
        { image: "/photo/2024-08-04.webp", title: "Industrial Bracket", category: "industrial" },
        { image: "/photo/2025-01-08.webp", title: "Mechanical Part", category: "industrial" },
        { image: "/photo/2026-01-02.webp", title: "Complex Assembly", category: "industrial" },
        { image: "/photo/2025-11-17.webp", title: "Automotive Part", category: "industrial" },
        { image: "/photo/2025-06-06.webp", title: "Tooling Insert", category: "industrial" },
        { image: "/photo/gallery-row.webp", title: "Batch Production", category: "industrial" },
        { image: "/photo/2026-01-17.webp", title: "Custom Fixture", category: "industrial" },
        { image: "/photo/2025-11-16.webp", title: "Component Set", category: "industrial" },
        { image: "/photo/vibrant-printers.webp", title: "Production Line", category: "industrial" },
        { image: "/photo/hero-main.webp", title: "Manufacturing Floor", category: "industrial" },
        { image: "/photo/2024-08-06.webp", title: "Industrial Component", category: "industrial" },

        // Medical & Healthcare
        { image: "/photo/2025-06-04.webp", title: "Medical Device", category: "medical" },
        { image: "/photo/2025-12-19.webp", title: "Medical Prototype", category: "medical" },
        { image: "/photo/2025-12-20.webp", title: "Medical Equipment", category: "medical" },
        { image: "/photo/2025-12-04.webp", title: "Research Device", category: "medical" },

        // Consumer Products & Decorative
        { image: "/photo/gallery-angel.webp", title: "Decorative Angel", category: "consumer" },
        { image: "/photo/gallery-deer.webp", title: "Decorative Deer", category: "consumer" },
        { image: "/photo/gallery-ghost.webp", title: "Decorative Ghost", category: "consumer" },
        { image: "/photo/unnamed.webp", title: "Custom Figurine", category: "consumer" },

        // Prototypes & Engineering
        { image: "/photo/gallery-drone.webp", title: "Drone Component", category: "prototypes" },
        { image: "/photo/2025-02-04.webp", title: "Architectural Model", category: "prototypes" },
        { image: "/photo/2024-12-30.webp", title: "Educational Model", category: "prototypes" },
        { image: "/photo/2025-11-20.webp", title: "Construction Model", category: "prototypes" },
        { image: "/photo/2025-02-05.webp", title: "Engineering Prototype", category: "prototypes" },
        { image: "/photo/2025-01-10.webp", title: "Functional Prototype", category: "prototypes" },
        { image: "/photo/2025-06-11.webp", title: "Large Scale Prototype", category: "prototypes" },
        { image: "/photo/2025-12-08.webp", title: "Advanced Prototype", category: "prototypes" },
        { image: "/photo/printing.png", title: "Production Process", category: "prototypes" },
        { image: "/photo/filament.png", title: "Material Research", category: "prototypes" },
        { image: "/photo/repair.png", title: "Repair Solution", category: "prototypes" },
        { image: "/photo/gallery-1.png", title: "Multi-Part Assembly", category: "prototypes" },
        { image: "/photo/gallery-2.png", title: "Complex Structure", category: "prototypes" },
        { image: "/photo/gallery-3.png", title: "Technical Design", category: "prototypes" },
        { image: "/photo/2025-11-24.png", title: "Technical Prototype", category: "prototypes" },
        { image: "/photo/2025-11-20.png", title: "Research Model", category: "prototypes" },
        { image: "/photo/2025-01-17.png", title: "R&D Prototype", category: "prototypes" },
        { image: "/photo/2026-01-02.png", title: "Innovation Project", category: "prototypes" },
    ];

    const filteredProjects = selectedCategory === 'all'
        ? projects
        : projects.filter(p => p.category === selectedCategory);

    return (
        <div className="bg-white">
            {/* Page Header */}
            <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/photo/gallery-1.png"
                        alt="Gallery"
                        className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-800/70"></div>
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">Our Work Gallery</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Explore our portfolio of 3D printed projects across various industries and applications.
                    </p>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-8 bg-gray-50 sticky top-20 z-10 border-b border-gray-200">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${selectedCategory === cat.id
                                    ? 'bg-[#FF6B35] text-white shadow-lg'
                                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                                    }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredProjects.map((project, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 bg-white border border-gray-200"
                            >
                                <div className="aspect-square overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                    <div className="p-4 w-full">
                                        <h3 className="text-white font-bold text-lg">{project.title}</h3>
                                        <p className="text-gray-300 text-sm capitalize">{project.category}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-[#FF6B35] mb-2">{projects.length}+</div>
                            <div className="text-gray-600">Projects Showcased</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-[#FF6B35] mb-2">8</div>
                            <div className="text-gray-600">Industries</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-[#FF6B35] mb-2">50+</div>
                            <div className="text-gray-600">Happy Clients</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-[#FF6B35] mb-2">99%</div>
                            <div className="text-gray-600">Quality Rate</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;
