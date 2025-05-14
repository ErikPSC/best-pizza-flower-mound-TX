import React from 'react';

const LocationsPage = () => {
  const locations = [
    {
      name: 'Flower Mound Location',
      addressLine1: '2311 Cross Timber Rd, Ste 304',
      addressLine2: 'Flower Mound, TX 75028',
      phone: '(469) 464-0454',
      hours: [
        'Monday – Saturday: 11:00AM – 9:00PM',
        'Sunday: CLOSED',
      ],
      mapLink: 'https://www.google.com/maps/place/Heavenly+Crust+Pizza/@33.066328,-97.080079,17z/data=!3m1!4b1!4m6!3m5!1s0x864c2e3a17c30039:0x8a40d8f1e572c5de!8m2!3d33.066328!4d-97.0775041!16s%2Fg%2F11h6y_mmx0?entry=ttu',
      orderLink: '#', // Placeholder for actual Flower Mound online order link
    },
    {
      name: 'North Richland Hills Location',
      addressLine1: '8721 Boulevard 26',
      addressLine2: 'North Richland Hills, TX 76180',
      phone: '(817) 479-3077',
      hours: [
        'Monday – Saturday: 11:00AM – 9:00PM',
        'Sunday: CLOSED',
      ],
      mapLink: 'https://www.google.com/maps/place/Heavenly+Crust+Pizza/@32.860809,-97.219003,17z/data=!3m1!4b1!4m6!3m5!1s0x864e7f7a3a8f9957:0x1a7a7b5b7cb3a0f6!8m2!3d32.860809!4d-97.2164281!16s%2Fg%2F1tds7j7x?entry=ttu',
      orderLink: '#', // Placeholder for actual NRH online order link
    },
  ];

  return (
    <div className="container mx-auto p-4 py-8">
      <h1 className="text-4xl font-bold text-center text-red-600 mb-10">Find Heavenly Crust Pizza Near You</h1>
      
      <div className="grid md:grid-cols-2 gap-10">
        {locations.map((location) => (
          <section key={location.name} className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow flex flex-col">
            <h2 className="text-3xl font-semibold text-gray-800 mb-5 text-center border-b-2 border-red-500 pb-3">{location.name}</h2>
            
            <div className="mb-4 text-gray-700 leading-relaxed flex-grow">
              <p className="font-semibold">Address:</p>
              <p>{location.addressLine1}</p>
              <p>{location.addressLine2}</p>
              
              <p className="font-semibold mt-3">Phone:</p>
              <p>{location.phone}</p>
              
              <p className="font-semibold mt-3">Hours:</p>
              {location.hours.map(hour => <p key={hour}>{hour}</p>)}
            </div>
            
            <div className="mt-auto pt-6 space-y-3">
              <a 
                href={location.mapLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full text-center bg-gray-700 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors"
              >
                Get Directions
              </a>
              <a 
                href={location.orderLink} 
                className="block w-full text-center bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors"
              >
                Order Online from {location.name.replace(' Location', '')}
              </a>
            </div>
          </section>
        ))}
      </div>

      {/* Optional: Embedded map for Flower Mound as primary */}
      <section className="my-12 py-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Our Flower Mound Location</h2>
        <div className="aspect-w-16 aspect-h-9 rounded-lg shadow-lg overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.833935900997!2d-97.0800790848138!3d33.0663280809277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c2e3a17c30039%3A0x8a40d8f1e572c5de!2sHeavenly%20Crust%20Pizza!5e0!3m2!1sen!2sus!4v1678886400000!5m2!1sen!2sus" 
            width="100%" 
            height="450" 
            style={{ border:0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Flower Mound Location Map"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default LocationsPage;

