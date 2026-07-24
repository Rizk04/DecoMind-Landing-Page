"use client";
import { motion } from "framer-motion";
import React from "react";

function Counter({ to, suffix = "", decimals = 0 }: { to: number; suffix?: string; decimals?: number }) {
  const [val, setVal] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const started = React.useRef(false);

  React.useEffect(() => {
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
    <div ref={ref} className="desc-counter-num">
      {val.toFixed(decimals)}{suffix}
    </div>
  );
}

const Description = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&display=swap');

        .desc-outer {
          min-height: 100vh;
          height: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
          padding: clamp(2rem, 6vh, 5rem) clamp(1.5rem, 6vw, 5rem);
        }

        .desc-outer::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 60% 60% at 70% 50%, rgba(212,235,232,0.55) 0%, transparent 70%),
            radial-gradient(ellipse 50% 70% at 10% 80%, rgba(240,214,220,0.45) 0%, transparent 65%),
            #f0f4f3;
          z-index: 0;
        }

        .desc-inner {
          position: relative;
          z-index: 1;
          max-width: 760px;
          width: 100%;
          margin: 0 auto;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: clamp(1.25rem, 3vh, 2rem);
        }

        .desc-eyebrow {
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
          box-shadow: 0 1px 4px rgba(0,0,0,0.05);
        }

        .desc-eyebrow .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #0D9DB8;
          display: inline-block;
          flex-shrink: 0;
        }

        .desc-h1 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2.2rem, 5vw, 4.5rem);
          font-weight: 700;
          line-height: 1.1;
          color: #0f1f1c;
          margin: 0;
        }

        .desc-h1 em {
          font-style: italic;
          color: #0D9DB8;
        }

        .desc-sub {
          font-size: clamp(0.9rem, 1.2vw, 1.1rem);
          color: #5a756e;
          line-height: 1.65;
          max-width: 560px;
          margin: 0;
        }

        .desc-cta {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          justify-content: center;
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

        .desc-stats {
          display: flex;
          gap: clamp(1.5rem, 4vw, 4rem);
          padding-top: clamp(1rem, 2vh, 1.5rem);
          border-top: 1px solid #d8e5e2;
          flex-wrap: wrap;
          justify-content: center;
          width: 100%;
          max-width: 560px;
        }

        .desc-counter-num {
          font-size: clamp(1.4rem, 2.5vw, 2rem);
          font-weight: 700;
          color: #0f1f1c;
          line-height: 1;
        }

        .desc-stat-lbl {
          font-size: clamp(0.6rem, 0.75vw, 0.7rem);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #7a9990;
          margin-top: 0.25rem;
        }

        @media (max-width: 768px) {
          .desc-outer {
            padding: 2rem 1.25rem;
            min-height: unset;
          }
          .desc-cta {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>

      <div className="desc-outer">
        <motion.div
          className="desc-inner"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } }}
          >
            <span className="desc-eyebrow">
              <span className="dot" /> Our story
            </span>
          </motion.div>

          <motion.h1
            className="desc-h1"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } } }}
          >
            About <em>DecoMind</em>
          </motion.h1>

          <motion.p
            className="desc-sub"
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } }}
          >
            We're building the future of interior design — one room at a time.
            AI-powered visualization that turns your vision into a space you can
            walk through, in seconds.
          </motion.p>

          <motion.div
            className="desc-cta"
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } } }}
          >
            <button className="btn-teal">Try it free <span>→</span></button>
            <button className="btn-ghost">Our values</button>
          </motion.div>

          <motion.div
            className="desc-stats"
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } } }}
          >
            <div>
              <Counter to={12} suffix="k+" />
              <div className="desc-stat-lbl">Designs generated</div>
            </div>
            <div>
              <Counter to={36} />
              <div className="desc-stat-lbl">Style combinations</div>
            </div>
            <div>
              <Counter to={7} />
              <div className="desc-stat-lbl">Room categories</div>
            </div>
            <div>
              <Counter to={4.8} decimals={1} suffix="★" />
              <div className="desc-stat-lbl">User rating</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Description;
