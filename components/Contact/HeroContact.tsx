"use client";

import { motion } from "framer-motion";
import React from "react";

const HeroContact = () => {
  return (
    <motion.section
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
      className="
        relative
        flex
        flex-col
        items-center
        justify-center
        text-center
        h-screen
        min-h-[60vh]
        overflow-hidden
        px-4
        sm:px-5
        md:px-6
        lg:px-8
        
      "
    >
      {/* Background glow */}
      <div
        className="
          absolute
          inset-0
          -z-10
          bg-[radial-gradient(circle_at_10%_20%,rgba(13,157,184,0.15),transparent_35%),radial-gradient(circle_at_90%_25%,rgba(236,180,190,0.18),transparent_35%)]
        "
      />

      {/* Badge */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        className="
          mb-6
          sm:mb-8
          md:mb-10
          flex
          items-center
          gap-2
          rounded-full
          border
          border-gray-200
          bg-white/70
          px-3
          sm:px-4
          py-1.5
          sm:py-2
          text-xs
          sm:text-sm
          text-[#49647d]
          shadow-sm
        "
      >
        <span className="
          w-1.5
          sm:w-2
          h-1.5
          sm:h-2
          rounded-full
          bg-[#0D9DB8]
        "/>
        Contact us
      </motion.div>

      {/* Heading */}
      <motion.h1
        variants={{
          hidden: { opacity: 0, y: 25 },
          visible: { opacity: 1, y: 0 },
        }}
        className="
          max-w-4xl
          text-3xl
          sm:text-4xl
          md:text-5xl
          lg:text-6xl
          xl:text-[4.5rem]
          leading-[1.1]
          sm:leading-[1.05]
          md:leading-[0.95]
          font-serif
          font-medium
          tracking-tight
          text-[#183253]
          px-2
        "
      >
        Ready to transform{" "}
        <span
          className="
            italic
            text-[#0D9DB8]
            relative
          "
        >
          your
        </span>
        <br />
        <span
          className="
            italic
            text-[#0D9DB8]
          "
        >
          space?
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        className="
          mt-6
          sm:mt-8
          md:mt-10
          max-w-2xl
          text-sm
          sm:text-base
          md:text-lg
          lg:text-xl
          leading-relaxed
          text-[#49647d]
          px-4
          sm:px-6
        "
      >
        DecoMind is an AI-powered furniture design app that helps you visualize
        and create stunning interior spaces in seconds. No design experience
        needed — just your vision and our AI.
      </motion.p>
    </motion.section>
  );
};

export default HeroContact;