import React from "react";
import Image from "next/image";
import background from "../../../../public/B&T.jpg";

export default function AceessDetails({ params }) {
  console.log(params);
  return (
    <div className="relative h-[100vh] flex justify-center items-center">
      <Image
        src={background}
        alt="sdf"
        className="absolute blur-sm w-full h-[100vh] z-[-24]"
      />

      <div className="w-full h-[100px] bg-gray-200 bg-transparent flex justify-center items-center ">
        <h1 className="absolute text-6xl font-bold  flex justify-center items-center">
          {" "} 
          Welcome <span className="pl-2 uppercase text-[#c87d32]">{params.accessId}!</span>
        </h1>
      </div>
    </div>
  );
}
