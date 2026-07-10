"use client";
import Lottie from "lottie-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa6";
import { GrGooglePay } from "react-icons/gr";
import { motion } from "framer-motion";

const Hero = () => {
  const [animation, setAnimation] = useState(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    fetch("/Assets/Lottie/houseAnimation.json")
      .then((res) => res.json())
      .then(setAnimation);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const outer = sectionRef.current;
    if (!video || !outer) return;

    let cleanupScroll: (() => void) | null = null;

    const attach = () => {
      if (cleanupScroll) cleanupScroll();

      const potentialContainer = outer.closest(
        ".md\\:overflow-y-scroll",
      ) as HTMLElement | null;

      let scrollContainer: HTMLElement | null = null;
      if (potentialContainer) {
        const style = window.getComputedStyle(potentialContainer);
        if (style.overflowY === "scroll" || style.overflowY === "auto") {
          scrollContainer = potentialContainer;
        }
      }

      const target: HTMLElement | Window = scrollContainer || window;

      // Throttle seeks — mobile video decoders cap out around 15fps of seeks.
      // Sending seeks faster than that builds a backlog and causes stutter.
      const isMobile = window.innerWidth <= 768;
      const SEEK_INTERVAL = isMobile ? 66 : 16; // ~15fps mobile, ~60fps desktop
      let lastSeek = 0;

      const applyScrub = () => {
        if (!video.duration || isNaN(video.duration)) return;
        const rect = outer.getBoundingClientRect();
        const scrollableDistance = outer.offsetHeight - window.innerHeight;
        if (scrollableDistance <= 0) return;
        const scrolled = -rect.top;
        const progress = Math.min(Math.max(scrolled / scrollableDistance, 0), 1);
        video.currentTime = progress * video.duration;
      };

      const scrub = () => {
        const now = performance.now();
        if (now - lastSeek < SEEK_INTERVAL) return;
        lastSeek = now;
        applyScrub();
      };

      target.addEventListener("scroll", scrub, { passive: true });
      applyScrub(); // set initial frame

      cleanupScroll = () => target.removeEventListener("scroll", scrub);
    };

    const onLoaded = () => attach();
    video.addEventListener("loadedmetadata", onLoaded, { once: true });
    if (video.readyState >= 1) attach();

    window.addEventListener("resize", attach);

    return () => {
      if (cleanupScroll) cleanupScroll();
      window.removeEventListener("resize", attach);
    };
  }, []);

  return (
    <>
      <style>{`
        .hero-outer {
          position: relative;
          width: 95%;
          margin: 0 auto;
          height: 500vh;
        }
        .hero-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 3rem;
          padding: 0 1rem;
        }
        @media (max-width: 768px) {
          .hero-outer {
            height: 300vh;
          }
          .hero-sticky {
            flex-direction: column;
            gap: 1.5rem;
            padding: 2rem 1.25rem;
          }
          .hero-buttons {
            flex-direction: column !important;
          }
          .hero-buttons button {
            width: 100% !important;
          }
          .hero-lottie {
            max-width: 260px !important;
            margin: 0 auto !important;
          }
        }
        @media (min-width: 769px) {
          .hero-sticky {
            flex-direction: row;
          }
        }
      `}</style>

      <div ref={sectionRef} className="hero-outer bg-[#fafcf9]">
        <div className="hero-sticky">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeIn", duration: 0.5 }}
            className="relative"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800">
              Transform Any Room{" "}
              <motion.span
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="pb-2 text-2xl sm:text-3xl md:text-4xl font-bold text-center text-transparent bg-linear-to-r bg-clip-text to-[#1A3A5C] from-[#0D9DB8]"
              >
                AI-Powered
              </motion.span>
              <span> Design</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-center text-gray-400">
              Generate stunning furniture layouts and interior designs in
              seconds. Choose from wood types, color palettes, furniture styles,
              and materials no design experience needed.
            </p>
            <div className="hero-buttons flex max-[768px]:flex-col flex-row max-[768px]:space-y-3 md:space-x-3 mt-3 items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer max-[768px]:text-sm flex items-center justify-center gap-3 w-1/2 text-white rounded-md bg-[#1A3A5C] px-3 h-12 hover:bg-[#0D9DB8] font-medium hover:text-black transition-all duration-200 py-3"
              >
                <FaGooglePlay />
                Download Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer max-[768px]:text-sm flex items-center justify-center gap-3 w-1/2 text-black rounded-md border-2 border-[#1A3A5C] px-3 py-5 h-12 hover:bg-[#1A3A5C] font-medium hover:text-white transition-all duration-200"
              >
                <FaApple />
                Download Now
              </motion.button>
            </div>
          </motion.div>

          <div className="hero-lottie relative w-full max-w-xl">
            <video
              ref={videoRef}
              muted
              playsInline
              preload="auto"
              className="relative w-full h-auto"
              style={{ mixBlendMode: "screen", maxHeight: "50vh" }}
            >
              <source src="/Assets/Logo/LogoLoop_smooth.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
