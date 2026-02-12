
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
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                            <h2 className="text-2xl font-bold mb-6 text-gray-900">Send Us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent outline-none transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent outline-none transition-all"
                                        placeholder="john@company.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent outline-none transition-all"
                                        placeholder="+91-XXXXXXXXXX"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Company/Organization</label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent outline-none transition-all"
                                        placeholder="Your Company Name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Service Interested In</label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent outline-none transition-all"
                                    >
                                        <option value="general">General Inquiry</option>
                                        <option value="fdm">FDM Printing</option>
                                        <option value="sla">SLA Printing</option>
                                        <option value="sls">SLS Printing</option>
                                        <option value="multi">Multi-Material Printing</option>
                                        <option value="quote">Get a Quote</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent outline-none transition-all resize-none"
                                        placeholder="Tell us about your project..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#FF6B35] hover:bg-[#E55A28] text-white font-bold py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                                <h2 className="text-2xl font-bold mb-6 text-gray-900">Get In Touch</h2>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-[#FF6B35] text-white p-3 rounded-lg">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                                            <p className="text-gray-600">+91-9310588258</p>
                                            <p className="text-sm text-gray-500">Mon-Sat: 9 AM - 7 PM IST</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-[#FF6B35] text-white p-3 rounded-lg">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                                            <p className="text-gray-600">info@3dprintingcompany.in</p>
                                            <p className="text-sm text-gray-500">24-hour response time</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-[#FF6B35] text-white p-3 rounded-lg">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 mb-1">Address</h3>
                                            <p className="text-gray-600">
                                                G 13, 1st Floor, Noida Sector 6<br />
                                                Uttar Pradesh 201301, India
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-[#FF6B35] text-white p-3 rounded-lg">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 mb-1">Website</h3>
                                            <p className="text-gray-600">www.3dprintingcompany.in</p>
                                            <p className="text-sm text-gray-500">GST: 09ELAPK5758J1ZM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Links */}
                            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
                                <h3 className="text-xl font-bold mb-4 text-gray-900">Quick Response</h3>
                                <p className="text-gray-600 mb-4">
                                    Need immediate assistance? We typically respond within 1-2 business hours during working days.
                                </p>
                                <div className="flex gap-4">
                                    <a href="tel:+919310588258" className="flex-1 bg-[#FF6B35] text-white text-center py-3 rounded-lg font-bold hover:bg-[#E55A28] transition-all">
                                        Call Now
                                    </a>
                                    <a href="mailto:info@3dprintingcompany.in" className="flex-1 bg-white text-[#FF6B35] border-2 border-[#FF6B35] text-center py-3 rounded-lg font-bold hover:bg-[#FF6B35] hover:text-white transition-all">
                                        Email Us
                                    </a>
                                </div>
                            </div>
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
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0776890933873!2d77.31345431508236!3d28.62723298242743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce55b98d3b7cf%3A0x3d6f9e0e8f8e8e8e!2sSector%206%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Company Location - Noida Sector 6"
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
