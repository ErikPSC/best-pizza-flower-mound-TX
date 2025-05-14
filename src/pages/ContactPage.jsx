import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle form submission here (e.g., send to an API endpoint)
    console.log('Form data submitted:', formData);
    setIsSubmitted(true);
    // Reset form after a delay or on successful submission
    setTimeout(() => {
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
        });
        setIsSubmitted(false); // Allow for new submissions
    }, 5000); // Clear form and message after 5 seconds
  };

  return (
    <div className="container mx-auto p-4 py-8">
      <h1 className="text-4xl font-bold text-center text-red-600 mb-10">Get in Touch with Heavenly Crust</h1>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Contact Information Section */}
        <section className="bg-white p-8 rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Details</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-red-500 mb-2">Flower Mound Location</h3>
            <p className="text-gray-700">2311 Cross Timber Rd, Ste 304, Flower Mound, TX 75028</p>
            <p className="text-gray-700">Phone: <a href="tel:469-464-0454" className="hover:text-red-600">(469) 464-0454</a></p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-red-500 mb-2">North Richland Hills Location</h3>
            <p className="text-gray-700">8721 Boulevard 26, North Richland Hills, TX 76180</p>
            <p className="text-gray-700">Phone: <a href="tel:817-479-3077" className="hover:text-red-600">(817) 479-3077</a></p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-red-500 mb-2">General Inquiries</h3>
            <p className="text-gray-700">Email: <a href="mailto:info@heavenlycrust.com" className="hover:text-red-600">info@heavenlycrust.com</a> (Suggested)</p>
          </div>

          <h3 className="text-xl font-semibold text-red-500 mb-3 mt-8">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-600 hover:text-red-500">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.802c-3.073 0-3.42.01-4.624.067-2.612.12-3.939 1.447-4.056 4.056-.057 1.204-.067 1.551-.067 4.624s.01 3.42.067 4.624c.117 2.609 1.443 3.936 4.056 4.056 1.204.057 1.551.067 4.624.067s3.42-.01 4.624-.067c2.613-.12 3.939-1.447 4.056-4.056.057-1.204.067-1.551.067-4.624s-.01-3.42-.067-4.624c-.117-2.609-1.443-3.936-4.056-4.056C15.42 3.975 15.073 3.965 12 3.965zM12 6.837a5.163 5.163 0 100 10.326 5.163 5.163 0 000-10.326zm0 8.524a3.363 3.363 0 110-6.726 3.363 3.363 0 010 6.726zM16.95 6.322a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"/></svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-600 hover:text-red-500">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.35C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z"/></svg>
            </a>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="bg-white p-8 rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
          {isSubmitted && (
            <div className="mb-4 p-3 rounded-md bg-green-100 text-green-700">
              Thank you for your message! We'll get back to you soon.
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number <span className="text-xs text-gray-500">(Optional)</span></label>
              <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea name="message" id="message" rows="4" value={formData.message} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"></textarea>
            </div>
            <div>
              <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors">
                Send Message
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;

