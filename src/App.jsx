import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage'; // Import HomePage
// We will create other page components later

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Render HomePage component */}
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}

export default App;

