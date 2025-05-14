import React from 'react';

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Hero Section */}
      <section className="text-center py-12 bg-gray-100 rounded-lg shadow-lg my-8">
        <h1 className="text-5xl font-bold text-red-600 mb-4">Experience the Best Pizza in Flower Mound, Texas!</h1>
        <p className="text-xl text-gray-700 mb-6">Delicious Thin Crust Pizza Crafted with Passion. Pizza That Makes A Difference.</p>
        <div className="space-x-4">
          <a href="#" className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors">
            Order Online (Flower Mound)
          </a>
          <a href="/menu" className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors">
            View Our Menu
          </a>
        </div>
      </section>

      {/* About Us Snippet */}
      <section className="my-12 py-8 px-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">Welcome to Heavenly Crust Pizza</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Here at Heavenly Crust Pizza, we believe in crafting the best-tasting thin crust pizza anywhere. But our mission goes beyond just great food. We are inspired by a deep commitment to give back. In 2019, our family embarked on a mission trip to Lynch, KY, a former coal-mining community. Witnessing how a Christian relief organization established businesses like Lamp House Coffee to support the struggling community ignited a passion within us. 
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Heavenly Crust® was established with a dual purpose: to serve you the most delicious pizza and to find great joy in donating 50% of our profits to Christian charities. Every slice you enjoy helps us make a difference.
        </p>
        <div className="text-center mt-6">
          <a href="/about" className="text-red-600 hover:text-red-800 font-semibold transition-colors">Learn More About Our Story &rarr;</a>
        </div>
      </section>

      {/* Featured Pizzas/Specialties - Placeholder for now */}
      <section className="my-12 py-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Our Heavenly Pizzas</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Placeholder Pizza 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Replace with actual image */}
            <img src="https://via.placeholder.com/400x300.png?text=Delicious+Pizza+1" alt="Featured Pizza 1" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Signature Pepperoni</h3>
              <p className="text-gray-600 text-sm mb-4">A classic favorite, loaded with premium pepperoni and our signature thin crust.</p>
              <a href="/menu" className="text-red-500 hover:text-red-700 font-semibold">View Details</a>
            </div>
          </div>
          {/* Placeholder Pizza 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="https://via.placeholder.com/400x300.png?text=Amazing+Pizza+2" alt="Featured Pizza 2" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Veggie Supreme</h3>
              <p className="text-gray-600 text-sm mb-4">A delightful mix of fresh garden vegetables on our crispy thin crust.</p>
              <a href="/menu" className="text-red-500 hover:text-red-700 font-semibold">View Details</a>
            </div>
          </div>
          {/* Placeholder Pizza 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="https://via.placeholder.com/400x300.png?text=Tasty+Pizza+3" alt="Featured Pizza 3" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">BBQ Chicken Feast</h3>
              <p className="text-gray-600 text-sm mb-4">Tangy BBQ sauce, grilled chicken, red onions, and cilantro on our signature crust.</p>
              <a href="/menu" className="text-red-500 hover:text-red-700 font-semibold">View Details</a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
            <a href="/menu" className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors">
                Explore Full Menu
            </a>
        </div>
      </section>

      {/* Why Choose Us / The Heavenly Difference */}
      <section className="my-12 py-8 px-6 bg-gray-50 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">The Heavenly Difference</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="p-4">
            <h3 className="text-xl font-semibold text-red-600 mb-2">Best Pizza in Flower Mound</h3>
            <p className="text-gray-600">Experience the taste that has everyone talking! We're committed to being the best.</p>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-red-600 mb-2">Premium Ingredients</h3>
            <p className="text-gray-600">Only the freshest and highest quality ingredients make it onto our pizzas.</p>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-red-600 mb-2">Authentic Thin Crust</h3>
            <p className="text-gray-600">Our signature thin crust is perfectly crispy and delicious every time.</p>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-red-600 mb-2">Supporting Our Community</h3>
            <p className="text-gray-600">We proudly donate 50% of our profits to Christian charities. Pizza that makes a difference!</p>
          </div>
        </div>
      </section>

      {/* Location Highlight (Flower Mound) */}
      <section className="my-12 py-8 text-center bg-red-600 text-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">Visit Us in Flower Mound!</h2>
        <p className="text-lg mb-2">2311 Cross Timber Rd, Ste 304, Flower Mound, TX 75028</p>
        <p className="text-lg mb-4">Call Us: (469) 464-0454</p>
        <div className="space-x-4">
          <a href="#" className="bg-white hover:bg-gray-200 text-red-600 font-bold py-3 px-6 rounded-lg text-lg transition-colors">
            Get Directions (Flower Mound)
          </a>
          <a href="/locations" className="border-2 border-white hover:bg-white hover:text-red-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors">
            View All Locations
          </a>
        </div>
      </section>

    </div>
  );
};

export default HomePage;

