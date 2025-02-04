import React from "react";
import Image, { StaticImageData } from "next/image";
import beautyproductsales from "../assets/beautyproductsales.png";
import GrocerySale from "../assets/GrocerySale (1).png";
import mensdressales from "../assets/mensdressales.png";
import MobileSales from "../assets/MobileSales.png";
import Womensdressales from "../assets/Womensdressales.png";

const images = [
  beautyproductsales,
  GrocerySale,
  mensdressales,
  MobileSales,
  Womensdressales
];

const Offersitems = () => {
  return (
    <div className="mt-20">
      <div className="grid grid-cols-6">
        {images.map((img , index)=>(
         <div key={index}  className="">
            <Image
            src ={img}
            alt = {`Image ${index + 1}`}
            height={125}
            width={125}
            className="rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-110"
            />

         </div> 
        ))}
       
      </div>
    </div>
  );
};

export default Offersitems;
