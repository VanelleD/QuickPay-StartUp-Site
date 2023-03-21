import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="items-center mx-auto -mt-10 mb-20 px-8">
        <div className="flex items-center justify-center ">
          <h1 className="font-semibold text-center">
            Over 32k+ software businesses growing with Akem Vanelle
          </h1>
        </div>

        <div className="flex flex-wrap justify-center sm:justify-evenly my-5">
          <div className="mx-2 my-2">
            <Image
              src="/../public/assets/Group.png"
              alt="logo"
              width="130"
              height="130"
            />
          </div>
          <div className="mx-2 my-2">
            <Image
              src="/../public/assets/Group2.png"
              alt="logo"
              width="130"
              height="130"
            />
          </div>
          <div className="mx-2 my-2">
            <Image
              src="/../public/assets/Group3.png"
              alt="logo"
              width="130"
              height="130"
            />
          </div>
          <div className="mx-2 my-2">
            <Image
              src="/../public/assets/Vector.png"
              alt=""
              width="130"
              height="130"
            />
          </div>
          <div className="mx-2 my-2">
            <Image
              src="/../public/assets/Vector2.png"
              alt="logo"
              width="130"
              height="130"
            />
          </div>
          <div className="mx-2 my-2">
            <Image
              src="/../public/assets/Vector3.png"
              alt="logo"
              width="130"
              height="130"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
