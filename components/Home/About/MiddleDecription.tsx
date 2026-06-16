"use client";

import React from "react";
import Card from "./Card";
import { motion } from "framer-motion";

const MiddleDecription = () => {
  return (
    <div
      className="h-full flex flex-col justify-center text-center px-4 overflow-hidden"
      style={{
        padding: "clamp(1rem, 4vh, 4rem) 1rem",
      }}
    >
      <h1
        className="text-black font-medium mb-2"
        style={{
          fontSize: "clamp(1.2rem, 2.5vw, 2.25rem)",
        }}
      >
        Our Core Values
      </h1>

      <p
        className="text-gray-500 mb-6 px-2 md:px-0 max-w-4xl mx-auto"
        style={{
          fontSize: "clamp(0.8rem, 1.3vw, 1.25rem)",
        }}
      >
        At DecoMind, we're building the future of interior design — one room at
        a time. Our values guide everything we do, from AI development to
        customer support.
      </p>

      <motion.div
        className="
          flex
          flex-row
          md:flex-row
          overflow-x-auto
          md:overflow-visible
          snap-x
          snap-mandatory
          md:snap-none
          pb-2
          justify-start
          md:justify-center
          items-stretch
          scrollbar-hide
        "
        style={{
          gap: "clamp(1rem, 3vw, 3rem)",
        }}
      >
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