import React from 'react';

const Navbar = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Our Story', path: '/about' },
    { name: 'Locations', path: '/locations' },
    { name: 'Contact', path: '/contact' },
    { name: 'Catering', path: '/catering' },
    { name: 'Our Charities', path: '/charities' },
  ];

  return (
    <nav className="bg-black text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/assets/heavenly_crust_logo.png" alt="Heavenly Crust Logo" className="h-16 mr-3" /> 
          {/* Adjusted logo size, can be fine-tuned */}
        </div>
        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <a key={item.name} href={item.path} className="hover:text-red-500 transition-colors">
              {item.name}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          {/* Mobile menu button - can be implemented later if needed */}
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

