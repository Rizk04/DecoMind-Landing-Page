"use client";

import { Clock, Mail, Phone } from "lucide-react";
import React from "react";
import { MdLocationOn, MdMyLocation, MdPhone } from "react-icons/md";
import { motion } from "framer-motion";

const ContactInfo = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.25,
          },
        },
      }}
      className="flex flex-col px-5 space-y-10 ml-5"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 30 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <h1 className="text-2xl md:text-3xl text-gray-800 mb-6 font-semibold">
          {" "}
          Don't Hesitate to Reach Out
        </h1>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        className="flex flex-row items-start space-x-6"
      >
        <div className="bg-[#1A3A5C]/10 p-3 rounded-xl">
          <p className="text-2xl text-[#1A3A5C]">
            <Phone />{" "}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-lg md:text-xl">Phone</p>
          <p className="text-lg font-medium text-blue-600">+12078818202</p>
        </div>
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        className="flex flex-row items-start space-x-6"
      >
        <div className="bg-[#1A3A5C]/10 p-3 rounded-xl">
          <p className="text-2xl text-[#1A3A5C]">
            <Mail />
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-lg md:text-xl">Email</p>
          <a
            href="mailto:info@optima-solutions.cloud"
            className="text-lg font-medium text-blue-600"
          >
            info@optima-solutions.cloud
          </a>
        </div>
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        className="flex flex-row items-start space-x-6"
      >
        <div className="bg-[#1A3A5C]/10 p-3 rounded-xl">
          <p className="text-2xl text-[#1A3A5C]">
            <MdLocationOn />
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-lg md:text-xl">Location</p>
          <p className="text-lg font-medium text-blue-600">Lebanon</p>
        </div>
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        className="flex flex-row items-start space-x-6"
      >
        <div className="bg-[#1A3A5C]/10 p-3 rounded-xl">
          <p className="text-2xl text-[#1A3A5C]">
            <Clock />
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-lg md:text-xl">Response Time</p>
          <p className="text-lg font-medium text-blue-600">Within 24 hours</p>
        </div>
      </motion.div>

      <div></div>
    </motion.div>
  );
};

export default ContactInfo;
