"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { FaCouch } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Feature = () => {
  return (
    <motion.div
      className="bg-linear-to-r from-[#1A3A5C] via-[#1A3F60] to-[#152D4A] flex items-center overflow-hidden"
      style={{ height: "100svh", padding: "clamp(0.5rem, 1.5vh, 1.5rem) 0" }}
    >
      <div
        className="mx-auto grid grid-cols-1 lg:grid-cols-2 items-center w-[85%]"
        style={{ gap: "clamp(1rem, 3vw, 3rem)" }}
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Image
            src="/Assets/images/ai-design.jpg"
            alt="feature illustration"
            width={300}
            height={200}
            style={{ width: "clamp(120px, 18vw, 360px)", height: "auto" }}
            className="rounded-2xl"
          />
        </motion.div>

        {/* Text */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-white font-bold"
            style={{ fontSize: "clamp(1rem, 2.6vw, 3rem)", lineHeight: 1.2 }}
          >
            Everything You Need to Design Your Dream Space
          </motion.h1>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {/* Feature 1 */}
            <motion.div
              variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } }}
              transition={{ duration: 0.6 }}
              style={{ marginTop: "clamp(0.5rem, 1.8vh, 1.5rem)" }}
            >
              <div className="flex items-center" style={{ gap: "clamp(0.6rem, 1.6vw, 1.25rem)" }}>
                <div
                  className="rounded-full bg-amber-400 flex items-center justify-center flex-shrink-0"
                  style={{ width: "clamp(1.75rem, 3vw, 3rem)", height: "clamp(1.75rem, 3vw, 3rem)" }}
                >
                  <FaMagnifyingGlass
                    className="text-white"
                    style={{ width: "clamp(0.8rem, 1.3vw, 1.5rem)", height: "clamp(0.8rem, 1.3vw, 1.5rem)" }}
                  />
                </div>
                <div className="flex-1">
                  <h1
                    className="text-white font-medium"
                    style={{ fontSize: "clamp(0.8rem, 1.5vw, 1.5rem)" }}
                  >
                    Browse Beautiful Galleries
                  </h1>
                  <p
                    className="text-white sm:w-2/3"
                    style={{ fontSize: "clamp(0.65rem, 1vw, 1rem)", marginTop: "clamp(0.15rem, 0.6vh, 0.5rem)" }}
                  >
                    Explore thousands of room designs. Filter by category, style, and color palette.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } }}
              transition={{ duration: 0.6 }}
              style={{ marginTop: "clamp(0.5rem, 1.8vh, 1.5rem)" }}
            >
              <div className="flex items-center" style={{ gap: "clamp(0.6rem, 1.6vw, 1.25rem)" }}>
                <div
                  className="rounded-full bg-green-400 flex items-center justify-center flex-shrink-0"
                  style={{ width: "clamp(1.75rem, 3vw, 3rem)", height: "clamp(1.75rem, 3vw, 3rem)" }}
                >
                  <FaCouch
                    className="text-white"
                    style={{ width: "clamp(0.8rem, 1.3vw, 1.5rem)", height: "clamp(0.8rem, 1.3vw, 1.5rem)" }}
                  />
                </div>
                <div className="flex-1">
                  <h1
                    className="text-white font-medium"
                    style={{ fontSize: "clamp(0.8rem, 1.5vw, 1.5rem)" }}
                  >
                    Visualize in 3D
                  </h1>
                  <p
                    className="text-white sm:w-2/3"
                    style={{ fontSize: "clamp(0.65rem, 1vw, 1rem)", marginTop: "clamp(0.15rem, 0.6vh, 0.5rem)" }}
                  >
                    Walk through your future room before buying. Rotate, zoom, and explore from every angle.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Feature;
