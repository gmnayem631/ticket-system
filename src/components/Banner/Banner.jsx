import React from "react";
import vector1 from "../../assets/vector1.png";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto mt-20">
      <div className="flex gap-4 h-62">
        <div
          className="bg-blue-500 w-1/2 rounded-lg h-auto flex flex-col justify-center items-center"
          style={{ backgroundImage: `url(${vector1})` }}
        >
          <h3 className="text-2xl font-semibold text-white">In-Progress</h3>
          <p className="font-bold text-white text-6xl">0</p>
        </div>
        <div
          className="bg-green-500 w-1/2 rounded-lg h-auto flex flex-col justify-center items-center"
          style={{ backgroundImage: `url(${vector1})` }}
        >
          <h3 className="text-2xl font-semibold text-white">Resolved</h3>
          <p className="font-bold text-white text-6xl">0</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
