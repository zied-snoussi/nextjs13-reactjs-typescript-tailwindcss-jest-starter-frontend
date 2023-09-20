import React from 'react';

const Menu = () => {
  return (
    <nav className="bg-gray-900 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">My App</div>
        <ul className="flex space-x-4">
          <li>
            <a
              href="/"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/services"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
