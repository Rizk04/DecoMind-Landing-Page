"use client";
import Lottie from "lottie-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Props {
  title: string;
  description: string;
  src: string;
}

const FeatureItem = ({ title, src, description }: Props) => {
  const [lottieSize, setLottieSize] = useState(180);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setLottieSize(280);
      } else {
        setLottieSize(180);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
      className={`flex flex-col items-center mx-5 justify-center bg-white rounded-xl shadow-md px-5 hover:scale-105 transition-all duration-200 w-full max-w-md`}
    >
      <div>
        {/* <Image src={src} width={130} height={130} alt='smth' className=''></Image> */}

        <Lottie
          animationData={src}
          loop={true}
          style={{ width: lottieSize, height: lottieSize }}
        />
      </div>
      <div className="text-4xl text-black font-medium">
        <h1 className="text-xl font-medium text-black mt-4 min-h-14 flex items-center justify-center text-center">
          {title}
        </h1>
        <p className="text-sm text-left text-gray-500 pb-5">{description}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
