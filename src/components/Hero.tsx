import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-green-50">
      <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-green-900">
              Sustainable Farming <br />
              <span className="text-green-600">For a Better Tomorrow</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-xl">
              Embrace modern agricultural practices that respect nature while maximizing yields. 
              Join us in creating a sustainable future for farming.
            </p>
            <div className="space-x-4">
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition duration-300">
                Get Started
              </button>
              <button className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[600px]">
            <Image
              src="/images/farm 1.jpg"
              alt="Agricultural landscape"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;