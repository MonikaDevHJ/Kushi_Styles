import React from "react";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full">
      {/* Navbar Container */}
      <div className=" flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

        {/* Left Side (Logo) */}
        <div className="text-2xl md:text-3xl font-bold text-fuchsia-700">
          Kushi Styles
        </div>

        {/* Search Bar (Centered on Medium & Large Screens, Below on Small Screens) */}
        <div className="w-full sm:w-auto sm:flex-1 sm:flex sm:justify-center order-2 sm:order-none mt-4">

          <div className="flex relative items-center rounded-md px-3 py-1 h-12  w-full sm:w-80 md:w-96 lg:w-[28rem]">
            <FaSearch className="text-gray-500 text-2xl absolute left-3 top-1/2 -translate-y-1/2 ml-4" />
            <input
              type="text"
              placeholder="Search"
              className="pl-12 pr-4 py-2 w-full focus:outline-none border-2 border-transparent hover:border-fuchsia-300 focus:border-fuchsia-300 hover:bg-fuchsia-100 focus:bg-fuchsia-200 text-lg rounded-2xl transition duration-300"
            />
  
          </div>
        </div>

        {/* Right Side (Profile & Cart Icons) */}
        <div className="flex items-center gap-36">
          <div className="flex gap-2">

            <FaUser className="text-3xl text-gray-600 cursor-pointer" />
            <p className="font-semibold text-fuchsia-700 mt-2">Profile</p>
          </div>
          <div className="flex gap-2">

            <FaShoppingCart className="text-3xl text-gray-600 cursor-pointer" />
            <p className="font-semibold text-fuchsia-700 mt-1"> cart</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
