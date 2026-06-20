import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  description: string;
  Icon: string;
};

const Card = ({ title, description, Icon }: Props) => {
  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .card-item {
            width: 80vw !important;
            flex: 0 0 auto !important;
            scroll-snap-align: center !important;
          }
        }
      `}</style>

      <div
        className="card-item flex flex-col items-center justify-center bg-white shadow-sm rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200 text-center w-full md:w-64 lg:w-72"
        style={{
          padding: "clamp(0.75rem, 2vw, 1.5rem)",
          minHeight: "clamp(200px, 30vh, 40vh)",
        }}
      >
        <Image
          src={Icon}
          alt="icon"
          width={70}
          height={70}
          style={{ width: "clamp(36px, 4vw, 70px)", height: "clamp(36px, 4vw, 70px)" }}
        />
        <div className="text-center text-black font-medium mt-3">
          <h1
            className="font-medium text-black flex items-center justify-center text-center"
            style={{
              fontSize: "clamp(0.85rem, 1.3vw, 1.125rem)",
              minHeight: "clamp(2rem, 5vh, 3.5rem)",
            }}
          >
            {title}
          </h1>
          <p className="text-gray-500" style={{ fontSize: "clamp(0.7rem, 1vw, 0.875rem)", margin: "0.5rem 0" }}>
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
