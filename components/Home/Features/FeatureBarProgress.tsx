"use client";

import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const styles = ["Modern", "Rustic", "Mid-Century", "Scandinavian", "Industrial", "Japandi", "Bohemian", "Minimalist", "Art Deco", "Coastal"];

const FeatureBarProgress = () => {
  const count1 = useMotionValue(0);
  const count2 = useMotionValue(0);
  const count3 = useMotionValue(0);
  const count4 = useMotionValue(0);

  const rounded1 = useTransform(count1, (latest) => Math.floor(latest));
  const rounded2 = useTransform(count2, (latest) => Math.floor(latest));
  const rounded3 = useTransform(count3, (latest) => latest.toFixed(1));
  const rounded4 = useTransform(count4, (latest) => Math.floor(latest));

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (inView) {
      animate(count1, 500, { duration: 2, ease: "easeOut" });
      animate(count2, 1200, { duration: 2, ease: "easeOut" });
      animate(count3, 4.8, { duration: 2, ease: "easeOut" });
      animate(count4, 50, { duration: 2, ease: "easeOut" });
    }
  }, [inView]);

  const stats = [
    { value: rounded1, suffix: "+", label: "Happy Customers" },
    { value: rounded2, suffix: "+", label: "AI-Generated Designs" },
    { value: rounded3, suffix: "★", label: "User Rating" },
    { value: rounded4, suffix: "+", label: "Styles & Materials" },
  ];

  const cards = [
    {
      emoji: "🪵",
      title: "100+ style combinations",
      desc: "10 wood types — oak, walnut, ash, hickory and more. 8 color palettes, 10 furniture styles, mix and match freely.",
    },
    {
      emoji: "✨",
      title: "AI-generated in seconds",
      desc: "Upload a photo of your room. Get a fully furnished, photoreal redesign in under 30 seconds — no prompt engineering.",
    },
    {
      emoji: "💸",
      title: "Skip the interior designer",
      desc: "Pro results without the $2k+ consultation fee. Iterate as many times as you like, export when you love it.",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');

       .fbp-outer {
  background: #f7f8f6;
  min-height: 100svh;
  height: auto; /* add this */
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

        /* ── Ticker ── */
        .fbp-ticker-wrap {
          width: 100%;
          margin-bottom: -1rem;
          overflow: hidden;
          border-top: 1px solid #e4e9e7;
          border-bottom: 1px solid #e4e9e7;
          padding: clamp(0.6rem, 1.2vh, 1rem) 0;
          background: #f7f8f6;
        }
        .fbp-ticker-track {
          display: flex;
          width: max-content;
          animation: ticker-scroll 28s linear infinite;
        }
        .fbp-ticker-track:hover {
          animation-play-state: paused;
        }
        @keyframes ticker-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .fbp-ticker-item {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0 clamp(1.2rem, 2.5vw, 2.5rem);
          font-size: clamp(0.85rem, 1.2vw, 1.1rem);
          font-weight: 500;
          color: #3d5a52;
          white-space: nowrap;
        }
        .fbp-ticker-dot {
          color: #0D9DB8;
          font-size: 0.6rem;
        }

        /* ── Main content ── */
       .fbp-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: clamp(1.25rem, 3vh, 4rem) clamp(1.5rem, 7vw, 7rem);
  gap: clamp(1.25rem, 2.5vh, 3.5rem); /* tighter gap at high zoom */
}

        /* ── Header ── */
        .fbp-header {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          max-width: 640px;
        }
        .fbp-eyebrow {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: clamp(0.65rem, 0.85vw, 0.75rem);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #0D9DB8;
        }
        .fbp-eyebrow-line {
          width: 1.5rem;
          height: 1.5px;
          background: #0D9DB8;
        }
        .fbp-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(1.4rem, 2.8vw, 3rem); /* slightly smaller ceiling */
  font-weight: 700;
  color: #1a2e2b;
  line-height: 1.15;
  margin: 0;
}
        .fbp-subtitle {
          font-size: clamp(0.8rem, 1.05vw, 1rem);
          color: #6b8278;
          line-height: 1.6;
          margin: 0;
        }

        /* ── Cards ── */
        .fbp-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(0.75rem, 1.5vw, 1.5rem);
        }
        .fbp-card {
  background: white;
  border: 1px solid #e8edeb;
  border-radius: 1.25rem;
  padding: clamp(0.75rem, 1.5vw, 1.75rem); /* tighter at high zoom */
  display: flex;
  flex-direction: column;
  gap: 0.5rem; /* was 0.75rem */
  transition: box-shadow 0.2s, transform 0.2s;
}

        .fbp-card:hover {
          box-shadow: 0 8px 32px rgba(26,58,92,0.10);
          transform: translateY(-2px);
        }
        .fbp-card-icon {
          width: clamp(2rem, 3vw, 2.75rem);
          height: clamp(2rem, 3vw, 2.75rem);
          background: #f0f4f2;
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: clamp(1rem, 1.5vw, 1.375rem);
        }
        .fbp-card-title {
          font-size: clamp(0.85rem, 1.2vw, 1.05rem);
          font-weight: 700;
          color: #1a2e2b;
          line-height: 1.3;
        }
        .fbp-card-desc {
          font-size: clamp(0.7rem, 0.95vw, 0.875rem);
          color: #6b8278;
          line-height: 1.6;
        }

        /* ── Stats ── */
        
