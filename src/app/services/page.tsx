'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Precision Farming',
    description: 'Utilize advanced technology and data analytics to optimize crop yields and resource efficiency.',
    image: '/images/precision.jpg',
    features: ['GPS Mapping', 'Drone Surveillance', 'Yield Monitoring', 'Variable Rate Technology']
  },
  {
    title: 'Soil Analysis',
    description: 'Comprehensive soil testing and analysis to ensure optimal growing conditions for your crops.',
    image: '/images/soil analysis.webp',
    features: ['Nutrient Testing', 'pH Analysis', 'Organic Matter Content', 'Soil Structure Assessment']
  },
  {
    title: 'Crop Management',
    description: 'Expert guidance on crop selection, rotation, and management practices.',
    image: '/images/crop management.webp',
    features: ['Crop Planning', 'Disease Management', 'Pest Control', 'Harvest Optimization']
  },
  {
    title: 'Smart Irrigation',
    description: 'Advanced irrigation solutions that optimize water usage and improve crop health.',
    image: '/images/smart irrigation.jpg',
    features: ['Automated Systems', 'Weather Integration', 'Moisture Sensors', 'Water Conservation']
  },
  {
    title: 'Agricultural Consulting',
    description: 'Professional consulting services to help you make informed decisions about your farm.',
    image: '/images/agricultural consulting.jpg',
    features: ['Business Planning', 'Market Analysis', 'Risk Management', 'Sustainability Planning']
  },
  {
    title: 'Equipment Solutions',
    description: 'Modern agricultural equipment and machinery solutions for efficient farming operations.',
    image: '/images/equipment solution.jpg',
    features: ['Equipment Selection', 'Maintenance Services', 'Technology Integration', 'Operator Training']
  }
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Agricultural Services
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of agricultural solutions designed to optimize your farming operations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800">Key Features:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-gray-600"
                      >
                        <svg
                          className="w-4 h-4 text-green-500 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="mt-6 w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;