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

const Mobile = () => {
  const [selectedBrand, setSelectedBrand] = useState("All");

  const mobiles = [
    { name: "Vivo v29e", brand: "vivo", image: vivo1 },
    { name: "vivo v200", brand: "vivo", image: vivo2 },
    { name: "vivo v30", brand: "vivo", image: vivo3 },
    { name: "vivo v300", brand: "vivo", image: vivo4 },
    { name: "vivo y2", brand: "vivo", image: vivo5 },
    { name: "iphone 14", brand: "iphone", image: iphone1 },
    { name: "iPhone 14", brand: "Iphone", image: iphone4 },
    { name: "iPhone 13", brand: "Iphone", image: iphone3 },
    { name: "iPhone 12", brand: "Iphone", image: iphone2 },
    { name: "iPhone 11", brand: "Iphone", image: iphone1 }
  ];
  

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
            <select
              name=""
              id=""
              className="w-full p-2 border rounded mt-2"
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
            >
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

            <div className="mt-2">
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

          {/* grid for Mibile cards */}

          <div className="grid grid-cols-1 sm:grid-cols-1 md-grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Card 1 */}

            {mobiles.map((mobiles, index) => (
              <div key={index} className="bg-white p-4 shadow-md rounded-lg">
                <Image
                  src={mobiles.image}
                  alt={mobiles.name}
                  objectFit="contain"
                  className="rounded-lg shadow-md"
                  width={150}
                  height={150}
                />
                <p className="text-center mt-2 font-semibold">{mobiles.name}</p>
              </div>
            ))}
            {/* <div className="bg-white p-4 shadow-md rounded-lg">
              <Image
                src={vivo5}
                alt="uytf"
                objectFit="contain"
                className="rounded-lg shadow-md"
                width={150}
                height={150}
              />
              <p className="text-center mt-2 font-semibold">Vivo v29e</p>
            </div>

            <div className="bg-white p-4 shadow-md rounded-lg">
              <Image
                src={vivo1}
                alt="uytf"
                objectFit="contain"
                className="rounded-lg shadow-md"
                width={150}
                height={150}
              />
              <p className="text-center mt-2 font-semibold">Vivo 200</p>
            </div>

            <div className="bg-white p-4 shadow-md rounded-lg">
              <Image
                src={vivo2}
                alt="uytf"
                objectFit="contain"
                className="rounded-lg shadow-md"
                width={150}
                height={150}
              />
              <p className="text-center mt-2 font-semibold">Vivo 30</p>
            </div>

            <div className="bg-white p-4 shadow-md rounded-lg">
              <Image
                src={vivo3}
                alt="uytf"
                objectFit="contain"
                className="rounded-lg shadow-md"
                width={150}
                height={150}
              />
              <p className="text-center mt-2 font-semibold">Vivoy2</p>
            </div>
           
            <div className="bg-white p-4 shadow-md rounded-lg">
              <Image
                src={vivo4}
                alt="uytf"
                objectFit="contain"
                className="rounded-lg shadow-md"
                width={150}
                height={150}
              />
              <p className="text-center mt-2 font-semibold">Vivo v209e</p>
            </div>
           
            <div className="bg-white p-4 shadow-md rounded-lg">
              <Image
                src={iphone4}
                alt="uytf"
                objectFit="contain"
                className="rounded-lg shadow-md"
                width={150}
                height={150}
              />
              <p className="text-center mt-2 font-semibold">Vivo v209e</p>
            </div>
           
            <div className="bg-white p-4 shadow-md rounded  -lg">
              <Image
                src={iphone3}
                alt="uytf"
                objectFit="contain"
                className="rounded-lg shadow-md"
                width={150}
                height={150}
              />
              <p className="text-center mt-2 font-semibold">Vivo v209e</p>
            </div>
           
            <div className="bg-white p-4 shadow-md rounded-lg">
              <Image
                src={iphone2}
                alt="uytf"
                objectFit="contain"
                className="rounded-lg shadow-md"
                width={150}
                height={150}
              />
              <p className="text-center mt-2 font-semibold">Vivo v209e</p>
            </div>
        
            <div className="bg-white p-4 shadow-md rounded-lg">
              <Image
                src={iphone1}
                alt="uytf"
                objectFit="contain"
                className="rounded-lg shadow-md"
                width={150}
                height={150}
              />
              <p className="text-center mt-2 font-semibold">Vivo v209e</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
