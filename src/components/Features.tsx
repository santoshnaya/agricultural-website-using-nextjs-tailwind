import Image from 'next/image';

const Features = () => {
  const features = [
    {
      title: 'Smart Farming',
      description: 'Leverage IoT and data analytics to optimize crop yields and resource utilization.',
      icon: '/globe.svg'
    },
    {
      title: 'Sustainable Practices',
      description: 'Implement eco-friendly farming methods that preserve soil health and biodiversity.',
      icon: '/window.svg'
    },
    {
      title: 'Modern Equipment',
      description: 'Utilize state-of-the-art machinery for efficient harvesting and crop management.',
      icon: '/file.svg'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-4">
            Modern Agricultural Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how our innovative approaches are transforming traditional farming
            into a sustainable and efficient practice.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl bg-green-50 hover:bg-green-100 transition duration-300">
              <div className="w-12 h-12 mb-4 relative">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-green-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;