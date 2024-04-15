import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center h-16 items-center">
          {/* Menu button (hamburger icon) */}
          <div className="flex items-center">
            <div className="block lg:hidden">
              <button
                className="text-gray-400 hover:text-white focus:text-white focus:outline-none"
                onClick={toggleMenu}
              >
                <svg
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isOpen ? (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
          {/* Menu items */}
          <div className={`lg:flex lg:items-center lg:space-x-4 ${isOpen ? 'block' : 'hidden'} w-full lg:w-auto justify-center`}>
            <Link
              to="home"
              spy={true}
              smooth={true}
              className="text-gray-300 hover:text-gold hover:border-b-2 cursor-pointer block py-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              className="text-gray-300 hover:text-gold hover:border-b-2 cursor-pointer block py-2"
              onClick={toggleMenu}
            >
              Education
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              className="text-gray-300 hover:text-gold hover:border-b-2 cursor-pointer block py-2"
              onClick={toggleMenu}
            >
              Experience
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              className="text-gray-300 hover:text-gold hover:border-b-2 cursor-pointer block py-2"
              onClick={toggleMenu}
            >
              Skills
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              className="text-gray-300 hover:text-gold hover:border-b-2 cursor-pointer block py-2"
              onClick={toggleMenu}
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;