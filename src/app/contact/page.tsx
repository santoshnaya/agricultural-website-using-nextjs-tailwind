'use client';

import { useState } from 'react';
import { toast } from 'react-hot-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you can add your form submission logic
    toast.success('Message sent successfully!');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen pt-20 pb-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-green-700 mb-8">Contact Us</h1>
        
        <p className="text-gray-600 text-center mb-8">
          Have questions about our agricultural services? We'd love to hear from you.
          Send us a message and we'll respond as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Other Ways to Reach Us</h2>
          <div className="space-y-3 text-gray-600">
            <p>
              <span className="font-semibold">Email:</span> info@agritech.com
            </p>
            <p>
              <span className="font-semibold">Phone:</span> +1 (555) 123-4567
            </p>
            <p>
              <span className="font-semibold">Address:</span> 123 Farm Road, Agricultural District, AG 12345
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}