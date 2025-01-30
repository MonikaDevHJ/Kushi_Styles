import React from "react";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="">
      <div className="px-20 py-4 gap-20 flex ">
        <div className="">
          <p className="text-3xl font-bold text-fuchsia-700">Kushi Styles</p>
        </div>

        <div className="flex items-center rounded-md px-3 py-1  h-10 w-96">
          <div>
            <FaSearch className="text-gray-500 text-2xl  w-auto" />
          </div>
          <div>
            <input
              type="text"
              placeholder="Search"
              className="pl-2 focus:outline-none text-4xl "
            />
          </div>
        </div>


      </div>
    </div>
  );
};

export default Navbar;
