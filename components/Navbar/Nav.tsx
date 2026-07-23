"use client";
import React, { useEffect, useState } from "react";
import { Navlinks } from "../Home/constant/Navlinks";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

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
        }
        .nav-brand-text {
          font-size: clamp(1rem, 1.3vw, 1.2rem);
          font-weight: 700;
          color: #0f1f1c;
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
        }
        .nav-links a:hover { color: #0D9DB8; }
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
        }
        .nav-cta:hover { background: #0D9DB8 !important; transform: translateY(-1px); }
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
          <Link href="/" className="nav-cta nav-cta-desktop">
            Start designing <span>→</span>
          </Link>

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
    </>
  );
};

export default Nav;
