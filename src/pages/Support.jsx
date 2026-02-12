import React from 'react';
import Support from '../components/Support';

const SupportPage = () => {
    return (
        <div className="pt-24 pb-12">
            <div className="bg-gray-900 text-white py-20 mb-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">ENGINEERING & DESIGN SUPPORT</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">From rapid prototyping to design optimization, our engineers are here to help.</p>
                </div>
            </div>
            <Support />
        </div>
    );
};

export default SupportPage;
