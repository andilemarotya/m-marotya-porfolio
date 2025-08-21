import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center h-16 items-center">
          {/* Menu button (hamburger) */}
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
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Menu items */}
          <div
            className={`lg:flex lg:items-center lg:space-x-4 ${
              isOpen ? "block" : "hidden"
            } w-full lg:w-auto justify-center`}
          >
            <HashLink
              smooth
              to="/#profile"
              className="text-gray-300 hover:text-gold hover:border-b-2 cursor-pointer block py-2"
              onClick={toggleMenu}
            >
              Home
            </HashLink>
            <HashLink
              smooth
              to="/#education"
              className="text-gray-300 hover:text-gold hover:border-b-2 cursor-pointer block py-2"
              onClick={toggleMenu}
            >
              Education
            </HashLink>
            <HashLink
              smooth
              to="/#experience"
              className="text-gray-300 hover:text-gold hover:border-b-2 cursor-pointer block py-2"
              onClick={toggleMenu}
            >
              Experience
            </HashLink>
            <HashLink
              smooth
              to="/#skills"
              className="text-gray-300 hover:text-gold hover:border-b-2 cursor-pointer block py-2"
              onClick={toggleMenu}
            >
              Skills
            </HashLink>
            <HashLink
              smooth
              to="/#projects"
              className="text-gray-300 hover:text-gold hover:border-b-2 cursor-pointer block py-2"
              onClick={toggleMenu}
            >
              Projects
            </HashLink>
            <HashLink
              smooth
              to="/#contact"
              className="text-gray-300 hover:text-gold hover:border-b-2 cursor-pointer block py-2"
              onClick={toggleMenu}
            >
              Contact
            </HashLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
