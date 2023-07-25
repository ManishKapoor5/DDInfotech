import React from "react";
import tw from "tailwind-styled-components";
import img1 from "../assets/construction.jpg";
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
const About =() =>{
  
 
  return (
      <div id="about" >
      <div  className="grid grid-cols-1 md:grid-cols-1 py-16 md:py-16 lg:py-28">
      <div className="grid grid-cols-1 text-gray-600">
        <div className="mx-10 grid grid-col">
        
        <AboutDiv className="font-semibold gap-6 lg:gap-8"><div className="bg-black h-3 w-3  lg:h-5 lg:w-5 my-1 md:my-4 lg:my-5"></div>ABOUT US</AboutDiv>
       
          <PointsDesc >
            In today’s economic climate where developers are seeking ways to
            construct, operate and maintain their facilities at a lower cost, DD
            Infratech extend a full range of construction related services from
            designing , constructing, fire fighting to plumbing ,all under one
            roof.
          
            Established in June 2006 as DD INFRATECH, soon built its reputation
            or applying innovative methods & in depth knowledge to accomplish
            their engineering and construction projects within the stipulated
            time period.<br /><br />
          
            {" "}
            DD INFRATECH executing more complex engineering & construction
            project, the company expanded its operation & successfully provided
            good quality & cost effective service of Design, Construction
            Industries & all kind of Civil works to group Housing Societies,
            Industries , Hotel , Institute , Multiplexes, Power Sectors etc.
         
            Upholding the spirit of striving for DD INFRATECH practices business
            ethics to creat vibrant & creative environments.
          </PointsDesc>
          
        </div>
        
      </div>
      
      {/* <img  src={img3} className="h-44 w-[290px] hidden md:flex ml-10 md:ml-0 md:h-[330px] md:w-[300px] lg:h-[510px] lg:w-[580px] mt-10 md:mt-44 lg:mt-20 mb-1 xl:mb-20 rounded-xl"/> */}
      
      </div>
      </div>
  );
};



const Heading = tw.div` pt-3 pb-3 text-3xl font-sans mb-6 text-black underline decoration-4 underline-offset-4`;
const AboutDiv = tw.div`text-3xl lg:text-6xl font-sans text-black h-14 mx-0.1 md:mx-5 text-left lg:text-left flex justify-left`;
const Points = tw.ol`text-2xl mt-5`;
const PointsDesc = tw.p`text-gray-500 w-6/6 md:w-2/2 lg:w-11/12 xl:w-full mx-1 md:mx-6 lg:mx-1 xl:mx-3 mb-10 md:mb-0 lg:mb- mt-10 md:mt-20 lg:mt-24  font-[Plus+Jakarta+Sans] text-md`;
export default About;
