import React from "react";

const Mobile = () => {
  return (
    <div className="mt-10 p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Left Column - Filters */}
        <div className="md:col-span-1 bg-gray-200 p-4">
          <p className="text-black text-2xl md:text-3xl font-bold">Filters</p>
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
