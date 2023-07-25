import React from "react";
import tw from "tailwind-styled-components";
import img from "../assets/Timemanagement-bro.svg";


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
const Policy = () => {
  return (
   
    <div id="policy" className="grid grid-cols-1 md:grid-cols-2 bg-[rgb(247,246,245)] py-28">
        
      <div className="font-semibold">
        <div>
          {/* <Heading>WHAT OUR CLIENT SAYS</Heading> */}
          {/* <CustomCarousel /> */}

          <Headingdesc className="font-normal rounded-xl">
            <Heading className="font-semibold"> Management Policy </Heading>
            In pursuit of perfection , our dedicated team of young and highly
            quality technocrats actively involve themselves in the management &
            execution of all projects from the creation of design to the
            supervision of the final structure. Guided by the principles of
            giving attention to quality, the management & staff at DD INFRATECH
            is consistently striving to upgrade their techniques by applying new
            methods of construction . New Building Materials, Latest
            Infrastructures & Plumbing systems & New Management Techniques.
            While innovations have helped us grow, our strong work ethics &
            skilled craftsmanship
          </Headingdesc>

          <Headingdesc1 className="font-normal rounded-xl">
            <Heading className="font-semibold">
              Relationship With Customers
            </Heading>
            Our client-focused service have been recognized across the industry
            & contribute to our achievements. Which grow year by year. A
            majority of our business is through repeat client who attest our
            specialization in offering lump sum turn key service & provide
            maximum value to our client’s construction services firm, we have
            the flexibility, manpower & “Economies of Scale” to provide our
            services at competitive rated.
          </Headingdesc1>
        </div>
        
      </div>
      <div>
        <img
          src={img}
          className="h-96 w-64 lg:w-10/12 lg:h-11/12 hidden md:hidden lg:flex my-36 mx-20"
        />
      </div>
     
     </div>
    
   
  );
};

const Heading = tw.div` py-3 pb-3 text-3xl font-sans mb-3 text-black`;

const Heading1 = tw.div` py-3 pb-3 text-3xl font-sans mb-3 text-black`;

const Headingdesc = tw.div`bg-white mx-auto md:mx-14 w-72 md:w-[651px] lg:w-[551px] px-5 pt-4 pb-10 mb-12 text-gray-600 text-md font-[Plus+Jakarta+Sans] `;

const Headingdesc1 = tw.div`bg-white mx-auto md:mx-14 w-72 md:w-[651px] lg:w-[551px] px-5 pt-4 pb-10 text-gray-600 text-md font-[Plus+Jakarta+Sans]`;

export default Policy;
