"use client";

import { Clock, Mail, Phone } from "lucide-react";
import React from "react";
import { MdLocationOn } from "react-icons/md";
import { motion } from "framer-motion";

const ContactInfo = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
      className="w-full px-4 sm:px-6 lg:px-8 py-10 md:py-12"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 20 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <h1 className="text-xl sm:text-2xl md:text-3xl text-gray-800 mb-8 font-semibold">
          Don't Hesitate to Reach Out
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
        {/* Phone */}
        <motion.div
          variants={itemVariants}
          className="flex items-start gap-4"
        >
          <div className="bg-[#1A3A5C]/10 p-3 rounded-xl shrink-0">
            <Phone className="w-5 h-5 md:w-6 md:h-6 text-[#1A3A5C]" />
          </div>

          <div className="min-w-0">
            <p className="text-base md:text-lg font-medium">Phone</p>
            <p className="text-sm text-blue-600 wrap-break-word">
              +12078818202
            </p>
          </div>
        </motion.div>

        {/* Email */}
        <motion.div
          variants={itemVariants}
          className="flex items-start gap-4"
        >
          <div className="bg-[#1A3A5C]/10 p-3 rounded-xl shrink-0">
            <Mail className="w-5 h-5 md:w-6 md:h-6 text-[#1A3A5C]" />
          </div>

          <div className="min-w-0">
            <p className="text-base md:text-lg font-medium">Email</p>
            <a
              href="mailto:info@optima-solutions.cloud"
              className="text-sm text-blue-600 break-all"
            >
              info@optima-solutions.cloud
            </a>
          </div>
        </motion.div>

        {/* Location */}
        <motion.div
          variants={itemVariants}
          className="flex items-start gap-4"
        >
          <div className="bg-[#1A3A5C]/10 p-3 rounded-xl shrink-0">
            <MdLocationOn className="w-5 h-5 md:w-6 md:h-6 text-[#1A3A5C]" />
          </div>

          <div>
            <p className="text-base md:text-lg font-medium">Location</p>
            <p className="text-sm text-blue-600">Lebanon</p>
          </div>
        </motion.div>

        {/* Response Time */}
        <motion.div
          variants={itemVariants}
          className="flex items-start gap-4"
        >
          <div className="bg-[#1A3A5C]/10 p-3 rounded-xl shrink-0">
            <Clock className="w-5 h-5 md:w-6 md:h-6 text-[#1A3A5C]" />
          </div>

          <div>
            <p className="text-base md:text-lg font-medium">
              Response Time
            </p>
            <p className="text-sm text-blue-600">
              Within 24 hours
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;