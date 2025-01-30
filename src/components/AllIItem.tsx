import Image from 'next/image';
import Mobiles from "../assets/Mobiles.png"

const AllIItem = () => {
  return (
    <div className="container mt-20">

      {/* Next.js Image Component */}
      <div className="relative w-64 h-64">
        <Image
          src={Mobiles}
          alt="Item"
          width={100}   // Aspect Ratio Width
          height={5}   // Aspect Ratio Height
          className="rounded-lg shadow-lg"
        />
        <p className='mt-2 font-bold text-fuchsia-700'>Mobiles</p>
      </div>
    </div>
  );
}

export default AllIItem;
