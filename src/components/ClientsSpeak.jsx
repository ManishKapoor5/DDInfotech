import React from "react";
import tw from "tailwind-styled-components";
import img from "../assets/Construction worker-bro.svg";


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
const ClientsSpeak = () => {
  return (
    
    <div id="vision" className="grid grid-cols-1 md:grid-cols-2 bg-[rgb(247,246,245)] py-28">
    <div className="font-semibold">
      <div>
        {/* <Heading>WHAT OUR CLIENT SAYS</Heading> */}
        {/* <CustomCarousel /> */}
       
        <Headingdesc className="rounded-xl">
          
        <Heading > Our Vision </Heading>
          With the evolution of technology, the construction industry shall be
          developing at a fast pace & so will our services & products. It shall
          be our endeavor to consistently develop our service & provide our
          customer with improved solution that generate value to their business.
          Striving for a symbiotic coexistence, our company shall actively
          synergies the evolving technology with the environment & the society.
        </Headingdesc>
      
        
        <Headingdesc1 className="rounded-xl">
        <Heading1>Our Mission</Heading1>
          Dedication technical to providing quality construction, and management
          services to our customers. We will strive to implement a long term
          relationship with our clients, based on safety, quality, timely
          service and an anticipation of their needs. To help fulfill this
          mission, we will treat all employees fairly and involve them in the
          quality improvement process to insure responsiveness and cost
          effective work execution.
        </Headingdesc1>
        
      </div>
     
      
    </div>
   
    <div><img src={img} className="h-96 w-60 md:w-60 lg:h-[550px] lg:w-[400px]  md:my-52 xl:my-1 mx-auto"/></div>
    </div>
    
  );
};

const Heading = tw.div` py-3 pb-3 text-3xl font-sans mb-3 text-black`;

const Heading1 = tw.div` py-3 pb-3 text-3xl font-sans mb-3 text-black`;

const Headingdesc = tw.div`bg-white font-normal mx-auto md:mx-12 lg:mx-16 w-72 md:w-96 lg:w-96 xl:w-11/12 px-5 pt-4 pb-10 mb-12 text-gray-500 text-md font-[Plus+Jakarta+Sans] `;

const Headingdesc1 = tw.div`bg-white font-normal mx-auto md:mx-12 lg:mx-16 w-72 md:w-96 lg:w-96 xl:w-11/12 px-5 pt-4 pb-10 text-gray-500 text-md font-[Plus+Jakarta+Sans]`;

export default ClientsSpeak;
