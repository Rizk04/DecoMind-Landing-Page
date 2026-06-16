"use client";

import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import Lottie from "lottie-react";
import React, { useEffect, useRef, useState } from "react";

const FeatureBarProgress = () => {
  const lottieRef = useRef(null);

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

  const stats = [
    { value: rounded1, suffix: "+", label: "Happy Customers" },
    { value: rounded2, suffix: "+", label: "AI-Generated Designs" },
    { value: rounded3, suffix: "★", label: "User Rating" },
    { value: rounded4, suffix: "+", label: "Styles & Materials" },
  ];

  const cards = [
    {
      emoji: "🪑",
      title: "100+ combinations",
      desc: "10 Wood Types · 8 Color Palettes · 10 Styles",
    },
    {
      emoji: "💰",
      title: "Save Money",
      desc: "No expensive interior designers",
    },
    {
      emoji: "🤖",
      title: "AI-Powered",
      desc: "Generate stunning rooms in seconds",
    },
  ];

  return (
    <div
      className="bg-[#1A3A5C] flex flex-col justify-center overflow-hidden"
      style={{
        minHeight: "100svh",
        padding: "clamp(0.75rem, 2vh, 2rem) clamp(1rem, 4vw, 4rem)",
      }}
    >
      <div
        ref={ref}
        className="flex flex-wrap lg:flex-nowrap justify-center text-white text-center"
        style={{
          gap: "clamp(1rem, 4vw, 6rem)",
          marginBottom: "clamp(0.5rem, 2vh, 2.5rem)",
        }}
      >
        {stats.map(({ value, suffix, label }) => (
          <div key={label}>
            <div className="flex items-baseline justify-center">
              <motion.span
                style={{
                  fontSize: "clamp(1.2rem, 3vw, 3rem)",
                  fontWeight: 700,
                }}
              >
                {value}
              </motion.span>

              <span
                style={{
                  fontSize: "clamp(1.2rem, 3vw, 3rem)",
                  fontWeight: 700,
                }}
              >
                {suffix}
              </span>
            </div>

            <p
              className="text-gray-300"
              style={{
                fontSize: "clamp(0.6rem, 1vw, 0.875rem)",
                marginTop: "0.25rem",
              }}
            >
              {label}
            </p>
          </div>
        ))}
      </div>

      <div
        className="grid grid-cols-1 lg:grid-cols-2 items-center flex-1 min-h-0"
        style={{ gap: "clamp(0.5rem, 2vw, 2rem)" }}
      >
        <div className="flex flex-col justify-center order-2 lg:order-1">
          <h1
            className="text-white font-bold leading-tight text-center lg:text-left"
            style={{ fontSize: "clamp(1.2rem, 3.5vw, 3.75rem)" }}
          >
            Smart Design for
          </h1>

          <h1
            className="font-bold text-[#0D9DB8] leading-tight text-center lg:text-left"
            style={{
              fontSize: "clamp(1.2rem, 3.5vw, 3.75rem)",
              marginBottom: "clamp(0.5rem, 2vh, 2rem)",
            }}
          >
            Smart Homeowners
          </h1>

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
            className="flex flex-col sm:flex-row"
            style={{ gap: "clamp(0.25rem, 1vw, 1rem)" }}
          >
            {cards.map(({ emoji, title, desc }) => (
              <motion.div
                key={title}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="text-center text-white bg-white/5 rounded-xl flex-1"
                style={{
                  padding: "clamp(0.4rem, 1.5vh, 1rem)",
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(1rem, 2vw, 1.875rem)",
                    marginBottom: "clamp(0.15rem, 0.5vh, 0.5rem)",
                  }}
                >
                  {emoji}
                </div>

                <h3
                  className="font-semibold"
                  style={{
                    fontSize: "clamp(0.6rem, 1vw, 0.875rem)",
                  }}
                >
                  {title}
                </h3>

                <p
                  className="text-gray-300"
                  style={{
                    fontSize: "clamp(0.65rem, 2.5vw, 0.75rem)",
                    marginTop: "0.2rem",
                  }}
                >
                  {desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="flex justify-center items-center h-full order-1 lg:order-2">
          <Lottie
            lottieRef={lottieRef}
            animationData={animation}
            loop={true}
            style={{
              width: "clamp(220px, 80vw, 550px)",
              maxHeight: "45vh",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureBarProgress;