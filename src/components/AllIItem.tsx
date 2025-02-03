import Image, { StaticImageData } from "next/image";
import Mobiles from "../assets/Mobiles.png";
import WomensDress from "../assets/WomensDress.png";
import Men from "../assets/men.png";
import Kids from "../assets/Kids.png";
import Gifts from "../assets/Gifts.png";
import Groccery from "../assets/Groccery.png";
import Beauty from "../assets/Beauty.png";

// Define the type for each item
type Item = {
  src: StaticImageData;
  name: string;
};

const items: Item[] = [
  { src: Mobiles, name: "Mobiles" },
  { src: WomensDress, name: "Women's Dress" },
  { src: Men, name: "Men's Fashion" },
  { src: Kids, name: "Kids Wear" },
  { src: Gifts, name: "Gifts" },
  { src: Groccery, name: "Groceries" },
  { src: Beauty, name: "Beauty Products" },
];

const AllIItem: React.FC = () => {
  return (
    <div className="container mx-auto mt-14 px-4">
      {/* Align heading to the left */}
      <h1 className="text-3xl font-bold text-left mb-6 text-fuchsia-700">Categories</h1>

      {/* Grid layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-7 gap-6 sm:gap-8 md:gap-24 lg:gap-14 ">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Image container with hover zoom effect */}
            <div className="w-20 h-20 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-44 lg:h-44 relative group">
              <Image
                src={item.src}
                alt={item.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-110" // Apply zoom on hover
              />
            </div>
            {/* Image name */}
            <p className="mt-2 font-bold text-fuchsia-700 text-lg">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllIItem;
