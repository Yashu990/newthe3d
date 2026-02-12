import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
    // Files identified from the user's photo folder
    const galleryImages = [
        { src: "/photo/gallery-drone.webp", alt: "Aerospace Drone Prototype", category: "Aerospace" },
        { src: "/photo/gallery-angel.webp", alt: "Intricate Art Sculpture", category: "Art & Decor" },
        { src: "/photo/gallery-1.png", alt: "Industrial Component", category: "Manufacturing" },
        { src: "/photo/gallery-deer.webp", alt: "Low Poly Deer Model", category: "Design" },
        { src: "/photo/gallery-ghost.webp", alt: "Character Model", category: "Prototyping" },
        { src: "/photo/gallery-3.png", alt: "Engineering Part", category: "Engineering" },
        { src: "/photo/vibrant-printers.webp", alt: "3D Printer Farm", category: "Facilities" },
        { src: "/photo/gallery-row.webp", alt: "Batch Production", category: "Production" },
    ];

    return (
        <section id="gallery" className="py-32 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">FEATURED PROJECTS</h2>
                        <div className="h-1 w-20 bg-black mx-auto mb-6"></div>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            A curated selection of our recent precision manufacturing work.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {galleryImages.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-xl bg-gray-100 cursor-pointer aspect-square shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <img
                                src={item.src}
                                alt={item.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "/photo/2026-01-02.webp"
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{item.category}</span>
                                <h3 className="text-lg font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.alt}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
