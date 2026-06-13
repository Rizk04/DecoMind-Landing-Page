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
    <div className="flex flex-col items-center mx-auto justify-center bg-white rounded-xl shadow-md px-5 hover:scale-105 transition-all duration-200 w-full max-w-md">
      <Lottie
        animationData={src}
        loop={true}
        className="w-36 h-36 md:w-64 md:h-64"
      />
      <div className="w-full">
        <h1 className="text-lg md:text-xl font-medium text-black mt-4 min-h-10 md:min-h-14 flex items-center justify-center text-center">
          {title}
        </h1>
        <p className="text-sm text-left text-gray-500 pb-5">{description}</p>
      </div>
    </div>
  );
};

export default FeatureItem;