import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-blue-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <div className="mb-8 text-lg text-gray-700">
          <p>Email: <a href="mailto:sumitkhadka098@gmail.com" className="text-blue-600 hover:underline">sumitkhadka098@gmail.com</a></p>
          <p>Phone: <a href="tel:+9779860149953" className="text-blue-600 hover:underline">+977-9860149953</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/sumitkhadka" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Sumit Khadka</a></p>
          <p>GitHub: <a href="https://github.com/sk909" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Sumit Khadka</a></p>
          <p>Location: Kapan Milanchowk, Kathmandu, Nepal</p>
        </div>
        <form className="bg-white rounded-lg shadow p-6 flex flex-col gap-4">
          <input type="text" placeholder="Name" className="border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <input type="email" placeholder="Email" className="border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <textarea placeholder="Message" rows="4" className="border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact; 