import React, { useState } from "react";

const Mobile = () => {
  const [showBrands, setShowBrands] = useState(true);
  const [showPrice, setShowPrice] = useState(false);

  return (
    <div className="mt-10 p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Left Column - Filters */}
        <div className="md:col-span-1 bg-white shadow-lg rounded-lg p-4">
          <p className="text-black text-2xl md:text-3xl font-bold mb-4">Filters</p>

          {/* Category Dropdown */}
          <div className="mb-4">
            <label className="block font-bold text-gray-700 mb-2">Category</label>
            <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option>All Mobiles</option>
              <option>Smartphones</option>
              <option>Feature Phones</option>
            </select>
          </div>

          {/* Brand Filter - Checkbox */}
          <div className="mb-4 border-b pb-3">
            <button
              className="w-full text-left font-bold text-gray-700 flex justify-between"
              onClick={() => setShowBrands(!showBrands)}
            >
              Brand
              <span>{showBrands ? "▲" : "▼"}</span>
            </button>
            {showBrands && (
              <div className="mt-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" /> Samsung
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" /> Apple
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" /> OnePlus
                </label>
              </div>
            )}
          </div>

          {/* Price Range Filter - Checkbox */}
          <div className="mb-4">
            <button
              className="w-full text-left font-bold text-gray-700 flex justify-between"
              onClick={() => setShowPrice(!showPrice)}
            >
              Price Range
              <span>{showPrice ? "▲" : "▼"}</span>
            </button>
            {showPrice && (
              <div className="mt-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" /> ₹10,000 - ₹20,000
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" /> ₹20,000 - ₹30,000
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" /> ₹30,000 - ₹50,000
                </label>
              </div>
            )}
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
