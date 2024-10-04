// src/Components/Navbar.jsx

import React from 'react';
import { useState } from 'react';
import logo from "../../assets/images/aarambhlogo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent z-10 fixed w-full top-1 text-white p-4 shadow-md">
      <div className=" w-sreen flex md:justify-items-center justify-between md:items-center">
        <div className="justify-self-start w-16 mx-3 md:w-24">
          <img src={logo} className='w-full' alt="" />
        </div>

        {/* Menu icon for mobile */}
        <div className="md:hidden fixed right-10 m-1">
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
        <div className={`md:flex md:items-center font-Inter ${isOpen ? "block" : "hidden"}  w-full items-start text-center`}>
          <ul className="flex flex-col mr-[15%] md:mr-0 gap-6 md:gap-0 justify-evenly w-full md:flex-row md:space-x-6">
            <li>
              <a href="#" className="hover:text-green-500 text-2xl">About us</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500 text-2xl">Resources</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500 text-2xl">Events</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500 text-2xl">Contact us</a>
            </li>
            <li>
              <a href="#" className="border-white border-2 rounded-2xl text-white text-2xl px-4 rounded hover:bg-green-600">Join us</a>
            </li>
          </ul>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
