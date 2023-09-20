import React from 'react';

const Menu = () => {
  return (
    <div className="bg-gray-100 p-4">
      <ul className="flex space-x-4">
        <li>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-800 transition duration-300"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-800 transition duration-300"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-800 transition duration-300"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-800 transition duration-300"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
