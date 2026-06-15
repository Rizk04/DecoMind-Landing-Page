"use client";

import { motion } from "framer-motion";
import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const Download = () => {
  return (
    <div className="h-screen ">
    <div className="flex justify-center px-4 py-20 md:py-40 ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative w-full max-w-7xl rounded-2xl overflow-hidden shadow-lg"
      >
        <div className="absolute inset-0 bg-linear-to-r from-[#1A3A5C]/90 to-[#152D4A]"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-1 w-full px-6 md:px-12 py-10 md:py-16">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-center md:text-left">
            Get Started Today
            <br className="hidden sm:block" /> and download the app
          </h2>
          
          <div className="flex flex-col gap-4 w-full sm:w-auto sm:mr-15">
            <button className="flex justify-center items-center gap-3 bg-white w-full sm:w-auto cursor-pointer text-black font-semibold px-6 sm:px-8 py-3 rounded-full shadow-md hover:bg-blue-500 hover:text-white transition text-base sm:text-lg">
              <FaGooglePlay />
              Download Now
            </button>
            <button className="flex justify-center items-center gap-3 bg-white w-full sm:w-auto cursor-pointer text-black font-semibold px-6 sm:px-8 py-3 rounded-full shadow-md hover:bg-blue-500 hover:text-white transition text-base sm:text-lg">
              <FaApple />
              Download Now
            </button>
          </div>
        </div>
      </motion.div>
    </div>
    </div>
  );
};

export default Download;