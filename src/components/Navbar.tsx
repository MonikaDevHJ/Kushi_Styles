import React, { useState } from "react";
import Link from "next/link";

import {
  FaSearch,
  FaUser,
  FaShoppingCart,
  FaBars,
  FaTimes
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full fixed top-0 left-0 bg-white shadow-md z-50 h-[70px] sm:h-[80px] flex items-center">
      <div className="flex items-center justify-between w-full px-4 md:px-12 lg:px-14">
        {/* Left Side (Logo) */}
        <div className="text-2xl md:text-3xl font-bold text-fuchsia-700">
          <Link href="/" className="no-underline text-fuchsia-700">
            Kushi Styles
          </Link>
        </div>

        {/* Search Bar (Hidden on small screens) */}
        <div className="hidden sm:flex justify-center">
          <div className="flex relative items-center w-80 md:w-96 lg:w-[28rem]">
            <FaSearch className="text-gray-500 text-xl absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 w-full focus:outline-none border-2 border-fuchsia-200 hover:border-fuchsia-300 focus:border-fuchsia-300 hover:bg-fuchsia-100 focus:bg-fuchsia-200 text-lg rounded-2xl transition duration-300"
            />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-6">
          <div className="flex items-center gap-2">
            <FaUser className="text-2xl text-gray-600 cursor-pointer" />
            <p className="hidden sm:block font-semibold text-fuchsia-700">
              Profile
            </p>
          </div>

          <div className="flex items-center gap-2">
            <FaShoppingCart className="text-2xl text-gray-600 cursor-pointer" />
            <p className="hidden sm:block font-semibold text-fuchsia-700">
              Cart
            </p>
          </div>

          <button className="px-6 py-2 bg-fuchsia-700 text-white font-semibold rounded-full hover:bg-fuchsia-600 transition duration-300">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-2xl text-fuchsia-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-white shadow-md flex flex-col items-center py-4 sm:hidden">
          <div className="flex items-center gap-2 py-2">
            <FaUser className="text-2xl text-gray-600" />
            <p className="font-semibold text-fuchsia-700">Profile</p>
          </div>

          <div className="flex items-center gap-2 py-2">
            <FaShoppingCart className="text-2xl text-gray-600" />
            <p className="font-semibold text-fuchsia-700">Cart</p>
          </div>

          <button className="px-6 py-2 bg-fuchsia-700 text-white font-semibold rounded-full hover:bg-fuchsia-600 transition duration-300">
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
