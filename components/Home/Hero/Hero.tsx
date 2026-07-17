"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const FRAME_COUNT = 164;
const FRAME_PATH = (n: number) =>
  `/Assets/Logo/frames/frame${String(n).padStart(4, "0")}.jpg`;

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const [isMobile, setIsMobile] = useState(false);
  const [framesLoaded, setFramesLoaded] = useState(false);

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Preload all frames on mobile
  useEffect(() => {
    if (!isMobile) return;
    let loaded = 0;
    const imgs: HTMLImageElement[] = [];
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new window.Image();
      img.src = FRAME_PATH(i);
      img.onload = () => {
        loaded++;
        if (loaded === FRAME_COUNT) setFramesLoaded(true);
      };
      imgs.push(img);
    }
    framesRef.current = imgs;
  }, [isMobile]);

  // Draw a specific frame on canvas — sharp on retina/high-DPR screens
  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    const img = framesRef.current[index];
    if (!canvas || !img) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const cssWidth =
      canvas.offsetWidth || canvas.parentElement?.offsetWidth || 260;
    // Always derive height from image aspect ratio — never trust offsetHeight on canvas
    const cssHeight = (cssWidth * img.naturalHeight) / img.naturalWidth;

    // Set canvas.style so the element actually takes up that space in the layout
    canvas.style.width = `${cssWidth}px`;
    canvas.style.height = `${cssHeight}px`;

    // Set internal resolution to CSS size × DPR for sharp rendering
    canvas.width = cssWidth * dpr;
    canvas.height = cssHeight * dpr;
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, cssWidth, cssHeight);
    ctx.drawImage(img, 0, 0, cssWidth, cssHeight);
  };

  // Mobile scroll scrub via canvas
  useEffect(() => {
    if (!isMobile || !framesLoaded) return;
    const outer = sectionRef.current;
    if (!outer) return;

    drawFrame(0);

    let rafId: number | null = null;

    const scrub = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        const rect = outer.getBoundingClientRect();
        const scrollableDistance = outer.offsetHeight - window.innerHeight;
        if (scrollableDistance <= 0) return;
        const scrolled = -rect.top;
        const progress = Math.min(
          Math.max(scrolled / scrollableDistance, 0),
          1,
        );
        const frameIndex = Math.min(
          Math.floor(progress * FRAME_COUNT),
          FRAME_COUNT - 1,
        );
        if (frameIndex !== currentFrameRef.current) {
          currentFrameRef.current = frameIndex;
          drawFrame(frameIndex);
        }
      });
    };

    window.addEventListener("scroll", scrub, { passive: true });
    scrub();
    return () => {
      window.removeEventListener("scroll", scrub);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [isMobile, framesLoaded]);

  // Desktop scroll scrub via video
  useEffect(() => {
    if (isMobile) return;
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
      let lastSeek = 0;
      const scrub = () => {
        const now = performance.now();
        if (now - lastSeek < 16) return;
        lastSeek = now;
        if (!video.duration || isNaN(video.duration)) return;
        const rect = outer.getBoundingClientRect();
        const scrollableDistance = outer.offsetHeight - window.innerHeight;
        if (scrollableDistance <= 0) return;
        const scrolled = -rect.top;
        const progress = Math.min(
          Math.max(scrolled / scrollableDistance, 0),
          1,
        );
        video.currentTime = progress * video.duration;
      };
      target.addEventListener("scroll", scrub, { passive: true });
      scrub();
      cleanupScroll = () => target.removeEventListener("scroll", scrub);
    };

    video.addEventListener("loadedmetadata", attach, { once: true });
    if (video.readyState >= 1) attach();
    window.addEventListener("resize", attach);
    return () => {
      if (cleanupScroll) cleanupScroll();
      window.removeEventListener("resize", attach);
    };
  }, [isMobile]);

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
          <motion.div className="relative">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800">
              <TypeAnimation
                sequence={[2700, "Transform Any Room AI-Powered Design"]}
                speed={50}
                cursor={true}
              />
            </h1>
            {/* <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeOut", duration: 0.5, delay: 2.7 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800"
            >
              Transform Any Room{" "}
              <motion.span
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="pb-2 text-2xl sm:text-3xl md:text-4xl font-bold text-center text-transparent bg-linear-to-r bg-clip-text to-[#1A3A5C] from-[#0D9DB8]"
              >
                AI-Powered
              </motion.span>
              <span> Design</span>
            </motion.h1> */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeOut", duration: 0.5, delay: 2.9 }}
              className="text-sm sm:text-base md:text-lg text-center text-gray-400"
            >
              Generate stunning furniture layouts and interior designs in
              seconds. Choose from wood types, color palettes, furniture styles,
              and materials no design experience needed.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeOut", duration: 0.5, delay: 3.1 }}
              className="hero-buttons flex max-[768px]:flex-col flex-row max-[768px]:space-y-3 md:space-x-3 mt-3 items-center"
            >
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
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeOut", duration: 0.5, delay: 2.9 }}
            className="hero-lottie relative w-full max-w-xl"
          >
            {isMobile && (
              <canvas
                ref={canvasRef}
                className="w-full h-auto"
                style={{ mixBlendMode: "screen", maxHeight: "50vh" }}
              />
            )}
            {!isMobile && (
              <video
                ref={videoRef}
                muted
                playsInline
                preload="auto"
                className="relative w-full h-auto"
                style={{ mixBlendMode: "screen", maxHeight: "50vh" }}
              >
                <source
                  src="/Assets/Logo/LogoLoop_smooth.mp4"
                  type="video/mp4"
                />
              </video>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
