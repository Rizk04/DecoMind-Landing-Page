"use client";

import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { motion } from "framer-motion";
import { Cormorant_Garamond, Manrope } from "next/font/google";

export const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const bodyFont = Manrope({
  subsets: ["latin"],
});

const ContactUs = () => {
  const phoneNumber = "+12078818202";
  const email = "Info@optima-solutions.cloud";

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}`,
      "_blank"
    );
  };

  const handleEmail = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <section className="h-full w-full bg-[#0B1523] text-white overflow-hidden flex items-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55 }}
        className="mx-auto flex h-full w-full max-w-[1700px] flex-col justify-center px-[clamp(1.5rem,4vw,5rem)] py-[clamp(2rem,4vh,4rem)]"
      >
        <div className="grid h-full items-center gap-[clamp(2rem,5vw,6rem)] lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left */}
          <div className="flex flex-col justify-center">
            <span className="mb-4 text-[clamp(.8rem,.9vw,1rem)] uppercase tracking-[0.35em] text-[#4EA1FF]">
              Contact
            </span>

            <h1 className={` ${headingFont.className} max-w-[12ch] text-[clamp(2.5rem,5vw,5.4rem)] font-semibold leading-[0.95]`}>
              Let's build
              <br />
              something
              <br />
              great.
            </h1>

            <p className="mt-8 max-w-[36rem] text-[clamp(1rem,1.1vw,1.2rem)] leading-relaxed text-white/60">
              Whether you're looking for cloud solutions, software
              development, AI integration, or simply have a question, we'd
              love to hear from you. Reach out through your preferred method
              and our team will get back to you.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-[clamp(1rem,2vw,1.6rem)]">
            <button
              onClick={handleWhatsApp}
              className="group rounded-[28px] border border-white/10 bg-white/[0.03] p-[clamp(1.25rem,2vw,2rem)] text-left transition-all duration-300 hover:-translate-y-1 hover:border-green-400/40 hover:bg-white/[0.05]"
            >
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green-500/10 text-2xl text-green-400">
                  <BsWhatsapp />
                </div>

                <div className="min-w-0">
                  <p className="text-sm uppercase tracking-widest text-white/40">
                    WhatsApp
                  </p>

                  <h3 className="mt-2 text-[clamp(1.2rem,1.5vw,1.7rem)] font-medium">
                    +1 (207) 881-8202
                  </h3>

                  <p className="mt-4 text-[clamp(.9rem,.95vw,1rem)] leading-relaxed text-white/50">
                    Chat with our team directly for quick support and project
                    inquiries.
                  </p>
                </div>
              </div>
            </button>

            <button
              onClick={handleEmail}
              className="group rounded-[28px] border border-white/10 bg-white/[0.03] p-[clamp(1.25rem,2vw,2rem)] text-left transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[0.05]"
            >
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 text-2xl text-[#4EA1FF]">
                  <MdMail />
                </div>

                <div className="min-w-0">
                  <p className="text-sm uppercase tracking-widest text-white/40">
                    Email
                  </p>

                  <h3 className="mt-2 break-all text-[clamp(1rem,1.35vw,1.5rem)] font-medium">
                    {email}
                  </h3>

                  <p className="mt-4 text-[clamp(.9rem,.95vw,1rem)] leading-relaxed text-white/50">
                    Send us the details of your project and we'll respond as
                    soon as possible.
                  </p>
                </div>
              </div>
            </button>

            <div className="mt-2 border-t border-white/10 pt-6">
              <p className="text-[clamp(.85rem,.9vw,.95rem)] text-white/35">
                Available Monday – Friday
              </p>

              <p className="mt-2 text-[clamp(1rem,1vw,1.1rem)] text-white/70">
                Fast responses. Professional support. Reliable solutions.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;