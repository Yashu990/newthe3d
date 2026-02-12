import React from 'react';
import Industries from '../components/Industries';

const IndustriesPage = () => {
    return (
        <div className="pt-24 pb-12">
            <div className="bg-gray-900 text-white py-20 mb-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">INDUSTRIES SERVED</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">Specialized solutions for aerospace, medical, automotive, and more.</p>
                </div>
            </div>
            <Industries />
        </div>
    );
};

export default IndustriesPage;
