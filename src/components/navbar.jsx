import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 sticky top-0 z-50">
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
            <a
              href="#profile"
              className="text-gray-300 hover:text-gold hover:border-b-2 cursor-pointer block py-2"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#education"
              className="text-gray-300 hover:text-gold hover:border-b-2 cursor-pointer block py-2"
              onClick={toggleMenu}
            >
              Education
            </a>
            <a
              href="#experience"
              className="text-gray-300 hover:text-gold hover:border-b-2 cursor-pointer block py-2"
              onClick={toggleMenu}
            >
              Experience
            </a>
            <a
              href="#skills"
              className="text-gray-300 hover:text-gold hover:border-b-2 cursor-pointer block py-2"
              onClick={toggleMenu}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-gold hover:border-b-2 cursor-pointer block py-2"
              onClick={toggleMenu}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-gold hover:border-b-2 cursor-pointer block py-2"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;