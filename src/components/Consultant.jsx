import React from "react";
import tw from "tailwind-styled-components";
import Img from "../assets/ConsultantImg.svg";


const Consultant = () => {
  return (
   
    <div>
       
      <ConsultantsClientsMain className="text-custom-silver">
        <ul className="w-72">
        <ConsultantDiv className="font-semibold text-xl text-white uppercase">
         
          Consultants
        </ConsultantDiv>
        <div className="font-normal space-y-3 text-s">
          <li>C.P. Kukreja</li>
          <li>Semac Pvt. Ltd.</li>
          <li>New Millennium Company Ltd.</li>
          <li>HSCC (I) Ltd.</li>
          <li>Pradeep Sharma & Associates</li>
          <li>R.K. & Associates</li>
          <li>Design Arch.</li>
          <li>Design Solution Group</li>
          <li>Garg & Associates</li>
          </div>
        </ul>
        {/* <img className="" src={Img} /> */}
        
      </ConsultantsClientsMain>
    </div>
    
  );
};
const ConsultantDiv = tw.div`  font-sans text-[rgba(184,185,185,255)] mb-10 text-left lg:text-left flex justify-left`;


const ConsultantsClientsMain = tw.div`grid grid-cols-1 md:grid-cols-2 font-semibold font-[Plus+Jakarta+Sans]`;
export default Consultant;
