import React from 'react';

const CateringPage = () => {
  return (
    <div className="container mx-auto p-4 py-8">
      <h1 className="text-4xl font-bold text-center text-red-600 mb-10">Heavenly Catering for Your Events</h1>

      <section className="bg-white p-8 rounded-lg shadow-xl mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Let Us Cater Your Next Gathering!</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Planning a party, corporate event, family get-together, or any special occasion? Heavenly Crust Pizza offers delicious and convenient catering options to make your event a heavenly success! We bring the same passion for quality ingredients and amazing taste from our restaurant straight to your event.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Our thin crust pizzas are always a crowd-pleaser, and we can customize a catering package to fit your needs and budget. From small gatherings to larger events, we're here to help you serve up something special.
        </p>
      </section>

      <section className="bg-gray-50 p-8 rounded-lg shadow-lg mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">What We Offer</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-red-500 mb-2">Pizza Packages</h3>
            <p className="text-gray-600">Choose from a variety of our signature pizzas or create your own. We offer discounts for bulk orders.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-red-500 mb-2">Appetizers & Sides</h3>
            <p className="text-gray-600">Complement your pizzas with our delicious garlic knots, cheesy breadsticks, or fresh salads.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-red-500 mb-2">Desserts & Drinks</h3>
            <p className="text-gray-600">Don't forget something sweet! Add our divine desserts and a selection of beverages to your order.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-red-500 mb-2">Customizable Options</h3>
            <p className="text-gray-600">We understand every event is unique. Talk to us about your specific dietary needs or preferences.</p>
          </div>
        </div>
      </section>

      <section className="text-center py-8 bg-red-600 text-white rounded-lg shadow-xl">
        <h2 className="text-3xl font-semibold mb-4">Ready to Plan Your Event?</h2>
        <p className="text-lg mb-6">Contact us today to discuss your catering needs and get a personalized quote.</p>
        <a href="/contact" className="bg-white hover:bg-gray-200 text-red-600 font-bold py-3 px-8 rounded-lg text-lg transition-colors">
          Inquire About Catering
        </a>
        <p className="mt-4 text-sm">
          Please provide at least 48 hours notice for catering orders. Large events may require more advance notice.
        </p>
      </section>
    </div>
  );
};

export default CateringPage;

