"use client";

import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { motion } from "framer-motion";

const ContactUs = () => {
  const phoneNumber = "+12078818202";
  const email = "Info@optima-solutions.cloud";

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}`,
      "_blank",
    );
  };

  const handleEmail = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="h-[100vh] mt-20  bg-[#1A3A5C] text-white text-center py-12 md:py-0 flex items-center">
      <div className="w-full px-4 md:px-0">
        <motion.h1 className="text-2xl sm:text-3xl md:text-4xl font-medium">
          Get in Touch
        </motion.h1>

        <motion.p className="text-base sm:text-lg text-gray-200 px-4 mt-2">
          Have questions? We'd love to hear from you.{" "}
        </motion.p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 text-center mt-8 sm:mt-20 px-4">
          <button
            onClick={handleWhatsApp}
            className="w-full sm:w-auto py-3 sm:py-4 px-6 sm:px-8 text-center bg-white flex items-center justify-center gap-2 hover:scale-105 transition-all duration-200 text-black text-base sm:text-2xl rounded-2xl"
          >
            <BsWhatsapp />
            <span>WhatsApp: +12078818202 </span>
          </button>

          <button
            onClick={handleEmail}
            className="w-full sm:w-auto py-3 sm:py-4 px-6 sm:px-8 text-center bg-blue-400 flex items-center justify-center gap-2 hover:scale-105 transition-all duration-200 text-white text-base sm:text-2xl rounded-2xl"
          >
            <MdMail />
            <span>Email</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
