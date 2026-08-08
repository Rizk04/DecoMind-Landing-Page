import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <style>{`
        .footer {
          background: #f8faf9;
          color: #5f716c;
          min-height: 100svh;
          display: flex;
          flex-direction: column;
          padding: clamp(2.5rem, 5vh, 4rem) 0 clamp(1.5rem, 3vh, 2.5rem);
        }

        .footer-container {
          max-width: 72rem;
          width: 100%;
          margin: 0 auto;
          padding: 0 clamp(1.5rem, 6vw, 5rem);
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .footer-main {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: clamp(2rem, 6vh, 5rem) 0;
          border-bottom: 1px solid rgba(15,31,28,0.1);
          width: 100%;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
        }

        .footer-brand-mark {
          width: clamp(2.75rem, 3.5vw, 3.25rem);
          height: clamp(2.75rem, 3.5vw, 3.25rem);
          background: #0D9DB8;
          border-radius: 0.55rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 800;
          font-size: clamp(1.3rem, 1.8vw, 1.6rem);
          flex-shrink: 0;
        }

        .footer-brand-text {
          font-size: clamp(1.75rem, 2.8vw, 2.4rem);
          font-weight: 700;
          color: #0f1f1c;
        }

        .footer-brand-desc {
          margin-top: 1.25rem;
          font-size: clamp(1.05rem, 1.4vw, 1.3rem);
          line-height: 1.7;
          color: #6d817b;
          max-width: 560px;
        }

        .footer-links {

          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(1.5rem, 3vw, 3rem);
          margin-top: 2rem;
          flex-wrap: wrap;
        }

        .footer-links a {
  font-size: clamp(1rem, 1.2vw, 1.15rem);
  color: #6d817b;
  text-decoration: none;
  transition: color 0.15s;
  font-weight: 700;  /* add this */
}

        .footer-links a:hover {
          color: #0D9DB8;
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: clamp(1.25rem, 2.5vh, 2rem);
          gap: 1rem;
          flex-wrap: wrap;
          width: 100%;
        }

        .footer-copy {
          font-size: clamp(0.72rem, 0.9vw, 0.85rem);
          color: #8a9b96;
        }

        .footer-socials {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .footer-socials a {
          color: #8a9b96;
          font-size: 1.35rem;
          transition: color 0.15s;
          display: flex;
        }

        .footer-socials a:hover {
          color: #0D9DB8;
        }

        @media (max-width: 768px) {
          .footer {
            min-height: 0;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: center;
            gap: 0.75rem;
            text-align: center;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-main">
            <div className="footer-brand">
              <span className="footer-brand-mark">D</span>
              <span className="footer-brand-text">DecoMind</span>
            </div>
            <p className="footer-brand-desc">
              AI-powered interior design for homeowners. Design, visualize, and build your dream space — no experience needed.
            </p>
            <nav className="footer-links">
              <Link href="/services">Services</Link>
              <Link href="/about">About</Link>
              <Link href="/contactus">Contact</Link>
              <Link href="/gallery">Gallery</Link>
            </nav>
          </div>

          <div className="footer-bottom">
            <div className="footer-copy">
              © 2026 Optima Solutions. All rights reserved.
            </div>
            <div className="footer-socials">
              <a href="http://www.linkedin.com/company/optima-solutions-cloud" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <BsLinkedin />
              </a>
              <a href="https://www.facebook.com/optima.solutions.cloud/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <BsFacebook />
              </a>
              <a href="https://www.instagram.com/optima.solutions.cloud/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <BsInstagram />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;