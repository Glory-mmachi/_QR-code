import React from "react";
import Image from "next/image";
import background from "../../../../public/B&T.jpg";

export default function AceessDetails({ params }) {
  console.log(params);
  return (
    <>
      <div className="relaive h-[100vh] overflow-y-hidden flex justify-center items-top">
        <Image
          src={background}
          alt="sdf"
          className="absolute z-[-24]"
          fill={true}
          style={{ objectFit: "contain", objectPosition: "center" }}
        />

        <div className="w-full h-[100px] bg-gray-100 text-gray-400 bg-transparent flex justify-center items-center ">
          <h1 className="absolute text-2xl md:text-6xl font-bold  flex justify-center items-center">
            {" "}
            Welcome{" "}
            <span className="pl-2 uppercase text-[#db944c]">
              {params.accessId}!
            </span>
          </h1>
        </div>
      </div>
    </>
  );
}
