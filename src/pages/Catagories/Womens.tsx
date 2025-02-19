import React, { useState } from "react";
import Image from "next/image";
import Kurta1 from "../../assets/Kurta1.png";
import Kurta2 from "../../assets/Kurta2.png";
import Kurta3 from "../../assets/Kurta3.png";
import Kurta4 from "../../assets/Kurta4.png";
import Kurta5 from "../../assets/Kurta5.png";
import Kurta6 from "../../assets/Kurta6.png";
import Kurta7 from "../../assets/Kurta5.png";

const Mobile = () => {
  return (
    <div className="mt-10 p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 border">
        {/* left side filter */}
        <div className="">
          <p className="text-black text-2xl md:text-3xl font-bold">Filters</p>

          <div className="mt-3">
            <p className="block text-black font-medium">Select Brands</p>

            {/* Drop Down */}
            <select className="w-full p-2 border rounded mt-2" name="" id="">
              <option value="Kurties">Cotton</option>
              <option value="Kurties">Welvet</option>

              <option value="Kurties">Jeans</option>

            </select>

            {/* Check box filter */}
            <div className="">
              <p className="mt-5">Select Filter</p>
                <div className="mt-2  space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 accent-blue-500" />
                Kurties
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 accent-blue-500" />
                Jeans
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 accent-blue-500" />
                Tops
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 accent-blue-500" />
                Gown
              </label>
              </div>
            </div>
          </div>
        </div>

        {/* right side images */}
        <div className="">
          <p className="">Dreses</p>
          <div className="">

          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
