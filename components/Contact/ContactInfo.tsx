"use client";

import { Clock, Mail, ArrowUpRight } from "lucide-react";
import React from "react";
import { MdLocationOn } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactInfo = () => {
  const items = [
    {
      icon: <FaWhatsapp />,
      title: "WHATSAPP",
      value: "+1 207 881 8202",
      link: "https://wa.me/12078818202",
    },
    {
      icon: <Mail />,
      title: "EMAIL",
      value: "info@optima-solutions.cloud",
      link: "mailto:info@optima-solutions.cloud",
    },
    {
      icon: <MdLocationOn />,
      title: "MADE BY",
      value: "Optima Solutions",
      link: "https://optima-solutions.cloud",
    },
    {
      icon: <Clock />,
      title: "RESPONSE TIME",
      value: "Within 24 hours",
      link: null,
    },
  ];

  const handleCardClick = (link: string | null) => {
    if (!link) return;
    if (link.startsWith("http")) {
      window.open(link, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = link;
    }
  };

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
        min-h-[100vh]
        h-auto
        flex
        flex-col
        justify-center
        items-center
        px-3
        sm:px-5
        md:px-8
        lg:px-12
        py-6
        sm:py-8
        md:py-10
        lg:py-14
        bg-[#fbfcfa]
        overflow-y-auto
      "
    >
      <div className="w-full max-w-7xl mx-auto">
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
          className="mb-4 sm:mb-6 md:mb-8 lg:mb-10"
        >
          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
            <span className="w-4 sm:w-5 md:w-6 lg:w-8 h-[1px] bg-[#0D9DB8]" />
            <p className="
              text-[8px]
              sm:text-[9px]
              md:text-[10px]
              lg:text-xs
              tracking-[0.15em]
              sm:tracking-[0.2em]
              md:tracking-[0.25em]
              font-semibold
              text-[#0D9DB8]
              uppercase
            ">
              Don't hesitate to reach out
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-2 sm:gap-3">
            <h2 className="
              text-2xl
              sm:text-3xl
              md:text-4xl
              lg:text-5xl
              xl:text-6xl
              font-serif
              font-medium
              leading-tight
              text-[#183253]
            ">
              We're here to help
            </h2>

            <p className="
              text-xs
              sm:text-sm
              md:text-base
              lg:text-lg
              leading-relaxed
              text-[#49647d]
              max-w-md
              lg:max-w-sm
              xl:max-w-md
              flex-shrink-0
            ">
              Three ways to reach us — we respond within one business day.
            </p>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="
          grid
          grid-cols-1
          xs:grid-cols-2
          lg:grid-cols-4
          gap-2
          sm:gap-3
          md:gap-4
          lg:gap-5
        ">
          {items.map((item, index) => {
            const isClickable = !!item.link;
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: isClickable ? -3 : 0,
                  transition: { duration: 0.2 },
                }}
                onClick={() => isClickable && handleCardClick(item.link)}
                onKeyDown={(e) => {
                  if (isClickable && (e.key === "Enter" || e.key === " ")) {
                    e.preventDefault();
                    handleCardClick(item.link);
                  }
                }}
                role={isClickable ? "button" : undefined}
                tabIndex={isClickable ? 0 : undefined}
                className={`
                  relative
                  rounded-xl
                  sm:rounded-2xl
                  border
                  border-[#dce6ed]
                  bg-white
                  p-3
                  sm:p-4
                  md:p-5
                  lg:p-6
                  will-change-transform
                  flex
                  flex-col
                  min-h-[110px]
                  xs:min-h-[120px]
                  sm:min-h-[130px]
                  md:min-h-[150px]
                  lg:min-h-[170px]
                  xl:min-h-[190px]
                  transition-shadow
                  hover:shadow-lg
                  group
                  ${isClickable ? 'cursor-pointer hover:border-[#0D9DB8]' : ''}
                `}
              >
                {/* Icon */}
                <div className="
                  w-8
                  sm:w-9
                  md:w-10
                  lg:w-11
                  xl:w-12
                  h-8
                  sm:h-9
                  md:h-10
                  lg:h-11
                  xl:h-12
                  rounded-lg
                  sm:rounded-xl
                  flex
                  items-center
                  justify-center
                  bg-gradient-to-br
                  from-[#e8f7fa]
                  to-[#f9edf0]
                  text-[#0D9DB8]
                  flex-shrink-0
                ">
                  {React.cloneElement(item.icon, {
                    className: "w-3.5 sm:w-4 md:w-4.5 lg:w-5 xl:w-5.5 h-3.5 sm:h-4 md:h-4.5 lg:h-5 xl:h-5.5",
                  })}
                </div>

                {/* Arrow - only for clickable cards */}
                {isClickable && (
                  <ArrowUpRight className="
                    absolute
                    top-2.5
                    sm:top-3
                    md:top-4
                    lg:top-5
                    xl:top-6
                    right-2.5
                    sm:right-3
                    md:right-4
                    lg:right-5
                    xl:right-6
                    w-3
                    sm:w-3.5
                    md:w-4
                    lg:w-4.5
                    xl:w-5
                    h-3
                    sm:h-3.5
                    md:h-4
                    lg:h-4.5
                    xl:h-5
                    text-[#7892ad]
                    transition-transform
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "/>
                )}

                {/* Content */}
                <div className="mt-auto pt-2 sm:pt-3 md:pt-4 lg:pt-5">
                  <p className="
                    text-[8px]
                    sm:text-[9px]
                    md:text-[10px]
                    lg:text-xs
                    tracking-[0.1em]
                    sm:tracking-[0.12em]
                    md:tracking-[0.15em]
                    font-semibold
                    text-[#7892ad]
                    uppercase
                  ">
                    {item.title}
                  </p>

                  <p className="
                    mt-1
                    sm:mt-1.5
                    md:mt-2
                    lg:mt-2.5
                    text-xs
                    sm:text-sm
                    md:text-base
                    lg:text-lg
                    xl:text-xl
                    font-medium
                    text-[#183253]
                    break-words
                    leading-tight
                  ">
                    {item.value}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default ContactInfo;