.fbp-stats {
  display: flex;
  gap: clamp(1rem, 3vw, 4rem);
  padding-top: clamp(0.75rem, 1.5vh, 1.5rem);
  border-top: 1px solid #e4e9e7;
  flex-wrap: wrap;
}
        .fbp-stat-value {
          font-size: clamp(1.2rem, 2vw, 1.75rem);
          font-weight: 700;
          color: #1a2e2b;
        }
        .fbp-stat-label {
          font-size: clamp(0.6rem, 0.75vw, 0.7rem);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #8aaa9f;
          margin-top: 0.1rem;
        }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .fbp-content {
            padding: 2rem 1.25rem;
          }
          .fbp-cards {
            grid-template-columns: 1fr !important;
            gap: 0.75rem !important;
          }
          .fbp-stats {
            flex-wrap: wrap;
            gap: 1.25rem;
          }
        }
      `}</style>

      <div className="fbp-outer">

        {/* Ticker */}
        <div className="fbp-ticker-wrap">
          <div className="fbp-ticker-track">
            {[...styles, ...styles].map((s, i) => (
              <span key={i} className="fbp-ticker-item">
                {s}
                <span className="fbp-ticker-dot">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* Main */}
        <div className="fbp-content">

          {/* Header */}
          <motion.div
            className="fbp-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="fbp-eyebrow">
              <div className="fbp-eyebrow-line" />
              Features
            </div>
            <h2 className="fbp-title">
              Everything you need to design your space
            </h2>
            <p className="fbp-subtitle">
              Each card leads with an icon, a concrete claim, and a link to go deeper — instead of vague one-liners.
            </p>
          </motion.div>

          {/* Cards */}
          <motion.div
            className="fbp-cards"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
          >
            {cards.map(({ emoji, title, desc }) => (
              <motion.div
                key={title}
                className="fbp-card"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
                }}
              >
                <div className="fbp-card-icon">{emoji}</div>
                <div className="fbp-card-title">{title}</div>
                <div className="fbp-card-desc">{desc}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            ref={ref}
            className="fbp-stats"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {stats.map(({ value, suffix, label }) => (
              <div key={label}>
                <div className="fbp-stat-value">
                  <motion.span>{value}</motion.span>{suffix}
                </div>
                <div className="fbp-stat-label">{label}</div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </>
  );
};

export default FeatureBarProgress;
