import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoClose, IoRocket, IoMenu } from 'react-icons/io5';
import { LuTent } from 'react-icons/lu';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900/90 backdrop-blur-md fixed w-full z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-white">
            <LuTent className="h-8 w-8" />
            <span className="text-2xl font-bold">AstroStops</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/properties"
              className="text-white hover:text-blue-400 transition"
            >
              Properties
            </Link>
            <Link
              to="/Blog"
              className="text-white hover:text-blue-400 transition"
            >
              Blog
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-blue-400 transition"
            >
              About
            </Link>
            <Link
              to="/signup"
              className="flex items-center space-x-3 bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-all duration-300 ease-in-out transform hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              <IoRocket className="h-6 w-6 text-white" />
              <span className="text-lg font-semibold">Sign Up</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <IoClose className="h-6 w-6" />
            ) : (
              <IoMenu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/properties"
                className="text-white hover:text-blue-400 transition"
                onClick={() => setIsOpen(false)}
              >
                Properties
              </Link>
              <Link
                to="/blog"
                className="text-white hover:text-blue-400 transition"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/about"
                className="text-white hover:text-blue-400 transition"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/signup"
                className="flex items-center space-x-3 bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-all duration-300 ease-in-out transform hover:scale-105"
                onClick={() => setIsOpen(false)}
              >
                <IoRocket className="h-6 w-6 text-white" />
                <span className="text-lg font-semibold">Sign Up</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
