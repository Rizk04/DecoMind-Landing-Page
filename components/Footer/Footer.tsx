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
    padding: clamp(3rem, 6vh, 5rem) 0 0;
  }

  .footer-container {
    max-width: 72rem;
    margin: 0 auto;
    padding: 0 clamp(1.5rem, 6vw, 5rem);
  }

  .footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: clamp(2rem, 4vw, 4rem);
    padding-bottom: clamp(2rem, 4vh, 3rem);
    border-bottom: 1px solid rgba(15,31,28,0.1);
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
    margin-right: 0.6rem;
    vertical-align: middle;
  }

  .footer-brand-text {
    font-size: 1.1rem;
    font-weight: 700;
    color: #0f1f1c;
    vertical-align: middle;
  }

  .footer-brand-desc {
    margin-top: 0.875rem;
    font-size: clamp(0.8rem, 0.95vw, 0.9rem);
    line-height: 1.65;
    color: #6d817b;
    max-width: 260px;
  }

  .footer-col h4 {
    font-size: clamp(0.75rem, 0.9vw, 0.85rem);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #0f1f1c;
    margin: 0 0 1rem;
  }

  .footer-col ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .footer-col ul li a {
    font-size: clamp(0.8rem, 0.95vw, 0.9rem);
    color: #6d817b;
    text-decoration: none;
    transition: color 0.15s;
  }

  .footer-col ul li a:hover {
    color: #0D9DB8;
  }

  .footer-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: clamp(1.25rem, 2.5vh, 1.75rem) 0;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .footer-copy {
    font-size: clamp(0.75rem, 0.9vw, 0.85rem);
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
      grid-template-columns: 1fr 1fr !important;
      gap: 2rem !important;
    }

    .footer-brand-col {
      grid-column: 1 / -1;
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

            {/* Brand */}
            <div className="footer-col footer-brand-col">
              <div>
                <span className="footer-brand-mark">D</span>
                <span className="footer-brand-text">DecoMind</span>
              </div>
              <p className="footer-brand-desc">
                AI-powered interior design for homeowners. Design, visualize, and build your dream space — no experience needed.
              </p>
            </div>

            {/* Product */}
            <div className="footer-col">
              <h4>Product</h4>
              <ul>
                <li><Link href="/#features">Features</Link></li>
                <li><Link href="/#gallery">Gallery</Link></li>
                <li><Link href="/#showcase">3D Viewer</Link></li>
                <li><Link href="/">Pricing</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="footer-col">
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Cookies</a></li>
              </ul>
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
