"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import Lottie from "lottie-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaCouch } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";

const FeatureBarProgress = () => {
  const lottieRef = useRef(null);
  const lottieContainerRef = useRef(null);
  const lottieInView = useInView(lottieContainerRef, {once: false, amount:0.3})
  const count1 = useMotionValue(0);
  const count2 = useMotionValue(0);
  const count3 = useMotionValue(0);
  const count4 = useMotionValue(0);

  const rounded1 = useTransform(count1, (latest) => Math.floor(latest));
  const rounded2 = useTransform(count2, (latest) => Math.floor(latest));
  const rounded3 = useTransform(count3, (latest) => latest.toFixed(1));
  const rounded4 = useTransform(count4, (latest) => Math.floor(latest));

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (inView) {
      animate(count1, 500, { duration: 2, ease: "easeOut" });
      animate(count2, 1200, { duration: 2, ease: "easeOut" });
      animate(count3, 4.8, { duration: 2, ease: "easeOut" });
      animate(count4, 50, { duration: 2, ease: "easeOut" });
    }
  }, [inView]);

  const [animation, setAnimation] = useState(null);
  useEffect(() => {
    fetch("/Assets/Lottie/InteriorDesign.json")
      .then((res) => res.json())
      .then(setAnimation);
  }, []);

  return (
    <div className="py-12 bg-[#1A3A5C]">
      <div className="flex text-white text-center justify-center mb-15">
        <h1 className="text-3xl font-medium">
          <div className="flex flex-col md:flex-row text-white text-center justify-center gap-24">
            <div ref={ref}>
              <motion.span className="text-5xl font-bold">
                {rounded1}
              </motion.span>
              <span className="text-5xl font-bold">+</span>

              <p className="text-sm mt-2 text-gray-300">Happy Customers</p>
            </div>
            <div>
              <motion.span className="text-5xl font-bold">
                {rounded2}
              </motion.span>
              <span className="text-5xl font-bold">+</span>
              <p className="text-sm mt-2 text-gray-300">AI-Generated Designs</p>
            </div>
            <div>
              <motion.span className="text-5xl font-bold">
                {rounded3}
              </motion.span>
              <span className="text-5xl font-bold">★</span>

              <p className="text-sm mt-2 text-gray-300">User Rating</p>
            </div>
            <div>
              <motion.span className="text-5xl font-bold">
                {rounded4}
              </motion.span>
              <span className="text-5xl font-bold">+</span>

              <p className="text-sm mt-2 text-gray-300">Styles & Materials</p>
            </div>
          </div>
        </h1>
      </div>

      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center ">
        <div>
          <div className="">
            <h1 className="text-6xl text-white font-bold px-5 #0D9DB8">
              Smart Design for
            </h1>
            <h1 className="text-6xl font-bold px-5 text-[#0D9DB8] ">
              Smart Homeowners
            </h1>
          </div>
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
            className="flex flex-row justify-between max-w-4xl mt-16 space-x-5 mx-auto "
          >
            <motion.div
              transition={{ duration: 0.4, ease: "easeOut" }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="group text-center p-4 text-white bg-white/5 rounded-xl  "
            >
              <div className="text-3xl mb-2">🪑</div>
              <h3 className=" font-semibold ">100+ combinations</h3>
              <p className="text-gray-300  ">
                10 Wood Types · 8 Color Palettes · 10 Styles
              </p>
            </motion.div>

            <motion.div
              transition={{ duration: 0.4, ease: "easeOut" }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="group text-center p-4 text-white bg-white/5 rounded-xl "
            >
              <div className="text-3xl mb-2">💰</div>
              <h3 className=" font-semibold ">100+ combinations</h3>
              <p className="text-gray-300  ">No expensive interior designers</p>
            </motion.div>

            <motion.div
              transition={{ duration: 0.4, ease: "easeOut" }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="group text-center p-4 text-white bg-white/5 rounded-xl"
            >
              <div className="text-3xl mb-2">🤖</div>
              <h3 className=" font-semibold ">AI-Powered</h3>
              <p className="text-gray-300  ">
                Generate stunning rooms in seconds
              </p>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
        >
          <Lottie
          lottieRef={lottieRef}
            animationData={animation}
            loop={true}
            className="w-full max-w-3xl"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default FeatureBarProgress;
