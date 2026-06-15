"use client";
import { motion } from "framer-motion";
import React from "react";

const Description = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      className="flex flex-col text-center items-center justify-center space-y-4 md:space-y-5 h-[88vh]  bg-blue-300/80 px-4"
    >
      <motion.h1
        transition={{ duration: 0.4, ease: "easeOut" }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        className="text-2xl sm:text-3xl md:text-4xl font-medium"
      >
        About DecoMind{" "}
      </motion.h1>
      <motion.p
        transition={{ duration: 0.4, ease: "easeOut" }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        className=" text-sm sm:text-base md:text-lg text-center mx-auto w-full md:w-3/4 lg:text-2/3"
      >
        DecoMind is an AI-powered furniture design app that helps you visualize
        and create stunning interior spaces in seconds. No design experience
        needed — just your vision and our AI.
      </motion.p>
      <motion.p
        transition={{ duration: 0.4, ease: "easeOut" }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        className=" text-sm sm:text-base md:text-lg text-center mx-auto w-full md:w-3/4 lg:text-2/3"
      >
        Choose from 10 wood types, 8 color palettes, 10 furniture styles, and 8
        materials. Our AI generates photorealistic room designs based on your
        preferences. Browse by category — Bedroom, Living Room, Kitchen,
        Bathroom, Closet, Dining, or Office.
      </motion.p>
      <motion.p
        transition={{ duration: 0.4, ease: "easeOut" }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        className=" text-sm sm:text-base md:text-lg text-center mx-auto w-full md:w-3/4 lg:text-2/3"
      >
        {" "}
        We believe everyone deserves a beautiful home without spending thousands
        on interior designers. DecoMind gives you professional-grade design
        tools at your fingertips, whether you're furnishing your first apartment
        or redesigning your dream house.
      </motion.p>
    </motion.div>
  );
};

export default Description;