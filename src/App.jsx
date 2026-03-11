
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
              <p className="text-sm text-gray-400 mb-2">PRINT YOUR IMAGINATION</p>
              <p className="text-xs text-gray-500">Industrial Manufacturing</p>
            </div>

            {/* Contact Details */}
            <div>
              <h4 className="font-bold text-white mb-3">Contact Us</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>📧 info@3dprintingcompany.in</p>
                <p>📞 +91-9310588258</p>
                <p>🌐 www.3dprintingcompany.in</p>
              </div>
            </div>

            {/* Address */}
            <div>
              <h4 className="font-bold text-white mb-3">Visit Us</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                G 13, 5th Floor<br />
                Noida Sector 6<br />
                Uttar Pradesh 201301<br />
                <span className="text-xs text-gray-500 mt-2 block">GST: 09ELAPK5758J1ZM</span>
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 text-center">
            <p className="text-gray-500 text-xs">
              &copy; {new Date().getFullYear()} 3D Printing Company. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
