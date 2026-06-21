"use client";

import React, { useEffect, useState } from "react";
import Logo from "@/components/Helper/Logo";
import { Navlinks } from "../constant/Navlinks";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      else setNavBg(false);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className={`text-lg sticky top-0 z-50 w-full h-[12vh] transition-all duration-200 ${
        navBg ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        <div>
          <div className="lg:hidden">
            <Logo />
          </div>
          <div className="hidden lg:block">
            <span className="text-2xl font-semibold">Deco</span>
            <span className="text-2xl font-semibold text-[#1A3A5C]">Mind</span>
          </div>
        </div>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center space-x-10">
          {Navlinks.map((link) => (
            <Link
              href={link.url}
              key={link.id}
              className="text-black hover:text-[#0D9DB8] font-medium transition-all duration-100"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu */}
        <div className="flex items-center space-x-4 lg:hidden">
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
