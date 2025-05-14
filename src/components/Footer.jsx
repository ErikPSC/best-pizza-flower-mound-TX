import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8 px-4 text-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div>
            <h5 className="text-lg font-semibold mb-2">Heavenly Crust Pizza</h5>
            <p className="text-sm">Pizza that makes a difference.</p>
            <img src="/assets/heavenly_crust_logo.png" alt="Heavenly Crust Logo" className="h-12 mx-auto mt-2" />
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-2">Quick Links</h5>
            <ul className="text-sm">
              <li className="mb-1"><a href="/" className="hover:text-red-500">Home</a></li>
              <li className="mb-1"><a href="/menu" className="hover:text-red-500">Menu</a></li>
              <li className="mb-1"><a href="/about" className="hover:text-red-500">Our Story</a></li>
              <li className="mb-1"><a href="/locations" className="hover:text-red-500">Locations</a></li>
              <li className="mb-1"><a href="/contact" className="hover:text-red-500">Contact</a></li>
              <li className="mb-1"><a href="/catering" className="hover:text-red-500">Catering</a></li>
              <li><a href="/charities" className="hover:text-red-500">Our Charities</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-2">Contact Us (Flower Mound)</h5>
            <p className="text-sm">2311 Cross Timber Rd, Ste 304<br/>Flower Mound, TX 75028</p>
            <p className="text-sm mt-1">Phone: (469) 464-0454</p>
            <div className="mt-3 flex justify-center space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-red-500">
                {/* Placeholder for Instagram Icon - Lucide icon can be added here */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.802c-3.073 0-3.42.01-4.624.067-2.612.12-3.939 1.447-4.056 4.056-.057 1.204-.067 1.551-.067 4.624s.01 3.42.067 4.624c.117 2.609 1.443 3.936 4.056 4.056 1.204.057 1.551.067 4.624.067s3.42-.01 4.624-.067c2.613-.12 3.939-1.447 4.056-4.056.057-1.204.067-1.551.067-4.624s-.01-3.42-.067-4.624c-.117-2.609-1.443-3.936-4.056-4.056C15.42 3.975 15.073 3.965 12 3.965zM12 6.837a5.163 5.163 0 100 10.326 5.163 5.163 0 000-10.326zm0 8.524a3.363 3.363 0 110-6.726 3.363 3.363 0 010 6.726zM16.95 6.322a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"/></svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-red-500">
                {/* Placeholder for Facebook Icon - Lucide icon can be added here */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.35C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6">
          <p className="text-sm text-gray-400">&copy; {currentYear} Heavenly Crust Pizza LLC. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

