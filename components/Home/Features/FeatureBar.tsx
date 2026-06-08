"use client";

import { once } from "events";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { FaCouch } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Feature = () => {
  return (
    <motion.div className="py-24 bg-linear-to-r from-[#1A3A5C] via-[#1A3F60] to-[#152D4A]">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center ">
        <motion.div initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1}}
            viewport={{ once: true }}>
          <Image
            src={"/Assets/images/Feature-Illust.svg"}
            alt="smth"
            width={600}
            height={500}
          ></Image>
        </motion.div>
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-5xl text-white font-bold"
          >
            Everything You Need to <br /> Design Your Dream Space
          </motion.h1>
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
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 30 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="mt-10"
            >
              <div className="flex items-center space-x-5">
                <div className="w-12 h-12 rounded-full bg-amber-400 flex items-center justify-center flex-col">
                  <FaMagnifyingGlass className="text-white w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h1 className="text-2xl text-white font-medium">
                    {" "}
                    Browse Beautiful Galleries
                  </h1>
                  <p className="text-white mt-2 sm:w-2/3">
                    Explore thousands of room designs. Filter by category,
                    style, and color palette.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 30 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="mt-10"
            >
              <div className="flex items-center space-x-5">
                <div className="w-12 h-12 rounded-full bg-green-400 flex items-center justify-center flex-col">
                  <FaCouch className="text-white w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h1 className="text-2xl text-white font-medium">
                    {" "}
                    Visualize in 3D
                  </h1>
                  <p className="text-white mt-2 sm:w-2/3">
                    Walk through your future room before buying. Rotate, zoom,
                    and explore from every angle.
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
