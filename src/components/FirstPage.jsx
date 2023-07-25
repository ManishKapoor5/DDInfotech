import React from "react";
import tw from "tailwind-styled-components";
import Navbar from "./Navbar";
import { motion, Variants }  from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const textAnimate={
  offscreen:{y:100, opacity:0},
  onscreen:{y:0,
  opacity:1,
  transition: {type:"spring",
  bounce:0.4,
  duration:2}
}
};


const FirstPage = () => {
  return (
    
    <div className="bg-custom-blackbg pb-5">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 mt-1">
        <div id="head" className="animate__animated animate__slideInUp duration-150 text-white w-80 md:w-96 lg:w-full xl:w-full mx-10 md:mx-16 mt-1 font-semibold my-10 lg:my-10 mb-3 text-xl md:text-5xl lg:text-7xl text-left flex flex-wrap justify-start uppercase">
        Put us to the test, we are better than the rest
        </div>
        
        <AboutDiv>
          <div className='animate__animated animate__slideInUp duration-150 text-white mx-1 md:mx-1 lg:mx-16 mt:0 lg:mt-20 w-28 md:w-48 lg:w-60 xl:60 text-md md:text-xl lg:text-2xl text-left font-semibold flex justify-start'>INTRODUCTION</div>

          <div className="text-[rgba(184,185,185,255)] w-2/2 md:w-72  lg:w-4/6 xl:w-5/6 text-lg md:text-lg lg:text-lg font-thin font-[Plus+Jakarta+Sans] text-left flex mx-1 md:mx-1 lg:mx-16 mt-1 justify-center animate__animated animate__slideInUp duration-150">
            The Construction Company, established in 2006, is a general
            contractor providing construction services such as site analysis,
            feasibility studies, preliminary design studies, and permit/zoning
            applications. We undertake diverse projects in industrial,
            distribution, manufacturing, office, retail, recreational, power
            sector, and commercial sectors in Delhi NCR, Haryana, and UP.
          </div>
          <div className='flex flex-col md:flex-col lg:flex-row md:w-72 lg:w-96 justify-center mx-1 md:mx-4 lg:mx-16 xl:mx-16 mt-6 animate__animated animate__slideInUp duration-150'><div className='text-white text-lg md:text-lg lg:text-xl xl:text-2xl font-semibold'>350+ Projects</div><div className='flex-grow hidden md:flex h-0.5 w-1 md:w-1 lg:w-1 xl:w-1 mx-5 lg:mx-4 xl:mx-1 bg-white my-auto'></div><div className='text-white text-lg md:text-lg lg:text-xl xl:text-2xl mx-8 lg:mx-9 xl:mx-1 font-semibold'>280+ Clients</div></div>
        </AboutDiv>
        {/* https://proest.com/wp-content/uploads/2022/11/Building-Construction-Process-From-Start-To-Finish-1024x576.jpg */}
      </div>

      <div id="img" className="overflow-visible animate__animated animate__slideInUp duration-150 h-56 md:w-11/12 bg-cover hidden md:visible lg:flex mx-auto mt-36 relative bg-no-repeat rounded-tl-[121px] rounded-tr-[60px] mb-10 justify-center  border text-white border-t-100 bg-[url('https://proest.com/wp-content/uploads/2022/11/Building-Construction-Process-From-Start-To-Finish-1024x576.jpg')]">
        <img
          className="h-[415px] relative overflow-visible -top-48 hidden md:visible text-center lg:flex justify-center"
          src="https://assets.website-files.com/62dc99812ec1453b1022bded/62dccbdc132cbe40781fe913_pogo%201.png"
        ></img>
      </div>
    </div>
   
  );
};
// const WholePage = tw.div`text-white mx-auto w-56 text-left flex justify-start`

const AboutDiv = tw.div`flex flex-col mx-10 text-xs lg:text-sm`;

const ImgDiv = tw.div` mx-20 mb-10 flex justify-center h-64  border text-white border-t-100`;
export default FirstPage;
