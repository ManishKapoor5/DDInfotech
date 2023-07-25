import React from "react";
import tw from "tailwind-styled-components";

const Footer = () => {
  return (
    <div className="bg-[rgba(52,56,63,255)]">
      <FooterDiv>
        <div>TERM, PRIVACY POLICY</div>
        <div>Copyright © 2015 - 2023 THINKSTRAIGHT</div>
        {/* <div>SINCE. 2022</div> */}
      </FooterDiv>
    </div>
  );
};

const FooterDiv = tw.div`text-[rgba(177,178,178,255)] flex flex-row justify-between px-16 py-4`;
export default Footer;
