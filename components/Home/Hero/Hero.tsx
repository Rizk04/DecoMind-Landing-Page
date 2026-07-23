"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function Counter({ to, suffix = "", decimals = 0 }: { to: number; suffix?: string; decimals?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const dur = 1600;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(to * eased);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  return (
    <div ref={ref} className="hero-counter-num">
      {val.toFixed(decimals)}{suffix}
    </div>
  );
}

function BeforeAfterSlider() {
  const [pos, setPos] = useState(55);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(2, Math.min(98, p)));
  };

  useEffect(() => {
    let raf = 0;
    let dir = 1;
    let p = 55;
    const animate = () => {
      if (!dragging.current) {
        p += dir * 0.25;
        if (p > 78) dir = -1;
        if (p < 32) dir = 1;
        setPos(p);
      }
      raf = requestAnimationFrame(animate);
    };
    const t = setTimeout(() => { raf = requestAnimationFrame(animate); }, 1200);
    return () => { clearTimeout(t); cancelAnimationFrame(raf); };
  }, []);

  return (
    <div className="hero-visual">
      <div
        className="ba"
        ref={ref}
        onMouseDown={(e) => { dragging.current = true; move(e.clientX); }}
        onMouseMove={(e) => { if (dragging.current) move(e.clientX); }}
        onMouseUp={() => { dragging.current = false; }}
        onMouseLeave={() => { dragging.current = false; }}
        onTouchStart={(e) => { dragging.current = true; move(e.touches[0].clientX); }}
        onTouchMove={(e) => { if (dragging.current) { move(e.touches[0].clientX); e.preventDefault(); } }}
        onTouchEnd={() => { dragging.current = false; }}
      >
        <div className="ba-img ba-before" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }} />
        <div className="ba-img ba-after">
          <div className="ba-after-inner" />
        </div>
        <span className="ba-tag left">Before</span>
        <span className="ba-tag right">AI After</span>
        <div className="ba-handle" style={{ left: `${pos}%` }}>
          <div className="ba-handle-knob">⟷</div>
        </div>
      </div>
    </div>
  );
}

