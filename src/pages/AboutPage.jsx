import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto p-4 py-8">
      <h1 className="text-4xl font-bold text-center text-red-600 mb-10">Pizza That Makes A Difference: Our Story</h1>
      
      <section className="bg-white p-8 rounded-lg shadow-lg mb-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Inspiration</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Here at Heavenly Crust Pizza, our passion extends beyond crafting the best-tasting thin crust pizza. Our journey began with a heartfelt mission. In 2019, our family participated in a mission trip to Lynch, Kentucky, a community striving to rebuild after the decline of the coal-mining industry. 
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We were profoundly inspired by a Christian relief organization there that had established local businesses, including the Lamp House Coffee shop. The profits from these ventures were channeled directly back into the community, providing vital support and fostering hope. This model of business-as-mission resonated deeply with us.
            </p>
          </div>
          <div>
            {/* Placeholder for an image related to the mission or community, if available */}
            <img src="https://via.placeholder.com/500x350.png?text=Our+Mission+Inspiration" alt="Lynch, KY Mission Trip or Lamp House Coffee" className="rounded-lg shadow-md w-full"/>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 p-8 rounded-lg shadow-lg mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Our Commitment</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-700 leading-relaxed mb-4 text-center">
            Heavenly Crust® was born from this inspiration, established with a twofold purpose: 
          </p>
          <ol className="list-decimal list-inside text-gray-700 leading-relaxed space-y-3 mb-4 text-lg">
            <li className="ml-4">To create and serve the most delicious, authentic thin crust pizza you can find anywhere, using only the finest and freshest ingredients.</li>
            <li className="ml-4">To find immense joy and purpose in donating 50% of our profits to Christian charities, thereby extending our reach and making a tangible difference in the lives of others.</li>
          </ol>
          <p className="text-gray-700 leading-relaxed mt-6 text-center">
            Every pizza you order, every meal you share with us, contributes directly to this mission. We believe in "Pizza that makes a difference," and we are grateful for your partnership in this endeavor. Thank you for choosing Heavenly Crust Pizza.
          </p>
        </div>
      </section>

      <section className="text-center py-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Want to learn more about the charities we support?</h2>
        <a href="/charities" className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors">
          Our Charities
        </a>
      </section>
    </div>
  );
};

export default AboutPage;

