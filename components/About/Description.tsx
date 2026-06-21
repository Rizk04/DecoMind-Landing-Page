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
        className="desc-section h-screen flex flex-col items-center justify-center bg-blue-300/80 overflow-hidden"
        style={{
          minHeight: "88vh",
          padding: "clamp(1rem, 4vh, 3rem) clamp(1rem, 4vw, 2rem)",
        }}
      >
        <motion.h1
          transition={{ duration: 0.4, ease: "easeOut" }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="font-medium text-center"
          style={{
            fontSize: "clamp(1.2rem, 2.8vw, 2.25rem)",
            marginBottom: "clamp(0.75rem, 2.5vh, 2rem)",
          }}
        >
          About DecoMind
        </motion.h1>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 w-full max-w-5xl"
          style={{ gap: "clamp(0.75rem, 2vw, 2rem)" }}
        >
          {points.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              transition={{ duration: 0.4, ease: "easeOut" }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex items-start text-left bg-white/40 rounded-xl"
              style={{
                gap: "clamp(0.6rem, 1.5vw, 1rem)",
                padding: "clamp(0.75rem, 1.8vw, 1.25rem)",
              }}
            >
              <Icon
                className="shrink-0 text-[#1A3A5C]"
                style={{
                  width: "clamp(1.3rem, 2.2vw, 2rem)",
                  height: "clamp(1.3rem, 2.2vw, 2rem)",
                  marginTop: "0.15rem",
                }}
              />
              <div>
                <h2
                  className="font-semibold"
                  style={{
                    fontSize: "clamp(0.85rem, 1.3vw, 1.125rem)",
                    marginBottom: "0.25rem",
                  }}
                >
                  {title}
                </h2>
                <p
                  className="text-gray-700 leading-snug"
                  style={{ fontSize: "clamp(0.7rem, 1vw, 1rem)" }}
                >
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
