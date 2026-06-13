import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  description: string;
  Icon: string;
};

const Card = ({ title, description, Icon }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white shadow-sm rounded-xl hover:shadow-lg px-6 py-6 hover:scale-105 transition-all duration-200 text-center w-full md:w-64 lg:w-72 min-h-[35vh] md:min-h-[40vh]">
      <Image
        src={Icon}
        alt="icon"
        width={50}
        height={50}
        className="md:w-[70px] md:h-[70px] w-[50px] h-[50px]"
      />
      <div className="text-center text-black font-medium mt-4">
        <h1 className="text-lg font-medium text-black min-h-14 flex items-center justify-center text-center">
          {title}
        </h1>
        <p className="text-sm text-gray-500 my-2">{description}</p>
      </div>
    </div>
  );
};

export default Card;