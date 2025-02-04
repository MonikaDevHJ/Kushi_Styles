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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {images.map((img, index) => (
          <div key={index} className="relative w-full max-w-[150px] sm:max-w-[180px] md:max-w-[200px] aspect-square">
            <Image
              src={img}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offersitems;
