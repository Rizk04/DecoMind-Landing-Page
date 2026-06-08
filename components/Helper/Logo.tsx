import Image from "next/image";
import React from "react";
import { FaTasks } from "react-icons/fa";

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <Image
        alt={"Logo"}
        src={"/Assets/Logo/Logo.png"}
        height={120}
        width={120}
      ></Image>
    </div>
  );
};

export default Logo;
