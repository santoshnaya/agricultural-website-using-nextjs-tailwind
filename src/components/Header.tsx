'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white fixed w-full h-[80px] items-center flex top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo.png"
                          alt="Agricultural Logo"
                        className="rounded-full"
              priority
              width={40}
              height={40}
            //   className="object-contain"
            />
            <span className="text-2xl font-bold text-green-700">AgriTech</span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-600 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 text-xl font-bold hover:text-green-600 transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 text-xl font-bold hover:text-green-600 transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-gray-700 text-xl font-bold hover:text-green-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 text-xl font-bold hover:text-green-600 transition-colors">
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:hidden mt-4 bg-white rounded-lg shadow-lg absolute left-0 right-0 px-4 py-2`}
        >
          <div className="flex flex-col space-y-3">
            <Link
              href="/"
              className="text-gray-700 hover:text-green-600 transition-colors py-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-green-600 transition-colors py-2"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-green-600 transition-colors py-2"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-green-600 transition-colors py-2"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;