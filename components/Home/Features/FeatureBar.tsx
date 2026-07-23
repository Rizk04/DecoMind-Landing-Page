"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const checkItems = [
  {
    title: "360° room orbit",
    desc: "Drag to rotate, scroll to zoom — no headset required.",
  },
  {
    title: "Live material swap",
    desc: "Change wood, fabric, or wall color and watch it update in real time.",
  },
  {
    title: "Shareable walkthroughs",
    desc: "Send a link to your partner or contractor — they can explore it too.",
  },
];

const Feature = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');

        .feat-outer {
          background: #f7f8f6;
          min-height: 100svh;
          height: auto;
          display: flex;
          align-items: center;
          padding: clamp(2rem, 6vh, 5rem) clamp(1.5rem, 7vw, 7rem);
        }

        .feat-inner {
          width: 100%;
          max-width: 72rem;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(2rem, 5vw, 5rem);
          align-items: center;
        }

        .feat-text-col {
          display: flex;
          flex-direction: column;
          gap: clamp(1rem, 2vh, 1.5rem);
        }

        .feat-eyebrow {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: clamp(0.65rem, 0.85vw, 0.75rem);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #0D9DB8;
        }

        .feat-eyebrow-line {
          width: 1.5rem;
          height: 1.5px;
          background: #0D9DB8;
        }

        .feat-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(1.6rem, 3vw, 2.75rem);
          font-weight: 700;
          color: #1a2e2b;
          line-height: 1.15;
          margin: 0;
        }

        .feat-subtitle {
          font-size: clamp(0.8rem, 1.05vw, 1rem);
          color: #6b8278;
          line-height: 1.65;
          margin: 0;
        }

        .feat-checklist {
          display: flex;
          flex-direction: column;
          gap: clamp(0.75rem, 1.5vh, 1.25rem);
          margin-top: clamp(0.5rem, 1vh, 1rem);
        }

        .feat-check-item {
          display: flex;
          gap: clamp(0.6rem, 1vw, 0.875rem);
          align-items: flex-start;
        }

        .feat-check-icon {
          width: clamp(1.1rem, 1.4vw, 1.375rem);
          height: clamp(1.1rem, 1.4vw, 1.375rem);
          border-radius: 50%;
          background: #e6f7fa;
          color: #0D9DB8;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: clamp(0.6rem, 0.75vw, 0.75rem);
          flex-shrink: 0;
          margin-top: 0.15rem;
          font-weight: 700;
        }

        .feat-check-title {
          font-size: clamp(0.85rem, 1.1vw, 1rem);
          font-weight: 700;
          color: #1a2e2b;
          line-height: 1.3;
        }

        .feat-check-desc {
          font-size: clamp(0.7rem, 0.9vw, 0.875rem);
          color: #6b8278;
          line-height: 1.55;
          margin-top: 0.2rem;
        }

        .feat-visual-col {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .feat-visual-card {
          background: #1A3A5C;
          border-radius: 1.5rem;
          padding: clamp(0.75rem, 1.5vw, 1.25rem);
          box-shadow: 0 20px 60px rgba(26,58,92,0.2);
          width: 100%;
          overflow: hidden;
          position: relative;
          aspect-ratio: 4/3;
        }

        .feat-visual-badge {
          position: absolute;
          top: clamp(0.6rem, 1vw, 1rem);
          left: clamp(0.6rem, 1vw, 1rem);
          background: white;
          border-radius: 999px;
          padding: 0.3rem 0.75rem;
          font-size: clamp(0.65rem, 0.8vw, 0.75rem);
          font-weight: 600;
          color: #1a2e2b;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          z-index: 10;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .feat-visual-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #ef4444;
          animation: feat-pulse 1.5s ease-in-out infinite;
          flex-shrink: 0;
        }

        @keyframes feat-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        @media (max-width: 768px) {
          .feat-outer {
            padding: 2rem 1.25rem;
            align-items: flex-start;
          }
          .feat-inner {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .feat-visual-card {
            aspect-ratio: 3/2 !important;
          }
        }
      `}</style>

      <div className="feat-outer">
        <div className="feat-inner">

          {/* Left: text + checklist */}
          <motion.div
            className="feat-text-col"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="feat-eyebrow">
              <div className="feat-eyebrow-line" />
              3D Visualization
            </div>

            <h2 className="feat-title">
              Walk through your future room before you buy
            </h2>

            <p className="feat-subtitle">
              Rotate, zoom, and explore every angle. The original page described this feature in text — showing it makes it real.
            </p>

            <motion.div
              className="feat-checklist"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12 } },
              }}
            >
              {checkItems.map(({ title, desc }) => (
                <motion.div
                  key={title}
                  className="feat-check-item"
                  variants={{
                    hidden: { opacity: 0, x: -15 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
                  }}
                >
                  <div className="feat-check-icon">✓</div>
                  <div>
                    <div className="feat-check-title">{title}</div>
                    <div className="feat-check-desc">{desc}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: dark card with image */}
          <motion.div
            className="feat-visual-col"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <div className="feat-visual-card">
              <div className="feat-visual-badge">
                <span className="feat-visual-badge-dot" />
                Live 3D preview
              </div>
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <Image
                  src="/Assets/images/ai-design.jpg"
                  alt="3D room preview"
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "center top",
                    borderRadius: "1rem",
                  }}
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </>
  );
};

export default Feature;
