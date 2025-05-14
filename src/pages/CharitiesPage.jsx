import React from 'react';

const CharitiesPage = () => {
  return (
    <div className="container mx-auto p-4 py-8">
      <h1 className="text-4xl font-bold text-center text-red-600 mb-10">Giving Back: Our Commitment to Charity</h1>

      <section className="bg-white p-8 rounded-lg shadow-xl mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Why We Give</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          At Heavenly Crust Pizza, our mission, "Pizza that makes a difference," is at the core of everything we do. We believe that businesses have a unique opportunity and responsibility to contribute positively to the world around them. Our commitment to donating 50% of our profits to Christian charities is a direct reflection of this belief and the inspiration we drew from our experiences in Lynch, Kentucky (as shared in <a href="/about" class="text-red-500 hover:text-red-700 underline">Our Story</a>).
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          These donations are not just a footnote to our business; they are a fundamental part of why we exist. We are passionate about making the best thin crust pizza, and equally passionate about using our success to support organizations that are doing vital work in communities near and far.
        </p>
      </section>

      <section className="bg-gray-50 p-8 rounded-lg shadow-lg mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">The Impact of Your Support</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          When you choose Heavenly Crust Pizza, you're not just enjoying a delicious meal; you're becoming a partner in our mission. Every pizza purchased helps us contribute to various Christian charities that focus on a range of causes, including:
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 mb-4 pl-4">
          <li>Community development and support for underserved areas.</li>
          <li>Relief efforts for those affected by poverty or disaster.</li>
          <li>Youth programs and educational initiatives.</li>
          <li>Spiritual outreach and support ministries.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          While we may not list specific charity names publicly to maintain their operational privacy and focus, we ensure that all supported organizations are reputable and align with our core values of compassion, service, and faith. We are diligent in selecting charities where our contributions can make a meaningful and tangible impact.
        </p>
      </section>

      <section className="text-center py-8 bg-red-600 text-white rounded-lg shadow-xl">
        <h2 className="text-3xl font-semibold mb-4">Join Us in Making a Difference</h2>
        <p className="text-lg mb-6">Thank you for supporting Heavenly Crust Pizza. Together, we can continue to make a positive impact, one slice at a time.</p>
        <div className="space-x-4">
            <a href="/menu" className="bg-white hover:bg-gray-200 text-red-600 font-bold py-3 px-8 rounded-lg text-lg transition-colors">
                Order Your Pizza Today
            </a>
            <a href="/about" className="border-2 border-white hover:bg-white hover:text-red-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
                Read Our Full Story
            </a>
        </div>
      </section>
    </div>
  );
};

export default CharitiesPage;

