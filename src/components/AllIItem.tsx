import React, { useState } from "react";
import { FaUser, FaShoppingCart, FaBars } from "react-icons/fa"; // Icons
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left - Logo */}
        <Link href="/">
          <p className="text-2xl font-bold text-fuchsia-700">Kushi-Styles</p>
        </Link>

        {/* Center - Search Bar (Hidden on Small Screens) */}
        <div className="hidden md:flex w-1/3">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
          />
        </div>

        {/* Right - Icons */}
        <div className="flex items-center space-x-4">
          <FaUser className="text-gray-800 text-xl cursor-pointer" />
          <FaShoppingCart className="text-gray-800 text-xl cursor-pointer" />
          {/* Hamburger Icon (Mobile Menu) */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <FaBars className="text-gray-800 text-xl" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md p-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border rounded-md mb-3 focus:outline-none"
          />
          <div className="flex flex-col space-y-3">
            <Link href="/" className="text-gray-800">
              Home
            </Link>
            <Link href="/profile" className="text-gray-800">
              Profile
            </Link>
            <Link href="/cart" className="text-gray-800">
              Cart
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

