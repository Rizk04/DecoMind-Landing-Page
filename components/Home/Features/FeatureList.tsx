"use client";

import React, { useEffect, useState } from "react";
import FeatureItem from "./FeatureItem";
import { motion, animate, stagger } from "framer-motion";


const FeatureList = () => {
   const [animation, setAnimation] = useState(null);
    useEffect(() => {
      fetch("/Assets/Lottie/creative.json")
        .then((res) => res.json())
        .then(setAnimation);
    }, []);
    const [animation2, setAnimation2] = useState(null);
    useEffect(() => {
      fetch("/Assets/Lottie/money.json")
        .then((res) => res.json())
        .then(setAnimation2);
    }, []);

    const [animation3, setAnimation3] = useState(null);
    useEffect(() => {
      fetch("/Assets/Lottie/confidence.json")
        .then((res) => res.json())
        .then(setAnimation3);
    }, []);

    if (!animation ) return null; 
    else if (!animation2) return null;
    else if (!animation3) return null;

  return (
    <div className="pt-20 pb-20 bg-gray-100">
      {" "}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        viewport={{ once: true, amount: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-medium text-5xl text-center mb-20"
      >
        Why DecoMind?
      </motion.div>
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
        className="grid grid-cols-3 gap-6 px-16"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 30 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.6}}
          className="flex"
        >
          {" "}
          <FeatureItem
            title="Total Creative Control"
            src={animation}
            description="Choose from 10 wood types, 8 color palettes, 10 furniture styles, and 8 materials. Mix and match to create a space that's uniquely yours."
          />
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 30 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="flex"
        >
          <FeatureItem
            title="Save Thousands on Designers"
            src={animation2}
            description="Visualize your dream room before buying a single piece of furniture. No expensive interior designers needed — AI does it for free."
          />
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 30 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="flex"
        >
          {" "}
          <FeatureItem
            title="Buy With Confidence"
            src={animation3}
            description="See exactly how furniture looks in your space before purchasing. Eliminate guesswork and expensive return shipping fees."
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FeatureList;
