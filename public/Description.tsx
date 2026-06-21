"use client";
import { motion } from "framer-motion";
import React from "react";
import { HiSparkles, HiSwatch, HiHome, HiCurrencyDollar } from "react-icons/hi2";

const points = [
  {
    icon: HiSparkles,
    title: "AI-Powered Visualization",
    description:
      "DecoMind is an AI-powered furniture design app that helps you visualize and create stunning interior spaces in seconds. No design experience needed — just your vision and our AI.",
  },
  {
    icon: HiSwatch,
    title: "Endless Customization",
    description:
      "Choose from 10 wood types, 8 color palettes, 10 furniture styles, and 8 materials. Our AI generates photorealistic room designs based on your preferences.",
  },
  {
    icon: HiHome,
    title: "Every Room Covered",
    description:
      "Browse by category — Bedroom, Living Room, Kitchen, Bathroom, Closet, Dining, or Office — and find the perfect design for every space in your home.",
  },
  {
    icon: HiCurrencyDollar,
    title: "Professional Design, No Price Tag",
    description:
      "We believe everyone deserves a beautiful home without spending thousands on interior designers. DecoMind gives you professional-grade design tools at your fingertips.",
  },
];

const Description = () => {
  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .desc-section {
            height: auto !important;
            padding-top: 2.5rem !important;
            padding-bottom: 2.5rem !important;
          }
          .desc-grid {
            gap: 1rem !important;
          }
          .desc-card {
            padding: 0.875rem !important;
          }
          .desc-card p {
            font-size: 0.8rem !important;
          }
        }
      `}</style>

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
        className="desc-section flex flex-col items-center justify-center h-[88vh] bg-blue-300/80 px-4"
      >
        <motion.h1
          transition={{ duration: 0.4, ease: "easeOut" }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-2xl sm:text-3xl md:text-4xl font-medium text-center mb-6 md:mb-10"
        >
          About DecoMind
        </motion.h1>

        <div className="desc-grid grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8 w-full md:w-4/5 lg:w-3/4 max-w-5xl">
          {points.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              transition={{ duration: 0.4, ease: "easeOut" }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="desc-card flex items-start gap-4 text-left bg-white/40 rounded-xl p-4 md:p-5"
            >
              <Icon className="shrink-0 w-7 h-7 md:w-8 md:h-8 text-[#1A3A5C] mt-1" />
              <div>
                <h2 className="font-semibold text-base sm:text-lg mb-1">{title}</h2>
                <p className="text-sm sm:text-base text-gray-700 leading-snug">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Description;
