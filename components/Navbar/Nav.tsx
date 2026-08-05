"use client";
import React, { useEffect, useState } from "react";
import { Navlinks } from "../Home/constant/Navlinks";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";
import { usePathname } from "next/navigation";

type Props = {
  openNav: () => void;
};

// Style ticker moved out of the Hero/FeatureBar and attached directly under the navbar.
const tickerStyles = [
  "Modern",
  "Rustic",
  "Mid-Century",
  "Scandinavian",
  "Industrial",
  "Japandi",
  "Bohemian",
  "Minimalist",
  "Art Deco",
  "Coastal",
];

const Nav = ({ openNav }: Props) => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Smooth scroll to download section
  const handleScrollToDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (pathname === "/") {
      const downloadSection = document.getElementById("download");
      if (downloadSection) {
        downloadSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      window.location.href = "/#download";
    }
  };

  return (
    <>
      <style>{`
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          height: 12vh;
          transition: background 0.2s, box-shadow 0.2s;
          background: rgba(240,244,243,0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
        .nav.scrolled {
          background: rgba(255,255,255,0.95);
          box-shadow: 0 1px 0 rgba(0,0,0,0.08);
        }
        .nav-inner {
          height: 100%;
          max-width: 72rem;
          margin: 0 auto;
          padding: 0 clamp(1.25rem, 4vw, 3rem);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
        }
        .nav-brand {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          text-decoration: none;
          flex-shrink: 0;
        }
        .nav-brand-mark {
          width: 2rem;
          height: 2rem;
          background: #1A3A5C;
          border-radius: 0.45rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 800;
          font-size: 1rem;
          font-family: 'Georgia', 'Times New Roman', serif;
        }
        .nav-brand-text {
          font-size: clamp(1rem, 1.3vw, 1.2rem);
          font-weight: 700;
          color: #0f1f1c;
          font-family: 'Georgia', 'Times New Roman', serif;
          font-style: italic;
          letter-spacing: -0.02em;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: clamp(1.25rem, 2.5vw, 2.5rem);
        }
        .nav-links a {
          font-size: clamp(0.85rem, 1vw, 0.95rem);
          font-weight: 500;
          color: #3d5a52;
          text-decoration: none;
          transition: color 0.15s;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          letter-spacing: 0.02em;
          position: relative;
        }
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: #0D9DB8;
          transition: width 0.3s ease;
        }
        .nav-links a:hover::after {
          width: 100%;
        }
        .nav-links a:hover { 
          color: #0D9DB8; 
        }
        .nav-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: #1A3A5C;
          color: white !important;
          font-weight: 600;
          font-size: clamp(0.8rem, 0.95vw, 0.9rem);
          padding: 0.55rem 1.25rem;
          border-radius: 999px;
          text-decoration: none;
          transition: background 0.18s, transform 0.15s;
          white-space: nowrap;
          flex-shrink: 0;
          cursor: pointer;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          letter-spacing: 0.03em;
        }
        .nav-cta:hover { 
          background: #0D9DB8 !important; 
          transform: translateY(-1px); 
          box-shadow: 0 4px 12px rgba(13,157,184,0.3);
        }
        .nav-cta span {
          transition: transform 0.2s ease;
          display: inline-block;
        }
        .nav-cta:hover span {
          transform: translateX(3px);
        }
        .nav-burger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }
        .nav-burger span {
          display: block;
          width: 22px;
          height: 2px;
          background: #0f1f1c;
          border-radius: 2px;
          transition: all 0.2s;
        }

        /* ── Style ticker: fixed directly under the navbar, no gap ── */
        .nav-ticker-wrap {
          position: fixed;
          top: 12vh;
          left: 0;
          right: 0;
          z-index: 49;
          width: 100%;
          overflow: hidden;
          border-bottom: 1px solid #e4e9e7;
          padding: clamp(0.45rem, 1vh, 0.7rem) 0;
          background: rgba(240,244,243,0.9);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
        .nav.scrolled + .nav-ticker-wrap {
          background: rgba(255,255,255,0.95);
        }
        .nav-ticker-track {
          display: flex;
          width: max-content;
          animation: nav-ticker-scroll 28s linear infinite;
        }
        .nav-ticker-track:hover {
          animation-play-state: paused;
        }
        @keyframes nav-ticker-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .nav-ticker-item {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0 clamp(1.2rem, 2.5vw, 2.5rem);
          font-size: clamp(0.8rem, 1.1vw, 1rem);
          font-weight: 500;
          color: #3d5a52;
          white-space: nowrap;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          letter-spacing: 0.02em;
        }
        .nav-ticker-dot {
          color: #0D9DB8;
          font-size: 0.6rem;
        }

        @media (max-width: 920px) {
          .nav-links { display: none; }
          .nav-cta-desktop { display: none; }
          .nav-burger { display: flex; }
        }
      `}</style>

      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          {/* Brand */}
          <Link href="/" className="nav-brand">
            <div className="nav-brand-mark">D</div>
            <span className="nav-brand-text">DecoMind</span>
          </Link>

          {/* Desktop links */}
          <div className="nav-links">
            {Navlinks.map((link) => (
              <Link href={link.url} key={link.id}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="/#download"
            onClick={handleScrollToDownload}
            className="nav-cta nav-cta-desktop"
          >
            Start designing <span>→</span>
          </a>

          {/* Mobile burger */}
          <button
            className="nav-burger"
            onClick={openNav}
            aria-label="Open menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Style ticker sits directly under the navbar */}
      <div className="nav-ticker-wrap" aria-hidden="true">
        <div className="nav-ticker-track">
          {[...tickerStyles, ...tickerStyles].map((s, i) => (
            <span key={i} className="nav-ticker-item">
              {s}
              <span className="nav-ticker-dot">✦</span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Nav;