"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FeatureList = () => {
  const [animation, setAnimation] = useState(null);
  const [animation2, setAnimation2] = useState(null);
  const [animation3, setAnimation3] = useState(null);

  useEffect(() => {
    fetch("/Assets/Lottie/creative.json").then((res) => res.json()).then(setAnimation);
  }, []);
  useEffect(() => {
    fetch("/Assets/Lottie/money.json").then((res) => res.json()).then(setAnimation2);
  }, []);
  useEffect(() => {
    fetch("/Assets/Lottie/confidence.json").then((res) => res.json()).then(setAnimation3);
  }, []);

  if (!animation || !animation2 || !animation3) return null;

  const items = [
    {
      emoji: "🎨",
      title: "Total Creative Control",
      description: "Choose from 10 wood types, 8 color palettes, 10 furniture styles, and 8 materials. Mix and match to create a space that's uniquely yours.",
    },
    {
      emoji: "💰",
      title: "Save Thousands on Designers",
      description: "Visualize your dream room before buying a single piece of furniture. No expensive interior designers needed — AI does it for free.",
    },
    {
      emoji: "✅",
      title: "Buy With Confidence",
      description: "See exactly how furniture looks in your space before purchasing. Eliminate guesswork and expensive return shipping fees.",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');

        .fl-outer {
          background: #ffffff;
          min-height: 100svh;
          height: auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: clamp(2rem, 6vh, 5rem) clamp(1.5rem, 7vw, 7rem);
          gap: clamp(2rem, 4vh, 3.5rem);
        }

        .fl-header {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          max-width: 580px;
        }

        .fl-eyebrow {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: clamp(0.65rem, 0.85vw, 0.75rem);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #0D9DB8;
        }

        .fl-eyebrow-line {
          width: 1.5rem;
          height: 1.5px;
          background: #0D9DB8;
        }

        .fl-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(1.6rem, 3.2vw, 3rem);
          font-weight: 700;
          color: #1a2e2b;
          line-height: 1.15;
          margin: 0;
        }

        .fl-subtitle {
          font-size: clamp(0.8rem, 1.05vw, 1rem);
          color: #6b8278;
          line-height: 1.6;
          margin: 0;
        }

        .fl-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(0.75rem, 1.5vw, 1.5rem);
        }

        .fl-card {
          background: #f7f8f6;
          border: 1px solid #e8edeb;
          border-radius: 1.25rem;
          padding: clamp(1.25rem, 2.5vw, 2rem);
          display: flex;
          flex-direction: column;
          gap: 1rem;
          transition: box-shadow 0.2s, transform 0.2s;
          cursor: default;
        }

        .fl-card:hover {
          box-shadow: 0 8px 32px rgba(26,58,92,0.10);
          transform: translateY(-3px);
        }

        .fl-card-icon {
          width: clamp(2.25rem, 3.5vw, 3rem);
          height: clamp(2.25rem, 3.5vw, 3rem);
          background: white;
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: clamp(1.1rem, 1.8vw, 1.5rem);
          box-shadow: 0 1px 4px rgba(0,0,0,0.07);
        }

        .fl-card-title {
          font-size: clamp(0.9rem, 1.25vw, 1.1rem);
          font-weight: 700;
          color: #1a2e2b;
          line-height: 1.3;
        }

        .fl-card-desc {
          font-size: clamp(0.72rem, 0.95vw, 0.875rem);
          color: #6b8278;
          line-height: 1.65;
        }

        @media (max-width: 768px) {
          .fl-outer {
            padding: 2rem 1.25rem;
            min-height: unset;
          }
          .fl-cards {
            grid-template-columns: 1fr !important;
            gap: 0.75rem !important;
          }
        }
      `}</style>

      <div className="fl-outer">
        {/* Header */}
        <motion.div
          className="fl-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="fl-eyebrow">
            <div className="fl-eyebrow-line" />
            Why DecoMind
          </div>
          <h2 className="fl-title">The smarter way to design your home</h2>
          <p className="fl-subtitle">
            No design experience needed. Just your vision and our AI — delivering professional results in seconds.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="fl-cards"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {items.map(({ emoji, title, description }) => (
            <motion.div
              key={title}
              className="fl-card"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
              }}
            >
              <div className="fl-card-icon">{emoji}</div>
              <div className="fl-card-title">{title}</div>
              <div className="fl-card-desc">{description}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default FeatureList;
