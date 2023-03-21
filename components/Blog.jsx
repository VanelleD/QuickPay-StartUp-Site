import React from "react";

const Blog = () => {
  return (
    <section className="max-w-7xl mx-auto my-20" id="blog">
      <div className="bg-indigo-100 rounded-md p-10">
        <div className=" flex flex-col items-center justify-center">
          <h2 className="text-lg uppercase font-extrabold text-indigo-800">
            Why Financy
          </h2>
          <h1 className="text-5xl sm:text-4xl font-extrabold">Why Choose Us</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8">
          <div className="flex justify-center">
            <div className="bg-white rounded-md flex py-4 px-6">
              <div className="bg-teal-100 rounded-full w-10 h-10"></div>
              <div className="ml-4 max-w-xs">
                <h1 className="text-2xl font-bold mb-2">No Extra Free</h1>
                <p className="text-lg">
                  End-to-end payments and financial management in a single
                  solution. Meet the right platform.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-white rounded-md flex py-4 px-6">
              <div className="bg-teal-100 rounded-full w-10 h-10"></div>
              <div className="ml-4 max-w-xs">
                <h1 className="text-2xl font-bold mb-2">No Extra Free</h1>
                <p className="text-lg">
                  End-to-end payments and financial management in a single
                  solution. Meet the right platform.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-white rounded-md flex py-4 px-6">
              <div className="bg-teal-100 rounded-full w-10 h-10"></div>
              <div className="ml-4 max-w-xs">
                <h1 className="text-2xl font-bold mb-2">No Extra Free</h1>
                <p className="text-lg">
                  End-to-end payments and financial management in a single
                  solution. Meet the right platform.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-white rounded-md flex py-4 px-6">
              <div className="bg-teal-100 rounded-full w-10 h-10"></div>
              <div className="ml-4 max-w-xs">
                <h1 className="text-2xl font-bold mb-2">No Extra Free</h1>
                <p className="text-lg">
                  End-to-end payments and financial management in a single
                  solution. Meet the right platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
