import React from "react";
import Image, { StaticImageData } from "next/image";
import beautyproductsales from "../assets/beautyproductsales.png";
import GrocerySale from "../assets/GrocerySale (1).png";
import mensdressales from "../assets/mensdressales.png";
import MobileSales from "../assets/MobileSales.png";
import Womensdressales from "../assets/Womensdressales.png";

const images: StaticImageData[] = [
  beautyproductsales,
  GrocerySale,
  mensdressales,
  MobileSales,
  Womensdressales
];

const Offersitems: React.FC = () => {
  return (
    <div className="mt-20 px-4">
      <div>
        <p className="text-3xl font-bold text-left mb-6 text-fuchsia-700">Today's Offers</p>
      </div>
      <div className="scroll-wrapper">
        <div className="scroll-container">
          {/* Repeat images twice for continuous looping effect */}
          {images.concat(images).map((img, index) => (
            <div key={index} className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80">
              <Image
                src={img}
                alt={`Image ${index + 1}`}
                layout="intrinsic"
                width={200}
                height={200}
                objectFit="contain"
                className="rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offersitems;
