import Image from "next/image";
import React from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";

const Testimonials = () => {
  return (
    <section className="max-w-7xl mx-auto mt-20" id="about">
      <div className="justify-items-center items-center mx-auto my-4 px-8">
        <div>
          <h5 className="text-sm text-indigo-800 font-bold">TESTIMONIALS</h5>
          <h2 className="text-4xl sm:text-3xl text-left font-black">
            Check what our clients are saying
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center">
          <div className="w-full sm:w-3/5 grid gap-2 mt-10">
            <Image
              src="/../public/assets/testimonial1.png"
              layout="responsive"
              height={500}
              width={500}
              alt="testimonial"
            />
            <div className="flex items-center cursor-pointer mt-5">
              <BsArrowLeft className="bg-indigo-900 rounded-full p-1 h-8 w-8 text-white" />
              <BsArrowRight className="ml-3 w-5 h-5" />
            </div>
          </div>
          <div className="w-full sm:w-1/2 grid gap-4 mt-8 sm:mt-0 ml-20 flex-shrink-0">
            <Image
              src="/../public/assets/semi.png"
              width={20}
              height={20}
              alt="quote"
            />
            <h1 className="text-md sm:text-lg font-bold">
              Save Time Managing Social <br /> Media For Your Business
            </h1>
            <p className="text-gray-400">
              Is be upon sang fond must shew. Really boy law county she unable
              her sister. Feet you off its like like six. Among sex are leave
              law built now. In built table in an rapid blush. Merits behind on
              afraid or warmly.
            </p>
            <p className="text-gray-400">
              Believing neglected so so allowance existence departure in. In
              design active temper be uneasy.{" "}
            </p>
            <div className="flex">
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </div>
            <p className="text-sm sm:text-base font-bold">Angela Taylor</p>
            <p className="text-gray-400">CEO SAMSUNG</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media screen and (max-width: 640px) {
          .flex-col-reverse {
            flex-direction: column-reverse;
          }
          .ml-20 {
            margin-left: 0;
          }
        }
        @media screen and (min-width: 641px) {
          .flex-col-reverse {
            flex-direction: row;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
