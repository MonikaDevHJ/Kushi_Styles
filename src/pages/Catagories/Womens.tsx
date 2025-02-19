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
 return(
  <div className="mt-10 p-4">
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 border">
    
    {/* left side filter */}
    <div className="">
     <p className="text-black text-2xl md:text-3xl font-bold">Filters</p>

     <div className="">
      <p className="block text-black font-medium">Select Brands</p>

      {/* Drop Down */}
      <select name="" id=""></select>

     </div>
    </div>

    {/* right side images */}
    <div className="">
    <p>iuytredfgh</p>
    </div>
    </div>
  </div>
 )
};

export default Mobile;
