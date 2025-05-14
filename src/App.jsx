import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';
import LocationsPage from './pages/LocationsPage';
import ContactPage from './pages/ContactPage';
import CateringPage from './pages/CateringPage';
import CharitiesPage from './pages/CharitiesPage';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/catering" element={<CateringPage />} />
          <Route path="/charities" element={<CharitiesPage />} />
          {/* Add a catch-all route for 404 if desired, or redirect to home */}
          <Route path="*" element={<HomePage />} /> {/* Or a dedicated 404 component */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

