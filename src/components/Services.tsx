import Image from 'next/image';

const Services = () => {
  const services = [
    {
      title: 'Crop Management',
      description: 'Expert guidance on crop selection, rotation, and management techniques for optimal yields.',
      image: '/images/crop management.webp'
    },
    {
      title: 'Precision Agriculture',
      description: 'Advanced technology solutions for precise farming operations and resource optimization.',
      image: '/images/precision.jpg'
    },
    {
      title: 'Organic Farming',
      description: 'Specialized methods for chemical-free, sustainable organic crop production.',
      image: '/images/organic farming.jpg'
    },
    {
      title: 'Soil Analysis',
      description: 'Comprehensive soil testing and fertility management recommendations.',
      image: '/images/soil analysis.webp'
    }
  ];

  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-4">
            Our Agricultural Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions tailored to meet the diverse needs of modern farming
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
              <div className="relative h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
                <button className="mt-4 text-green-600 font-semibold hover:text-green-700 transition duration-300">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;