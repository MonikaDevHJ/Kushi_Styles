import React from "react";

const Mobile = () => {
  return (
    <div className="mt-10 p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Left Column - Filters */}
        <div className="md:col-span-1 bg-gray-200 p-4">
          <p className="text-black text-2xl md:text-3xl font-bold">Filters</p>

          {/* Dropdown For Categories */}
          <div className="mb-4">
            <label className="block text-black font-medium">
              Select Brand:
            </label>
            <select name="" id="" className="w-full p-2 border rounded mt-2">
              <option value="">All Brands</option>
              <option value="Vivo">Vivo</option>
              <option value="Iphone">Iphone</option>
              <option value="OnePlus">OnePlus</option>
              <option value="Redmi">Redmi</option>
              <option value="Samsung">Samsung</option>
              <option value="opppo">opppo</option>
            </select>
          </div>
          {/* Dropdown for Categories */}
          <div className="">
            <p className="Select Featuries">Select Features :</p>

            <div className="">
              <p className=" flex">
                <input type="checkbox" className="mr-2 accent-blue-500" />
                <span>Curve Display</span>
              </p>

              <p className="flex">
                <input type="checkbox" className="mr-2 accent-blue-500" />
                <span>AMOLED Display</span>
              </p>

              <p className="flex">
                <input type="checkbox" className="mr-2 accent-blue-500" />
                <span>Fast Charging</span>
              </p>

              <p className="flex">
                <input type="checkbox" className="mr-2 accent-blue-500" />
                <span>120Hz Refresh Rate</span>
              </p>

              <p className="flex">
                <input type="checkbox" className="mr-2 accent-blue-500" />
                <span>Red Color</span>
              </p>

             
            </div>
          </div>
        </div>

        {/* Right Column - Mobiles */}
        <div className="md:col-span-2 lg:col-span-3 bg-gray-200 p-4">
          <p className="text-black text-2xl md:text-3xl font-bold">Mobiles</p>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
