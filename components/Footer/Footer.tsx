import Logo from "@/components/Helper/Logo";
import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full bg-white border-t-2 border-gray-200">
      <div className="w-[95%] mx-auto py-10 flex flex-row justify-between items-center gap-5">
        <h1 className="text-xl">© 2026 Optima Solutions. All Rights Reserved.</h1>
        <div className="flex flex-row gap-3">
          <a
            href="http://www.linkedin.com/company/optima-solutions-cloud"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-blue-800 hover:opacity-75 transition"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://www.facebook.com/optima.solutions.cloud/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-blue-600 hover:opacity-75 transition"
          >
            <BsFacebook />
          </a>
          <a
            href="https://www.instagram.com/optima.solutions.cloud/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-[#E4405F] hover:opacity-75 transition"
          >
            <BsInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
