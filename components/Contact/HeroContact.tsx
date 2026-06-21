"use client";
import { motion } from "framer-motion";
import React from "react";

const HeroContact = () => {
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
      className=" flex flex-col text-center items-center h-screen text-white justify-center space-y-5 min-h-[50vh] bg-linear-to-r from-[#1A3A5C] to-[#152D4A] px-4"
    >
      <motion.h1
        transition={{ duration: 0.4, ease: "easeOut" }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        className="text-4xl font-medium"
      >
        Ready to Transform Your Space?{" "}
      </motion.h1>
      <motion.p
        transition={{ duration: 0.4, ease: "easeOut" }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        className=" lg:text-xl text-md text-center mx-auto w-full md:w-2/3"
      >
        DecoMind is an AI-powered furniture design app that helps you visualize
        and create stunning interior spaces in seconds. No design experience
        needed — just your vision and our AI.
      </motion.p>
    </motion.div>
  );
};

export default HeroContact;
