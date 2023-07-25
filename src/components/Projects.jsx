import React from "react";
import tw from "tailwind-styled-components";
import { LiaArrowRightSolid } from "react-icons/lia";
const Projects = () => {
  return (
    <div>
      <div className="flex flex-col mx-10 my-16">
        <Heading>OUR CURRENT PROJECTS</Heading>
        {/* <VIEWALL>VIEW ALL<LiaArrowRightSolid /></VIEWALL> */}
      </div>
      <div className="flex flex-row mx-10 gap-1 space-x-16 my-0 h-screen">
        <img
          className="rounded-bl-[121px] w-[600px] h-5/6"
          src="https://media.istockphoto.com/id/1436217023/photo/exterior-of-a-blue-suburban-home.jpg?b=1&s=170667a&w=0&k=20&c=oEpszLJm7Hk3Q7qshJvde1P6tfaW5EJsmsYzOuuHGR8="
        />
        <div className="w-[600px] text-sm my-44 flex flex-wrap font-semibold">
          The scope of work including 220 KV 33 KV GIS building at Timarpur Sub
          Station in associated Godrej & Boycee mfg. Ltd. The Clint is DTL. The
          Project Cost is 6.5 Cr.
        </div>
      </div>
      <div className="flex flex-row mx-10 gap-1  space-x-16 my-auto h-screen">
        <div className="text-sm flex flex-wrap my-44 font-semibold">
          The scope of work including development of 400 KV, 220 KV, yard & Road
          at Ropar Punjab in associated Godrej & Boycee mfg. Ltd. The Clint is
          PGCIL. The Project Cost is 5 Cr
        </div>
        <img
          className="w-[600px] h-[500px] rounded-br-[121px]"
          src="https://media.istockphoto.com/id/154248637/photo/two-story-single-family-house-with-driveway.jpg?s=612x612&w=0&k=20&c=HCErr6SxdwF6O6pamr4ycHbwKNB7t2vGpNf-Q31DXBs="
        />
        {/* <img className='w-60 h-5/6 rounded-tr-[121px]' src='https://5.imimg.com/data5/SELLER/Default/2021/6/LH/KM/CU/66743313/home-exterior-designing-service.jpg'/> */}
      </div>
    </div>
  );
};

const Heading = tw.div`text-3xl font-extrabold font-sans mb-6 text-black`;

const VIEWALL = tw.button`font-normal text-3xl flex flex-row items-center`;
export default Projects;