const Hero = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&display=swap');

        .hero-outer {
          position: relative;
          width: 100%;
          min-height: 100vh;
        }

        .hero-sticky {
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .hero-sticky::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 60% 60% at 70% 50%, rgba(212,235,232,0.55) 0%, transparent 70%),
            radial-gradient(ellipse 50% 70% at 90% 20%, rgba(240,214,220,0.45) 0%, transparent 65%),
            #f0f4f3;
          z-index: 0;
        }

        .hero-container {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 72rem;
          margin: 0 auto;
          padding: clamp(2rem, 6vh, 5rem) clamp(1.5rem, 6vw, 5rem);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(2rem, 5vw, 5rem);
          align-items: center;
        }

        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: white;
          border: 1px solid #dde8e5;
          border-radius: 999px;
          padding: 0.35rem 1rem;
          font-size: clamp(0.7rem, 0.9vw, 0.8rem);
          color: #3d5a52;
          font-weight: 500;
          margin-bottom: clamp(1rem, 2.5vh, 1.75rem);
          box-shadow: 0 1px 4px rgba(0,0,0,0.05);
        }

        .hero-eyebrow .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #0D9DB8;
          display: inline-block;
          flex-shrink: 0;
        }

        .hero-h1 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2rem, 4vw, 4rem);
          font-weight: 700;
          line-height: 1.1;
          color: #0f1f1c;
          margin: 0 0 clamp(0.75rem, 2vh, 1.25rem);
        }

        .hero-h1 em {
          font-style: italic;
          color: #0D9DB8;
        }

        .hero-sub {
          font-size: clamp(0.85rem, 1.1vw, 1.05rem);
          color: #5a756e;
          line-height: 1.65;
          margin: 0 0 clamp(1.25rem, 3vh, 2rem);
          max-width: 420px;
        }

        .hero-cta {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-bottom: clamp(1.5rem, 4vh, 2.5rem);
        }

        .btn-teal {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: #0D9DB8;
          color: white;
          font-weight: 600;
          font-size: clamp(0.8rem, 1vw, 0.95rem);
          padding: clamp(0.6rem, 1.2vh, 0.8rem) clamp(1.1rem, 1.8vw, 1.5rem);
          border-radius: 999px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.18s, transform 0.15s;
          white-space: nowrap;
        }
        .btn-teal:hover { background: #0b8da6; transform: translateY(-1px); }

        .btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: white;
          color: #0f1f1c;
          font-weight: 600;
          font-size: clamp(0.8rem, 1vw, 0.95rem);
          padding: clamp(0.6rem, 1.2vh, 0.8rem) clamp(1.1rem, 1.8vw, 1.5rem);
          border-radius: 999px;
          border: 1.5px solid #d0dbd8;
          cursor: pointer;
          text-decoration: none;
          transition: border-color 0.18s, transform 0.15s;
          white-space: nowrap;
        }
        .btn-ghost:hover { border-color: #0D9DB8; transform: translateY(-1px); }

        .hero-stats {
          display: flex;
          gap: clamp(1.25rem, 3vw, 3rem);
          padding-top: clamp(1rem, 2vh, 1.5rem);
          border-top: 1px solid #d8e5e2;
          flex-wrap: wrap;
        }

        .hero-counter-num {
          font-size: clamp(1.2rem, 2vw, 1.75rem);
          font-weight: 700;
          color: #0f1f1c;
          line-height: 1;
        }

        .hero-stat-lbl {
          font-size: clamp(0.6rem, 0.75vw, 0.7rem);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #7a9990;
          margin-top: 0.25rem;
        }

        .hero-visual {
          position: relative;
          background: #1A3A5C;
          border-radius: 1.5rem;
          overflow: hidden;
          box-shadow: 0 24px 64px rgba(26,58,92,0.28);
          aspect-ratio: 4/3;
          width: 100%;
        }

        .ba {
          position: relative;
          width: 100%;
          height: 100%;
          cursor: col-resize;
          user-select: none;
          overflow: hidden;
        }

        .ba-img {
          position: absolute;
          inset: 0;
        }

        .ba-before {
          background: linear-gradient(135deg, #2a1a0a 0%, #5c3310 100%);
          z-index: 1;
        }

        .ba-after {
          background: linear-gradient(135deg, #1A3A5C 0%, #0D9DB8 100%);
          z-index: 0;
        }

        .ba-after-inner {
          position: absolute;
          inset: 15%;
          background: linear-gradient(135deg, #c8964a 0%, #e0b87a 100%);
          border-radius: 0.5rem;
          opacity: 0.85;
        }

        .ba-tag {
          position: absolute;
          top: clamp(0.5rem, 1vw, 0.875rem);
          background: white;
          border-radius: 999px;
          padding: 0.25rem 0.75rem;
          font-size: clamp(0.6rem, 0.75vw, 0.72rem);
          font-weight: 700;
          color: #0f1f1c;
          z-index: 10;
          letter-spacing: 0.04em;
        }
        .ba-tag.left { left: clamp(0.5rem, 1vw, 0.875rem); }
        .ba-tag.right {
          right: clamp(0.5rem, 1vw, 0.875rem);
          background: #0f1f1c;
          color: white;
        }

        .ba-handle {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 2px;
          background: white;
          z-index: 10;
          transform: translateX(-50%);
          pointer-events: none;
        }

        .ba-handle-knob {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: clamp(2rem, 3vw, 2.5rem);
          height: clamp(2rem, 3vw, 2.5rem);
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: clamp(0.7rem, 1vw, 0.9rem);
          box-shadow: 0 2px 12px rgba(0,0,0,0.2);
          color: #0f1f1c;
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .hero-container {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            padding-top: 13vh;
          }
          .hero-sub { max-width: 100%; }
          .hero-cta { flex-direction: column; align-items: flex-start; }
          .hero-visual { aspect-ratio: 3/2 !important; }
        }
      `}</style>

      <div className="hero-outer">
        <div className="hero-sticky">
          <div className="hero-container">

            {/* LEFT: text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="hero-eyebrow">
                <span className="dot" /> AI interior design · beta
              </div>

              <h1 className="hero-h1">
                Design your dream room in <em>30 seconds</em>
              </h1>

              <p className="hero-sub">
                Pick a wood type, color palette, and furniture style. DecoMind generates
                photoreal layouts you can walk through in 3D before you buy a single thing.
              </p>

              <div className="hero-cta">
                <button className="btn-teal">Start designing — free <span>→</span></button>
                <button className="btn-ghost">Browse gallery</button>
              </div>

              <div className="hero-stats">
                <div>
                  <Counter to={12} suffix="k+" />
                  <div className="hero-stat-lbl">Designs generated</div>
                </div>
                <div>
                  <Counter to={4.8} decimals={1} suffix="★" />
                  <div className="hero-stat-lbl">User rating</div>
                </div>
                <div>
                  <Counter to={100} suffix="+" />
                  <div className="hero-stat-lbl">Style combos</div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: before/after slider */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
            >
              <BeforeAfterSlider />
            </motion.div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
