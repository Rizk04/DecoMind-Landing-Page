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
          padding: clamp(2.5rem, 5vh, 4rem) 0 0;
        }

        .footer-container {
          max-width: 72rem;
          margin: 0 auto;
          padding: 0 clamp(1.5rem, 6vw, 5rem);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 4fr 1.5fr; /* brand gets more width, navigate on the right */
          gap: clamp(2rem, 4vw, 4rem);
          padding-bottom: clamp(1.5rem, 3vh, 2.5rem);
          border-bottom: 1px solid rgba(15,31,28,0.1);
          align-items: start;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .footer-brand-mark {
          width: 2rem;
          height: 2rem;
          background: #0D9DB8;
          border-radius: 0.45rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 800;
          font-size: 1rem;
          flex-shrink: 0;
        }

        .footer-brand-text {
          font-size: 1.1rem;
          font-weight: 700;
          color: #0f1f1c;
        }

        .footer-brand-desc {
          margin-top: 0.6rem;
          font-size: clamp(0.85rem, 1vw, 1rem);
          line-height: 1.7;
          color: #6d817b;
          max-width: 460px; /* much wider for more breathing room */
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          text-align: right; /* align to the right since it's at the end */
        }

        .footer-links h4 {
          font-size: clamp(0.7rem, 0.85vw, 0.8rem);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #0f1f1c;
          margin: 0 0 0.5rem;
        }

        .footer-links a {
          font-size: clamp(0.85rem, 1vw, 0.95rem);
          color: #6d817b;
          text-decoration: none;
          transition: color 0.15s;
          line-height: 1.5;
        }

        .footer-links a:hover {
          color: #0D9DB8;
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: clamp(1rem, 2vh, 1.5rem) 0;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .footer-copy {
          font-size: clamp(0.7rem, 0.85vw, 0.8rem);
          color: #8a9b96;
        }

        .footer-socials {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .footer-socials a {
          color: #8a9b96;
          font-size: 1.25rem;
          transition: color 0.15s;
          display: flex;
        }

        .footer-socials a:hover {
          color: #0D9DB8;
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .footer-brand-desc {
            max-width: 100%;
          }
          .footer-links {
            text-align: left;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Brand – takes most of the space */}
            <div>
              <div className="footer-brand">
                <span className="footer-brand-mark">D</span>
                <span className="footer-brand-text">DecoMind</span>
              </div>
              <p className="footer-brand-desc">
                AI-powered interior design for homeowners. Design, visualize, and build your dream space — no experience needed.
              </p>
            </div>

            {/* Navigate – pushed to the far right */}
            <div className="footer-links">
              <h4>Navigate</h4>
              <Link href="/services">Services</Link>
              <Link href="/about">About</Link>
              <Link href="/contactus">Contact</Link>
              <Link href="/gallery">Gallery</Link>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="footer-bottom">
            <div className="footer-copy">
              © 2026 Optima Solutions. All rights reserved.
            </div>
            <div className="footer-socials">
              <a
                href="http://www.linkedin.com/company/optima-solutions-cloud"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <BsLinkedin />
              </a>
              <a
                href="https://www.facebook.com/optima.solutions.cloud/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <BsFacebook />
              </a>
              <a
                href="https://www.instagram.com/optima.solutions.cloud/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
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