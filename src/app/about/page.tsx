'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      image: '/images/person 1.jpg',
      description: 'Agricultural expert with 15+ years of experience'
    },
    {
      name: 'Sarah Johnson',
      role: 'Head of Research',
      image: '/images/person 2.avif',
      description: 'PhD in Agricultural Sciences'
    },
    {
      name: 'Mike Wilson',
      role: 'Technology Director',
      image: '/images/person 3.jpg',
      description: 'Expert in AgriTech solutions'
    }
  ];

  const stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '1000+', label: 'Farmers Helped' },
    { value: '50+', label: 'Agricultural Projects' },
    { value: '25+', label: 'Awards Won' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="/images/farm 1.jpg"
          alt="Agricultural Landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl font-bold mb-4">About AgriTech</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Revolutionizing agriculture through innovative technology and sustainable practices
            </p>
          </motion.div>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <div className="relative h-[400px]">
            <Image
              src="/images/our story.jpeg"
              alt="Our Story"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-green-700 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2008, AgriTech has been at the forefront of agricultural innovation,
              combining traditional farming wisdom with cutting-edge technology.
            </p>
            <p className="text-gray-600 mb-4">
              Our mission is to empower farmers with smart solutions that increase productivity
              while promoting sustainable practices for a better future.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-4xl font-bold text-green-700 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-12">Our Team</h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-700 mb-2">{member.name}</h3>
                <p className="text-gray-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-500">{member.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="bg-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-3 gap-8"
          >
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-700"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p>Pushing boundaries in agricultural technology</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-700"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Sustainability</h3>
              <p>Committed to environmental stewardship</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-700"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p>Delivering the highest quality solutions</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;