"use client";
import { motion } from "framer-motion";
import React from "react";

const pillars = [
  {
    icon: "🤖",
    title: "AI-Powered Visualization",
    body: "DecoMind helps you visualize and create stunning interior spaces in seconds. No design experience needed — just your vision and our AI.",
    tag: "30s renders",
  },
  {
    icon: "🎨",
    title: "Endless Customization",
    body: "Choose from 10 wood types, 8 color palettes, 10 furniture styles, and 8 materials. Our AI generates photorealistic room designs based on your preferences.",
    tag: "36 combos",
  },
  {
    icon: "🏠",
    title: "Every Room Covered",
    body: "Browse by category — Bedroom, Living Room, Kitchen, Bathroom, Closet, Dining, or Office — and find the perfect design for every space.",
    tag: "7 categories",
  },
  {
    icon: "💎",
    title: "Professional Design, No Price Tag",
    body: "Pro results without the $2k+ consultation fee. Iterate as many times as you like, export when you love it.",
    tag: "$0 design fees",
  },
];

const MiddleDecription = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');

        .md-outer {
          background: #f7f8f6;
          min-height: 100svh;
          height: auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: clamp(1rem, 2.5vh, 2rem) clamp(1.5rem, 6vw, 5rem);
        }

        .md-container {
          max-width: 72rem;
          margin: 0 auto;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: clamp(0.75rem, 1.5vh, 1.5rem);
        }

        .md-section-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: clamp(0.6rem, 0.8vw, 0.72rem);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #0D9DB8;
        }

        .md-section-label-line {
          width: 1.5rem;
          height: 1.5px;
          background: #0D9DB8;
          flex-shrink: 0;
        }

        .md-section-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(1.2rem, 2.4vw, 2.5rem);
          font-weight: 700;
          color: #0f1f1c;
          line-height: 1.15;
          margin: 0;
        }

        .md-section-sub {
          font-size: clamp(0.72rem, 0.95vw, 0.95rem);
          color: #6b8278;
          line-height: 1.5;
          max-width: 560px;
          margin: 0;
        }

        .md-pillars {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: clamp(0.5rem, 1vw, 0.875rem);
        }

        /* At 150% zoom (effective ~960px on 1440 screen) switch to horizontal card layout to save vertical space */
        @media (max-width: 1100px) {
          .md-pillar-card {
            flex-direction: row !important;
            align-items: flex-start !important;
            gap: 0.75rem !important;
          }
          .md-pillar-icon {
            flex-shrink: 0 !important;
          }
          .md-pillar-content {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
          }
        }

        .md-pillar-card {
          background: white;
          border: 1px solid #e8edeb;
          border-radius: 1rem;
          padding: clamp(0.75rem, 1.5vw, 1.25rem);
          display: flex;
          flex-direction: column;
          gap: clamp(0.3rem, 0.6vh, 0.5rem);
          transition: box-shadow 0.2s, transform 0.2s;
        }

        .md-pillar-card:hover {
          box-shadow: 0 6px 24px rgba(26,58,92,0.09);
          transform: translateY(-2px);
        }

        .md-pillar-icon {
          width: clamp(1.75rem, 2.5vw, 2.5rem);
          height: clamp(1.75rem, 2.5vw, 2.5rem);
          background: #f0f4f2;
          border-radius: 0.6rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: clamp(0.9rem, 1.4vw, 1.25rem);
          flex-shrink: 0;
        }

        .md-pillar-title {
          font-size: clamp(0.8rem, 1.05vw, 0.95rem);
          font-weight: 700;
          color: #0f1f1c;
        }

        .md-pillar-body {
          font-size: clamp(0.65rem, 0.85vw, 0.8rem);
          color: #6b8278;
          line-height: 1.55;
        }

        .md-pillar-tag {
          display: inline-block;
          font-size: clamp(0.58rem, 0.72vw, 0.68rem);
          font-weight: 600;
          color: #0D9DB8;
          background: #e6f7fa;
          padding: 0.15rem 0.5rem;
          border-radius: 999px;
          width: fit-content;
        }

        @media (max-width: 768px) {
          .md-outer {
            padding: 2rem 1.25rem !important;
          }
          .md-pillars { grid-template-columns: 1fr !important; }
          .md-pillar-card { flex-direction: column !important; }
        }
      `}</style>

      <div className="md-outer">
        <div className="md-container">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ display: "flex", flexDirection: "column", gap: "clamp(0.3rem, 0.6vh, 0.5rem)" }}
          >
            <div className="md-section-label">
              <div className="md-section-label-line" />
              What we do
            </div>
            <h2 className="md-section-title">Design tools that feel like magic</h2>
            <p className="md-section-sub">
              Each card leads with an icon, a concrete claim, and room to breathe — instead of vague one-liners.
            </p>
          </motion.div>

          <motion.div
            className="md-pillars"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          >
            {pillars.map(({ icon, title, body, tag }) => (
              <motion.div
                key={title}
                className="md-pillar-card"
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } }}
              >
                <div className="md-pillar-icon">{icon}</div>
                <div className="md-pillar-content">
                  <div className="md-pillar-title">{title}</div>
                  <div className="md-pillar-body">{body}</div>
                  <div className="md-pillar-tag">{tag}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default MiddleDecription;
