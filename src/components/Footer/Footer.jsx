import React from "react";
import { Link } from "react-router-dom";
import SocialLinks from "../Common/SocialLinks";
import ImpLinks from "./ImpLinks";
import Timer from "./Timer";

const Footer = () => {
  return (
    <div className="p-3 bg-black h-[60vh] text-white w-full flex flex-col justify-between">
      <div className=" text-[4.5vw] flex justify-between items-start w-full">
        <SocialLinks />

        <div className="text-[4.5vw] flex justify-between items-start">
          <Link
            className=" font-[font2] border-2 uppercase rounded-full pt-[.25em] px-[.3em] leading-[.72em] hover:text-[#D3FD50]  "
            to="/contact"
          >
            contact
          </Link>
        </div>
      </div>
      <div className="w-full flex items-center justify-between">
        <Timer />
        <div className="font-[font2] flex items-start gap-10 text-sm">
          <ImpLinks />
        </div>

        <Link className="uppercase font-[font2] text-xl">retour en haut</Link>
      </div>
    </div>
  );
};

export default Footer;
