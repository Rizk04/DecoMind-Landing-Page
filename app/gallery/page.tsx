"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
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

// ScrollRow component with arrows (unchanged)
const ScrollRow = ({ title, items }: { title: string; items: { id: string; color: string }[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = (direction: "left" | "right") => {
    const el = containerRef.current;
    if (!el) return;
    const card = el.querySelector(".card") as HTMLElement;
    if (!card) return;
    const cardWidth = card.offsetWidth + 20; // card width + gap
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
    el.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="category-row">
      <h2 className="category-title">{title}</h2>
      <div className="scroll-wrapper">
        {canScrollLeft && (
          <button className="scroll-arrow" onClick={() => scroll("left")} aria-label="Scroll left">
            ‹
          </button>
        )}
        <div className="scroll-container" ref={containerRef}>
          {items.map(({ id, color }) => (
            <div key={id} className="card" style={{ backgroundColor: color }} />
          ))}
        </div>
        {canScrollRight && (
          <button className="scroll-arrow" onClick={() => scroll("right")} aria-label="Scroll right">
            ›
          </button>
        )}
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
          top: 12vh;
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
          padding: clamp(1.5rem, 4vh, 3rem) clamp(1.5rem, 4vw, 4rem) 2rem;
          flex: 1 0 auto;
        }

        .gal-footer-wrapper {
          width: 100%;
          flex-shrink: 0;
          margin-top: clamp(2rem, 4vh, 3rem);
        }

        .gal-header {
          margin-bottom: clamp(1.5rem, 3vh, 2.5rem);
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
        }

        .scroll-wrapper {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .scroll-container {
          display: flex;
          gap: 1.25rem;
          overflow-x: auto;
          overflow-y: hidden;
          padding: 0.5rem 0.25rem 1.5rem 0.25rem;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          scroll-snap-type: x proximity;
          flex: 1;

          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scroll-container::-webkit-scrollbar {
          display: none;
        }

        .card {
          flex: 0 0 200px;
          height: 260px;
          border-radius: 1.5rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s cubic-bezier(0.22, 1, 0.36, 1);
          scroll-snap-align: start;
          cursor: pointer;
        }

        .card:hover {
          transform: scale(1.04) translateY(-4px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.15);
        }

        .card:active {
          transform: scale(0.98) translateY(-2px);
          transition-duration: 0.1s;
        }

        .scroll-arrow {
          flex-shrink: 0;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255,255,255,0.85);
          border: none;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          font-size: 2rem;
          line-height: 1;
          color: #2a4039;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.25s cubic-bezier(0.22, 1, 0.36, 1), transform 0.25s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.25s cubic-bezier(0.22, 1, 0.36, 1);
          padding: 0;
          animation: gal-arrow-in 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .scroll-arrow:hover {
          background: white;
          transform: scale(1.08);
          box-shadow: 0 6px 18px rgba(0,0,0,0.2);
        }

        .scroll-arrow:active {
          transform: scale(0.94);
          transition-duration: 0.1s;
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

        @keyframes gal-arrow-in {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
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
          .scroll-arrow {
            width: 36px;
            height: 36px;
            font-size: 1.6rem;
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
          .scroll-arrow {
            width: 32px;
            height: 32px;
            font-size: 1.4rem;
          }
          .scroll-wrapper {
            gap: 0.4rem;
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
          .card,
          .scroll-arrow {
            transition: none;
          }
          .scroll-container {
            scroll-behavior: auto;
          }
        }
      `}</style>

      <div className="gal-outer">
        <div className="gal-inner">
          <div className="gal-header">
            <div className="gal-eyebrow"><span className="dot" /> Gallery</div>
            <h1 className="gal-title">AI‑designed <em>spaces</em></h1>
            <p className="gal-sub">Browse rooms, each row scrolls horizontally.</p>
          </div>

          {data.map(({ name, items }) => (
            <ScrollRow key={name} title={name} items={items} />
          ))}
        </div>

        <div className="gal-footer-wrapper">
          <Footer />
        </div>
      </div>
    </>
  );
}
