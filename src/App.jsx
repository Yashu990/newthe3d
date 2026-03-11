
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Process from './pages/Process';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white min-h-screen">
      <Header />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/process" element={<Process />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer className="bg-black text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <p className="font-bold text-white text-lg mb-3">3D PRINTING COMPANY</p>
              <p className="text-sm text-gray-400 mb-2 uppercase">PRINT YOUR IMAGINATION</p>
              <p className="text-xs text-gray-500">Industrial Manufacturing</p>
            </div>

            {/* Contact Details */}
            <div>
              <h4 className="font-bold text-white mb-3">Contact Us</h4>
              <div className="space-y-3 text-sm text-gray-400">
                <p className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#FF6B35] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  info@3dprintingcompany.in
                </p>
                <p className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#FF6B35] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  +91-9310588258
                </p>
                <p className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#FF6B35] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                  www.3dprintingcompany.in
                </p>
              </div>
            </div>

            {/* Address */}
            <div>
              <h4 className="font-bold text-white mb-3">Visit Us</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                G 13, G Block, Sector 6<br />
                Noida, Uttar Pradesh 201301<br />
                <span className="text-xs text-gray-500 mt-2 block">GST: 09ELAPK5758J1ZM</span>
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 text-center">
            <p className="text-gray-500 text-xs">
              &copy; 2026 3D Printing Company. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
