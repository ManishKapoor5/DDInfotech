import React from "react";
import tw from "tailwind-styled-components";
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
const Resources = () => {
  return (
   
    <div id="team" className="bg-white py-20 lg:py-28">
      
      <ResourcesTitle className=" gap-5 lg:gap-8"><div className="bg-black h-3 w-3 lg:h-5 lg:w-5 my-4 lg:my-5"></div>TECHNICAL TEAM</ResourcesTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-72 md:w-11/12 mx-auto md:mx-16 lg:mx-16">
        <div className="card w-72 h-72 md:w-72 lg:w-64 lg:h-72 bg-[rgb(251,251,251)] rounded-2xl flex flex-col items-center mb-10 lg:mb-10">
          <div className="bg-[rgb(251,179,4)] rounded-t-2xl w-72 h-96 lg:w-64 lg:h-96 flex text-center items-center justify-center">
            
          <img
            className="w-20 h-20 md:w-36 md:h-36 lg:w-20 lg:h-20 rounded-full flex justify-center text-center"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJJS324sJIJ0Hzx5TdBwWHD_7snDCzLX0FfA&usqp=CAU"
          />
          </div>
          <div className="flex flex-col justify-center text-center h-96">
          <div className="text-sm w-40 font-bold text-black">
            Devender{" "}
          </div>
          <div className="text-center w-40  text-sm text-gray-600">
            Diploma in Civil Engg.
          </div>
          </div>
        
          <div className="text-sm text-center flex w-72 h-60 lg:w-64 lg:h-60 justify-center text-gray-600 items-center rounded-b-xl  border-y-2"><div>15+ years experience</div></div>
          
        </div>

        <div className="card w-72 h-72 lg:w-64 lg:h-72 bg-[rgb(251,251,251)] rounded-2xl flex flex-col items-center mb-10 lg:mb-0">
          <div className="bg-[rgb(251,179,4)] rounded-t-2xl w-72 h-96 lg:w-64 lg:h-96 flex text-center items-center justify-center">
            
          <img
            className="w-20 h-20 md:w-36 md:h-36 lg:w-20 lg:h-20 rounded-full flex justify-center text-center"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJJS324sJIJ0Hzx5TdBwWHD_7snDCzLX0FfA&usqp=CAU"
          />
          </div>
          <div className="flex flex-col justify-center text-center h-96">
          <div className="text-sm w-40 font-bold text-black">
          Dharmender Dahiya{" "}
          </div>
          <div className="text-center w-40  text-sm text-gray-600">
          B.TECH.
          </div>
          </div>
        
          <div className="text-sm text-center flex w-72 h-60 lg:w-64 lg:h-60 justify-center text-gray-600 items-center rounded-b-xl  border-y-2"><div>15+ years experience</div></div>
          
        </div>

        <div className="card w-72 h-72 lg:w-64 lg:h-72 bg-[rgb(251,251,251)] rounded-2xl flex flex-col items-center mb-10 lg:mb-0">
          <div className="bg-[rgb(251,179,4)] rounded-t-2xl w-72 h-96 lg:w-64 lg:h-96 flex text-center items-center justify-center">
            
          <img
            className="w-20 h-20 md:w-36 md:h-36 lg:w-20 lg:h-20 rounded-full flex justify-center text-center"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJJS324sJIJ0Hzx5TdBwWHD_7snDCzLX0FfA&usqp=CAU"
          />
          </div>
          <div className="flex flex-col justify-center text-center h-96">
          <div className="text-sm w-40 font-bold text-black">
          Sanjeet Kumar{" "}
          </div>
          <div className="text-center w-40  text-sm text-gray-600">
          M.TECH.
          </div>
          </div>
        
          <div className="text-sm text-center flex w-72 h-60 lg:w-64 lg:h-60 justify-center text-gray-600 items-center rounded-b-xl  border-y-2"><div>5+ years experience</div></div>
          
        </div>

        <div className="card w-72 h-72 lg:w-64 lg:h-72 bg-[rgb(251,251,251)] rounded-2xl flex flex-col items-center mb-10 lg:mb-0">
          <div className="bg-[rgb(251,179,4)] rounded-t-2xl w-72 h-96 lg:w-64 lg:h-96 flex text-center items-center justify-center">
            
          <img
            className="w-20 h-20 md:w-36 md:h-36 lg:w-20 lg:h-20 rounded-full flex justify-center text-center"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJJS324sJIJ0Hzx5TdBwWHD_7snDCzLX0FfA&usqp=CAU"
          />
          </div>
          <div className="flex flex-col justify-center text-center h-96">
          <div className="text-sm w-40 font-bold text-black">
          Yogesh {" "}
          </div>
          <div className="text-center w-40  text-sm text-gray-600">
          B. TECH.
          </div>
          </div>
        
          <div className="text-sm text-center flex w-72 h-60 lg:w-64 lg:h-60 justify-center text-gray-600 items-center rounded-b-xl  border-y-2"><div>5+ years experience</div></div>
          
        </div>    
        
        
      </div>
      
    </div>
    
  );
};
const Heading = tw.div`pt-3 pb-3 text-3xl font-sans mb-6 text-black`;
const ResourcesTitle = tw.div`text-3xl md:text-3xl lg:text-6xl font-sans mb-16 lg:mb-28 text-black font-semibold flex flex-start mx-10 md:mx-14 lg:mx-16`;
export default Resources;
