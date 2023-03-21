import React from "react";

const Template = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="template">
      <div className="flex flex-col md:flex-row bg-indigo-100 px-8 sm:px-20 py-8 justify-center items-center mx-auto my-4 rounded-md">
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-lg uppercase font-extrabold text-indigo-800 mb-4 md:mb-2">
            Our Feature
          </h2>

          <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold mb-4 md:mb-2">
            Receive payments quickly from anywhere
          </h1>

          <p className="text-lg text-gray-400 font-normal leading-relaxed md:leading-normal">
            Why kept very ever home mrs. Considered sympathize ten uncommonly
            occasional assistance sufficient not. Letter of on become he tended
            active enable to.
          </p>
        </div>
        <div class="w-full md:w-1/2 flex justify-center items-center">
          <div class="w-full md:w-[60%] grid gap-4">
            <h2 class="text-lg uppercase font-extrabold text-indigo-800 mb-4 md:mb-2">
              Get Started
            </h2>
            <div class="grid grid-cols-1">
              <input
                class="block w-full px-4 py-3 placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm mb-2"
                placeholder="Email Address"
                type="text"
                name="search"
              />
              <input
                class="block w-full px-4 py-3 placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm mb-2"
                placeholder="Password"
                type="password"
                name="search"
              />
              <button class="w-full flex items-center justify-center bg-orange-800 hover:bg-orange-700 text-white font-semibold rounded-md py-3">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template;
