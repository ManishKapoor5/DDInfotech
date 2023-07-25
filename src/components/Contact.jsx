import React, { useState } from "react";
import tw from "tailwind-styled-components";
import { AiOutlineInstagram } from "react-icons/ai";
import { TbBrandLinkedin } from "react-icons/tb";
import { AiOutlineTwitter } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import Consultant from "./Consultant";
import Footer from "./Footer";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import ContactForm from "./ContactForm";
import { BiSolidPhone, BiSolidUser } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineNaturePeople, MdPeopleOutline } from "react-icons/md";
import { MdMail } from "react-icons/md";
import { Link } from "react-router-dom";
import Email from "./Email";
import { Button } from "@react-email/button";

const textAnimate = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};

const Contact = () => {
  const [open, setOpen] = useState(true);
  const [path,setPath] = useState();

const handleClick = () => {
  setPath()
}
  return (
    <div id="contact">
      <div className="bg-custom-blackbg px-12 pt-28 pb-28">
        <div className="flex flex-col justify-center">
          <div className="text-white text-center font-sans font-semibold text-5xl flex flex-wrap w-full">
            SO, WHAT YOU ARE WAITING FOR, LET START YOUR PROJECT
          </div>

          {/* Open the modal using ID.showModal() method */}
          <Contactus
            className="btn w-56 text-right mx-auto my-5"
            onClick={() => window.my_modal_1.showModal()}
          >
            Contact Us
          </Contactus>
          <dialog id="my_modal_1" className="modal">
            <form
              method="dialog"
              className="modal-box min-h-full w-9/12 max-w-6xl md:overflow-hidden bg-custom-blackbg"
            >
              <button className="btn bg-custom-blackbg border-none hover:bg-transparent text-white">
                <RxCross2 />
              </button>

              <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row justify-between my-1 mx-6">
                <div>
                  <div className="text-white text-xl md:text-4xl font-medium mb-5 font-[Plus+Jakarta+Sans]">
                    Get a Quote
                  </div>
                  <p className="w-3/2 md:w-96 text-sm md:text-md font-thin flex-wrap text-white font-[Plus+Jakarta+Sans]">
                    Fill the form and our team will get back to you within 24
                    hours
                  </p>
                  
                    <div className="flex flex-col">
                    <div className="flex flex-row items-end text-white">
                      
                      <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 30 5"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-9 mt-10"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    />
                  </svg>
                      <div className="text-md mx-1 text-sm md:text-md font-thin font-[Plus+Jakarta+Sans]">
                        
                        +91 9991357349
                      </div>
                      </div>
                      <div className="text-md mx- text-sm md:text-md text-white ml-6 font-thin font-[Plus+Jakarta+Sans]">
                        {" "}
                        +91 9813360757
                      </div>
                      </div>
                  
                  <br />
                  
                   
                    <div className="flex flex-row   items-end text-white">
                      
                    <CiMail className="h-4  text-custom-silver" />
                      <div className="flex flex-wrap mx-1 md:mx-2 mt-10 text-xs md:text-md font-thin font-[Plus+Jakarta+Sans]">
                        {" "}
                        devender.dahiya1983@gmail.com
                        
                      </div>
                      </div>

                      <div className="text-md  ml-6 text-white text-xs md:text-md font-thin font-[Plus+Jakarta+Sans]">
                        {" "}
                        dharmenderdahiya818@gmail.com
                        
                      </div>
                    
                 
                  <div className="text-[rgba(184,185,185,255)] flex flex-row gap-3/2 md:gap-10 pt-12 text-2xl">
                    <button className="hover:bg-sky-700 px-3 py-3 rounded-full"  onClick={handleClick}>
                     
                      <AiOutlineInstagram className="text-2xl"/>
                     
                    </button>
                    <button className="hover:bg-sky-700 px-3 py-3 rounded-full">
                      <TbBrandLinkedin className="text-2xl"/>
                    </button>
                    <button className="hover:bg-sky-700 px-3 py-3 rounded-full">
                      <AiOutlineTwitter className="text-2xl"/>
                    </button>
                  </div>
                </div>
                <div className="rounded-xl border-lg w-3/2 md:w-80 max-h-full  px-7 py-5 justify-end bg-white">
                  <div className="text-md mb-2">Your Name</div>
                  <div className="flex flex-row ml-2"><BiSolidUser className="relative -mr-6 my-4 text-gray-400"/><input className="bg-gray-100 mb-5 h-10 w-full rounded-md px-8 py-5" ></input></div>
                  
                  <div className=" text-md mb-2">Email</div>
                  <div className="flex flex-row ml-2"><MdMail className="relative -mr-6 my-3 text-gray-400"/><input className="bg-gray-100 h-10 w-full rounded-md px-8 py-4 mb-5" ></input></div>

                  <div className=" text-md mb-2">Phone No.</div>
                  <div className="flex flex-row ml-2"><svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 30 5"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-10 relative -mr-8 -mt-2 text-gray-400"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    />
                  </svg><input className="bg-gray-100 h-10 w-full rounded-md px-8 py-4 mb-5" ></input></div>
                  <div className=" text-md mb-2">Message</div>
                  {/* <input
                    type=""
                    className=" h-28 w-full rounded-lg bg-gray-100"
                  ></input> */}
                  <textarea className="row-span-5 col-span-10 w-full h-20  bg-gray-100 rounded-lg px-3 resize-none focus:outline-0"></textarea>
                  <div className="flex justify-end text-end items-end">
                  <div className="bg-[rgb(251,179,4)] rounded-md mt-7 text-sm w-1/2 md:w-40 text-center h-10 justify-center items-center">
                    
                   <Email />
                    
                  </div>
                  </div>
                </div>
              </div>
              <div className="modal-action">
                {/* if there is a button in form, it will close the modal */}
              </div>
            </form>
          </dialog>
        </div>
      </div>
      <hr />
      <div className="bg-custom-blackbg pl-16 pt-1  pb-5">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 my-10 ">
          <div className="text-white text-xl font-bold">
            DD INFOTECH
            <div></div>
            <div className="flex flex-col my-10">
              <div className="text-custom-silver flex flex-row items-baseline">
                <div className="flex flex-row">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 30 5"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-10"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    />
                  </svg>
                  <div>
                    <div className="text-sm font-normal">+91 9991357349</div>
                    <div className="text-sm font-normal">+91 9813360757</div>
                  </div>
                </div>
              </div>
              <div className="text-custom-silver flex flex-col  items-baseline pt-7">
                <div className="flex flex-col items-baseline">
                  <div className="text-sm font-semibold">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;devender.dahiya1983@gmail.com
                  </div>
                  <div className="flex flex-row">
                    <CiMail className="h-5 items-baseline text-custom-silver" />
                    <div className="text-sm font-semibold">
                      &nbsp;&nbsp;dharmenderdahiya818@gmail.com
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-[rgba(184,185,185,255)] flex flex-row gap-3 pt-12 text-2xl">
                <AiOutlineInstagram />
                <TbBrandLinkedin />
                <AiOutlineTwitter />
              </div>
            </div>
          </div>

          <Consultant />

          <ConsultantsClientsMain className="text-custom-silver ">
            <ul className="w-60">
              <ClientDiv className="font-semibold text-xl mb-10 mt-6 lg:mt-0 text-white uppercase">
                Clients
              </ClientDiv>
              <div className="font-normal space-y-3 text-s">
                <li>C.G. Power</li>
                <li>G.E. T&D India Ltd</li>
                <li>Delhi Transco Limited</li>
                <li>HVPNL</li>
                <li>PNC Delhi Industrial Infra</li>
                <li>Godrej and Boycee Ltd.</li>
                <li>UPPTCL</li>
                <li>PGCIL</li>
              </div>
            </ul>
          </ConsultantsClientsMain>

          <div className="text-custom-silver">
            <AddressDiv className="font-semibold text-xl mb-10 mt-6 lg:mt-0 text-white uppercase">
              Address
            </AddressDiv>
            <div className="text-s w-40 lg:w-44">
              Pole No. 2, Village Neelwal, Near Mandir Transformer wali Gali.
              New Delhi 110041
            </div>
            <br />
            <div className="text-custom-silver text-s w-40 lg:w-44">
              Ladpur, Chhatera,Bahadurpur, Sonipat, Haryana 131003
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Function will execute on click of button
const onButtonClick = () => {
  // using Java Script method to get PDF file
  fetch("SamplePDF.pdf").then((response) => {
    response.blob().then((blob) => {
      // Creating new object of PDF file

      // Setting various property values
      // let alink = document.createElement('a');
      // alink.href = fileURL;
      // alink.download = 'SamplePDF.pdf';
      // alink.click();
      window.open(
        "https://www.eurofound.europa.eu/sites/default/files/ef_publication/field_ef_document/ef1710en.pdf",
        "_blank" // <- This is what makes it open in a new window.
      );
    });
  });
};

const ConsultantsClientsMain = tw.div`grid grid-cols-1 md:grid-cols-2 font-semibold gap-28 font-[Plus+Jakarta+Sans]`;
const ClientDiv = tw.div`  font-sans   text-left lg:text-left flex justify-left`;

const AddressDiv = tw.div`  font-sans   text-left lg:text-left flex justify-left`;



const Contactus = tw.button`text-black bg-[rgb(251,179,4)] px-3 rounded-[70px] mx-auto my-5 text-center justify-center items-center w-96 h-16`;
export default Contact;
