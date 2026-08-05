"use client";

import React, { useRef, useEffect } from "react";
import Footer from "@/components/Footer/Footer";

// Simple hash function for deterministic colors
function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0; // Convert to 32-bit integer
  }
  return Math.abs(hash);
}

function generateColor(category: string, index: number): string {
  const seed = `${category}-${index}`;
  const hue = hashString(seed) % 360;
  return `hsl(${hue}, 60%, 80%)`;
}

const CATEGORIES = [
  "Bedroom",
  "Living Room",
  "Kitchen",
  "Bathroom",
  "Office",
  "Dining Room",
  "Hallway",
  "Balcony",
];

const ITEMS_PER_ROW = 10;

const data = CATEGORIES.map((name) => ({
  name,
  items: Array.from({ length: ITEMS_PER_ROW }, (_, i) => ({
    id: `${name}-${i}`,
    color: generateColor(name, i),
  })),
}));

// Footer kept as its own component, just inlined into this single file.


// Auto-scrolling row with a center focal point.
// - No scroll buttons.
// - Continuously scrolls and loops seamlessly (items are duplicated).
// - The card nearest the horizontal center scales up; cards toward the
//   edges scale down and fade, so the middle is always the focus.
const ScrollRow = ({
  title,
  items,
  direction = 1,
}: {
  title: string;
  items: { id: string; color: string }[];
  direction?: 1 | -1;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  // Duplicate the items so we can loop endlessly without a visible seam.
  const loopItems = [...items, ...items, ...items];

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Speed in pixels per second.
    const SPEED = prefersReduced ? 0 : 40;

    // Start in the middle copy so we can scroll either direction and loop.
    const setStart = () => {
      el.scrollLeft = el.scrollWidth / 3;
    };
    setStart();

    // Scale each card based on its distance from the row's center.
    const applyFocus = () => {
      const rect = el.getBoundingClientRect();
      const center = rect.left + rect.width / 2;
      const maxDist = rect.width / 2;
      const cards = el.querySelectorAll<HTMLElement>(".card");
      cards.forEach((card) => {
        const cRect = card.getBoundingClientRect();
        const cCenter = cRect.left + cRect.width / 2;
        const dist = Math.abs(cCenter - center);
        const t = Math.min(dist / maxDist, 1);
        const scale = 1 - t * 0.42; // center = 1, edges = ~0.58
        const opacity = 1 - t * 0.55;
        card.style.transform = `scale(${scale})`;
        card.style.opacity = `${opacity}`;
        card.style.zIndex = `${Math.round((1 - t) * 100)}`;
      });
    };

    let last = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;

      if (!pausedRef.current && SPEED > 0) {
        el.scrollLeft += SPEED * dt * direction;
      }

      const third = el.scrollWidth / 3;
      // Wrap around within the middle copy for a seamless loop.
      if (el.scrollLeft >= third * 2) {
        el.scrollLeft -= third;
      } else if (el.scrollLeft <= 0) {
        el.scrollLeft += third;
      }

      applyFocus();
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    window.addEventListener("resize", applyFocus);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", applyFocus);
    };
  }, [direction]);

  return (
    <section className="category-row">
      <h2 className="category-title">{title}</h2>
      <div className="scroll-wrapper">
        <div
          className="scroll-container"
          ref={containerRef}
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
          onTouchStart={() => (pausedRef.current = true)}
          onTouchEnd={() => (pausedRef.current = false)}
        >
          {loopItems.map(({ id, color }, i) => (
            <div
              key={`${id}-${i}`}
              className="card"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default function GalleryPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&display=swap');

        .gal-outer, .gal-outer *, .gal-outer *::before, .gal-outer *::after {
          box-sizing: border-box;
        }

        .gal-outer {
          position: fixed;
          top: 0;
          left: 0; right: 0; bottom: 0;
          overflow-x: hidden;
          overflow-y: scroll;
          background: #f0f4f3;
          color: #0f1f1c;
          display: flex;
          flex-direction: column;
        }

        .gal-inner {
          max-width: 80rem;
          margin: 0 auto;
          width: 100%;
          padding: clamp(1.5rem, 4vh, 3rem) 0 2rem;
          flex: 1 0 auto;
        }

        .gal-header {
          margin-bottom: clamp(1.5rem, 3vh, 2.5rem);
          padding: 0 clamp(1.5rem, 4vw, 4rem);
          animation: gal-fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .gal-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: white;
          border: 1px solid #dde8e5;
          border-radius: 999px;
          padding: 0.35rem 1rem;
          font-size: 0.75rem;
          color: #3d5a52;
          font-weight: 500;
          margin-bottom: 1rem;
          box-shadow: 0 1px 4px rgba(0,0,0,0.05);
        }

        .gal-eyebrow .dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #0D9DB8;
          flex-shrink: 0;
          box-shadow: 0 0 0 0 rgba(13, 157, 184, 0.5);
          animation: gal-pulse 2.4s ease-out infinite;
        }

        .gal-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(1.8rem, 3.5vw, 3rem);
          font-weight: 700;
          color: #0f1f1c;
          line-height: 1.1;
          margin: 0 0 0.5rem;
        }

        .gal-title em {
          font-style: italic;
          color: #0D9DB8;
        }

        .gal-sub {
          font-size: clamp(0.85rem, 1vw, 1rem);
          color: #6b8278;
          margin: 0;
        }

        .category-row {
          margin-bottom: 2.5rem;
          animation: gal-fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .category-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #2a4039;
          letter-spacing: -0.01em;
          margin: 0 0 0.75rem 0;
          padding: 0 clamp(1.5rem, 4vw, 4rem);
        }

        .scroll-wrapper {
          display: flex;
          align-items: center;
        }

        .scroll-container {
          display: flex;
          gap: 1.25rem;
          overflow-x: scroll;
          overflow-y: hidden;
          padding: 2rem clamp(1.5rem, 4vw, 4rem);
          flex: 1;

          /* Hide scrollbar (and its buttons) across browsers */
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scroll-container::-webkit-scrollbar {
          display: none;
          width: 0;
          height: 0;
        }
        .scroll-container::-webkit-scrollbar-button {
          display: none;
          width: 0;
          height: 0;
        }

        .card {
          flex: 0 0 200px;
          height: 260px;
          border-radius: 1.5rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          /* transform/opacity are driven per-frame by JS for the focal effect;
             the transition just smooths any resize jumps */
          transition: box-shadow 0.35s cubic-bezier(0.22, 1, 0.36, 1);
          cursor: pointer;
          will-change: transform, opacity;
        }

        .gal-footer-wrapper {
          width: 100%;
          flex-shrink: 0;
          margin-top: clamp(2rem, 4vh, 3rem);
        }

        .gal-footer {
          background: #0f1f1c;
          color: #cfe0da;
        }

        .gal-footer-inner {
          max-width: 80rem;
          margin: 0 auto;
          width: 100%;
          padding: clamp(2rem, 4vh, 3rem) clamp(1.5rem, 4vw, 4rem);
          display: flex;
          flex-wrap: wrap;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1.5rem;
        }

        .gal-footer-logo {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #fff;
        }

        .gal-footer-tagline {
          margin: 0.5rem 0 0;
          font-size: 0.9rem;
          color: #8ca79e;
        }

        .gal-footer-nav {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .gal-footer-nav a {
          color: #cfe0da;
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.2s ease;
        }

        .gal-footer-nav a:hover {
          color: #0D9DB8;
        }

        .gal-footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.08);
          padding: 1rem clamp(1.5rem, 4vw, 4rem);
          font-size: 0.8rem;
          color: #6b8278;
          text-align: center;
        }

        @keyframes gal-fade-up {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes gal-pulse {
          0% { box-shadow: 0 0 0 0 rgba(13, 157, 184, 0.5); }
          70% { box-shadow: 0 0 0 6px rgba(13, 157, 184, 0); }
          100% { box-shadow: 0 0 0 0 rgba(13, 157, 184, 0); }
        }

        @media (max-width: 768px) {
          .gal-outer {
            position: static !important;
            height: auto !important;
          }
          .card {
            flex: 0 0 160px;
            height: 210px;
          }
        }

        @media (max-width: 480px) {
          .card {
            flex: 0 0 130px;
            height: 170px;
          }
          .scroll-container {
            gap: 0.75rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .gal-header,
          .category-row {
            animation: none;
          }
          .gal-eyebrow .dot {
            animation: none;
          }
        }
      `}</style>

      <div className="gal-outer">
        <div className="gal-inner">
          <div className="gal-header">
            <div className="gal-eyebrow"><span className="dot" /> Gallery</div>
            <h1 className="gal-title">AI&#8209;designed <em>spaces</em></h1>
            <p className="gal-sub">Each row scrolls on its own &mdash; the card in the center is the star.</p>
          </div>

          {data.map(({ name, items }, i) => (
            <ScrollRow
              key={name}
              title={name}
              items={items}
              direction={i % 2 === 0 ? 1 : -1}
            />
          ))}
        </div>

        <div className="gal-footer-wrapper">
          <Footer />
        </div>
      </div>
    </>
  );
}
