"use client";
import React, { useEffect, useState } from "react";
import FeatureItem from "./FeatureItem";
import { motion } from "framer-motion";

const FeatureList = () => {
  const [animation, setAnimation] = useState(null);
  const [animation2, setAnimation2] = useState(null);
  const [animation3, setAnimation3] = useState(null);

  useEffect(() => {
    fetch("/Assets/Lottie/creative.json").then((res) => res.json()).then(setAnimation);
  }, []);
  useEffect(() => {
    fetch("/Assets/Lottie/money.json").then((res) => res.json()).then(setAnimation2);
  }, []);
  useEffect(() => {
    fetch("/Assets/Lottie/confidence.json").then((res) => res.json()).then(setAnimation3);
  }, []);

  if (!animation || !animation2 || !animation3) return null;

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .feature-section {
            
            padding-top: 2rem !important;
            padding-bottom: 2rem !important;
          }
        }
      `}</style>

      <div
        className="feature-section flex flex-col items-center justify-center overflow-hidden"
        style={{
          height: "100svh",
          padding: "clamp(0.75rem, 2vh, 2rem) clamp(1rem, 4vw, 4rem)",
        }}
      >
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true, amount: 0.3 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-medium text-center w-full"
          style={{
            fontSize: "clamp(1.4rem, 3.5vw, 3rem)",
            marginBottom: "clamp(0.75rem, 3vh, 3rem)",
          }}
        >
          Why DecoMind?
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-1 md:grid-cols-3 w-full"
          style={{ gap: "clamp(0.5rem, 2vw, 1.5rem)" }}
        >
          {[
            {
              title: "Total Creative Control",
              src: animation,
              description:
                "Choose from 10 wood types, 8 color palettes, 10 furniture styles, and 8 materials. Mix and match to create a space that's uniquely yours.",
            },
            {
              title: "Save Thousands on Designers",
              src: animation2,
              description:
                "Visualize your dream room before buying a single piece of furniture. No expensive interior designers needed — AI does it for free.",
            },
            {
              title: "Buy With Confidence",
              src: animation3,
              description:
                "See exactly how furniture looks in your space before purchasing. Eliminate guesswork and expensive return shipping fees.",
            },
          ].map(({ title, src, description }) => (
            <motion.div
              key={title}
              variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } }}
              transition={{ duration: 0.6 }}
              className="flex"
            >
              <FeatureItem title={title} src={src} description={description} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default FeatureList;
