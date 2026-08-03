"use client";

import React from "react";
import Footer from "@/components/Footer/Footer";

const ITEMS = [
  { id: 1, color: "#C8D8D4", label: "Living Room" },
  { id: 2, color: "#B8C9C4", label: "Bedroom" },
  { id: 3, color: "#D4E0DC", label: "Kitchen" },
  { id: 4, color: "#A8BCBA", label: "Bathroom" },
  { id: 5, color: "#BFD0CB", label: "Office" },
  { id: 6, color: "#C4D4D0", label: "Dining Room" },
  { id: 7, color: "#B0C4BF", label: "Hallway" },
  { id: 8, color: "#CDDBD7", label: "Balcony" },
  { id: 9, color: "#A4BAB6", label: "Studio" },
  { id: 10, color: "#D0DEDA", label: "Loft" },
  { id: 11, color: "#BBC8C5", label: "Nursery" },
  { id: 12, color: "#C6D6D2", label: "Garage" },
];

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
          max-width: 72rem;
          margin: 0 auto;
          width: 100%;
          padding: clamp(2rem, 5vh, 4rem) clamp(1.5rem, 6vw, 5rem) 2rem;
          flex: 1 0 auto;
        }

        /* Footer wrapper – full width, sits outside the max-width constraint */
        .gal-footer-wrapper {
          width: 100%;
          flex-shrink: 0;
          margin-top: clamp(2rem, 4vh, 3rem);
        }

        .gal-header {
          margin-bottom: clamp(1.5rem, 3vh, 2.5rem);
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

        .gal-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }

        .gal-item {
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.07);
          background: white;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .gal-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.12);
        }

        .gal-item-img {
          width: 100%;
          aspect-ratio: 4/3;
        }

        .gal-item-label {
          padding: 0.6rem 0.875rem;
          font-size: 0.8rem;
          font-weight: 600;
          color: #3d5a52;
        }

        @media (max-width: 1024px) {
          .gal-grid { grid-template-columns: repeat(3, 1fr); }
        }

        @media (max-width: 768px) {
          .gal-outer {
            position: static !important;
            height: auto !important;
          }
          .gal-grid { grid-template-columns: repeat(2, 1fr); }
          .gal-inner {
            padding-bottom: 1rem;
          }
        }

        @media (max-width: 480px) {
          .gal-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="gal-outer">
        <div className="gal-inner">
          <div className="gal-header">
            <div className="gal-eyebrow"><span className="dot" /> Gallery</div>
            <h1 className="gal-title">AI-designed <em>spaces</em></h1>
            <p className="gal-sub">Browse rooms designed with DecoMind.</p>
          </div>

          <div className="gal-grid">
            {ITEMS.map(({ id, color, label }) => (
              <div key={id} className="gal-item">
                <div className="gal-item-img" style={{ background: color }} />
                <div className="gal-item-label">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer – full width, outside the max-width container */}
        <div className="gal-footer-wrapper">
          <Footer />
        </div>
      </div>
    </>
  );
}