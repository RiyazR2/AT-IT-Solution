import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white shadow-xl sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-12 relative">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img
              src={logo}
              alt="AT IT Solution"
              className="h-14 w-14 rounded-full border-4 border-yellow-400 shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300"
            />
          </Link>
          <h1 className="text-3xl font-extrabold tracking-wide uppercase hover:text-yellow-300 transition-colors duration-300">
            AT IT Solution
          </h1>
        </div>

        {/* Desktop Navigation Links */}
        <ul className=" md:flex space-x-8 text-lg font-medium">
          <li>
            <Link
              to="/"
              className="hover:text-yellow-300 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-yellow-300 transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-yellow-300 transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Call-to-Action Button */}
        <Link
          to="/contact"
          className=" md:inline-block bg-yellow-400 text-blue-800 px-5 py-2 rounded-full font-semibold shadow-lg hover:bg-yellow-300 hover:scale-110 transition-transform duration-300"
        >
          Get in Touch
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="bg-yellow-400 text-blue-800 px-4 py-2 rounded-full font-semibold shadow-lg hover:bg-yellow-300 hover:rotate-180 transition-transform duration-300"
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 shadow-lg rounded-b-lg md:hidden">
            <ul className="flex flex-col items-center space-y-4 py-6 text-lg font-medium">
              <li>
                <Link
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-yellow-300 transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-yellow-300 transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-yellow-300 transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
