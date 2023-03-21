import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <section className="max-w-7xl mx-auto" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center mx-auto my-4 px-8">
        <div className="col-span-1 md:col-span-1">
          <Image
            src="/../public/assets/illustration.png"
            width="600"
            height="100"
            alt="hero_image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-1 md:col-span-1 p-8 text-center md:text-left">
          <h2 className="text-lg uppercase font-extrabold -mt-12 mb-16 text-indigo-800">
            Our Feature
          </h2>
          <h1 className="text-5xl sm:text-4xl font-extrabold -mt-12 mb-4">
            Managing business payments has never been easier
          </h1>
          <p className="text-lg text-gray-400 font-normal mb-4">
            Why kept very ever home mrs. Considered sympathize ten uncommonly
            occasional assistance sufficient not. Letter of on become he tended
            active enable to.
          </p>
          <div className="flex items-center justify-center md:justify-start space-x-4 md:mt-8">
            <button className="flex bg-indigo-800 hover:bg-indigo-700 text-white sm:py-2 px-4 rounded-md">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
