"use client";
import Lottie from "lottie-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa6";
import { GrGooglePay } from "react-icons/gr";
import { motion } from "framer-motion";

const Hero = () => {
  const [animation, setAnimation] = useState(null);
  useEffect(() => {
    fetch("/Assets/Lottie/houseAnimation.json")
      .then((res) => res.json())
      .then(setAnimation);
  }, []);

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .hero-outer {
            translate: none !important;
            transform: none !important;
            width: 100% !important;
            min-height: unset !important;
            height: auto !important;
            padding: 2rem 1.25rem !important;
            gap: 1.5rem !important;
          }
          .hero-buttons {
            flex-direction: column !important;
          }
          .hero-buttons button {
            width: 100% !important;
          }
          .hero-lottie {
            transform: none !important;
            max-width: 260px !important;
            margin: 0 auto !important;
          }
        }
      `}</style>

      <div className="hero-outer translate-x-4 h-[88svh] lg:pt-0 relative w-[95%] min-h-screen lg:min-h-[90vh] flex flex-col lg:flex-row items-center justify-center gap-12 px-4">
        {" "}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeIn", duration: 0.5 }}
          className="relative"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800">
            Transform Any Room{" "}
            <motion.span
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="pb-2 text-2xl sm:text-3xl md:text-4xl font-bold text-center text-transparent bg-linear-to-r bg-clip-text to-[#1A3A5C] from-[#0D9DB8]"
            >
              AI-Powered
            </motion.span>
            <span> Design</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-center text-gray-400">
            Generate stunning furniture layouts and interior designs in seconds.
            Choose from wood types, color palettes, furniture styles, and
            materials no design experience needed.
          </p>
          <div className="hero-buttons flex max-[768px]:flex-col flex-row max-[768px]:space-y-3 md:space-x-3 mt-3 items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer max-[768px]:text-sm flex items-center justify-center gap-3 w-1/2 text-white rounded-md bg-[#1A3A5C] px-3 h-12 hover:bg-[#0D9DB8] font-medium hover:text-black transition-all duration-200 py-3"
            >
              <FaGooglePlay />
              Download Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer max-[768px]:text-sm flex items-center justify-center gap-3 w-1/2 text-black rounded-md border-2 border-[#1A3A5C] px-3 py-5 h-12 hover:bg-[#1A3A5C] font-medium hover:text-white transition-all duration-200"
            >
              <FaApple />
              Download Now
            </motion.button>
          </div>
        </motion.div>
        <div className="hero-lottie relative w-full max-w-xl">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="relative w-full h-auto"
    style={{ mixBlendMode: "screen", maxHeight: "50vh" }}
  >
    <source src="/Assets/Logo/LogoLoop.mp4" type="video/mp4" />
  </video>
  
</div>
      </div>
    </>
  );
};

export default Hero;
