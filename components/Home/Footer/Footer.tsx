import Logo from "@/components/Helper/Logo";
import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import {
  FaFacebook,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { FaX, FaXTwitter } from "react-icons/fa6";
import { ImInstagram } from "react-icons/im";
import { LiaLinkedin } from "react-icons/lia";

const Footer = () => {
  return (
    <div className="w-full bg-white border-t-2 border-gray-200">
      <div className=" w-[95%] mx-auto py-10 flex flex-row justify-between gap-5">
        
        <div className=" text-xl flex flex-col ">
          <h1> © 2026 Optima Solutions. All Rights Reserved.</h1>
          
        </div>
        <div className="flex flex-row gap-3">
            <button className="text-3xl text-blue-800">
              {" "}
              <BsLinkedin />{" "}
            </button>
            <button className="text-3xl text-blue-600">
              {" "}
              <BsFacebook />{" "}
            </button>
            <button className="text-3xl text-[#E4405F]">
              <BsInstagram />
            </button>
          </div>
      </div>
    </div>
  );
};

export default Footer;
