import Image from "next/image";
import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";

const Header = () => {
  return (
    <header id="home" className="justify-center max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center mx-auto my-8 px-8">
        <div className="col-span-1 md:col-span-1 p-8 text-center md:text-left">
          <h1 className="text-6xl font-extrabold -mt-12 mb-8">
            Managing business payments has never been easier
          </h1>
          <p className="text-xl font-normal mb-4">
            End-to-end payments and financial management in a single solution.
            Meet the right platform to help realize.
          </p>
          <div className="flex items-center justify-center md:justify-start space-x-4 md:mt-8">
            <button className="flex bg-indigo-800 hover:bg-indigo-700 text-white sm:py-2 px-4 rounded-full">
              Get Started
            </button>
            <button className=" flex justify-center items-center py-2 px-4 rounded mr-4 text-indigo-800">
              <AiFillPlayCircle className="hover:animate-bounce text-teal-500 w-10 h-10 mr-2" />
              <span className="mr-2">See How It Works</span>
            </button>
          </div>
        </div>

        <div className="col-span-1 md:col-span-1">
          <Image
            src="/../public/assets/hero.png"
            width="600"
            height="100"
            alt="hero_image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
