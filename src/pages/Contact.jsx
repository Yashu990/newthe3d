
import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        service: 'general'
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        alert('Thank you for your inquiry! We will get back to you within 24 hours.');
        setFormData({ name: '', email: '', phone: '', company: '', message: '', service: 'general' });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="bg-white">
            {/* Page Header */}
            <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/photo/hero-main.webp"
                        alt="Contact Us"
                        className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-800/70"></div>
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">Contact Us</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Get in touch with us for your 3D printing needs. We're here to help bring your ideas to life.
                    </p>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-20">
                <div className="container mx-auto px-4 max-w-6xl">
                    {/* Contact Information Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
                        {/* Phone Card */}
                        <div className="bg-white rounded-2xl p-6 lg:p-4 xl:p-8 border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center group cursor-pointer">
                            <div className="w-16 h-16 bg-[#FF6B35]/10 text-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FF6B35] group-hover:text-white transition-colors duration-300">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                            <a href="tel:+919310588258" className="text-base font-medium text-gray-600 hover:text-[#FF6B35] transition-colors">+91-9310588258</a>
                            <p className="text-xs text-gray-500 mt-2">Mon-Sat: 9 AM - 7 PM IST</p>
                        </div>

                        {/* Email Card */}
                        <div className="bg-white rounded-2xl p-6 lg:p-4 xl:p-8 border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center group cursor-pointer">
                            <div className="w-16 h-16 bg-[#FF6B35]/10 text-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FF6B35] group-hover:text-white transition-colors duration-300">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                            <a href="mailto:info@3dprintingcompany.in" className="text-[13px] sm:text-sm font-medium text-gray-600 hover:text-[#FF6B35] transition-colors tracking-tight block">info@3dprintingcompany.in</a>
                            <p className="text-xs text-gray-500 mt-2">24-hour response time</p>
                        </div>

                        {/* Address Card */}
                        <div className="bg-white rounded-2xl p-6 lg:p-4 xl:p-8 border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center group cursor-pointer">
                            <div className="w-16 h-16 bg-[#FF6B35]/10 text-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FF6B35] group-hover:text-white transition-colors duration-300">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
                            <p className="text-gray-600 text-sm">Third Floor, G 13, G Block, Sector 6<br />Noida, UP 201301</p>
                        </div>

                        {/* Website/Info Card */}
                        <div className="bg-white rounded-2xl p-6 lg:p-4 xl:p-8 border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center group cursor-pointer">
                            <div className="w-16 h-16 bg-[#FF6B35]/10 text-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FF6B35] group-hover:text-white transition-colors duration-300">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Website</h3>
                            <a href="https://www.3dprintingcompany.in" target="_blank" rel="noopener noreferrer" className="text-[13px] sm:text-sm font-medium text-gray-600 hover:text-[#FF6B35] transition-colors tracking-tight block">www.3dprintingcompany.in</a>
                            <p className="text-xs text-gray-500 mt-2">GST: 09ELAPK5758J1ZM</p>
                        </div>
                    </div>

                    {/* Quick Response Banner */}
                    <div className="mt-12 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to start your project?</h3>
                            <p className="text-gray-300 text-lg">Send us an email or give us a call for a quick quote.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                            <a href="tel:+919310588258" className="bg-[#FF6B35] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#E55A28] transition-all duration-300 text-center shadow-lg hover:shadow-xl whitespace-nowrap">
                                Call Now
                            </a>
                            <a href="mailto:info@3dprintingcompany.in" className="bg-white text-gray-900 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 text-center shadow-lg hover:shadow-xl whitespace-nowrap">
                                Email Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Our Facility</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our state-of-the-art facility is located in Noida. Schedule a visit to see our 3D printing technology in action.
                        </p>
                    </div>

                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white hover:scale-[1.02] transition-transform duration-300">
                        <div className="aspect-video w-full">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3!2d77.3209687!3d28.5959439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce53a0ec930ff%3A0xceb01b03889d3c7b!2s3D%20PRINTING%20COMPANY!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="The 3D Printing Company - G-13, 5th Floor, Sector 6, Noida"
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>

                    {/* Location Details */}
                    <div className="mt-8 grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl hover:scale-105 transition-all duration-300 group cursor-pointer">
                            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🏢</div>
                            <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#FF6B35] transition-colors">Modern Facility</h3>
                            <p className="text-sm text-gray-600">Equipped with latest 3D printing technology</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl hover:scale-105 transition-all duration-300 group cursor-pointer">
                            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🚗</div>
                            <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#FF6B35] transition-colors">Easy Access</h3>
                            <p className="text-sm text-gray-600">Well-connected location in Noida</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl hover:scale-105 transition-all duration-300 group cursor-pointer">
                            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">📅</div>
                            <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#FF6B35] transition-colors">Schedule a Visit</h3>
                            <p className="text-sm text-gray-600">Book a tour of our facility</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
