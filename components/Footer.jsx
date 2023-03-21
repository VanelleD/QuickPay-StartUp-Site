import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between py-10 md:py-12 md:px-12">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h1 className="uppercase text-lg md:text-xl font-bold text-white mb-4">
            Akem Vanelle
          </h1>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <ul className="list-none grid gap-3 cursor-pointer">
              <h1 className="uppercase text-lg md:text-xl font-bold text-white mb-4">
                Company
              </h1>
              <li className="text-white text-sm md:text-base hover:text-indigo-800">
                About Us
              </li>
              <li className="text-white text-sm md:text-base hover:text-indigo-800">
                Careers
              </li>
              <li className="text-white text-sm md:text-base hover:text-indigo-800">
                Blog
              </li>
              <li className="text-white text-sm md:text-base hover:text-indigo-800">
                Pricing
              </li>
            </ul>
            <ul className="list-none grid gap-3 cursor-pointer">
              <h1 className="uppercase text-lg md:text-xl font-bold text-white mb-4">
                Product
              </h1>
              <li className="text-white text-sm md:text-base hover:text-indigo-800">
                Invoicing Platform
              </li>
              <li className="text-white text-sm md:text-base hover:text-indigo-800">
                Accounting Platform
              </li>
              <li className="text-white text-sm md:text-base hover:text-indigo-800">
                Create Proposal
              </li>
              <li className="text-white text-sm md:text-base hover:text-indigo-800">
                Contracts
              </li>
            </ul>
            <ul className="list-none grid gap-3 cursor-pointer">
              <h1 className="uppercase text-lg md:text-xl font-bold text-white mb-4">
                Resources
              </h1>
              <li className="text-white text-sm md:text-base hover:text-indigo-800">
                Proposal Template
              </li>
              <li className="text-white text-sm md:text-base hover:text-indigo-800">
                Invoice Template
              </li>
              <li className="text-white text-sm md:text-base hover:text-indigo-800">
                Tutorial
              </li>
              <li className="text-white text-sm md:text-base hover:text-indigo-800">
                How to write a contract
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
