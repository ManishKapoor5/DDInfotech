import React, { useState } from "react";
import tw from "tailwind-styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
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
const FAQ = () => {
  const FAQHeading = tw.div`text-6xl font-semibold mx-12 font-sans`;

  const [toggle, setToggle] = useState(true);

  const handleClick = () => {
    setToggle(false);
  };

  const [isDetailVisible, setIsDetailVisible] = useState(false);

  const toggleDetail = () => {
    setIsDetailVisible(!isDetailVisible);
  };

  const buttonClassName = isDetailVisible ? "clicked" : "";

  return (
    
    <div id="projects" className=" bg-[rgb(251,179,4)] py-20 lg:py-28">


      <div className="text-left mx-14 mb-12 lg:mb-16 font-semibold text-3xl lg:text-6xl font-sans  gap-6 lg:gap-8 flex text-black flex-row">
        <div className="bg-black h-3 w-3 my-5 lg:h-5 lg:w-5 lg:my-5"></div>
        PROJECTS
      </div>
      <PointsDesc>
        Utilizing our vast collective knowledge & experience , we provide an
        entire gamut of Civil Construction , Infrastructure & plumbing service.
        To generate value to our customer’s projects. DD INFRATECH has over the
        years successfully completed construction, Infrastructure & plumbing
        project across a multitude with the same commitment to quality,
        timeliness & topnotch customer service.
      </PointsDesc>
      <div class="mx-14 lg:mx-16 grid md:grid-cols1 lg:grid-cols-2 gap-6">
        
          <div class="divide-y divide-black">
            <details class="group">
              <summary class="flex cursor-pointer list-none items-center justify-between py-1 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                <div className="font-bold">POWER SECTOR</div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="block h-5 w-5 group-open:hidden"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="hidden h-5 w-5 group-open:block"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                </div>
              </summary>
              <div class="pb-4 text-secondary-500">
                The scope of work was modification of Transformer foundation at
                Najafgarh . The Client was DTL. The Project cost was 1 Cr.
              </div>
            </details>
            <details class="group">
              <summary class="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                <div className="font-bold">POWER SECTOR</div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="block h-5 w-5 group-open:hidden"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="hidden h-5 w-5 group-open:block"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                </div>
              </summary>
              <div class="pb-4 text-secondary-500">
                The scope of work was Earth filling & Civil work in GIS S/sn at
                Narela in associated with GE & TE .The Client was DTL .The
                project Cost was 1Cr.
              </div>
            </details>
            <details class="group">
              <summary class="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                <div className="font-bold">POWER SECTOR</div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="block h-5 w-5 group-open:hidden"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="hidden h-5 w-5 group-open:block"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                </div>
              </summary>
              <div class="pb-4 text-secondary-500">
                The scope of work was Earth filling & Civil work in GIS S/sn at
                Gopalpur in associated with GE & TE .The Client was DTL .The
                project Cost was 1Cr
              </div>
            </details>
            <details class="group">
              <summary class="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                <div className="font-bold">POWER SECTOR</div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="block h-5 w-5 group-open:hidden"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="hidden h-5 w-5 group-open:block"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                </div>
              </summary>
              <div class="pb-4 text-secondary-500">
                The scope of work was modification of 11 KV building at Mehrauli
                S/sn. The Client was DTL. The project cost was 1 Cr.
              </div>
            </details>
            <details class="group">
              <summary class="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                <div className="font-bold">POWER SECTOR</div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="block h-5 w-5 group-open:hidden"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="hidden h-5 w-5 group-open:block"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                </div>
              </summary>
              <div class="pb-4 text-secondary-500">
                The scope of work was Civil work at Bhorgarh Industrial area ,
                Narela in associated with PNC Delhi Infra Ltd. The project cost
                was 1 Cr.
              </div>
            </details>
            <details class="group">
              <summary class="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                <div className="font-bold">POWER SECTOR</div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="block h-5 w-5 group-open:hidden"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="hidden h-5 w-5 group-open:block"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                </div>
              </summary>
              <div class="pb-4 text-secondary-500">
                The scope of work including 220 KV sub station A.I.S. foundation
                & RCC road & Yard development . The project cost was 4 Cr. in
                Feb 2012
              </div>
            </details>
          </div>
          
          
          <div>
          <div class="divide-y divide-black">
            <details class="group">
              <summary class="flex cursor-pointer list-none items-center justify-between py-1 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                <div className="font-bold">POWER SECTOR</div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="block h-5 w-5 group-open:hidden"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="hidden h-5 w-5 group-open:block"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                </div>
              </summary>
              <div class="pb-4 text-secondary-500">
                The scope of work including development of 400 KV, 220 KV, 66 KV
                A.I.S. sub station EMCO Ltd. Contract Clients was DTL. The
                project cost was 5 Cr. In Jan 2013.
              </div>
            </details>

            <details class="group">
              <summary class="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                <div className="font-bold">POWER SECTOR</div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="block h-5 w-5 group-open:hidden"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="hidden h-5 w-5 group-open:block"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                </div>
              </summary>
              <div class="pb-4 text-secondary-500">
                The scope of work was construction of 220 KV ,66 KV sub station
                220 KV buildings, 66 KV buildings, Transformer foundation, RCC
                road in associated CGL. Client was DTL. The project cost was 1.7
                Cr. In August.2015.
              </div>
            </details>

            <details class="group">
              <summary class="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                <div className="font-bold">POWER SECTOR</div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="block h-5 w-5 group-open:hidden"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="hidden h-5 w-5 group-open:block"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                </div>
              </summary>
              <div class="pb-4 text-secondary-500">
                The scope of work was construction of 132 KV, 33 KV GIS sub
                station building RCC road , Drain, Yard etc in associated CGL.
                Client was U.P.P.T.C.L. . The project cost was 2.53 Cr. In June
                2016
              </div>
            </details>

            <details class="group">
              <summary class="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                <div className="font-bold">POWER SECTOR</div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="block h-5 w-5 group-open:hidden"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="hidden h-5 w-5 group-open:block"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                </div>
              </summary>
              <div class="pb-4 text-secondary-500">
                The scope of work was construction of 220KV,33 KV Yard &
                Boundary Wall , RCC road , Drain, etc in associated CGL at METL.
                Client was Reliance & HVPNL . The project cost was 2.5 Cr. In
                2021.
              </div>
            </details>

            <details class="group">
              <summary class="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                <div className="font-bold">POWER SECTOR (Ongoing)</div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="block h-5 w-5 group-open:hidden"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="hidden h-5 w-5 group-open:block"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                </div>
              </summary>
              <div class="pb-4 text-secondary-500">
                The scope of work including 220 KV 33 KV GIS building at
                Timarpur Sub Station in associated Godrej & Boycee mfg. Ltd. The
                Clint is DTL. The Project Cost is 6.5 Cr.
              </div>
            </details>
            <details class="group">
              <summary class="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                <div className="font-bold">POWER SECTOR (Ongoing)</div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="block h-5 w-5 group-open:hidden"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="hidden h-5 w-5 group-open:block"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                </div>
              </summary>
              <div class=" text-secondary-500">
                The scope of work including development of 400 KV, 220 KV, yard
                & Road at Ropar Punjab in associated Godrej & Boycee mfg. Ltd.
                The Clint is PGCIL. The Project Cost is 5 Cr
              </div>
            </details>
          </div>
        </div>
      </div>
      {/* //{" "} */}
      
    </div>
   
  );
};

const PointsDesc = tw.p`text-secondary-500 mx-14 md:mx-16 mb-6 md:mb-7 lg:mb-16 mt-1 md:mt-16 lg:mt-24 xl:mt-24 text-md font-[Plus+Jakarta+Sans] `;

export default FAQ;
