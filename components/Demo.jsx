import React from "react";

const Template = () => {
  return (
    <section className="w-full bg-indigo-700 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6" id="template">
        <div className="flex flex-col mt-10 md:flex-row  px-8 sm:px-20 py-8 justify-center items-center mx-auto rounded-md">
          <div className="grid gap-5 w-full md:w-1/2 md:text-left">
            <h2 className="text-sm uppercase font-bold text-white mb-4 md:mb-2">
              WHY CHOOSE US
            </h2>

            <h1 className="text-5xl text-white sm:text-4xl md:text-5xl lg:text-5xl font-extrabold mb-4 md:mb-2">
              Track your crytpo portfolio on the best way possible.
            </h1>

            <p className="text-lg text-white font-normal leading-relaxed md:leading-normal">
              End-to-end payments and financial management in a single solution.
              Meet the right platform to help realize.
            </p>
          </div>
          <div class="w-full md:w-1/2 flex justify-center items-center">
            <div class="w-full md:w-[60%] grid gap-4">
              <div class="grid grid-cols-1 gap-3">
                <input
                  class="block w-full bg-indigo-400 px-4 py-3 placeholder-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm mb-2"
                  placeholder="Email Address"
                  type="text"
                  name="search"
                />
                <input
                  class="block w-full px-4 py-3 bg-indigo-400 placeholder-indigo-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm mb-2"
                  placeholder="Password"
                  type="password"
                  name="search"
                />
                <button class="w-full flex items-center justify-center bg-orange-700 hover:bg-orange-600 text-white font-semibold rounded-md py-3">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Template;
