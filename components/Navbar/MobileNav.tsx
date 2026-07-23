"use client";
import React, { useEffect } from "react";
import { Navlinks } from "../Home/constant/Navlinks";
import Link from "next/link";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = showNav ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [showNav]);

  return (
    <>
      <style>{`
        .mobile-nav-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.5);
          z-index: 998;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s;
        }
        .mobile-nav-overlay.open {
          opacity: 1;
          pointer-events: auto;
        }
        .mobile-nav-drawer {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: min(80vw, 320px);
          background: white;
          z-index: 999;
          display: flex;
          flex-direction: column;
          padding: 2rem 1.5rem;
          gap: 0.25rem;
          transform: translateX(100%);
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
          box-shadow: -8px 0 32px rgba(0,0,0,0.12);
        }
        .mobile-nav-drawer.open {
          transform: translateX(0);
        }
        .mobile-nav-brand {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 2rem;
        }
        .mobile-nav-brand-mark {
          width: 1.75rem;
          height: 1.75rem;
          background: #1A3A5C;
          border-radius: 0.4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 800;
          font-size: 0.9rem;
        }
        .mobile-nav-brand-text {
          font-size: 1.1rem;
          font-weight: 700;
          color: #0f1f1c;
        }
        .mobile-nav-link {
          display: block;
          font-size: 1.05rem;
          font-weight: 500;
          color: #3d5a52;
          text-decoration: none;
          padding: 0.75rem 0;
          border-bottom: 1px solid #eef2f1;
          transition: color 0.15s;
        }
        .mobile-nav-link:hover { color: #0D9DB8; }
        .mobile-nav-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          background: #1A3A5C;
          color: white;
          font-weight: 600;
          font-size: 0.95rem;
          padding: 0.8rem 1.5rem;
          border-radius: 999px;
          text-decoration: none;
          margin-top: 1.5rem;
          transition: background 0.18s;
        }
        .mobile-nav-cta:hover { background: #0D9DB8; }
        .mobile-nav-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: #f0f4f3;
          border: none;
          border-radius: 50%;
          width: 2rem;
          height: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1rem;
          color: #0f1f1c;
          transition: background 0.15s;
        }
        .mobile-nav-close:hover { background: #e0e8e6; }
      `}</style>

      {/* Overlay */}
      <div
        className={`mobile-nav-overlay ${showNav ? "open" : ""}`}
        onClick={closeNav}
      />

      {/* Drawer */}
      <div className={`mobile-nav-drawer ${showNav ? "open" : ""}`}>
        <button className="mobile-nav-close" onClick={closeNav} aria-label="Close menu">
          ✕
        </button>

        <div className="mobile-nav-brand">
          <div className="mobile-nav-brand-mark">D</div>
          <span className="mobile-nav-brand-text">DecoMind</span>
        </div>

        {Navlinks.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className="mobile-nav-link"
            onClick={closeNav}
          >
            {link.label}
          </Link>
        ))}

        <Link href="/" className="mobile-nav-cta" onClick={closeNav}>
          Start designing <span>→</span>
        </Link>
      </div>
    </>
  );
};

export default MobileNav;
