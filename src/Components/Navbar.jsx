// src/Components/Navbar.jsx

import React from 'react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-2xl font-bold">Aarambh</div>
        </div>

        {/* Menu icon for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <div className={`md:flex md:items-center ${isOpen ? "block" : "hidden"} md:block`}>
          <ul className="flex flex-col md:flex-row md:space-x-6">
            <li>
              <a href="#" className="hover:text-green-500">About us</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500">Resources</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500">Events</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500">Contact us</a>
            </li>
            <li>
              <a href="#" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Join us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
