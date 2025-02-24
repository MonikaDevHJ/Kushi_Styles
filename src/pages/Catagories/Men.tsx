import React, { useState } from "react";
import Image from "next/image";
import vivo1 from "../../assets/vivo1.png";
import vivo2 from "../../assets/vivo2.png";
import vivo3 from "../../assets/vivo3.png";
import vivo4 from "../../assets/vivo4.png";
import vivo5 from "../../assets/vivo5.png";
import iphone1 from "../../assets/iphone1.png";
import iphone2 from "../../assets/iphone2.png";
import iphone3 from "../../assets/iphone3.png";
import iphone4 from "../../assets/iphone4.png";

const Men = () => {
  const [selectedBrand, setSelectedBrand] = useState("All Brands");

  const mobiles = [
    { name: "Vivo v29e", brand: "Vivo", image: vivo1, price: 2999 },
    { name: "vivo v200", brand: "Vivo", image: vivo2, price: 4999 },
    { name: "vivo v30", brand: "Vivo", image: vivo3, price: 7999 },
    { name: "vivo v300", brand: "Vivo", image: vivo4, price: 8999 },
    { name: "vivo y2", brand: "Vivo", image: vivo5, price: 2999 },
    { name: "iPhone 14", brand: "Iphone", image: iphone1, price: 2599 },
    { name: "iPhone 14", brand: "Iphone", image: iphone4, price: 2999 },
    { name: "iPhone 13", brand: "Iphone", image: iphone3, price: 3599 },
    { name: "iPhone 12", brand: "Iphone", image: iphone2, price: 3999 },
    { name: "iPhone 11", brand: "Iphone", image: iphone1, price: 9999 }
  ];

  // ✅ Filter mobiles based on selected brand
  const filteredMobiles =
    selectedBrand === "All Brands"
      ? mobiles
      : mobiles.filter(
          (mobile) => mobile.brand.toLowerCase() === selectedBrand.toLowerCase()
        );

  return (
    <div className="mt-10 p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Left Column - Filters */}
        <div className="md:col-span-1 bg-gray-200 p-4">
          <p className="text-black text-2xl md:text-3xl font-bold">Filters</p>

          {/* Dropdown For Brands */}
          <div className="mb-4">
            <label className="block text-black font-medium">
              Select Brand:
            </label>
            <select
              className="w-full p-2 border rounded mt-2"
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
            >
              <option value="All Brands">All Brands</option>
              <option value="Vivo">Vivo</option>
              <option value="Iphone">Iphone</option>
              <option value="OnePlus">OnePlus</option>
              <option value="Redmi">Redmi</option>
              <option value="Samsung">Samsung</option>
              <option value="Oppo">Oppo</option>
            </select>
          </div>

          {/* Checkbox Filters */}
          <div>
            <p className="font-medium">Select Features:</p>
            <div className="mt-2 space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 accent-blue-500" />
                Curve Display
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 accent-blue-500" />
                AMOLED Display
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 accent-blue-500" />
                Fast Charging
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 accent-blue-500" />
                120Hz Refresh Rate
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 accent-blue-500" />
                Red Color
              </label>
            </div>
          </div>
        </div>

        {/* Right Column - Mobiles */}
        <div className="md:col-span-2 lg:col-span-3 bg-gray-200 p-4">
          <p className="text-black text-2xl md:text-3xl font-bold">Mobiles</p>

          {/* Grid for Mobile Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
            {filteredMobiles.length > 0 ? (
              filteredMobiles.map((mobile, index) => (
                <div
                  key={index}
                  className="bg-white p-4 shadow-md rounded-lg relative"
                >
                  {/* Wishlist Heart Icon Button */}
                  <button className="absolute top-2 right-2 text-2xl text-gray-500">
                    🤍
                  </button>

                  <Image
                    src={mobile.image}
                    alt={mobile.name}
                    objectFit="contain"
                    className="rounded-lg shadow-md"
                    width={150}
                    height={150}
                  />
                  <p className="text-center mt-2 font-semibold">
                    {mobile.name}
                  </p>
                  <p className="text-center mt-2 font-semibold">
                      ₹{mobile.price}
                    </p>

                  {/* Price and Add to Cart Section */}
                  <div className="flex justify-between items-center mt-8">
                   
                    <button className="bg-fuchsia-700 text-white px-1 py-1   rounded-md font-bold hover:bg-fuchsia-500 transition duration-300">
                      Buy Now
                    </button>
                    <button className="bg-fuchsia-700 text-white px-1 py-1   rounded-md font-bold hover:bg-fuchsia-500 transition duration-300">
                      Add To Cart
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center col-span-full text-red-500">
                No mobiles found for this brand.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Men;
