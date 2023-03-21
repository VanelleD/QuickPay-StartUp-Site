import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineDown } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const [isProductOpen, setIsProductOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto shadow-sm sticky top-0">
      <div className="  flex justify-between items-center py-4 px-6 bg-white">
        <div className="flex items-center text-xl font-bold h-16">
          <Link href="/">Quick-Pay</Link>
        </div>
        <div>
          <ul className="hidden md:flex">
            <Link href="#about">
              <li
                className="relative ml-10 hover:text-indigo-900 hover:border-b cursor-pointer"
                onClick={() => setIsProductOpen(!isProductOpen)}
              >
                Product <AiOutlineDown className="inline-block ml-1" />
                {isProductOpen && (
                  <ul className="absolute top-10 left-0 bg-white shadow-lg py-2 px-4">
                    <li>
                      <Link href="/">
                        <li className="hover:text-indigo-900">Feature 1</li>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <li className="hover:text-indigo-900">Feature 2</li>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </Link>
            <Link href="#about">
              <li
                className="relative ml-10 hover:text-indigo-900 hover:border-b cursor-pointer"
                onClick={() => setIsProductOpen(!isProductOpen)}
              >
                Template <AiOutlineDown className="inline-block ml-1" />
                {isProductOpen && (
                  <ul className="absolute top-10 left-0 bg-white shadow-lg py-2 px-4">
                    <li>
                      <Link href="/">
                        <li className="hover:text-indigo-900">Feature 1</li>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <li className="hover:text-indigo-900">Feature 2</li>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </Link>
            <Link href="#blog">
              <li className="ml-10 hover:text-indigo-900  hover:border-b">
                Blog
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 hover:text-indigo-900  hover:border-b">
                Pricing
              </li>
            </Link>
          </ul>
        </div>
        <div className="hidden md:flex items-center list-none sm:space-x-8">
          <Link href="/">
            <li className="text-lg md:text-base lg:text-lg hover:text-indigo-900">
              Sign In
            </li>
          </Link>

          <button className="flex bg-indigo-800 hover:bg-indigo-700 text-white py-2 px-4 sm:px-6 lg:px-8 rounded-lg">
            <span className="hidden sm:inline">Start Free</span>
            <span className="inline sm:hidden">Free</span>
          </button>
        </div>
        <div className="md:hidden cursor-pointer" onClick={handleNav}>
          <AiOutlineMenu size={25} />
        </div>
      </div>

      {/* Mobile View */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center text-xl font-bold h-16 cursor-pointer">
              <Link href="/">Quick-Pay</Link>
            </div>
            <div
              onClick={handleNav}
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
            >
              <AiOutlineClose />
            </div>
          </div>

          <div className="border-b border-gray-300 my-4">
            <p className="w-[85%] md:w-[90%] py-4 font-semibold">
              Manage your business payments
            </p>
          </div>
          <div className="py-4 flex flex-col">
            <ul>
              <Link href="/">
                <li className="text-sm py-4 hover:text-indigo-900 hover:border-b">
                  Product
                </li>
              </Link>
              <Link href="#template">
                <li className="text-sm py-4 hover:text-indigo-900 hover:border-b">
                  Template
                </li>
              </Link>
              <Link href="#blog">
                <li className="text-sm py-4 hover:text-indigo-900  hover:border-b">
                  Blog
                </li>
              </Link>
              <Link href="/">
                <li className="text-sm py-4 hover:text-indigo-900  hover:border-b">
                  Pricing
                </li>
              </Link>
            </ul>
            <div className="flex items-center justify-evenly my-8 sm:w-[80%]">
              <Link href="/">
                <li
                  className="font-bold list-none rounded-full shadow-lg shadow-gray-300 
                hover:scale-105 ease-in duration-300 p-3  hover:text-indigo-900 "
                >
                  Sign In
                </li>
              </Link>
              <button
                className="font-bold rounded-full shadow-lg shadow-gray-300 
                hover:scale-105 ease-in duration-300 p-3  hover:text-indigo-900"
              >
                Start Free
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
