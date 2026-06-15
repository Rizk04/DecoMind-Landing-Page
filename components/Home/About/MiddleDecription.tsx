"use client";
import React from "react";
import Card from "./Card";
import { motion } from "framer-motion";

const MiddleDecription = () => {
  return (
    <div className="h-[100vh] flex flex-col text-center justify-center px-4" style={{ padding: "clamp(2rem, 6vh, 4rem) 1rem" }}>
      <h1
        className="text-black font-medium mb-2"
        style={{ fontSize: "clamp(1.2rem, 2.5vw, 2.25rem)" }}
      >
        Our Core Values
      </h1>
      <p
        className="text-gray-500 mb-8 px-2 md:px-0"
        style={{ fontSize: "clamp(0.8rem, 1.3vw, 1.25rem)" }}
      >
        At DecoMind, we're building the future of interior design — one room at
        a time. Our values guide everything we do, from AI development to
        customer support.
      </p>
      <motion.div className="flex flex-col md:flex-row items-stretch justify-center flex-wrap" style={{ gap: "clamp(1rem, 3vw, 3rem)" }}>
        <Card
          description="We push the boundaries of what AI can do for interior design. From 3D visualization to real-time room generation, we're constantly evolving to make design smarter, faster, and more accessible."
          title="Innovation First"
          Icon="./Assets/images/check.svg"
        />
        <Card
          description="Your vision is our mission. We listen to your feedback, adapt to your needs, and build features that actually help you design better spaces. Every decision starts with you."
          title="Customer Obsessed"
          Icon="./Assets/images/delivery.svg"
        />
        <Card
          description="Whether it's 4K renders, accurate 3D previews, or responsive support, we never cut corners. Beautiful design deserves beautiful execution."
          title="Quality Without Compromise"
          Icon="./Assets/images/profile.svg"
        />
      </motion.div>
    </div>
  );
};

export default MiddleDecription;