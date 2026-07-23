"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const Download = () => {
  const [email, setEmail] = useState("");

  return (
    <>
      <style>{`
        .dl-outer {
          background: #f7f8f6;
          min-height: 100svh;
          height: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(2rem, 6vh, 5rem) clamp(1.5rem, 5vw, 3rem);
        }

        .dl-card {
          background: linear-gradient(135deg, #1A3A5C 0%, #152D4A 100%);
          border-radius: 2rem;
          padding: clamp(2.5rem, 6vw, 5rem) clamp(2rem, 5vw, 4rem);
          width: 100%;
          max-width: 56rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: clamp(1rem, 3vh, 2.5rem);
          text-align: center;
          box-shadow: 0 24px 80px rgba(26,58,92,0.3);
        }

        .dl-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(1.8rem, 3.5vw, 3.25rem);
          font-weight: 700;
          color: white;
          line-height: 1.15;
          margin: 0;
        }

        .dl-subtitle {
          font-size: clamp(0.85rem, 1.1vw, 1rem);
          color: #a8c4bc;
          line-height: 1.6;
          max-width: 480px;
          margin: 0;
        }

        .dl-store-row {
          display: flex;
          gap: clamp(0.75rem, 1.5vw, 1rem);
          flex-wrap: wrap;
          justify-content: center;
        }

        .dl-store-btn {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: #0d0d0d;
          color: white;
          border: none;
          border-radius: 0.875rem;
          padding: clamp(0.6rem, 1.2vh, 0.875rem) clamp(1.25rem, 2vw, 1.75rem);
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
          text-align: left;
        }

        .dl-store-btn:hover {
          background: #222;
          transform: translateY(-2px);
        }

        .dl-store-btn-sub {
          font-size: clamp(0.55rem, 0.7vw, 0.65rem);
          color: #aaa;
          line-height: 1;
        }

        .dl-store-btn-name {
          font-size: clamp(0.85rem, 1.1vw, 1rem);
          font-weight: 700;
          color: white;
          line-height: 1;
          margin-top: 0.15rem;
        }

        .dl-divider {
          display: flex;
          align-items: center;
          gap: 1rem;
          width: 100%;
          max-width: 480px;
        }

        .dl-divider-line {
          flex: 1;
          height: 1px;
          background: rgba(255,255,255,0.15);
        }

        .dl-divider-text {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.4);
        }

        .dl-email-row {
          display: flex;
          gap: 0.75rem;
          width: 100%;
          max-width: 480px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .dl-email-input {
          flex: 1;
          min-width: 200px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 0.75rem;
          padding: clamp(0.6rem, 1.2vh, 0.875rem) clamp(0.875rem, 1.5vw, 1.25rem);
          font-size: clamp(0.8rem, 1vw, 0.9rem);
          color: white;
          outline: none;
          transition: border-color 0.2s;
        }

        .dl-email-input::placeholder {
          color: rgba(255,255,255,0.35);
        }

        .dl-email-input:focus {
          border-color: #0D9DB8;
        }

        .dl-notify-btn {
          background: #0D9DB8;
          color: white;
          border: none;
          border-radius: 0.75rem;
          padding: clamp(0.6rem, 1.2vh, 0.875rem) clamp(1.25rem, 2vw, 1.5rem);
          font-size: clamp(0.8rem, 1vw, 0.9rem);
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
          white-space: nowrap;
        }

        .dl-notify-btn:hover {
          background: #0b8da6;
          transform: translateY(-1px);
        }

        @media (max-width: 768px) {
          .dl-outer {
            padding: 2rem 1.25rem;
          }
          .dl-card {
            padding: 2rem 1.5rem;
            border-radius: 1.5rem;
          }
          .dl-store-row {
            flex-direction: column;
            align-items: center;
          }
          .dl-store-btn {
            width: 100%;
            max-width: 260px;
            justify-content: center;
          }
          .dl-email-row {
            flex-direction: column;
          }
          .dl-email-input {
            min-width: unset;
            width: 100%;
          }
          .dl-notify-btn {
            width: 100%;
          }
        }
      `}</style>

      <div className="dl-outer">
        <motion.div
          className="dl-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="dl-title">Get started today</h2>

          <p className="dl-subtitle">
            Download the app, or get notified when new styles drop. No spam, just design.
          </p>

          {/* Store buttons */}
          <div className="dl-store-row">
            <button className="dl-store-btn">
              <FaApple size={24} />
              <div>
                <div className="dl-store-btn-sub">Download on the</div>
                <div className="dl-store-btn-name">App Store</div>
              </div>
            </button>
            <button className="dl-store-btn">
              <FaGooglePlay size={22} />
              <div>
                <div className="dl-store-btn-sub">Get it on</div>
                <div className="dl-store-btn-name">Google Play</div>
              </div>
            </button>
          </div>

          {/* Divider */}
          <div className="dl-divider">
            <div className="dl-divider-line" />
            <span className="dl-divider-text">or</span>
            <div className="dl-divider-line" />
          </div>

          {/* Email */}
          <div className="dl-email-row">
            <input
              className="dl-email-input"
              type="email"
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="dl-notify-btn">Notify me</button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Download;
