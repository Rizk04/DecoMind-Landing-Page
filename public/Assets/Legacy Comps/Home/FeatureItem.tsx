"use client";
import Lottie from "lottie-react";
import React from "react";

interface Props {
  title: string;
  description: string;
  src: string;
}

const FeatureItem = ({ title, src, description }: Props) => {
  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .feature-item-lottie {
            width: 60px !important;
            height: 60px !important;
          }
          .feature-item-card {
            padding: 0.75rem !important;
            max-width: 100% !important;
            flex-direction: row !important;
            align-items: flex-start !important;
            gap: 0.75rem !important;
          }
          .feature-item-title {
            font-size: 0.85rem !important;
            min-height: unset !important;
            margin-top: 0 !important;
            justify-content: flex-start !important;
            text-align: left !important;
          }
          .feature-item-desc {
            font-size: 0.7rem !important;
            margin-top: 0.25rem !important;
            padding-bottom: 0 !important;
          }
        }
      `}</style>

      <div
        className="feature-item-card flex flex-col items-center mx-auto justify-center bg-white rounded-xl shadow-md hover:scale-105 transition-all duration-200 w-full max-w-md"
        style={{ padding: "clamp(0.5rem, 2vh, 1.5rem) clamp(0.75rem, 2vw, 1.25rem)" }}
      >
        <Lottie
          animationData={src}
          loop={true}
          className="feature-item-lottie"
          style={{ width: "clamp(80px, 12vw, 220px)", height: "clamp(80px, 12vw, 220px)", flexShrink: 0 }}
        />
        <div className="w-full">
          <h1
            className="feature-item-title font-medium text-black flex items-center justify-center text-center"
            style={{
              fontSize: "clamp(0.85rem, 1.4vw, 1.25rem)",
              marginTop: "clamp(0.25rem, 1vh, 1rem)",
              minHeight: "clamp(1.5rem, 4vh, 3.5rem)",
            }}
          >
            {title}
          </h1>
          <p
            className="feature-item-desc text-left text-gray-500"
            style={{
              fontSize: "clamp(0.65rem, 1vw, 0.875rem)",
              paddingBottom: "clamp(0.5rem, 1.5vh, 1.25rem)",
              marginTop: "clamp(0.25rem, 0.5vh, 0.5rem)",
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default FeatureItem;
