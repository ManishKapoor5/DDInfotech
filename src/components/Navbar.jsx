import React, { useState } from "react";
import "animate.css";
import { motion, Variants }  from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const textAnimate={
  offscreen:{y:100, opacity:0},
  onscreen:{y:0,
  opacity:1,
  transition: {type:"spring",
  bounce:0.4,
  duration:1}
}
};
const Navbar = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-custom-blackbg pb-5">
    <div className="flex flex-row w-full justify-between px-10 md:px-16 lg:px-16 xl:px-16 border-b border-y-0 border-slate-300 py-3 text-gray-600 ">
      
      <div className="text-white hidden md:flex lg:flex xl:flex text-md gap-14 lg:space-x-10 flex-row my-3 animate__animated animate__slideInUp duration-150">
        <div className="font-thin">
         <a href="/#about">ABOUT</a> 
        </div>
        <div className="font-thin">
        <a href="/#projects"> PROJECT </a>
        </div>
        </div>
        <div className=" md:block text-2xl flex font-semibold my-auto text-white text-center animate__animated animate__slideInUp duration-150">
         <a href="/" >DD INFOTECH</a>
        </div>
        <div className="text-white hidden md:flex lg:flex xl:flex text-md gap-14 flex-row my-3 animate__animated animate__slideInUp duration-150">
        <div className=" font-thin">
         <a href="/#team">TEAM</a> 
        </div>
        <div className=" font-thin">
          <a href="/#contact">CONTACT</a>
        </div>
      </div>

      <div className="flex justify-end absolute right-6 items-end mx-1 md:hidden">
        <button
          onClick={toggleMenu}
          type="button"
          className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open menu</span>
          <svg
            className={`${isOpen ? "hidden" : "block"} h-6 w-6 text-white`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            className={`${isOpen ? "block" : "hidden"} h-6 w-5 text-white`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className={`${isOpen ? "open" : "hidden"} lg:hidden`}>
        <div className="px-auto pt-2 pb-3 space-y-1 sm:px-3">
          {/* <a href="/"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-3xl font-medium"
          >
            DD INFOTECH
          </a> */}
          <a
            href="/#about"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-sm font-medium"
          >
            ABOUT
          </a>
          <a
            href="/#projects"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-sm font-medium"
          >
            PROJECT
          </a>
          <a
            href="/#team"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-sm font-medium"
          >
            TEAM
          </a>
          <a
            href="/#contact"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-sm font-medium"
          >
            CONTACT
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
