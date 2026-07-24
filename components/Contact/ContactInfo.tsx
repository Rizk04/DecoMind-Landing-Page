"use client";

import { Clock, Mail, Phone, ArrowUpRight } from "lucide-react";
import React from "react";
import { MdLocationOn } from "react-icons/md";
import { motion } from "framer-motion";

const ContactInfo = () => {
  const items = [
    {
      icon: <Phone />,
      title: "PHONE",
      value: "+1 207 881 8202",
    },
    {
      icon: <Mail />,
      title: "EMAIL",
      value: "info@optima-solutions.cloud",
    },
    {
      icon: <MdLocationOn />,
      title: "LOCATION",
      value: "Lebanon",
    },
    {
      icon: <Clock />,
      title: "RESPONSE TIME",
      value: "Within 24 hours",
    },
  ];

  return (
    <motion.section
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
      className="
        w-full
        px-5
        sm:px-8
        lg:px-12
        py-20
        md:py-28
        bg-[#fbfcfa]
      "
    >
      {/* Header */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="max-w-3xl mb-14"
      >
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[1px] bg-[#0D9DB8]" />

          <p
            className="
              text-sm
              tracking-[0.25em]
              font-semibold
              text-[#0D9DB8]
            "
          >
            DON'T HESITATE TO REACH OUT
          </p>
        </div>

        <h2
          className="
            text-5xl
            md:text-6xl
            font-serif
            font-medium
            leading-tight
            text-[#183253]
          "
        >
          We're here to help
        </h2>

        <p
          className="
            mt-6
            text-lg
            md:text-xl
            leading-relaxed
            text-[#49647d]
            max-w-2xl
          "
        >
          Four ways to reach us. Pick whichever's easiest — we respond to every
          message within one business day.
        </p>
      </motion.div>

      {/* Cards */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
          gap-5
        "
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -6,
            }}
            className="
              relative
              min-h-[250px]
              rounded-2xl
              border
              border-[#dce6ed]
              bg-white
              p-8
              will-change-transform
            "
          >
            {/* Icon */}
            <div
              className="
                w-14
                h-14
                rounded-xl
                flex
                items-center
                justify-center
                bg-gradient-to-br
                from-[#e8f7fa]
                to-[#f9edf0]
                text-[#0D9DB8]
              "
            >
              {React.cloneElement(item.icon, {
                className: "w-6 h-6",
              })}
            </div>

            {/* Arrow */}
            <ArrowUpRight
              className="
                absolute
                top-8
                right-8
                w-5
                h-5
                text-[#7892ad]
              "
            />

            <div className="mt-8">
              <p
                className="
                  text-sm
                  tracking-[0.15em]
                  font-semibold
                  text-[#7892ad]
                "
              >
                {item.title}
              </p>

              <p
                className="
                  mt-4
                  text-lg
                  font-medium
                  text-[#183253]
                  break-words
                "
              >
                {item.value}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ContactInfo;