import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <img className="h-10 w-auto mb-6 brightness-0 invert" src="/photo/logo.png" alt="3D Printing Company" />
                        <p className="text-gray-400 mb-6">
                            Precision manufacturing solutions for the modern world. Print your imagination.
                        </p>
                        <div className="flex space-x-4">
                            {/* Social Icons Placeholder */}
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-lg mb-6">Company</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#careers" className="hover:text-white transition-colors">Careers</a></li>
                            <li><a href="#blog" className="hover:text-white transition-colors">Insights</a></li>
                            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-semibold text-lg mb-6">Capabilities</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">3D Printing (SLA, SLS, FDM)</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Vacuum Casting</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Injection Molding</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Design & Engineering</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-semibold text-lg mb-6">Contact</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li>G-13, 1st Floor, Noida Sector 6, Uttar Pradesh 201301</li>
                            <li>+91-9310588258</li>
                            <li><a href="mailto:info@3dprintingcompany.in" className="hover:text-white underline">info@3dprintingcompany.in</a></li>
                            <li className="pt-4 text-xs">GST: 09ELAPK5758J1ZM</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} 3D PRINTING COMPANY. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
