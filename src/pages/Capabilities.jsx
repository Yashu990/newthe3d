import React from 'react';
import Services from '../components/Services';

const CapabilitiesPage = () => {
    return (
        <div className="pt-24 pb-12">
            <div className="bg-gray-900 text-white py-20 mb-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">MANUFACTURING CAPABILITIES</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">Explore our full range of additive manufacturing technologies and post-processing solutions.</p>
                </div>
            </div>
            <Services />
        </div>
    );
};

export default CapabilitiesPage;
